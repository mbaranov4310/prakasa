import type { Book } from "../types";
import { LangToggle } from "./LangToggle";
import { useNavLang } from "../lib/nav-lang";
import { navigate } from "../lib/routes";

type Props = {
  book: Book;
};

export function ChapterList({ book }: Props) {
  const { navLang } = useNavLang();
  const bookTitle = navLang === "sanskrit" ? book.titleDev : book.titleIast;

  return (
    <section className="chapter-list">
      <header className="page-head">
        <button className="back" onClick={() => navigate({ page: "library" })}>
          ← Library
        </button>
        <LangToggle />
      </header>
      <h1 className={`chapter-title ${navLang === "sanskrit" ? "is-deva" : "is-latin"}`}>
        {bookTitle}
      </h1>
      <ol className="chapters">
        {book.chapters.map((chapter, index) => {
          const ready = chapter.status === "ready";
          const title = navLang === "sanskrit" ? chapter.titleDev : chapter.titleIast;
          return (
            <li key={chapter.id}>
              <button
                className={`chapter-row${ready ? "" : " disabled"}`}
                onClick={() => {
                  if (ready) {
                    navigate({ page: "chapter", bookId: book.id, chapterId: chapter.id });
                  }
                }}
                disabled={!ready}
              >
                <span className="chapter-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="chapter-names">
                  <span className={navLang === "sanskrit" ? "is-deva" : "is-latin"}>{title}</span>
                  {ready ? null : <span className="chapter-meta">coming soon</span>}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
