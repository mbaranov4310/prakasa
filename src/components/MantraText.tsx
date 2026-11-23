import { Fragment, useLayoutEffect, useMemo, useRef } from "react";
import type { ScriptMode, SpanNode } from "../types";
import { descendantWordIds, findPath, walkLeaves } from "../lib/tree";

type Props = {
  root: SpanNode;
  mode: ScriptMode;
  selectedId: string | null;
  onSelectWord: (wordId: string) => void;
  onAnchorChange: (rect: DOMRect | null) => void;
  joinFused?: boolean;
};

const FINAL_CONSONANTS = /(?:[क-ह]़?्)+$/;

/**
 * Devanagari to show for each word when fused words are set as one. A browser
 * will not join letters across two boxes, so a final consonant moves into the
 * box of the word it is joined to: धिकतरस् + तेषाम is shown as धिकतर + स्तेषाम.
 */
function joinedDev(leaves: SpanNode[]): string[] {
  const shown = leaves.map((leaf) => leaf.dev);
  for (let index = 0; index < leaves.length - 1; index += 1) {
    const leaf = leaves[index];
    if (leaf.trailing !== "" || leaf.lineBreakAfter) continue;
    const tail = shown[index].match(FINAL_CONSONANTS)?.[0];
    if (!tail || tail.length === shown[index].length) continue;
    shown[index] = shown[index].slice(0, -tail.length);
    shown[index + 1] = tail + shown[index + 1];
  }
  return shown;
}

function unionRects(rects: DOMRect[]): DOMRect {
  const left = Math.min(...rects.map((rect) => rect.left));
  const top = Math.min(...rects.map((rect) => rect.top));
  const right = Math.max(...rects.map((rect) => rect.right));
  const bottom = Math.max(...rects.map((rect) => rect.bottom));
  return new DOMRect(left, top, right - left, bottom - top);
}

export function MantraText({
  root,
  mode,
  selectedId,
  onSelectWord,
  onAnchorChange,
  joinFused = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leaves = useMemo(() => walkLeaves(root), [root]);
  const shownDev = useMemo(() => (joinFused ? joinedDev(leaves) : null), [joinFused, leaves]);
  const highlighted = useMemo(() => {
    if (!selectedId) return new Set<string>();
    const path = findPath(root, selectedId);
    const node = path?.[path.length - 1];
    return node ? descendantWordIds(node) : new Set<string>();
  }, [root, selectedId]);

  const highlightKey = [...highlighted].join(",");

  useLayoutEffect(() => {
    const container = containerRef.current;

    function update() {
      if (!selectedId || !container) {
        onAnchorChange(null);
        return;
      }
      const rects = [...container.querySelectorAll("[data-word-id]")]
        .filter((el) => highlighted.has(el.getAttribute("data-word-id") ?? ""))
        .map((el) => el.getBoundingClientRect());
      onAnchorChange(rects.length ? unionRects(rects) : null);
    }

    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [selectedId, mode, highlightKey, highlighted, onAnchorChange]);

  return (
    <div
      ref={containerRef}
      className={`mantra mantra-${mode}`}
      lang={mode === "iast" ? "en" : "sa"}
    >
      {leaves.map((leaf, leafIndex) => {
        const on = highlighted.has(leaf.id);
        const trailing = leaf.trailing ?? "";
        const punct = trailing.replace(/^\s+/, "");
        const wordGap = /^\s/.test(trailing) && !punct;
        // Sandhi wrote this word and its neighbour as one. They are set with no gap,
        // so the letters join across the two words as they do in print.
        const fusedAfter = joinFused && leaf.trailing === "" && !leaf.lineBreakAfter;
        const before = leafIndex > 0 ? leaves[leafIndex - 1] : undefined;
        const fusedBefore =
          joinFused && before !== undefined && before.trailing === "" && !before.lineBreakAfter;
        const fused = `${fusedBefore ? " fused-before" : ""}${fusedAfter ? " fused-after" : ""}`;
        return (
          <Fragment key={leaf.id}>
            <span
              data-word-id={leaf.id}
              className={`word${on ? " highlighted" : ""}${wordGap ? " word-gap-after" : ""}${fused}`}
              onClick={(event) => {
                event.stopPropagation();
                onSelectWord(leaf.id);
              }}
            >
              {mode === "both"
                ? leaf.syllables?.map((syllable, index) => (
                    <span className="syllable" key={`${leaf.id}-${index}`}>
                      <span className="syl-iast">{syllable.iast}</span>
                      <span className="syl-dev">{syllable.dev}</span>
                    </span>
                  ))
                : mode === "iast"
                  ? leaf.iast
                  : (shownDev?.[leafIndex] ?? leaf.dev)}
              {punct ? <span className="punct">{punct}</span> : null}
            </span>
            {leaf.lineBreakAfter ? <br /> : null}
            {leaf.gapAfter ? <span className="verse-gap" /> : null}
          </Fragment>
        );
      })}
    </div>
  );
}
