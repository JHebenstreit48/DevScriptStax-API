import { walkNotes, groupByTop, groupBySub, getNotesBaseDir } from "@/scripts/notes/utils/fileStats";

function run() {
  const baseDir = getNotesBaseDir(__dirname);
  const files = walkNotes(baseDir);

  const sectionArg = process.argv
    .find(a => a.startsWith("--section="))
    ?.split("=")[1]
    ?? process.argv.slice(2).find(a => !a.startsWith("--"));

  const totalFiles = files.length;
  const totalEmpty = files.filter(f => f.isEmpty).length;
  const totalContent = totalFiles - totalEmpty;

  console.log("\n========================================");
  console.log(`  NOTES DIAGNOSTIC`);
  console.log(`  Total files:   ${totalFiles}`);
  console.log(`  With content:  ${totalContent}`);
  console.log(`  Empty / stubs: ${totalEmpty}`);
  console.log("========================================\n");

  const byTop = groupByTop(files);

  if (sectionArg) {
    const match = Object.entries(byTop).find(
      ([key]) => key.toLowerCase() === sectionArg.toLowerCase()
    );

    if (!match) {
      console.log(`❌ Section "${sectionArg}" not found.`);
      console.log(`Available sections: ${Object.keys(byTop).sort().join(", ")}`);
      return;
    }

    const [section, sectionFiles] = match;
    const empty = sectionFiles.filter(f => f.isEmpty);
    const content = sectionFiles.length - empty.length;

    console.log(`📂 ${section} — ${content}/${sectionFiles.length} complete (${empty.length} stubs)\n`);

    if (empty.length === 0) {
      console.log("✅ No empty files in this section.");
      return;
    }

    const bySub = groupBySub(empty);
    for (const [sub, subFiles] of Object.entries(bySub).sort()) {
      console.log(`  📁 ${sub}`);
      for (const file of subFiles) {
        console.log(`       - ${file.relativePath}`);
      }
      console.log("");
    }

  } else {
    for (const [section, sectionFiles] of Object.entries(byTop).sort()) {
      const empty = sectionFiles.filter(f => f.isEmpty);
      const content = sectionFiles.length - empty.length;
      const status = empty.length === 0 ? "✅" : "⚠️ ";

      console.log(
        `${status} ${section.padEnd(25)} ${content}/${sectionFiles.length} complete  (${empty.length} stubs)`
      );

      if (empty.length > 0) {
        const bySub = groupBySub(empty);
        for (const [sub, subFiles] of Object.entries(bySub).sort()) {
          console.log(`     ⚠️  ${sub.padEnd(45)} ${subFiles.length} stub(s)`);
        }
      }

      console.log("");
    }
  }

  console.log("========================================\n");
}

run();