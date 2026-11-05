import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Accept the dear auspicious lamp, with ghee, three-wicked, and kindled with fire, O remover of the darkness of the three worlds. With devotion I offer the lamp to the Lord, the supreme Self. Protect me from terrible suffering. O divine light, may homage be to you.";

export const mangalaDipam: Chapter = {
  id: "mangala-dipam",
  titleDev: "मङ्गलं दीपं",
  titleIast: "maṅgalaṃ dīpam",
  titleEn: "Lighting a lamp",
  status: "ready",
  translation,
  glossary: [
    { term: "sājya", meaning: "with ghee" },
    { term: "trivarti", meaning: "three-wicked" },
    { term: "saṃyukta", meaning: "joined" },
    { term: "vahni", meaning: "fire" },
    { term: "yojita", meaning: "kindled" },
    { term: "priya", meaning: "dear" },
    { term: "gṛhāṇa", meaning: "accept" },
    { term: "dīpa", meaning: "lamp" },
    { term: "trailokyatimirāpahā", meaning: "remover of the darkness of the three worlds" },
    { term: "bhakti", meaning: "devotion" },
    { term: "prayacchāmi", meaning: "I offer" },
    { term: "trāhi", meaning: "protect" },
    { term: "divyajyotis", meaning: "divine light" },
  ],
  root: group("dp-verse", "verse", translation, [
    group("dp-lit", "sentence", "With ghee, three-wicked, joined, kindled with fire, dear.", [
      word("dp-sajyam", "with ghee", [
        ["सा", "sā"],
        ["ज्यं", "jyaṃ"],
      ]),
      word("dp-trivarti", "three-wicked", [
        ["त्रि", "tri"],
        ["व", "va"],
        ["र्ति", "rti"],
      ]),
      word("dp-samyuktam", "joined", [
        ["सं", "saṃ"],
        ["यु", "yu"],
        ["क्तं", "ktaṃ"],
      ]),
      word("dp-vahnina", "with fire", [
        ["व", "va"],
        ["ह्नि", "hni"],
        ["ना", "nā"],
      ]),
      word("dp-yojitam", "kindled", [
        ["यो", "yo"],
        ["जि", "ji"],
        ["तं", "taṃ"],
      ]),
      word("dp-priyam", "dear", [
        ["प्रि", "pri"],
        ["यं", "yaṃ"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("dp-accept", "sentence", "Accept the auspicious lamp, O remover of the darkness of the three worlds.", [
      word("dp-grhana", "accept", [
        ["गृ", "gṛ"],
        ["हा", "hā"],
        ["ण", "ṇa"],
      ]),
      word("dp-mangalam", "auspicious", [
        ["म", "ma"],
        ["ङ्ग", "ṅga"],
        ["लं", "laṃ"],
      ]),
      word("dp-dipam-1", "lamp", [
        ["दी", "dī"],
        ["पं", "paṃ"],
      ]),
      word("dp-apaha", "O remover of the darkness of the three worlds", [
        ["त्रै", "trai"],
        ["लो", "lo"],
        ["क्य", "kya"],
        ["ति", "ti"],
        ["मि", "mi"],
        ["रा", "rā"],
        ["प", "pa"],
        ["हा", "hā"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("dp-offer", "sentence", "With devotion I offer the lamp to the Lord, the supreme Self.", [
      word("dp-bhaktya", "with devotion", [
        ["भ", "bha"],
        ["क्त्या", "ktyā"],
      ]),
      word("dp-dipam-2", "lamp", [
        ["दी", "dī"],
        ["पं", "paṃ"],
      ]),
      word("dp-yacchami", "I offer", [
        ["प्र", "pra"],
        ["य", "ya"],
        ["च्छा", "cchā"],
        ["मि", "mi"],
      ]),
      word("dp-devaya", "to the Lord", [
        ["दे", "de"],
        ["वा", "vā"],
        ["य", "ya"],
      ]),
      word("dp-paramatmane", "to the supreme Self", [
        ["प", "pa"],
        ["र", "ra"],
        ["मा", "mā"],
        ["त्म", "tma"],
        ["ने", "ne"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("dp-protect", "sentence", "Protect me from terrible suffering. O divine light, may homage be to you.", [
      word("dp-trahi", "protect", [
        ["त्रा", "trā"],
        ["हि", "hi"],
      ]),
      word("dp-mam", "me", [["मां", "māṃ"]]),
      word("dp-narakat", "from suffering", [
        ["न", "na"],
        ["र", "ra"],
        ["काद्", "kād"],
      ]),
      word("dp-ghorat", "terrible", [
        ["घो", "gho"],
        ["रात्", "rāt"],
      ]),
      word("dp-jyotir", "O divine light", [
        ["दि", "di"],
        ["व्य", "vya"],
        ["ज्यो", "jyo"],
        ["तिर्", "tir"],
      ], { trailing: "" }),
      word("dp-namo", "homage", [
        ["न", "na"],
        ["मो", "mo"],
      ], { trailing: "" }),
      word("dp-astu", "may it be", [["ऽस्तु", "astu"]]),
      word("dp-te", "to you", [["ते", "te"]], { trailing: " ॥" }),
    ]),
  ]),
};
