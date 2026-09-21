/**
 * Drill card provenance:
 * - am: from the reference — accusative singular ending
 * - aa: from the reference — instrumental singular ending
 * - bhyam: from the reference — instrumental dual ending
 * - su: from the reference — locative plural ending
 * - nava: composed — instrumental singular (nau + ā)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-basic-nominal-endings",
  titleEn: "Basic nominal endings",
  titleIast: "sup",
  lessonId: "nominals-basic-nominal-endings",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "am",
      dev: "अम्",
      iast: "am",
      meaning: "accusative singular ending",
      unit: "word",
    },
    {
      id: "aa",
      dev: "आ",
      iast: "ā",
      meaning: "instrumental singular ending",
      unit: "word",
    },
    {
      id: "bhyam",
      dev: "भ्याम्",
      iast: "bhyām",
      meaning: "instrumental dual ending",
      unit: "word",
    },
    {
      id: "su",
      dev: "सु",
      iast: "su",
      meaning: "locative plural ending",
      unit: "word",
    },
    {
      id: "nava",
      dev: "नावा",
      iast: "nāvā",
      meaning: "instrumental singular of nau",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
