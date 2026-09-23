/**
 * Drill card provenance:
 * Cue: First Steps Towards Sanskrit §6.3 sample paradigms (p.121) and
 * §6.7.1 case/number ID (p.131) — one stem, case × number forms.
 * Irregular stems: only printed lesson cells (nau, manas); dual omitted
 * (three distinct spellings after collapse — need four for a practice group).
 *
 * nau|sg
 * - nau-sg-nom-voc: lesson nau table — nauḥ
 * - nau-sg-acc: lesson nau table — nāvam
 * - nau-sg-ins: lesson nau table — nāvā
 * - nau-sg-dat: lesson nau table — nāve
 * - nau-sg-abl-gen: lesson nau table — nāvaḥ
 * - nau-sg-loc: lesson nau table — nāvi
 *
 * nau|pl
 * - nau-pl-nom-acc-voc: lesson nau table — nāvaḥ
 * - nau-pl-ins: lesson nau table — naubhiḥ
 * - nau-pl-dat-abl: lesson nau table — naubhyaḥ
 * - nau-pl-gen: lesson nau table — nāvām
 * - nau-pl-loc: lesson nau table — nauṣu
 *
 * manas|sg
 * - manas-sg-nom-acc-voc: lesson manas table — manaḥ
 * - manas-sg-ins: lesson manas table — manasā
 * - manas-sg-dat: lesson manas table — manase
 * - manas-sg-abl-gen: lesson manas table — manasaḥ
 * - manas-sg-loc: lesson manas table — manasi
 *
 * manas|pl
 * - manas-pl-nom-acc-voc: lesson manas table — manāṃsi
 * - manas-pl-ins: lesson manas table — manobhiḥ
 * - manas-pl-dat-abl: lesson manas table — manobhyaḥ
 * - manas-pl-gen: lesson manas table — manasām
 * - manas-pl-loc: lesson manas table — manaḥsu
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-basic-nominal-endings",
  titleEn: "Basic nominal endings",
  titleIast: "sup",
  lessonId: "nominals-basic-nominal-endings",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "nau-sg-nom-voc",
      dev: "नौः",
      iast: "nauḥ",
      meaning: "subject / O (one) nau",
      unit: "word",
      group: "nau|sg",
    },
    {
      id: "nau-sg-acc",
      dev: "नावम्",
      iast: "nāvam",
      meaning: "object (one) nau",
      unit: "word",
      group: "nau|sg",
    },
    {
      id: "nau-sg-ins",
      dev: "नावा",
      iast: "nāvā",
      meaning: "with (one) nau",
      unit: "word",
      group: "nau|sg",
    },
    {
      id: "nau-sg-dat",
      dev: "नावे",
      iast: "nāve",
      meaning: "for (one) nau",
      unit: "word",
      group: "nau|sg",
    },
    {
      id: "nau-sg-abl-gen",
      dev: "नावः",
      iast: "nāvaḥ",
      meaning: "from / of (one) nau",
      unit: "word",
      group: "nau|sg",
    },
    {
      id: "nau-sg-loc",
      dev: "नावि",
      iast: "nāvi",
      meaning: "in (one) nau",
      unit: "word",
      group: "nau|sg",
    },
    {
      id: "nau-pl-nom-acc-voc",
      dev: "नावः",
      iast: "nāvaḥ",
      meaning: "subject / object / O (many) nau",
      unit: "word",
      group: "nau|pl",
    },
    {
      id: "nau-pl-ins",
      dev: "नौभिः",
      iast: "naubhiḥ",
      meaning: "with (many) nau",
      unit: "word",
      group: "nau|pl",
    },
    {
      id: "nau-pl-dat-abl",
      dev: "नौभ्यः",
      iast: "naubhyaḥ",
      meaning: "for / from (many) nau",
      unit: "word",
      group: "nau|pl",
    },
    {
      id: "nau-pl-gen",
      dev: "नावाम्",
      iast: "nāvām",
      meaning: "of (many) nau",
      unit: "word",
      group: "nau|pl",
    },
    {
      id: "nau-pl-loc",
      dev: "नौषु",
      iast: "nauṣu",
      meaning: "in (many) nau",
      unit: "word",
      group: "nau|pl",
    },
    {
      id: "manas-sg-nom-acc-voc",
      dev: "मनः",
      iast: "manaḥ",
      meaning: "subject / object / O (one) manas",
      unit: "word",
      group: "manas|sg",
    },
    {
      id: "manas-sg-ins",
      dev: "मनसा",
      iast: "manasā",
      meaning: "with (one) manas",
      unit: "word",
      group: "manas|sg",
    },
    {
      id: "manas-sg-dat",
      dev: "मनसे",
      iast: "manase",
      meaning: "for (one) manas",
      unit: "word",
      group: "manas|sg",
    },
    {
      id: "manas-sg-abl-gen",
      dev: "मनसः",
      iast: "manasaḥ",
      meaning: "from / of (one) manas",
      unit: "word",
      group: "manas|sg",
    },
    {
      id: "manas-sg-loc",
      dev: "मनसि",
      iast: "manasi",
      meaning: "in (one) manas",
      unit: "word",
      group: "manas|sg",
    },
    {
      id: "manas-pl-nom-acc-voc",
      dev: "मनांसि",
      iast: "manāṃsi",
      meaning: "subject / object / O (many) manas",
      unit: "word",
      group: "manas|pl",
    },
    {
      id: "manas-pl-ins",
      dev: "मनोभिः",
      iast: "manobhiḥ",
      meaning: "with (many) manas",
      unit: "word",
      group: "manas|pl",
    },
    {
      id: "manas-pl-dat-abl",
      dev: "मनोभ्यः",
      iast: "manobhyaḥ",
      meaning: "for / from (many) manas",
      unit: "word",
      group: "manas|pl",
    },
    {
      id: "manas-pl-gen",
      dev: "मनसाम्",
      iast: "manasām",
      meaning: "of (many) manas",
      unit: "word",
      group: "manas|pl",
    },
    {
      id: "manas-pl-loc",
      dev: "मनःसु",
      iast: "manaḥsu",
      meaning: "in (many) manas",
      unit: "word",
      group: "manas|pl",
    },
  ] as QuizDeckItem[],
};
