import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "O goddess whose garment is the ocean and whose bosom is the mountains, O wife of Viṣṇu, homage to you. Forgive me the touch of my feet.";

export const samudravasane: Chapter = {
  id: "samudravasane",
  titleDev: "समुद्रवसने",
  titleIast: "samudravasane",
  titleEn: "When the feet touch the ground",
  status: "ready",
  translation,
  glossary: [
    { term: "samudravasanā", meaning: "ocean-clothed" },
    { term: "devī", meaning: "goddess" },
    { term: "parvatastanamaṇḍalā", meaning: "mountain-bosomed" },
    { term: "viṣṇupatnī", meaning: "wife of Viṣṇu" },
    { term: "namaḥ", meaning: "homage" },
    { term: "tubhyam", meaning: "to you" },
    { term: "pādasparśa", meaning: "touch of the feet" },
    { term: "kṣamasva", meaning: "forgive" },
    { term: "me", meaning: "me" },
  ],
  root: group("sm-verse", "verse", translation, [
    group("sm-call", "sentence", "O goddess whose garment is the ocean and whose bosom is the mountains.", [
      word("sm-samudra", "ocean-clothed", [
        ["स", "sa"],
        ["मु", "mu"],
        ["द्र", "dra"],
        ["व", "va"],
        ["स", "sa"],
        ["ने", "ne"],
      ]),
      word("sm-devi", "O goddess", [
        ["दे", "de"],
        ["वि", "vi"],
      ]),
      word("sm-parvata", "mountain-bosomed", [
        ["प", "pa"],
        ["र्व", "rva"],
        ["त", "ta"],
        ["स्त", "sta"],
        ["न", "na"],
        ["म", "ma"],
        ["ण्ड", "ṇḍa"],
        ["ले", "le"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("sm-ask", "sentence", "O wife of Viṣṇu, homage to you. Forgive me the touch of my feet.", [
      word("sm-patni", "wife of Viṣṇu", [
        ["वि", "vi"],
        ["ष्णु", "ṣṇu"],
        ["प", "pa"],
        ["त्नि", "tni"],
      ]),
      word("sm-namas", "homage", [
        ["न", "na"],
        ["मस्", "mas"],
      ], { trailing: "" }),
      word("sm-tubhyam", "to you", [
        ["तु", "tu"],
        ["भ्यं", "bhyaṃ"],
      ]),
      word("sm-pada", "the touch of the feet", [
        ["पा", "pā"],
        ["द", "da"],
        ["स्प", "spa"],
        ["र्शं", "rśaṃ"],
      ]),
      word("sm-ksamasva", "forgive", [
        ["क्ष", "kṣa"],
        ["म", "ma"],
        ["स्व", "sva"],
      ]),
      word("sm-me", "me", [["मे", "me"]], { trailing: " ॥" }),
    ]),
  ]),
};
