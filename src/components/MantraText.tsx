import { Fragment, useLayoutEffect, useMemo, useRef } from "react";
import type { ScriptMode, SpanNode } from "../types";
import { descendantWordIds, findPath, walkLeaves } from "../lib/tree";

type Props = {
  root: SpanNode;
  mode: ScriptMode;
  selectedId: string | null;
  onSelectWord: (wordId: string) => void;
  onAnchorChange: (rect: DOMRect | null) => void;
};

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
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leaves = useMemo(() => walkLeaves(root), [root]);
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
      {leaves.map((leaf) => {
        const on = highlighted.has(leaf.id);
        const punct = leaf.trailing?.replace(/^\s+/, "") ?? "";
        return (
          <Fragment key={leaf.id}>
            <span
              data-word-id={leaf.id}
              className={`word${on ? " highlighted" : ""}`}
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
                  : leaf.dev}
              {punct ? <span className="punct">{punct}</span> : null}
            </span>
            {leaf.lineBreakAfter ? <br /> : null}
          </Fragment>
        );
      })}
    </div>
  );
}
