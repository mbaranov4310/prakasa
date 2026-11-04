import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { wordGloss } from "../content/sandhya-gloss";
import { wordLinks } from "../content/sandhya-links";
import type { SpanNode } from "../types";
import { LEVEL_LABEL } from "../lib/tree";

type Props = {
  node: SpanNode;
  chain: SpanNode[];
  anchor: DOMRect;
  onSelect: (id: string) => void;
  onOpenWord: (id: string) => void;
  onPracticeLine?: () => void;
  onClose: () => void;
};

export function GlossPopover({ node, chain, anchor, onSelect, onOpenWord, onPracticeLine, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0, below: false });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { height, width } = el.getBoundingClientRect();
    const gap = 14;
    const left = Math.max(12, Math.min(anchor.left, window.innerWidth - width - 12));
    const above = anchor.top - height - gap;
    const below = above < 12;
    const top = below
      ? Math.min(anchor.bottom + gap, window.innerHeight - height - 12)
      : above;
    setPos({ top, left, below });
  }, [anchor, node.id]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    function onPointer(event: PointerEvent) {
      const target = event.target as HTMLElement;
      if (target.closest(".popover") || target.closest(".word")) return;
      onClose();
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [onClose]);

  const caretLeft = Math.max(16, Math.min(anchor.left - pos.left + 8, 80));
  const gloss = wordGloss(node.id);
  const links = wordLinks(node.id);

  return (
    <div
      ref={ref}
      className={`popover${pos.below ? " is-below" : ""}`}
      style={{ top: pos.top, left: pos.left }}
      role="dialog"
      aria-label="Meaning"
    >
      <button className="popover-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <p className="popover-meaning">{node.meaning}</p>
      <p className="popover-iast">{node.iast}</p>
      {gloss ? (
        <>
          <dl className="popover-grammar">
            {gloss.fields.map((field) => (
              <div key={field.label}>
                <dt>{field.label}</dt>
                <dd>{field.value}</dd>
              </div>
            ))}
          </dl>
          {gloss.judgment === "unsure" && gloss.why ? (
            <p className="popover-unsure">{gloss.why}</p>
          ) : null}
          {gloss.note ? <p className="popover-unsure">{gloss.note}</p> : null}
        </>
      ) : null}
      {links.length > 0 ? (
        <div className="popover-links">
          {links.map((link, index) =>
            link.wordId ? (
              <div key={`${link.label}-${link.wordId}`}>
                <button type="button" className="popover-link" onClick={() => onOpenWord(link.wordId as string)}>
                  <span>{link.label}</span>
                  <span>
                    {link.iast}
                    {link.meaning ? <em>{link.meaning}</em> : null}
                  </span>
                </button>
                {link.detail ? <p className="popover-unsure">{link.detail}</p> : null}
              </div>
            ) : (
              <p key={`unsure-${index}`} className="popover-unsure">
                {link.detail}
              </p>
            ),
          )}
        </div>
      ) : null}
      <div className="popover-levels">
        {chain.map((step) => (
          <button
            key={step.id}
            className={`level${step.id === node.id ? " active" : ""}`}
            onClick={() => onSelect(step.id)}
          >
            {LEVEL_LABEL[step.level]}
          </button>
        ))}
      </div>
      {onPracticeLine ? (
        <button type="button" className="quiz-text-btn popover-practice" onClick={onPracticeLine}>
          Practice this line
        </button>
      ) : null}
      <span className="popover-caret" style={{ left: caretLeft }} />
    </div>
  );
}
