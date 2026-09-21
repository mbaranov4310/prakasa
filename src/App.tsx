import { useEffect, useMemo, useState } from "react";
import { getBook, getChapter } from "./content/library";
import { Library } from "./components/Library";
import { ChapterList } from "./components/ChapterList";
import { Reader } from "./components/Reader";
import { QuizSetup } from "./components/QuizSetup";
import { QuizPlay } from "./components/QuizPlay";
import { StudyIndex } from "./components/StudyIndex";
import { StudyLesson } from "./components/StudyLesson";
import { SiteFooter } from "./components/SiteFooter";
import { NavLangProvider } from "./lib/nav-lang";
import { loadQuizSetup } from "./lib/prefs";
import { parseHash, type Route } from "./lib/routes";
import { setupForLesson } from "./lib/study";

function StudyPractice({ lessonId }: { lessonId: string }) {
  const setup = useMemo(() => setupForLesson(lessonId), [lessonId]);
  if (!setup) return <StudyLesson lessonId={lessonId} />;
  return <QuizPlay key={lessonId} setup={setup} back={{ page: "study-lesson", lessonId }} />;
}

function Routes() {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    if (!window.location.hash) window.location.hash = "#/";
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route.page === "quiz") return <QuizSetup />;
  if (route.page === "quiz-play") {
    return <QuizPlay setup={loadQuizSetup()} back={{ page: "quiz" }} />;
  }
  if (route.page === "study") return <StudyIndex />;
  if (route.page === "study-lesson") return <StudyLesson lessonId={route.lessonId} />;
  if (route.page === "study-practice") return <StudyPractice lessonId={route.lessonId} />;

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
