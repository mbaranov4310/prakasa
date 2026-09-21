/**
 * Drill card provenance:
 * - a-soft-palate: from the reference — simple vowel at the soft palate (अ a)
 * - i-hard-palate: from the reference — simple vowel at the hard palate (इ i)
 * - u-lips: from the reference — simple vowel at the lips (उ u)
 * - aa-long: from the reference — long form of a (आ ā)
 * - akara: from the reference — a named with -kāra (अकार akāra)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sounds-vowels",
  titleEn: "Vowels",
  titleIast: "svara",
  lessonId: "sounds-vowels",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "a-soft-palate",
      dev: "अ",
      iast: "a",
      meaning: "simple vowel at the soft palate",
      unit: "akshara",
    },
    {
      id: "i-hard-palate",
      dev: "इ",
      iast: "i",
      meaning: "simple vowel at the hard palate",
      unit: "akshara",
    },
    {
      id: "u-lips",
      dev: "उ",
      iast: "u",
      meaning: "simple vowel at the lips",
      unit: "akshara",
    },
    {
      id: "aa-long",
      dev: "आ",
      iast: "ā",
      meaning: "long form of a",
      unit: "akshara",
    },
    {
      id: "akara",
      dev: "अकार",
      iast: "akāra",
      meaning: "the letter a, named with -kāra",
      unit: "akshara",
    },
  ] as QuizDeckItem[],
};
