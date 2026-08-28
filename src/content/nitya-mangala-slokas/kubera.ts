import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Salutation to the god who oversees wealth, seated on a human-borne vehicle; salutation to you, king of kings, the great-souled Kubera.";

export const kubera: Chapter = {
  id: "kubera",
  titleDev: "कुबेरः",
  titleIast: "kuberaḥ",
  titleEn: "Kubera",
  status: "ready",
  translation,
  glossary: [
    { term: "dhana", meaning: "wealth" },
    { term: "adhyakṣāya", meaning: "to the overseer" },
    { term: "devāya", meaning: "to the god" },
    { term: "nara", meaning: "human" },
    { term: "yāna", meaning: "vehicle" },
    { term: "upaveśine", meaning: "to him seated" },
    { term: "namaḥ", meaning: "salutation" },
    { term: "te", meaning: "to you" },
    { term: "rāja", meaning: "king" },
    { term: "rājāya", meaning: "to the king" },
    { term: "kuberāya", meaning: "to Kubera" },
    { term: "mahā", meaning: "great" },
    { term: "ātmane", meaning: "to the soul / self" },
  ],
  root: group("ku-verse", "verse", translation, [
    group("ku-pada12", "phrase", "to the god who oversees wealth, seated on a human-vehicle", [
      group("ku-wealth", "phrase", "to the overseer of wealth", [
        word("ku-dhana", "wealth", [["ध", "dha"], ["ना", "nā"]], { trailing: "" }),
        word("ku-adhyaksaya", "to the overseer", [
          ["ध्य", "dhya"],
          ["क्षा", "kṣā"],
          ["य", "ya"],
        ]),
      ]),
      word("ku-devaya", "to the god", [["दे", "de"], ["वा", "vā"], ["य", "ya"]]),
      group("ku-vehicle", "phrase", "to him seated on a human-vehicle", [
        word("ku-nara", "human", [["न", "na"], ["र", "ra"]], { trailing: "" }),
        word("ku-yana", "vehicle", [["या", "yā"], ["नो", "no"]], { trailing: "" }),
        word("ku-upavesine", "to him seated", [
          ["प", "pa"],
          ["वे", "ve"],
          ["शि", "śi"],
          ["ने", "ne"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
    ]),
    group("ku-pada34", "phrase", "salutation to you, king of kings, the great-souled Kubera", [
      word("ku-namaste", "salutation to you", [
        ["न", "na"],
        ["म", "ma"],
        ["स्ते", "ste"],
      ]),
      group("ku-king", "phrase", "to the king of kings", [
        word("ku-raja", "king", [["रा", "rā"], ["ज", "ja"]], { trailing: "" }),
        word("ku-rajaya", "to the king", [["रा", "rā"], ["जा", "jā"], ["य", "ya"]]),
      ]),
      word("ku-kuberaya", "to Kubera", [
        ["कु", "ku"],
        ["बे", "be"],
        ["रा", "rā"],
        ["य", "ya"],
      ]),
      group("ku-soul", "phrase", "to the great-souled one", [
        word("ku-maha", "great", [["म", "ma"], ["हा", "hā"]], { trailing: "" }),
        word("ku-atmane", "to the soul / self", [["त्म", "tma"], ["ने", "ne"]], {
          trailing: " ॥",
        }),
      ]),
    ]),
  ]),
};
