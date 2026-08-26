import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "I bow to blazing Agni, Jātavedas, eater of the offering — golden-coloured, pure, well-kindled, facing every direction.";

export const agni: Chapter = {
  id: "agni",
  titleDev: "अग्निः",
  titleIast: "agniḥ",
  titleEn: "Agni",
  status: "ready",
  translation,
  glossary: [
    { term: "agnim", meaning: "Agni" },
    { term: "prajvalitam", meaning: "blazing / kindled" },
    { term: "vande", meaning: "I bow" },
    { term: "jātavedam", meaning: "Jātavedas" },
    { term: "hutāśanam", meaning: "eater of the offering" },
    { term: "suvarṇavarṇam", meaning: "golden-coloured" },
    { term: "amalam", meaning: "stainless / pure" },
    { term: "samiddham", meaning: "well-kindled" },
    { term: "viśvatomukham", meaning: "facing all directions" },
  ],
  root: group("ag-verse", "verse", translation, [
    group("ag-pada12", "phrase", "I bow to blazing Agni, Jātavedas, eater of the offering", [
      word("ag-agnim", "Agni", [["अ", "a"], ["ग्निं", "gniṃ"]]),
      word("ag-prajvalitam", "blazing / kindled", [
        ["प्र", "pra"],
        ["ज्व", "jva"],
        ["लि", "li"],
        ["तं", "taṃ"],
      ]),
      word("ag-vande", "I bow", [["व", "va"], ["न्दे", "nde"]]),
      word("ag-jatavedam", "Jātavedas", [
        ["जा", "jā"],
        ["त", "ta"],
        ["वे", "ve"],
        ["दं", "daṃ"],
      ]),
      word("ag-hutasanam", "eater of the offering", [
        ["हु", "hu"],
        ["ता", "tā"],
        ["श", "śa"],
        ["नम्", "nam"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("ag-pada34", "phrase", "golden-coloured, pure, well-kindled, facing every direction", [
      group("ag-gold", "phrase", "golden-coloured", [
        word("ag-suvarna", "gold", [
          ["सु", "su"],
          ["वर्", "var"],
          ["ण", "ṇa"],
        ], { trailing: "" }),
        word("ag-varnam", "colour", [["व", "va"], ["र्ण", "rṇa"], ["म", "ma"]], {
          trailing: "",
        }),
      ]),
      word("ag-amalam", "stainless / pure", [
        ["म", "ma"],
        ["लं", "laṃ"],
      ]),
      word("ag-samiddham", "well-kindled", [
        ["स", "sa"],
        ["मि", "mi"],
        ["द्धं", "ddhaṃ"],
      ]),
      word("ag-visvatomukham", "facing all directions", [
        ["वि", "vi"],
        ["श्व", "śva"],
        ["तो", "to"],
        ["मु", "mu"],
        ["खम्", "kham"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
