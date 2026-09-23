/**
 * Drill card provenance:
 * Cue: Gonda Concise Elementary Grammar §33 marut paradigm (p.26) and
 * §36–39 -at/-an shape (pp.29–31) — one stem, case × number forms.
 * Irregular: printed lesson cells only; dual omitted (three distinct
 * spellings after collapse — need four for a practice group). No noun
 * swaps (lesson does not print a second stem of the same join).
 *
 * marut|sg
 * - marut-sg-nom-voc: lesson marut table — marut
 * - marut-sg-acc: lesson marut table — marutam
 * - marut-sg-ins: lesson marut table — marutā
 * - marut-sg-dat: lesson marut table — marute
 * - marut-sg-abl-gen: lesson marut table — marutaḥ
 * - marut-sg-loc: lesson marut table — maruti
 *
 * marut|pl
 * - marut-pl-nom-acc-voc: lesson marut table — marutaḥ
 * - marut-pl-ins: lesson marut table — marudbhiḥ
 * - marut-pl-dat-abl: lesson marut table — marudbhyaḥ
 * - marut-pl-gen: lesson marut table — marutām
 * - marut-pl-loc: lesson marut table — marutsu
 *
 * bhagavat|sg
 * - bhagavat-sg-nom: lesson bhagavat table — bhagavān
 * - bhagavat-sg-voc: lesson bhagavat table — bhagavan
 * - bhagavat-sg-acc: lesson bhagavat table — bhagavantam
 * - bhagavat-sg-ins: lesson bhagavat table — bhagavatā
 * - bhagavat-sg-dat: lesson bhagavat table — bhagavate
 * - bhagavat-sg-abl-gen: lesson bhagavat table — bhagavataḥ
 * - bhagavat-sg-loc: lesson bhagavat table — bhagavati
 *
 * bhagavat|pl
 * - bhagavat-pl-nom-voc: lesson bhagavat table — bhagavantaḥ
 * - bhagavat-pl-acc: lesson bhagavat table — bhagavataḥ
 * - bhagavat-pl-ins: lesson bhagavat table — bhagavadbhiḥ
 * - bhagavat-pl-dat-abl: lesson bhagavat table — bhagavadbhyaḥ
 * - bhagavat-pl-gen: lesson bhagavat table — bhagavatām
 * - bhagavat-pl-loc: lesson bhagavat table — bhagavatsu
 *
 * ātman|sg
 * - atman-sg-nom: lesson ātman table — ātmā
 * - atman-sg-voc: lesson ātman table — ātman
 * - atman-sg-acc: lesson ātman table — ātmānam
 * - atman-sg-ins: lesson ātman table — ātmanā
 * - atman-sg-dat: lesson ātman table — ātmane
 * - atman-sg-abl-gen: lesson ātman table — ātmanaḥ
 * - atman-sg-loc: lesson ātman table — ātmani
 *
 * ātman|pl
 * - atman-pl-nom-voc: lesson ātman table — ātmānaḥ
 * - atman-pl-acc: lesson ātman table — ātmanaḥ
 * - atman-pl-ins: lesson ātman table — ātmabhiḥ
 * - atman-pl-dat-abl: lesson ātman table — ātmabhyaḥ
 * - atman-pl-gen: lesson ātman table — ātmanām
 * - atman-pl-loc: lesson ātman table — ātmasu
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-consonant-stems",
  titleEn: "Consonant stems",
  titleIast: "halanta",
  lessonId: "nominals-consonant-stems",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "marut-sg-nom-voc",
      dev: "मरुत्",
      iast: "marut",
      meaning: "subject / O (one) marut",
      unit: "word",
      group: "marut|sg",
    },
    {
      id: "marut-sg-acc",
      dev: "मरुतम्",
      iast: "marutam",
      meaning: "object (one) marut",
      unit: "word",
      group: "marut|sg",
    },
    {
      id: "marut-sg-ins",
      dev: "मरुता",
      iast: "marutā",
      meaning: "with (one) marut",
      unit: "word",
      group: "marut|sg",
    },
    {
      id: "marut-sg-dat",
      dev: "मरुते",
      iast: "marute",
      meaning: "for (one) marut",
      unit: "word",
      group: "marut|sg",
    },
    {
      id: "marut-sg-abl-gen",
      dev: "मरुतः",
      iast: "marutaḥ",
      meaning: "from / of (one) marut",
      unit: "word",
      group: "marut|sg",
    },
    {
      id: "marut-sg-loc",
      dev: "मरुति",
      iast: "maruti",
      meaning: "in (one) marut",
      unit: "word",
      group: "marut|sg",
    },
    {
      id: "marut-pl-nom-acc-voc",
      dev: "मरुतः",
      iast: "marutaḥ",
      meaning: "subject / object / O (many) marut",
      unit: "word",
      group: "marut|pl",
    },
    {
      id: "marut-pl-ins",
      dev: "मरुद्भिः",
      iast: "marudbhiḥ",
      meaning: "with (many) marut",
      unit: "word",
      group: "marut|pl",
    },
    {
      id: "marut-pl-dat-abl",
      dev: "मरुद्भ्यः",
      iast: "marudbhyaḥ",
      meaning: "for / from (many) marut",
      unit: "word",
      group: "marut|pl",
    },
    {
      id: "marut-pl-gen",
      dev: "मरुताम्",
      iast: "marutām",
      meaning: "of (many) marut",
      unit: "word",
      group: "marut|pl",
    },
    {
      id: "marut-pl-loc",
      dev: "मरुत्सु",
      iast: "marutsu",
      meaning: "in (many) marut",
      unit: "word",
      group: "marut|pl",
    },
    {
      id: "bhagavat-sg-nom",
      dev: "भगवान्",
      iast: "bhagavān",
      meaning: "subject (one) bhagavat",
      unit: "word",
      group: "bhagavat|sg",
    },
    {
      id: "bhagavat-sg-voc",
      dev: "भगवन्",
      iast: "bhagavan",
      meaning: "O (one) bhagavat",
      unit: "word",
      group: "bhagavat|sg",
    },
    {
      id: "bhagavat-sg-acc",
      dev: "भगवन्तम्",
      iast: "bhagavantam",
      meaning: "object (one) bhagavat",
      unit: "word",
      group: "bhagavat|sg",
    },
    {
      id: "bhagavat-sg-ins",
      dev: "भगवता",
      iast: "bhagavatā",
      meaning: "with (one) bhagavat",
      unit: "word",
      group: "bhagavat|sg",
    },
    {
      id: "bhagavat-sg-dat",
      dev: "भगवते",
      iast: "bhagavate",
      meaning: "for (one) bhagavat",
      unit: "word",
      group: "bhagavat|sg",
    },
    {
      id: "bhagavat-sg-abl-gen",
      dev: "भगवतः",
      iast: "bhagavataḥ",
      meaning: "from / of (one) bhagavat",
      unit: "word",
      group: "bhagavat|sg",
    },
    {
      id: "bhagavat-sg-loc",
      dev: "भगवति",
      iast: "bhagavati",
      meaning: "in (one) bhagavat",
      unit: "word",
      group: "bhagavat|sg",
    },
    {
      id: "bhagavat-pl-nom-voc",
      dev: "भगवन्तः",
      iast: "bhagavantaḥ",
      meaning: "subject / O (many) bhagavat",
      unit: "word",
      group: "bhagavat|pl",
    },
    {
      id: "bhagavat-pl-acc",
      dev: "भगवतः",
      iast: "bhagavataḥ",
      meaning: "object (many) bhagavat",
      unit: "word",
      group: "bhagavat|pl",
    },
    {
      id: "bhagavat-pl-ins",
      dev: "भगवद्भिः",
      iast: "bhagavadbhiḥ",
      meaning: "with (many) bhagavat",
      unit: "word",
      group: "bhagavat|pl",
    },
    {
      id: "bhagavat-pl-dat-abl",
      dev: "भगवद्भ्यः",
      iast: "bhagavadbhyaḥ",
      meaning: "for / from (many) bhagavat",
      unit: "word",
      group: "bhagavat|pl",
    },
    {
      id: "bhagavat-pl-gen",
      dev: "भगवताम्",
      iast: "bhagavatām",
      meaning: "of (many) bhagavat",
      unit: "word",
      group: "bhagavat|pl",
    },
    {
      id: "bhagavat-pl-loc",
      dev: "भगवत्सु",
      iast: "bhagavatsu",
      meaning: "in (many) bhagavat",
      unit: "word",
      group: "bhagavat|pl",
    },
    {
      id: "atman-sg-nom",
      dev: "आत्मा",
      iast: "ātmā",
      meaning: "subject (one) ātman",
      unit: "word",
      group: "ātman|sg",
    },
    {
      id: "atman-sg-voc",
      dev: "आत्मन्",
      iast: "ātman",
      meaning: "O (one) ātman",
      unit: "word",
      group: "ātman|sg",
    },
    {
      id: "atman-sg-acc",
      dev: "आत्मानम्",
      iast: "ātmānam",
      meaning: "object (one) ātman",
      unit: "word",
      group: "ātman|sg",
    },
    {
      id: "atman-sg-ins",
      dev: "आत्मना",
      iast: "ātmanā",
      meaning: "with (one) ātman",
      unit: "word",
      group: "ātman|sg",
    },
    {
      id: "atman-sg-dat",
      dev: "आत्मने",
      iast: "ātmane",
      meaning: "for (one) ātman",
      unit: "word",
      group: "ātman|sg",
    },
    {
      id: "atman-sg-abl-gen",
      dev: "आत्मनः",
      iast: "ātmanaḥ",
      meaning: "from / of (one) ātman",
      unit: "word",
      group: "ātman|sg",
    },
    {
      id: "atman-sg-loc",
      dev: "आत्मनि",
      iast: "ātmani",
      meaning: "in (one) ātman",
      unit: "word",
      group: "ātman|sg",
    },
    {
      id: "atman-pl-nom-voc",
      dev: "आत्मानः",
      iast: "ātmānaḥ",
      meaning: "subject / O (many) ātman",
      unit: "word",
      group: "ātman|pl",
    },
    {
      id: "atman-pl-acc",
      dev: "आत्मनः",
      iast: "ātmanaḥ",
      meaning: "object (many) ātman",
      unit: "word",
      group: "ātman|pl",
    },
    {
      id: "atman-pl-ins",
      dev: "आत्मभिः",
      iast: "ātmabhiḥ",
      meaning: "with (many) ātman",
      unit: "word",
      group: "ātman|pl",
    },
    {
      id: "atman-pl-dat-abl",
      dev: "आत्मभ्यः",
      iast: "ātmabhyaḥ",
      meaning: "for / from (many) ātman",
      unit: "word",
      group: "ātman|pl",
    },
    {
      id: "atman-pl-gen",
      dev: "आत्मनाम्",
      iast: "ātmanām",
      meaning: "of (many) ātman",
      unit: "word",
      group: "ātman|pl",
    },
    {
      id: "atman-pl-loc",
      dev: "आत्मसु",
      iast: "ātmasu",
      meaning: "in (many) ātman",
      unit: "word",
      group: "ātman|pl",
    },
  ] as QuizDeckItem[],
};
