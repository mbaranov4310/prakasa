import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Salutation to you, Brahmā — rosary and sruva in the right [hands], sruc and water-pot in the left, long-bearded and matted-haired.";

export const brahma: Chapter = {
  id: "brahma",
  titleDev: "ब्रह्मा",
  titleIast: "brahmā",
  titleEn: "Brahmā",
  status: "ready",
  translation,
  glossary: [
    { term: "akṣamālām", meaning: "a rosary (of beads / akṣa-seeds)" },
    { term: "sruvam", meaning: "the small sacrificial ladle (sruva)" },
    { term: "dakṣe", meaning: "in the right (hand)" },
    { term: "vāme", meaning: "in the left (hand)" },
    { term: "srucam", meaning: "the large sacrificial ladle (sruc)" },
    { term: "kamaṇḍalum", meaning: "a water-pot" },
    { term: "lambakūrcam", meaning: "with a long hanging beard" },
    { term: "ca", meaning: "and" },
    { term: "jaṭilam", meaning: "wearing matted locks" },
    { term: "brahmāṇam", meaning: "Brahmā" },
    { term: "vai", meaning: "indeed" },
    { term: "namaḥ", meaning: "salutation" },
    { term: "astu", meaning: "let there be" },
    { term: "te", meaning: "to you" },
  ],
  root: group("br-verse", "verse", translation, [
    group(
      "br-pada12",
      "phrase",
      "rosary and sruva in the right, sruc and water-pot in the left",
      [
        group("br-rosary", "phrase", "a rosary of akṣa-beads", [
          word("br-aksa", "akṣa-beads", [["अ", "a"], ["क्ष", "kṣa"]], {
            trailing: "",
          }),
          word("br-malam", "rosary", [["मा", "mā"], ["लां", "lāṃ"]]),
        ]),
        word("br-sruvam", "the small sacrificial ladle", [
          ["स्रु", "sru"],
          ["वं", "vaṃ"],
        ]),
        word("br-dakse", "in the right (hand)", [["द", "da"], ["क्षे", "kṣe"]]),
        word("br-vame", "in the left (hand)", [["वा", "vā"], ["मे", "me"]]),
        word("br-srucam", "the large sacrificial ladle", [
          ["स्रु", "sru"],
          ["चं", "caṃ"],
        ]),
        word("br-kamandalum", "a water-pot", [
          ["क", "ka"],
          ["म", "ma"],
          ["ण्ड", "ṇḍa"],
          ["लुम्", "lum"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "br-pada34",
      "phrase",
      "long-bearded and matted-haired — salutation to you, Brahmā",
      [
        group("br-beard", "phrase", "with a long hanging beard", [
          word("br-lamba", "long / hanging", [["ल", "la"], ["म्ब", "mba"]], {
            trailing: "",
          }),
          word("br-kurcam", "beard-tuft", [["कू", "kū"], ["र्चं", "rcaṃ"]]),
        ]),
        word("br-ca", "and", [["च", "ca"]]),
        word("br-jatilam", "wearing matted locks", [
          ["ज", "ja"],
          ["टि", "ṭi"],
          ["लं", "laṃ"],
        ]),
        word("br-brahmanam", "Brahmā", [
          ["ब्र", "bra"],
          ["ह्मा", "hmā"],
          ["णं", "ṇaṃ"],
        ]),
        word("br-vai", "indeed", [["वै", "vai"]]),
        word("br-namo", "salutation", [["न", "na"], ["मो", "mo"]], { trailing: "" }),
        word("br-astu", "let there be", [["ऽस्तु", "’stu"]]),
        word("br-te", "to you", [["ते", "te"]], { trailing: " ॥" }),
      ],
    ),
  ]),
};
