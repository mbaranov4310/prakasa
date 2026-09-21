/**
 * Drill card provenance:
 * - nita: from the reference — nī + -ta → nīta “led”
 * - krta: from the reference — kṛ + -ta → kṛta “done, made”
 * - gata: from the reference — gam + -ta → gata “(has) gone”
 * - buddha: from the reference — budh + -ta → buddha “(has) awakened”
 * - srutavat: from the reference — śru + -tavat → śrutavat “has heard”
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-ta-and-tavat",
  titleEn: "-ta and -tavat",
  titleIast: "kta",
  lessonId: "suffixes-ta-and-tavat",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "nita",
      dev: "नीत",
      iast: "nīta",
      meaning: "led (nī + -ta)",
      unit: "word",
    },
    {
      id: "krta",
      dev: "कृत",
      iast: "kṛta",
      meaning: "done, made (kṛ + -ta)",
      unit: "word",
    },
    {
      id: "gata",
      dev: "गत",
      iast: "gata",
      meaning: "(has) gone (gam + -ta)",
      unit: "word",
    },
    {
      id: "buddha",
      dev: "बुद्ध",
      iast: "buddha",
      meaning: "(has) awakened (budh + -ta)",
      unit: "word",
    },
    {
      id: "srutavat",
      dev: "श्रुतवत्",
      iast: "śrutavat",
      meaning: "has heard (śru + -tavat)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
