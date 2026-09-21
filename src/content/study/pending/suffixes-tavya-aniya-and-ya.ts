/**
 * Drill card provenance:
 * - netavya: from the reference — nī → netavya “should or must be led”
 * - vanditavya: from the reference — vand → vanditavya “should or must be venerated”
 * - karaniya: from the reference — kṛ → karaṇīya “should or must be done”
 * - darsaniya: from the reference — dṛś → darśanīya “should or must be seen”
 * - sakya: from the reference — śak → śakya “able to be done, possible”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-tavya-aniya-and-ya",
  titleEn: "-tavya, -anīya, and -ya",
  titleIast: "tavya",
  lessonId: "suffixes-tavya-aniya-and-ya",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "netavya",
      dev: "नेतव्य",
      iast: "netavya",
      meaning: "should or must be led",
      unit: "word",
    },
    {
      id: "vanditavya",
      dev: "वन्दितव्य",
      iast: "vanditavya",
      meaning: "should or must be venerated",
      unit: "word",
    },
    {
      id: "karaniya",
      dev: "करणीय",
      iast: "karaṇīya",
      meaning: "should or must be done",
      unit: "word",
    },
    {
      id: "darsaniya",
      dev: "दर्शनीय",
      iast: "darśanīya",
      meaning: "should or must be seen",
      unit: "word",
    },
    {
      id: "sakya",
      dev: "शक्य",
      iast: "śakya",
      meaning: "able to be done, possible",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
