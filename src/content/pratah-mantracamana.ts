import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "This mantra is a cleansing prayer, asking that all mistakes—especially those done unknowingly during the night—be removed. We call upon Sūrya (the Sun) and the inner forces of resolve and discipline (manyu). We ask them to protect us from sins and faults, especially those created by: anger, lack of control, or unconscious actions.";

export const pratahMantracamana: Chapter = {
  id: "pratah-mantracamana",
  titleDev: "प्रातः काल मन्त्राचमनः",
  titleIast: "prātaḥ-kāla mantrācamanaḥ",
  titleEn: "Prātaḥ-kāla mantrācamana",
  status: "ready",
  translation,
  glossary: [
    { term: "sūryaḥ", meaning: "Sūrya / the sun" },
    { term: "mā", meaning: "me" },
    { term: "manyuḥ", meaning: "anger (here: Manyu)" },
    { term: "manyu-patayaḥ", meaning: "lords of anger (here: the forces that govern it)" },
    { term: "manyu-kṛtebhyaḥ", meaning: "from what anger produces" },
    { term: "pāpebhyaḥ", meaning: "from sins" },
    { term: "rakṣantām", meaning: "may they protect" },
    { term: "rātryā", meaning: "by night" },
    { term: "pāpam", meaning: "sin" },
    { term: "akārṣam", meaning: "I did" },
    { term: "manasā", meaning: "by mind" },
    { term: "vācā", meaning: "by speech" },
    { term: "hastābhyām", meaning: "by the hands" },
    { term: "padbhyām", meaning: "by the feet" },
    { term: "udareṇa", meaning: "by the belly" },
    { term: "śiśnā", meaning: "by the penis" },
    { term: "rātriḥ", meaning: "night" },
    { term: "avalumpatu", meaning: "may it wipe away" },
    { term: "duritam", meaning: "fault" },
    { term: "mayi", meaning: "in me" },
    { term: "idam", meaning: "this" },
    { term: "aham", meaning: "I" },
    { term: "mām", meaning: "me" },
    { term: "amṛta", meaning: "immortality" },
    { term: "yonau", meaning: "in the source" },
    { term: "jyotiṣi", meaning: "in the light" },
    { term: "juhomi", meaning: "I offer" },
    { term: "svāhā", meaning: "svāhā" },
  ],
  root: group("pm-verse", "verse", "", [
    group(
      "pm-sent-1",
      "sentence",
      "May Sūrya, Manyu, and the lords of anger protect me from sins produced by anger.",
      [
        group(
          "pm-protect",
          "phrase",
          "May Sūrya, Manyu, and the lords of anger protect me from sins produced by anger.",
          [
            word("pm-om", "primordial sound", [["ॐ", "oṃ"]]),
            word("pm-suryah", "Sūrya / the sun", [
              ["सू", "sū"],
              ["र्य", "rya"],
            ], { trailing: "" }),
            word("pm-ca-1", "and", [["श्च", "śca"]]),
            word("pm-ma", "me", [["मा", "mā"]]),
            word("pm-manyuh", "anger (here: Manyu)", [
              ["म", "ma"],
              ["न्यु", "nyu"],
            ], { trailing: "" }),
            word("pm-ca-2", "and", [["श्च", "śca"]]),
            word("pm-manyupatayah", "lords of anger (here: the forces that govern it)", [
              ["म", "ma"],
              ["न्यु", "nyu"],
              ["प", "pa"],
              ["त", "ta"],
              ["य", "ya"],
            ], { trailing: "" }),
            word("pm-ca-3", "and", [["श्च", "śca"]]),
            word("pm-manyukrtebhyah", "from what anger produces", [
              ["म", "ma"],
              ["न्यु", "nyu"],
              ["कृ", "kṛ"],
              ["ते", "te"],
              ["भ्यः", "bhyaḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
            word("pm-papebhyo", "from sins", [
              ["पा", "pā"],
              ["पे", "pe"],
              ["भ्यो", "bhyo"],
            ]),
            word("pm-raksantam", "may they protect", [
              ["र", "ra"],
              ["क्ष", "kṣa"],
              ["न्ताम्", "ntām"],
            ], { trailing: " ॥", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "pm-sent-2",
      "sentence",
      "whatever sin I did by night",
      [
        group("pm-night-sin", "phrase", "whatever sin I did by night", [
          word("pm-yad", "which", [["यद्", "yad"]], { trailing: "" }),
          word("pm-ratrya", "by night", [
            ["रा", "rā"],
            ["त्र्या", "tryā"],
          ]),
          word("pm-papam", "sin", [
            ["पा", "pā"],
            ["प", "pa"],
            ["म", "ma"],
          ], { trailing: "" }),
          word("pm-akarsham", "I did", [
            ["का", "kā"],
            ["र्षम्", "rṣam"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
      ],
    ),
    group(
      "pm-sent-3",
      "sentence",
      "by mind, speech, hands, feet, belly, penis",
      [
        group(
          "pm-instruments",
          "phrase",
          "by mind, speech, hands, feet, belly, penis",
          [
            word("pm-manasa", "by mind", [
              ["म", "ma"],
              ["न", "na"],
              ["सा", "sā"],
            ]),
            word("pm-vaca", "by speech", [
              ["वा", "vā"],
              ["चा", "cā"],
            ]),
            word("pm-hastabhyam", "by the hands", [
              ["ह", "ha"],
              ["स्ता", "stā"],
              ["भ्याम्", "bhyām"],
            ], { trailing: " ।", lineBreakAfter: true }),
            word("pm-padbhyam", "by the feet", [
              ["प", "pa"],
              ["द्भ्या", "dbhyā"],
            ], { trailing: "" }),
            word("pm-udarena", "by the belly", [
              ["मु", "mu"],
              ["द", "da"],
              ["रे", "re"],
              ["ण", "ṇa"],
            ]),
            word("pm-sisna", "by the penis", [
              ["शि", "śi"],
              ["श्ना", "śnā"],
            ], { trailing: " ॥", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "pm-sent-4",
      "sentence",
      "may night wipe that away",
      [
        group("pm-wipe", "phrase", "may night wipe that away", [
          word("pm-ratrih", "night", [
            ["रा", "rā"],
            ["त्रिस्", "tris"],
          ], { trailing: "" }),
          word("pm-tat", "that", [
            ["त", "ta"],
            ["द", "da"],
          ], { trailing: "" }),
          word("pm-avalumpatu", "may it wipe away", [
            ["व", "va"],
            ["लुम्", "lum"],
            ["प", "pa"],
            ["तु", "tu"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
      ],
    ),
    group(
      "pm-sent-5",
      "sentence",
      "whatever fault is in me",
      [
        group("pm-fault-in-me", "phrase", "whatever fault is in me", [
          word("pm-yat", "which", [["यत्", "yat"]]),
          word("pm-kim", "anything", [["किञ्", "kiñ"]], { trailing: "" }),
          word("pm-ca-4", "and", [["च", "ca"]]),
          word("pm-duritam", "fault", [
            ["दु", "du"],
            ["रि", "ri"],
            ["तं", "taṃ"],
          ]),
          word("pm-mayi", "in me", [
            ["म", "ma"],
            ["यि", "yi"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
      ],
    ),
    group(
      "pm-sent-6",
      "sentence",
      "this I offer myself in the immortal source, in the sun, in the light, svāhā",
      [
        group(
          "pm-offer",
          "phrase",
          "this I offer myself in the immortal source, in the sun, in the light, svāhā",
          [
            word("pm-idam", "this", [
              ["इ", "i"],
              ["द", "da"],
              ["म", "ma"],
            ], { trailing: "" }),
            word("pm-aham", "I", [["हम्", "ham"]]),
            word("pm-mam", "me", [
              ["म", "ma"],
              ["म", "ma"],
            ], { trailing: "" }),
            word("pm-amrta", "immortality", [
              ["मृ", "mṛ"],
              ["त", "ta"],
            ], { trailing: "" }),
            word("pm-yonau", "in the source", [
              ["यो", "yo"],
              ["नौ", "nau"],
            ], { trailing: " ।", lineBreakAfter: true }),
            word("pm-surye", "in the sun", [
              ["सू", "sū"],
              ["र्ये", "rye"],
            ]),
            word("pm-jyotisi", "in the light", [
              ["ज्यो", "jyo"],
              ["ति", "ti"],
              ["षि", "ṣi"],
            ]),
            word("pm-juhomi", "I offer", [
              ["जु", "ju"],
              ["हो", "ho"],
              ["मि", "mi"],
            ]),
            word("pm-svaha", "svāhā", [
              ["स्वा", "svā"],
              ["हा", "hā"],
            ], { trailing: " ॥" }),
          ],
        ),
      ],
    ),
  ]),
};
