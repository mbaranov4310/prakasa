import { books } from "../content/library";
import { walkLeaves } from "./tree";

/** Devanagari consonant → IAST (no inherent a). Matches scripts/rudra-iast.py. */
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
  ळ: "ḷ",
  व: "v",
  श: "ś",
  ष: "ṣ",
  स: "s",
  ह: "h",
};

const VIRAMA = "\u094d";
const CONS_CLASS = Object.keys(CONS).join("");
const CLUSTER_RE = new RegExp(`[${CONS_CLASS}](?:${VIRAMA}[${CONS_CLASS}])+`, "gu");

/** Known syllable encodings that are not real conjuncts. */
const SKIP = new Set(["व्ण्ण", "ङ्ष"]);

/**
 * Lesson / Baraha ligatures to keep even when the current library
 * does not use them (र्न, ट्र, ह्ण, ज्ज, …).
 */
const SEED_CLUSTERS = [
  "क्ष",
  "ज्ञ",
  "त्स",
  "ण्ड",
  "स्त",
  "र्त",
  "र्न",
  "र्म",
  "प्र",
  "क्र",
  "त्र",
  "ट्र",
  "प्न",
  "क्न",
  "त्न",
  "द्य",
  "द्म",
  "ह्य",
  "ह्म",
  "श्र",
  "श्व",
  "श्च",
  "ष्ट",
  "ष्ठ",
  "द्घ",
  "द्ध",
  "द्भ",
  "क्त",
  "त्त",
  "ङ्क",
  "ङ्ग",
  "द्व",
  "न्न",
  "ह्ण",
  "ह्र",
  "ह्व",
  "च्च",
  "ट्य",
  "ज्ज",
  "त्त्न",
  "क्क",
  "ग्र",
  "द्र",
  "ञ्च",
  "ल्ल",
];

export type ClusterItem = {
  id: string;
  dev: string;
  iast: string;
};

export function clusterToIast(dev: string): string | null {
  const parts = dev.normalize("NFC").split(VIRAMA);
  if (parts.length < 2) return null;
  const roman: string[] = [];
  for (let i = 0; i < parts.length; i++) {
    const cons = CONS[parts[i]];
    if (!cons) return null;
    roman.push(i === parts.length - 1 ? `${cons}a` : cons);
  }
  return roman.join("");
}

function addClusters(into: Set<string>, text: string) {
  const normalized = text.normalize("NFC");
  CLUSTER_RE.lastIndex = 0;
  for (const match of normalized.matchAll(CLUSTER_RE)) {
    const dev = match[0];
    if (!SKIP.has(dev) && clusterToIast(dev)) into.add(dev);
  }
}

function harvestLibraryClusters(): Set<string> {
  const found = new Set<string>();
  for (const book of books) {
    for (const chapter of book.chapters) {
      if (!chapter.root) continue;
      for (const leaf of walkLeaves(chapter.root)) {
        if (leaf.syllables?.length) {
          for (const syllable of leaf.syllables) addClusters(found, syllable.dev);
        } else {
          addClusters(found, leaf.dev);
        }
      }
    }
  }
  return found;
}

function toItems(devs: Iterable<string>): ClusterItem[] {
  const usedIds = new Set<string>();
  const items: ClusterItem[] = [];
  for (const dev of devs) {
    const iast = clusterToIast(dev);
    if (!iast) continue;
    let id = iast;
    let n = 2;
    while (usedIds.has(id)) {
      id = `${iast}-${n}`;
      n += 1;
    }
    usedIds.add(id);
    items.push({ id, dev, iast });
  }
  items.sort((a, b) => {
    const ac = a.dev.split(VIRAMA).length;
    const bc = b.dev.split(VIRAMA).length;
    if (ac !== bc) return ac - bc;
    return a.iast.localeCompare(b.iast, "en");
  });
  return items;
}

let cached: ClusterItem[] | null = null;

/** Unique conjuncts from the recitation library, plus distinctive ligatures. */
export function libraryClusterItems(): ClusterItem[] {
  if (cached) return cached;
  const found = harvestLibraryClusters();
  for (const seed of SEED_CLUSTERS) found.add(seed);
  cached = toItems(found);
  return cached;
}
