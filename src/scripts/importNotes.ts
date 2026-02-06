// scripts/importNotes.ts
import "dotenv/config";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import fg from "fast-glob";
import { marked } from "marked";
import {
  initializeApp,
  cert,
  getApps,
  getApp,
  App as FirebaseApp,
} from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

type PrunedDocLog = {
  id: string;
  fullPath?: string;
  title?: string;
  category?: string;
  status?: string;
  updatedAt?: unknown;
};

function envBool(name: string, fallback: boolean) {
  const v = process.env[name];
  if (v == null) return fallback;
  return v.toLowerCase() === "true";
}

function envNum(name: string, fallback: number) {
  const v = process.env[name];
  if (v == null) return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

// ---------- Config / envs ----------
const SITE_ID = (process.env.SITE_ID || "devscriptstax").trim();
const POSTS_COLLECTION = (process.env.POSTS_COLLECTION || "posts").trim();

const SA_JSON =
  process.env.FIREBASE_SERVICE_ACCOUNT_JSON ||
  (fs.existsSync(path.resolve("serviceAccount.json"))
    ? fs.readFileSync(path.resolve("serviceAccount.json"), "utf8")
    : "");

if (!SA_JSON) {
  throw new Error(
    "Missing service account. Set FIREBASE_SERVICE_ACCOUNT_JSON or place serviceAccount.json at repo root."
  );
}

// Force marked to be synchronous
marked.setOptions({ async: false });

// ---------- Firebase Admin init ----------
function initFirebase(): FirebaseApp {
  return getApps().length
    ? getApp()
    : initializeApp({
        credential: cert(JSON.parse(SA_JSON)),
      });
}

const app = initFirebase();
const db = getFirestore(app);

// ---------- Content root ----------
const baseDir = path.join(__dirname, "..", "seeds", "Notes");

// Convert absolute file path -> canonical fullPath used in Firestore and frontend
// Example: /.../seeds/Notes/Angular/Basics/Intro.md -> "Angular/Basics/Intro"
const toFullPath = (abs: string): string =>
  path
    .relative(baseDir, abs)
    .replace(/\\/g, "/")
    .replace(/\.md$/i, "");

// Deterministic Firestore doc ID: one doc per siteId + fullPath
// Slashes cannot be in IDs, so we map "/" -> "__"
const docIdFor = (siteId: string, fullPath: string): string =>
  `${siteId}:${fullPath.replace(/\//g, "__")}`;

// Small helper: parse comma-separated ignore globs
function parseIgnoreGlobs(raw?: string): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

async function main() {
  console.log(`SITE_ID="${SITE_ID}"`);
  console.log(`POSTS_COLLECTION="${POSTS_COLLECTION}"`);
  console.log(`baseDir="${baseDir}"`);
  console.log(`cwd="${process.cwd()}"`);

  if (!fs.existsSync(baseDir)) {
    throw new Error(`Base notes folder not found: ${baseDir}`);
  }

  const globPattern = (process.env.GLOB || "**/*.md").trim();
  const ignore = parseIgnoreGlobs(process.env.GLOB_IGNORE);

  // Find all markdown files under seeds/Notes
  const files = await fg([globPattern], {
    cwd: baseDir,
    absolute: true,
    onlyFiles: true,
    dot: false, // change to true if you want dot-folders
    ignore,
  });

  console.log(
    `Found ${files.length} markdown files for SITE_ID="${SITE_ID}" using GLOB="${globPattern}"`
  );
  if (ignore.length) console.log(`Ignore globs: ${ignore.join(", ")}`);

  // Track which doc IDs we (re)wrote this run
  const seenIds = new Set<string>();

  let written = 0;
  let skippedEmpty = 0;
  let errors = 0;

  for (const abs of files) {
    try {
      const raw = fs.readFileSync(abs, "utf8");
      const { data, content } = matter(raw);

      // Skip empty files
      if (!content || !content.trim()) {
        skippedEmpty++;
        console.warn(`⚠️ Skipping empty file: ${abs}`);
        continue;
      }

      const fullPath = toFullPath(abs);

      const title =
        (typeof (data as any)?.title === "string" && (data as any).title.trim()) ||
        path.basename(fullPath);

      const category =
        (typeof (data as any)?.category === "string" &&
          (data as any).category.trim()) ||
        path.dirname(fullPath).replace(/\\/g, "/");

      const bodyMd = content;
      const bodyHtml = marked.parse(bodyMd) as string;

      const docId = docIdFor(SITE_ID, fullPath);
      seenIds.add(docId);

      // Full overwrite (no merge) to ensure doc matches file state exactly.
      await db.collection(POSTS_COLLECTION).doc(docId).set({
        siteId: SITE_ID,
        fullPath, // frontend can query by fullPath
        title,
        category,
        bodyMd,
        bodyHtml,
        status: "published",
        updatedAt: FieldValue.serverTimestamp(), // better than client clock
      });

      written++;
      process.stdout.write(".");
    } catch (e) {
      errors++;
      console.error(`\n❌ Failed processing: ${abs}`);
      console.error(e);
    }
  }

  console.log(
    `\n\n✅ Write phase complete. written=${written}, skippedEmpty=${skippedEmpty}, errors=${errors}`
  );

  // ---------- Prune stale docs (auditable + dry-run) ----------
  const shouldPrune = envBool("PRUNE", true);
  const dryRun = envBool("PRUNE_DRY_RUN", false);
  const logPath = (process.env.PRUNE_LOG_PATH || "pruned-docs.json").trim();
  const printLimit = envNum("PRUNE_PRINT_LIMIT", 50);

  if (shouldPrune) {
    console.log("\n🧹 Pruning stale docs...");

    const snap = await db
      .collection(POSTS_COLLECTION)
      .where("siteId", "==", SITE_ID)
      .get();

    const pruned: PrunedDocLog[] = [];
    let removed = 0;

    for (const d of snap.docs) {
      if (!seenIds.has(d.id)) {
        const data = d.data() as any;

        pruned.push({
          id: d.id,
          fullPath: data.fullPath,
          title: data.title,
          category: data.category,
          status: data.status,
          updatedAt: data.updatedAt,
        });

        if (!dryRun) {
          await d.ref.delete();
          removed++;
        }
      }
    }

    // Always write audit log (even dry-run)
    fs.writeFileSync(logPath, JSON.stringify(pruned, null, 2), "utf8");

    const count = dryRun ? pruned.length : removed;

    console.log(
      `${dryRun ? "🧪 DRY RUN: would prune" : "🧹 Pruned"} ${count} stale docs for SITE_ID="${SITE_ID}".`
    );
    console.log(`📝 Audit log written to: ${path.resolve(logPath)}`);

    // Print sample list
    const sample = pruned.slice(0, Math.max(0, printLimit));
    if (sample.length) {
      console.log(`\n📄 Sample (up to ${printLimit}):`);
      for (const item of sample) {
        console.log(` - ${item.fullPath ?? "(no fullPath)"}  [${item.id}]`);
      }
      if (pruned.length > sample.length) {
        console.log(` - ...and ${pruned.length - sample.length} more`);
      }
    } else {
      console.log("🎉 Nothing to prune.");
    }
  } else {
    console.log(
      '\n⚠️ PRUNE disabled. Stale docs will remain; enable by setting PRUNE=true (recommended).'
    );
  }

  console.log("\n✅ Import complete.");
}

main().catch((err) => {
  console.error("❌ Import failed:", err);
  process.exit(1);
});