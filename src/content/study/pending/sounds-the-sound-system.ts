/**
 * Drill card provenance:
 * - kanthah: from the reference — soft palate (kaṇṭhaḥ, “throat”)
 * - talu: from the reference — hard palate (tālu)
 * - murdhanya: from the reference — retroflex sounds (mūrdhanya)
 * - dantosthya: from the reference — labio-dental name for va (dantoṣṭhya)
 * - kanthosthya: from the reference — labio-velar name for o and au (kaṇṭhoṣṭhya)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sounds-the-sound-system",
  titleEn: "The sound system",
  titleIast: "varṇa",
  lessonId: "sounds-the-sound-system",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "kanthah",
      dev: "कण्ठः",
      iast: "kaṇṭhaḥ",
      meaning: "soft palate (“throat”)",
      unit: "akshara",
    },
    {
      id: "talu",
      dev: "तालु",
      iast: "tālu",
      meaning: "hard palate",
      unit: "akshara",
    },
    {
      id: "murdhanya",
      dev: "मूर्धन्य",
      iast: "mūrdhanya",
      meaning: "retroflex (class of sounds)",
      unit: "akshara",
    },
    {
      id: "dantosthya",
      dev: "दन्तोष्ठ्य",
      iast: "dantoṣṭhya",
      meaning: "labio-dental (va)",
      unit: "akshara",
    },
    {
      id: "kanthosthya",
      dev: "कण्ठोष्ठ्य",
      iast: "kaṇṭhoṣṭhya",
      meaning: "labio-velar (o and au)",
      unit: "akshara",
    },
  ] as QuizDeckItem[],
};
