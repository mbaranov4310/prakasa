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
    { term: "sarvāvasthām", meaning: "all states / any condition" },
    { term: "gataḥ", meaning: "being in" },
    { term: "api", meaning: "even" },
    { term: "yaḥ", meaning: "he who" },
    { term: "smaret", meaning: "remembers" },
    { term: "puṇḍarīkākṣam", meaning: "Lotus-Eyed Lord" },
    { term: "saḥ", meaning: "he" },
    { term: "bāhya", meaning: "outer" },
    { term: "ābhyantara", meaning: "inner" },
    { term: "śuciḥ", meaning: "pure, cleansed" },
    { term: "puṇḍarīkākṣa", meaning: "vocative: “O Lotus-Eyed One!”" },
    { term: "namaḥ", meaning: "reverence, salutation" },
  ],
  root: group(
    "s-verse",
    "verse",
    "Whether impure or pure, and in whatever state one may be, he who remembers Puṇḍarīkākṣa — the Lotus-Eyed Lord — becomes pure both externally and internally. Puṇḍarīkākṣa! Puṇḍarīkākṣa! Salutations to Puṇḍarīkākṣa!",
    [
      group(
        "s-sent-1",
        "sentence",
        "Whether impure or pure, and in whatever state one may be.",
        [
          word("s-om", "primordial sound", [["ॐ", "oṃ"]]),
          group("s-impure-or-pure", "phrase", "whether impure or pure", [
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
          group("s-any-state", "phrase", "and in whatever state one may be", [
            word("s-sarvavasthan", "all states / any condition", [
              ["स", "sa"],
              ["र्वा", "rvā"],
              ["व", "va"],
              ["स्थाङ्", "sthāṅ"],
            ]),
            word("s-gatopi", "even being in (that state)", [
              ["ग", "ga"],
              ["तो", "to"],
              ["ऽपि", "’pi"],
            ]),
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
        "He who remembers Puṇḍarīkākṣa — the Lotus-Eyed Lord — becomes pure both externally and internally.",
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
            "he becomes pure both externally and internally",
            [
              word("s-sah", "he", [["स", "sa"]]),
              word("s-bahyabhyantarah", "externally and internally", [
                ["बा", "bā"],
                ["ह्या", "hyā"],
                ["भ्य", "bhya"],
                ["न्त", "nta"],
                ["रः", "raḥ"],
              ]),
              word("s-sucih", "pure, cleansed", [
                ["शु", "śu"],
                ["चिः", "ciḥ"],
              ], { trailing: " ॥", lineBreakAfter: true }),
            ],
          ),
        ],
      ),
      group("s-sent-3", "sentence", "O Lotus-Eyed One! O Lotus-Eyed One!", [
        word("s-pundarikaksa-1", "vocative: “O Lotus-Eyed One!”", [
          ["पु", "pu"],
          ["ण्ड", "ṇḍa"],
          ["री", "rī"],
          ["का", "kā"],
          ["क्ष", "kṣa"],
        ], { trailing: "! " }),
        word("s-pundarikaksa-2", "vocative: “O Lotus-Eyed One!”", [
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
        word("s-namah", "reverence, salutation", [
          ["न", "na"],
          ["मः", "maḥ"],
        ], { trailing: " ॥" }),
      ]),
    ],
  ),
};
