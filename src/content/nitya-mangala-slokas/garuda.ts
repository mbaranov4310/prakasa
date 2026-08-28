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
    { term: "kuṅkuma", meaning: "kuṅkuma / vermilion" },
    { term: "aṅkita", meaning: "marked" },
    { term: "varṇāya", meaning: "to the one whose colour" },
    { term: "kunda", meaning: "white jasmine" },
    { term: "indu", meaning: "moon" },
    { term: "dhavalāya", meaning: "to the white one" },
    { term: "ca", meaning: "and" },
    { term: "viṣṇu", meaning: "Viṣṇu" },
    { term: "vāha", meaning: "O bearer" },
    { term: "namaḥ", meaning: "salutation" },
    { term: "tubhyam", meaning: "to you" },
    { term: "pakṣi", meaning: "birds" },
    { term: "rājāya", meaning: "to the king" },
    { term: "te", meaning: "to you" },
  ],
  root: group("gd-verse", "verse", translation, [
    group("gd-pada12", "phrase", "whose hue is marked with vermilion and white as jasmine and the moon", [
      group("gd-kunkuma", "phrase", "to the one whose colour is marked with kuṅkuma", [
        word("gd-kunkuma-w", "kuṅkuma / vermilion", [
          ["कुङ्", "kuṅ"],
          ["कु", "ku"],
          ["माङ्", "māṅ"],
        ], { trailing: "" }),
        word("gd-ankita", "marked", [["कि", "ki"], ["त", "ta"]], { trailing: "" }),
        word("gd-varnaya", "to the one whose colour", [
          ["व", "va"],
          ["र्णा", "rṇā"],
          ["य", "ya"],
        ]),
      ]),
      group("gd-white", "phrase", "to the one white as kunda and the moon", [
        word("gd-kunda", "white jasmine", [["कु", "ku"], ["न्दे", "nde"]], {
          trailing: "",
        }),
        word("gd-indu", "moon", [["न्दु", "ndu"]], { trailing: "" }),
        word("gd-dhavalaya", "to the white one", [
          ["ध", "dha"],
          ["व", "va"],
          ["ला", "lā"],
          ["य", "ya"],
        ]),
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
      group("gd-birds", "phrase", "to the king of birds", [
        word("gd-paksi-w", "birds", [["प", "pa"], ["क्षि", "kṣi"]], { trailing: "" }),
        word("gd-rajaya", "to the king", [["रा", "rā"], ["जा", "jā"], ["य", "ya"]]),
      ]),
      word("gd-te", "to you", [["ते", "te"]]),
      word("gd-namah2", "salutation", [["न", "na"], ["मः", "maḥ"]], {
        trailing: " ॥",
      }),
    ]),
  ]),
};
