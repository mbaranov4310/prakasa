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
    { term: "vāsudevāya", meaning: "to Vāsudeva (son of Vasudeva)" },
    { term: "devakīnandanāya", meaning: "to the son / delight of Devakī" },
    { term: "ca", meaning: "and" },
    { term: "nandagopakumārāya", meaning: "to the boy of the cowherd Nanda" },
    { term: "govindāya", meaning: "to Govinda" },
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
        word("kr-vasudevaya", "to Vāsudeva (son of Vasudeva)", [
          ["वा", "vā"],
          ["सु", "su"],
          ["दे", "de"],
          ["वा", "vā"],
          ["य", "ya"],
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
        word("kr-govindaya", "to Govinda", [
          ["गो", "go"],
          ["वि", "vi"],
          ["न्दा", "ndā"],
          ["य", "ya"],
        ]),
        word("kr-namo", "salutations", [["न", "na"], ["मो", "mo"]]),
        word("kr-namah", "again and again", [["न", "na"], ["मः", "maḥ"]], {
          trailing: " ॥",
        }),
      ],
    ),
  ]),
};
