import type { Chapter } from "../types";

type Props = {
  chapter: Chapter;
};

export function Glossary({ chapter }: Props) {
  if (!chapter.translation && !chapter.glossary?.length) return null;

  return (
    <section className="notes">
      {chapter.translation ? (
        <details>
          <summary>Translation</summary>
          <p className="translation">{chapter.translation}</p>
        </details>
      ) : null}
      {chapter.glossary?.length ? (
        <details>
          <summary>Glossary</summary>
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
