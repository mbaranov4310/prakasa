/**
 * Drill card provenance:
 * - gacchet: from the reference — 3sg potential (Rama might go to the forest)
 * - daheyam: from the reference — 1sg potential (I could burn all of this forest)
 * - khadeh: from the reference — 2sg potential (You should eat this)
 * - nayet: from the reference — 3sg potential of naya (someone might/could/should lead)
 * - nayeyuh: from the reference — 3pl potential of naya (they might lead)
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
    {
      id: "gacchet",
      dev: "गच्छेत्",
      iast: "gacchet",
      meaning: "he might go (to the forest)",
      unit: "word",
    },
    {
      id: "daheyam",
      dev: "दहेयम्",
      iast: "daheyam",
      meaning: "I could burn (all of this forest)",
      unit: "word",
    },
    {
      id: "khadeh",
      dev: "खादेः",
      iast: "khādeḥ",
      meaning: "you should eat (this)",
      unit: "word",
    },
    {
      id: "nayet",
      dev: "नयेत्",
      iast: "nayet",
      meaning: "(someone) might, could, or should lead",
      unit: "word",
    },
    {
      id: "nayeyuh",
      dev: "नयेयुः",
      iast: "nayeyuḥ",
      meaning: "they might lead",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
