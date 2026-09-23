import { books, getChapter } from "../content/library";
import { scriptDecks } from "../content/study/decks";
import type { Chapter, SpanNode } from "../types";
import { descendantWordIds, findPath, walkLeaves } from "./tree";

export type QuizUnit = "word" | "phrase" | "akshara" | "matra" | "conjunct" | "sandhi";

export type MantraUnit = "word" | "phrase";

export type QuizFace = "dev" | "iast" | "meaning";

export type QuizDirection =
  | "iast-meaning"
  | "meaning-iast"
  | "meaning-dev"
  | "iast-dev"
  | "dev-iast";

export type QuizMode = "mcq" | "flashcard";

export type QuizOccurrence = {
  bookId: string;
  chapterId: string;
  spanId: string;
};

export type QuizItem = {
  id: string;
  unit: QuizUnit;
  dev: string;
  iast: string;
  meaning?: string;
  /** Same-stem family. Wrong answers are drawn from this set when it is set. */
  group?: string;
  sourceId: string;
  occurrences: QuizOccurrence[];
  lessonId?: string;
};

export type QuizDeckItem = {
  id: string;
  dev: string;
  iast: string;
  meaning?: string;
  unit: QuizUnit;
  /** `stem|number` for nouns, `root|tense` or `root|person` for verbs. */
  group?: string;
};

export type QuizDeckKind = "script" | "grammar";

export type QuizDeck = {
  id: string;
  titleEn: string;
  titleIast: string;
  lessonId?: string;
  kind?: QuizDeckKind;
  units: QuizUnit[];
  items: QuizDeckItem[];
};

export type QuizSetupState = {
  chapterKeys: string[];
  deckIds: string[];
  units: MantraUnit[];
  direction: QuizDirection;
  mode: QuizMode;
};

export type MantraSource = {
  key: string;
  bookId: string;
  bookTitleDev: string;
  bookTitleIast: string;
  bookTitleEn: string;
  chapterId: string;
  chapterTitleDev: string;
  chapterTitleIast: string;
  chapterTitleEn: string;
};

export type MantraCite = {
  bookId: string;
  chapterId: string;
  titleDev: string;
  titleIast: string;
  titleEn: string;
  meaning: string;
  leaves: Array<{
    id: string;
    dev: string;
    iast: string;
    trailing?: string;
    lineBreakAfter?: boolean;
  }>;
  highlightIds: string[];
};

export const QUIZ_DIRECTIONS: {
  id: QuizDirection;
  prompt: QuizFace;
  answer: QuizFace;
  label: string;
}[] = [
  { id: "iast-meaning", prompt: "iast", answer: "meaning", label: "IAST → meaning" },
  { id: "meaning-iast", prompt: "meaning", answer: "iast", label: "Meaning → IAST" },
  { id: "meaning-dev", prompt: "meaning", answer: "dev", label: "Meaning → Devanagari" },
  { id: "iast-dev", prompt: "iast", answer: "dev", label: "IAST → Devanagari" },
  { id: "dev-iast", prompt: "dev", answer: "iast", label: "Devanagari → IAST" },
];

/** Quiz-only letter/sandhi decks. Never import from library.ts. */
export const quizDecks: QuizDeck[] = scriptDecks;

const chapterExtractCache = new Map<string, QuizItem[]>();

export function chapterKey(bookId: string, chapterId: string): string {
  return `${bookId}/${chapterId}`;
}

export function parseChapterKey(key: string): { bookId: string; chapterId: string } | null {
  const slash = key.indexOf("/");
  if (slash <= 0 || slash === key.length - 1) return null;
  return { bookId: key.slice(0, slash), chapterId: key.slice(slash + 1) };
}

export function directionMeta(direction: QuizDirection) {
  return QUIZ_DIRECTIONS.find((entry) => entry.id === direction) ?? QUIZ_DIRECTIONS[0];
}

export function directionNeedsMeaning(direction: QuizDirection): boolean {
  const meta = directionMeta(direction);
  return meta.prompt === "meaning" || meta.answer === "meaning";
}

export function itemFace(item: QuizItem, face: QuizFace): string {
  if (face === "meaning") return item.meaning?.trim() ?? "";
  return item[face].trim();
}

export function itemEligible(item: QuizItem, direction: QuizDirection): boolean {
  if (!item.dev.trim() || !item.iast.trim()) return false;
  if (directionNeedsMeaning(direction) && !item.meaning?.trim()) return false;
  return true;
}

function walkAll(node: SpanNode, visit: (node: SpanNode) => void) {
  visit(node);
  for (const child of node.children ?? []) walkAll(child, visit);
}

function extractChapterItems(bookId: string, chapter: Chapter): QuizItem[] {
  const key = chapterKey(bookId, chapter.id);
  const cached = chapterExtractCache.get(key);
  if (cached) return cached;

  const items: QuizItem[] = [];
  if (chapter.status === "ready" && chapter.root) {
    walkAll(chapter.root, (node) => {
      if (node.level !== "word" && node.level !== "phrase") return;
      const dev = node.dev.trim();
      const iast = node.iast.trim();
      if (!dev || !iast) return;
      const meaning = node.meaning.trim();
      items.push({
        id: `${key}/${node.id}`,
        unit: node.level,
        dev,
        iast,
        meaning: meaning || undefined,
        sourceId: key,
        occurrences: [{ bookId, chapterId: chapter.id, spanId: node.id }],
      });
    });
  }

  chapterExtractCache.set(key, items);
  return items;
}

export function mantraSources(): MantraSource[] {
  const sources: MantraSource[] = [];
  for (const book of books) {
    for (const chapter of book.chapters) {
      if (chapter.status !== "ready" || !chapter.root) continue;
      sources.push({
        key: chapterKey(book.id, chapter.id),
        bookId: book.id,
        bookTitleDev: book.titleDev,
        bookTitleIast: book.titleIast,
        bookTitleEn: book.titleEn,
        chapterId: chapter.id,
        chapterTitleDev: chapter.titleDev,
        chapterTitleIast: chapter.titleIast,
        chapterTitleEn: chapter.titleEn,
      });
    }
  }
  return sources;
}

export function chapterEligibleCount(
  bookId: string,
  chapterId: string,
  units: MantraUnit[],
  direction: QuizDirection,
): number {
  const chapter = getChapter(bookId, chapterId);
  if (!chapter) return 0;
  const unitSet = new Set(units);
  return extractChapterItems(bookId, chapter).filter(
    (item) => unitSet.has(item.unit as MantraUnit) && itemEligible(item, direction),
  ).length;
}

function dedupeKey(item: QuizItem): string {
  return `${item.unit}\0${item.iast}\0${item.meaning ?? ""}`;
}

export function deckEligibleCount(deckId: string, direction: QuizDirection): number {
  const deck = quizDecks.find((entry) => entry.id === deckId);
  if (!deck) return 0;
  return deck.items.filter((entry) =>
    itemEligible(
      {
        id: entry.id,
        unit: entry.unit,
        dev: entry.dev,
        iast: entry.iast,
        meaning: entry.meaning,
        group: entry.group,
        sourceId: deck.id,
        occurrences: [],
      },
      direction,
    ),
  ).length;
}

function itemsFromDecks(setup: QuizSetupState): QuizItem[] {
  const selected = new Set(setup.deckIds);
  const items: QuizItem[] = [];
  for (const deck of quizDecks) {
    if (!selected.has(deck.id)) continue;
    for (const entry of deck.items) {
      const item: QuizItem = {
        id: `deck:${deck.id}:${entry.id}`,
        unit: entry.unit,
        dev: entry.dev,
        iast: entry.iast,
        meaning: entry.meaning,
        group: entry.group,
        sourceId: `deck:${deck.id}`,
        occurrences: [],
        lessonId: deck.lessonId,
      };
      if (itemEligible(item, setup.direction)) items.push(item);
    }
  }
  return items;
}

export function itemsForSetup(setup: QuizSetupState): QuizItem[] {
  const selected = new Set(setup.chapterKeys);
  const unitSet = new Set(setup.units);
  const merged = new Map<string, QuizItem>();

  for (const book of books) {
    for (const chapter of book.chapters) {
      const key = chapterKey(book.id, chapter.id);
      if (!selected.has(key)) continue;
      for (const item of extractChapterItems(book.id, chapter)) {
        if (!unitSet.has(item.unit as MantraUnit)) continue;
        if (!itemEligible(item, setup.direction)) continue;
        const existing = merged.get(dedupeKey(item));
        if (existing) {
          existing.occurrences.push(...item.occurrences);
        } else {
          merged.set(dedupeKey(item), {
            ...item,
            occurrences: [...item.occurrences],
          });
        }
      }
    }
  }

  return [...merged.values(), ...itemsFromDecks(setup)];
}

export function eligibleChapterKeys(units: MantraUnit[], direction: QuizDirection): string[] {
  return mantraSources()
    .filter((source) => chapterEligibleCount(source.bookId, source.chapterId, units, direction) > 0)
    .map((source) => source.key);
}

export function defaultQuizSetup(): QuizSetupState {
  const units: MantraUnit[] = ["word", "phrase"];
  const direction: QuizDirection = "iast-meaning";
  return {
    chapterKeys: eligibleChapterKeys(units, direction),
    deckIds: [],
    units,
    direction,
    mode: "mcq",
  };
}

export function pruneChapterKeys(
  keys: string[],
  units: MantraUnit[],
  direction: QuizDirection,
): string[] {
  return keys.filter((key) => {
    const parsed = parseChapterKey(key);
    if (!parsed) return false;
    return chapterEligibleCount(parsed.bookId, parsed.chapterId, units, direction) > 0;
  });
}

export function shuffle<T>(items: T[], rng: () => number = Math.random): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function mcqOptions(
  item: QuizItem,
  pool: QuizItem[],
  field: QuizFace,
  count = 4,
  rng: () => number = Math.random,
): string[] {
  const correct = itemFace(item, field);
  const source = item.group
    ? pool.filter((other) => other.group === item.group)
    : pool;
  const unique = new Set<string>();
  for (const other of source) {
    const value = itemFace(other, field);
    if (value && value !== correct) unique.add(value);
  }
  const distractors = shuffle([...unique], rng).slice(0, Math.max(0, count - 1));
  return shuffle([correct, ...distractors], rng);
}

export function mantraCite(occurrence: QuizOccurrence): MantraCite | null {
  const chapter = getChapter(occurrence.bookId, occurrence.chapterId);
  const root = chapter?.root;
  if (!chapter || !root) return null;
  const path = findPath(root, occurrence.spanId);
  if (!path) return null;
  const target = path[path.length - 1];
  const ancestor =
    [...path].reverse().find((node) => node.level === "sentence") ??
    [...path].reverse().find((node) => node.level === "phrase") ??
    target;
  const highlightIds =
    target.level === "word" ? [target.id] : [...descendantWordIds(target)];
  return {
    bookId: occurrence.bookId,
    chapterId: occurrence.chapterId,
    titleDev: chapter.titleDev,
    titleIast: chapter.titleIast,
    titleEn: chapter.titleEn,
    meaning: ancestor.meaning,
    leaves: walkLeaves(ancestor).map((leaf) => ({
      id: leaf.id,
      dev: leaf.dev,
      iast: leaf.iast,
      trailing: leaf.trailing,
      lineBreakAfter: leaf.lineBreakAfter,
    })),
    highlightIds,
  };
}
