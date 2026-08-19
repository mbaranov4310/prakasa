import { group, word } from "../lib/span";
import type { Chapter } from "../types";

export const sariraSuddhi: Chapter = {
  id: "sarira-suddhi",
  titleDev: "शरीर-शुद्धिः",
  titleIast: "śarīra-śuddhiḥ",
  titleEn: "Purification of body and mind",
  status: "ready",
  translation:
    "Whether impure or pure, and in whatever state one may be, he who remembers Puṇḍarīkākṣa — the Lotus-Eyed Lord — becomes pure both externally and internally. Puṇḍarīkākṣa! Puṇḍarīkākṣa! Salutations to Puṇḍarīkākṣa!",
  glossary: [
    { term: "oṃ", meaning: "primordial sound" },
    { term: "apavitraḥ", meaning: "impure" },
    { term: "pavitraḥ", meaning: "pure" },
    { term: "vā", meaning: "or" },
    { term: "sarvāvasthām", meaning: "every state" },
    { term: "gataḥ", meaning: "being in" },
    { term: "api", meaning: "even" },
    { term: "yaḥ", meaning: "he who" },
    { term: "smaret", meaning: "remembers" },
    { term: "puṇḍarīkākṣam", meaning: "Lotus-Eyed Lord" },
    { term: "saḥ", meaning: "he" },
    { term: "bāhya", meaning: "outer" },
    { term: "ābhyantara", meaning: "inner" },
    { term: "śuciḥ", meaning: "pure" },
    { term: "puṇḍarīkākṣa", meaning: "O Lotus-Eyed One" },
    { term: "namaḥ", meaning: "salutation" },
  ],
  root: group(
    "s-verse",
    "verse",
    "",
    [
      group(
        "s-sent-1",
        "sentence",
        "whether impure or pure, or even in any condition",
        [
          word("s-om", "primordial sound", [["ॐ", "oṃ"]]),
          group("s-impure-or-pure", "phrase", "impure or pure", [
            word("s-apavitrah", "impure", [
              ["अ", "a"],
              ["प", "pa"],
              ["वि", "vi"],
              ["त्रः", "traḥ"],
            ]),
            word("s-pavitro", "pure", [
              ["प", "pa"],
              ["वि", "vi"],
              ["त्रो", "tro"],
            ]),
            word("s-va-1", "or", [["वा", "vā"]], { lineBreakAfter: true }),
          ]),
          group("s-any-state", "phrase", "or even in any condition", [
            word("s-sarvavasthan", "every state", [
              ["स", "sa"],
              ["र्वा", "rvā"],
              ["व", "va"],
              ["स्थाङ्", "sthāṅ"],
            ]),
            word("s-gatah", "being in", [
              ["ग", "ga"],
              ["तो", "to"],
            ], { trailing: "" }),
            word("s-api", "even", [["ऽपि", "’pi"]]),
            word("s-va-2", "or", [["वा", "vā"]], {
              trailing: " ।",
              lineBreakAfter: true,
            }),
          ]),
        ],
      ),
      group(
        "s-sent-2",
        "sentence",
        "he who remembers the Lotus-Eyed Lord is pure outwardly and inwardly",
        [
          group("s-who-remembers", "phrase", "he who remembers the Lotus-Eyed Lord", [
            word("s-yah", "he who", [["यः", "yaḥ"]]),
            word("s-smaret", "remembers", [
              ["स्म", "sma"],
              ["रेत्", "ret"],
            ]),
            word("s-pundarikaksam", "Lotus-Eyed Lord", [
              ["पु", "pu"],
              ["ण्ड", "ṇḍa"],
              ["री", "rī"],
              ["का", "kā"],
              ["क्षं", "kṣaṃ"],
            ], { lineBreakAfter: true }),
          ]),
          group(
            "s-becomes-pure",
            "phrase",
            "he is pure outwardly and inwardly",
            [
              word("s-sah", "he", [["स", "sa"]]),
              word("s-bahya", "outer", [
                ["बा", "bā"],
                ["ह्या", "hyā"],
              ], { trailing: "" }),
              word("s-abhyantarah", "inner", [
                ["भ्य", "bhya"],
                ["न्त", "nta"],
                ["रः", "raḥ"],
              ]),
              word("s-sucih", "pure", [
                ["शु", "śu"],
                ["चिः", "ciḥ"],
              ], { trailing: " ॥", lineBreakAfter: true }),
            ],
          ),
        ],
      ),
      group("s-sent-3", "sentence", "O Lotus-Eyed One! O Lotus-Eyed One!", [
        word("s-pundarikaksa-1", "O Lotus-Eyed One", [
          ["पु", "pu"],
          ["ण्ड", "ṇḍa"],
          ["री", "rī"],
          ["का", "kā"],
          ["क्ष", "kṣa"],
        ], { trailing: "! " }),
        word("s-pundarikaksa-2", "O Lotus-Eyed One", [
          ["पु", "pu"],
          ["ण्ड", "ṇḍa"],
          ["री", "rī"],
          ["का", "kā"],
          ["क्ष", "kṣa"],
        ], { trailing: "!", lineBreakAfter: true }),
      ]),
      group("s-sent-4", "sentence", "Salutations to Puṇḍarīkākṣa!", [
        word("s-pundarikaksaya", "to the Lotus-Eyed Lord", [
          ["पु", "pu"],
          ["ण्ड", "ṇḍa"],
          ["री", "rī"],
          ["का", "kā"],
          ["क्षा", "kṣā"],
          ["य", "ya"],
        ]),
        word("s-namah", "salutation", [
          ["न", "na"],
          ["मः", "maḥ"],
        ], { trailing: " ॥" }),
      ]),
    ],
  ),
};
