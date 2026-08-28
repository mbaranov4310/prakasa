import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "I bow to Viṣṇu — of peaceful form, reclining on the serpent, lotus-naveled, lord of the gods; support of the universe, vast as the sky, cloud-hued, of auspicious limbs; beloved of Lakṣmī, lotus-eyed, reached by yogis in meditation; remover of the fear of worldly existence, the one Lord of all the worlds.";

export const visnu: Chapter = {
  id: "visnu",
  titleDev: "विष्णुः",
  titleIast: "viṣṇuḥ",
  titleEn: "Viṣṇu",
  status: "ready",
  translation,
  glossary: [
    { term: "śānta", meaning: "peaceful" },
    { term: "ākāram", meaning: "form" },
    { term: "bhujaga", meaning: "serpent" },
    { term: "śayanam", meaning: "reclining" },
    { term: "padma", meaning: "lotus" },
    { term: "nābham", meaning: "navel" },
    { term: "sura", meaning: "of the gods" },
    { term: "īśam", meaning: "lord" },
    { term: "viśva", meaning: "universe" },
    { term: "ādhāram", meaning: "support" },
    { term: "gagana", meaning: "sky" },
    { term: "sadṛśam", meaning: "like / resembling" },
    { term: "megha", meaning: "cloud" },
    { term: "varṇam", meaning: "hue / colour" },
    { term: "śubha", meaning: "auspicious" },
    { term: "aṅgam", meaning: "limbs" },
    { term: "lakṣmī", meaning: "Lakṣmī" },
    { term: "kāntam", meaning: "beloved" },
    { term: "kamala", meaning: "lotus" },
    { term: "nayanam", meaning: "eyes" },
    { term: "yogibhiḥ", meaning: "by yogis" },
    { term: "dhyāna", meaning: "meditation" },
    { term: "gamyam", meaning: "attainable / reached" },
    { term: "vande", meaning: "I bow" },
    { term: "viṣṇum", meaning: "Viṣṇu" },
    { term: "bhava", meaning: "worldly existence" },
    { term: "bhaya", meaning: "fear" },
    { term: "haram", meaning: "who removes" },
    { term: "sarva", meaning: "all" },
    { term: "loka", meaning: "worlds" },
    { term: "eka", meaning: "one" },
    { term: "nātham", meaning: "lord" },
  ],
  root: group("vi-verse", "verse", translation, [
    group(
      "vi-pada12",
      "phrase",
      "of peaceful form, reclining on the serpent, lotus-naveled, lord of the gods; support of the universe, like the sky, cloud-hued, of auspicious limbs",
      [
        group("vi-form", "phrase", "of peaceful form", [
          word("vi-santa", "peaceful", [["शा", "śā"], ["न्ता", "ntā"]], {
            trailing: "",
          }),
          word("vi-akaram", "form", [["का", "kā"], ["रं", "raṃ"]]),
        ]),
        group("vi-recline", "phrase", "reclining on a serpent", [
          word("vi-bhujaga", "serpent", [["भु", "bhu"], ["ज", "ja"], ["ग", "ga"]], {
            trailing: "",
          }),
          word("vi-sayanam", "reclining", [
            ["श", "śa"],
            ["य", "ya"],
            ["नं", "naṃ"],
          ]),
        ]),
        group("vi-navel", "phrase", "lotus-naveled", [
          word("vi-padma", "lotus", [["प", "pa"], ["द्म", "dma"]], { trailing: "" }),
          word("vi-nabham", "navel", [["ना", "nā"], ["भं", "bhaṃ"]]),
        ]),
        group("vi-suresa", "phrase", "lord of the gods", [
          word("vi-sura", "of the gods", [["सु", "su"], ["रे", "re"]], {
            trailing: "",
          }),
          word("vi-isam", "lord", [["शं", "śaṃ"]], { lineBreakAfter: true }),
        ]),
        group("vi-support", "phrase", "support of the universe", [
          word("vi-visva", "universe", [["वि", "vi"], ["श्वा", "śvā"]], {
            trailing: "",
          }),
          word("vi-adharam", "support", [["धा", "dhā"], ["रं", "raṃ"]]),
        ]),
        group("vi-sky", "phrase", "like the sky", [
          word("vi-gagana", "sky", [
            ["ग", "ga"],
            ["ग", "ga"],
            ["न", "na"],
          ], { trailing: "" }),
          word("vi-sadrsham", "like / resembling", [
            ["स", "sa"],
            ["दृ", "dṛ"],
            ["शं", "śaṃ"],
          ]),
        ]),
        group("vi-cloud", "phrase", "cloud-hued", [
          word("vi-megha", "cloud", [["मे", "me"], ["घ", "gha"]], { trailing: "" }),
          word("vi-varnam", "hue / colour", [["व", "va"], ["र्णं", "rṇaṃ"]]),
        ]),
        group("vi-limbs", "phrase", "of auspicious limbs", [
          word("vi-subha", "auspicious", [["शु", "śu"], ["भा", "bhā"]], {
            trailing: "",
          }),
          word("vi-angam", "limbs", [["ङ्गम्", "ṅgam"]], {
            trailing: " ।",
            lineBreakAfter: true,
          }),
        ]),
      ],
    ),
    group(
      "vi-pada34",
      "phrase",
      "beloved of Lakṣmī, lotus-eyed, reached by yogis in meditation; I bow to Viṣṇu, remover of worldly fear, the one Lord of all worlds",
      [
        group("vi-laksmi", "phrase", "beloved of Lakṣmī", [
          word("vi-laksmi-w", "Lakṣmī", [["ल", "la"], ["क्ष्मी", "kṣmī"]], {
            trailing: "",
          }),
          word("vi-kantam", "beloved", [["का", "kā"], ["न्तं", "ntaṃ"]]),
        ]),
        group("vi-eyes", "phrase", "lotus-eyed", [
          word("vi-kamala", "lotus", [
            ["क", "ka"],
            ["म", "ma"],
            ["ल", "la"],
          ], { trailing: "" }),
          word("vi-nayanam", "eyes", [
            ["न", "na"],
            ["य", "ya"],
            ["नं", "naṃ"],
          ]),
        ]),
        word("vi-yogibhih", "by yogis", [
          ["यो", "yo"],
          ["गि", "gi"],
          ["भिर्", "bhir"],
        ], { trailing: "" }),
        group("vi-meditation", "phrase", "attainable through meditation", [
          word("vi-dhyana", "meditation", [["ध्या", "dhyā"], ["न", "na"]], {
            trailing: "",
          }),
          word("vi-gamyam", "attainable / reached", [
            ["ग", "ga"],
            ["म्यं", "myaṃ"],
          ], { lineBreakAfter: true }),
        ]),
        word("vi-vande", "I bow", [["व", "va"], ["न्दे", "nde"]]),
        word("vi-visnum", "Viṣṇu", [["वि", "vi"], ["ष्णुं", "ṣṇuṃ"]]),
        group("vi-fear", "phrase", "who removes the fear of worldly existence", [
          word("vi-bhava", "worldly existence", [["भ", "bha"], ["व", "va"]], {
            trailing: "",
          }),
          word("vi-bhaya", "fear", [["भ", "bha"], ["य", "ya"]], { trailing: "" }),
          word("vi-haram", "who removes", [["ह", "ha"], ["रं", "raṃ"]]),
        ]),
        group("vi-lord", "phrase", "the one Lord of all worlds", [
          word("vi-sarva", "all", [["स", "sa"], ["र्व", "rva"]], { trailing: "" }),
          word("vi-loka", "worlds", [["लो", "lo"], ["कै", "kai"]], {
            trailing: "",
          }),
          word("vi-eka", "one", [["क", "ka"]], { trailing: "" }),
          word("vi-natham", "lord", [["ना", "nā"], ["थम्", "tham"]], {
            trailing: " ॥",
          }),
        ]),
      ],
    ),
  ]),
};
