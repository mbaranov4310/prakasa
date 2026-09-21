/**
 * Drill card provenance:
 * - nayati: from the reference — naya 3rd singular
 * - nayasi: from the reference — naya 2nd singular
 * - nayami: from the reference — naya 1st singular
 * - nayanti: from the reference — naya 3rd plural
 * - nayamah: from the reference — naya 1st plural
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
    {
      id: "nayati",
      dev: "नयति",
      iast: "nayati",
      meaning: "naya, 3rd singular (leads)",
      unit: "word",
    },
    {
      id: "nayasi",
      dev: "नयसि",
      iast: "nayasi",
      meaning: "naya, 2nd singular",
      unit: "word",
    },
    {
      id: "nayami",
      dev: "नयामि",
      iast: "nayāmi",
      meaning: "naya, 1st singular",
      unit: "word",
    },
    {
      id: "nayanti",
      dev: "नयन्ति",
      iast: "nayanti",
      meaning: "naya, 3rd plural",
      unit: "word",
    },
    {
      id: "nayamah",
      dev: "नयामः",
      iast: "nayāmaḥ",
      meaning: "naya, 1st plural",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
