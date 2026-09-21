/**
 * Drill card provenance:
 * - anesyat: from the reference — aneṣyat “would lead; would have led”
 * - akarisyat: from the reference — akariṣyat “would do” (parasmaipada)
 * - akarisyata: from the reference — akariṣyata “would do” (ātmanepada)
 * - nesya: from the reference — neṣya future stem of nī (“will lead”)
 * - ayasyan: from the reference — āyāsyan in the southern-road example
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-conditional-mood",
  titleEn: "The conditional mood",
  titleIast: "lṛṅ",
  lessonId: "verbs-the-conditional-mood",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "anesyat",
      dev: "अनेष्यत्",
      iast: "aneṣyat",
      meaning: "would lead; would have led",
      unit: "word",
    },
    {
      id: "akarisyat",
      dev: "अकरिष्यत्",
      iast: "akariṣyat",
      meaning: "would do (parasmaipada)",
      unit: "word",
    },
    {
      id: "akarisyata",
      dev: "अकरिष्यत",
      iast: "akariṣyata",
      meaning: "would do (ātmanepada)",
      unit: "word",
    },
    {
      id: "nesya",
      dev: "नेष्य",
      iast: "neṣya",
      meaning: "will lead (simple-future stem of nī)",
      unit: "word",
    },
    {
      id: "ayasyan",
      dev: "आयास्यन्",
      iast: "āyāsyan",
      meaning: "would come (southern-road example)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
