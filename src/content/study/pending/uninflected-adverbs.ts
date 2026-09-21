/**
 * Drill card provenance:
 * - mandam: from the reference — मन्दं / mandaṃ “slowly”
 * - mrdu: from the reference — मृदु / mṛdu “softly”
 * - sundaram: composed — sundara in neuter case-1 singular (page rule)
 * - sighram: composed — śīghra in neuter case-1 singular (page rule)
 * - satyam: composed — satya in neuter case-1 singular (page rule)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "uninflected-adverbs",
  titleEn: "Adverbs",
  titleIast: "kriyā-viśeṣaṇa",
  lessonId: "uninflected-adverbs",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "mandam",
      dev: "मन्दं",
      iast: "mandaṃ",
      meaning: "slowly",
      unit: "word",
    },
    {
      id: "mrdu",
      dev: "मृदु",
      iast: "mṛdu",
      meaning: "softly",
      unit: "word",
    },
    {
      id: "sundaram",
      dev: "सुन्दरम्",
      iast: "sundaram",
      meaning: "beautifully",
      unit: "word",
    },
    {
      id: "sighram",
      dev: "शीघ्रम्",
      iast: "śīghram",
      meaning: "quickly",
      unit: "word",
    },
    {
      id: "satyam",
      dev: "सत्यम्",
      iast: "satyam",
      meaning: "truly",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
