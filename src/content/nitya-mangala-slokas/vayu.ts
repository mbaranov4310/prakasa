import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Salutation to Brahman. Salutation to you, O Vāyu. You alone are the perceptible Brahman. You alone I shall declare as the perceptible Brahman.";

export const vayu: Chapter = {
  id: "vayu",
  titleDev: "वायुः",
  titleIast: "vāyuḥ",
  titleEn: "Vāyu",
  status: "ready",
  translation,
  glossary: [
    { term: "namaḥ", meaning: "salutation" },
    { term: "brahmaṇe", meaning: "to Brahman" },
    { term: "te", meaning: "to you" },
    { term: "vāyo", meaning: "O Vāyu" },
    { term: "tvam", meaning: "you" },
    { term: "eva", meaning: "alone" },
    { term: "pratyakṣam", meaning: "perceptible / directly visible" },
    { term: "brahma", meaning: "Brahman" },
    { term: "asi", meaning: "you are" },
    { term: "tvām", meaning: "you" },
    { term: "vadiṣyāmi", meaning: "I shall declare" },
  ],
  root: group("vy-verse", "verse", translation, [
    group("vy-bow", "phrase", "salutation to Brahman; salutation to you, O Vāyu", [
      word("vy-namo1", "salutation", [["न", "na"], ["मो", "mo"]]),
      word("vy-brahmane", "to Brahman", [
        ["ब्र", "bra"],
        ["ह्म", "hma"],
        ["णे", "ṇe"],
      ], { trailing: " ।", lineBreakAfter: true }),
      word("vy-namas", "salutation", [["न", "na"], ["म", "ma"], ["स्ते", "ste"]], {
        trailing: "",
      }),
      word("vy-vayo", "O Vāyu", [["वा", "vā"], ["यो", "yo"]], {
        trailing: " ।",
        lineBreakAfter: true,
      }),
    ]),
    group("vy-declare", "phrase", "you alone are the perceptible Brahman; you alone I shall declare as such", [
      word("vy-tvam", "you", [["त्व", "tva"], ["मे", "me"]], { trailing: "" }),
      word("vy-eva1", "alone", [["व", "va"]]),
      word("vy-pratyaksam1", "perceptible", [
        ["प्र", "pra"],
        ["त्य", "tya"],
        ["क्षं", "kṣaṃ"],
      ]),
      word("vy-brahma1", "Brahman", [["ब्र", "bra"], ["ह्मा", "hmā"]], { trailing: "" }),
      word("vy-asi", "you are", [["सि", "si"]], { trailing: " ।", lineBreakAfter: true }),
      word("vy-tvam2", "you", [["त्वा", "tvā"], ["मे", "me"]], { trailing: "" }),
      word("vy-eva2", "alone", [["व", "va"]]),
      word("vy-pratyaksam2", "perceptible", [
        ["प्र", "pra"],
        ["त्य", "tya"],
        ["क्षं", "kṣaṃ"],
      ]),
      word("vy-brahma2", "Brahman", [["ब्र", "bra"], ["ह्म", "hma"]]),
      word("vy-vadisyami", "I shall declare", [
        ["व", "va"],
        ["दि", "di"],
        ["ष्या", "ṣyā"],
        ["मि", "mi"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
