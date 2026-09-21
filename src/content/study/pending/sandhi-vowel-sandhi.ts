/**
 * Pending drills for sandhi-vowel-sandhi.
 *
 * Card provenance:
 * - vs-sita-udakam: from the reference — a/ā + u/ū → o (सीता उदकम् → सीतोदकम्)
 * - vs-sita-asvam: from the reference — similar vowels → long (सीता अश्वम् → सीताश्वम्)
 * - vs-ii-a: from the reference — simple vowel (not a/ā) → semivowel (ī + a → ya)
 * - vs-aa-r: from the reference — a/ā + ṛ → ar, not ār (सीता ऋषिम् → सीतर्षिम्)
 * - vs-a-i: composed — a/ā + i/ī → e (table / dissimilar a-or-ā → compound vowel)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sandhi-vowel-sandhi",
  titleEn: "Vowel sandhi",
  titleIast: "svara-sandhi",
  lessonId: "sandhi-vowel-sandhi",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "vs-sita-udakam",
      dev: "सीतोदकम्",
      iast: "sītodakam",
      meaning: "sītā + udakam",
      unit: "sandhi",
    },
    {
      id: "vs-sita-asvam",
      dev: "सीताश्वम्",
      iast: "sītāśvam",
      meaning: "sītā + aśvam",
      unit: "sandhi",
    },
    {
      id: "vs-ii-a",
      dev: "य",
      iast: "ya",
      meaning: "ī + a",
      unit: "sandhi",
    },
    {
      id: "vs-aa-r",
      dev: "अर्",
      iast: "ar",
      meaning: "ā + ṛ",
      unit: "sandhi",
    },
    {
      id: "vs-a-i",
      dev: "ए",
      iast: "e",
      meaning: "a + i",
      unit: "sandhi",
    },
  ] as QuizDeckItem[],
};
