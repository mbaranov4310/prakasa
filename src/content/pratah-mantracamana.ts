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
    { term: "sūryaḥ", meaning: "The Sun; source of light, clarity, life" },
    { term: "manyuḥ", meaning: "Inner force, resolve, disciplined energy" },
    { term: "manyu-patayaḥ", meaning: "Powers that govern and guide discipline" },
    { term: "pāpa", meaning: "Mistake, impurity, wrongdoing (intentional or unintentional)" },
    { term: "rakṣantām", meaning: "May they protect" },
    { term: "rātryā", meaning: "During the night" },
    { term: "akarṣam", meaning: "I may have done" },
    { term: "manasā", meaning: "By the mind" },
    { term: "vācā", meaning: "By speech" },
    { term: "hastābhyām", meaning: "By the hands" },
    { term: "padbhyām", meaning: "By the feet" },
    { term: "udareṇa / śiśnā", meaning: "By the body" },
    { term: "rātriḥ", meaning: "The night" },
    { term: "avalumpatu", meaning: "May it absorb, wash away" },
    { term: "duritam", meaning: "Harm, fault, error" },
    { term: "idam", meaning: "This" },
    { term: "aham", meaning: "I" },
    { term: "mam", meaning: "Me / myself" },
    { term: "amṛta-yonau", meaning: "Source of immortality, divine essence" },
    { term: "jyotiṣi", meaning: "In the light" },
    { term: "juhomi", meaning: "I offer" },
    { term: "svāhā", meaning: "May this offering be accepted" },
  ],
  root: group("pm-verse", "verse", translation, [
    group(
      "pm-sent-1",
      "sentence",
      "We call upon Sūrya (the Sun) and the inner forces of resolve and discipline (manyu).",
      [
        word("pm-om", "primordial sound", [["ॐ", "oṃ"]]),
        word("pm-suryasca", "The Sun; source of light, clarity, life", [
          ["सू", "sū"],
          ["र्य", "rya"],
          ["श्च", "śca"],
        ]),
        word("pm-mamanyusca", "Inner force, resolve, disciplined energy", [
          ["मा", "mā"],
          ["म", "ma"],
          ["न्यु", "nyu"],
          ["श्च", "śca"],
        ]),
        word("pm-manyupatayasca", "Powers that govern and guide discipline", [
          ["म", "ma"],
          ["न्यु", "nyu"],
          ["प", "pa"],
          ["त", "ta"],
          ["य", "ya"],
          ["श्च", "śca"],
        ]),
        word("pm-manyukrtebhyah", "", [
          ["म", "ma"],
          ["न्यु", "nyu"],
          ["कृ", "kṛ"],
          ["ते", "te"],
          ["भ्यः", "bhyaḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "pm-sent-2",
      "sentence",
      "We ask them to protect us from sins and faults, especially those created by: anger, lack of control, or unconscious actions.",
      [
        word("pm-papebhyo", "Mistake, impurity, wrongdoing (intentional or unintentional)", [
          ["पा", "pā"],
          ["पे", "pe"],
          ["भ्यो", "bhyo"],
        ]),
        word("pm-raksantam", "May they protect", [
          ["र", "ra"],
          ["क्ष", "kṣa"],
          ["न्ताम्", "ntām"],
        ], { trailing: " ॥", lineBreakAfter: true }),
      ],
    ),
    group(
      "pm-sent-3",
      "sentence",
      "This mantra is a cleansing prayer, asking that all mistakes—especially those done unknowingly during the night—be removed.",
      [
        word("pm-yadratrya", "During the night", [
          ["यद्", "yad"],
          ["रा", "rā"],
          ["त्र्या", "tryā"],
        ]),
        word("pm-papamakarsham", "I may have done", [
          ["पा", "pā"],
          ["प", "pa"],
          ["म", "ma"],
          ["का", "kā"],
          ["र्षम्", "rṣam"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "pm-sent-4",
      "sentence",
      "By the mind. By speech. By the hands.",
      [
        word("pm-manasa", "By the mind", [
          ["म", "ma"],
          ["न", "na"],
          ["सा", "sā"],
        ]),
        word("pm-vaca", "By speech", [
          ["वा", "vā"],
          ["चा", "cā"],
        ]),
        word("pm-hastabhyam", "By the hands", [
          ["ह", "ha"],
          ["स्ता", "stā"],
          ["भ्याम्", "bhyām"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "pm-sent-5",
      "sentence",
      "By the feet. By the body.",
      [
        word("pm-padbhyamudarena", "By the feet", [
          ["प", "pa"],
          ["द्भ्या", "dbhyā"],
          ["मु", "mu"],
          ["द", "da"],
          ["रे", "re"],
          ["ण", "ṇa"],
        ]),
        word("pm-sisna", "By the body", [
          ["शि", "śi"],
          ["श्ना", "śnā"],
        ], { trailing: " ॥", lineBreakAfter: true }),
      ],
    ),
    group(
      "pm-sent-6",
      "sentence",
      "The night. May it absorb, wash away.",
      [
        word("pm-ratristadavalumpatu", "The night. May it absorb, wash away.", [
          ["रा", "rā"],
          ["त्रिस्", "tris"],
          ["त", "ta"],
          ["द", "da"],
          ["व", "va"],
          ["लुम्", "lum"],
          ["प", "pa"],
          ["तु", "tu"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "pm-sent-7",
      "sentence",
      "Harm, fault, error.",
      [
        word("pm-yatkinca", "", [
          ["यत्", "yat"],
          ["किञ्", "kiñ"],
          ["च", "ca"],
        ]),
        word("pm-duritam", "Harm, fault, error", [
          ["दु", "du"],
          ["रि", "ri"],
          ["तं", "taṃ"],
        ]),
        word("pm-mayi", "", [
          ["म", "ma"],
          ["यि", "yi"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "pm-sent-8",
      "sentence",
      "This. I. Me / myself. Source of immortality, divine essence.",
      [
        word("pm-idamaham", "This. I.", [
          ["इ", "i"],
          ["द", "da"],
          ["म", "ma"],
          ["हम्", "ham"],
        ]),
        word("pm-mamamrtayonau", "Me / myself. Source of immortality, divine essence.", [
          ["म", "ma"],
          ["म", "ma"],
          ["मृ", "mṛ"],
          ["त", "ta"],
          ["यो", "yo"],
          ["नौ", "nau"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "pm-sent-9",
      "sentence",
      "In the light. I offer. May this offering be accepted.",
      [
        word("pm-surye", "The Sun; source of light, clarity, life", [
          ["सू", "sū"],
          ["र्ये", "rye"],
        ]),
        word("pm-jyotisi", "In the light", [
          ["ज्यो", "jyo"],
          ["ति", "ti"],
          ["षि", "ṣi"],
        ]),
        word("pm-juhomi", "I offer", [
          ["जु", "ju"],
          ["हो", "ho"],
          ["मि", "mi"],
        ]),
        word("pm-svaha", "May this offering be accepted", [
          ["स्वा", "svā"],
          ["हा", "hā"],
        ], { trailing: " ॥" }),
      ],
    ),
  ]),
};
