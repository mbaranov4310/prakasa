import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "I bow to Divākara, who resembles the red japā flower, son of Kaśyapa, of great brilliance, enemy of darkness, destroyer of all sins.";

export const surya: Chapter = {
  id: "surya",
  titleDev: "सूर्यः",
  titleIast: "sūryaḥ",
  titleEn: "Sūrya",
  status: "ready",
  translation,
  glossary: [
    { term: "japākusumasaṅkāśam", meaning: "resembling the japā flower" },
    { term: "kāśyapeyam", meaning: "son / descendant of Kaśyapa" },
    { term: "mahādyutim", meaning: "of great brilliance" },
    { term: "tamo'rim", meaning: "enemy of darkness" },
    { term: "sarvapāpaghnam", meaning: "destroyer of all sins" },
    { term: "praṇataḥ", meaning: "bowed" },
    { term: "asmi", meaning: "I am" },
    { term: "divākaram", meaning: "to Divākara, the day-maker" },
  ],
  root: group("su-verse", "verse", translation, [
    group(
      "su-pada12",
      "phrase",
      "resembling the japā flower, son of Kaśyapa, of great brilliance",
      [
        group("su-japa", "phrase", "resembling the japā flower", [
          word("su-japa-w", "japā (red hibiscus)", [["ज", "ja"], ["पा", "pā"]], {
            trailing: "",
          }),
          word("su-kusuma", "flower", [
            ["कु", "ku"],
            ["सु", "su"],
            ["म", "ma"],
          ], { trailing: "" }),
          word("su-sankasam", "resembling", [
            ["सङ्", "saṅ"],
            ["का", "kā"],
            ["शं", "śaṃ"],
          ]),
        ]),
        word("su-kasyapeyam", "son / descendant of Kaśyapa", [
          ["का", "kā"],
          ["श्य", "śya"],
          ["पे", "pe"],
          ["यं", "yaṃ"],
        ]),
        group("su-brilliance", "phrase", "of great brilliance", [
          word("su-maha", "great", [["म", "ma"], ["हा", "hā"]], { trailing: "" }),
          word("su-dyutim", "brilliance", [
            ["द्यु", "dyu"],
            ["तिम्", "tim"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
      ],
    ),
    group(
      "su-pada34",
      "phrase",
      "enemy of darkness, destroyer of all sins — I bow to Divākara",
      [
        group("su-darkness", "phrase", "enemy of darkness", [
          word("su-tamo", "darkness", [["त", "ta"], ["मो", "mo"]], { trailing: "" }),
          word("su-arim", "enemy", [["ऽरिं", "’riṃ"]]),
        ]),
        group("su-sins", "phrase", "destroyer of all sins", [
          word("su-sarva", "all", [["स", "sa"], ["र्व", "rva"]], { trailing: "" }),
          word("su-papa", "sin", [["पा", "pā"], ["प", "pa"]], { trailing: "" }),
          word("su-ghnam", "destroyer", [["घ्नं", "ghnaṃ"]]),
        ]),
        word("su-pranatah", "bowed", [
          ["प्र", "pra"],
          ["ण", "ṇa"],
          ["तो", "to"],
        ], { trailing: "" }),
        word("su-asmi", "I am", [["ऽस्मि", "’smi"]]),
        word("su-divakaram", "to Divākara, the day-maker", [
          ["दि", "di"],
          ["वा", "vā"],
          ["क", "ka"],
          ["रम्", "ram"],
        ], { trailing: " ॥" }),
      ],
    ),
  ]),
};
