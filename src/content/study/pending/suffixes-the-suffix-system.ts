/**
 * Drill card provenance:
 * - mantra: from the reference — root suffix man + tra
 * - netra: from the reference — root suffix nī + tra (vowel strengthened)
 * - mantrin: from the reference — nominal suffix mantra + in
 * - amaratva: from the reference — nominal suffix amara + tva
 * - vandita: from the reference — past participle with iṭ (vand + i + ta)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-the-suffix-system",
  titleEn: "The suffix system",
  titleIast: "pratyaya",
  lessonId: "suffixes-the-suffix-system",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "mantra",
      dev: "मन्त्र",
      iast: "mantra",
      meaning: "means of thinking; mantra; counsel (man + tra)",
      unit: "word",
    },
    {
      id: "netra",
      dev: "नेत्र",
      iast: "netra",
      meaning: "means of leading; an eye (nī + tra)",
      unit: "word",
    },
    {
      id: "mantrin",
      dev: "मन्त्रिन्",
      iast: "mantrin",
      meaning: "minister, counselor (mantra + in)",
      unit: "word",
    },
    {
      id: "amaratva",
      dev: "अमरत्व",
      iast: "amaratva",
      meaning: "immortality (amara + tva)",
      unit: "word",
    },
    {
      id: "vandita",
      dev: "वन्दित",
      iast: "vandita",
      meaning: "venerated (vand + iṭ + ta)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
