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
    { term: "śāntākāram", meaning: "of peaceful form" },
    { term: "bhujagaśayanam", meaning: "reclining on a serpent" },
    { term: "padmanābham", meaning: "lotus-naveled" },
    { term: "sureśam", meaning: "lord of the gods" },
    { term: "viśvādhāram", meaning: "support of the universe" },
    { term: "gaganasadṛśam", meaning: "like the sky" },
    { term: "meghavarṇam", meaning: "cloud-hued" },
    { term: "śubhāṅgam", meaning: "of auspicious limbs" },
    { term: "lakṣmīkāntam", meaning: "beloved of Lakṣmī" },
    { term: "kamalanayanam", meaning: "lotus-eyed" },
    { term: "yogibhiḥ", meaning: "by yogis" },
    { term: "dhyānagamyam", meaning: "attainable through meditation" },
    { term: "vande", meaning: "I bow" },
    { term: "viṣṇum", meaning: "Viṣṇu" },
    { term: "bhavabhayaharam", meaning: "who removes the fear of worldly existence" },
    { term: "sarvalokaikanātham", meaning: "the one Lord of all worlds" },
  ],
  root: group("vi-verse", "verse", translation, [
    group("vi-pada12", "phrase", "of peaceful form, reclining on the serpent, lotus-naveled, lord of the gods; support of the universe, like the sky, cloud-hued, of auspicious limbs", [
      word("vi-santakaram", "of peaceful form", [
        ["शा", "śā"],
        ["न्ता", "ntā"],
        ["का", "kā"],
        ["रं", "raṃ"],
      ]),
      word("vi-bhujaga", "reclining on a serpent", [
        ["भु", "bhu"],
        ["ज", "ja"],
        ["ग", "ga"],
        ["श", "śa"],
        ["य", "ya"],
        ["नं", "naṃ"],
      ]),
      word("vi-padmanabham", "lotus-naveled", [
        ["प", "pa"],
        ["द्म", "dma"],
        ["ना", "nā"],
        ["भं", "bhaṃ"],
      ]),
      word("vi-suresam", "lord of the gods", [
        ["सु", "su"],
        ["रे", "re"],
        ["शं", "śaṃ"],
      ], { lineBreakAfter: true }),
      word("vi-visvadharam", "support of the universe", [
        ["वि", "vi"],
        ["श्वा", "śvā"],
        ["धा", "dhā"],
        ["रं", "raṃ"],
      ]),
      word("vi-gagana", "like the sky", [
        ["ग", "ga"],
        ["ग", "ga"],
        ["न", "na"],
        ["स", "sa"],
        ["दृ", "dṛ"],
        ["शं", "śaṃ"],
      ]),
      word("vi-megha", "cloud-hued", [
        ["मे", "me"],
        ["घ", "gha"],
        ["व", "va"],
        ["र्णं", "rṇaṃ"],
      ]),
      word("vi-subhangam", "of auspicious limbs", [
        ["शु", "śu"],
        ["भा", "bhā"],
        ["ङ्गम्", "ṅgam"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("vi-pada34", "phrase", "beloved of Lakṣmī, lotus-eyed, reached by yogis in meditation; I bow to Viṣṇu, remover of worldly fear, the one Lord of all worlds", [
      word("vi-laksmikantam", "beloved of Lakṣmī", [
        ["ल", "la"],
        ["क्ष्मी", "kṣmī"],
        ["का", "kā"],
        ["न्तं", "ntaṃ"],
      ]),
      word("vi-kamala", "lotus-eyed", [
        ["क", "ka"],
        ["म", "ma"],
        ["ल", "la"],
        ["न", "na"],
        ["य", "ya"],
        ["नं", "naṃ"],
      ]),
      word("vi-yogibhih", "by yogis", [
        ["यो", "yo"],
        ["गि", "gi"],
        ["भिर्", "bhir"],
      ], { trailing: "" }),
      word("vi-dhyanagamyam", "attainable through meditation", [
        ["ध्या", "dhyā"],
        ["न", "na"],
        ["ग", "ga"],
        ["म्यं", "myaṃ"],
      ], { lineBreakAfter: true }),
      word("vi-vande", "I bow", [["व", "va"], ["न्दे", "nde"]]),
      word("vi-visnum", "Viṣṇu", [["वि", "vi"], ["ष्णुं", "ṣṇuṃ"]]),
      word("vi-bhava", "who removes the fear of worldly existence", [
        ["भ", "bha"],
        ["व", "va"],
        ["भ", "bha"],
        ["य", "ya"],
        ["ह", "ha"],
        ["रं", "raṃ"],
      ]),
      word("vi-sarva", "the one Lord of all worlds", [
        ["स", "sa"],
        ["र्व", "rva"],
        ["लो", "lo"],
        ["कै", "kai"],
        ["क", "ka"],
        ["ना", "nā"],
        ["थम्", "tham"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
