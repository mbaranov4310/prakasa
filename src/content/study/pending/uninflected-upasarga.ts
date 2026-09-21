/**
 * Drill card provenance:
 * - samgacchanti: from the reference — saṃ + gacchanti → they meet
 * - avagacchanti: from the reference — ava + gacchanti → they understand
 * - agacchan: from the reference — ā + agacchan → they came
 * - paryagacchan: from the reference — pari + agacchan → they went around
 * - ramam-prati: from the reference — prati with case 2
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "uninflected-upasarga",
  titleEn: "The upasarga",
  titleIast: "upasarga",
  lessonId: "uninflected-upasarga",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "samgacchanti",
      dev: "संगच्छन्ति",
      iast: "saṃgacchanti",
      meaning: "they meet (“go together”)",
      unit: "word",
    },
    {
      id: "avagacchanti",
      dev: "अवगच्छन्ति",
      iast: "avagacchanti",
      meaning: "they understand (ava + gacchanti)",
      unit: "word",
    },
    {
      id: "agacchan",
      dev: "आगच्छन्",
      iast: "āgacchan",
      meaning: "they came (ā before past a-)",
      unit: "word",
    },
    {
      id: "paryagacchan",
      dev: "पर्यगच्छन्",
      iast: "paryagacchan",
      meaning: "they went around (pari + agacchan)",
      unit: "word",
    },
    {
      id: "ramam-prati",
      dev: "रामं प्रति",
      iast: "rāmaṃ prati",
      meaning: "regarding Rama",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
