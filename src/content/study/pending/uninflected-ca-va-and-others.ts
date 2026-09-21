/**
 * Drill card provenance:
 * - ca: from the reference
 * - va: from the reference
 * - na: from the reference
 * - vina: from the reference
 * - saha: from the reference
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "uninflected-ca-va-and-others",
  titleEn: "ca, vā, and others",
  titleIast: "ca-vā",
  lessonId: "uninflected-ca-va-and-others",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "ca",
      dev: "च",
      iast: "ca",
      meaning: "and",
      unit: "word",
    },
    {
      id: "va",
      dev: "वा",
      iast: "vā",
      meaning: "or",
      unit: "word",
    },
    {
      id: "na",
      dev: "न",
      iast: "na",
      meaning: "not",
      unit: "word",
    },
    {
      id: "vina",
      dev: "विना",
      iast: "vinā",
      meaning: "without",
      unit: "word",
    },
    {
      id: "saha",
      dev: "सह",
      iast: "saha",
      meaning: "with",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
