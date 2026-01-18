import pages from "@/domain/navigation/mainTabs";
import path from "node:path";

import { parseArgs, matchesFilter } from "@/scripts/core/args";
import { flattenNav } from "@/scripts/core/flattenNav";
import { deriveMd } from "@/scripts/core/derive-md";
import { config } from "@/scripts/config";
import { exists, readText, writeText } from "@/scripts/core/fs";
import { matchesWithin } from "@/scripts/core/within";
import { buildManifest, type ManifestEntry } from "@/scripts/core/nav/buildManifest";
import { patchMarkdownWithNav } from "@/scripts/core/nav/patchMarkdown";

function pickTargets(all: ManifestEntry[], args: ReturnType<typeof parseArgs>) {
  if (args.file) {
    const abs = path.isAbsolute(args.file) ? args.file : path.join(process.cwd(), args.file);
    return all.filter((m) => path.normalize(m.mdFsPath) === path.normalize(abs));
  }

  return all.filter((m) => {
    if (!matchesWithin(args.within, m.crumbs)) return false;
    if (!matchesFilter({ tab: args.tab, topic: args.topic }, m)) return false;
    return true;
  });
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const limit = args.limit ?? config.defaultLimit;

  // Leaf list from nav
  const leaves = flattenNav(pages as any).map((l) => ({
    ...l,
    derived: deriveMd(l),
  }));

  const manifest = buildManifest(leaves, {
    boundary: args.boundary ?? "next-topic",
  });

  const targets = pickTargets(manifest, args);

  let changed = 0;
  let skippedMissing = 0;
  let untouched = 0;

  for (const m of targets) {
    if (changed >= limit) break;

    if (!exists(m.mdFsPath)) {
      skippedMissing++;
      continue;
    }

    const before = readText(m.mdFsPath);
    const after = patchMarkdownWithNav(before, m);

    if (after === before) {
      untouched++;
      continue;
    }

    if (args.dryRun) {
      console.log(`[dry-run] would update ${m.mdFsPath}`);
      changed++;
      continue;
    }

    writeText(m.mdFsPath, after);
    console.log(`updated ${m.mdFsPath}`);
    changed++;
  }

  console.log(`sync-nav-btns dryRun=${!!args.dryRun} boundary=${args.boundary ?? "next-topic"}`);
  console.log(`Updated: ${changed}`);
  console.log(`Untouched (already correct): ${untouched}`);
  console.log(`Skipped missing .md: ${skippedMissing}`);
  if (changed >= limit) console.log(`Stopped early due to --limit ${limit}`);
}

main();