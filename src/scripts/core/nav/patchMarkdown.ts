import type { ManifestEntry } from "@/scripts/core/nav/buildManifest";
import { detectExistingNav } from "@/scripts/core/nav/detectExistingNav";
import { renderNav } from "@/scripts/core/nav/renderNav";

function isBlank(md: string): boolean {
  return md.trim().length === 0;
}

function ensureBlankScaffold(md: string, title: string): string {
  // Exact formatting requirement:
  // ##Title
  // ---
  //
  // <blank line> then nav
  return `## ${title}\n---\n\n`;
}

function ensureOneBlankLineBeforeFooter(md: string): string {
  // Trim trailing spaces/tabs, but keep newlines
  const trimmed = md.replace(/[ \t]+$/gm, "");
  return trimmed.replace(/\s*$/, "\n\n"); // always ends with exactly two newlines
}

function makeMarkedFooter(html: string): string {
  return `<!-- NAV_START -->\n${html}\n<!-- NAV_END -->\n`;
}

export function patchMarkdownWithNav(before: string, m: ManifestEntry): string {
  const footerHtml = renderNav(m.back, m.next);
  const footer = makeMarkedFooter(footerHtml);

  // Blank file -> scaffold + footer
  if (isBlank(before)) {
    return ensureBlankScaffold("", m.pageTitle) + footer;
  }

  const found = detectExistingNav(before);
  if (!found) {
    // Append
    return ensureOneBlankLineBeforeFooter(before) + footer;
  }

  // Replace existing nav block
  const without = before.slice(0, found.start).replace(/\s*$/, "") + "\n";
  const rebuilt = ensureOneBlankLineBeforeFooter(without) + footer;

  // If replacement yields same content, leave untouched
  return rebuilt === before ? before : rebuilt;
}