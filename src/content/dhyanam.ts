import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "I meditate upon Gāyatrī Devi — whose faces shine with the hues of pearl, coral, gold, sapphire, and crystal; who has three eyes; who wears a gem-studded crown adorned with the moon; who embodies the essence of all tattvas and varṇas; who holds the gestures of boon and fearlessness, the goad and the noose; who is adorned with pure ornaments; who bears the conch and discus and the twin lotuses in her hands.";

export const dhyanam: Chapter = {
  id: "dhyanam",
  titleDev: "ध्यानम्",
  titleIast: "dhyānam",
  titleEn: "Dhyāna",
  status: "ready",
  translation,
  glossary: [
    { term: "muktā", meaning: "pearl" },
    { term: "vidruma", meaning: "coral" },
    { term: "hema", meaning: "gold" },
    { term: "nīla", meaning: "dark blue (here: sapphire)" },
    { term: "dhavala", meaning: "white (here: crystal)" },
    { term: "chāyaiḥ", meaning: "with hues" },
    { term: "mukhaiḥ", meaning: "with faces" },
    { term: "trīkṣaṇaiḥ", meaning: "with three eyes" },
    { term: "yuktām", meaning: "endowed / adorned" },
    { term: "indu", meaning: "moon" },
    { term: "nibaddha", meaning: "bound" },
    { term: "ratna", meaning: "jewel" },
    { term: "makuṭām", meaning: "diadem" },
    { term: "tattva", meaning: "principle" },
    { term: "artha", meaning: "meaning" },
    { term: "varṇa", meaning: "letter" },
    { term: "ātmikām", meaning: "whose nature is" },
    { term: "gāyatrīm", meaning: "Gāyatrī" },
    { term: "varadā", meaning: "boon-giving" },
    { term: "abhaya", meaning: "fearlessness" },
    { term: "aṅkuśa", meaning: "goad" },
    { term: "kaśāḥ", meaning: "whip" },
    { term: "śubhraṃ", meaning: "white / radiant" },
    { term: "kapālaṃ", meaning: "skull" },
    { term: "gadām", meaning: "mace" },
    { term: "śaṅkham", meaning: "conch" },
    { term: "cakram", meaning: "discus" },
    { term: "atha", meaning: "and / furthermore / then" },
    { term: "aravinda-yugalam", meaning: "pair of lotuses" },
    { term: "hastaiḥ", meaning: "with / by the hands" },
    { term: "vahantīm", meaning: "bearing / holding" },
    { term: "bhaje", meaning: "I worship" },
  ],
  root: group("dh-verse", "verse", "", [
    group(
      "dh-pada-1",
      "sentence",
      "with faces hued like pearl, coral, gold, sapphire, and crystal; with three eyes",
      [
        word("dh-mukta", "pearl", [
          ["मु", "mu"],
          ["क्ता", "ktā"],
        ], { trailing: "" }),
        word("dh-vidruma", "coral", [
          ["वि", "vi"],
          ["द्रु", "dru"],
          ["म", "ma"],
        ], { trailing: "" }),
        word("dh-hema", "gold", [
          ["हे", "he"],
          ["म", "ma"],
        ], { trailing: "" }),
        word("dh-nila", "dark blue (here: sapphire)", [
          ["नी", "nī"],
          ["ल", "la"],
        ], { trailing: "" }),
        word("dh-dhavala", "white (here: crystal)", [
          ["ध", "dha"],
          ["व", "va"],
          ["ल", "la"],
        ], { trailing: "" }),
        word("dh-chayaih", "with hues", [
          ["च्छा", "cchā"],
          ["यैः", "yaiḥ"],
        ]),
        word("dh-mukhaih", "with faces", [
          ["मु", "mu"],
          ["खैः", "khaiḥ"],
        ]),
        word(
          "dh-triksanaih",
          "with three eyes",
          [
            ["त्री", "trī"],
            ["क्ष", "kṣa"],
            ["णैः", "ṇaiḥ"],
          ],
          { trailing: " ।", lineBreakAfter: true },
        ),
      ],
    ),
    group(
      "dh-pada-2",
      "sentence",
      "adorned; whose jewel-diadem is bound with the moon; whose nature is the meaning of the tattvas and the letters",
      [
        word("dh-yuktam", "endowed / adorned", [
          ["यु", "yu"],
          ["क्ताम्", "ktām"],
        ]),
        word("dh-indu", "moon", [
          ["इन्", "in"],
          ["दु", "du"],
        ], { trailing: "" }),
        word("dh-nibaddha", "bound", [
          ["नि", "ni"],
          ["ब", "ba"],
          ["द्ध", "ddha"],
        ], { trailing: "" }),
        word("dh-ratna", "jewel", [
          ["र", "ra"],
          ["त्न", "tna"],
        ], { trailing: "" }),
        word("dh-makutam", "diadem", [
          ["म", "ma"],
          ["कु", "ku"],
          ["टाम्", "ṭām"],
        ]),
        word("dh-tattva", "principle", [
          ["तत्", "tat"],
          ["त्व", "tva"],
        ]),
        word("dh-artha", "meaning", [
          ["अर्", "ar"],
          ["थ", "tha"],
        ]),
        word("dh-varna", "letter", [
          ["व", "va"],
          ["र्ण", "rṇa"],
        ]),
        word(
          "dh-atmikam",
          "whose nature is",
          [
            ["आ", "ā"],
            ["त्मि", "tmi"],
            ["काम्", "kām"],
          ],
          { trailing: " ।", lineBreakAfter: true },
        ),
      ],
    ),
    group(
      "dh-pada-3",
      "sentence",
      "Gāyatrī — the boon-giving and fearlessness gestures, the goad, the whip, a white skull, and a mace",
      [
        word("dh-gayatrim", "Gāyatrī", [
          ["गा", "gā"],
          ["य", "ya"],
          ["त्रीं", "trīṃ"],
        ]),
        word("dh-varada", "boon-giving", [
          ["व", "va"],
          ["र", "ra"],
          ["दा", "dā"],
        ]),
        word("dh-abhaya", "fearlessness", [
          ["अ", "a"],
          ["भ", "bha"],
          ["य", "ya"],
        ]),
        word("dh-ankusa", "goad", [
          ["अङ्", "aṅ"],
          ["कु", "ku"],
          ["श", "śa"],
        ]),
        word("dh-kasah", "whip", [
          ["क", "ka"],
          ["शाः", "śāḥ"],
        ]),
        group("dh-white-skull", "phrase", "a white skull", [
          word("dh-subhram", "white / radiant", [
            ["शु", "śu"],
            ["भ्रं", "bhraṃ"],
          ]),
          word("dh-kapalam", "skull", [
            ["क", "ka"],
            ["पा", "pā"],
            ["लं", "laṃ"],
          ]),
        ]),
        word(
          "dh-gadam",
          "mace",
          [
            ["ग", "ga"],
            ["दां", "dāṃ"],
          ],
          { trailing: " ।", lineBreakAfter: true },
        ),
      ],
    ),
    group(
      "dh-pada-4",
      "sentence",
      "bearing conch, discus, and then a pair of lotuses in the hands — I worship",
      [
        word("dh-sankham", "conch", [
          ["श", "śa"],
          ["ङ्खं", "ṅkhaṃ"],
        ]),
        word("dh-cakram", "discus", [
          ["च", "ca"],
          ["क्रं", "kraṃ"],
        ]),
        word("dh-atha", "and / furthermore / then", [
          ["अ", "a"],
          ["थ", "tha"],
        ]),
        word("dh-aravinda-yugalam", "pair of lotuses", [
          ["अ", "a"],
          ["र", "ra"],
          ["वि", "vi"],
          ["न्द", "nda"],
          ["यु", "yu"],
          ["ग", "ga"],
          ["लं", "laṃ"],
        ]),
        word("dh-hastaih", "with / by the hands", [
          ["ह", "ha"],
          ["स्तैः", "staiḥ"],
        ]),
        word("dh-vahantim", "bearing / holding", [
          ["व", "va"],
          ["ह", "ha"],
          ["न्तीं", "ntīṃ"],
        ]),
        word(
          "dh-bhaje",
          "I worship",
          [
            ["भ", "bha"],
            ["जे", "je"],
          ],
          { trailing: " ॥" },
        ),
      ],
    ),
  ]),
};
