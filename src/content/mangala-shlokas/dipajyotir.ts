import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "It brings auspiciousness, welfare, and health, with wealth. For the destruction of hostile intent — O light of the lamp, may homage be to you.";

export const dipajyotir: Chapter = {
  id: "dipajyotir",
  titleDev: "शुभं करोति",
  titleIast: "śubhaṃ karoti",
  titleEn: "Lighting a lamp (II)",
  status: "ready",
  translation,
  glossary: [
    { term: "śubha", meaning: "auspiciousness" },
    { term: "karoti", meaning: "brings about" },
    { term: "kalyāṇa", meaning: "welfare" },
    { term: "ārogya", meaning: "health" },
    { term: "dhanasampad", meaning: "wealth" },
    { term: "śatrubuddhivināśa", meaning: "destruction of hostile intent" },
    { term: "dīpajyotis", meaning: "light of the lamp" },
    { term: "namaḥ", meaning: "homage" },
    { term: "astu", meaning: "may it be" },
    { term: "te", meaning: "to you" },
  ],
  root: group("dj-verse", "verse", translation, [
    group("dj-brings", "sentence", "It brings auspiciousness, welfare, and health, with wealth.", [
      word("dj-subham", "auspiciousness", [
        ["शु", "śu"],
        ["भं", "bhaṃ"],
      ]),
      word("dj-karoti", "brings about", [
        ["क", "ka"],
        ["रो", "ro"],
        ["ति", "ti"],
      ]),
      word("dj-kalyanam", "welfare", [
        ["क", "ka"],
        ["ल्या", "lyā"],
        ["णं", "ṇaṃ"],
      ]),
      word("dj-arogyam", "health", [
        ["आ", "ā"],
        ["रो", "ro"],
        ["ग्यं", "gyaṃ"],
      ]),
      word("dj-dhana", "with wealth", [
        ["ध", "dha"],
        ["न", "na"],
        ["स", "sa"],
        ["म्प", "mpa"],
        ["दा", "dā"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("dj-salute", "sentence", "For the destruction of hostile intent, O light of the lamp, may homage be to you.", [
      word("dj-satru", "for the destruction of hostile intent", [
        ["श", "śa"],
        ["त्रु", "tru"],
        ["बु", "bu"],
        ["द्धि", "ddhi"],
        ["वि", "vi"],
        ["ना", "nā"],
        ["शा", "śā"],
        ["य", "ya"],
      ]),
      word("dj-jyotir", "O light of the lamp", [
        ["दी", "dī"],
        ["प", "pa"],
        ["ज्यो", "jyo"],
        ["तिर्", "tir"],
      ], { trailing: "" }),
      word("dj-namo", "homage", [
        ["न", "na"],
        ["मो", "mo"],
      ], { trailing: "" }),
      word("dj-astu", "may it be", [["ऽस्तु", "astu"]]),
      word("dj-te", "to you", [["ते", "te"]], { trailing: " ॥" }),
    ]),
  ]),
};
