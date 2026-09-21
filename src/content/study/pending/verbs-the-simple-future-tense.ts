/**
 * Drill card provenance:
 * - gamisyami: from the reference — gam → gamiṣyāmi, “I will go”
 * - gamisyati: from the reference — gam → gamiṣyati, “will go”
 * - karisyati: from the reference — kṛ → kariṣyati (parasmaipada)
 * - karisyate: from the reference — kṛ → kariṣyate (ātmanepada)
 * - lapsyate: from the reference — labh → lapsyate, “will obtain”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-simple-future-tense",
  titleEn: "The simple future tense",
  titleIast: "lṛṭ",
  lessonId: "verbs-the-simple-future-tense",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "gamisyami",
      dev: "गमिष्यामि",
      iast: "gamiṣyāmi",
      meaning: "I will go (gam)",
      unit: "word",
    },
    {
      id: "gamisyati",
      dev: "गमिष्यति",
      iast: "gamiṣyati",
      meaning: "will go (gam, 3rd singular)",
      unit: "word",
    },
    {
      id: "karisyati",
      dev: "करिष्यति",
      iast: "kariṣyati",
      meaning: "will do (kṛ, parasmaipada)",
      unit: "word",
    },
    {
      id: "karisyate",
      dev: "करिष्यते",
      iast: "kariṣyate",
      meaning: "will do (kṛ, ātmanepada)",
      unit: "word",
    },
    {
      id: "lapsyate",
      dev: "लप्स्यते",
      iast: "lapsyate",
      meaning: "will obtain (labh)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
