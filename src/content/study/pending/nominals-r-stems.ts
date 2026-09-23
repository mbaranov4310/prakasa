/**
 * Drill card provenance:
 * - kartr-sg-nom: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartā
 * - kartr-sg-acc: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartāram
 * - kartr-sg-ins: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartrā
 * - kartr-sg-dat: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartre
 * - kartr-sg-abl-gen: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartuḥ
 * - kartr-sg-loc: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartari
 * - kartr-sg-voc: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartaḥ
 * - kartr-pl-nom-voc: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartāraḥ
 * - kartr-pl-acc: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartṝn
 * - kartr-pl-ins: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartṛbhiḥ
 * - kartr-pl-dat-abl: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartṛbhyaḥ
 * - kartr-pl-gen: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartṝṇām
 * - kartr-pl-loc: lesson masculine kartṛ table (Gonda §29 p.24 dātṛ; noun swapped to kartṛ) — kartṛṣu
 * - pitr-sg-nom: lesson masculine pitṛ table (Gonda §30 p.25; Exercise VI) — pitā
 * - pitr-sg-acc: lesson masculine pitṛ table (Gonda §30 p.25) — pitaram
 * - pitr-sg-ins: lesson masculine pitṛ table (Gonda §30 p.25) — pitrā
 * - pitr-sg-dat: lesson masculine pitṛ table (Gonda §30 p.25) — pitre
 * - pitr-sg-abl-gen: lesson masculine pitṛ table (Gonda §30 p.25) — pituḥ
 * - pitr-sg-loc: lesson masculine pitṛ table (Gonda §30 p.25) — pitari
 * - pitr-sg-voc: lesson masculine pitṛ table (Gonda §30 p.25) — pitaḥ
 * - pitr-pl-nom-voc: lesson masculine pitṛ table (Gonda §30 p.25) — pitaraḥ
 * - pitr-pl-acc: lesson masculine pitṛ table (Gonda §30 p.25) — pitṝn
 * - pitr-pl-ins: lesson masculine pitṛ table (Gonda §30 p.25) — pitṛbhiḥ
 * - pitr-pl-dat-abl: lesson masculine pitṛ table (Gonda §30 p.25) — pitṛbhyaḥ
 * - pitr-pl-gen: lesson masculine pitṛ table (Gonda §30 p.25) — pitṝṇām
 * - pitr-pl-loc: lesson masculine pitṛ table (Gonda §30 p.25) — pitṛṣu
 * - matr-sg-nom: lesson feminine mātṛ table (Gonda §30 p.25; Exercise VI) — mātā
 * - matr-sg-acc: lesson feminine mātṛ table (Gonda §30 p.25) — mātaram
 * - matr-sg-ins: lesson feminine mātṛ table (Gonda §30 p.25) — mātrā
 * - matr-sg-dat: lesson feminine mātṛ table (Gonda §30 p.25) — mātre
 * - matr-sg-abl-gen: lesson feminine mātṛ table (Gonda §30 p.25) — mātuḥ
 * - matr-sg-loc: lesson feminine mātṛ table (Gonda §30 p.25) — mātari
 * - matr-sg-voc: lesson feminine mātṛ table (Gonda §30 p.25) — mātaḥ
 * - matr-pl-nom-voc: lesson feminine mātṛ table (Gonda §30 p.25) — mātaraḥ
 * - matr-pl-acc: lesson feminine mātṛ table (Gonda §30 p.25) — mātṝḥ
 * - matr-pl-ins: lesson feminine mātṛ table (Gonda §30 p.25) — mātṛbhiḥ
 * - matr-pl-dat-abl: lesson feminine mātṛ table (Gonda §30 p.25) — mātṛbhyaḥ
 * - matr-pl-gen: lesson feminine mātṛ table (Gonda §30 p.25) — mātṝṇām
 * - matr-pl-loc: lesson feminine mātṛ table (Gonda §30 p.25) — mātṛṣu
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-r-stems",
  titleEn: "-ṛ stems",
  titleIast: "ṛ",
  lessonId: "nominals-r-stems",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "kartr-sg-nom",
      dev: "कर्ता",
      iast: "kartā",
      meaning: "kartṛ as the subject (one)",
      unit: "word",
      group: "kartṛ|sg",
    },
    {
      id: "kartr-sg-acc",
      dev: "कर्तारम्",
      iast: "kartāram",
      meaning: "kartṛ as the object (one)",
      unit: "word",
      group: "kartṛ|sg",
    },
    {
      id: "kartr-sg-ins",
      dev: "कर्त्रा",
      iast: "kartrā",
      meaning: "with (one) kartṛ",
      unit: "word",
      group: "kartṛ|sg",
    },
    {
      id: "kartr-sg-dat",
      dev: "कर्त्रे",
      iast: "kartre",
      meaning: "for (one) kartṛ",
      unit: "word",
      group: "kartṛ|sg",
    },
    {
      id: "kartr-sg-abl-gen",
      dev: "कर्तुः",
      iast: "kartuḥ",
      meaning: "from / of (one) kartṛ",
      unit: "word",
      group: "kartṛ|sg",
    },
    {
      id: "kartr-sg-loc",
      dev: "कर्तरि",
      iast: "kartari",
      meaning: "in (one) kartṛ",
      unit: "word",
      group: "kartṛ|sg",
    },
    {
      id: "kartr-sg-voc",
      dev: "कर्तः",
      iast: "kartaḥ",
      meaning: "O kartṛ (one)",
      unit: "word",
      group: "kartṛ|sg",
    },
    {
      id: "kartr-pl-nom-voc",
      dev: "कर्तारः",
      iast: "kartāraḥ",
      meaning: "subject / O (many) kartṛ",
      unit: "word",
      group: "kartṛ|pl",
    },
    {
      id: "kartr-pl-acc",
      dev: "कर्तॄन्",
      iast: "kartṝn",
      meaning: "kartṛ as the object (many)",
      unit: "word",
      group: "kartṛ|pl",
    },
    {
      id: "kartr-pl-ins",
      dev: "कर्तृभिः",
      iast: "kartṛbhiḥ",
      meaning: "with (many) kartṛ",
      unit: "word",
      group: "kartṛ|pl",
    },
    {
      id: "kartr-pl-dat-abl",
      dev: "कर्तृभ्यः",
      iast: "kartṛbhyaḥ",
      meaning: "for / from (many) kartṛ",
      unit: "word",
      group: "kartṛ|pl",
    },
    {
      id: "kartr-pl-gen",
      dev: "कर्तॄणाम्",
      iast: "kartṝṇām",
      meaning: "of (many) kartṛ",
      unit: "word",
      group: "kartṛ|pl",
    },
    {
      id: "kartr-pl-loc",
      dev: "कर्तृषु",
      iast: "kartṛṣu",
      meaning: "in (many) kartṛ",
      unit: "word",
      group: "kartṛ|pl",
    },
    {
      id: "pitr-sg-nom",
      dev: "पिता",
      iast: "pitā",
      meaning: "pitṛ as the subject (one)",
      unit: "word",
      group: "pitṛ|sg",
    },
    {
      id: "pitr-sg-acc",
      dev: "पितरम्",
      iast: "pitaram",
      meaning: "pitṛ as the object (one)",
      unit: "word",
      group: "pitṛ|sg",
    },
    {
      id: "pitr-sg-ins",
      dev: "पित्रा",
      iast: "pitrā",
      meaning: "with (one) pitṛ",
      unit: "word",
      group: "pitṛ|sg",
    },
    {
      id: "pitr-sg-dat",
      dev: "पित्रे",
      iast: "pitre",
      meaning: "for (one) pitṛ",
      unit: "word",
      group: "pitṛ|sg",
    },
    {
      id: "pitr-sg-abl-gen",
      dev: "पितुः",
      iast: "pituḥ",
      meaning: "from / of (one) pitṛ",
      unit: "word",
      group: "pitṛ|sg",
    },
    {
      id: "pitr-sg-loc",
      dev: "पितरि",
      iast: "pitari",
      meaning: "in (one) pitṛ",
      unit: "word",
      group: "pitṛ|sg",
    },
    {
      id: "pitr-sg-voc",
      dev: "पितः",
      iast: "pitaḥ",
      meaning: "O pitṛ (one)",
      unit: "word",
      group: "pitṛ|sg",
    },
    {
      id: "pitr-pl-nom-voc",
      dev: "पितरः",
      iast: "pitaraḥ",
      meaning: "subject / O (many) pitṛ",
      unit: "word",
      group: "pitṛ|pl",
    },
    {
      id: "pitr-pl-acc",
      dev: "पितॄन्",
      iast: "pitṝn",
      meaning: "pitṛ as the object (many)",
      unit: "word",
      group: "pitṛ|pl",
    },
    {
      id: "pitr-pl-ins",
      dev: "पितृभिः",
      iast: "pitṛbhiḥ",
      meaning: "with (many) pitṛ",
      unit: "word",
      group: "pitṛ|pl",
    },
    {
      id: "pitr-pl-dat-abl",
      dev: "पितृभ्यः",
      iast: "pitṛbhyaḥ",
      meaning: "for / from (many) pitṛ",
      unit: "word",
      group: "pitṛ|pl",
    },
    {
      id: "pitr-pl-gen",
      dev: "पितॄणाम्",
      iast: "pitṝṇām",
      meaning: "of (many) pitṛ",
      unit: "word",
      group: "pitṛ|pl",
    },
    {
      id: "pitr-pl-loc",
      dev: "पितृषु",
      iast: "pitṛṣu",
      meaning: "in (many) pitṛ",
      unit: "word",
      group: "pitṛ|pl",
    },
    {
      id: "matr-sg-nom",
      dev: "माता",
      iast: "mātā",
      meaning: "mātṛ as the subject (one)",
      unit: "word",
      group: "mātṛ|sg",
    },
    {
      id: "matr-sg-acc",
      dev: "मातरम्",
      iast: "mātaram",
      meaning: "mātṛ as the object (one)",
      unit: "word",
      group: "mātṛ|sg",
    },
    {
      id: "matr-sg-ins",
      dev: "मात्रा",
      iast: "mātrā",
      meaning: "with (one) mātṛ",
      unit: "word",
      group: "mātṛ|sg",
    },
    {
      id: "matr-sg-dat",
      dev: "मात्रे",
      iast: "mātre",
      meaning: "for (one) mātṛ",
      unit: "word",
      group: "mātṛ|sg",
    },
    {
      id: "matr-sg-abl-gen",
      dev: "मातुः",
      iast: "mātuḥ",
      meaning: "from / of (one) mātṛ",
      unit: "word",
      group: "mātṛ|sg",
    },
    {
      id: "matr-sg-loc",
      dev: "मातरि",
      iast: "mātari",
      meaning: "in (one) mātṛ",
      unit: "word",
      group: "mātṛ|sg",
    },
    {
      id: "matr-sg-voc",
      dev: "मातः",
      iast: "mātaḥ",
      meaning: "O mātṛ (one)",
      unit: "word",
      group: "mātṛ|sg",
    },
    {
      id: "matr-pl-nom-voc",
      dev: "मातरः",
      iast: "mātaraḥ",
      meaning: "subject / O (many) mātṛ",
      unit: "word",
      group: "mātṛ|pl",
    },
    {
      id: "matr-pl-acc",
      dev: "मातॄः",
      iast: "mātṝḥ",
      meaning: "mātṛ as the object (many)",
      unit: "word",
      group: "mātṛ|pl",
    },
    {
      id: "matr-pl-ins",
      dev: "मातृभिः",
      iast: "mātṛbhiḥ",
      meaning: "with (many) mātṛ",
      unit: "word",
      group: "mātṛ|pl",
    },
    {
      id: "matr-pl-dat-abl",
      dev: "मातृभ्यः",
      iast: "mātṛbhyaḥ",
      meaning: "for / from (many) mātṛ",
      unit: "word",
      group: "mātṛ|pl",
    },
    {
      id: "matr-pl-gen",
      dev: "मातॄणाम्",
      iast: "mātṝṇām",
      meaning: "of (many) mātṛ",
      unit: "word",
      group: "mātṛ|pl",
    },
    {
      id: "matr-pl-loc",
      dev: "मातृषु",
      iast: "mātṛṣu",
      meaning: "in (many) mātṛ",
      unit: "word",
      group: "mātṛ|pl",
    },
  ] as QuizDeckItem[],
};
