import { GUIDE_ATTRIBUTION, getLessonMeta, getTopics } from "../lib/study";
import { navigate } from "../lib/routes";

export function StudyIndex() {
  const topics = getTopics();

  return (
    <section className="study">
      <header className="page-head">
        <button className="back" onClick={() => navigate({ page: "library" })}>
          ← Library
        </button>
        <button className="quiz-entry" type="button" onClick={() => navigate({ page: "quiz" })}>
          Quiz
        </button>
      </header>
      <p className="eyebrow">Study</p>
      <h1 className="chapter-title is-latin">Lessons</h1>
      <p className="quiz-lead">
        A map of Sanskrit grammar, with drills. Start with Devanagari.
      </p>

      {topics.map((topic) => (
        <section key={topic.id} className="study-topic">
          <h2 className="study-topic-title">{topic.titleEn}</h2>
          <ol className="chapters">
            {topic.lessonIds.map((lessonId, index) => {
              const lesson = getLessonMeta(lessonId);
              if (!lesson) return null;
              const ready = lesson.status === "ready";
              return (
                <li key={lesson.id}>
                  <button
                    className="chapter-row"
                    type="button"
                    onClick={() => navigate({ page: "study-lesson", lessonId: lesson.id })}
                  >
                    <span className="chapter-num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="chapter-names">
                      <span className="is-latin">{lesson.titleEn}</span>
                      {ready ? (
                        <span className="chapter-meta">practice</span>
                      ) : (
                        <span className="chapter-meta">on the way</span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </section>
      ))}

      <p className="study-credit">
        {GUIDE_ATTRIBUTION.text}{" "}
        <a href={GUIDE_ATTRIBUTION.licenseUrl} target="_blank" rel="noreferrer">
          License
        </a>
        .
      </p>
    </section>
  );
}
