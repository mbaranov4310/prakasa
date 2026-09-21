/**
 * Drill card provenance:
 * - gatva: from the reference — gam → gatvā “after going”
 * - pratigamya: from the reference — prefixed root uses -ya
 * - ahrtya: from the reference — short-vowel root + -t before -ya
 * - krtva: from the reference — kṛ → kṛtvā (no strengthening)
 * - uktva: from the reference — vac → uktvā (samprasāraṇa)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-tva-and-ya",
  titleEn: "-tvā and -ya",
  titleIast: "ktvā",
  lessonId: "suffixes-tva-and-ya",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "gatva",
      dev: "गत्वा",
      iast: "gatvā",
      meaning: "after going",
      unit: "word",
    },
    {
      id: "pratigamya",
      dev: "प्रतिगम्य",
      iast: "pratigamya",
      meaning: "after returning (with prefix; -ya)",
      unit: "word",
    },
    {
      id: "ahrtya",
      dev: "आहृत्य",
      iast: "āhṛtya",
      meaning: "after fetching",
      unit: "word",
    },
    {
      id: "krtva",
      dev: "कृत्वा",
      iast: "kṛtvā",
      meaning: "after doing",
      unit: "word",
    },
    {
      id: "uktva",
      dev: "उक्त्वा",
      iast: "uktvā",
      meaning: "after speaking",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
