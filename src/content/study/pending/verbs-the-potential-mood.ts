/**
 * Drill card provenance:
 * Cue: Gonda, Concise Elementary Grammar §59.3 / §60 (p.48) — optative (potential)
 *   of thematic √bhṛ (bhara: bhareyam, bharet, bhareyur …). First Steps mentions the
 *   optative (§7.1, §7.4) but has no person-grid exercise.
 * Endings: lesson potential table only (īt ītām īyuḥ / īḥ ītam īta / īyam īva īma),
 *   with stem-final a + ī → e as on naya + īt → nayet. No ātmanepada.
 * Stems: naya (√nī, printed lesson grid); bhava (√bhū) and paca (√pac) swapped in
 *   for Gonda’s bhara.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-potential-mood",
  titleEn: "The potential mood",
  titleIast: "vidhi-liṅ",
  lessonId: "verbs-the-potential-mood",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // nī|potential — stem naya
    {
      id: "ni-3sg",
      // lesson naya potential table; Gonda §60 bharet shape (p.48), √bhṛ swapped
      dev: "नयेत्",
      iast: "nayet",
      meaning: "he/she/it (one) naya",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "ni-3du",
      // lesson naya potential table
      dev: "नयेताम्",
      iast: "nayetām",
      meaning: "they (two) naya",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "ni-3pl",
      // lesson naya potential table; Gonda §60 bhareyur (p.48)
      dev: "नयेयुः",
      iast: "nayeyuḥ",
      meaning: "they (many) naya",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "ni-2sg",
      // lesson naya potential table
      dev: "नयेः",
      iast: "nayeḥ",
      meaning: "you (one) naya",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "ni-2du",
      // lesson naya potential table
      dev: "नयेतम्",
      iast: "nayetam",
      meaning: "you (two) naya",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "ni-2pl",
      // lesson naya potential table
      dev: "नयेत",
      iast: "nayeta",
      meaning: "you (many) naya",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "ni-1sg",
      // lesson naya potential table; Gonda §60 bhareyam (p.48)
      dev: "नयेयम्",
      iast: "nayeyam",
      meaning: "I (one) naya",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "ni-1du",
      // lesson naya potential table
      dev: "नयेव",
      iast: "nayeva",
      meaning: "we (two) naya",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "ni-1pl",
      // lesson naya potential table
      dev: "नयेम",
      iast: "nayema",
      meaning: "we (many) naya",
      unit: "word",
      group: "nī|potential",
    },
    // bhū|potential — stem bhava (√bhū; Gonda bhara swapped)
    {
      id: "bhu-3sg",
      // lesson endings on bhava; Gonda §60 bharet (p.48), √bhṛ → √bhū
      dev: "भवेत्",
      iast: "bhavet",
      meaning: "he/she/it (one) bhava",
      unit: "word",
      group: "bhū|potential",
    },
    {
      id: "bhu-3du",
      // lesson endings on bhava
      dev: "भवेताम्",
      iast: "bhavetām",
      meaning: "they (two) bhava",
      unit: "word",
      group: "bhū|potential",
    },
    {
      id: "bhu-3pl",
      // lesson endings on bhava
      dev: "भवेयुः",
      iast: "bhaveyuḥ",
      meaning: "they (many) bhava",
      unit: "word",
      group: "bhū|potential",
    },
    {
      id: "bhu-2sg",
      // lesson endings on bhava
      dev: "भवेः",
      iast: "bhaveḥ",
      meaning: "you (one) bhava",
      unit: "word",
      group: "bhū|potential",
    },
    {
      id: "bhu-2du",
      // lesson endings on bhava
      dev: "भवेतम्",
      iast: "bhavetam",
      meaning: "you (two) bhava",
      unit: "word",
      group: "bhū|potential",
    },
    {
      id: "bhu-2pl",
      // lesson endings on bhava
      dev: "भवेत",
      iast: "bhaveta",
      meaning: "you (many) bhava",
      unit: "word",
      group: "bhū|potential",
    },
    {
      id: "bhu-1sg",
      // lesson endings on bhava
      dev: "भवेयम्",
      iast: "bhaveyam",
      meaning: "I (one) bhava",
      unit: "word",
      group: "bhū|potential",
    },
    {
      id: "bhu-1du",
      // lesson endings on bhava
      dev: "भवेव",
      iast: "bhaveva",
      meaning: "we (two) bhava",
      unit: "word",
      group: "bhū|potential",
    },
    {
      id: "bhu-1pl",
      // lesson endings on bhava
      dev: "भवेम",
      iast: "bhavema",
      meaning: "we (many) bhava",
      unit: "word",
      group: "bhū|potential",
    },
    // pac|potential — stem paca (√pac; Gonda bhara swapped)
    {
      id: "pac-3sg",
      // lesson endings on paca; Gonda §60 bharet (p.48), √bhṛ → √pac
      dev: "पचेत्",
      iast: "pacet",
      meaning: "he/she/it (one) paca",
      unit: "word",
      group: "pac|potential",
    },
    {
      id: "pac-3du",
      // lesson endings on paca
      dev: "पचेताम्",
      iast: "pacetām",
      meaning: "they (two) paca",
      unit: "word",
      group: "pac|potential",
    },
    {
      id: "pac-3pl",
      // lesson endings on paca
      dev: "पचेयुः",
      iast: "paceyuḥ",
      meaning: "they (many) paca",
      unit: "word",
      group: "pac|potential",
    },
    {
      id: "pac-2sg",
      // lesson endings on paca
      dev: "पचेः",
      iast: "paceḥ",
      meaning: "you (one) paca",
      unit: "word",
      group: "pac|potential",
    },
    {
      id: "pac-2du",
      // lesson endings on paca
      dev: "पचेतम्",
      iast: "pacetam",
      meaning: "you (two) paca",
      unit: "word",
      group: "pac|potential",
    },
    {
      id: "pac-2pl",
      // lesson endings on paca
      dev: "पचेत",
      iast: "paceta",
      meaning: "you (many) paca",
      unit: "word",
      group: "pac|potential",
    },
    {
      id: "pac-1sg",
      // lesson endings on paca
      dev: "पचेयम्",
      iast: "paceyam",
      meaning: "I (one) paca",
      unit: "word",
      group: "pac|potential",
    },
    {
      id: "pac-1du",
      // lesson endings on paca
      dev: "पचेव",
      iast: "paceva",
      meaning: "we (two) paca",
      unit: "word",
      group: "pac|potential",
    },
    {
      id: "pac-1pl",
      // lesson endings on paca
      dev: "पचेम",
      iast: "pacema",
      meaning: "we (many) paca",
      unit: "word",
      group: "pac|potential",
    },
  ] as QuizDeckItem[],
};
