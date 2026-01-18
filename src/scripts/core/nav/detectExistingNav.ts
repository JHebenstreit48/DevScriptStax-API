export type FoundNav =
  | { kind: "marked"; start: number; end: number }
  | { kind: "xrefNav"; start: number; end: number }
  | { kind: "legacy"; start: number; end: number };

const NAV_START = "<!-- NAV_START -->";
const NAV_END = "<!-- NAV_END -->";

export function detectExistingNav(md: string): FoundNav | null {
  // 1) Prefer markers
  const s = md.lastIndexOf(NAV_START);
  const e = md.lastIndexOf(NAV_END);
  if (s !== -1 && e !== -1 && e > s) {
    return { kind: "marked", start: s, end: e + NAV_END.length };
  }

  // 2) Canonical block without markers (last occurrence)
  const x = md.lastIndexOf('<div class="xrefNav">');
  if (x !== -1) {
    const close = md.indexOf("</div>", x);
    if (close !== -1) {
      // naive but effective: try to grab the whole block by matching the last </div> after xrefNav
      const end = md.indexOf("</div>", close + 6);
      if (end !== -1) return { kind: "xrefNav", start: x, end: end + 6 };
      return { kind: "xrefNav", start: x, end: close + 6 };
    }
  }

  // 3) Legacy patterns (simple)
  // xrefBox
  const xb = md.lastIndexOf('<div class="xrefBox">');
  if (xb !== -1) {
    const close = md.indexOf("</div>", xb);
    if (close !== -1) return { kind: "legacy", start: xb, end: close + 6 };
  }

  // loose "Next:" div (your incorrect example)
  const loose = md.lastIndexOf("\n<div");
  if (loose !== -1) {
    const slice = md.slice(loose);
    if (slice.includes("\nNext:") || slice.includes(">Next:") || slice.includes("Next:\n")) {
      const close = md.indexOf("</div>", loose);
      if (close !== -1) return { kind: "legacy", start: loose, end: close + 6 };
    }
  }

  return null;
}