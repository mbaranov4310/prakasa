/**
 * Drill card provenance:
 * - kaurava: from the reference — kuru + a → descending from Kuru; a Kaurava
 * - yogin: from the reference — yoga + in → characterized by yoga; a yogi
 * - putraka: from the reference — putra + ka → little son, dear son
 * - agnitah: from the reference — agni + tas → from the fire (agnitaḥ)
 * - hiranyamaya: from the reference — hiraṇya + maya → made of gold, golden
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-nominal-suffixes",
  titleEn: "Nominal suffixes",
  titleIast: "taddhita",
  lessonId: "suffixes-nominal-suffixes",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "kaurava",
      dev: "कौरव",
      iast: "kaurava",
      meaning: "descending from Kuru; a Kaurava",
      unit: "word",
    },
    {
      id: "yogin",
      dev: "योगिन्",
      iast: "yogin",
      meaning: "characterized by yoga; a yogi",
      unit: "word",
    },
    {
      id: "putraka",
      dev: "पुत्रक",
      iast: "putraka",
      meaning: "little son, dear son",
      unit: "word",
    },
    {
      id: "agnitah",
      dev: "अग्नितः",
      iast: "agnitaḥ",
      meaning: "from the fire",
      unit: "word",
    },
    {
      id: "hiranyamaya",
      dev: "हिरण्यमय",
      iast: "hiraṇyamaya",
      meaning: "made of gold, golden",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
