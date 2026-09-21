/**
 * Drill card provenance:
 * - simhah: from the reference — nominative singular (siṃhaḥ, subject)
 * - gramam: from the reference — accusative singular (grāmam, object / goal)
 * - margena: from the reference — instrumental singular (mārgeṇa, “by means of the road”)
 * - mamsaya: from the reference — dative singular (māṃsāya, “for meat”)
 * - vanad: from the reference — ablative singular (vanād, “from the forest”)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sentences-the-eight-cases",
  titleEn: "The eight cases",
  titleIast: "vibhakti",
  lessonId: "sentences-the-eight-cases",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "simhah",
      dev: "सिंहः",
      iast: "siṃhaḥ",
      meaning: "the lion (as subject)",
      unit: "word",
    },
    {
      id: "gramam",
      dev: "ग्रामम्",
      iast: "grāmam",
      meaning: "the village (as object)",
      unit: "word",
    },
    {
      id: "margena",
      dev: "मार्गेण",
      iast: "mārgeṇa",
      meaning: "by means of the road",
      unit: "word",
    },
    {
      id: "mamsaya",
      dev: "मांसाय",
      iast: "māṃsāya",
      meaning: "for meat",
      unit: "word",
    },
    {
      id: "vanad",
      dev: "वनाद्",
      iast: "vanād",
      meaning: "from the forest",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
