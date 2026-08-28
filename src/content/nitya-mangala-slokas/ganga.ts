import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "O Gaṅgā, born from Viṣṇu’s lotus-feet, who courses the three paths, famed as dharma in liquid form — take away my sin, O Jāhnavī.";

export const ganga: Chapter = {
  id: "ganga",
  titleDev: "गङ्गा",
  titleIast: "gaṅgā",
  titleEn: "Gaṅgā",
  status: "ready",
  translation,
  glossary: [
    { term: "viṣṇu", meaning: "Viṣṇu" },
    { term: "pāda", meaning: "feet" },
    { term: "abja", meaning: "lotus" },
    { term: "sambhūte", meaning: "O you born from" },
    { term: "gaṅge", meaning: "O Gaṅgā" },
    { term: "tri", meaning: "three" },
    { term: "patha", meaning: "paths" },
    { term: "gāmini", meaning: "O you who course" },
    { term: "dharma", meaning: "dharma" },
    { term: "drava", meaning: "liquid" },
    { term: "iti", meaning: "as / thus" },
    { term: "vikhyāte", meaning: "O you who are famed" },
    { term: "pāpam", meaning: "sin" },
    { term: "me", meaning: "my" },
    { term: "hara", meaning: "take away" },
    { term: "jāhnavi", meaning: "O Jāhnavī" },
  ],
  root: group("gg-verse", "verse", translation, [
    group("gg-pada12", "phrase", "O Gaṅgā, born from Viṣṇu’s lotus-feet, who courses the three paths", [
      group("gg-born", "phrase", "O you born from Viṣṇu’s lotus-feet", [
        word("gg-visnu", "Viṣṇu", [["वि", "vi"], ["ष्णु", "ṣṇu"]], { trailing: "" }),
        word("gg-pada", "feet", [["पा", "pā"], ["दा", "dā"]], { trailing: "" }),
        word("gg-abja", "lotus", [["ब्ज", "bja"]], { trailing: "" }),
        word("gg-sambhute", "O you born from", [
          ["सम्", "sam"],
          ["भू", "bhū"],
          ["ते", "te"],
        ]),
      ]),
      word("gg-gange", "O Gaṅgā", [["गङ्", "gaṅ"], ["गे", "ge"]]),
      group("gg-paths", "phrase", "O you who course the three paths", [
        word("gg-tri", "three", [["त्रि", "tri"]], { trailing: "" }),
        word("gg-patha", "paths", [["प", "pa"], ["थ", "tha"]], { trailing: "" }),
        word("gg-gamini", "O you who course", [
          ["गा", "gā"],
          ["मि", "mi"],
          ["नि", "ni"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
    ]),
    group("gg-pada34", "phrase", "famed as dharma in liquid form — take away my sin, O Jāhnavī", [
      group("gg-liquid", "phrase", "as dharma in liquid form", [
        word("gg-dharma", "dharma", [["ध", "dha"], ["र्म", "rma"]], { trailing: "" }),
        word("gg-drava", "liquid", [["द्र", "dra"], ["वे", "ve"]], { trailing: "" }),
        word("gg-iti", "as / thus", [["ति", "ti"]]),
      ]),
      word("gg-vikhyate", "O you who are famed", [
        ["वि", "vi"],
        ["ख्या", "khyā"],
        ["ते", "te"],
      ]),
      word("gg-papam", "sin", [["पा", "pā"], ["पं", "paṃ"]]),
      word("gg-me", "my", [["मे", "me"]]),
      word("gg-hara", "take away", [["ह", "ha"], ["र", "ra"]]),
      word("gg-jahnavi", "O Jāhnavī", [
        ["जा", "jā"],
        ["ह्न", "hna"],
        ["वि", "vi"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
