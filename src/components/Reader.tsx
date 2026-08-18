import { useCallback, useState } from "react";
import type { Chapter, ScriptMode } from "../types";
import { findPath } from "../lib/tree";
import { GlossPopover } from "./GlossPopover";
import { Glossary } from "./Glossary";
import { MantraText } from "./MantraText";
import { ScriptToggle } from "./ScriptToggle";
import { useNavLang } from "../lib/nav-lang";
import { navigate } from "../lib/routes";

type Props = {
  bookId: string;
  chapter: Chapter;
};

export function Reader({ bookId, chapter }: Props) {
  const { navLang } = useNavLang();
  const [mode, setMode] = useState<ScriptMode>(navLang === "english" ? "iast" : "devanagari");
  const [wordId, setWordId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [anchor, setAnchor] = useState<DOMRect | null>(null);

  const onAnchorChange = useCallback((rect: DOMRect | null) => {
    setAnchor(rect);
  }, []);

  const root = chapter.root;
  const path = root && wordId ? findPath(root, wordId) : null;
  const chain = path ? [...path].reverse() : [];
  const selected = path?.find((node) => node.id === selectedId) ?? null;
  const heading = mode === "iast" ? chapter.titleIast : chapter.titleDev;

  return (
    <article className="reader">
      <header className="reader-head">
        <button
          className="back"
          onClick={() => navigate({ page: "book", bookId })}
        >
          ← Chapters
        </button>
        <ScriptToggle value={mode} onChange={setMode} />
      </header>

      <h1 className={`chapter-title ${mode === "iast" ? "is-latin" : "is-deva"}`}>{heading}</h1>

      {chapter.status === "coming-soon" || !root ? (
        <p className="empty">This chapter will be added next.</p>
      ) : (
        <>
          <MantraText
            root={root}
            mode={mode}
            selectedId={selectedId}
            onSelectWord={(id) => {
              setWordId(id);
              setSelectedId(id);
            }}
            onAnchorChange={onAnchorChange}
          />
          {selected && anchor ? (
            <GlossPopover
              node={selected}
              chain={chain}
              anchor={anchor}
              onSelect={setSelectedId}
              onClose={() => {
                setWordId(null);
                setSelectedId(null);
              }}
            />
          ) : null}
          <Glossary chapter={chapter} />
        </>
      )}
    </article>
  );
}
