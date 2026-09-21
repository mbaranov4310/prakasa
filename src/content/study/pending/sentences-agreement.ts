/**
 * Drill card provenance:
 * - krsnah-sarpah: from the reference — agreeing masc. singular pair
 * - krsnau-sarpau: from the reference — agreeing dual pair
 * - krsna-sarpi: from the reference — agreeing feminine pair
 * - aham-carami: from the reference — 1st person nominal + verb
 * - gajau-caratah: from the reference — dual nominal + verb number
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sentences-agreement",
  titleEn: "Agreement",
  titleIast: "anvaya",
  lessonId: "sentences-agreement",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "krsnah-sarpah",
      dev: "कृष्णः सर्पः",
      iast: "kṛṣṇaḥ sarpaḥ",
      meaning: "black snake (masc. singular, agreeing)",
      unit: "word",
    },
    {
      id: "krsnau-sarpau",
      dev: "कृष्णौ सर्पौ",
      iast: "kṛṣṇau sarpau",
      meaning: "two black snakes (agreeing dual)",
      unit: "word",
    },
    {
      id: "krsna-sarpi",
      dev: "कृष्णा सर्पी",
      iast: "kṛṣṇā sarpī",
      meaning: "black snake (feminine, agreeing)",
      unit: "word",
    },
    {
      id: "aham-carami",
      dev: "अहं चरामि",
      iast: "ahaṃ carāmi",
      meaning: "I walk (1st person agreement)",
      unit: "word",
    },
    {
      id: "gajau-caratah",
      dev: "गजौ चरतः",
      iast: "gajau carataḥ",
      meaning: "the two elephants walk (dual agreement)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
