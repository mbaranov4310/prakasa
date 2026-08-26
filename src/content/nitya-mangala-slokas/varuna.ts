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
    { term: "sphaṭikaprabhāya", meaning: "to the one whose radiance is like crystal" },
    { term: "suśvetahārāya", meaning: "to the one with a very white garland" },
    { term: "sumaṅgalāya", meaning: "to the highly auspicious one" },
    { term: "supāśahastāya", meaning: "to the one who holds a noose" },
    { term: "jhaṣāsanāya", meaning: "to the one whose seat is a jhaṣa" },
    { term: "jalādhināthāya", meaning: "to the overlord of the waters" },
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
        word("vr-sphatika", "crystal-radiant", [
          ["स्फ", "spha"],
          ["टि", "ṭi"],
          ["क", "ka"],
          ["प्र", "pra"],
          ["भा", "bhā"],
          ["य", "ya"],
        ]),
        word("vr-susveta", "with a very white garland", [
          ["सु", "su"],
          ["श्वे", "śve"],
          ["त", "ta"],
          ["हा", "hā"],
          ["रा", "rā"],
          ["य", "ya"],
        ]),
        word("vr-sumangalaya", "to the highly auspicious one", [
          ["सु", "su"],
          ["मङ्", "maṅ"],
          ["ग", "ga"],
          ["ला", "lā"],
          ["य", "ya"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "vr-pada34",
      "phrase",
      "who holds the noose, whose seat is the sea-creature, overlord of the waters — salutation",
      [
        word("vr-supasa", "who holds a noose", [
          ["सु", "su"],
          ["पा", "pā"],
          ["श", "śa"],
          ["ह", "ha"],
          ["स्ता", "stā"],
          ["य", "ya"],
        ]),
        word("vr-jhasa", "whose seat is a jhaṣa", [
          ["झ", "jha"],
          ["षा", "ṣā"],
          ["स", "sa"],
          ["ना", "nā"],
          ["य", "ya"],
        ]),
        word("vr-jaladhi", "to the overlord of the waters", [
          ["ज", "ja"],
          ["ला", "lā"],
          ["धि", "dhi"],
          ["ना", "nā"],
          ["था", "thā"],
          ["य", "ya"],
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
