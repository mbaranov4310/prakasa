/**
 * Drill card provenance:
 * - bhuyat: from the reference — śubhaṃ bhūyāt, “May there be welfare”
 * - gamyat: from the reference — gam → gamya → gamyāt, “may (someone) go”
 * - ucyat: from the reference — vac → ucya → ucyāt, “may (someone) speak”
 * - niyat: from the reference — nīyāt, 3sg parasmaipada of nī
 * - nesishta: from the reference — neṣīṣṭa, 3sg ātmanepada of nī
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-blessing-mood",
  titleEn: "The blessing mood",
  titleIast: "āśīr-liṅ",
  lessonId: "verbs-the-blessing-mood",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "bhuyat",
      dev: "भूयात्",
      iast: "bhūyāt",
      meaning: "may there be (welfare; blessing example)",
      unit: "word",
    },
    {
      id: "gamyat",
      dev: "गम्यात्",
      iast: "gamyāt",
      meaning: "may (someone) go (gam)",
      unit: "word",
    },
    {
      id: "ucyat",
      dev: "उच्यात्",
      iast: "ucyāt",
      meaning: "may (someone) speak (vac)",
      unit: "word",
    },
    {
      id: "niyat",
      dev: "नीयात्",
      iast: "nīyāt",
      meaning: "may (someone) lead (nī, parasmaipada 3sg)",
      unit: "word",
    },
    {
      id: "nesishta",
      dev: "नेषीष्ट",
      iast: "neṣīṣṭa",
      meaning: "may (someone) lead (nī, ātmanepada 3sg)",
      unit: "word",
    },
  ] as QuizDeckItem[],
};
