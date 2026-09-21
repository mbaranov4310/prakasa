/**
 * Drill card provenance:
 * - atti: from the reference — ad present 3sg parasmaipada
 * - adanti: from the reference — ad present 3pl parasmaipada
 * - atte: from the reference — ad present 3sg ātmanepada
 * - runaddhi: from the reference — rudh present 3sg parasmaipada
 * - arunat: from the reference — rudh ordinary past 3sg/2sg parasmaipada
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-ad-and-rudh",
  titleEn: "The ad and rudh classes",
  titleIast: "adādi",
  lessonId: "verbs-ad-and-rudh",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "atti",
      dev: "अत्ति",
      iast: "atti",
      meaning: "ad, present 3rd singular (parasmaipada)",
      unit: "word",
    },
    {
      id: "adanti",
      dev: "अदन्ति",
      iast: "adanti",
      meaning: "ad, present 3rd plural (parasmaipada)",
      unit: "word",
    },
    {
      id: "atte",
      dev: "अत्ते",
      iast: "atte",
      meaning: "ad, present 3rd singular (ātmanepada)",
      unit: "word",
    },
    {
      id: "runaddhi",
      dev: "रुणद्धि",
      iast: "ruṇaddhi",
      meaning: "rudh, present 3rd singular (parasmaipada)",
      unit: "word",
    },
    {
      id: "arunat",
      dev: "अरुणत्",
      iast: "aruṇat",
      meaning: "rudh, ordinary past 3rd singular (parasmaipada)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
