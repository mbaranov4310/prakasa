import { group, word } from "../lib/span";
import type { Chapter } from "../types";

export const bhutocchatanam: Chapter = {
  id: "bhutocchatanam",
  titleDev: "भूतोच्छाटनम्",
  titleIast: "bhūtocchāṭanam",
  titleEn: "Clearing of disturbances",
  status: "ready",
  translation:
    "Let such beings move away. Those who are a burden on the earth, let them go. Those who cause obstruction, let them step aside. For I now begin Brahma-karma — the sacred Vedic act.",
  glossary: [
    { term: "uttiṣṭhantu", meaning: "let them rise / depart" },
    { term: "bhūta", meaning: "subtle being; elemental entity" },
    { term: "piśāca", meaning: "restless spirit or disturbing influence" },
    { term: "bhūmi-bhārakāḥ", meaning: "those who burden the earth" },
    { term: "avarodhena", meaning: "those who cause obstruction / hindrance" },
    { term: "brahma-karma", meaning: "Sandhyāvandana and Vedic duties" },
    { term: "samārabhe", meaning: "I begin, I commence" },
  ],
  root: group(
    "b-verse",
    "verse",
    "Let such beings move away. Those who are a burden on the earth, let them go. Those who cause obstruction, let them step aside. For I now begin Brahma-karma — the sacred Vedic act.",
    [
      group("b-sent-1", "sentence", "Let such beings move away.", [
        word("b-uttisthantu", "let them rise / depart", [
          ["उ", "u"],
          ["त्ति", "tti"],
          ["ष्ठ", "ṣṭha"],
          ["न्तु", "ntu"],
        ]),
        word("b-bhutapisacah", "bhūtas and piśācas (subtle disturbing beings)", [
          ["भू", "bhū"],
          ["त", "ta"],
          ["पि", "pi"],
          ["शा", "śā"],
          ["चाः", "cāḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("b-sent-2", "sentence", "Those who are a burden on the earth, let them go.", [
        word("b-ye-1", "who / those who", [["ये", "ye"]]),
        word("b-te", "they", [["ते", "te"]]),
        word("b-bhumibharakah", "those who burden the earth", [
          ["भू", "bhū"],
          ["मि", "mi"],
          ["भा", "bhā"],
          ["र", "ra"],
          ["काः", "kāḥ"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("b-sent-3", "sentence", "Those who cause obstruction, let them step aside.", [
        word("b-ye-2", "who / those who", [["ये", "ye"]]),
        word("b-tesam", "of them", [
          ["ते", "te"],
          ["षाम्", "ṣām"],
        ]),
        word("b-avarodhena", "by obstruction / those who cause hindrance", [
          ["अ", "a"],
          ["व", "va"],
          ["रो", "ro"],
          ["धे", "dhe"],
          ["न", "na"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
      group("b-sent-4", "sentence", "For I now begin Brahma-karma — the sacred Vedic act.", [
        word("b-brahmakarma", "Sandhyāvandana and Vedic duties", [
          ["ब्र", "bra"],
          ["ह्म", "hma"],
          ["क", "ka"],
          ["र्म", "rma"],
        ]),
        word("b-samarabhe", "I begin, I commence", [
          ["स", "sa"],
          ["मा", "mā"],
          ["र", "ra"],
          ["भे", "bhe"],
        ], { trailing: " ॥" }),
      ]),
    ],
  ),
};
