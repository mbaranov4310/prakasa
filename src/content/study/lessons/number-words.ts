import type { LessonBlock } from "../catalog";

const nom = { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" };
const acc = { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" };
const ins = {
  en: "instrumental",
  dev: "तृतीया",
  iast: "tṛtīyā",
  cue: "with, by means of",
};
const dat = { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" };
const abl = { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" };
const gen = { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" };
const loc = { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" };
const voc = { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" };

const empty = { dev: "—", iast: "—" };

export const numberWords: LessonBlock[] = [
  {
    type: "p",
    text: "Number words are adjectives that name how many items are meant. They mostly follow stem patterns already covered. Many lack gender: the same form serves with a masculine, feminine, or neuter noun.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "पञ्च पाण्दवाः", iast: "pañca pāṇdavāḥ", note: "the five sons of Pandu" },
      { dev: "पञ्च फलानि", iast: "pañca phalāni", note: "five fruits" },
      { dev: "पञ्च नद्यः", iast: "pañca nadyaḥ", note: "five rivers" },
    ],
  },
  { type: "h2", text: "eka" },
  {
    type: "p",
    text: "eka, “one,” takes the ordinary pronoun endings. For a single item it is singular. In the sense “a few” or “a small number,” it also appears in the dual and plural. Masculine forms:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [
          { dev: "एकः", iast: "ekaḥ" },
          { dev: "एकौ", iast: "ekau" },
          { dev: "एके", iast: "eke" },
        ],
      },
      {
        label: acc,
        cells: [
          { dev: "एकम्", iast: "ekam" },
          { dev: "एकौ", iast: "ekau" },
          { dev: "एकान्", iast: "ekān" },
        ],
      },
      {
        label: ins,
        cells: [
          { dev: "एकेन", iast: "ekena" },
          { dev: "एकाभ्याम्", iast: "ekābhyām" },
          { dev: "एकैः", iast: "ekaiḥ" },
        ],
      },
      {
        label: dat,
        cells: [
          { dev: "एकस्मै", iast: "ekasmai" },
          { dev: "एकाभ्याम्", iast: "ekābhyām" },
          { dev: "एकैः", iast: "ekaiḥ" },
        ],
      },
      {
        label: abl,
        cells: [
          { dev: "एकस्मात्", iast: "ekasmāt" },
          { dev: "एकाभ्याम्", iast: "ekābhyām" },
          { dev: "एकेभ्यः", iast: "ekebhyaḥ" },
        ],
      },
      {
        label: gen,
        cells: [
          { dev: "एकस्य", iast: "ekasya" },
          { dev: "एकयोः", iast: "ekayoḥ" },
          { dev: "एकानाम्", iast: "ekānām" },
        ],
      },
      {
        label: loc,
        cells: [
          { dev: "एकस्मिन्", iast: "ekasmin" },
          { dev: "एकयोः", iast: "ekayoḥ" },
          { dev: "एकेषु", iast: "ekeṣu" },
        ],
      },
    ],
  },
  { type: "h2", text: "dvi" },
  {
    type: "p",
    text: "dvi, “two,” is dual only. The stem is usually cited as dvi, but endings attach to dva (feminine dvā). Masculine:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [empty, { dev: "द्वौ", iast: "dvau" }, empty],
      },
      {
        label: acc,
        cells: [empty, { dev: "द्वौ", iast: "dvau" }, empty],
      },
      {
        label: ins,
        cells: [empty, { dev: "द्वाभ्याम्", iast: "dvābhyām" }, empty],
      },
      {
        label: dat,
        cells: [empty, { dev: "द्वाभ्याम्", iast: "dvābhyām" }, empty],
      },
      {
        label: abl,
        cells: [empty, { dev: "द्वाभ्याम्", iast: "dvābhyām" }, empty],
      },
      {
        label: gen,
        cells: [empty, { dev: "द्वयोः", iast: "dvayoḥ" }, empty],
      },
      {
        label: loc,
        cells: [empty, { dev: "द्वयोः", iast: "dvayoḥ" }, empty],
      },
    ],
  },
  { type: "h2", text: "tri" },
  {
    type: "p",
    text: "tri, “three,” is always plural. Masculine uses the ordinary -i stem endings, except genitive plural trayāṇām:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [empty, empty, { dev: "त्रयः", iast: "trayaḥ" }],
      },
      {
        label: acc,
        cells: [empty, empty, { dev: "त्रीन्", iast: "trīn" }],
      },
      {
        label: ins,
        cells: [empty, empty, { dev: "त्रिभिः", iast: "tribhiḥ" }],
      },
      {
        label: dat,
        cells: [empty, empty, { dev: "त्रिभ्यः", iast: "tribhyaḥ" }],
      },
      {
        label: abl,
        cells: [empty, empty, { dev: "त्रिभ्यः", iast: "tribhyaḥ" }],
      },
      {
        label: gen,
        cells: [empty, empty, { dev: "त्रयाणाम्", iast: "trayāṇām" }],
      },
      {
        label: loc,
        cells: [empty, empty, { dev: "त्रिषु", iast: "triṣu" }],
      },
      {
        label: voc,
        cells: [empty, empty, { dev: "त्रयः", iast: "trayaḥ" }],
      },
    ],
  },
  {
    type: "p",
    text: "Feminine uses the stem tisṛ with the basic nominal endings; genitive plural takes -ṇām:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [empty, empty, { dev: "तिस्रः", iast: "tisraḥ" }],
      },
      {
        label: acc,
        cells: [empty, empty, { dev: "तिस्रः", iast: "tisraḥ" }],
      },
      {
        label: ins,
        cells: [empty, empty, { dev: "तिसृभिः", iast: "tisṛbhiḥ" }],
      },
      {
        label: dat,
        cells: [empty, empty, { dev: "तिसृभ्यः", iast: "tisṛbhyaḥ" }],
      },
      {
        label: abl,
        cells: [empty, empty, { dev: "तिसृभ्यः", iast: "tisṛbhyaḥ" }],
      },
      {
        label: gen,
        cells: [empty, empty, { dev: "तिसृणाम्", iast: "tisṛṇām" }],
      },
      {
        label: loc,
        cells: [empty, empty, { dev: "तिसृषु", iast: "tisṛṣu" }],
      },
      {
        label: voc,
        cells: [empty, empty, { dev: "तिस्रः", iast: "tisraḥ" }],
      },
    ],
  },
  {
    type: "p",
    text: "Neuter follows the usual -i stem pattern in nominative, accusative, and vocative:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [empty, empty, { dev: "त्रीणि", iast: "trīṇi" }],
      },
      {
        label: acc,
        cells: [empty, empty, { dev: "त्रीणि", iast: "trīṇi" }],
      },
      {
        label: voc,
        cells: [empty, empty, { dev: "त्रीणि", iast: "trīṇi" }],
      },
    ],
  },
  { type: "h2", text: "catur" },
  {
    type: "p",
    text: "catur, “four,” uses the strong stem catvār in nominative and vocative; elsewhere it generally takes the basic endings:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [empty, empty, { dev: "चत्वारः", iast: "catvāraḥ" }],
      },
      {
        label: acc,
        cells: [empty, empty, { dev: "चतुरः", iast: "caturaḥ" }],
      },
      {
        label: ins,
        cells: [empty, empty, { dev: "चतुर्भिः", iast: "caturbhiḥ" }],
      },
      {
        label: dat,
        cells: [empty, empty, { dev: "चतुर्भ्यः", iast: "caturbhyaḥ" }],
      },
      {
        label: abl,
        cells: [empty, empty, { dev: "चतुर्भ्यः", iast: "caturbhyaḥ" }],
      },
      {
        label: gen,
        cells: [empty, empty, { dev: "चतुर्णाम्", iast: "caturṇām" }],
      },
      {
        label: loc,
        cells: [empty, empty, { dev: "चतुर्षु", iast: "caturṣu" }],
      },
      {
        label: voc,
        cells: [empty, empty, { dev: "चत्वारः", iast: "catvāraḥ" }],
      },
    ],
  },
  {
    type: "p",
    text: "Feminine uses catasṛ, declined like tisṛ:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [empty, empty, { dev: "चतस्रः", iast: "catasraḥ" }],
      },
      {
        label: acc,
        cells: [empty, empty, { dev: "चतस्रः", iast: "catasraḥ" }],
      },
      {
        label: ins,
        cells: [empty, empty, { dev: "चतसृभिः", iast: "catasṛbhiḥ" }],
      },
      {
        label: dat,
        cells: [empty, empty, { dev: "चतसृभ्यः", iast: "catasṛbhyaḥ" }],
      },
      {
        label: abl,
        cells: [empty, empty, { dev: "चतसृभ्यः", iast: "catasṛbhyaḥ" }],
      },
      {
        label: gen,
        cells: [empty, empty, { dev: "चतसृणाम्", iast: "catasṛṇām" }],
      },
      {
        label: loc,
        cells: [empty, empty, { dev: "चतसृषु", iast: "catasṛṣu" }],
      },
      {
        label: voc,
        cells: [empty, empty, { dev: "चतस्रः", iast: "catasraḥ" }],
      },
    ],
  },
  {
    type: "p",
    text: "Neuter nominative, accusative, and vocative lengthen the stem vowel and do not insert a new nasal:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [empty, empty, { dev: "चत्वारि", iast: "catvāri" }],
      },
      {
        label: acc,
        cells: [empty, empty, { dev: "चत्वारि", iast: "catvāri" }],
      },
      {
        label: voc,
        cells: [empty, empty, { dev: "चत्वारि", iast: "catvāri" }],
      },
    ],
  },
  { type: "h2", text: "pañcan to daśan" },
  {
    type: "p",
    text: "From pañcan, “five,” through daśan, “ten,” the same forms serve every gender. pañca:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [empty, empty, { dev: "पञ्च", iast: "pañca" }],
      },
      {
        label: acc,
        cells: [empty, empty, { dev: "पञ्च", iast: "pañca" }],
      },
      {
        label: ins,
        cells: [empty, empty, { dev: "पञ्चभिः", iast: "pañcabhiḥ" }],
      },
      {
        label: dat,
        cells: [empty, empty, { dev: "पञ्चभ्यः", iast: "pañcabhyaḥ" }],
      },
      {
        label: abl,
        cells: [empty, empty, { dev: "पञ्चभ्यः", iast: "pañcabhyaḥ" }],
      },
      {
        label: gen,
        cells: [empty, empty, { dev: "पञ्चानाम्", iast: "pañcānām" }],
      },
      {
        label: loc,
        cells: [empty, empty, { dev: "पञ्चसु", iast: "pañcasu" }],
      },
      {
        label: voc,
        cells: [empty, empty, { dev: "पञ्च", iast: "pañca" }],
      },
    ],
  },
  {
    type: "p",
    text: "saptan (“seven”), navan (“nine”), and daśan (“ten”) follow the same pattern as pañcan.",
  },
  {
    type: "p",
    text: "ṣaṣ (“six”) is similar, but final ṣ triggers sandhi:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [empty, empty, { dev: "षट्", iast: "ṣaṭ" }],
      },
      {
        label: acc,
        cells: [empty, empty, { dev: "षट्", iast: "ṣaṭ" }],
      },
      {
        label: ins,
        cells: [empty, empty, { dev: "षड्भिः", iast: "ṣaḍbhiḥ" }],
      },
      {
        label: dat,
        cells: [empty, empty, { dev: "षड्भ्यः", iast: "ṣaḍbhyaḥ" }],
      },
      {
        label: abl,
        cells: [empty, empty, { dev: "षड्भ्यः", iast: "ṣaḍbhyaḥ" }],
      },
      {
        label: gen,
        cells: [empty, empty, { dev: "षण्णाम्", iast: "ṣaṇṇām" }],
      },
      {
        label: loc,
        cells: [empty, empty, { dev: "षट्सु", iast: "ṣaṭsu" }],
      },
      {
        label: voc,
        cells: [empty, empty, { dev: "षट्", iast: "ṣaṭ" }],
      },
    ],
  },
  {
    type: "p",
    text: "aṣṭa (“eight”) follows the same outline, with optional longer forms:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: nom,
        cells: [empty, empty, { dev: "अष्ट, अष्टौ", iast: "aṣṭa, aṣṭau" }],
      },
      {
        label: acc,
        cells: [empty, empty, { dev: "अष्ट, अष्टौ", iast: "aṣṭa, aṣṭau" }],
      },
      {
        label: ins,
        cells: [empty, empty, { dev: "अष्टभिः, अष्टाभिः", iast: "aṣṭabhiḥ, aṣṭābhiḥ" }],
      },
      {
        label: dat,
        cells: [empty, empty, { dev: "अष्टभ्यः, अष्टाभ्यः", iast: "aṣṭabhyaḥ, aṣṭābhyaḥ" }],
      },
      {
        label: abl,
        cells: [empty, empty, { dev: "अष्टभ्यः, अष्टाभ्यः", iast: "aṣṭabhyaḥ, aṣṭābhyaḥ" }],
      },
      {
        label: gen,
        cells: [empty, empty, { dev: "अष्टानाम्", iast: "aṣṭānām" }],
      },
      {
        label: loc,
        cells: [empty, empty, { dev: "अष्टसु, अष्टासु", iast: "aṣṭasu, aṣṭāsu" }],
      },
      {
        label: voc,
        cells: [empty, empty, { dev: "अष्ट, अष्टौ", iast: "aṣṭa, aṣṭau" }],
      },
    ],
  },
  { type: "h2", text: "ekādaśa to navadaśa" },
  {
    type: "p",
    text: "Eleven through nineteen take the same endings as daśa:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "एकादश", iast: "ekādaśa", note: "eleven" },
      { dev: "द्वादश", iast: "dvādaśa", note: "twelve" },
      { dev: "त्रयोदश", iast: "trayodaśa", note: "thirteen" },
      { dev: "चतुर्दश", iast: "caturdaśa", note: "fourteen" },
      { dev: "पञ्चदश", iast: "pañcadaśa", note: "fifteen" },
      { dev: "षोडश", iast: "ṣoḍaśa", note: "sixteen" },
      { dev: "सप्तदश", iast: "saptadaśa", note: "seventeen" },
      { dev: "अष्टादश", iast: "aṣṭādaśa", note: "eighteen" },
      { dev: "नवदश", iast: "navadaśa", note: "nineteen" },
    ],
  },
  { type: "h2", text: "viṃśati to navati" },
  {
    type: "p",
    text: "These tens are feminine singular:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "विंशतिः", iast: "viṃśatiḥ", note: "twenty" },
      { dev: "त्रिंशत्", iast: "triṃśat", note: "thirty" },
      { dev: "चत्वारिंशत्", iast: "catvāriṃśat", note: "forty" },
      { dev: "पञ्चाशत्", iast: "pañcāśat", note: "fifty" },
      { dev: "षष्टिः", iast: "ṣaṣṭiḥ", note: "sixty" },
      { dev: "सप्ततिः", iast: "saptatiḥ", note: "seventy" },
      { dev: "अशीतिः", iast: "aśītiḥ", note: "eighty" },
      { dev: "नवतिः", iast: "navatiḥ", note: "ninety" },
    ],
  },
  { type: "h2", text: "śata to koṭi" },
  {
    type: "p",
    text: "These larger counts are singular. All are neuter except feminine koṭi:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "शतम्", iast: "śatam", note: "one hundred" },
      { dev: "सहस्रम्", iast: "sahasram", note: "one thousand" },
      { dev: "अयुतम्", iast: "ayutam", note: "ten thousand" },
      { dev: "लक्षम्", iast: "lakṣam", note: "one hundred thousand (one lakh)" },
      { dev: "प्रयुतम्", iast: "prayutam", note: "one million" },
      { dev: "कोटिः", iast: "koṭiḥ", note: "ten million (one crore)" },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org number-words: genderless pañca examples; masculine eka (pronoun endings, dual/plural “few”); dual-only dvi on dva; plural tri (masc. trayāṇām, fem. tisṛ, neut. trīṇi); catur (strong catvār, fem. catasṛ, neut. catvāri); pañcan–daśan with ṣaṣ sandhi and aṣṭa optionals; teens 11–19; feminine tens; singular śata–koṭi. Case labels follow the a-stems set.",
  },
];
