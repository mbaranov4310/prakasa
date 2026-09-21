/**
 * Drill card provenance:
 * - rah-sg1: from the reference — nominative singular of rai
 * - gau-sg1: from the reference — nominative singular of go
 * - gam-sg2: from the reference — accusative singular of go
 * - goh-sg6: from the reference — genitive singular of go
 * - nauh-sg1: from the reference — nominative singular of nau
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-ai-o-au-stems",
  titleEn: "-ai, -o, and -au stems",
  titleIast: "ai-o-au",
  lessonId: "nominals-ai-o-au-stems",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "rah-sg1",
      dev: "राः",
      iast: "rāḥ",
      meaning: "wealth as the subject (one)",
      unit: "word",
    },
    {
      id: "gau-sg1",
      dev: "गौः",
      iast: "gauḥ",
      meaning: "a cow as the subject (one)",
      unit: "word",
    },
    {
      id: "gam-sg2",
      dev: "गाम्",
      iast: "gām",
      meaning: "a cow as the object (one)",
      unit: "word",
    },
    {
      id: "goh-sg6",
      dev: "गोः",
      iast: "goḥ",
      meaning: "of (one) cow",
      unit: "word",
    },
    {
      id: "nauh-sg1",
      dev: "नौः",
      iast: "nauḥ",
      meaning: "a boat as the subject (one)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
