/**
 * Drill card provenance:
 * Cue: Gonda Concise Elementary Grammar §53–54 pp.40–42 (cardinal
 * declension shape); First Steps Towards Sanskrit p.23 has cognate stems
 * only, no paradigm drill. Irregular: printed lesson cells only; no
 * invented stems or endings. Optional aṣṭa longer forms omitted (same
 * case, second spelling). Dual eka/dvi omitted (three distinct spellings
 * after collapse). Neuter tri/catur, teens, tens, śata–koṭi omitted
 * (under four distinct IAST, or citation glyphs only).
 *
 * eka|sg
 * - eka-sg-nom: lesson eka table — ekaḥ
 * - eka-sg-acc: lesson eka table — ekam
 * - eka-sg-ins: lesson eka table — ekena
 * - eka-sg-dat: lesson eka table — ekasmai
 * - eka-sg-abl: lesson eka table — ekasmāt
 * - eka-sg-gen: lesson eka table — ekasya
 * - eka-sg-loc: lesson eka table — ekasmin
 *
 * eka|pl
 * - eka-pl-nom: lesson eka table — eke
 * - eka-pl-acc: lesson eka table — ekān
 * - eka-pl-ins-dat: lesson eka table — ekaiḥ
 * - eka-pl-abl: lesson eka table — ekebhyaḥ
 * - eka-pl-gen: lesson eka table — ekānām
 * - eka-pl-loc: lesson eka table — ekeṣu
 *
 * tri|pl
 * - tri-pl-nom-voc: lesson tri masc. table — trayaḥ
 * - tri-pl-acc: lesson tri masc. table — trīn
 * - tri-pl-ins: lesson tri masc. table — tribhiḥ
 * - tri-pl-dat-abl: lesson tri masc. table — tribhyaḥ
 * - tri-pl-gen: lesson tri masc. table — trayāṇām
 * - tri-pl-loc: lesson tri masc. table — triṣu
 *
 * tisṛ|pl
 * - tisr-pl-nom-acc-voc: lesson tisṛ table — tisraḥ
 * - tisr-pl-ins: lesson tisṛ table — tisṛbhiḥ
 * - tisr-pl-dat-abl: lesson tisṛ table — tisṛbhyaḥ
 * - tisr-pl-gen: lesson tisṛ table — tisṛṇām
 * - tisr-pl-loc: lesson tisṛ table — tisṛṣu
 *
 * catur|pl
 * - catur-pl-nom-voc: lesson catur masc. table — catvāraḥ
 * - catur-pl-acc: lesson catur masc. table — caturaḥ
 * - catur-pl-ins: lesson catur masc. table — caturbhiḥ
 * - catur-pl-dat-abl: lesson catur masc. table — caturbhyaḥ
 * - catur-pl-gen: lesson catur masc. table — caturṇām
 * - catur-pl-loc: lesson catur masc. table — caturṣu
 *
 * catasṛ|pl
 * - catasr-pl-nom-acc-voc: lesson catasṛ table — catasraḥ
 * - catasr-pl-ins: lesson catasṛ table — catasṛbhiḥ
 * - catasr-pl-dat-abl: lesson catasṛ table — catasṛbhyaḥ
 * - catasr-pl-gen: lesson catasṛ table — catasṛṇām
 * - catasr-pl-loc: lesson catasṛ table — catasṛṣu
 *
 * pañca|pl
 * - panca-pl-nom-acc-voc: lesson pañca table — pañca
 * - panca-pl-ins: lesson pañca table — pañcabhiḥ
 * - panca-pl-dat-abl: lesson pañca table — pañcabhyaḥ
 * - panca-pl-gen: lesson pañca table — pañcānām
 * - panca-pl-loc: lesson pañca table — pañcasu
 *
 * ṣaṣ|pl
 * - sas-pl-nom-acc-voc: lesson ṣaṣ table — ṣaṭ
 * - sas-pl-ins: lesson ṣaṣ table — ṣaḍbhiḥ
 * - sas-pl-dat-abl: lesson ṣaṣ table — ṣaḍbhyaḥ
 * - sas-pl-gen: lesson ṣaṣ table — ṣaṇṇām
 * - sas-pl-loc: lesson ṣaṣ table — ṣaṭsu
 *
 * aṣṭa|pl (first printed form per cell)
 * - asta-pl-nom-acc-voc: lesson aṣṭa table — aṣṭa
 * - asta-pl-ins: lesson aṣṭa table — aṣṭabhiḥ
 * - asta-pl-dat-abl: lesson aṣṭa table — aṣṭabhyaḥ
 * - asta-pl-gen: lesson aṣṭa table — aṣṭānām
 * - asta-pl-loc: lesson aṣṭa table — aṣṭasu
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "nominals-number-words",
  titleEn: "Number words",
  titleIast: "saṅkhyā",
  lessonId: "nominals-number-words",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "eka-sg-nom",
      dev: "एकः",
      iast: "ekaḥ",
      meaning: "subject (one) eka",
      unit: "word",
      group: "eka|sg",
    },
    {
      id: "eka-sg-acc",
      dev: "एकम्",
      iast: "ekam",
      meaning: "object (one) eka",
      unit: "word",
      group: "eka|sg",
    },
    {
      id: "eka-sg-ins",
      dev: "एकेन",
      iast: "ekena",
      meaning: "with (one) eka",
      unit: "word",
      group: "eka|sg",
    },
    {
      id: "eka-sg-dat",
      dev: "एकस्मै",
      iast: "ekasmai",
      meaning: "for (one) eka",
      unit: "word",
      group: "eka|sg",
    },
    {
      id: "eka-sg-abl",
      dev: "एकस्मात्",
      iast: "ekasmāt",
      meaning: "from (one) eka",
      unit: "word",
      group: "eka|sg",
    },
    {
      id: "eka-sg-gen",
      dev: "एकस्य",
      iast: "ekasya",
      meaning: "of (one) eka",
      unit: "word",
      group: "eka|sg",
    },
    {
      id: "eka-sg-loc",
      dev: "एकस्मिन्",
      iast: "ekasmin",
      meaning: "in (one) eka",
      unit: "word",
      group: "eka|sg",
    },
    {
      id: "eka-pl-nom",
      dev: "एके",
      iast: "eke",
      meaning: "subject (many) eka",
      unit: "word",
      group: "eka|pl",
    },
    {
      id: "eka-pl-acc",
      dev: "एकान्",
      iast: "ekān",
      meaning: "object (many) eka",
      unit: "word",
      group: "eka|pl",
    },
    {
      id: "eka-pl-ins-dat",
      dev: "एकैः",
      iast: "ekaiḥ",
      meaning: "with / for (many) eka",
      unit: "word",
      group: "eka|pl",
    },
    {
      id: "eka-pl-abl",
      dev: "एकेभ्यः",
      iast: "ekebhyaḥ",
      meaning: "from (many) eka",
      unit: "word",
      group: "eka|pl",
    },
    {
      id: "eka-pl-gen",
      dev: "एकानाम्",
      iast: "ekānām",
      meaning: "of (many) eka",
      unit: "word",
      group: "eka|pl",
    },
    {
      id: "eka-pl-loc",
      dev: "एकेषु",
      iast: "ekeṣu",
      meaning: "in (many) eka",
      unit: "word",
      group: "eka|pl",
    },
    {
      id: "tri-pl-nom-voc",
      dev: "त्रयः",
      iast: "trayaḥ",
      meaning: "subject / O (many) tri",
      unit: "word",
      group: "tri|pl",
    },
    {
      id: "tri-pl-acc",
      dev: "त्रीन्",
      iast: "trīn",
      meaning: "object (many) tri",
      unit: "word",
      group: "tri|pl",
    },
    {
      id: "tri-pl-ins",
      dev: "त्रिभिः",
      iast: "tribhiḥ",
      meaning: "with (many) tri",
      unit: "word",
      group: "tri|pl",
    },
    {
      id: "tri-pl-dat-abl",
      dev: "त्रिभ्यः",
      iast: "tribhyaḥ",
      meaning: "for / from (many) tri",
      unit: "word",
      group: "tri|pl",
    },
    {
      id: "tri-pl-gen",
      dev: "त्रयाणाम्",
      iast: "trayāṇām",
      meaning: "of (many) tri",
      unit: "word",
      group: "tri|pl",
    },
    {
      id: "tri-pl-loc",
      dev: "त्रिषु",
      iast: "triṣu",
      meaning: "in (many) tri",
      unit: "word",
      group: "tri|pl",
    },
    {
      id: "tisr-pl-nom-acc-voc",
      dev: "तिस्रः",
      iast: "tisraḥ",
      meaning: "subject / object / O (many) tisṛ",
      unit: "word",
      group: "tisṛ|pl",
    },
    {
      id: "tisr-pl-ins",
      dev: "तिसृभिः",
      iast: "tisṛbhiḥ",
      meaning: "with (many) tisṛ",
      unit: "word",
      group: "tisṛ|pl",
    },
    {
      id: "tisr-pl-dat-abl",
      dev: "तिसृभ्यः",
      iast: "tisṛbhyaḥ",
      meaning: "for / from (many) tisṛ",
      unit: "word",
      group: "tisṛ|pl",
    },
    {
      id: "tisr-pl-gen",
      dev: "तिसृणाम्",
      iast: "tisṛṇām",
      meaning: "of (many) tisṛ",
      unit: "word",
      group: "tisṛ|pl",
    },
    {
      id: "tisr-pl-loc",
      dev: "तिसृषु",
      iast: "tisṛṣu",
      meaning: "in (many) tisṛ",
      unit: "word",
      group: "tisṛ|pl",
    },
    {
      id: "catur-pl-nom-voc",
      dev: "चत्वारः",
      iast: "catvāraḥ",
      meaning: "subject / O (many) catur",
      unit: "word",
      group: "catur|pl",
    },
    {
      id: "catur-pl-acc",
      dev: "चतुरः",
      iast: "caturaḥ",
      meaning: "object (many) catur",
      unit: "word",
      group: "catur|pl",
    },
    {
      id: "catur-pl-ins",
      dev: "चतुर्भिः",
      iast: "caturbhiḥ",
      meaning: "with (many) catur",
      unit: "word",
      group: "catur|pl",
    },
    {
      id: "catur-pl-dat-abl",
      dev: "चतुर्भ्यः",
      iast: "caturbhyaḥ",
      meaning: "for / from (many) catur",
      unit: "word",
      group: "catur|pl",
    },
    {
      id: "catur-pl-gen",
      dev: "चतुर्णाम्",
      iast: "caturṇām",
      meaning: "of (many) catur",
      unit: "word",
      group: "catur|pl",
    },
    {
      id: "catur-pl-loc",
      dev: "चतुर्षु",
      iast: "caturṣu",
      meaning: "in (many) catur",
      unit: "word",
      group: "catur|pl",
    },
    {
      id: "catasr-pl-nom-acc-voc",
      dev: "चतस्रः",
      iast: "catasraḥ",
      meaning: "subject / object / O (many) catasṛ",
      unit: "word",
      group: "catasṛ|pl",
    },
    {
      id: "catasr-pl-ins",
      dev: "चतसृभिः",
      iast: "catasṛbhiḥ",
      meaning: "with (many) catasṛ",
      unit: "word",
      group: "catasṛ|pl",
    },
    {
      id: "catasr-pl-dat-abl",
      dev: "चतसृभ्यः",
      iast: "catasṛbhyaḥ",
      meaning: "for / from (many) catasṛ",
      unit: "word",
      group: "catasṛ|pl",
    },
    {
      id: "catasr-pl-gen",
      dev: "चतसृणाम्",
      iast: "catasṛṇām",
      meaning: "of (many) catasṛ",
      unit: "word",
      group: "catasṛ|pl",
    },
    {
      id: "catasr-pl-loc",
      dev: "चतसृषु",
      iast: "catasṛṣu",
      meaning: "in (many) catasṛ",
      unit: "word",
      group: "catasṛ|pl",
    },
    {
      id: "panca-pl-nom-acc-voc",
      dev: "पञ्च",
      iast: "pañca",
      meaning: "subject / object / O (many) pañca",
      unit: "word",
      group: "pañca|pl",
    },
    {
      id: "panca-pl-ins",
      dev: "पञ्चभिः",
      iast: "pañcabhiḥ",
      meaning: "with (many) pañca",
      unit: "word",
      group: "pañca|pl",
    },
    {
      id: "panca-pl-dat-abl",
      dev: "पञ्चभ्यः",
      iast: "pañcabhyaḥ",
      meaning: "for / from (many) pañca",
      unit: "word",
      group: "pañca|pl",
    },
    {
      id: "panca-pl-gen",
      dev: "पञ्चानाम्",
      iast: "pañcānām",
      meaning: "of (many) pañca",
      unit: "word",
      group: "pañca|pl",
    },
    {
      id: "panca-pl-loc",
      dev: "पञ्चसु",
      iast: "pañcasu",
      meaning: "in (many) pañca",
      unit: "word",
      group: "pañca|pl",
    },
    {
      id: "sas-pl-nom-acc-voc",
      dev: "षट्",
      iast: "ṣaṭ",
      meaning: "subject / object / O (many) ṣaṣ",
      unit: "word",
      group: "ṣaṣ|pl",
    },
    {
      id: "sas-pl-ins",
      dev: "षड्भिः",
      iast: "ṣaḍbhiḥ",
      meaning: "with (many) ṣaṣ",
      unit: "word",
      group: "ṣaṣ|pl",
    },
    {
      id: "sas-pl-dat-abl",
      dev: "षड्भ्यः",
      iast: "ṣaḍbhyaḥ",
      meaning: "for / from (many) ṣaṣ",
      unit: "word",
      group: "ṣaṣ|pl",
    },
    {
      id: "sas-pl-gen",
      dev: "षण्णाम्",
      iast: "ṣaṇṇām",
      meaning: "of (many) ṣaṣ",
      unit: "word",
      group: "ṣaṣ|pl",
    },
    {
      id: "sas-pl-loc",
      dev: "षट्सु",
      iast: "ṣaṭsu",
      meaning: "in (many) ṣaṣ",
      unit: "word",
      group: "ṣaṣ|pl",
    },
    {
      id: "asta-pl-nom-acc-voc",
      dev: "अष्ट",
      iast: "aṣṭa",
      meaning: "subject / object / O (many) aṣṭa",
      unit: "word",
      group: "aṣṭa|pl",
    },
    {
      id: "asta-pl-ins",
      dev: "अष्टभिः",
      iast: "aṣṭabhiḥ",
      meaning: "with (many) aṣṭa",
      unit: "word",
      group: "aṣṭa|pl",
    },
    {
      id: "asta-pl-dat-abl",
      dev: "अष्टभ्यः",
      iast: "aṣṭabhyaḥ",
      meaning: "for / from (many) aṣṭa",
      unit: "word",
      group: "aṣṭa|pl",
    },
    {
      id: "asta-pl-gen",
      dev: "अष्टानाम्",
      iast: "aṣṭānām",
      meaning: "of (many) aṣṭa",
      unit: "word",
      group: "aṣṭa|pl",
    },
    {
      id: "asta-pl-loc",
      dev: "अष्टसु",
      iast: "aṣṭasu",
      meaning: "in (many) aṣṭa",
      unit: "word",
      group: "aṣṭa|pl",
    },
  ] as QuizDeckItem[],
};
