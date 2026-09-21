/**
 * Drill card provenance:
 * - sitodakam: from the reference — vowel sandhi (vowel comes first)
 * - rama-udakam: from the reference — visarga sandhi (visarga comes first)
 * - hanuman-jalam: from the reference — consonant sandhi (consonant comes first)
 * - nayanti: from the reference — sandhi within a single word
 * - gajena: from the reference — sandhi within a single word
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sandhi-the-sandhi-system",
  titleEn: "The sandhi system",
  titleIast: "sandhi",
  lessonId: "sandhi-the-sandhi-system",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "sitodakam",
      dev: "सीतोदकम्",
      iast: "sītodakam",
      meaning: "sītā + udakam after vowel sandhi",
      unit: "sandhi",
    },
    {
      id: "rama-udakam",
      dev: "राम उदकम्",
      iast: "rāma udakam",
      meaning: "rāmaḥ + udakam after visarga sandhi",
      unit: "sandhi",
    },
    {
      id: "hanuman-jalam",
      dev: "हनुमाञ् जलम्",
      iast: "hanumāñ jalam",
      meaning: "hanumān + jalam after consonant sandhi",
      unit: "sandhi",
    },
    {
      id: "nayanti",
      dev: "नयन्ति",
      iast: "nayanti",
      meaning: "ne + a + nti joined inside one word",
      unit: "sandhi",
    },
    {
      id: "gajena",
      dev: "गजेन",
      iast: "gajena",
      meaning: "gaja + ina joined inside one word",
      unit: "sandhi",
    },
  ] as QuizDeckItem[],
};
