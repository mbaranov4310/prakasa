import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Again and again I bow to Kṛṣṇa, son of Vasudeva, joy of Devakī, child of the cowherd Nanda — to Govinda.";

export const krsna: Chapter = {
  id: "krsna",
  titleDev: "कृष्णः",
  titleIast: "kṛṣṇaḥ",
  titleEn: "Kṛṣṇa",
  status: "ready",
  translation,
  glossary: [
    { term: "kṛṣṇāya", meaning: "to Kṛṣṇa" },
    { term: "vāsu", meaning: "Vasudeva" },
    { term: "devāya", meaning: "to the son / to the lord" },
    { term: "devakī", meaning: "Devakī" },
    { term: "nandanāya", meaning: "to the son / delight" },
    { term: "ca", meaning: "and" },
    { term: "nanda", meaning: "Nanda" },
    { term: "gopa", meaning: "cowherd" },
    { term: "kumārāya", meaning: "to the boy" },
    { term: "go", meaning: "cows" },
    { term: "vindāya", meaning: "to the finder / protector" },
    { term: "namaḥ", meaning: "salutations, again and again" },
  ],
  root: group("kr-verse", "verse", translation, [
    group(
      "kr-pada12",
      "phrase",
      "to Kṛṣṇa, Vāsudeva, and the joy of Devakī",
      [
        word("kr-krsnaya", "to Kṛṣṇa", [
          ["कृ", "kṛ"],
          ["ष्णा", "ṣṇā"],
          ["य", "ya"],
        ]),
        group("kr-vasudeva", "phrase", "to Vāsudeva (son of Vasudeva)", [
          word("kr-vasu", "Vasudeva", [["वा", "vā"], ["सु", "su"]], { trailing: "" }),
          word("kr-devaya", "to the son / to the lord", [
            ["दे", "de"],
            ["वा", "vā"],
            ["य", "ya"],
          ]),
        ]),
        group("kr-devaki", "phrase", "to the son / delight of Devakī", [
          word("kr-devaki-n", "Devakī", [
            ["दे", "de"],
            ["व", "va"],
            ["की", "kī"],
          ], { trailing: "" }),
          word("kr-nandanaya", "to the son / delight", [
            ["न", "na"],
            ["न्दा", "ndā"],
            ["ना", "nā"],
            ["य", "ya"],
          ]),
        ]),
        word("kr-ca", "and", [["च", "ca"]], {
          trailing: " ।",
          lineBreakAfter: true,
        }),
      ],
    ),
    group(
      "kr-pada34",
      "phrase",
      "to the child of the cowherd Nanda, to Govinda — salutations again and again",
      [
        group("kr-nanda", "phrase", "to the boy of the cowherd Nanda", [
          word("kr-nanda-w", "Nanda", [["न", "na"], ["न्द", "nda"]], { trailing: "" }),
          word("kr-gopa", "cowherd", [["गो", "go"], ["प", "pa"]], { trailing: "" }),
          word("kr-kumaraya", "to the boy", [
            ["कु", "ku"],
            ["मा", "mā"],
            ["रा", "rā"],
            ["य", "ya"],
          ]),
        ]),
        group("kr-govinda", "phrase", "to Govinda", [
          word("kr-go", "cows", [["गो", "go"]], { trailing: "" }),
          word("kr-vindaya", "to the finder / protector", [
            ["वि", "vi"],
            ["न्दा", "ndā"],
            ["य", "ya"],
          ]),
        ]),
        word("kr-namo", "salutations", [["न", "na"], ["मो", "mo"]]),
        word("kr-namah", "again and again", [["न", "na"], ["मः", "maḥ"]], {
          trailing: " ॥",
        }),
      ],
    ),
  ]),
};
