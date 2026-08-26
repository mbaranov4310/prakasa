import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "I take refuge in the messenger of Śrī Rāma — swift as thought, equal to the wind in speed, master of the senses, foremost among the wise, son of the Wind, chief of the vānara host.";

export const hanuman: Chapter = {
  id: "hanuman",
  titleDev: "हनुमान्",
  titleIast: "hanumān",
  titleEn: "Hanumān",
  status: "ready",
  translation,
  glossary: [
    { term: "manojavam", meaning: "whose speed is that of the mind" },
    { term: "mārutatulyavegam", meaning: "whose speed equals the wind" },
    { term: "jitendriyam", meaning: "who has conquered the senses" },
    { term: "buddhimatām", meaning: "of those possessed of buddhi" },
    { term: "variṣṭham", meaning: "foremost, most excellent" },
    { term: "vātātmajam", meaning: "son of Vāta / Vāyu" },
    { term: "vānarayūthamukhyam", meaning: "chief of the vānara host" },
    { term: "śrīrāmadūtam", meaning: "messenger of Śrī Rāma" },
    { term: "śaraṇam", meaning: "refuge" },
    { term: "prapadye", meaning: "I take refuge" },
  ],
  root: group("ha-verse", "verse", translation, [
    group(
      "ha-pada12",
      "phrase",
      "swift as thought, equal to the wind, master of the senses, foremost among the wise",
      [
        group("ha-mind", "phrase", "whose speed is that of the mind", [
          word("ha-mano", "mind", [["म", "ma"], ["नो", "no"]], { trailing: "" }),
          word("ha-javam", "speed", [["ज", "ja"], ["वं", "vaṃ"]]),
        ]),
        group("ha-wind", "phrase", "whose speed equals the wind", [
          word("ha-maruta", "wind / Marut", [
            ["मा", "mā"],
            ["रु", "ru"],
            ["त", "ta"],
          ], { trailing: "" }),
          word("ha-tulya", "equal", [["तु", "tu"], ["ल्य", "lya"]], { trailing: "" }),
          word("ha-vegam", "speed", [["वे", "ve"], ["गं", "gaṃ"]]),
        ]),
        group("ha-senses", "phrase", "who has conquered the senses", [
          word("ha-jita", "conquered", [["जि", "ji"], ["ते", "te"]], { trailing: "" }),
          word("ha-indriyam", "senses", [
            ["न्द्रि", "ndri"],
            ["यं", "yaṃ"],
          ]),
        ]),
        word("ha-buddhimatam", "of those possessed of buddhi", [
          ["बु", "bu"],
          ["द्धि", "ddhi"],
          ["म", "ma"],
          ["तां", "tāṃ"],
        ]),
        word("ha-varistham", "foremost", [
          ["व", "va"],
          ["रि", "ri"],
          ["ष्ठम्", "ṣṭham"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "ha-pada34",
      "phrase",
      "son of the Wind, chief of the vānara host, messenger of Śrī Rāma — I take refuge",
      [
        group("ha-son", "phrase", "son of Vāta / Vāyu", [
          word("ha-vata", "Vāta / Vāyu", [["वा", "vā"], ["ता", "tā"]], { trailing: "" }),
          word("ha-atmajam", "son", [["त्म", "tma"], ["जं", "jaṃ"]]),
        ]),
        group("ha-chief", "phrase", "chief of the vānara host", [
          word("ha-vanara", "vānara", [
            ["वा", "vā"],
            ["न", "na"],
            ["र", "ra"],
          ], { trailing: "" }),
          word("ha-yutha", "host", [["यू", "yū"], ["थ", "tha"]], { trailing: "" }),
          word("ha-mukhyam", "chief", [["मु", "mu"], ["ख्यं", "khyaṃ"]]),
        ]),
        group("ha-messenger", "phrase", "messenger of Śrī Rāma", [
          word("ha-sri", "Śrī", [["श्री", "śrī"]], { trailing: "" }),
          word("ha-rama", "Rāma", [["रा", "rā"], ["म", "ma"]], { trailing: "" }),
          word("ha-dutam", "messenger", [["दू", "dū"], ["तं", "taṃ"]]),
        ]),
        word("ha-saranam", "refuge", [
          ["श", "śa"],
          ["र", "ra"],
          ["णं", "ṇaṃ"],
        ]),
        word("ha-prapadye", "I take refuge", [
          ["प्र", "pra"],
          ["प", "pa"],
          ["द्ये", "dye"],
        ], { trailing: " ॥" }),
      ],
    ),
  ]),
};
