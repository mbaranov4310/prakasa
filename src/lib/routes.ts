export type Route =
  | { page: "library" }
  | { page: "book"; bookId: string }
  | { page: "chapter"; bookId: string; chapterId: string };

export function parseHash(): Route {
  const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
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
  if (route.page === "book") return `#/${route.bookId}`;
  return `#/${route.bookId}/${route.chapterId}`;
}

export function navigate(route: Route) {
  window.location.hash = toHash(route);
}
