/**
 * Drill card provenance:
 * - kim: from the reference — who? / what?
 * - kutra: from the reference — where?
 * - kada: from the reference — when?
 * - katham: from the reference — in what way? how?
 * - kaccit: from the reference — yes-no particle hoping for yes
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sentences-questions",
  titleEn: "Questions",
  titleIast: "praśna",
  lessonId: "sentences-questions",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "kim",
      dev: "किम्",
      iast: "kim",
      meaning: "who? or what?",
      unit: "word",
    },
    {
      id: "kutra",
      dev: "कुत्र",
      iast: "kutra",
      meaning: "where?",
      unit: "word",
    },
    {
      id: "kada",
      dev: "कदा",
      iast: "kadā",
      meaning: "when?",
      unit: "word",
    },
    {
      id: "katham",
      dev: "कथम्",
      iast: "katham",
      meaning: "in what way? how?",
      unit: "word",
    },
    {
      id: "kaccit",
      dev: "कच्चित्",
      iast: "kaccit",
      meaning: "yes-no particle hoping for yes",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
