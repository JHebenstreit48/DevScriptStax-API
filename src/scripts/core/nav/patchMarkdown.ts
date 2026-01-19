import type { ManifestEntry } from "@/scripts/core/nav/buildManifest";
import { detectExistingNav } from "@/scripts/core/nav/detectExistingNav";
import { renderNav } from "@/scripts/core/nav/renderNav";

/**
 * Remove UTF-8 BOM if present.
 */
function stripBom(s: string): string {
  return s.replace(/^\uFEFF/, "");
}

function isBlank(md: string): boolean {
  return stripBom(md).trim().length === 0;
}

/**
 * Normalize ONLY for comparison so whitespace differences
 * don't cause rewrites. Never write the normalized text.
 */
function normalizeForCompare(s: string): string {
  return s
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, ""))
    .join("\n")
    .trim();
}

/**
 * Your required scaffold for totally blank files.
 * NOTE: We do NOT add an extra newline at EOF.
 */
function blankScaffold(title: string): string {
  return `## ${title}\n---\n\n`;
}

/**
 * Ensure exactly one blank line before nav *when appending*,
 * without forcing blank lines at EOF.
 */
function ensureOneBlankLineBeforeAppend(md: string): string {
  // Remove trailing spaces/tabs on lines, but preserve internal formatting.
  const cleaned = md.replace(/[ \t]+$/gm, "");

  // Remove ALL trailing whitespace/newlines, then add "\n\n"
  return cleaned.replace(/\s*$/, "") + "\n\n";
}

export function patchMarkdownWithNav(beforeRaw: string, m: ManifestEntry): string {
  const before = stripBom(beforeRaw);
  const newNav = renderNav(m.back, m.next).trim(); // canonical nav as produced
  const newNavCmp = normalizeForCompare(newNav);

  // 1) Blank file → scaffold + nav (no extra EOF newline)
  if (isBlank(before)) {
    const out = blankScaffold(m.pageTitle) + newNav;
    return out.replace(/\s*$/, ""); // no trailing newline/blank line
  }

  const found = detectExistingNav(before);

  // 2) No nav found → append nav (no extra EOF newline)
  if (!found) {
    const out = ensureOneBlankLineBeforeAppend(before) + newNav;
    return out.replace(/\s*$/, "");
  }

  // 3) Nav found → compare nav blocks (ignore whitespace)
  const existingNav = before.slice(found.start, found.end);
  const existingNavCmp = normalizeForCompare(existingNav);

  // If nav already correct → return original EXACT (except trim BOM)
  if (existingNavCmp === newNavCmp) {
    return before;
  }

  // 4) Replace ONLY nav slice, keep everything else byte-for-byte
  const out = before.slice(0, found.start) + newNav + before.slice(found.end);

  // Do not leave trailing blank lines at EOF
  return out.replace(/\s*$/, "");
}