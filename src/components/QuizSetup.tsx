import { useEffect, useMemo, useState } from "react";
import {
  chapterEligibleCount,
  deckEligibleCount,
  directionNeedsMeaning,
  itemsForSetup,
  mantraSources,
  pruneChapterKeys,
  QUIZ_DIRECTIONS,
  quizDecks,
  type MantraSource,
  type MantraUnit,
  type QuizDeck,
  type QuizDirection,
  type QuizMode,
  type QuizSetupState,
} from "../lib/quiz";
import { loadQuizSetup, saveQuizSetup } from "../lib/prefs";
import { useNavLang } from "../lib/nav-lang";
import { navigate } from "../lib/routes";

function groupByBook(sources: MantraSource[]) {
  const groups: { bookId: string; titleDev: string; titleIast: string; titleEn: string; chapters: MantraSource[] }[] =
    [];
  const index = new Map<string, number>();
  for (const source of sources) {
    const existing = index.get(source.bookId);
    if (existing === undefined) {
      index.set(source.bookId, groups.length);
      groups.push({
        bookId: source.bookId,
        titleDev: source.bookTitleDev,
        titleIast: source.bookTitleIast,
        titleEn: source.bookTitleEn,
        chapters: [source],
      });
    } else {
      groups[existing].chapters.push(source);
    }
  }
  return groups;
}

export function QuizSetup() {
  const { navLang } = useNavLang();
  const [setup, setSetup] = useState<QuizSetupState>(loadQuizSetup);
  const sources = useMemo(() => mantraSources(), []);
  const books = useMemo(() => groupByBook(sources), [sources]);
  const poolSize = useMemo(() => itemsForSetup(setup).length, [setup]);

  useEffect(() => {
    saveQuizSetup(setup);
  }, [setup]);

  function patch(partial: Partial<QuizSetupState>) {
    setSetup((prev) => {
      const next = { ...prev, ...partial };
      if (partial.direction !== undefined || partial.units !== undefined) {
        next.chapterKeys = pruneChapterKeys(next.chapterKeys, next.units, next.direction);
      }
      return next;
    });
  }

  function toggleUnit(unit: MantraUnit) {
    setSetup((prev) => {
      const has = prev.units.includes(unit);
      const units: MantraUnit[] = has ? prev.units.filter((item) => item !== unit) : [...prev.units, unit];
      const resolved = units.length ? units : prev.units;
      return {
        ...prev,
        units: resolved,
        chapterKeys: pruneChapterKeys(prev.chapterKeys, resolved, prev.direction),
      };
    });
  }

  function toggleChapter(key: string, eligible: boolean) {
    if (!eligible) return;
    setSetup((prev) => {
      const selected = new Set(prev.chapterKeys);
      if (selected.has(key)) selected.delete(key);
      else selected.add(key);
      return { ...prev, chapterKeys: [...selected] };
    });
  }

  function toggleBook(chapters: MantraSource[], on: boolean) {
    const eligibleKeys = chapters
      .filter((chapter) => chapterEligibleCount(chapter.bookId, chapter.chapterId, setup.units, setup.direction) > 0)
      .map((chapter) => chapter.key);
    setSetup((prev) => {
      const selected = new Set(prev.chapterKeys);
      for (const key of eligibleKeys) {
        if (on) selected.add(key);
        else selected.delete(key);
      }
      return { ...prev, chapterKeys: [...selected] };
    });
  }

  function toggleDeck(id: string, eligible: boolean) {
    if (!eligible) return;
    setSetup((prev) => {
      const selected = new Set(prev.deckIds);
      if (selected.has(id)) selected.delete(id);
      else selected.add(id);
      return { ...prev, deckIds: [...selected] };
    });
  }

  function renderDeckGroup(legend: string, decks: QuizDeck[]) {
    if (!decks.length) return null;
    return (
      <fieldset className="quiz-fieldset">
        <legend>{legend}</legend>
        <ul className="quiz-chapters">
          {decks.map((deck) => {
            const count = deckEligibleCount(deck.id, setup.direction);
            const eligible = count > 0;
            return (
              <li key={deck.id}>
                <label className={`quiz-check quiz-chapter${eligible ? "" : " is-disabled"}`}>
                  <input
                    type="checkbox"
                    checked={eligible && setup.deckIds.includes(deck.id)}
                    disabled={!eligible}
                    onChange={() => toggleDeck(deck.id, eligible)}
                  />
                  <span>
                    <span className="is-latin">{deck.titleEn}</span>
                    {eligible ? (
                      <span className="chapter-meta">{count}</span>
                    ) : (
                      <span className="chapter-meta">
                        {directionNeedsMeaning(setup.direction) ? "needs a meaning drill" : "no items"}
                      </span>
                    )}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>
    );
  }

  return (
    <section className="quiz-setup">
      <header className="page-head">
        <button className="back" onClick={() => navigate({ page: "library" })}>
          ← Library
        </button>
        <button className="quiz-entry" type="button" onClick={() => navigate({ page: "study" })}>
          Study
        </button>
      </header>
      <p className="eyebrow">Practice</p>
      <h1 className="chapter-title is-latin">Quiz</h1>
      <p className="quiz-lead">
        Drill words and phrases from the mantras you have already glossed, or letters from Study.
      </p>

      <fieldset className="quiz-fieldset">
        <legend>Mode</legend>
        <div className="script-toggle" role="radiogroup" aria-label="Quiz mode">
          {(
            [
              { id: "mcq", label: "Multiple choice" },
              { id: "flashcard", label: "Flashcard" },
            ] as { id: QuizMode; label: string }[]
          ).map((option) => (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={setup.mode === option.id}
              className={setup.mode === option.id ? "active" : ""}
              onClick={() => patch({ mode: option.id })}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="quiz-fieldset">
        <legend>Ask</legend>
        <div className="quiz-choice-list" role="radiogroup" aria-label="Question direction">
          {QUIZ_DIRECTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={setup.direction === option.id}
              className={`quiz-choice${setup.direction === option.id ? " active" : ""}`}
              onClick={() => patch({ direction: option.id as QuizDirection })}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="quiz-fieldset">
        <legend>Unit</legend>
        <div className="quiz-check-row">
          {(
            [
              { id: "word", label: "Word" },
              { id: "phrase", label: "Phrase" },
            ] as { id: MantraUnit; label: string }[]
          ).map((option) => (
            <label key={option.id} className="quiz-check">
              <input
                type="checkbox"
                checked={setup.units.includes(option.id)}
                onChange={() => toggleUnit(option.id)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="quiz-fieldset">
        <legend>Mantras</legend>
        <div className="quiz-books">
          {books.map((book) => {
            const eligible = book.chapters.filter(
              (chapter) =>
                chapterEligibleCount(chapter.bookId, chapter.chapterId, setup.units, setup.direction) > 0,
            );
            const selectedEligible = eligible.filter((chapter) => setup.chapterKeys.includes(chapter.key));
            const bookOn = eligible.length > 0 && selectedEligible.length === eligible.length;
            const title = navLang === "sanskrit" ? book.titleDev : book.titleEn;
            return (
              <details key={book.bookId} className="quiz-book" open>
                <summary>
                  <label className="quiz-check" onClick={(event) => event.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={bookOn}
                      disabled={eligible.length === 0}
                      onChange={(event) => toggleBook(book.chapters, event.target.checked)}
                    />
                    <span className={navLang === "sanskrit" ? "is-deva" : "is-latin"}>{title}</span>
                  </label>
                </summary>
                <ul className="quiz-chapters">
                  {book.chapters.map((chapter) => {
                    const count = chapterEligibleCount(
                      chapter.bookId,
                      chapter.chapterId,
                      setup.units,
                      setup.direction,
                    );
                    const eligibleChapter = count > 0;
                    const chapterTitle = navLang === "sanskrit" ? chapter.chapterTitleDev : chapter.chapterTitleIast;
                    return (
                      <li key={chapter.key}>
                        <label className={`quiz-check quiz-chapter${eligibleChapter ? "" : " is-disabled"}`}>
                          <input
                            type="checkbox"
                            checked={eligibleChapter && setup.chapterKeys.includes(chapter.key)}
                            disabled={!eligibleChapter}
                            onChange={() => toggleChapter(chapter.key, eligibleChapter)}
                          />
                          <span>
                            <span className={navLang === "sanskrit" ? "is-deva" : "is-latin"}>{chapterTitle}</span>
                            {eligibleChapter ? (
                              <span className="chapter-meta">{count}</span>
                            ) : (
                              <span className="chapter-meta">
                                {directionNeedsMeaning(setup.direction) ? "no meanings yet" : "no items"}
                              </span>
                            )}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
        </div>
      </fieldset>

      {renderDeckGroup("Script", quizDecks.filter((deck) => deck.kind !== "grammar"))}
      {renderDeckGroup("Grammar", quizDecks.filter((deck) => deck.kind === "grammar"))}

      <div className="quiz-start-row">
        <p className="quiz-count">{poolSize} {poolSize === 1 ? "card" : "cards"}</p>
        <button
          className="quiz-start"
          type="button"
          disabled={poolSize === 0}
          onClick={() => {
            saveQuizSetup(setup);
            navigate({ page: "quiz-play" });
          }}
        >
          Start
        </button>
      </div>
    </section>
  );
}
