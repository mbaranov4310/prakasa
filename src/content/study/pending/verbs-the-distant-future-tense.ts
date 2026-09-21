/**
 * Drill card provenance:
 * - gantasmi: from the reference — 1sg example gantāsmi
 * - ganta: from the reference — 3sg example gantā
 * - bhavita: from the reference — 3sg paradigm bhavitā
 * - bhavitasmi: from the reference — 1sg paradigm bhavitāsmi
 * - bhavitarah: from the reference — 3pl paradigm bhavitāraḥ
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-distant-future-tense",
  titleEn: "The distant future tense",
  titleIast: "luṭ",
  lessonId: "verbs-the-distant-future-tense",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "gantasmi",
      dev: "गन्तास्मि",
      iast: "gantāsmi",
      meaning: "I will go (distant future)",
      unit: "word",
    },
    {
      id: "ganta",
      dev: "गन्ता",
      iast: "gantā",
      meaning: "he will go (distant future)",
      unit: "word",
    },
    {
      id: "bhavita",
      dev: "भविता",
      iast: "bhavitā",
      meaning: "he will become (distant future, 3sg)",
      unit: "word",
    },
    {
      id: "bhavitasmi",
      dev: "भवितास्मि",
      iast: "bhavitāsmi",
      meaning: "I will become (distant future)",
      unit: "word",
    },
    {
      id: "bhavitarah",
      dev: "भवितारः",
      iast: "bhavitāraḥ",
      meaning: "they will become (distant future, 3pl)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
