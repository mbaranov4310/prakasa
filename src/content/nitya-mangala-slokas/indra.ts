import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "One should visualize Śakra: mounted on the elephant Airāvata, golden-hued, crowned, thousand-eyed, vajra in hand.";

export const indra: Chapter = {
  id: "indra",
  titleDev: "इन्द्रः",
  titleIast: "indraḥ",
  titleEn: "Indra",
  status: "ready",
  translation,
  glossary: [
    { term: "airāvatagajārūḍham", meaning: "mounted on the elephant Airāvata" },
    { term: "svarṇavarṇam", meaning: "golden-coloured" },
    { term: "kirīṭinam", meaning: "wearing a diadem" },
    { term: "sahasranayanam", meaning: "thousand-eyed" },
    { term: "śakram", meaning: "Śakra (Indra)" },
    { term: "vajrapāṇim", meaning: "thunderbolt in hand" },
    { term: "vibhāvayet", meaning: "one should visualize" },
  ],
  root: group("in-verse", "verse", translation, [
    group("in-pada12", "phrase", "mounted on Airāvata, golden-hued, crowned", [
      group("in-mount", "phrase", "mounted on the elephant Airāvata", [
        word("in-airavata", "Airāvata", [
          ["ऐ", "ai"],
          ["रा", "rā"],
          ["व", "va"],
          ["त", "ta"],
        ], { trailing: "" }),
        word("in-gaja", "elephant", [["ग", "ga"], ["जा", "jā"]], { trailing: "" }),
        word("in-arudham", "mounted", [["रू", "rū"], ["ढं", "ḍhaṃ"]]),
      ]),
      group("in-gold", "phrase", "golden-coloured", [
        word("in-svarna", "gold", [["स्वर्", "svar"], ["ण", "ṇa"]], { trailing: "" }),
        word("in-varnam", "colour", [["व", "va"], ["र्णं", "rṇaṃ"]]),
      ]),
      word("in-kiritinam", "wearing a diadem", [
        ["कि", "ki"],
        ["री", "rī"],
        ["टि", "ṭi"],
        ["नम्", "nam"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("in-pada34", "phrase", "thousand-eyed Śakra, vajra in hand — one should visualize", [
      group("in-eyes", "phrase", "thousand-eyed", [
        word("in-sahasra", "thousand", [
          ["स", "sa"],
          ["ह", "ha"],
          ["स्र", "sra"],
        ], { trailing: "" }),
        word("in-nayanam", "eyed", [["न", "na"], ["य", "ya"], ["नं", "naṃ"]]),
      ]),
      word("in-sakram", "Śakra (Indra)", [["श", "śa"], ["क्रं", "kraṃ"]]),
      group("in-vajra", "phrase", "thunderbolt in hand", [
        word("in-vajra-w", "vajra / thunderbolt", [["व", "va"], ["ज्र", "jra"]], {
          trailing: "",
        }),
        word("in-panim", "in hand", [["पा", "pā"], ["णिं", "ṇiṃ"]]),
      ]),
      word("in-vibhavayet", "one should visualize", [
        ["वि", "vi"],
        ["भा", "bhā"],
        ["व", "va"],
        ["येत्", "yet"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
