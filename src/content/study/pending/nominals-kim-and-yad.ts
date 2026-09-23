/**
 * Drill card provenance:
 * - kim-m-sg-nom: lesson masculine kim table (Gonda §50 p.39 kim like tad; First Steps has no paradigm) — kaḥ
 * - kim-m-sg-acc: lesson masculine kim table (Gonda §50 p.39) — kam
 * - kim-m-sg-ins: lesson masculine kim table (Gonda §50 p.39) — kena
 * - kim-m-sg-dat: lesson masculine kim table (Gonda §50 p.39) — kasmai
 * - kim-m-sg-abl: lesson masculine kim table (Gonda §50 p.39) — kasmāt
 * - kim-m-sg-gen: lesson masculine kim table (Gonda §50 p.39) — kasya
 * - kim-m-sg-loc: lesson masculine kim table (Gonda §50 p.39) — kasmin
 * - kim-m-pl-nom: lesson masculine kim table (Gonda §50 p.39) — ke
 * - kim-m-pl-acc: lesson masculine kim table (Gonda §50 p.39) — kān
 * - kim-m-pl-ins: lesson masculine kim table (Gonda §50 p.39) — kaiḥ
 * - kim-m-pl-dat-abl: lesson masculine kim table (Gonda §50 p.39) — kebhyaḥ
 * - kim-m-pl-gen: lesson masculine kim table (Gonda §50 p.39) — keṣām
 * - kim-m-pl-loc: lesson masculine kim table (Gonda §50 p.39) — keṣu
 * - kim-f-sg-nom: lesson feminine kim table (Gonda §50 p.39) — kā
 * - kim-f-sg-acc: lesson feminine kim table (Gonda §50 p.39) — kām
 * - kim-f-sg-ins: lesson feminine kim table (Gonda §50 p.39) — kayā
 * - kim-f-sg-dat: lesson feminine kim table (Gonda §50 p.39) — kasyai
 * - kim-f-sg-abl-gen: lesson feminine kim table (Gonda §50 p.39) — kasyāḥ
 * - kim-f-sg-loc: lesson feminine kim table (Gonda §50 p.39) — kasyām
 * - kim-f-pl-nom-acc: lesson feminine kim table (Gonda §50 p.39) — kāḥ
 * - kim-f-pl-ins: lesson feminine kim table (Gonda §50 p.39) — kābhiḥ
 * - kim-f-pl-dat-abl: lesson feminine kim table (Gonda §50 p.39) — kābhyaḥ
 * - kim-f-pl-gen: lesson feminine kim table (Gonda §50 p.39) — kāsām
 * - kim-f-pl-loc: lesson feminine kim table (Gonda §50 p.39) — kāsu
 * - yad-m-sg-nom: lesson masculine yad table (Gonda §50 p.39 yad like tad) — yaḥ
 * - yad-m-sg-acc: lesson masculine yad table (Gonda §50 p.39) — yam
 * - yad-m-sg-ins: lesson masculine yad table (Gonda §50 p.39) — yena
 * - yad-m-sg-dat: lesson masculine yad table (Gonda §50 p.39) — yasmai
 * - yad-m-sg-abl: lesson masculine yad table (Gonda §50 p.39) — yasmāt
 * - yad-m-sg-gen: lesson masculine yad table (Gonda §50 p.39) — yasya
 * - yad-m-sg-loc: lesson masculine yad table (Gonda §50 p.39) — yasmin
 * - yad-m-pl-nom: lesson masculine yad table (Gonda §50 p.39) — ye
 * - yad-m-pl-acc: lesson masculine yad table (Gonda §50 p.39) — yān
 * - yad-m-pl-ins: lesson masculine yad table (Gonda §50 p.39) — yaiḥ
 * - yad-m-pl-dat-abl: lesson masculine yad table (Gonda §50 p.39) — yebhyaḥ
 * - yad-m-pl-gen: lesson masculine yad table (Gonda §50 p.39) — yeṣām
 * - yad-m-pl-loc: lesson masculine yad table (Gonda §50 p.39) — yeṣu
 * - yad-f-sg-nom: lesson feminine yad table (Gonda §50 p.39) — yā
 * - yad-f-sg-acc: lesson feminine yad table (Gonda §50 p.39) — yām
 * - yad-f-sg-ins: lesson feminine yad table (Gonda §50 p.39) — yayā
 * - yad-f-sg-dat: lesson feminine yad table (Gonda §50 p.39) — yasyai
 * - yad-f-sg-abl-gen: lesson feminine yad table (Gonda §50 p.39) — yasyāḥ
 * - yad-f-sg-loc: lesson feminine yad table (Gonda §50 p.39) — yasyām
 * - yad-f-pl-nom-acc: lesson feminine yad table (Gonda §50 p.39) — yāḥ
 * - yad-f-pl-ins: lesson feminine yad table (Gonda §50 p.39) — yābhiḥ
 * - yad-f-pl-dat-abl: lesson feminine yad table (Gonda §50 p.39) — yābhyaḥ
 * - yad-f-pl-gen: lesson feminine yad table (Gonda §50 p.39) — yāsām
 * - yad-f-pl-loc: lesson feminine yad table (Gonda §50 p.39) — yāsu
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-kim-and-yad",
  titleEn: "kim and yad",
  titleIast: "kim-yad",
  lessonId: "nominals-kim-and-yad",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "kim-m-sg-nom",
      dev: "कः",
      iast: "kaḥ",
      meaning: "kim (m.) as the subject (one)",
      unit: "word",
      group: "kim|sg|m",
    },
    {
      id: "kim-m-sg-acc",
      dev: "कम्",
      iast: "kam",
      meaning: "kim (m.) as the object (one)",
      unit: "word",
      group: "kim|sg|m",
    },
    {
      id: "kim-m-sg-ins",
      dev: "केन",
      iast: "kena",
      meaning: "with (one) kim (m.)",
      unit: "word",
      group: "kim|sg|m",
    },
    {
      id: "kim-m-sg-dat",
      dev: "कस्मै",
      iast: "kasmai",
      meaning: "for (one) kim (m.)",
      unit: "word",
      group: "kim|sg|m",
    },
    {
      id: "kim-m-sg-abl",
      dev: "कस्मात्",
      iast: "kasmāt",
      meaning: "from (one) kim (m.)",
      unit: "word",
      group: "kim|sg|m",
    },
    {
      id: "kim-m-sg-gen",
      dev: "कस्य",
      iast: "kasya",
      meaning: "of (one) kim (m.)",
      unit: "word",
      group: "kim|sg|m",
    },
    {
      id: "kim-m-sg-loc",
      dev: "कस्मिन्",
      iast: "kasmin",
      meaning: "in (one) kim (m.)",
      unit: "word",
      group: "kim|sg|m",
    },
    {
      id: "kim-m-pl-nom",
      dev: "के",
      iast: "ke",
      meaning: "kim (m.) as the subject (many)",
      unit: "word",
      group: "kim|pl|m",
    },
    {
      id: "kim-m-pl-acc",
      dev: "कान्",
      iast: "kān",
      meaning: "kim (m.) as the object (many)",
      unit: "word",
      group: "kim|pl|m",
    },
    {
      id: "kim-m-pl-ins",
      dev: "कैः",
      iast: "kaiḥ",
      meaning: "with (many) kim (m.)",
      unit: "word",
      group: "kim|pl|m",
    },
    {
      id: "kim-m-pl-dat-abl",
      dev: "केभ्यः",
      iast: "kebhyaḥ",
      meaning: "for / from (many) kim (m.)",
      unit: "word",
      group: "kim|pl|m",
    },
    {
      id: "kim-m-pl-gen",
      dev: "केषाम्",
      iast: "keṣām",
      meaning: "of (many) kim (m.)",
      unit: "word",
      group: "kim|pl|m",
    },
    {
      id: "kim-m-pl-loc",
      dev: "केषु",
      iast: "keṣu",
      meaning: "in (many) kim (m.)",
      unit: "word",
      group: "kim|pl|m",
    },
    {
      id: "kim-f-sg-nom",
      dev: "का",
      iast: "kā",
      meaning: "kim (f.) as the subject (one)",
      unit: "word",
      group: "kim|sg|f",
    },
    {
      id: "kim-f-sg-acc",
      dev: "काम्",
      iast: "kām",
      meaning: "kim (f.) as the object (one)",
      unit: "word",
      group: "kim|sg|f",
    },
    {
      id: "kim-f-sg-ins",
      dev: "कया",
      iast: "kayā",
      meaning: "with (one) kim (f.)",
      unit: "word",
      group: "kim|sg|f",
    },
    {
      id: "kim-f-sg-dat",
      dev: "कस्यै",
      iast: "kasyai",
      meaning: "for (one) kim (f.)",
      unit: "word",
      group: "kim|sg|f",
    },
    {
      id: "kim-f-sg-abl-gen",
      dev: "कस्याः",
      iast: "kasyāḥ",
      meaning: "from / of (one) kim (f.)",
      unit: "word",
      group: "kim|sg|f",
    },
    {
      id: "kim-f-sg-loc",
      dev: "कस्याम्",
      iast: "kasyām",
      meaning: "in (one) kim (f.)",
      unit: "word",
      group: "kim|sg|f",
    },
    {
      id: "kim-f-pl-nom-acc",
      dev: "काः",
      iast: "kāḥ",
      meaning: "subject / object (many) kim (f.)",
      unit: "word",
      group: "kim|pl|f",
    },
    {
      id: "kim-f-pl-ins",
      dev: "काभिः",
      iast: "kābhiḥ",
      meaning: "with (many) kim (f.)",
      unit: "word",
      group: "kim|pl|f",
    },
    {
      id: "kim-f-pl-dat-abl",
      dev: "काभ्यः",
      iast: "kābhyaḥ",
      meaning: "for / from (many) kim (f.)",
      unit: "word",
      group: "kim|pl|f",
    },
    {
      id: "kim-f-pl-gen",
      dev: "कासाम्",
      iast: "kāsām",
      meaning: "of (many) kim (f.)",
      unit: "word",
      group: "kim|pl|f",
    },
    {
      id: "kim-f-pl-loc",
      dev: "कासु",
      iast: "kāsu",
      meaning: "in (many) kim (f.)",
      unit: "word",
      group: "kim|pl|f",
    },
    {
      id: "yad-m-sg-nom",
      dev: "यः",
      iast: "yaḥ",
      meaning: "yad (m.) as the subject (one)",
      unit: "word",
      group: "yad|sg|m",
    },
    {
      id: "yad-m-sg-acc",
      dev: "यम्",
      iast: "yam",
      meaning: "yad (m.) as the object (one)",
      unit: "word",
      group: "yad|sg|m",
    },
    {
      id: "yad-m-sg-ins",
      dev: "येन",
      iast: "yena",
      meaning: "with (one) yad (m.)",
      unit: "word",
      group: "yad|sg|m",
    },
    {
      id: "yad-m-sg-dat",
      dev: "यस्मै",
      iast: "yasmai",
      meaning: "for (one) yad (m.)",
      unit: "word",
      group: "yad|sg|m",
    },
    {
      id: "yad-m-sg-abl",
      dev: "यस्मात्",
      iast: "yasmāt",
      meaning: "from (one) yad (m.)",
      unit: "word",
      group: "yad|sg|m",
    },
    {
      id: "yad-m-sg-gen",
      dev: "यस्य",
      iast: "yasya",
      meaning: "of (one) yad (m.)",
      unit: "word",
      group: "yad|sg|m",
    },
    {
      id: "yad-m-sg-loc",
      dev: "यस्मिन्",
      iast: "yasmin",
      meaning: "in (one) yad (m.)",
      unit: "word",
      group: "yad|sg|m",
    },
    {
      id: "yad-m-pl-nom",
      dev: "ये",
      iast: "ye",
      meaning: "yad (m.) as the subject (many)",
      unit: "word",
      group: "yad|pl|m",
    },
    {
      id: "yad-m-pl-acc",
      dev: "यान्",
      iast: "yān",
      meaning: "yad (m.) as the object (many)",
      unit: "word",
      group: "yad|pl|m",
    },
    {
      id: "yad-m-pl-ins",
      dev: "यैः",
      iast: "yaiḥ",
      meaning: "with (many) yad (m.)",
      unit: "word",
      group: "yad|pl|m",
    },
    {
      id: "yad-m-pl-dat-abl",
      dev: "येभ्यः",
      iast: "yebhyaḥ",
      meaning: "for / from (many) yad (m.)",
      unit: "word",
      group: "yad|pl|m",
    },
    {
      id: "yad-m-pl-gen",
      dev: "येषाम्",
      iast: "yeṣām",
      meaning: "of (many) yad (m.)",
      unit: "word",
      group: "yad|pl|m",
    },
    {
      id: "yad-m-pl-loc",
      dev: "येषु",
      iast: "yeṣu",
      meaning: "in (many) yad (m.)",
      unit: "word",
      group: "yad|pl|m",
    },
    {
      id: "yad-f-sg-nom",
      dev: "या",
      iast: "yā",
      meaning: "yad (f.) as the subject (one)",
      unit: "word",
      group: "yad|sg|f",
    },
    {
      id: "yad-f-sg-acc",
      dev: "याम्",
      iast: "yām",
      meaning: "yad (f.) as the object (one)",
      unit: "word",
      group: "yad|sg|f",
    },
    {
      id: "yad-f-sg-ins",
      dev: "यया",
      iast: "yayā",
      meaning: "with (one) yad (f.)",
      unit: "word",
      group: "yad|sg|f",
    },
    {
      id: "yad-f-sg-dat",
      dev: "यस्यै",
      iast: "yasyai",
      meaning: "for (one) yad (f.)",
      unit: "word",
      group: "yad|sg|f",
    },
    {
      id: "yad-f-sg-abl-gen",
      dev: "यस्याः",
      iast: "yasyāḥ",
      meaning: "from / of (one) yad (f.)",
      unit: "word",
      group: "yad|sg|f",
    },
    {
      id: "yad-f-sg-loc",
      dev: "यस्याम्",
      iast: "yasyām",
      meaning: "in (one) yad (f.)",
      unit: "word",
      group: "yad|sg|f",
    },
    {
      id: "yad-f-pl-nom-acc",
      dev: "याः",
      iast: "yāḥ",
      meaning: "subject / object (many) yad (f.)",
      unit: "word",
      group: "yad|pl|f",
    },
    {
      id: "yad-f-pl-ins",
      dev: "याभिः",
      iast: "yābhiḥ",
      meaning: "with (many) yad (f.)",
      unit: "word",
      group: "yad|pl|f",
    },
    {
      id: "yad-f-pl-dat-abl",
      dev: "याभ्यः",
      iast: "yābhyaḥ",
      meaning: "for / from (many) yad (f.)",
      unit: "word",
      group: "yad|pl|f",
    },
    {
      id: "yad-f-pl-gen",
      dev: "यासाम्",
      iast: "yāsām",
      meaning: "of (many) yad (f.)",
      unit: "word",
      group: "yad|pl|f",
    },
    {
      id: "yad-f-pl-loc",
      dev: "यासु",
      iast: "yāsu",
      meaning: "in (many) yad (f.)",
      unit: "word",
      group: "yad|pl|f",
    },
  ] as QuizDeckItem[],
};
