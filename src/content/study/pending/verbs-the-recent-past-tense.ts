/**
 * Drill card provenance:
 * - asrausam: from the reference — aśrauṣam “I have heard” (śru + -sa)
 * - abhuh: from the reference — abhūḥ “you have become” (unchanged stem)
 * - agamah: from the reference — agamaḥ “you have gone” (connecting -a)
 * - aninasat: from the reference — anīnaśat “it has perished” (special reduplication)
 * - ma-bhaisih: from the reference — mā bhaiṣīḥ “Don’t fear” (mā + recent past)
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-recent-past-tense",
  titleEn: "The recent past tense",
  titleIast: "luṅ",
  lessonId: "verbs-the-recent-past-tense",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "asrausam",
      dev: "अश्रौषम्",
      iast: "aśrauṣam",
      meaning: "I have heard",
      unit: "word",
    },
    {
      id: "abhuh",
      dev: "अभूः",
      iast: "abhūḥ",
      meaning: "you have become",
      unit: "word",
    },
    {
      id: "agamah",
      dev: "अगमः",
      iast: "agamaḥ",
      meaning: "you have gone",
      unit: "word",
    },
    {
      id: "aninasat",
      dev: "अनीनशत्",
      iast: "anīnaśat",
      meaning: "it has perished",
      unit: "word",
    },
    {
      id: "ma-bhaisih",
      dev: "मा भैषीः",
      iast: "mā bhaiṣīḥ",
      meaning: "Don't fear (mā + recent past)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
