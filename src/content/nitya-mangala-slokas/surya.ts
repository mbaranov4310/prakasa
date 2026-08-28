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
    { term: "japā", meaning: "japā (red hibiscus)" },
    { term: "kusuma", meaning: "flower" },
    { term: "saṅkāśam", meaning: "resembling" },
    { term: "kāśyapa", meaning: "Kaśyapa" },
    { term: "eyam", meaning: "son / descendant" },
    { term: "mahā", meaning: "great" },
    { term: "dyutim", meaning: "brilliance" },
    { term: "tamas", meaning: "darkness" },
    { term: "arim", meaning: "enemy" },
    { term: "sarva", meaning: "all" },
    { term: "pāpa", meaning: "sin" },
    { term: "ghnam", meaning: "destroyer" },
    { term: "praṇataḥ", meaning: "bowed" },
    { term: "asmi", meaning: "I am" },
    { term: "divā", meaning: "day" },
    { term: "karam", meaning: "maker" },
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
        group("su-kasyapa", "phrase", "son / descendant of Kaśyapa", [
          word("su-kasyapa-w", "Kaśyapa", [
            ["का", "kā"],
            ["श्य", "śya"],
            ["पे", "pe"],
          ], { trailing: "" }),
          word("su-eyam", "son / descendant", [["यं", "yaṃ"]]),
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
        group("su-divakara", "phrase", "to Divākara, the day-maker", [
          word("su-diva", "day", [["दि", "di"], ["वा", "vā"]], { trailing: "" }),
          word("su-karam", "maker", [["क", "ka"], ["रम्", "ram"]], {
            trailing: " ॥",
          }),
        ]),
      ],
    ),
  ]),
};
