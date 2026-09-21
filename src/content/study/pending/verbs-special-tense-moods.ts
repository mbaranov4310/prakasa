/**
 * Drill card provenance:
 * - nayati: from the reference — special tense-mood “(Someone) leads.”
 * - nayatu: from the reference — special tense-mood “(Someone) should lead.”
 * - anayat: from the reference — special tense-mood “(Someone) led.”
 * - nayet: from the reference — special tense-mood “(Someone) might or could lead.”
 * - corayati: from the reference — cur with -aya stem “(Someone) steals.”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-special-tense-moods",
  titleEn: "Special tense-moods",
  titleIast: "lakāra",
  lessonId: "verbs-special-tense-moods",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "nayati",
      dev: "नयति",
      iast: "nayati",
      meaning: "(someone) leads (nī, special stem)",
      unit: "word",
    },
    {
      id: "nayatu",
      dev: "नयतु",
      iast: "nayatu",
      meaning: "(someone) should lead (nī)",
      unit: "word",
    },
    {
      id: "anayat",
      dev: "अनयत्",
      iast: "anayat",
      meaning: "(someone) led (nī)",
      unit: "word",
    },
    {
      id: "nayet",
      dev: "नयेत्",
      iast: "nayet",
      meaning: "(someone) might or could lead (nī)",
      unit: "word",
    },
    {
      id: "corayati",
      dev: "चोरयति",
      iast: "corayati",
      meaning: "(someone) steals (cur, -aya stem)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
