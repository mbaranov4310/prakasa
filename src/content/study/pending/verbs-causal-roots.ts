/**
 * Drill card provenance:
 * - nayayati: from the reference — nāyayati “they make (someone) lead”
 * - carayati: from the reference — cārayati “they make (someone) walk”
 * - gamayati: from the reference — gamayati “makes go; passes (time), leads (someone)”
 * - karayati: from the reference — kārayati “makes do”
 * - karayisyati: from the reference — kārayiṣyati “will make do”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-causal-roots",
  titleEn: "Causal roots",
  titleIast: "ṇijanta",
  lessonId: "verbs-causal-roots",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "nayayati",
      dev: "नाययति",
      iast: "nāyayati",
      meaning: "they make (someone) lead",
      unit: "word",
    },
    {
      id: "carayati",
      dev: "चारयति",
      iast: "cārayati",
      meaning: "they make (someone) walk",
      unit: "word",
    },
    {
      id: "gamayati",
      dev: "गमयति",
      iast: "gamayati",
      meaning: "makes go; passes (time), leads (someone)",
      unit: "word",
    },
    {
      id: "karayati",
      dev: "कारयति",
      iast: "kārayati",
      meaning: "makes do",
      unit: "word",
    },
    {
      id: "karayisyati",
      dev: "कारयिष्यति",
      iast: "kārayiṣyati",
      meaning: "will make do",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
