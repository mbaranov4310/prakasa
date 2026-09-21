/**
 * Drill card provenance:
 * - bhavati: from the reference — bhū → bhavati “be, become”
 * - divyati: from the reference — div → dīvyati “gamble”
 * - limpati: from the reference — lip → limpati “anoint or smear”
 * - cintayati: from the reference — cint → cintayati “think”
 * - tisthati: from the reference — sthā → tiṣṭhati “stand”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-bhu-div-tud-and-cur",
  titleEn: "The bhū, div, tud, and cur classes",
  titleIast: "bhvādi",
  lessonId: "verbs-bhu-div-tud-and-cur",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "bhavati",
      dev: "भवति",
      iast: "bhavati",
      meaning: "(someone) is or becomes",
      unit: "word",
    },
    {
      id: "divyati",
      dev: "दीव्यति",
      iast: "dīvyati",
      meaning: "(someone) gambles",
      unit: "word",
    },
    {
      id: "limpati",
      dev: "लिम्पति",
      iast: "limpati",
      meaning: "anoint or smear",
      unit: "word",
    },
    {
      id: "cintayati",
      dev: "चिन्तयति",
      iast: "cintayati",
      meaning: "(someone) thinks",
      unit: "word",
    },
    {
      id: "tisthati",
      dev: "तिष्ठति",
      iast: "tiṣṭhati",
      meaning: "stand",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
