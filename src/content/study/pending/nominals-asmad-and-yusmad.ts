/**
 * Drill card provenance (printed lesson cells only; pronouns are irregular):
 * - asmad-sg-nom: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — aham
 * - asmad-sg-acc: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mām
 * - asmad-sg-ins: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mayā
 * - asmad-sg-dat: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mahyam
 * - asmad-sg-abl: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mat
 * - asmad-sg-gen: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mama
 * - asmad-sg-loc: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — mayi
 * - asmad-pl-nom: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — vayam
 * - asmad-pl-acc: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — asmān
 * - asmad-pl-ins: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — asmābhiḥ
 * - asmad-pl-dat: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — asmabhyam
 * - asmad-pl-abl: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — asmat
 * - asmad-pl-gen: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — asmākam
 * - asmad-pl-loc: lesson asmad table (First Steps §6.6 p.118; Gonda §47 p.37) — asmāsu
 * - yusmad-sg-nom: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tvam
 * - yusmad-sg-acc: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tvām
 * - yusmad-sg-ins: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tvayā
 * - yusmad-sg-dat: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tubhyam
 * - yusmad-sg-abl: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tvat
 * - yusmad-sg-gen: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tava
 * - yusmad-sg-loc: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — tvayi
 * - yusmad-pl-nom: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — yūyam
 * - yusmad-pl-acc: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — yuṣmān
 * - yusmad-pl-ins: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — yuṣmābhiḥ
 * - yusmad-pl-dat: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — yuṣmabhyam
 * - yusmad-pl-abl: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — yuṣmat
 * - yusmad-pl-gen: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — yuṣmākam
 * - yusmad-pl-loc: lesson yuṣmad table (First Steps §6.6 p.118; Gonda §47 p.37) — yuṣmāsu
 * Dual omitted (only three distinct spellings after collapse). Enclitics not in lesson table.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-asmad-and-yusmad",
  titleEn: "asmad and yuṣmad",
  titleIast: "asmad-yuṣmad",
  lessonId: "nominals-asmad-and-yusmad",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "asmad-sg-nom",
      dev: "अहम्",
      iast: "aham",
      meaning: "subject (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-acc",
      dev: "माम्",
      iast: "mām",
      meaning: "object (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-ins",
      dev: "मया",
      iast: "mayā",
      meaning: "with (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-dat",
      dev: "मह्यम्",
      iast: "mahyam",
      meaning: "for (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-abl",
      dev: "मत्",
      iast: "mat",
      meaning: "from (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-gen",
      dev: "मम",
      iast: "mama",
      meaning: "of (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-sg-loc",
      dev: "मयि",
      iast: "mayi",
      meaning: "in (one) asmad",
      unit: "word",
      group: "asmad|sg",
    },
    {
      id: "asmad-pl-nom",
      dev: "वयम्",
      iast: "vayam",
      meaning: "subject (many) asmad",
      unit: "word",
      group: "asmad|pl",
    },
    {
      id: "asmad-pl-acc",
      dev: "अस्मान्",
      iast: "asmān",
      meaning: "object (many) asmad",
      unit: "word",
      group: "asmad|pl",
    },
    {
      id: "asmad-pl-ins",
      dev: "अस्माभिः",
      iast: "asmābhiḥ",
      meaning: "with (many) asmad",
      unit: "word",
      group: "asmad|pl",
    },
    {
      id: "asmad-pl-dat",
      dev: "अस्मभ्यम्",
      iast: "asmabhyam",
      meaning: "for (many) asmad",
      unit: "word",
      group: "asmad|pl",
    },
    {
      id: "asmad-pl-abl",
      dev: "अस्मत्",
      iast: "asmat",
      meaning: "from (many) asmad",
      unit: "word",
      group: "asmad|pl",
    },
    {
      id: "asmad-pl-gen",
      dev: "अस्माकम्",
      iast: "asmākam",
      meaning: "of (many) asmad",
      unit: "word",
      group: "asmad|pl",
    },
    {
      id: "asmad-pl-loc",
      dev: "अस्मासु",
      iast: "asmāsu",
      meaning: "in (many) asmad",
      unit: "word",
      group: "asmad|pl",
    },
    {
      id: "yusmad-sg-nom",
      dev: "त्वम्",
      iast: "tvam",
      meaning: "subject (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-acc",
      dev: "त्वाम्",
      iast: "tvām",
      meaning: "object (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-ins",
      dev: "त्वया",
      iast: "tvayā",
      meaning: "with (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-dat",
      dev: "तुभ्यम्",
      iast: "tubhyam",
      meaning: "for (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-abl",
      dev: "त्वत्",
      iast: "tvat",
      meaning: "from (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-gen",
      dev: "तव",
      iast: "tava",
      meaning: "of (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-sg-loc",
      dev: "त्वयि",
      iast: "tvayi",
      meaning: "in (one) yuṣmad",
      unit: "word",
      group: "yuṣmad|sg",
    },
    {
      id: "yusmad-pl-nom",
      dev: "यूयम्",
      iast: "yūyam",
      meaning: "subject (many) yuṣmad",
      unit: "word",
      group: "yuṣmad|pl",
    },
    {
      id: "yusmad-pl-acc",
      dev: "युष्मान्",
      iast: "yuṣmān",
      meaning: "object (many) yuṣmad",
      unit: "word",
      group: "yuṣmad|pl",
    },
    {
      id: "yusmad-pl-ins",
      dev: "युष्माभिः",
      iast: "yuṣmābhiḥ",
      meaning: "with (many) yuṣmad",
      unit: "word",
      group: "yuṣmad|pl",
    },
    {
      id: "yusmad-pl-dat",
      dev: "युष्मभ्यम्",
      iast: "yuṣmabhyam",
      meaning: "for (many) yuṣmad",
      unit: "word",
      group: "yuṣmad|pl",
    },
    {
      id: "yusmad-pl-abl",
      dev: "युष्मत्",
      iast: "yuṣmat",
      meaning: "from (many) yuṣmad",
      unit: "word",
      group: "yuṣmad|pl",
    },
    {
      id: "yusmad-pl-gen",
      dev: "युष्माकम्",
      iast: "yuṣmākam",
      meaning: "of (many) yuṣmad",
      unit: "word",
      group: "yuṣmad|pl",
    },
    {
      id: "yusmad-pl-loc",
      dev: "युष्मासु",
      iast: "yuṣmāsu",
      meaning: "in (many) yuṣmad",
      unit: "word",
      group: "yuṣmad|pl",
    },
  ] as QuizDeckItem[],
};
