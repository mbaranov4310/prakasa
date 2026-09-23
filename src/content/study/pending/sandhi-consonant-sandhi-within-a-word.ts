/**
 * Drill card provenance (First Steps Towards Sanskrit p.150 cerebralization
 * exercise shape — instrumental -ena / -eṇa; swap the noun — plus printed
 * within-word joins from the lesson):
 *
 * stop|before-voiced
 * - marudbhih — lesson — marut + bhiḥ (final stop voices)
 * - jagadbhih — swap marut→jagat
 * - mahadbhih — swap marut→mahat
 * - brhadbhih — swap marut→bṛhat
 *
 * aspiration|preserve
 * - buddha — lesson — budh + ta
 * - labdha — lesson — labh + ta
 * - bhotsya — lesson — bodh + sya
 * - dhaksya — lesson — dah + sya
 * - dhak — lesson — dah → dhak
 * - dugdha — swap budh→duh (+ ta)
 * - dagdha — swap labh→dah (+ ta)
 *
 * n-to-n|after-r-or-s
 * - guruna — lesson — gurunā → guruṇā
 * - visena — lesson — viṣena → viṣeṇa
 * - ramena — lesson — rāmena → rāmeṇa
 * - ramayana — lesson — rāmāyana → rāmāyaṇa
 * - varsabhogyena — lesson — varṣabhogyena → varṣabhogyeṇa
 * - putrena — First Steps p.150 shape; swap mārga→putra
 * - mitrena — First Steps p.150 shape; swap prabhāva→mitra
 * - arthena — First Steps p.150 shape; swap mārga→artha
 * - vrksena — First Steps p.150 shape; swap mārga→vṛkṣa
 *
 * s-to-s|ruki
 * - agnisu — lesson — agni + su
 * - dhanusa — lesson — dhanus + ā
 * - vaksu — lesson — vāk + su
 * - harisu — swap agni→hari
 * - vayusu — swap agni→vāyu
 * - caksusa — swap dhanus→cakṣus
 * - nadisu — swap agni→nadī
 *
 * no-change|before-sonorant
 * - vacanti — lesson — vac + anti
 * - vacmi — lesson — vac + mi
 * - vacya — lesson — vāc + ya
 * - pacanti — swap vac→pac
 * - pacmi — swap vac→pac
 * - sakya — swap vāc→śak
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sandhi-consonant-sandhi-within-a-word",
  titleEn: "Consonant sandhi within a word",
  titleIast: "antastha-sandhi",
  lessonId: "sandhi-consonant-sandhi-within-a-word",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // stop|before-voiced
    {
      id: "marudbhih",
      dev: "मरुद्भिः",
      iast: "marudbhiḥ",
      meaning: "marut + bhiḥ",
      unit: "sandhi",
      group: "stop|before-voiced",
    },
    {
      id: "jagadbhih",
      dev: "जगद्भिः",
      iast: "jagadbhiḥ",
      meaning: "jagat + bhiḥ",
      unit: "sandhi",
      group: "stop|before-voiced",
    },
    {
      id: "mahadbhih",
      dev: "महद्भिः",
      iast: "mahadbhiḥ",
      meaning: "mahat + bhiḥ",
      unit: "sandhi",
      group: "stop|before-voiced",
    },
    {
      id: "brhadbhih",
      dev: "बृहद्भिः",
      iast: "bṛhadbhiḥ",
      meaning: "bṛhat + bhiḥ",
      unit: "sandhi",
      group: "stop|before-voiced",
    },
    // aspiration|preserve
    {
      id: "buddha",
      dev: "बुद्ध",
      iast: "buddha",
      meaning: "budh + ta",
      unit: "sandhi",
      group: "aspiration|preserve",
    },
    {
      id: "labdha",
      dev: "लब्ध",
      iast: "labdha",
      meaning: "labh + ta",
      unit: "sandhi",
      group: "aspiration|preserve",
    },
    {
      id: "bhotsya",
      dev: "भोत्स्य",
      iast: "bhotsya",
      meaning: "bodh + sya",
      unit: "sandhi",
      group: "aspiration|preserve",
    },
    {
      id: "dhaksya",
      dev: "धक्ष्य",
      iast: "dhakṣya",
      meaning: "dah + sya",
      unit: "sandhi",
      group: "aspiration|preserve",
    },
    {
      id: "dhak",
      dev: "धक्",
      iast: "dhak",
      meaning: "dah",
      unit: "sandhi",
      group: "aspiration|preserve",
    },
    {
      id: "dugdha",
      dev: "दुग्ध",
      iast: "dugdha",
      meaning: "duh + ta",
      unit: "sandhi",
      group: "aspiration|preserve",
    },
    {
      id: "dagdha",
      dev: "दग्ध",
      iast: "dagdha",
      meaning: "dah + ta",
      unit: "sandhi",
      group: "aspiration|preserve",
    },
    // n-to-n|after-r-or-s
    {
      id: "guruna",
      dev: "गुरुणा",
      iast: "guruṇā",
      meaning: "gurunā",
      unit: "sandhi",
      group: "n-to-n|after-r-or-s",
    },
    {
      id: "visena",
      dev: "विषेण",
      iast: "viṣeṇa",
      meaning: "viṣena",
      unit: "sandhi",
      group: "n-to-n|after-r-or-s",
    },
    {
      id: "ramena",
      dev: "रामेण",
      iast: "rāmeṇa",
      meaning: "rāmena",
      unit: "sandhi",
      group: "n-to-n|after-r-or-s",
    },
    {
      id: "ramayana",
      dev: "रामायण",
      iast: "rāmāyaṇa",
      meaning: "rāmāyana",
      unit: "sandhi",
      group: "n-to-n|after-r-or-s",
    },
    {
      id: "varsabhogyena",
      dev: "वर्षभोग्येण",
      iast: "varṣabhogyeṇa",
      meaning: "varṣabhogyena",
      unit: "sandhi",
      group: "n-to-n|after-r-or-s",
    },
    {
      id: "putrena",
      dev: "पुत्रेण",
      iast: "putreṇa",
      meaning: "putrena",
      unit: "sandhi",
      group: "n-to-n|after-r-or-s",
    },
    {
      id: "mitrena",
      dev: "मित्रेण",
      iast: "mitreṇa",
      meaning: "mitrena",
      unit: "sandhi",
      group: "n-to-n|after-r-or-s",
    },
    {
      id: "arthena",
      dev: "अर्थेण",
      iast: "artheṇa",
      meaning: "arthena",
      unit: "sandhi",
      group: "n-to-n|after-r-or-s",
    },
    {
      id: "vrksena",
      dev: "वृक्षेण",
      iast: "vṛkṣeṇa",
      meaning: "vṛkṣena",
      unit: "sandhi",
      group: "n-to-n|after-r-or-s",
    },
    // s-to-s|ruki
    {
      id: "agnisu",
      dev: "अग्निषु",
      iast: "agniṣu",
      meaning: "agni + su",
      unit: "sandhi",
      group: "s-to-s|ruki",
    },
    {
      id: "dhanusa",
      dev: "धनुषा",
      iast: "dhanuṣā",
      meaning: "dhanus + ā",
      unit: "sandhi",
      group: "s-to-s|ruki",
    },
    {
      id: "vaksu",
      dev: "वाक्षु",
      iast: "vākṣu",
      meaning: "vāk + su",
      unit: "sandhi",
      group: "s-to-s|ruki",
    },
    {
      id: "harisu",
      dev: "हरिषु",
      iast: "hariṣu",
      meaning: "hari + su",
      unit: "sandhi",
      group: "s-to-s|ruki",
    },
    {
      id: "vayusu",
      dev: "वायुषु",
      iast: "vāyuṣu",
      meaning: "vāyu + su",
      unit: "sandhi",
      group: "s-to-s|ruki",
    },
    {
      id: "caksusa",
      dev: "चक्षुषा",
      iast: "cakṣuṣā",
      meaning: "cakṣus + ā",
      unit: "sandhi",
      group: "s-to-s|ruki",
    },
    {
      id: "nadisu",
      dev: "नदीषु",
      iast: "nadīṣu",
      meaning: "nadī + su",
      unit: "sandhi",
      group: "s-to-s|ruki",
    },
    // no-change|before-sonorant
    {
      id: "vacanti",
      dev: "वचन्ति",
      iast: "vacanti",
      meaning: "vac + anti",
      unit: "sandhi",
      group: "no-change|before-sonorant",
    },
    {
      id: "vacmi",
      dev: "वच्मि",
      iast: "vacmi",
      meaning: "vac + mi",
      unit: "sandhi",
      group: "no-change|before-sonorant",
    },
    {
      id: "vacya",
      dev: "वाच्य",
      iast: "vācya",
      meaning: "vāc + ya",
      unit: "sandhi",
      group: "no-change|before-sonorant",
    },
    {
      id: "pacanti",
      dev: "पचन्ति",
      iast: "pacanti",
      meaning: "pac + anti",
      unit: "sandhi",
      group: "no-change|before-sonorant",
    },
    {
      id: "pacmi",
      dev: "पच्मि",
      iast: "pacmi",
      meaning: "pac + mi",
      unit: "sandhi",
      group: "no-change|before-sonorant",
    },
    {
      id: "sakya",
      dev: "शक्य",
      iast: "śakya",
      meaning: "śak + ya",
      unit: "sandhi",
      group: "no-change|before-sonorant",
    },
  ] as QuizDeckItem[],
};
