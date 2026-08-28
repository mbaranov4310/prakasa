import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Salutation again and again to you, crystal-radiant, wearing a pure-white garland, highly auspicious; salutation to you who holds the noose, whose seat is the sea-creature, overlord of the waters.";

export const varuna: Chapter = {
  id: "varuna",
  titleDev: "वरुणः",
  titleIast: "varuṇaḥ",
  titleEn: "Varuṇa",
  status: "ready",
  translation,
  glossary: [
    { term: "namaḥ", meaning: "salutation" },
    { term: "te", meaning: "to you" },
    { term: "sphaṭika", meaning: "crystal" },
    { term: "prabhāya", meaning: "to the one whose radiance" },
    { term: "su", meaning: "very / good" },
    { term: "śveta", meaning: "white" },
    { term: "hārāya", meaning: "to the one with a garland" },
    { term: "maṅgalāya", meaning: "to the auspicious one" },
    { term: "pāśa", meaning: "noose" },
    { term: "hastāya", meaning: "to the one who holds in hand" },
    { term: "jhaṣa", meaning: "jhaṣa / sea-creature" },
    { term: "āsanāya", meaning: "to the one whose seat" },
    { term: "jala", meaning: "waters" },
    { term: "adhi", meaning: "over" },
    { term: "nāthāya", meaning: "to the lord" },
  ],
  root: group("vr-verse", "verse", translation, [
    group(
      "vr-pada12",
      "phrase",
      "salutation to you, crystal-radiant, white-garlanded, highly auspicious",
      [
        word("vr-namo1", "salutation", [["न", "na"], ["मो", "mo"]]),
        word("vr-namaste1", "salutation to you", [
          ["न", "na"],
          ["म", "ma"],
          ["स्ते", "ste"],
        ]),
        group("vr-crystal", "phrase", "to the one whose radiance is like crystal", [
          word("vr-sphatika-w", "crystal", [
            ["स्फ", "spha"],
            ["टि", "ṭi"],
            ["क", "ka"],
          ], { trailing: "" }),
          word("vr-prabhaya", "to the one whose radiance", [
            ["प्र", "pra"],
            ["भा", "bhā"],
            ["य", "ya"],
          ]),
        ]),
        group("vr-garland", "phrase", "to the one with a very white garland", [
          word("vr-su1", "very / good", [["सु", "su"]], { trailing: "" }),
          word("vr-sveta", "white", [["श्वे", "śve"], ["त", "ta"]], { trailing: "" }),
          word("vr-haraya", "to the one with a garland", [
            ["हा", "hā"],
            ["रा", "rā"],
            ["य", "ya"],
          ]),
        ]),
        group("vr-auspicious", "phrase", "to the highly auspicious one", [
          word("vr-su2", "very / good", [["सु", "su"]], { trailing: "" }),
          word("vr-mangalaya", "to the auspicious one", [
            ["मङ्", "maṅ"],
            ["ग", "ga"],
            ["ला", "lā"],
            ["य", "ya"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
      ],
    ),
    group(
      "vr-pada34",
      "phrase",
      "who holds the noose, whose seat is the sea-creature, overlord of the waters — salutation",
      [
        group("vr-noose", "phrase", "to the one who holds a noose", [
          word("vr-su3", "very / good", [["सु", "su"]], { trailing: "" }),
          word("vr-pasa", "noose", [["पा", "pā"], ["श", "śa"]], { trailing: "" }),
          word("vr-hastaya", "to the one who holds in hand", [
            ["ह", "ha"],
            ["स्ता", "stā"],
            ["य", "ya"],
          ]),
        ]),
        group("vr-seat", "phrase", "to the one whose seat is a jhaṣa", [
          word("vr-jhasa-w", "jhaṣa / sea-creature", [["झ", "jha"], ["षा", "ṣā"]], {
            trailing: "",
          }),
          word("vr-asanaya", "to the one whose seat", [
            ["स", "sa"],
            ["ना", "nā"],
            ["य", "ya"],
          ]),
        ]),
        group("vr-waters", "phrase", "to the overlord of the waters", [
          word("vr-jala", "waters", [["ज", "ja"], ["ला", "lā"]], { trailing: "" }),
          word("vr-adhi", "over", [["धि", "dhi"]], { trailing: "" }),
          word("vr-nathaya", "to the lord", [
            ["ना", "nā"],
            ["था", "thā"],
            ["य", "ya"],
          ]),
        ]),
        word("vr-namo2", "salutation", [["न", "na"], ["मो", "mo"]]),
        word("vr-namaste2", "salutation to you", [
          ["न", "na"],
          ["म", "ma"],
          ["स्ते", "ste"],
        ], { trailing: " ॥" }),
      ],
    ),
  ]),
};
