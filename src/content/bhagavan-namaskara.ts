import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "This chapter is a final salutation to Bhagavān (the Supreme Lord). The verse praises the Lord as Ananta — the Infinite One — whose form is beyond human counting and beyond time. “Salutations to Ananta (the Infinite Lord), who has thousands of forms, thousands of feet, eyes, heads, thighs, and arms. Salutations to that eternal Purusha, who is praised by thousands of names, and who sustains thousands of crores of yugas (ages of time).” This is a declaration that Bhagavān is: infinite in form; infinite in power; infinite in presence; infinite across time cycles. It reminds the practitioner that Sandhyāvandanam ultimately ends not in ritual alone, but in surrender to the Supreme Reality.";

export const bhagavanNamaskara: Chapter = {
  id: "bhagavan-namaskara",
  titleDev: "भगवन्नमस्कारः",
  titleIast: "bhagavan-namaskāraḥ",
  titleEn: "Bhagavan namaskāra",
  status: "ready",
  translation,
  glossary: [
    { term: "namo / namaḥ", meaning: "salutations" },
    { term: "astu", meaning: "may there be" },
    { term: "anantāya", meaning: "to the Infinite" },
    { term: "sahasra", meaning: "thousand" },
    { term: "mūrtaye", meaning: "to the form" },
    { term: "pāda", meaning: "feet" },
    { term: "akṣi", meaning: "eyes" },
    { term: "śiras", meaning: "head" },
    { term: "ūru", meaning: "thighs" },
    { term: "bāhave", meaning: "arms" },
    { term: "nāmne", meaning: "to the names" },
    { term: "puruṣāya", meaning: "to the Puruṣa" },
    { term: "śāśvate", meaning: "to the eternal" },
    { term: "koṭī", meaning: "crore" },
    { term: "yuga", meaning: "age" },
    { term: "dhāriṇe", meaning: "to the sustainer" },
  ],
  root: group("bn-root", "verse", "", [
    group(
      "bn-line-1",
      "sentence",
      "salutations to the Infinite of a thousand forms, with a thousand feet, eyes, heads, thighs, and arms",
      [
        word("bn-namo", "salutations", [
          ["न", "na"],
          ["मो", "mo"],
        ], { trailing: "" }),
        word("bn-astu", "may there be", [
          ["ऽस्त्", "’st"],
          ["व", "va"],
        ], { trailing: "" }),
        word("bn-anantaya", "to the Infinite", [
          ["नन्", "nan"],
          ["ता", "tā"],
          ["य", "ya"],
        ]),
        word("bn-sahasra-1", "thousand", [
          ["स", "sa"],
          ["ह", "ha"],
          ["स्र", "sra"],
        ], { trailing: "" }),
        word("bn-murtaye", "to the form", [
          ["मूर्", "mūr"],
          ["त", "ta"],
          ["ये", "ye"],
        ], { lineBreakAfter: true }),
        word("bn-sahasra-2", "thousand", [
          ["स", "sa"],
          ["ह", "ha"],
          ["स्र", "sra"],
        ], { trailing: "" }),
        word("bn-pada", "feet", [
          ["पा", "pā"],
          ["दा", "dā"],
        ], { trailing: "" }),
        word("bn-aksi", "eyes", [["क्षि", "kṣi"]], { trailing: "" }),
        word("bn-siras", "head", [
          ["शि", "śi"],
          ["रो", "ro"],
        ], { trailing: "" }),
        word("bn-uru", "thighs", [["रु", "ru"]], { trailing: "" }),
        word("bn-bahave", "arms", [
          ["बा", "bā"],
          ["ह", "ha"],
          ["वे", "ve"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "bn-line-2",
      "sentence",
      "salutations to the eternal Puruṣa of a thousand names, sustainer of a thousand crores of yugas",
      [
        word("bn-sahasra-3", "thousand", [
          ["स", "sa"],
          ["ह", "ha"],
          ["स्र", "sra"],
        ], { trailing: "" }),
        word("bn-namne", "to the names", [
          ["नाम्", "nām"],
          ["ने", "ne"],
        ]),
        word("bn-purusaya", "to the Puruṣa", [
          ["पु", "pu"],
          ["रु", "ru"],
          ["षा", "ṣā"],
          ["य", "ya"],
        ]),
        word("bn-sasvate", "to the eternal", [
          ["शा", "śā"],
          ["श्व", "śva"],
          ["ते", "te"],
        ], { lineBreakAfter: true }),
        word("bn-sahasra-4", "thousand", [
          ["स", "sa"],
          ["ह", "ha"],
          ["स्र", "sra"],
        ], { trailing: "" }),
        word("bn-koti", "crore", [
          ["को", "ko"],
          ["टी", "ṭī"],
        ], { trailing: "" }),
        word("bn-yuga", "age", [
          ["यु", "yu"],
          ["ग", "ga"],
        ], { trailing: "" }),
        word("bn-dharine", "to the sustainer", [
          ["धा", "dhā"],
          ["रि", "ri"],
          ["णे", "ṇe"],
        ]),
        word("bn-namah", "salutations", [
          ["न", "na"],
          ["मः", "maḥ"],
        ], { trailing: " ॥" }),
      ],
    ),
  ]),
};
