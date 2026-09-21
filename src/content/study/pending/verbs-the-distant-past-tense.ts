/**
 * Drill card provenance:
 * - ninaya: from the reference — nī → nināya “led (long ago)”
 * - ninyuh: from the reference — ninī + uḥ → ninyuḥ “they led”
 * - ninyire: from the reference — ninī + ire → ninyire “they led” (ātmanepada)
 * - cakara: from the reference — kṛ → cakāra “did”
 * - jagmuh: from the reference — jagam + uḥ → jagmuḥ “they went”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-distant-past-tense",
  titleEn: "The distant past tense",
  titleIast: "liṭ",
  lessonId: "verbs-the-distant-past-tense",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "ninaya",
      dev: "निनाय",
      iast: "nināya",
      meaning: "(someone) led (long ago)",
      unit: "word",
    },
    {
      id: "ninyuh",
      dev: "निन्युः",
      iast: "ninyuḥ",
      meaning: "they led (long ago, parasmaipada)",
      unit: "word",
    },
    {
      id: "ninyire",
      dev: "निन्यिरे",
      iast: "ninyire",
      meaning: "they led (long ago, ātmanepada)",
      unit: "word",
    },
    {
      id: "cakara",
      dev: "चकार",
      iast: "cakāra",
      meaning: "(someone) did (long ago)",
      unit: "word",
    },
    {
      id: "jagmuh",
      dev: "जग्मुः",
      iast: "jagmuḥ",
      meaning: "they went (long ago)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
