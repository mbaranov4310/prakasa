import type { Chapter } from "../types";

type Props = {
  chapter: Chapter;
  /** Set when several verses share a page, so each note says which verse it is. */
  label?: string;
};

export function Glossary({ chapter, label }: Props) {
  if (!chapter.translation && !chapter.glossary?.length) return null;
  const translation = label ? `${label} translation` : "Translation";
  const glossary = label ? `${label} glossary` : "Glossary";

  return (
    <section className="notes">
      {chapter.translation ? (
        <details>
          <summary>{translation}</summary>
          <p className="translation">{chapter.translation}</p>
        </details>
      ) : null}
      {chapter.glossary?.length ? (
        <details>
          <summary>{glossary}</summary>
          <dl className="glossary">
            {chapter.glossary.map((entry) => (
              <div className="glossary-row" key={entry.term}>
                <dt>{entry.term}</dt>
                <dd>{entry.meaning}</dd>
              </div>
            ))}
          </dl>
        </details>
      ) : null}
    </section>
  );
}
