import fs from "fs";
import path from "path";

export interface FileStats {
  path: string;
  relativePath: string;
  topSection: string;
  subSection: string;
  isEmpty: boolean;
}

const STUB_THRESHOLD = 300;

export function getNotesBaseDir(scriptDir: string): string {
  return path.resolve(scriptDir, "../../seeds/Notes");
}

export function walkNotes(baseDir: string): FileStats[] {
  const results: FileStats[] = [];

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith(".md")) {
        const content = fs.readFileSync(fullPath, "utf8").trim();
        const relativePath = path.relative(baseDir, fullPath);
        const parts = relativePath.split(path.sep);
        const topSection = parts[0] ?? "Unknown";
        const subSection = parts.slice(0, 3).join("/");
        results.push({
          path: fullPath,
          relativePath,
          topSection,
          subSection,
          isEmpty: content.length < STUB_THRESHOLD,
        });
      }
    }
  }

  walk(baseDir);
  return results;
}

export function groupByTop(
  files: FileStats[]
): Record<string, FileStats[]> {
  return files.reduce((acc, file) => {
    if (!acc[file.topSection]) acc[file.topSection] = [];
    acc[file.topSection].push(file);
    return acc;
  }, {} as Record<string, FileStats[]>);
}

export function groupBySub(
  files: FileStats[]
): Record<string, FileStats[]> {
  return files.reduce((acc, file) => {
    if (!acc[file.subSection]) acc[file.subSection] = [];
    acc[file.subSection].push(file);
    return acc;
  }, {} as Record<string, FileStats[]>);
}