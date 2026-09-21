/**
 * Drill card provenance:
 * - khaditum: from the reference — khāditum “to eat”
 * - hantum: from the reference — hantum “to kill”
 * - netum: from the reference — nī → netum “to lead”
 * - vanditum: from the reference — vand → vanditum “to venerate”
 * - boddhum: from the reference — budh → boddhum “to awaken”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-tum",
  titleEn: "-tum",
  titleIast: "tumun",
  lessonId: "suffixes-tum",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "khaditum",
      dev: "खादितुम्",
      iast: "khāditum",
      meaning: "to eat",
      unit: "word",
    },
    {
      id: "hantum",
      dev: "हन्तुम्",
      iast: "hantum",
      meaning: "to kill",
      unit: "word",
    },
    {
      id: "netum",
      dev: "नेतुम्",
      iast: "netum",
      meaning: "to lead",
      unit: "word",
    },
    {
      id: "vanditum",
      dev: "वन्दितुम्",
      iast: "vanditum",
      meaning: "to venerate",
      unit: "word",
    },
    {
      id: "boddhum",
      dev: "बोद्धुम्",
      iast: "boddhum",
      meaning: "to awaken",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
