/**
 * Drill card provenance:
 * - yo: from the reference — yoga → yo ga (first syllable)
 * - sam: from the reference — saṃskṛta → saṃ skṛ ta (anusvāra with its vowel)
 * - duh: from the reference — duḥkha → duḥ kha (visarga with its vowel)
 * - kham: from the reference — sukham → su kham (final leftovers in last syllable)
 * - rma: from the reference — dharma → dha rma (syllable ends in a vowel when it can)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sounds-syllables",
  titleEn: "Syllables",
  titleIast: "akṣara",
  lessonId: "sounds-syllables",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "yo",
      dev: "यो",
      iast: "yo",
      meaning: "First syllable of yoga",
      unit: "akshara",
    },
    {
      id: "sam",
      dev: "सं",
      iast: "saṃ",
      meaning: "Syllable with the anusvāra in saṃskṛta",
      unit: "akshara",
    },
    {
      id: "duh",
      dev: "दुः",
      iast: "duḥ",
      meaning: "Syllable with the visarga in duḥkha",
      unit: "akshara",
    },
    {
      id: "kham",
      dev: "खम्",
      iast: "kham",
      meaning: "Last syllable of sukham",
      unit: "akshara",
    },
    {
      id: "rma",
      dev: "र्म",
      iast: "rma",
      meaning: "Second syllable of dharma",
      unit: "akshara",
    },
  ] as QuizDeckItem[],
};
