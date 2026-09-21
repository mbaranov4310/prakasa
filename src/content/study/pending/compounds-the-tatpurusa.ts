/**
 * Drill card provenance:
 * - rajaputra: from the reference — rājñaḥ putraḥ → rājaputraḥ
 * - nagaragata: from the reference — nagaraṃ gataḥ → nagaragataḥ
 * - caurabhaya: from the reference — caurāt bhayam → caurabhayam
 * - abhava: from the reference — na bhāvaḥ → abhāvaḥ
 * - krsnasarpa: from the reference — kṛṣṇaḥ sarpaḥ → kṛṣṇasarpaḥ
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "compounds-the-tatpurusa",
  titleEn: "The tatpuruṣa",
  titleIast: "tatpuruṣa",
  lessonId: "compounds-the-tatpurusa",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "rajaputra",
      dev: "राजपुत्रः",
      iast: "rājaputraḥ",
      meaning: "son of a king; prince",
      unit: "word",
    },
    {
      id: "nagaragata",
      dev: "नगरगतः",
      iast: "nagaragataḥ",
      meaning: "gone to the city (city-gone)",
      unit: "word",
    },
    {
      id: "caurabhaya",
      dev: "चौरभयम्",
      iast: "caurabhayam",
      meaning: "fear of a thief",
      unit: "word",
    },
    {
      id: "abhava",
      dev: "अभावः",
      iast: "abhāvaḥ",
      meaning: "absence (not existence)",
      unit: "word",
    },
    {
      id: "krsnasarpa",
      dev: "कृष्णसर्पः",
      iast: "kṛṣṇasarpaḥ",
      meaning: "black snake",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
