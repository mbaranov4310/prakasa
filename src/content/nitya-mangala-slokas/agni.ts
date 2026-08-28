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
    { term: "pra", meaning: "forth / well" },
    { term: "jvalitam", meaning: "blazing / kindled" },
    { term: "vande", meaning: "I bow" },
    { term: "jāta", meaning: "born" },
    { term: "vedam", meaning: "who knows" },
    { term: "huta", meaning: "the offering" },
    { term: "aśanam", meaning: "eater" },
    { term: "suvarṇa", meaning: "gold" },
    { term: "varṇam", meaning: "colour" },
    { term: "amalam", meaning: "stainless / pure" },
    { term: "sam", meaning: "well / thoroughly" },
    { term: "iddham", meaning: "kindled" },
    { term: "viśvataḥ", meaning: "on every side" },
    { term: "mukham", meaning: "face" },
  ],
  root: group("ag-verse", "verse", translation, [
    group("ag-pada12", "phrase", "I bow to blazing Agni, Jātavedas, eater of the offering", [
      word("ag-agnim", "Agni", [["अ", "a"], ["ग्निं", "gniṃ"]]),
      group("ag-blazing", "phrase", "blazing / kindled", [
        word("ag-pra", "forth / well", [["प्र", "pra"]], { trailing: "" }),
        word("ag-jvalitam", "blazing / kindled", [
          ["ज्व", "jva"],
          ["लि", "li"],
          ["तं", "taṃ"],
        ]),
      ]),
      word("ag-vande", "I bow", [["व", "va"], ["न्दे", "nde"]]),
      group("ag-jatavedas", "phrase", "Jātavedas", [
        word("ag-jata", "born", [["जा", "jā"], ["त", "ta"]], { trailing: "" }),
        word("ag-vedam", "who knows", [["वे", "ve"], ["दं", "daṃ"]]),
      ]),
      group("ag-offering", "phrase", "eater of the offering", [
        word("ag-huta", "the offering", [["हु", "hu"], ["ता", "tā"]], {
          trailing: "",
        }),
        word("ag-asanam", "eater", [
          ["श", "śa"],
          ["नम्", "nam"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
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
      group("ag-kindled", "phrase", "well-kindled", [
        word("ag-sam", "well / thoroughly", [["स", "sa"], ["मि", "mi"]], {
          trailing: "",
        }),
        word("ag-iddham", "kindled", [["द्धं", "ddhaṃ"]]),
      ]),
      group("ag-faces", "phrase", "facing all directions", [
        word("ag-visvatah", "on every side", [
          ["वि", "vi"],
          ["श्व", "śva"],
          ["तो", "to"],
        ], { trailing: "" }),
        word("ag-mukham", "face", [["मु", "mu"], ["खम्", "kham"]], {
          trailing: " ॥",
        }),
      ]),
    ]),
  ]),
};
