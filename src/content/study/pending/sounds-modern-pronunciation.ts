/**
 * Drill card provenance:
 * - krisna: from the reference — modern pronunciation of kṛṣṇa
 * - munihi: from the reference — visarga echo of muniḥ
 * - vigyanam: from the reference — northern style of vijñānam
 * - anha: from the reference — modern pronunciation of ahna
 * - bramha: from the reference — modern pronunciation of brahma
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sounds-modern-pronunciation",
  titleEn: "Modern pronunciation",
  titleIast: "uccāraṇa",
  lessonId: "sounds-modern-pronunciation",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "krisna",
      dev: "क्रिष्ण",
      iast: "kriṣṇa",
      meaning: "kṛṣṇa as often pronounced with i",
      unit: "akshara",
    },
    {
      id: "munihi",
      dev: "मुनिहि",
      iast: "munihi",
      meaning: "word-final muniḥ with modern visarga echo",
      unit: "akshara",
    },
    {
      id: "vigyanam",
      dev: "विग्यानम्",
      iast: "vigyānam",
      meaning: "vijñānam in the northern style",
      unit: "akshara",
    },
    {
      id: "anha",
      dev: "अन्ह",
      iast: "anha",
      meaning: "ahna with modern hna reversal",
      unit: "akshara",
    },
    {
      id: "bramha",
      dev: "ब्रम्ह",
      iast: "bramha",
      meaning: "brahma with modern hma reversal",
      unit: "akshara",
    },
  ] as QuizDeckItem[],
};
