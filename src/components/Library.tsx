import { books } from "../content/library";
import { LangToggle } from "./LangToggle";
import { useNavLang } from "../lib/nav-lang";
import { navigate } from "../lib/routes";

export function Library() {
  const { navLang } = useNavLang();

  return (
    <section className="library">
      <header className="page-head">
        <p className="eyebrow">Library</p>
        <LangToggle />
      </header>
      <h1 className="is-latin">Prakāśa</h1>
      <ul className="book-grid">
        {books.map((book) => {
          const ready = book.chapters.filter((chapter) => chapter.status === "ready").length;
          const title = navLang === "sanskrit" ? book.titleDev : book.titleEn;
          return (
            <li key={book.id}>
              <button
                className="book-card"
                onClick={() => navigate({ page: "book", bookId: book.id })}
              >
                <span className={`book-title ${navLang === "sanskrit" ? "is-deva" : "is-latin"}`}>
                  {title}
                </span>
                <span className="book-count">
                  {ready} {ready === 1 ? "mantra" : "mantras"} ready
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
