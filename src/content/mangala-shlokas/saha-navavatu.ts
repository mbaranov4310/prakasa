import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Om. Together may he protect us both. Together may he nourish us both. Together may we two work with vigor. May our study be full of light. May we two not quarrel. Om, peace, peace, peace.";

export const sahaNavavatu: Chapter = {
  id: "saha-navavatu",
  titleDev: "सह नाववतु",
  titleIast: "saha nāv avatu",
  titleEn: "May he protect us both",
  status: "ready",
  translation,
  glossary: [
    { term: "saha", meaning: "together" },
    { term: "nau", meaning: "us two; of us two" },
    { term: "avatu", meaning: "may he protect" },
    { term: "bhunaktu", meaning: "may he nourish" },
    { term: "vīryam", meaning: "vigor" },
    { term: "karavāvahai", meaning: "may we two accomplish" },
    { term: "tejasvi", meaning: "brilliant" },
    { term: "adhītam", meaning: "what is studied" },
    { term: "astu", meaning: "may it be" },
    { term: "mā", meaning: "do not" },
    { term: "vidviṣāvahai", meaning: "may we two quarrel" },
    { term: "śāntiḥ", meaning: "peace" },
  ],
  root: group("sn-verse", "verse", translation, [
    group("sn-protect", "sentence", "Together may he protect us both.", [
      word("sn-om-1", "primordial sound", [["ॐ", "oṃ"]]),
      word("sn-saha-1", "together", [
        ["स", "sa"],
        ["ह", "ha"],
      ]),
      word("sn-nau-1", "us two", [["नाव", "nāv"]], { trailing: "" }),
      word("sn-avatu", "may he protect", [["वतु", "avatu"]], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("sn-nourish", "sentence", "Together may he nourish us both.", [
      word("sn-saha-2", "together", [
        ["स", "sa"],
        ["ह", "ha"],
      ]),
      word("sn-nau-2", "us two", [["नौ", "nau"]]),
      word("sn-bhunaktu", "may he nourish", [
        ["भु", "bhu"],
        ["न", "na"],
        ["क्तु", "ktu"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("sn-vigor", "sentence", "Together may we two work with vigor.", [
      word("sn-saha-3", "together", [
        ["स", "sa"],
        ["ह", "ha"],
      ]),
      word("sn-viryam", "vigor", [
        ["वी", "vī"],
        ["र्यं", "ryaṃ"],
      ]),
      word("sn-karavavahai", "may we two accomplish", [
        ["क", "ka"],
        ["र", "ra"],
        ["वा", "vā"],
        ["व", "va"],
        ["है", "hai"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("sn-study", "sentence", "May our study be full of light.", [
      group("sn-brilliant-study", "phrase", "our brilliant study", [
        word("sn-tejasvi", "brilliant", [
          ["ते", "te"],
          ["ज", "ja"],
          ["स्वि", "svi"],
        ], { trailing: "" }),
        word("sn-nau-3", "of us two", [["नाव", "nāv"]], { trailing: "" }),
        word("sn-adhitam", "what is studied", [["धीतम", "adhītam"]], { trailing: "" }),
      ]),
      word("sn-astu", "may it be", [["स्तु", "astu"]]),
    ]),
    group("sn-quarrel", "sentence", "May we two not quarrel.", [
      word("sn-ma", "do not", [["मा", "mā"]]),
      word("sn-vidvisavahai", "may we two quarrel", [
        ["वि", "vi"],
        ["द्वि", "dvi"],
        ["षा", "ṣā"],
        ["व", "va"],
        ["है", "hai"],
      ], { trailing: " ॥", lineBreakAfter: true }),
    ]),
    group("sn-peace", "sentence", "Om. Peace, peace, peace.", [
      word("sn-om-2", "primordial sound", [["ॐ", "oṃ"]]),
      word("sn-santih-1", "peace", [
        ["शान्", "śān"],
        ["तिः", "tiḥ"],
      ]),
      word("sn-santih-2", "peace", [
        ["शान्", "śān"],
        ["तिः", "tiḥ"],
      ]),
      word("sn-santih-3", "peace", [
        ["शान्", "śān"],
        ["तिः", "tiḥ"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
