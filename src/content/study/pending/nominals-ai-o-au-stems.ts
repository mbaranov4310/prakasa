/**
 * Drill card provenance:
 * Cue: Gonda Concise Elementary Grammar §31 stems in diphthongs (p.25) —
 * nau and go paradigms; First Steps has no ai/o/au declension exercise.
 * Irregular: printed lesson cells only; dual omitted (three distinct
 * spellings after collapse — need four for a practice group). No noun
 * swaps (dyo is named but not declined in the lesson table).
 *
 * rai|sg
 * - rai-sg-nom-voc: lesson rai table — rāḥ
 * - rai-sg-acc: lesson rai table — rāyam
 * - rai-sg-ins: lesson rai table — rāyā
 * - rai-sg-dat: lesson rai table — rāye
 * - rai-sg-abl-gen: lesson rai table — rāyaḥ
 * - rai-sg-loc: lesson rai table — rāyi
 *
 * rai|pl
 * - rai-pl-nom-acc-voc: lesson rai table — rāyaḥ
 * - rai-pl-ins: lesson rai table — rābhiḥ
 * - rai-pl-dat-abl: lesson rai table — rābhyaḥ
 * - rai-pl-gen: lesson rai table — rāyām
 * - rai-pl-loc: lesson rai table — rāṣu
 *
 * go|sg
 * - go-sg-nom-voc: lesson go table — gauḥ
 * - go-sg-acc: lesson go table — gām
 * - go-sg-ins: lesson go table — gavā
 * - go-sg-dat: lesson go table — gave
 * - go-sg-abl-gen: lesson go table — goḥ
 * - go-sg-loc: lesson go table — gavi
 *
 * go|pl
 * - go-pl-nom-voc: lesson go table — gāvaḥ
 * - go-pl-acc: lesson go table — gāḥ
 * - go-pl-ins: lesson go table — gobhiḥ
 * - go-pl-dat-abl: lesson go table — gobhyaḥ
 * - go-pl-gen: lesson go table — gavām
 * - go-pl-loc: lesson go table — goṣu
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
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-ai-o-au-stems",
  titleEn: "-ai, -o, and -au stems",
  titleIast: "ai-o-au",
  lessonId: "nominals-ai-o-au-stems",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // rai|sg
    {
      id: "rai-sg-nom-voc",
      dev: "राः",
      iast: "rāḥ",
      meaning: "subject / O (one) rai",
      unit: "word",
      group: "rai|sg",
    },
    {
      id: "rai-sg-acc",
      dev: "रायम्",
      iast: "rāyam",
      meaning: "object (one) rai",
      unit: "word",
      group: "rai|sg",
    },
    {
      id: "rai-sg-ins",
      dev: "राया",
      iast: "rāyā",
      meaning: "with (one) rai",
      unit: "word",
      group: "rai|sg",
    },
    {
      id: "rai-sg-dat",
      dev: "राये",
      iast: "rāye",
      meaning: "for (one) rai",
      unit: "word",
      group: "rai|sg",
    },
    {
      id: "rai-sg-abl-gen",
      dev: "रायः",
      iast: "rāyaḥ",
      meaning: "from / of (one) rai",
      unit: "word",
      group: "rai|sg",
    },
    {
      id: "rai-sg-loc",
      dev: "रायि",
      iast: "rāyi",
      meaning: "in (one) rai",
      unit: "word",
      group: "rai|sg",
    },
    // rai|pl
    {
      id: "rai-pl-nom-acc-voc",
      dev: "रायः",
      iast: "rāyaḥ",
      meaning: "subject / object / O (many) rai",
      unit: "word",
      group: "rai|pl",
    },
    {
      id: "rai-pl-ins",
      dev: "राभिः",
      iast: "rābhiḥ",
      meaning: "with (many) rai",
      unit: "word",
      group: "rai|pl",
    },
    {
      id: "rai-pl-dat-abl",
      dev: "राभ्यः",
      iast: "rābhyaḥ",
      meaning: "for / from (many) rai",
      unit: "word",
      group: "rai|pl",
    },
    {
      id: "rai-pl-gen",
      dev: "रायाम्",
      iast: "rāyām",
      meaning: "of (many) rai",
      unit: "word",
      group: "rai|pl",
    },
    {
      id: "rai-pl-loc",
      dev: "राषु",
      iast: "rāṣu",
      meaning: "in (many) rai",
      unit: "word",
      group: "rai|pl",
    },
    // go|sg
    {
      id: "go-sg-nom-voc",
      dev: "गौः",
      iast: "gauḥ",
      meaning: "subject / O (one) go",
      unit: "word",
      group: "go|sg",
    },
    {
      id: "go-sg-acc",
      dev: "गाम्",
      iast: "gām",
      meaning: "object (one) go",
      unit: "word",
      group: "go|sg",
    },
    {
      id: "go-sg-ins",
      dev: "गवा",
      iast: "gavā",
      meaning: "with (one) go",
      unit: "word",
      group: "go|sg",
    },
    {
      id: "go-sg-dat",
      dev: "गवे",
      iast: "gave",
      meaning: "for (one) go",
      unit: "word",
      group: "go|sg",
    },
    {
      id: "go-sg-abl-gen",
      dev: "गोः",
      iast: "goḥ",
      meaning: "from / of (one) go",
      unit: "word",
      group: "go|sg",
    },
    {
      id: "go-sg-loc",
      dev: "गवि",
      iast: "gavi",
      meaning: "in (one) go",
      unit: "word",
      group: "go|sg",
    },
    // go|pl
    {
      id: "go-pl-nom-voc",
      dev: "गावः",
      iast: "gāvaḥ",
      meaning: "subject / O (many) go",
      unit: "word",
      group: "go|pl",
    },
    {
      id: "go-pl-acc",
      dev: "गाः",
      iast: "gāḥ",
      meaning: "object (many) go",
      unit: "word",
      group: "go|pl",
    },
    {
      id: "go-pl-ins",
      dev: "गोभिः",
      iast: "gobhiḥ",
      meaning: "with (many) go",
      unit: "word",
      group: "go|pl",
    },
    {
      id: "go-pl-dat-abl",
      dev: "गोभ्यः",
      iast: "gobhyaḥ",
      meaning: "for / from (many) go",
      unit: "word",
      group: "go|pl",
    },
    {
      id: "go-pl-gen",
      dev: "गवाम्",
      iast: "gavām",
      meaning: "of (many) go",
      unit: "word",
      group: "go|pl",
    },
    {
      id: "go-pl-loc",
      dev: "गोषु",
      iast: "goṣu",
      meaning: "in (many) go",
      unit: "word",
      group: "go|pl",
    },
    // nau|sg
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
    // nau|pl
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
  ] as QuizDeckItem[],
};
