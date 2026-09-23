/**
 * Drill card provenance:
 * Lesson inventory (atha … hi) turned into meaning→IAST cards.
 * Exercise shape: First Steps Towards Sanskrit enclitic glosses
 * (ca “and”, eva “truly/indeed/only”; book ~pp.160, 165) and Gonda
 * Concise Elementary Grammar glossary/exercise uses of the same
 * particles (e.g. Exercises XI, book ~p.103; glossary atha/eva/evam).
 * No sentence stock — inventory ID only, not translation drills.
 * Groups follow the lesson’s three sections (each ≥4 distinct IAST).
 * Swapped nothing: particles are fixed; cells are the ones the page prints.
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
    // --- atha, eva, evam, iti, iva (lesson §atha–iva) ---
    {
      id: "atha",
      dev: "अथ",
      iast: "atha",
      meaning: "now (marks a new topic)",
      unit: "word",
      group: "atha-iti",
    },
    {
      id: "eva",
      dev: "एव",
      iast: "eva",
      meaning: "indeed / only (emphasizer)",
      unit: "word",
      group: "atha-iti",
    },
    {
      id: "evam",
      dev: "एवम्",
      iast: "evam",
      meaning: "thus / in that matter",
      unit: "word",
      group: "atha-iti",
    },
    {
      id: "iti",
      dev: "इति",
      iast: "iti",
      meaning: "end of quote or topic",
      unit: "word",
      group: "atha-iti",
    },
    {
      id: "iva",
      dev: "इव",
      iast: "iva",
      meaning: "like / as if",
      unit: "word",
      group: "atha-iti",
    },
    // --- ca, tu, na, vā (lesson §ca–vā) ---
    {
      id: "ca",
      dev: "च",
      iast: "ca",
      meaning: "and",
      unit: "word",
      group: "ca-va",
    },
    {
      id: "tu",
      dev: "तु",
      iast: "tu",
      meaning: "but / however",
      unit: "word",
      group: "ca-va",
    },
    {
      id: "na",
      dev: "न",
      iast: "na",
      meaning: "not",
      unit: "word",
      group: "ca-va",
    },
    {
      id: "va",
      dev: "वा",
      iast: "vā",
      meaning: "or",
      unit: "word",
      group: "ca-va",
    },
    // --- vinā, saha, sma, hi (lesson §vinā–hi) ---
    {
      id: "vina",
      dev: "विना",
      iast: "vinā",
      meaning: "without",
      unit: "word",
      group: "vina-hi",
    },
    {
      id: "saha",
      dev: "सह",
      iast: "saha",
      meaning: "with",
      unit: "word",
      group: "vina-hi",
    },
    {
      id: "sma",
      dev: "स्म",
      iast: "sma",
      meaning: "past after a present verb",
      unit: "word",
      group: "vina-hi",
    },
    {
      id: "hi",
      dev: "हि",
      iast: "hi",
      meaning: "after all / since",
      unit: "word",
      group: "vina-hi",
    },
  ] as QuizDeckItem[],
};
