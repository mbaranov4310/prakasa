/**
 * Drill card provenance:
 * - bhava: from the reference — bhū → bhāva, existence / state of being
 * - karaka: from the reference — kṛ → kāraka, doer (-aka)
 * - karana: from the reference — kṛ → karaṇa, act of doing; action
 * - kartr: from the reference — kṛ → kartṛ, doer, agent (-tṛ)
 * - netra: from the reference — nī → netra, eye; that by which one is led
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-other-root-suffixes",
  titleEn: "Other root suffixes",
  titleIast: "kṛt",
  lessonId: "suffixes-other-root-suffixes",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "bhava",
      dev: "भाव",
      iast: "bhāva",
      meaning: "existence; the state of being or becoming",
      unit: "word",
    },
    {
      id: "karaka",
      dev: "कारक",
      iast: "kāraka",
      meaning: "doer (-aka)",
      unit: "word",
    },
    {
      id: "karana",
      dev: "करण",
      iast: "karaṇa",
      meaning: "act of doing; action",
      unit: "word",
    },
    {
      id: "kartr",
      dev: "कर्तृ",
      iast: "kartṛ",
      meaning: "doer, agent (-tṛ)",
      unit: "word",
    },
    {
      id: "netra",
      dev: "नेत्र",
      iast: "netra",
      meaning: "eye; that by which one is led",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
