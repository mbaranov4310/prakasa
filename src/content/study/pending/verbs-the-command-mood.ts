/**
 * Drill card provenance:
 * - naya: from the reference — 2sg command “Lead!”
 * - nayata: from the reference — 2pl command “(You all) lead!”
 * - nayatu: from the reference — 3sg command of naya
 * - nayama: from the reference — 1pl command of naya
 * - karavani: from the reference — 1sg in kiṃ karavāṇi te?
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-command-mood",
  titleEn: "The command mood",
  titleIast: "loṭ",
  lessonId: "verbs-the-command-mood",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "naya",
      dev: "नय",
      iast: "naya",
      meaning: "Lead!",
      unit: "word",
    },
    {
      id: "nayata",
      dev: "नयत",
      iast: "nayata",
      meaning: "(You all) lead!",
      unit: "word",
    },
    {
      id: "nayatu",
      dev: "नयतु",
      iast: "nayatu",
      meaning: "let him lead (naya, 3sg)",
      unit: "word",
    },
    {
      id: "nayama",
      dev: "नयाम",
      iast: "nayāma",
      meaning: "let us lead",
      unit: "word",
    },
    {
      id: "karavani",
      dev: "करवाणि",
      iast: "karavāṇi",
      meaning: "may I do (for you)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
