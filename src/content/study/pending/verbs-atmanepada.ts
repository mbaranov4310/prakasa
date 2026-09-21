/**
 * Drill card provenance:
 * - pacate: from the reference — Devadatta cooks rice (for himself)
 * - nayate: composed — present 3sg from the naya paradigm; gloss “leads”
 * - nayasva: composed — command 2sg from the naya paradigm; gloss “lead!”
 * - anayanta: from the reference — “They led.”
 * - nayeran: from the reference — “They might lead.”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-atmanepada",
  titleEn: "ātmanepada",
  titleIast: "ātmanepada",
  lessonId: "verbs-atmanepada",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "pacate",
      dev: "पचते",
      iast: "pacate",
      meaning: "cooks rice (for himself)",
      unit: "word",
    },
    {
      id: "nayate",
      dev: "नयते",
      iast: "nayate",
      meaning: "leads (ātmanepada present, 3sg)",
      unit: "word",
    },
    {
      id: "nayasva",
      dev: "नयस्व",
      iast: "nayasva",
      meaning: "lead! (ātmanepada command, 2sg)",
      unit: "word",
    },
    {
      id: "anayanta",
      dev: "अनयन्त",
      iast: "anayanta",
      meaning: "they led",
      unit: "word",
    },
    {
      id: "nayeran",
      dev: "नयेरन्",
      iast: "nayeran",
      meaning: "they might lead",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
