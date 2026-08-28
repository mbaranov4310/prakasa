import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "I always take refuge in Guha — the six-faced Lord, red as kuṅkuma, of great wisdom, whose mount is the divine peacock, son of Rudra, lord of the army of the gods.";

export const kartikeya: Chapter = {
  id: "kartikeya",
  titleDev: "कार्तिकेयः",
  titleIast: "kārtikeyaḥ",
  titleEn: "Kārtikeya",
  status: "ready",
  translation,
  glossary: [
    { term: "ṣaḍ", meaning: "six" },
    { term: "ānanam", meaning: "face" },
    { term: "kuṅkuma", meaning: "kuṅkuma / vermilion" },
    { term: "rakta", meaning: "red" },
    { term: "varṇam", meaning: "color / complexion" },
    { term: "mahā", meaning: "great" },
    { term: "matim", meaning: "wisdom" },
    { term: "divya", meaning: "divine" },
    { term: "mayūra", meaning: "peacock" },
    { term: "vāhanam", meaning: "mount" },
    { term: "rudrasya", meaning: "of Rudra" },
    { term: "sūnum", meaning: "son" },
    { term: "sura", meaning: "of the gods" },
    { term: "sainya", meaning: "army" },
    { term: "nātham", meaning: "lord" },
    { term: "guham", meaning: "Guha" },
    { term: "sadā", meaning: "always" },
    { term: "śaraṇam", meaning: "refuge" },
    { term: "aham", meaning: "I" },
    { term: "prapadye", meaning: "I go to / I take" },
  ],
  root: group(
    "k-verse",
    "verse",
    "I always take refuge in Guha, the six-faced Lord, red as kuṅkuma, of great wisdom, whose mount is the divine peacock, son of Rudra, lord of the army of the gods",
    [
      group(
        "k-form",
        "phrase",
        "the six-faced one, red as kuṅkuma, of great wisdom, whose mount is the divine peacock",
        [
          group("k-faces", "phrase", "the six-faced one (Ṣaṇmukha)", [
            word("k-sad", "six", [["ष", "ṣa"], ["डा", "ḍā"]], { trailing: "" }),
            word("k-ananam", "face", [["न", "na"], ["नं", "naṃ"]]),
          ]),
          group("k-color", "phrase", "red as kuṅkuma in complexion", [
            word(
              "k-kunkuma",
              "kuṅkuma / vermilion",
              [
                ["कुङ्", "kuṅ"],
                ["कु", "ku"],
                ["म", "ma"],
              ],
              { trailing: "" },
            ),
            word("k-rakta", "red", [["र", "ra"], ["क्त", "kta"]], { trailing: "" }),
            word("k-varnam", "color / complexion", [
              ["व", "va"],
              ["र्णं", "rṇaṃ"],
            ]),
          ]),
          group("k-wisdom", "phrase", "of great wisdom", [
            word("k-maha", "great", [["म", "ma"], ["हा", "hā"]], { trailing: "" }),
            word("k-matim", "wisdom", [["म", "ma"], ["तिं", "tiṃ"]]),
          ]),
          group("k-mount", "phrase", "whose mount is the divine peacock", [
            word("k-divya", "divine", [["दि", "di"], ["व्य", "vya"]], {
              trailing: "",
            }),
            word(
              "k-mayura",
              "peacock",
              [
                ["म", "ma"],
                ["यू", "yū"],
                ["र", "ra"],
              ],
              { trailing: "" },
            ),
            word(
              "k-vahanam",
              "mount",
              [
                ["वा", "vā"],
                ["ह", "ha"],
                ["नम्", "nam"],
              ],
              { trailing: " ।", lineBreakAfter: true },
            ),
          ]),
        ],
      ),
      group(
        "k-who",
        "phrase",
        "son of Rudra, lord of the army of the gods",
        [
          word("k-rudrasya", "of Rudra", [
            ["रु", "ru"],
            ["द्र", "dra"],
            ["स्य", "sya"],
          ]),
          word("k-sunum", "son", [
            ["सू", "sū"],
            ["नुं", "nuṃ"],
          ]),
          group("k-commander", "phrase", "lord of the army of the gods", [
            word("k-sura", "of the gods", [["सु", "su"], ["र", "ra"]], {
              trailing: "",
            }),
            word("k-sainya", "army", [["सै", "sai"], ["न्य", "nya"]], {
              trailing: "",
            }),
            word("k-natham", "lord", [
              ["ना", "nā"],
              ["थं", "thaṃ"],
            ]),
          ]),
        ],
      ),
      group("k-refuge", "phrase", "I always take refuge in Guha", [
        word("k-guham", "Guha", [
          ["गु", "gu"],
          ["हं", "haṃ"],
        ]),
        word("k-sada", "always", [
          ["स", "sa"],
          ["दा", "dā"],
        ]),
        word("k-saranam", "refuge", [
          ["श", "śa"],
          ["र", "ra"],
          ["णम्", "ṇam"],
        ]),
        word("k-aham", "I", [
          ["अ", "a"],
          ["हं", "haṃ"],
        ]),
        word(
          "k-prapadye",
          "I go to / I take",
          [
            ["प्र", "pra"],
            ["प", "pa"],
            ["द्ये", "dye"],
          ],
          { trailing: " ॥" },
        ),
      ]),
    ],
  ),
};
