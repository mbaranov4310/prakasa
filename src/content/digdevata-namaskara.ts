import { group, word } from "../lib/span";
import type { Chapter, SpanNode } from "../types";

type SyllablePair = [dev: string, iast: string];

const translation =
  "This chapter is called Digdevatā Namaskāraḥ — salutations to the divine presences that preside over the directions. In the Vedic understanding, space is not empty. Every direction is considered a living field of order (ṛta) protected by subtle forces. By offering namaskāra to the deities of the directions, the practitioner acknowledges: the sacredness of space; the presence of unseen guardians; the humility of the seeker; and the wish that the surrounding space becomes spiritually harmonious. This is also a form of spatial purification (dik-śuddhi). It ensures that the Sandhyā practice is not confined only to the body and mind, but also expands outward into the environment. The seven directions mentioned are: East (Prācī); South (Dakṣiṇā); West (Pratīcī); North (Udīcī); Above (Ūrdhva); Below (Adhara); Intermediate / Inner directions (Avāntara). By saluting them, we are saying: “May all forces in all directions be favorable. May there be no obstacles. May this sādhana be protected.” Each line of the mantra means: “Salutations to the direction (East/South/West/North/Above/Below/Intermediate), and salutations to all the devatās who dwell in that direction.”";

const lineMeaning =
  "Salutations to the direction (East/South/West/North/Above/Below/Intermediate), and salutations to all the devatās who dwell in that direction.";

const namahSyllables: SyllablePair[] = [
  ["न", "na"],
  ["मः", "maḥ"],
];

const namoSyllables: SyllablePair[] = [
  ["न", "na"],
  ["मो", "mo"],
];

const namaSyllables: SyllablePair[] = [
  ["न", "na"],
  ["म", "ma"],
];

function om(id: string) {
  return word(id, "", [["ॐ", "oṃ"]]);
}

function salutation(id: string, syllables: SyllablePair[]) {
  return word(id, "salutation, bowing", syllables);
}

function tail(
  prefix: string,
  diseMeaning: string,
  options?: { last?: boolean },
): SpanNode[] {
  return [
    word(`${prefix}-dise`, diseMeaning, [
      ["दि", "di"],
      ["शे", "śe"],
    ]),
    word(`${prefix}-yasca`, "the deities who …", [
      ["या", "yā"],
      ["श्च", "śca"],
    ]),
    word(`${prefix}-devatah`, "the deities who …", [
      ["दे", "de"],
      ["व", "va"],
      ["ताः", "tāḥ"],
    ]),
    word(`${prefix}-etasyam`, "", [
      ["ए", "e"],
      ["त", "ta"],
      ["स्यां", "syāṃ"],
    ]),
    word(`${prefix}-prativasanti`, "dwell/abide", [
      ["प्र", "pra"],
      ["ति", "ti"],
      ["व", "va"],
      ["स", "sa"],
      ["न्ति", "nti"],
    ]),
    word(`${prefix}-tabhyasca`, "salutations to them also", [
      ["ता", "tā"],
      ["भ्य", "bhya"],
      ["श्च", "śca"],
    ]),
    word(
      `${prefix}-namah`,
      "salutation, bowing",
      namahSyllables,
      options?.last
        ? { trailing: " ।" }
        : { trailing: " ।", lineBreakAfter: true },
    ),
  ];
}

function directionLine(
  prefix: string,
  spec: {
    opening?: SyllablePair[];
    key: string;
    meaning: string;
    syllables: SyllablePair[];
  },
  options?: { last?: boolean },
): SpanNode {
  const children: SpanNode[] = [om(`${prefix}-om`)];
  if (spec.opening) {
    children.push(salutation(`${prefix}-open`, spec.opening));
  }
  children.push(word(`${prefix}-${spec.key}`, spec.meaning, spec.syllables));
  children.push(...tail(prefix, spec.meaning, options));
  return group(prefix, "sentence", lineMeaning, children);
}

export const digdevataNamaskara: Chapter = {
  id: "digdevata-namaskara",
  titleDev: "दिग्देवता नमस्कारः",
  titleIast: "digdevatā namaskāraḥ",
  titleEn: "Digdevatā namaskāra",
  status: "ready",
  translation,
  glossary: [
    { term: "namaḥ / namo", meaning: "salutation, bowing" },
    { term: "prāchyai diśē", meaning: "to the eastern direction" },
    { term: "dakṣiṇāyai diśē", meaning: "to the southern direction" },
    { term: "pratīchyai diśē", meaning: "to the western direction" },
    { term: "udīchyai diśē", meaning: "to the northern direction" },
    { term: "ūrdhvāyai diśē", meaning: "to the upward direction" },
    { term: "adharāyai diśē", meaning: "to the downward direction" },
    {
      term: "āvāntarāyai diśē",
      meaning: "to the intermediate/diagonal directions",
    },
    { term: "yāḥ ca dēvatāḥ", meaning: "the deities who …" },
    { term: "prati-vasanti", meaning: "dwell/abide" },
    { term: "tābhyaś ca namaḥ", meaning: "salutations to them also" },
  ],
  root: group("dd-verse", "verse", translation, [
    directionLine("dd-praci", {
      opening: namahSyllables,
      key: "pracyai",
      meaning: "to the eastern direction",
      syllables: [
        ["प्रा", "prā"],
        ["च्यै", "cyai"],
      ],
    }),
    directionLine("dd-daksina", {
      opening: namoSyllables,
      key: "daksinayai",
      meaning: "to the southern direction",
      syllables: [
        ["द", "da"],
        ["क्षि", "kṣi"],
        ["णा", "ṇā"],
        ["यै", "yai"],
      ],
    }),
    directionLine("dd-pratici", {
      opening: namahSyllables,
      key: "praticyai",
      meaning: "to the western direction",
      syllables: [
        ["प्र", "pra"],
        ["ती", "tī"],
        ["च्यै", "cyai"],
      ],
    }),
    directionLine("dd-udici", {
      opening: namaSyllables,
      key: "udicyai",
      meaning: "to the northern direction",
      syllables: [
        ["उ", "u"],
        ["दी", "dī"],
        ["च्यै", "cyai"],
      ],
    }),
    directionLine("dd-urdhva", {
      opening: namahSyllables,
      key: "urdhvayai",
      meaning: "to the upward direction",
      syllables: [
        ["ऊ", "ū"],
        ["र्ध्वा", "rdhvā"],
        ["यै", "yai"],
      ],
    }),
    directionLine("dd-adhara", {
      key: "namodharayai",
      meaning: "to the downward direction",
      syllables: [
        ["न", "na"],
        ["मो", "mo"],
        ["ऽध", "’dha"],
        ["रा", "rā"],
        ["यै", "yai"],
      ],
    }),
    directionLine(
      "dd-avantara",
      {
        key: "namovantarayai",
        meaning: "to the intermediate/diagonal directions",
        syllables: [
          ["न", "na"],
          ["मो", "mo"],
          ["ऽवा", "’vā"],
          ["न्त", "nta"],
          ["रा", "rā"],
          ["यै", "yai"],
        ],
      },
      { last: true },
    ),
  ]),
};
