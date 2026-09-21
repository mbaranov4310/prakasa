/**
 * Drill card provenance:
 * - na: from the reference — uninflected na “not” (same in all three printed sentences)
 * - a-prefix: from the reference — preposition/prefix ā (“here”) with gacchanti
 * - sam-prefix: from the reference — preposition/prefix saṃ (“together”) with gacchanti
 * - ca: from the reference — nipāta ca “and” (rāmaḥ sītā ca)
 * - mandam: from the reference — adverb mandam “slowly” from adjective manda
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "uninflected-types",
  titleEn: "Types of uninflected words",
  titleIast: "avyaya",
  lessonId: "uninflected-types",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "na",
      dev: "न",
      iast: "na",
      meaning: "not (unchanging particle)",
      unit: "word",
    },
    {
      id: "a-prefix",
      dev: "आ",
      iast: "ā",
      meaning: "verb prefix “here” (they come)",
      unit: "word",
    },
    {
      id: "sam-prefix",
      dev: "सं",
      iast: "saṃ",
      meaning: "verb prefix “together” (they meet)",
      unit: "word",
    },
    {
      id: "ca",
      dev: "च",
      iast: "ca",
      meaning: "and (as in Rama and Sita)",
      unit: "word",
    },
    {
      id: "mandam",
      dev: "मन्दम्",
      iast: "mandam",
      meaning: "slowly (adverb from manda)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
