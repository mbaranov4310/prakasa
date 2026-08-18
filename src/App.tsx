import { useEffect, useState } from "react";
import { getBook, getChapter } from "./content/library";
import { Library } from "./components/Library";
import { ChapterList } from "./components/ChapterList";
import { Reader } from "./components/Reader";
import { SiteFooter } from "./components/SiteFooter";
import { NavLangProvider } from "./lib/nav-lang";
import { parseHash, type Route } from "./lib/routes";

function Routes() {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    if (!window.location.hash) window.location.hash = "#/";
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route.page === "chapter") {
    const chapter = getChapter(route.bookId, route.chapterId);
    if (chapter) return <Reader bookId={route.bookId} chapter={chapter} />;
  }

  if (route.page === "book" || route.page === "chapter") {
    const book = getBook(route.bookId);
    if (book) return <ChapterList book={book} />;
  }

  return <Library />;
}

export default function App() {
  return (
    <NavLangProvider>
      <Routes />
      <SiteFooter />
    </NavLangProvider>
  );
}
