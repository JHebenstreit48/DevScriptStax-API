export type BoundaryMode = "next-topic" | "stop";

export type TitleKind = "same-group" | "cross-group" | "cross-topic";

export type NavTarget = {
  href: string;
  title: string;
  kind: TitleKind;
};

export type ManifestEntry = {
  sectionCrumb: string; // tab
  topicCrumb: string;   // topic
  crumbs: string[];
  urlPath: string;
  mdFsPath: string;
  pageTitle: string;
  back?: NavTarget;
  next?: NavTarget;
};

type LeafInput = {
  urlPath: string;
  crumbs: string[];
  derived: { mdFsPath: string };
};

function groupLabel(crumbs: string[]): string {
  // [Tab, Topic, Group1, Group2, ..., Leaf]
  // Use the last group before leaf as the "group label"
  const groups = crumbs.slice(2, -1);
  return groups.at(-1) ?? "";
}

function topicLabel(crumbs: string[]): string {
  return crumbs[1] ?? "";
}

function leafLabel(crumbs: string[]): string {
  return crumbs.at(-1) ?? "";
}

function makeTitle(opts: {
  from: LeafInput;
  to: LeafInput;
  direction: "back" | "next";
}): { title: string; kind: TitleKind } {
  const fromTopic = topicLabel(opts.from.crumbs);
  const toTopic = topicLabel(opts.to.crumbs);
  const fromGroup = groupLabel(opts.from.crumbs);
  const toGroup = groupLabel(opts.to.crumbs);
  const toLeaf = leafLabel(opts.to.crumbs);

  if (fromTopic !== toTopic) {
    const prefix = opts.direction === "next" ? "Next Topic:" : "Previous Topic:";
    const toGroupPart = toGroup ? ` ${toGroup} → ${toLeaf}` : ` → ${toLeaf}`;
    return { title: `${prefix} ${toTopic}${toGroupPart}`, kind: "cross-topic" };
  }

  if (fromGroup && toGroup && fromGroup !== toGroup) {
    return { title: `Section: ${toTopic} ${toGroup} → ${toLeaf}`, kind: "cross-group" };
  }

  if (toGroup) return { title: `${toGroup} → ${toLeaf}`, kind: "same-group" };
  return { title: `${toLeaf}`, kind: "same-group" };
}

export function buildManifest(
  leaves: LeafInput[],
  opts: { boundary: BoundaryMode }
): ManifestEntry[] {
  // Order is the order provided by flattenNav (nav order).
  const out: ManifestEntry[] = [];

  for (let i = 0; i < leaves.length; i++) {
    const cur = leaves[i];
    const prev = leaves[i - 1];
    const next = leaves[i + 1];

    const [sectionCrumb = "Misc", topicCrumb = "Topic"] = cur.crumbs;

    const entry: ManifestEntry = {
      sectionCrumb,
      topicCrumb,
      crumbs: cur.crumbs,
      urlPath: cur.urlPath,
      mdFsPath: cur.derived.mdFsPath,
      pageTitle: leafLabel(cur.crumbs),
    };

    // Back always allowed within your "continuous" model, but boundary may remove cross-topic links.
    if (prev) {
      const t = makeTitle({ from: cur, to: prev, direction: "back" });
      if (opts.boundary === "next-topic" || topicLabel(prev.crumbs) === topicLabel(cur.crumbs)) {
        entry.back = { href: prev.urlPath, title: t.title, kind: t.kind };
      }
    }

    if (next) {
      const t = makeTitle({ from: cur, to: next, direction: "next" });
      if (opts.boundary === "next-topic" || topicLabel(next.crumbs) === topicLabel(cur.crumbs)) {
        entry.next = { href: next.urlPath, title: t.title, kind: t.kind };
      }
    }

    out.push(entry);
  }

  return out;
}