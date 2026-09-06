export type Route =
  | { page: "library" }
  | { page: "book"; bookId: string }
  | { page: "chapter"; bookId: string; chapterId: string }
  | { page: "quiz" }
  | { page: "quiz-play" };

export function parseHash(): Route {
  const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (parts[0] === "quiz") {
    if (parts[1] === "play") return { page: "quiz-play" };
    return { page: "quiz" };
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
  if (route.page === "book") return `#/${route.bookId}`;
  return `#/${route.bookId}/${route.chapterId}`;
}

export function navigate(route: Route) {
  window.location.hash = toHash(route);
}
