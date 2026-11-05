import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Lead me from the unreal to the real. Lead me from darkness to light. Lead me from death to immortality. Om, peace, peace, peace.";

export const asatoMa: Chapter = {
  id: "asato-ma",
  titleDev: "असतो मा सद्गमय",
  titleIast: "asato mā sad gamaya",
  titleEn: "Lead me from the unreal",
  status: "ready",
  translation,
  glossary: [
    { term: "asataḥ", meaning: "from the unreal" },
    { term: "mā", meaning: "me" },
    { term: "sat", meaning: "the real" },
    { term: "gamaya", meaning: "lead" },
    { term: "tamasaḥ", meaning: "from darkness" },
    { term: "jyotiḥ", meaning: "light" },
    { term: "mṛtyoḥ", meaning: "from death" },
    { term: "amṛtam", meaning: "immortality" },
    { term: "śāntiḥ", meaning: "peace" },
  ],
  root: group("am-verse", "verse", translation, [
    group("am-real", "sentence", "Lead me from the unreal to the real.", [
      word("am-asato", "from the unreal", [
        ["अ", "a"],
        ["स", "sa"],
        ["तो", "to"],
      ]),
      word("am-ma-1", "me", [["मा", "mā"]]),
      group("am-to-real", "phrase", "to the real", [
        word("am-sad", "the real", [["सद्", "sad"]], { trailing: "" }),
        word("am-gamaya-1", "lead", [
          ["ग", "ga"],
          ["म", "ma"],
          ["य", "ya"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
    ]),
    group("am-light", "sentence", "Lead me from darkness to light.", [
      word("am-tamaso", "from darkness", [
        ["त", "ta"],
        ["म", "ma"],
        ["सो", "so"],
      ]),
      word("am-ma-2", "me", [["मा", "mā"]]),
      group("am-to-light", "phrase", "to the light", [
        word("am-jyotir", "to the light", [
          ["ज्यो", "jyo"],
          ["ति", "ti"],
          ["र्", "r"],
        ], { trailing: "" }),
        word("am-gamaya-2", "lead", [
          ["ग", "ga"],
          ["म", "ma"],
          ["य", "ya"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
    ]),
    group("am-death", "sentence", "Lead me from death to immortality.", [
      word("am-mrtyor", "from death", [
        ["मृ", "mṛ"],
        ["त्यो", "tyo"],
        ["र्", "r"],
      ], { trailing: "" }),
      word("am-ma-3", "me", [["मा", "mā"]], { trailing: "" }),
      group("am-to-immortal", "phrase", "to immortality", [
        word("am-amrtam", "to immortality", [["मृतं", "amṛtaṃ"]]),
        word("am-gamaya-3", "lead", [
          ["ग", "ga"],
          ["म", "ma"],
          ["य", "ya"],
        ], { trailing: " ॥", lineBreakAfter: true }),
      ]),
    ]),
    group("am-peace", "sentence", "Om. Peace, peace, peace.", [
      word("am-om", "primordial sound", [["ॐ", "oṃ"]]),
      word("am-santih-1", "peace", [
        ["शान्", "śān"],
        ["तिः", "tiḥ"],
      ]),
      word("am-santih-2", "peace", [
        ["शान्", "śān"],
        ["तिः", "tiḥ"],
      ]),
      word("am-santih-3", "peace", [
        ["शान्", "śān"],
        ["तिः", "tiḥ"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
