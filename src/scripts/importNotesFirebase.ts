import "dotenv/config";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import fg from "fast-glob";
import { marked } from "marked";
import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// ----- Config / envs -----
const SITE_ID = process.env.SITE_ID || "devscriptstax";

// Prefer env var that contains the JSON; otherwise read serviceAccount.json from disk
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

// Force marked to be synchronous (so parse returns string)
marked.setOptions({ async: false });

// ----- Firebase Admin init -----
const app = getApps().length
  ? getApp()
  : initializeApp({ credential: cert(JSON.parse(SA_JSON)) });
const db = getFirestore(app);

// ----- Content root -----
const baseDir = path.join(__dirname, "..", "seeds", "Notes");

// Absolute file -> Firestore fullPath (strip .md, normalize slashes)
const toFullPath = (abs: string) =>
  path.relative(baseDir, abs).replace(/\\/g, "/").replace(/\.md$/i, "");

// Deterministic doc id (no slashes allowed in Firestore IDs)
const docIdFor = (siteId: string, fullPath: string) =>
  `${siteId}:${fullPath.replace(/\//g, "__")}`;

async function main() {
  const files = await fg(["**/*.md"], { cwd: baseDir, absolute: true });
  console.log(`Found ${files.length} markdown files`);
  const seen = new Set<string>();

  for (const abs of files) {
    const raw = fs.readFileSync(abs, "utf8");
    const { data, content } = matter(raw);

    if (!content || !content.trim()) {
      console.warn(`⚠️ Skipping empty file: ${abs}`);
      continue;
    }

    const fullPath = toFullPath(abs); // e.g. FrontEnd/Angular/Basics/Fundamentals/Introduction
    const title = (data?.title as string) || path.basename(fullPath);
    const category =
      (data?.category as string) || path.dirname(fullPath).replace(/\\/g, "/");

    const bodyMd = content;
    const bodyHtml = marked.parse(bodyMd) as string;

    const docId = docIdFor(SITE_ID, fullPath);
    seen.add(docId);

    await db.collection("posts").doc(docId).set(
      {
        siteId: SITE_ID,
        fullPath, // keep the *real* path with slashes for frontend queries
        title,
        category,
        bodyMd,
        bodyHtml,
        status: "published",
        updatedAt: new Date(),
      },
      { merge: true }
    );

    process.stdout.write(".");
  }

  // Optional prune (mirror deletions)
  if ((process.env.PRUNE || "").toLowerCase() === "true") {
    const snap = await db
      .collection("posts")
      .where("siteId", "==", SITE_ID)
      .get();
    let removed = 0;
    for (const d of snap.docs) {
      if (!seen.has(d.id)) {
        await d.ref.delete();
        removed++;
      }
    }
    console.log(`\n🧹 Pruned ${removed} docs.`);
  }

  console.log("\n✅ Import complete.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});