import { books } from "../content/library";
import { walkLeaves } from "./tree";

/** Devanagari consonant → IAST, no inherent vowel. Same map as clusters.ts. */
const CONS: Record<string, string> = {
  क: "k",
  ख: "kh",
  ग: "g",
  घ: "gh",
  ङ: "ṅ",
  च: "c",
  छ: "ch",
  ज: "j",
  झ: "jh",
  ञ: "ñ",
  ट: "ṭ",
  ठ: "ṭh",
  ड: "ḍ",
  ढ: "ḍh",
  ण: "ṇ",
  त: "t",
  थ: "th",
  द: "d",
  ध: "dh",
  न: "n",
  प: "p",
  फ: "ph",
  ब: "b",
  भ: "bh",
  म: "m",
  य: "y",
  र: "r",
  ल: "l",
  व: "v",
  श: "ś",
  ष: "ṣ",
  स: "s",
  ह: "h",
};

/** One vowel sign, or nothing for the inherent a. */
const VOWEL_SIGN: Record<string, string> = {
  "": "a",
  "\u093e": "ā",
  "\u093f": "i",
  "\u0940": "ī",
  "\u0941": "u",
  "\u0942": "ū",
  "\u0943": "ṛ",
  "\u0944": "ṝ",
  "\u0962": "ḷ",
  "\u0963": "ḹ",
  "\u0947": "e",
  "\u0948": "ai",
  "\u094b": "o",
  "\u094c": "au",
};

const VOWEL_ORDER = ["a", "ā", "i", "ī", "u", "ū", "ṛ", "ṝ", "ḷ", "ḹ", "e", "ai", "o", "au"];
const CONS_ORDER = Object.keys(CONS);
const VIRAMA = "\u094d";

export type VowelMarkItem = {
  id: string;
  dev: string;
  iast: string;
  /** Same consonant, so the other buttons are that letter with a different vowel. */
  group: string;
};

/**
 * A single consonant plus one vowel, as stored on a library syllable.
 * Clusters, anusvāra, visarga, and candrabindu stay out.
 */
export function parseConsonantVowel(dev: string): { cons: string; iast: string } | null {
  const text = dev.normalize("NFC");
  if (!text || text.includes(VIRAMA)) return null;
  const cons = text[0];
  const base = CONS[cons];
  if (!base) return null;
  const mark = text.slice(1);
  if (!(mark in VOWEL_SIGN)) return null;
  return { cons, iast: base + VOWEL_SIGN[mark] };
}

function harvest(): Map<string, { dev: string; iast: string; cons: string }> {
  const byDev = new Map<string, { dev: string; iast: string; cons: string }>();
  for (const book of books) {
    for (const chapter of book.chapters) {
      if (chapter.status !== "ready" || !chapter.root) continue;
      for (const leaf of walkLeaves(chapter.root)) {
        for (const syllable of leaf.syllables ?? []) {
          const parsed = parseConsonantVowel(syllable.dev);
          if (!parsed) continue;
          if (syllable.iast.normalize("NFC") !== parsed.iast) continue;
          if (!byDev.has(syllable.dev)) {
            byDev.set(syllable.dev, { dev: syllable.dev, iast: parsed.iast, cons: parsed.cons });
          }
        }
      }
    }
  }
  return byDev;
}

let cached: VowelMarkItem[] | null = null;

/** Distinct consonant–vowel syllables from the recitation texts. Groups under four forms are left out. */
export function libraryVowelMarkItems(): VowelMarkItem[] {
  if (cached) return cached;
  const found = [...harvest().values()];
  const byCons = new Map<string, typeof found>();
  for (const item of found) {
    const list = byCons.get(item.cons) ?? [];
    list.push(item);
    byCons.set(item.cons, list);
  }
  const items: VowelMarkItem[] = [];
  for (const [cons, list] of byCons) {
    const distinct = new Set(list.map((item) => item.iast));
    if (distinct.size < 4) continue;
    for (const item of list) {
      items.push({
        id: item.iast,
        dev: item.dev,
        iast: item.iast,
        group: cons,
      });
    }
  }
  items.sort((a, b) => {
    const byCons = CONS_ORDER.indexOf(a.group) - CONS_ORDER.indexOf(b.group);
    if (byCons) return byCons;
    const aVowel = a.iast.slice(CONS[a.group].length);
    const bVowel = b.iast.slice(CONS[b.group].length);
    return VOWEL_ORDER.indexOf(aVowel) - VOWEL_ORDER.indexOf(bVowel);
  });
  cached = items;
  return cached;
}
