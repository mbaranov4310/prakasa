/**
 * Pending drills for uninflected-other-prefixes.
 *
 * Card provenance:
 * - alamkaroti: from the reference — gati: karoti → alaṃkaroti
 * - antargacchati: from the reference — gati: gacchati → antargacchati
 * - bhasmasatkaroti: from the reference — -sāt: bhasma → bhasmasātkaroti
 * - krsnikaroti: from the reference — cvi: kṛṣṇa → kṛṣṇīkaroti
 * - matrikaroti: from the reference — cvi: mātṛ → mātrīkaroti (ṛ → rī)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "uninflected-other-prefixes",
  titleEn: "Other prefixes",
  titleIast: "prādi",
  lessonId: "uninflected-other-prefixes",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "alamkaroti",
      dev: "अलंकरोति",
      iast: "alaṃkaroti",
      meaning: "decorates, adorns",
      unit: "word",
    },
    {
      id: "antargacchati",
      dev: "अन्तर्गच्छति",
      iast: "antargacchati",
      meaning: "goes within; disappears",
      unit: "word",
    },
    {
      id: "bhasmasatkaroti",
      dev: "भस्मसात्करोति",
      iast: "bhasmasātkaroti",
      meaning: "turns (something) to ash",
      unit: "word",
    },
    {
      id: "krsnikaroti",
      dev: "कृष्णीकरोति",
      iast: "kṛṣṇīkaroti",
      meaning: "makes black",
      unit: "word",
    },
    {
      id: "matrikaroti",
      dev: "मात्रीकरोति",
      iast: "mātrīkaroti",
      meaning: "makes (someone their) mother",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
