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
    { term: "viṣṇupādābjasambhūte", meaning: "O you born from Viṣṇu’s lotus-feet" },
    { term: "gaṅge", meaning: "O Gaṅgā" },
    { term: "tripathagāmini", meaning: "O you who course the three paths" },
    { term: "dharmadraveti", meaning: "as dharma in liquid form" },
    { term: "vikhyāte", meaning: "O you who are famed" },
    { term: "pāpam", meaning: "sin" },
    { term: "me", meaning: "my" },
    { term: "hara", meaning: "take away" },
    { term: "jāhnavi", meaning: "O Jāhnavī" },
  ],
  root: group("gg-verse", "verse", translation, [
    group("gg-pada12", "phrase", "O Gaṅgā, born from Viṣṇu’s lotus-feet, who courses the three paths", [
      word("gg-visnupada", "O you born from Viṣṇu’s lotus-feet", [
        ["वि", "vi"],
        ["ष्णु", "ṣṇu"],
        ["पा", "pā"],
        ["दा", "dā"],
        ["ब्ज", "bja"],
        ["सम्", "sam"],
        ["भू", "bhū"],
        ["ते", "te"],
      ]),
      word("gg-gange", "O Gaṅgā", [["गङ्", "gaṅ"], ["गे", "ge"]]),
      word("gg-tripatha", "O you who course the three paths", [
        ["त्रि", "tri"],
        ["प", "pa"],
        ["थ", "tha"],
        ["गा", "gā"],
        ["मि", "mi"],
        ["नि", "ni"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("gg-pada34", "phrase", "famed as dharma in liquid form — take away my sin, O Jāhnavī", [
      word("gg-dharmadrava", "as dharma in liquid form", [
        ["ध", "dha"],
        ["र्म", "rma"],
        ["द्र", "dra"],
        ["वे", "ve"],
        ["ति", "ti"],
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
