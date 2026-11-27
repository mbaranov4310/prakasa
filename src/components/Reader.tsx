import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Chapter, ScriptMode } from "../types";
import { findPath } from "../lib/tree";
import { GlossPopover } from "./GlossPopover";
import { Glossary } from "./Glossary";
import { MantraText } from "./MantraText";
import { ScriptToggle } from "./ScriptToggle";
import { useNavLang } from "../lib/nav-lang";
import { hasLinkQuiz } from "../content/sandhya-links";
import { roundForWord } from "../lib/link-quiz";
import { navigate } from "../lib/routes";
import { getBook } from "../content/library";
import {
  DDV_BOOK,
  ddvGroupFor,
  ddvRecordingSrc,
  ddvVerseNumber,
  type DdvGroup,
} from "../lib/ddv-groups";

type Props = {
  bookId: string;
  chapter: Chapter;
};

const RECORDINGS: Record<string, string> = {
  dipajyotir: "audio/mangala/dipajyotir.m4a",
};

function recordingSrc(chapterId: string): string | null {
  const extra = RECORDINGS[chapterId];
  if (extra) return `${import.meta.env.BASE_URL}${extra}`;
  return ddvRecordingSrc(chapterId);
}

function RecordingButton({ src }: { src: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const element = audio.current;
    if (!element) return;
    if (element.paused) void element.play();
    else element.pause();
  }

  return (
    <>
      <button type="button" className="quiz-text-btn" onClick={toggle}>
        {playing ? "Pause recording" : "Play recording"}
      </button>
      <audio
        ref={audio}
        src={src}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
    </>
  );
}

type Track = { id: string; label: string; src: string };

function GroupAudio({ tracks }: { tracks: Track[] }) {
  const audio = useRef<HTMLAudioElement>(null);
  const queue = useRef<string[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [mode, setMode] = useState<"one" | "all" | null>(null);
  const [playing, setPlaying] = useState(false);

  function play(src: string, rest: string[], nextMode: "one" | "all") {
    const element = audio.current;
    if (!element) return;
    if (playing && mode === nextMode && (nextMode === "all" || active === src)) {
      element.pause();
      return;
    }
    queue.current = rest;
    setMode(nextMode);
    setActive(src);
    element.src = src;
    void element.play();
  }

  if (tracks.length === 0) return null;

  return (
    <div className="reader-actions">
      {tracks.map((track) => (
        <button
          key={track.id}
          type="button"
          className="quiz-text-btn"
          onClick={() => play(track.src, [], "one")}
        >
          {playing && mode === "one" && active === track.src ? "Pause" : track.label}
        </button>
      ))}
      {tracks.length > 1 ? (
        <button
          type="button"
          className="quiz-text-btn"
          onClick={() => play(tracks[0].src, tracks.slice(1).map((track) => track.src), "all")}
        >
          {playing && mode === "all" ? "Pause" : "Play all three"}
        </button>
      ) : null}
      <audio
        ref={audio}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          const next = queue.current.shift();
          const element = audio.current;
          if (!next || !element) {
            setActive(null);
            setMode(null);
            setPlaying(false);
            return;
          }
          setActive(next);
          element.src = next;
          void element.play();
        }}
      />
    </div>
  );
}

function tracksFor(chapters: Chapter[]): Track[] {
  return chapters.flatMap((item) => {
    const src = ddvRecordingSrc(item.id);
    const verse = ddvVerseNumber(item.id);
    if (!src || verse == null) return [];
    return [{ id: item.id, label: `Verse ${verse}`, src }];
  });
}

export function Reader({ bookId, chapter }: Props) {
  const { navLang } = useNavLang();
  const [mode, setMode] = useState<ScriptMode>(navLang === "english" ? "iast" : "devanagari");
  const [wordId, setWordId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [anchor, setAnchor] = useState<DOMRect | null>(null);

  const onAnchorChange = useCallback((rect: DOMRect | null) => {
    setAnchor(rect);
  }, []);

  const group: DdvGroup | null =
    bookId === DDV_BOOK ? ddvGroupFor(getBook(bookId)?.chapters ?? [], chapter.id) : null;
  const shown = group?.chapters ?? [chapter];

  useEffect(() => {
    setWordId(null);
    setSelectedId(null);
    setAnchor(null);
  }, [chapter.id]);

  const located = useMemo(() => {
    if (!wordId) return null;
    for (const item of shown) {
      if (!item.root) continue;
      const path = findPath(item.root, wordId);
      if (path) return { item, path };
    }
    return null;
  }, [shown, wordId]);

  const practiceRound = useMemo(
    () =>
      located && hasLinkQuiz(located.item.id)
        ? roundForWord(bookId, located.item.id, wordId ?? "")
        : null,
    [bookId, located, wordId],
  );
  const path = located?.path ?? null;
  const chain = path ? [...path].reverse().filter((node) => node.level !== "chapter") : [];
  const selected = path?.find((node) => node.id === selectedId) ?? null;
  const heading = group
    ? group.label
    : mode === "iast"
      ? chapter.titleIast
      : chapter.titleDev;
  const recording = group ? null : recordingSrc(chapter.id);
  const tracks = group ? tracksFor(group.chapters) : [];

  function openWord(id: string) {
    setWordId(id);
    setSelectedId(id);
  }

  return (
    <article className="reader">
      <header className="reader-head">
        <button className="back" onClick={() => navigate({ page: "book", bookId })}>
          ← Chapters
        </button>
        <ScriptToggle value={mode} onChange={setMode} />
      </header>

      <h1 className={`chapter-title ${group || mode === "iast" ? "is-latin" : "is-deva"}`}>
        {heading}
      </h1>
      {group && tracks.length > 0 ? <GroupAudio key={group.chapters[0].id} tracks={tracks} /> : null}
      {!group && (recording || hasLinkQuiz(chapter.id)) ? (
        <div className="reader-actions">
          {recording ? <RecordingButton src={recording} /> : null}
          {hasLinkQuiz(chapter.id) ? (
            <button
              type="button"
              className="quiz-text-btn"
              onClick={() => navigate({ page: "chapter-practice", bookId, chapterId: chapter.id })}
            >
              Practice this chapter
            </button>
          ) : null}
        </div>
      ) : null}

      {shown.length > 1 ? (
        <div className="verse-stack">
          {shown.map((item) => (
            <section key={item.id} id={item.id}>
              <h2 className="is-latin">Verse {ddvVerseNumber(item.id)}</h2>
              {item.root ? (
                <MantraText
                  root={item.root}
                  mode={mode}
                  selectedId={selectedId}
                  onSelectWord={openWord}
                  onAnchorChange={onAnchorChange}
                  joinFused={item.joinFused}
                />
              ) : (
                <p className="empty">This chapter will be added next.</p>
              )}
              <Glossary chapter={item} label={`Verse ${ddvVerseNumber(item.id)}`} />
            </section>
          ))}
        </div>
      ) : chapter.status === "coming-soon" || !chapter.root ? (
        <p className="empty">This chapter will be added next.</p>
      ) : (
        <>
          <MantraText
            root={chapter.root}
            mode={mode}
            selectedId={selectedId}
            onSelectWord={openWord}
            onAnchorChange={onAnchorChange}
            joinFused={chapter.joinFused}
          />
          <Glossary chapter={chapter} />
        </>
      )}

      {selected && anchor && located ? (
        <GlossPopover
          node={selected}
          chain={chain}
          anchor={anchor}
          onSelect={setSelectedId}
          onOpenWord={openWord}
          onPracticeLine={
            practiceRound == null
              ? undefined
              : () =>
                  navigate({
                    page: "chapter-practice",
                    bookId,
                    chapterId: located.item.id,
                    line: practiceRound + 1,
                  })
          }
          onClose={() => {
            setWordId(null);
            setSelectedId(null);
          }}
        />
      ) : null}

      {group ? (
        <nav className="group-nav">
          {group.prevId ? (
            <button
              type="button"
              className="back"
              onClick={() => navigate({ page: "chapter", bookId, chapterId: group.prevId! })}
            >
              ← {ddvGroupFor(getBook(bookId)?.chapters ?? [], group.prevId)?.label}
            </button>
          ) : (
            <span />
          )}
          {group.nextId ? (
            <button
              type="button"
              className="back"
              onClick={() => navigate({ page: "chapter", bookId, chapterId: group.nextId! })}
            >
              {ddvGroupFor(getBook(bookId)?.chapters ?? [], group.nextId)?.label} →
            </button>
          ) : null}
        </nav>
      ) : null}
    </article>
  );
}
