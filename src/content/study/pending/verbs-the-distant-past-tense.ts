/**
 * Drill card provenance:
 * Cue: Gonda §84–91 reduplicated perfect (pp.67–71) person×number grids;
 * First Steps has no perfect paradigm. Irregular perfects = printed lesson
 * cells only. √dā swapped in for √sthā via the lesson’s -ā → -au singular join.
 *
 * kṛ|perfect (parasmaipada, lesson table)
 * - kr-p-3sg-1sg: cakāra (1sg/3sg collapse)
 * - kr-p-1sg-med: cakara (optional medium 1sg)
 * - kr-p-2sg: cakartha
 * - kr-p-3du: cakratus
 * - kr-p-2du: cakrathus
 * - kr-p-3pl: cakrus
 * - kr-p-2pl: cakra
 * - kr-p-1du: cakṛva
 * - kr-p-1pl: cakṛma
 *
 * kṛ|perfect (ātmanepada, lesson table)
 * - kr-a-3sg-1sg: cakre (1sg/3sg collapse)
 * - kr-a-2sg: cakṛṣe
 * - kr-a-3du: cakrāte
 * - kr-a-2du: cakrāthe
 * - kr-a-3pl: cakrire
 * - kr-a-2pl: cakṛḍhve
 * - kr-a-1du: cakṛvahe
 * - kr-a-1pl: cakṛmahe
 *
 * sthā|perfect (parasmaipada, lesson table)
 * - stha-3sg-1sg: tasthau
 * - stha-2sg: tasthātha
 * - stha-2sg-i: tasthitha
 * - stha-3du: tasthatuḥ
 * - stha-2du: tasthathuḥ
 * - stha-3pl: tasthuḥ
 * - stha-2pl: tastha
 * - stha-1du: tasthiva
 * - stha-1pl: tasthima
 *
 * dā|perfect (parasmaipada; Gonda §91 dā grid; endings as sthā table)
 * - da-3sg-1sg: dadau
 * - da-2sg: dadātha
 * - da-2sg-i: daditha
 * - da-3du: dadatuḥ
 * - da-2du: dadathuḥ
 * - da-3pl: daduḥ
 * - da-2pl: dada
 * - da-1du: dadiva
 * - da-1pl: dadima
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-the-distant-past-tense",
  titleEn: "The distant past tense",
  titleIast: "liṭ",
  lessonId: "verbs-the-distant-past-tense",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "kr-p-3sg-1sg",
      dev: "चकार",
      iast: "cakāra",
      meaning: "kṛ, 1st / 3rd singular",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-p-1sg-med",
      dev: "चकर",
      iast: "cakara",
      meaning: "kṛ, 1st singular (medium)",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-p-2sg",
      dev: "चकर्थ",
      iast: "cakartha",
      meaning: "kṛ, 2nd singular",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-p-3du",
      dev: "चक्रतुस्",
      iast: "cakratus",
      meaning: "kṛ, 3rd dual",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-p-2du",
      dev: "चक्रथुस्",
      iast: "cakrathus",
      meaning: "kṛ, 2nd dual",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-p-3pl",
      dev: "चक्रुस्",
      iast: "cakrus",
      meaning: "kṛ, 3rd plural",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-p-2pl",
      dev: "चक्र",
      iast: "cakra",
      meaning: "kṛ, 2nd plural",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-p-1du",
      dev: "चकृव",
      iast: "cakṛva",
      meaning: "kṛ, 1st dual",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-p-1pl",
      dev: "चकृम",
      iast: "cakṛma",
      meaning: "kṛ, 1st plural",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-a-3sg-1sg",
      dev: "चक्रे",
      iast: "cakre",
      meaning: "kṛ, 1st / 3rd singular ātmanepada",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-a-2sg",
      dev: "चकृषे",
      iast: "cakṛṣe",
      meaning: "kṛ, 2nd singular ātmanepada",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-a-3du",
      dev: "चक्राते",
      iast: "cakrāte",
      meaning: "kṛ, 3rd dual ātmanepada",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-a-2du",
      dev: "चक्राथे",
      iast: "cakrāthe",
      meaning: "kṛ, 2nd dual ātmanepada",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-a-3pl",
      dev: "चक्रिरे",
      iast: "cakrire",
      meaning: "kṛ, 3rd plural ātmanepada",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-a-2pl",
      dev: "चकृढ्वे",
      iast: "cakṛḍhve",
      meaning: "kṛ, 2nd plural ātmanepada",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-a-1du",
      dev: "चकृवहे",
      iast: "cakṛvahe",
      meaning: "kṛ, 1st dual ātmanepada",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "kr-a-1pl",
      dev: "चकृमहे",
      iast: "cakṛmahe",
      meaning: "kṛ, 1st plural ātmanepada",
      unit: "word",
      group: "kṛ|perfect",
    },
    {
      id: "stha-3sg-1sg",
      dev: "तस्थौ",
      iast: "tasthau",
      meaning: "sthā, 1st / 3rd singular",
      unit: "word",
      group: "sthā|perfect",
    },
    {
      id: "stha-2sg",
      dev: "तस्थाथ",
      iast: "tasthātha",
      meaning: "sthā, 2nd singular",
      unit: "word",
      group: "sthā|perfect",
    },
    {
      id: "stha-2sg-i",
      dev: "तस्थिथ",
      iast: "tasthitha",
      meaning: "sthā, 2nd singular (with i)",
      unit: "word",
      group: "sthā|perfect",
    },
    {
      id: "stha-3du",
      dev: "तस्थतुः",
      iast: "tasthatuḥ",
      meaning: "sthā, 3rd dual",
      unit: "word",
      group: "sthā|perfect",
    },
    {
      id: "stha-2du",
      dev: "तस्थथुः",
      iast: "tasthathuḥ",
      meaning: "sthā, 2nd dual",
      unit: "word",
      group: "sthā|perfect",
    },
    {
      id: "stha-3pl",
      dev: "तस्थुः",
      iast: "tasthuḥ",
      meaning: "sthā, 3rd plural",
      unit: "word",
      group: "sthā|perfect",
    },
    {
      id: "stha-2pl",
      dev: "तस्थ",
      iast: "tastha",
      meaning: "sthā, 2nd plural",
      unit: "word",
      group: "sthā|perfect",
    },
    {
      id: "stha-1du",
      dev: "तस्थिव",
      iast: "tasthiva",
      meaning: "sthā, 1st dual",
      unit: "word",
      group: "sthā|perfect",
    },
    {
      id: "stha-1pl",
      dev: "तस्थिम",
      iast: "tasthima",
      meaning: "sthā, 1st plural",
      unit: "word",
      group: "sthā|perfect",
    },
    {
      id: "da-3sg-1sg",
      dev: "ददौ",
      iast: "dadau",
      meaning: "dā, 1st / 3rd singular",
      unit: "word",
      group: "dā|perfect",
    },
    {
      id: "da-2sg",
      dev: "ददाथ",
      iast: "dadātha",
      meaning: "dā, 2nd singular",
      unit: "word",
      group: "dā|perfect",
    },
    {
      id: "da-2sg-i",
      dev: "ददिथ",
      iast: "daditha",
      meaning: "dā, 2nd singular (with i)",
      unit: "word",
      group: "dā|perfect",
    },
    {
      id: "da-3du",
      dev: "ददतुः",
      iast: "dadatuḥ",
      meaning: "dā, 3rd dual",
      unit: "word",
      group: "dā|perfect",
    },
    {
      id: "da-2du",
      dev: "ददथुः",
      iast: "dadathuḥ",
      meaning: "dā, 2nd dual",
      unit: "word",
      group: "dā|perfect",
    },
    {
      id: "da-3pl",
      dev: "ददुः",
      iast: "daduḥ",
      meaning: "dā, 3rd plural",
      unit: "word",
      group: "dā|perfect",
    },
    {
      id: "da-2pl",
      dev: "दद",
      iast: "dada",
      meaning: "dā, 2nd plural",
      unit: "word",
      group: "dā|perfect",
    },
    {
      id: "da-1du",
      dev: "ददिव",
      iast: "dadiva",
      meaning: "dā, 1st dual",
      unit: "word",
      group: "dā|perfect",
    },
    {
      id: "da-1pl",
      dev: "ददिम",
      iast: "dadima",
      meaning: "dā, 1st plural",
      unit: "word",
      group: "dā|perfect",
    },
  ] as QuizDeckItem[],
};
