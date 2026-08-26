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
    { term: "dhanādhyakṣāya", meaning: "to the overseer of wealth" },
    { term: "devāya", meaning: "to the god" },
    { term: "narayānopaveśine", meaning: "to him seated on a human-vehicle" },
    { term: "namaḥ", meaning: "salutation" },
    { term: "te", meaning: "to you" },
    { term: "rājarājāya", meaning: "to the king of kings" },
    { term: "kuberāya", meaning: "to Kubera" },
    { term: "mahātmane", meaning: "to the great-souled one" },
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
      word("ku-narayana", "to him seated on a human-vehicle", [
        ["न", "na"],
        ["र", "ra"],
        ["या", "yā"],
        ["नो", "no"],
        ["प", "pa"],
        ["वे", "ve"],
        ["शि", "śi"],
        ["ने", "ne"],
      ], { trailing: " ।", lineBreakAfter: true }),
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
      word("ku-mahatmane", "to the great-souled one", [
        ["म", "ma"],
        ["हा", "hā"],
        ["त्म", "tma"],
        ["ने", "ne"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
