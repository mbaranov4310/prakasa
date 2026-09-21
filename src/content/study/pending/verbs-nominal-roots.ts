/**
 * Drill card provenance:
 * - misrayati: from the reference — miśra → miśrayati “mixes”
 * - mutrayati: from the reference — mūtra → mūtrayati “urinates”
 * - vratayati: from the reference — vrata → vratayati “observes a vow”
 * - putriyati: from the reference — putra → putrīyati “wants a son”
 * - yasaskamyati: from the reference — yaśas → yaśaskāmyati “wants fame”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-nominal-roots",
  titleEn: "Nominal roots",
  titleIast: "nāmadhātu",
  lessonId: "verbs-nominal-roots",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "misrayati",
      dev: "मिश्रयति",
      iast: "miśrayati",
      meaning: "mixes",
      unit: "word",
    },
    {
      id: "mutrayati",
      dev: "मूत्रयति",
      iast: "mūtrayati",
      meaning: "urinates",
      unit: "word",
    },
    {
      id: "vratayati",
      dev: "व्रतयति",
      iast: "vratayati",
      meaning: "observes a vow",
      unit: "word",
    },
    {
      id: "putriyati",
      dev: "पुत्रीयति",
      iast: "putrīyati",
      meaning: "wants a son",
      unit: "word",
    },
    {
      id: "yasaskamyati",
      dev: "यशस्काम्यति",
      iast: "yaśaskāmyati",
      meaning: "wants fame",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
