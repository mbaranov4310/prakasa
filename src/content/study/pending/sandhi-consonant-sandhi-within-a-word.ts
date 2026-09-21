// Drill card provenance (first stab for human review):
//   marudbhih — from the reference — final stop voices before voiced consonant (within-word)
//   buddha — from the reference — preserve aspiration (moves onto ta)
//   bhotsya — from the reference — preserve aspiration (moves onto the first consonant)
//   guruṇa — from the reference — n → ṇ after r
//   agnisu — from the reference — s → ṣ after i (ruki)
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sandhi-consonant-sandhi-within-a-word",
  titleEn: "Consonant sandhi within a word",
  titleIast: "antastha-sandhi",
  lessonId: "sandhi-consonant-sandhi-within-a-word",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "marudbhih",
      dev: "मरुद्भिः",
      iast: "marudbhiḥ",
      meaning: "marut + bhiḥ",
      unit: "sandhi",
    },
    {
      id: "buddha",
      dev: "बुद्ध",
      iast: "buddha",
      meaning: "budh + ta",
      unit: "sandhi",
    },
    {
      id: "bhotsya",
      dev: "भोत्स्य",
      iast: "bhotsya",
      meaning: "bodh + sya",
      unit: "sandhi",
    },
    {
      id: "guruṇa",
      dev: "गुरुणा",
      iast: "guruṇā",
      meaning: "gurunā",
      unit: "sandhi",
    },
    {
      id: "agnisu",
      dev: "अग्निषु",
      iast: "agniṣu",
      meaning: "agni + su",
      unit: "sandhi",
    },
  ] as QuizDeckItem[],
};
