import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { SpanNode } from "../types";
import { LEVEL_LABEL } from "../lib/tree";

type Props = {
  node: SpanNode;
  chain: SpanNode[];
  anchor: DOMRect;
  onSelect: (id: string) => void;
  onClose: () => void;
};

export function GlossPopover({ node, chain, anchor, onSelect, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { height, width } = el.getBoundingClientRect();
    const gap = 14;
    const left = Math.max(12, Math.min(anchor.left, window.innerWidth - width - 12));
    const top = Math.max(12, anchor.top - height - gap);
    setPos({ top, left });
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

  return (
    <div
      ref={ref}
      className="popover"
      style={{ top: pos.top, left: pos.left }}
      role="dialog"
      aria-label="Meaning"
    >
      <button className="popover-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <p className="popover-meaning">{node.meaning}</p>
      <p className="popover-iast">{node.iast}</p>
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
      <span className="popover-caret" style={{ left: caretLeft }} />
    </div>
  );
}
