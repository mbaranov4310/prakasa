import { books } from "../content/library";
import type { Syllable } from "../types";
import { walkLeaves } from "./tree";

export type LetterExample = {
  syllables: Syllable[];
  hitIndex: number;
  bookId: string;
  chapterId: string;
  titleDev: string;
  titleIast: string;
};

const cache = new Map<string, LetterExample | null>();
let indexed = false;
const buckets = new Map<string, LetterExample[]>();

function key(dev: string, iast: string): string {
  return `${dev}\0${iast}`;
}

function ensureIndex(): void {
  if (indexed) return;
  indexed = true;
  for (const book of books) {
    for (const chapter of book.chapters) {
      if (chapter.status !== "ready" || !chapter.root) continue;
      for (const leaf of walkLeaves(chapter.root)) {
        if (leaf.level !== "word" || !leaf.syllables || leaf.syllables.length < 2) continue;
        leaf.syllables.forEach((syllable, hitIndex) => {
          const id = key(syllable.dev, syllable.iast);
          const list = buckets.get(id) ?? [];
          list.push({
            syllables: leaf.syllables!,
            hitIndex,
            bookId: book.id,
            chapterId: chapter.id,
            titleDev: chapter.titleDev,
            titleIast: chapter.titleIast,
          });
          buckets.set(id, list);
        });
      }
    }
  }
}

/** Shortest ready-chapter word whose syllables include this exact sign. */
export function letterExample(dev: string, iast: string): LetterExample | null {
  const id = key(dev, iast);
  if (cache.has(id)) return cache.get(id) ?? null;
  ensureIndex();
  const list = buckets.get(id) ?? [];
  const best =
    [...list].sort((a, b) => {
      const byCount = a.syllables.length - b.syllables.length;
      if (byCount) return byCount;
      const aDev = a.syllables.map((syllable) => syllable.dev).join("").length;
      const bDev = b.syllables.map((syllable) => syllable.dev).join("").length;
      return aDev - bDev;
    })[0] ?? null;
  cache.set(id, best);
  return best;
}
