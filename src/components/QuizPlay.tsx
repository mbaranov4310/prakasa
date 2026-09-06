import { Fragment, useMemo, useState } from "react";
import {
  directionMeta,
  itemFace,
  itemsForSetup,
  mantraCite,
  mcqOptions,
  shuffle,
  type MantraCite,
  type QuizFace,
  type QuizItem,
  type QuizSetupState,
} from "../lib/quiz";
import { loadQuizSetup } from "../lib/prefs";
import { useNavLang } from "../lib/nav-lang";
import { navigate } from "../lib/routes";

type Card = {
  item: QuizItem;
  options: string[];
};

function faceClass(face: QuizFace): string {
  return face === "dev" ? "is-deva" : "is-latin";
}

function CiteView({
  item,
  occIndex,
  onCycle,
}: {
  item: QuizItem;
  occIndex: number;
  onCycle: () => void;
}) {
  const { navLang } = useNavLang();
  const occurrence = item.occurrences[occIndex];
  const cite = occurrence ? mantraCite(occurrence) : null;
  if (!cite) return null;
  const title = navLang === "sanskrit" ? cite.titleDev : cite.titleIast;
  return (
    <div className="quiz-cite">
      <CiteLine cite={cite} script="iast" />
      <CiteLine cite={cite} script="dev" />
      {cite.meaning ? <p className="quiz-cite-meaning">{cite.meaning}</p> : null}
      <p className={`quiz-cite-src ${navLang === "sanskrit" ? "is-deva" : "is-latin"}`}>{title}</p>
      <div className="quiz-cite-actions">
        <button
          type="button"
          className="quiz-text-btn"
          onClick={() => navigate({ page: "chapter", bookId: cite.bookId, chapterId: cite.chapterId })}
        >
          Open chapter
        </button>
        {item.occurrences.length > 1 ? (
          <button type="button" className="quiz-text-btn" onClick={onCycle}>
            Another line ({occIndex + 1}/{item.occurrences.length})
          </button>
        ) : null}
      </div>
    </div>
  );
}

function CiteLine({ cite, script }: { cite: MantraCite; script: "iast" | "dev" }) {
  const hits = new Set(cite.highlightIds);
  return (
    <p className={`quiz-cite-line ${script === "dev" ? "is-deva" : "is-latin"}`}>
      {cite.leaves.map((leaf) => {
        const trailing = leaf.trailing ?? "";
        const punct = trailing.replace(/^\s+/, "");
        const gap = /^\s/.test(trailing) && !punct;
        return (
          <Fragment key={`${script}-${leaf.id}`}>
            <span
              className={`quiz-cite-word${hits.has(leaf.id) ? " is-hit" : ""}${gap ? " word-gap-after" : ""}`}
            >
              {script === "dev" ? leaf.dev : leaf.iast}
              {punct ? <span className="punct">{punct}</span> : null}
            </span>
            {leaf.lineBreakAfter ? <br /> : null}
          </Fragment>
        );
      })}
    </p>
  );
}

function buildQueue(setup: QuizSetupState): Card[] {
  const pool = itemsForSetup(setup);
  const answer = directionMeta(setup.direction).answer;
  return shuffle(pool).map((item) => ({
    item,
    options: setup.mode === "mcq" ? mcqOptions(item, pool, answer) : [],
  }));
}

export function QuizPlay() {
  const setup = useMemo(() => loadQuizSetup(), []);
  const [remaining, setRemaining] = useState(() => buildQueue(setup));
  const [total] = useState(() => remaining.length);
  const [correctCount, setCorrectCount] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [showCite, setShowCite] = useState(false);
  const [occIndex, setOccIndex] = useState(0);

  const card = remaining[0];
  const meta = directionMeta(setup.direction);
  const done = total > 0 && remaining.length === 0;

  function resetUi() {
    setPicked(null);
    setRevealed(false);
    setShowCite(false);
    setOccIndex(0);
  }

  function consume(requeue: boolean) {
    setRemaining((prev) => {
      const [current, ...rest] = prev;
      if (requeue && current) return [...rest, current];
      return rest;
    });
    resetUi();
  }

  function resetRun() {
    const next = buildQueue(setup);
    setRemaining(next);
    setCorrectCount(0);
    resetUi();
  }

  if (total === 0) {
    return (
      <section className="quiz-play">
        <header className="page-head">
          <button className="back" onClick={() => navigate({ page: "quiz" })}>
            ← Setup
          </button>
        </header>
        <p className="empty">No cards for this setup. Choose chapters that have meanings, or a script drill.</p>
      </section>
    );
  }

  if (done) {
    return (
      <section className="quiz-play">
        <header className="page-head">
          <button className="back" onClick={() => navigate({ page: "quiz" })}>
            ← Setup
          </button>
        </header>
        <p className="eyebrow">Done</p>
        <h1 className="chapter-title is-latin">Quiz</h1>
        <p className="quiz-lead">
          {correctCount} of {total} remembered.
        </p>
        <div className="quiz-end-actions">
          <button type="button" className="quiz-start" onClick={resetRun}>
            Again
          </button>
          <button type="button" className="quiz-text-btn" onClick={() => navigate({ page: "quiz" })}>
            Change setup
          </button>
        </div>
      </section>
    );
  }

  if (!card) return null;

  const prompt = itemFace(card.item, meta.prompt);
  const answer = itemFace(card.item, meta.answer);
  const extraFaces = (["dev", "iast", "meaning"] as QuizFace[]).filter(
    (face) => face !== meta.prompt && itemFace(card.item, face),
  );
  const canCite = card.item.occurrences.length > 0;
  const locked = setup.mode === "mcq" ? picked !== null : revealed;

  return (
    <section className="quiz-play">
      <header className="reader-head">
        <button className="back" onClick={() => navigate({ page: "quiz" })}>
          ← Setup
        </button>
        <p className="quiz-progress">
          {correctCount} known · {remaining.length} left
        </p>
      </header>

      <p className={`quiz-prompt ${faceClass(meta.prompt)}${meta.prompt === "iast" ? " is-iast-prompt" : ""}`}>
        {prompt}
      </p>

      {setup.mode === "mcq" ? (
        <div className="quiz-options" role="group" aria-label="Answers">
          {card.options.map((option) => {
            let state = "";
            if (picked) {
              if (option === answer) state = " is-correct";
              else if (option === picked) state = " is-wrong";
            }
            return (
              <button
                key={option}
                type="button"
                className={`quiz-option ${faceClass(meta.answer)}${state}`}
                disabled={picked !== null}
                onClick={() => {
                  if (picked) return;
                  setPicked(option);
                  if (option === answer) setCorrectCount((value) => value + 1);
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="quiz-flash">
          {revealed ? (
            extraFaces.map((face) => (
              <p key={face} className={`quiz-reveal ${faceClass(face)}`}>
                {itemFace(card.item, face)}
              </p>
            ))
          ) : (
            <button type="button" className="quiz-start" onClick={() => setRevealed(true)}>
              Reveal
            </button>
          )}
        </div>
      )}

      {locked ? (
        <div className="quiz-after">
          {canCite ? (
            showCite ? (
              <CiteView
                item={card.item}
                occIndex={occIndex % card.item.occurrences.length}
                onCycle={() => setOccIndex((value) => value + 1)}
              />
            ) : (
              <button type="button" className="quiz-text-btn" onClick={() => setShowCite(true)}>
                In this mantra
              </button>
            )
          ) : null}
          {setup.mode === "mcq" ? (
            <div className="quiz-nav-row">
              <button type="button" className="quiz-start" onClick={() => consume(false)}>
                Next
              </button>
            </div>
          ) : (
            <div className="quiz-nav-row">
              <button type="button" className="quiz-text-btn" onClick={() => consume(true)}>
                Still learning
              </button>
              <button
                type="button"
                className="quiz-start"
                onClick={() => {
                  setCorrectCount((value) => value + 1);
                  consume(false);
                }}
              >
                Known
              </button>
            </div>
          )}
        </div>
      ) : setup.mode === "mcq" ? (
        <div className="quiz-nav-row">
          <button type="button" className="quiz-text-btn" onClick={() => consume(false)}>
            Skip
          </button>
        </div>
      ) : null}
    </section>
  );
}
