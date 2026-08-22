import { group, word } from "../lib/span";
import type { Chapter, SpanNode } from "../types";

type SyllablePair = [dev: string, iast: string];

const translation =
  "This chapter is called Digdevatā Namaskāraḥ — salutations to the divine presences that preside over the directions. In the Vedic understanding, space is not empty. Every direction is considered a living field of order (ṛta) protected by subtle forces. By offering namaskāra to the deities of the directions, the practitioner acknowledges: the sacredness of space; the presence of unseen guardians; the humility of the seeker; and the wish that the surrounding space becomes spiritually harmonious. This is also a form of spatial purification (dik-śuddhi). It ensures that the Sandhyā practice is not confined only to the body and mind, but also expands outward into the environment. The seven directions mentioned are: East (Prācī); South (Dakṣiṇā); West (Pratīcī); North (Udīcī); Above (Ūrdhva); Below (Adhara); Intermediate / Inner directions (Avāntara). By saluting them, we are saying: “May all forces in all directions be favorable. May there be no obstacles. May this sādhana be protected.” Each line of the mantra means: “Salutations to the direction (East/South/West/North/Above/Below/Intermediate), and salutations to all the devatās who dwell in that direction.”";

const namah: SyllablePair[] = [
  ["न", "na"],
  ["मः", "maḥ"],
];

const namo: SyllablePair[] = [
  ["न", "na"],
  ["मो", "mo"],
];

const nama: SyllablePair[] = [
  ["न", "na"],
  ["म", "ma"],
];

function line(
  prefix: string,
  direction: {
    meaning: string;
    syllables: SyllablePair[];
    opening: SyllablePair[];
  },
  options?: { last?: boolean },
): SpanNode {
  const phrase = `salutations to the ${direction.meaning} direction, and salutations to the deities who dwell in it`;
  return group(prefix, "sentence", phrase, [
    word(`${prefix}-om`, "", [["ॐ", "oṃ"]]),
    word(`${prefix}-open`, "salutations", direction.opening),
    word(`${prefix}-dir`, `to the ${direction.meaning}`, direction.syllables),
    word(`${prefix}-dise`, "to the direction", [
      ["दि", "di"],
      ["शे", "śe"],
    ]),
    word(`${prefix}-yah`, "which", [
      ["या", "yā"],
      ["श्", "ś"],
    ], { trailing: "" }),
    word(`${prefix}-ca-1`, "and", [["च", "ca"]]),
    word(`${prefix}-devatah`, "deities", [
      ["दे", "de"],
      ["व", "va"],
      ["ताः", "tāḥ"],
    ]),
    word(`${prefix}-etasyam`, "in this", [
      ["ए", "e"],
      ["त", "ta"],
      ["स्यां", "syāṃ"],
    ]),
    word(`${prefix}-prativasanti`, "dwell", [
      ["प्र", "pra"],
      ["ति", "ti"],
      ["व", "va"],
      ["स", "sa"],
      ["न्ति", "nti"],
    ]),
    word(`${prefix}-tabhyah`, "to them", [
      ["ता", "tā"],
      ["भ्यश्", "bhyaś"],
    ], { trailing: "" }),
    word(`${prefix}-ca-2`, "and", [["च", "ca"]]),
    word(`${prefix}-namah`, "salutations", namah, {
      trailing: " ।",
      lineBreakAfter: !options?.last,
    }),
  ]);
}

export const digdevataNamaskara: Chapter = {
  id: "digdevata-namaskara",
  titleDev: "दिग्देवता नमस्कारः",
  titleIast: "digdevatā namaskāraḥ",
  titleEn: "Digdevatā namaskāra",
  status: "ready",
  translation,
  glossary: [
    { term: "namaḥ", meaning: "salutations" },
    { term: "prācyai", meaning: "to the east" },
    { term: "dakṣiṇāyai", meaning: "to the south" },
    { term: "pratīcyai", meaning: "to the west" },
    { term: "udīcyai", meaning: "to the north" },
    { term: "ūrdhvāyai", meaning: "to the above" },
    { term: "adharāyai", meaning: "to the below" },
    { term: "avāntarāyai", meaning: "to the intermediate / inner" },
    { term: "diśe", meaning: "to the direction" },
    { term: "yāḥ", meaning: "which" },
    { term: "ca", meaning: "and" },
    { term: "devatāḥ", meaning: "deities" },
    { term: "etasyām", meaning: "in this" },
    { term: "prativasanti", meaning: "dwell" },
    { term: "tābhyaḥ", meaning: "to them" },
  ],
  root: group("dd-verse", "verse", "", [
    line("dd-praci", {
      opening: namah,
      meaning: "east",
      syllables: [
        ["प्रा", "prā"],
        ["च्यै", "cyai"],
      ],
    }),
    line("dd-daksina", {
      opening: namo,
      meaning: "south",
      syllables: [
        ["द", "da"],
        ["क्षि", "kṣi"],
        ["णा", "ṇā"],
        ["यै", "yai"],
      ],
    }),
    line("dd-pratici", {
      opening: namah,
      meaning: "west",
      syllables: [
        ["प्र", "pra"],
        ["ती", "tī"],
        ["च्यै", "cyai"],
      ],
    }),
    line("dd-udici", {
      opening: nama,
      meaning: "north",
      syllables: [
        ["उ", "u"],
        ["दी", "dī"],
        ["च्यै", "cyai"],
      ],
    }),
    line("dd-urdhva", {
      opening: namah,
      meaning: "above",
      syllables: [
        ["ऊ", "ū"],
        ["र्ध्वा", "rdhvā"],
        ["यै", "yai"],
      ],
    }),
    line("dd-adhara", {
      opening: namo,
      meaning: "below",
      syllables: [
        ["ऽध", "’dha"],
        ["रा", "rā"],
        ["यै", "yai"],
      ],
    }),
    line(
      "dd-avantara",
      {
        opening: namo,
        meaning: "intermediate / inner",
        syllables: [
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
