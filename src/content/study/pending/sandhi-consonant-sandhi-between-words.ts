/**
 * Drill card provenance:
 * - tad-vanam: from the reference — k/ṭ/t/p take the voicing of the following sound
 * - tac-citram: from the reference — -t before hard-palate c
 * - vak-na: from the reference — k/ṭ/t/p become nasal before a nasal
 * - tan-caranti: from the reference — -n before c/ch → ṃś
 * - phalam-vanam: composed — -m becomes anusvāra before a consonant (rule stated with vanam gacchati / phalam examples)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sandhi-consonant-sandhi-between-words",
  titleEn: "Consonant sandhi between words",
  titleIast: "vyañjana-sandhi",
  lessonId: "sandhi-consonant-sandhi-between-words",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "tad-vanam",
      dev: "तद् वनम्",
      iast: "tad vanam",
      meaning: "tat vanam",
      unit: "sandhi",
    },
    {
      id: "tac-citram",
      dev: "तच् चित्रम्",
      iast: "tac citram",
      meaning: "tat citram",
      unit: "sandhi",
    },
    {
      id: "vak-na",
      dev: "वाङ् न",
      iast: "vāṅ na",
      meaning: "vāk na",
      unit: "sandhi",
    },
    {
      id: "tan-caranti",
      dev: "तांश् चरन्ति",
      iast: "tāṃś caranti",
      meaning: "tān caranti",
      unit: "sandhi",
    },
    {
      id: "phalam-vanam",
      dev: "फलं वनम्",
      iast: "phalaṃ vanam",
      meaning: "phalam vanam",
      unit: "sandhi",
    },
  ] as QuizDeckItem[],
};
