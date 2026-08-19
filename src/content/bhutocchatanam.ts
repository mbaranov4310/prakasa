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
    { term: "uttiṣṭhantu", meaning: "let them rise (here: let them depart)" },
    { term: "bhūta", meaning: "subtle being" },
    { term: "piśāca", meaning: "restless spirit" },
    { term: "bhūmi", meaning: "earth" },
    { term: "bhārakāḥ", meaning: "those who burden" },
    { term: "avarodhena", meaning: "by obstruction" },
    { term: "brahma", meaning: "Vedic" },
    { term: "karma", meaning: "act" },
    { term: "samārabhe", meaning: "I begin" },
  ],
  root: group(
    "b-verse",
    "verse",
    "",
    [
      group(
        "b-sent-1",
        "sentence",
        "let the bhūtas and piśācas rise",
        [
          group("b-rise-beings", "phrase", "let the bhūtas and piśācas rise", [
            word("b-uttisthantu", "let them rise (here: let them depart)", [
              ["उ", "u"],
              ["त्ति", "tti"],
              ["ष्ठ", "ṣṭha"],
              ["न्तु", "ntu"],
            ]),
            word("b-bhuta", "subtle being", [
              ["भू", "bhū"],
              ["त", "ta"],
            ], { trailing: "" }),
            word("b-pisacah", "restless spirit", [
              ["पि", "pi"],
              ["शा", "śā"],
              ["चाः", "cāḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ]),
        ],
      ),
      group(
        "b-sent-2",
        "sentence",
        "those who burden the earth",
        [
          group("b-earth-burden", "phrase", "those who burden the earth", [
            word("b-ye-1", "who", [["ये", "ye"]]),
            word("b-te", "they", [["ते", "te"]]),
            word("b-bhumi", "earth", [
              ["भू", "bhū"],
              ["मि", "mi"],
            ], { trailing: "" }),
            word("b-bharakah", "those who burden", [
              ["भा", "bhā"],
              ["र", "ra"],
              ["काः", "kāḥ"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ]),
        ],
      ),
      group(
        "b-sent-3",
        "sentence",
        "who, of them, by obstruction",
        [
          group("b-by-obstruction", "phrase", "who, of them, by obstruction", [
            word("b-ye-2", "who", [["ये", "ye"]]),
            word("b-tesam", "of them", [
              ["ते", "te"],
              ["षाम्", "ṣām"],
            ]),
            word("b-avarodhena", "by obstruction", [
              ["अ", "a"],
              ["व", "va"],
              ["रो", "ro"],
              ["धे", "dhe"],
              ["न", "na"],
            ], { trailing: " ।", lineBreakAfter: true }),
          ]),
        ],
      ),
      group(
        "b-sent-4",
        "sentence",
        "I begin the Vedic act (here: Sandhyāvandana)",
        [
          group("b-begin-act", "phrase", "I begin the Vedic act (here: Sandhyāvandana)", [
            word("b-brahma", "Vedic", [
              ["ब्र", "bra"],
              ["ह्म", "hma"],
            ], { trailing: "" }),
            word("b-karma", "act", [
              ["क", "ka"],
              ["र्म", "rma"],
            ]),
            word("b-samarabhe", "I begin", [
              ["स", "sa"],
              ["मा", "mā"],
              ["र", "ra"],
              ["भे", "bhe"],
            ], { trailing: " ॥" }),
          ]),
        ],
      ),
    ],
  ),
};
