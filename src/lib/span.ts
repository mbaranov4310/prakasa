import type { SpanLevel, SpanNode } from "../types";

type SyllablePair = [dev: string, iast: string];

export function word(
  id: string,
  meaning: string,
  syllables: SyllablePair[],
  options?: { trailing?: string; lineBreakAfter?: boolean; gapAfter?: boolean; pada?: string },
): SpanNode {
  return {
    id,
    level: "word",
    meaning,
    source: "curated",
    dev: syllables.map(([dev]) => dev).join(""),
    iast: syllables.map(([, iast]) => iast).join(""),
    pada: options?.pada,
    syllables: syllables.map(([dev, iast]) => ({ dev, iast })),
    trailing: options?.trailing ?? " ",
    lineBreakAfter: options?.lineBreakAfter,
    gapAfter: options?.gapAfter,
  };
}

function collectLeaves(nodes: SpanNode[]): SpanNode[] {
  return nodes.flatMap((node) =>
    node.children?.length ? collectLeaves(node.children) : [node],
  );
}

export function group(
  id: string,
  level: Exclude<SpanLevel, "word">,
  meaning: string,
  children: SpanNode[],
): SpanNode {
  const leaves = collectLeaves(children);
  return {
    id,
    level,
    meaning,
    source: "curated",
    dev: leaves
      .map((leaf) => leaf.dev + (leaf.trailing ?? ""))
      .join("")
      .replace(/\s+/g, " ")
      .trim(),
    // Words fused by sandhi (trailing "") are written together, as they are in Devanagari.
    iast: leaves
      .map((leaf) => leaf.iast + (leaf.trailing === "" ? "" : " "))
      .join("")
      .trim(),
    children,
  };
}
