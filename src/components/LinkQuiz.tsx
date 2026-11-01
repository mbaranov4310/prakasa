import { Fragment, useMemo, useState } from "react";
import { linkRounds, type LinkLeaf, type LinkStep } from "../lib/link-quiz";
import { navigate } from "../lib/routes";

type Props = {
  bookId: string;
  chapterId: string;
};

function Passage({ leaves, highlightId }: { leaves: LinkLeaf[]; highlightId: string }) {
  return (
    <div className="quiz-cite">
      <PassageLine leaves={leaves} highlightId={highlightId} script="dev" />
      <PassageLine leaves={leaves} highlightId={highlightId} script="iast" />
    </div>
  );
}

function PassageLine({
  leaves,
  highlightId,
  script,
}: {
  leaves: LinkLeaf[];
  highlightId: string;
  script: "dev" | "iast";
}) {
  return (
    <p className={`quiz-cite-line ${script === "dev" ? "is-deva" : "is-latin"}`}>
      {leaves.map((leaf) => {
        const trailing = leaf.trailing ?? "";
        const punct = trailing.replace(/^\s+/, "");
        const gap = /^\s/.test(trailing) && !punct;
        return (
          <Fragment key={`${script}-${leaf.id}`}>
            <span
              className={`quiz-cite-word${leaf.id === highlightId ? " is-hit" : ""}${gap ? " word-gap-after" : ""}`}
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

export function LinkQuiz({ bookId, chapterId }: Props) {
  const [run, setRun] = useState(0);
  const rounds = useMemo(() => linkRounds(bookId, chapterId), [bookId, chapterId, run]);
  const [roundIndex, setRoundIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [asked, setAsked] = useState(0);

  const round = rounds[roundIndex];
  const step: LinkStep | undefined = round?.steps[stepIndex];
  const done = rounds.length > 0 && roundIndex >= rounds.length;

  function next() {
    if (!round) return;
    if (stepIndex + 1 < round.steps.length) {
      setStepIndex((value) => value + 1);
      setPicked(null);
      return;
    }
    setRoundIndex((value) => value + 1);
    setStepIndex(0);
    setPicked(null);
  }

  if (rounds.length === 0) {
    return (
      <section className="quiz-play">
        <header className="page-head">
          <button className="back" onClick={() => navigate({ page: "chapter", bookId, chapterId })}>
            ← Chapter
          </button>
        </header>
        <p className="empty">This chapter has no sentence links to practice yet.</p>
      </section>
    );
  }

  if (done || !step || !round) {
    return (
      <section className="quiz-play">
        <header className="page-head">
          <button className="back" onClick={() => navigate({ page: "chapter", bookId, chapterId })}>
            ← Chapter
          </button>
        </header>
        <p className="eyebrow">Done</p>
        <h1 className="chapter-title is-latin">Practice</h1>
        <p className="quiz-lead">
          {correctCount} of {asked} remembered.
        </p>
        <div className="quiz-end-actions">
          <button
            type="button"
            className="quiz-start"
            onClick={() => {
              setRoundIndex(0);
              setStepIndex(0);
              setPicked(null);
              setCorrectCount(0);
              setAsked(0);
              setRun((value) => value + 1);
            }}
          >
            Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="quiz-play">
      <header className="reader-head">
        <button className="back" onClick={() => navigate({ page: "chapter", bookId, chapterId })}>
          ← Chapter
        </button>
        <p className="quiz-progress">
          Word {roundIndex + 1} of {rounds.length}
          {" · "}
          {stepIndex + 1} of {round.steps.length}
        </p>
      </header>
      <Passage leaves={step.leaves} highlightId={step.highlightId} />
      <p className="quiz-prompt is-latin">{step.prompt}</p>
      <div className="quiz-options" role="group" aria-label="Answers">
        {step.options.map((option) => {
          let state = "";
          if (picked) {
            if (option.key === step.answer) state = " is-correct";
            else if (option.key === picked) state = " is-wrong";
          }
          return (
            <button
              key={option.key}
              type="button"
              className={`quiz-option${option.hint ? " is-deva" : " is-latin"}${state}`}
              disabled={picked !== null}
              onClick={() => {
                if (picked) return;
                setPicked(option.key);
                setAsked((value) => value + 1);
                if (option.key === step.answer) setCorrectCount((value) => value + 1);
              }}
            >
              {option.label}
              {option.hint ? <span className="quiz-option-hint">{option.hint}</span> : null}
            </button>
          );
        })}
      </div>
      {picked ? (
        <div className="quiz-nav-row">
          <button type="button" className="quiz-start" onClick={next}>
            Next
          </button>
        </div>
      ) : null}
    </section>
  );
}
