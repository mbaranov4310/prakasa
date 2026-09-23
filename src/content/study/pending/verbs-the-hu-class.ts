/**
 * Drill card provenance:
 * - hu-*: lesson present (parasmaipada) grid on √hu (strong juho / weak juhu).
 *   Gonda §65 (pp.54–55) paradigms the same root with the same join; First Steps
 *   has no class-III exercise. No second root: lesson marks dā/dhā irregular,
 *   and other Gonda III roots (bhī, bhṛ) do not take the juho/juhu join printed here.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-hu-class",
  titleEn: "The hu class",
  titleIast: "juhotyādi",
  lessonId: "verbs-the-hu-class",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // hu|present — lesson juhoti table
    {
      id: "hu-3sg",
      // lesson present table; Gonda §65 juhoti (p.54)
      dev: "जुहोति",
      iast: "juhoti",
      meaning: "he/she/it (one) hu",
      unit: "word",
      group: "hu|present",
    },
    {
      id: "hu-3du",
      // lesson present table; Gonda §65 juhutas (p.54)
      dev: "जुहुतः",
      iast: "juhutaḥ",
      meaning: "they (two) hu",
      unit: "word",
      group: "hu|present",
    },
    {
      id: "hu-3pl",
      // lesson present table (-ati); Gonda §65 juhvati (p.54)
      dev: "जुह्वति",
      iast: "juhvati",
      meaning: "they (many) hu",
      unit: "word",
      group: "hu|present",
    },
    {
      id: "hu-2sg",
      // lesson present table; Gonda §65 juhoṣi (p.54)
      dev: "जुहोषि",
      iast: "juhoṣi",
      meaning: "you (one) hu",
      unit: "word",
      group: "hu|present",
    },
    {
      id: "hu-2du",
      // lesson present table; Gonda §65 juhuthas (p.54)
      dev: "जुहुथः",
      iast: "juhuthaḥ",
      meaning: "you (two) hu",
      unit: "word",
      group: "hu|present",
    },
    {
      id: "hu-2pl",
      // lesson present table; Gonda §65 juhutha (p.54)
      dev: "जुहुथ",
      iast: "juhutha",
      meaning: "you (many) hu",
      unit: "word",
      group: "hu|present",
    },
    {
      id: "hu-1sg",
      // lesson present table; Gonda §65 juhomi (p.54)
      dev: "जुहोमि",
      iast: "juhomi",
      meaning: "I (one) hu",
      unit: "word",
      group: "hu|present",
    },
    {
      id: "hu-1du",
      // lesson present table; Gonda §65 juhuvas (p.54)
      dev: "जुहुवः",
      iast: "juhuvaḥ",
      meaning: "we (two) hu",
      unit: "word",
      group: "hu|present",
    },
    {
      id: "hu-1pl",
      // lesson present table; Gonda §65 juhumas (p.54)
      dev: "जुहुमः",
      iast: "juhumaḥ",
      meaning: "we (many) hu",
      unit: "word",
      group: "hu|present",
    },
  ] as QuizDeckItem[],
};
