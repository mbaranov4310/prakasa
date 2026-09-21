/**
 * Drill card provenance:
 * - aham-nom: from the reference — nominative singular (asmad)
 * - mam-acc: from the reference — accusative singular (asmad)
 * - mama-gen: from the reference — genitive singular (asmad)
 * - tvam-nom: from the reference — nominative singular (yuṣmad)
 * - yuyam-nom: from the reference — nominative plural (yuṣmad)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-asmad-and-yusmad",
  titleEn: "asmad and yuṣmad",
  titleIast: "asmad-yuṣmad",
  lessonId: "nominals-asmad-and-yusmad",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "aham-nom",
      dev: "अहम्",
      iast: "aham",
      meaning: "I (subject)",
      unit: "word",
    },
    {
      id: "mam-acc",
      dev: "माम्",
      iast: "mām",
      meaning: "me (object)",
      unit: "word",
    },
    {
      id: "mama-gen",
      dev: "मम",
      iast: "mama",
      meaning: "of me",
      unit: "word",
    },
    {
      id: "tvam-nom",
      dev: "त्वम्",
      iast: "tvam",
      meaning: "you (one, subject)",
      unit: "word",
    },
    {
      id: "yuyam-nom",
      dev: "यूयम्",
      iast: "yūyam",
      meaning: "you (many, subject)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
