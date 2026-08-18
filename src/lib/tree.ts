import type { SpanLevel, SpanNode } from "../types";

export function walkLeaves(node: SpanNode): SpanNode[] {
  if (!node.children?.length) return [node];
  return node.children.flatMap(walkLeaves);
}

export function findPath(node: SpanNode, id: string): SpanNode[] | null {
  if (node.id === id) return [node];
  for (const child of node.children ?? []) {
    const found = findPath(child, id);
    if (found) return [node, ...found];
  }
  return null;
}

export function descendantWordIds(node: SpanNode): Set<string> {
  return new Set(walkLeaves(node).map((leaf) => leaf.id));
}

export const LEVEL_LABEL: Record<SpanLevel, string> = {
  word: "WORD",
  phrase: "PHRASE",
  sentence: "SENTENCE",
  verse: "VERSE",
};
