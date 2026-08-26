import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Salutation to you, O bearer of Viṣṇu, whose hue is marked with vermilion and who is white as jasmine and the moon; salutation to you, O king of birds.";

export const garuda: Chapter = {
  id: "garuda",
  titleDev: "गरुडः",
  titleIast: "garuḍaḥ",
  titleEn: "Garuḍa",
  status: "ready",
  translation,
  glossary: [
    { term: "kuṅkumāṅkitavarṇāya", meaning: "to the one whose colour is marked with kuṅkuma" },
    { term: "kundendudhavalāya", meaning: "to the one white as kunda and the moon" },
    { term: "ca", meaning: "and" },
    { term: "viṣṇuvāha", meaning: "O bearer of Viṣṇu" },
    { term: "namaḥ", meaning: "salutation" },
    { term: "tubhyam", meaning: "to you" },
    { term: "pakṣirājāya", meaning: "to the king of birds" },
    { term: "te", meaning: "to you" },
  ],
  root: group("gd-verse", "verse", translation, [
    group("gd-pada12", "phrase", "whose hue is marked with vermilion and white as jasmine and the moon", [
      word("gd-kunkuma", "to the one whose colour is marked with kuṅkuma", [
        ["कुङ्", "kuṅ"],
        ["कु", "ku"],
        ["माङ्", "māṅ"],
        ["कि", "ki"],
        ["त", "ta"],
        ["व", "va"],
        ["र्णा", "rṇā"],
        ["य", "ya"],
      ]),
      word("gd-kundendu", "to the one white as kunda and the moon", [
        ["कु", "ku"],
        ["न्दे", "nde"],
        ["न्दु", "ndu"],
        ["ध", "dha"],
        ["व", "va"],
        ["ला", "lā"],
        ["य", "ya"],
      ]),
      word("gd-ca", "and", [["च", "ca"]], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("gd-pada34", "phrase", "O bearer of Viṣṇu, king of birds — salutation to you", [
      group("gd-vahana", "phrase", "O bearer of Viṣṇu", [
        word("gd-visnu", "Viṣṇu", [["वि", "vi"], ["ष्णु", "ṣṇu"]], { trailing: "" }),
        word("gd-vaha", "O bearer", [["वा", "vā"], ["ह", "ha"]]),
      ]),
      word("gd-namah1", "salutation", [["न", "na"], ["म", "ma"], ["स्तु", "stu"]], {
        trailing: "",
      }),
      word("gd-tubhyam", "to you", [["भ्यं", "bhyaṃ"]]),
      word("gd-paksi", "to the king of birds", [
        ["प", "pa"],
        ["क्षि", "kṣi"],
        ["रा", "rā"],
        ["जा", "jā"],
        ["य", "ya"],
      ]),
      word("gd-te", "to you", [["ते", "te"]]),
      word("gd-namah2", "salutation", [["न", "na"], ["मः", "maḥ"]], {
        trailing: " ॥",
      }),
    ]),
  ]),
};
