import { GUIDE_ATTRIBUTION, getLesson, getLessonMeta, setupForLesson } from "../lib/study";
import type { LessonBlock } from "../lib/study";
import { navigate } from "../lib/routes";

function LessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="study-body">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p key={index} className="study-p">
              {block.text}
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2 key={index} className="study-h2">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="study-ul">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "note") {
          return (
            <p key={index} className="study-note">
              {block.text}
            </p>
          );
        }
        if (block.type === "table") {
          return (
            <div key={index} className="study-table-wrap">
              {block.caption ? <p className="study-note">{block.caption}</p> : null}
              <table className="study-table">
                <thead>
                  <tr>
                    <th>{block.labelHeader ?? ""}</th>
                    {block.headers.map((header) => (
                      <th key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.label.en}>
                      <th scope="row">
                        <span className="case-en">{row.label.en}</span>
                        <span className="case-sa">
                          <span className="is-deva">{row.label.dev}</span>
                          <span className="is-latin">{row.label.iast}</span>
                        </span>
                        {row.label.cue ? <span className="case-cue">{row.label.cue}</span> : null}
                      </th>
                      {row.cells.map((cell, cellIndex) => (
                        <td key={`${row.label.en}-${cellIndex}`}>
                          <span className="is-deva">{cell.dev}</span>
                          <span className="is-latin">{cell.iast}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <ul key={index} className="study-glyphs">
            {block.items.map((item) => (
              <li key={`${item.dev}-${item.iast}`}>
                <span className="is-deva">{item.dev}</span>
                <span className="is-latin">{item.iast}</span>
                {item.note ? <span className="chapter-meta">{item.note}</span> : null}
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export function StudyLesson({ lessonId }: { lessonId: string }) {
  const lesson = getLesson(lessonId);
  if (!lesson) {
    return (
      <section className="study">
        <header className="page-head">
          <button className="back" onClick={() => navigate({ page: "study" })}>
            ← Lessons
          </button>
        </header>
        <p className="empty">That lesson is not in the catalog.</p>
      </section>
    );
  }

  const ready = lesson.status === "ready" && lesson.body?.length;
  const canPractice = Boolean(setupForLesson(lesson.id));
  const prereqs = lesson.prereqs
    .map((id) => getLessonMeta(id))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  return (
    <article className="study">
      <header className="page-head">
        <button className="back" onClick={() => navigate({ page: "study" })}>
          ← Lessons
        </button>
      </header>
      <p className="eyebrow">Study</p>
      <h1 className="chapter-title is-latin">{lesson.titleEn}</h1>

      {prereqs.length ? (
        <p className="quiz-lead">
          Builds on{" "}
          {prereqs.map((prereq, index) => (
            <span key={prereq.id}>
              {index > 0 ? ", " : null}
              <button
                type="button"
                className="quiz-text-btn"
                onClick={() => navigate({ page: "study-lesson", lessonId: prereq.id })}
              >
                {prereq.titleEn}
              </button>
            </span>
          ))}
          .
        </p>
      ) : null}

      {ready ? <LessonBlocks blocks={lesson.body ?? []} /> : <p className="empty">This lesson is still on the way.</p>}

      {canPractice ? (
        <div className="quiz-start-row">
          <button
            type="button"
            className="quiz-start"
            onClick={() => navigate({ page: "study-practice", lessonId: lesson.id })}
          >
            Practice
          </button>
        </div>
      ) : null}

      <p className="study-credit">
        {GUIDE_ATTRIBUTION.text}{" "}
        <a href={lesson.sourceUrl} target="_blank" rel="noreferrer">
          Original lesson
        </a>
        {" · "}
        <a href={GUIDE_ATTRIBUTION.licenseUrl} target="_blank" rel="noreferrer">
          CC BY 4.0
        </a>
        .
      </p>
    </article>
  );
}
