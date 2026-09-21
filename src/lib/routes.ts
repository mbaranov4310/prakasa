export type Route =
  | { page: "library" }
  | { page: "book"; bookId: string }
  | { page: "chapter"; bookId: string; chapterId: string }
  | { page: "quiz" }
  | { page: "quiz-play" }
  | { page: "study" }
  | { page: "study-lesson"; lessonId: string }
  | { page: "study-practice"; lessonId: string };

export function parseHash(): Route {
  const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (parts[0] === "quiz") {
    if (parts[1] === "play") return { page: "quiz-play" };
    return { page: "quiz" };
  }
  if (parts[0] === "study") {
    if (parts[1] && parts[2] === "practice") return { page: "study-practice", lessonId: parts[1] };
    if (parts[1]) return { page: "study-lesson", lessonId: parts[1] };
    return { page: "study" };
  }
  if (parts.length >= 2) {
    return { page: "chapter", bookId: parts[0], chapterId: parts[1] };
  }
  if (parts.length === 1) {
    return { page: "book", bookId: parts[0] };
  }
  return { page: "library" };
}

export function toHash(route: Route): string {
  if (route.page === "library") return "#/";
  if (route.page === "quiz") return "#/quiz";
  if (route.page === "quiz-play") return "#/quiz/play";
  if (route.page === "study") return "#/study";
  if (route.page === "study-lesson") return `#/study/${route.lessonId}`;
  if (route.page === "study-practice") return `#/study/${route.lessonId}/practice`;
  if (route.page === "book") return `#/${route.bookId}`;
  return `#/${route.bookId}/${route.chapterId}`;
}

export function navigate(route: Route) {
  window.location.hash = toHash(route);
}
