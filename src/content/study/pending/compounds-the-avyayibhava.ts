/**
 * Drill card provenance:
 * - yathā|am: lesson glyph yathāśakti; Gonda §113 (p.84) yatheccham (yathā+icchā)
 *   swapped to kāma / sukha / bala → yathākāmam, yathāsukham, yathābalam.
 * - prati|am: lesson glyph pratipadam; Gonda §113 praty-aham (prati+ahan) swapped
 *   to dina / varṣa / māsa → pratidinam, prativarṣam, pratimāsam.
 * - sa|am: Gonda §113 sa-kopam (kopa “anger”) swapped to harṣa / śoka / bhaya / sneha.
 * - yāvat|am (lesson yāvajjīvam) omitted: only one printed form; no textbook pile of
 *   same-shape swaps to reach four distinct IAST.
 * First Steps Towards Sanskrit has no avyayībhāva exercise (compounds only in
 * readings/glossary). Formation cue: Gonda §113 — indeclinable + acc. sg. n. (-am).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "compounds-the-avyayibhava",
  titleEn: "The avyayībhāva",
  titleIast: "avyayībhāva",
  lessonId: "compounds-the-avyayibhava",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // yathā|am
    {
      id: "yathasakti",
      // lesson glyph
      dev: "यथाशक्ति",
      iast: "yathāśakti",
      meaning: "according to one's power",
      unit: "word",
      group: "yathā|am",
    },
    {
      id: "yathakamam",
      // Gonda §113 yatheccham; swapped icchā → kāma
      dev: "यथाकामम्",
      iast: "yathākāmam",
      meaning: "according to wish",
      unit: "word",
      group: "yathā|am",
    },
    {
      id: "yathasukham",
      // Gonda §113 yatheccham shape; swapped icchā → sukha
      dev: "यथासुखम्",
      iast: "yathāsukham",
      meaning: "according to comfort",
      unit: "word",
      group: "yathā|am",
    },
    {
      id: "yathabalam",
      // Gonda §113 yatheccham shape; swapped icchā → bala
      dev: "यथाबलम्",
      iast: "yathābalam",
      meaning: "according to strength",
      unit: "word",
      group: "yathā|am",
    },
    // prati|am
    {
      id: "pratipadam",
      // lesson glyph
      dev: "प्रतिपदम्",
      iast: "pratipadam",
      meaning: "at every word; for each word",
      unit: "word",
      group: "prati|am",
    },
    {
      id: "pratidinam",
      // Gonda §113 praty-aham; swapped ahan → dina
      dev: "प्रतिदिनम्",
      iast: "pratidinam",
      meaning: "every day; daily",
      unit: "word",
      group: "prati|am",
    },
    {
      id: "prativarsam",
      // Gonda §113 praty-aham shape; swapped ahan → varṣa
      dev: "प्रतिवर्षम्",
      iast: "prativarṣam",
      meaning: "every year; yearly",
      unit: "word",
      group: "prati|am",
    },
    {
      id: "pratimasam",
      // Gonda §113 praty-aham shape; swapped ahan → māsa
      dev: "प्रतिमासम्",
      iast: "pratimāsam",
      meaning: "every month; monthly",
      unit: "word",
      group: "prati|am",
    },
    // sa|am
    {
      id: "saharsam",
      // Gonda §113 sa-kopam; swapped kopa → harṣa
      dev: "सहर्षम्",
      iast: "saharṣam",
      meaning: "joyfully; with joy",
      unit: "word",
      group: "sa|am",
    },
    {
      id: "sasokam",
      // Gonda §113 sa-kopam shape; swapped kopa → śoka
      dev: "सशोकम्",
      iast: "saśokam",
      meaning: "sorrowfully; with grief",
      unit: "word",
      group: "sa|am",
    },
    {
      id: "sabhayam",
      // Gonda §113 sa-kopam shape; swapped kopa → bhaya
      dev: "सभयम्",
      iast: "sabhayam",
      meaning: "fearfully; with fear",
      unit: "word",
      group: "sa|am",
    },
    {
      id: "sasneham",
      // Gonda §113 sa-kopam shape; swapped kopa → sneha
      dev: "सस्नेहम्",
      iast: "sasneham",
      meaning: "affectionately; with affection",
      unit: "word",
      group: "sa|am",
    },
  ] as QuizDeckItem[],
};
