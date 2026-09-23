/**
 * Drill card provenance:
 * - ni-*: lesson present grid on stem naya (√nī). First Steps §7.2–7.3 (pp.126–129)
 *   shows the same present-active person endings on √gam / √bhū; textbook verb swapped.
 * - car-*: same endings on stem cara (√car). Lesson glyph carati; root swapped in.
 * - pac-*: same endings on stem paca (√pac). Lesson pacāmi; root swapped in.
 * Dual included from the printed lesson 3×3; First Steps tables omit dual.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-present-tense",
  titleEn: "The present tense",
  titleIast: "laṭ",
  lessonId: "verbs-the-present-tense",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // nī|present — stem naya
    {
      id: "ni-3sg",
      // lesson naya table; First Steps §7.2 gacchati shape (p.126)
      dev: "नयति",
      iast: "nayati",
      meaning: "he/she/it (one) naya",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "ni-3du",
      // lesson naya table
      dev: "नयतः",
      iast: "nayataḥ",
      meaning: "they (two) naya",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "ni-3pl",
      // lesson naya table; First Steps §7.2 gacchanti (p.126)
      dev: "नयन्ति",
      iast: "nayanti",
      meaning: "they (many) naya",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "ni-2sg",
      // lesson naya table; First Steps §7.2 gacchasi (p.126)
      dev: "नयसि",
      iast: "nayasi",
      meaning: "you (one) naya",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "ni-2du",
      // lesson naya table
      dev: "नयथः",
      iast: "nayathaḥ",
      meaning: "you (two) naya",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "ni-2pl",
      // lesson naya table; First Steps §7.2 gacchatha (p.126)
      dev: "नयथ",
      iast: "nayatha",
      meaning: "you (many) naya",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "ni-1sg",
      // lesson naya table; First Steps §7.2 gacchāmi (p.126)
      dev: "नयामि",
      iast: "nayāmi",
      meaning: "I (one) naya",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "ni-1du",
      // lesson naya table
      dev: "नयावः",
      iast: "nayāvaḥ",
      meaning: "we (two) naya",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "ni-1pl",
      // lesson naya table; First Steps §7.2 gacchāmaḥ (p.126)
      dev: "नयामः",
      iast: "nayāmaḥ",
      meaning: "we (many) naya",
      unit: "word",
      group: "nī|present",
    },
    // car|present — stem cara (√car; lesson carati)
    {
      id: "car-3sg",
      // naya endings on cara; First Steps §7.3 present-active shape (p.129)
      dev: "चरति",
      iast: "carati",
      meaning: "he/she/it (one) cara",
      unit: "word",
      group: "car|present",
    },
    {
      id: "car-3du",
      // naya endings on cara
      dev: "चरतः",
      iast: "carataḥ",
      meaning: "they (two) cara",
      unit: "word",
      group: "car|present",
    },
    {
      id: "car-3pl",
      // naya endings on cara
      dev: "चरन्ति",
      iast: "caranti",
      meaning: "they (many) cara",
      unit: "word",
      group: "car|present",
    },
    {
      id: "car-2sg",
      // naya endings on cara
      dev: "चरसि",
      iast: "carasi",
      meaning: "you (one) cara",
      unit: "word",
      group: "car|present",
    },
    {
      id: "car-2du",
      // naya endings on cara
      dev: "चरथः",
      iast: "carathaḥ",
      meaning: "you (two) cara",
      unit: "word",
      group: "car|present",
    },
    {
      id: "car-2pl",
      // naya endings on cara
      dev: "चरथ",
      iast: "caratha",
      meaning: "you (many) cara",
      unit: "word",
      group: "car|present",
    },
    {
      id: "car-1sg",
      // naya endings on cara
      dev: "चरामि",
      iast: "carāmi",
      meaning: "I (one) cara",
      unit: "word",
      group: "car|present",
    },
    {
      id: "car-1du",
      // naya endings on cara
      dev: "चरावः",
      iast: "carāvaḥ",
      meaning: "we (two) cara",
      unit: "word",
      group: "car|present",
    },
    {
      id: "car-1pl",
      // naya endings on cara
      dev: "चरामः",
      iast: "carāmaḥ",
      meaning: "we (many) cara",
      unit: "word",
      group: "car|present",
    },
    // pac|present — stem paca (√pac; lesson pacāmi)
    {
      id: "pac-3sg",
      // naya endings on paca; First Steps §7.3 present-active shape (p.129)
      dev: "पचति",
      iast: "pacati",
      meaning: "he/she/it (one) paca",
      unit: "word",
      group: "pac|present",
    },
    {
      id: "pac-3du",
      // naya endings on paca
      dev: "पचतः",
      iast: "pacataḥ",
      meaning: "they (two) paca",
      unit: "word",
      group: "pac|present",
    },
    {
      id: "pac-3pl",
      // naya endings on paca
      dev: "पचन्ति",
      iast: "pacanti",
      meaning: "they (many) paca",
      unit: "word",
      group: "pac|present",
    },
    {
      id: "pac-2sg",
      // naya endings on paca
      dev: "पचसि",
      iast: "pacasi",
      meaning: "you (one) paca",
      unit: "word",
      group: "pac|present",
    },
    {
      id: "pac-2du",
      // naya endings on paca
      dev: "पचथः",
      iast: "pacathaḥ",
      meaning: "you (two) paca",
      unit: "word",
      group: "pac|present",
    },
    {
      id: "pac-2pl",
      // naya endings on paca
      dev: "पचथ",
      iast: "pacatha",
      meaning: "you (many) paca",
      unit: "word",
      group: "pac|present",
    },
    {
      id: "pac-1sg",
      // naya endings on paca; lesson pacāmi
      dev: "पचामि",
      iast: "pacāmi",
      meaning: "I (one) paca",
      unit: "word",
      group: "pac|present",
    },
    {
      id: "pac-1du",
      // naya endings on paca
      dev: "पचावः",
      iast: "pacāvaḥ",
      meaning: "we (two) paca",
      unit: "word",
      group: "pac|present",
    },
    {
      id: "pac-1pl",
      // naya endings on paca
      dev: "पचामः",
      iast: "pacāmaḥ",
      meaning: "we (many) paca",
      unit: "word",
      group: "pac|present",
    },
  ] as QuizDeckItem[],
};
