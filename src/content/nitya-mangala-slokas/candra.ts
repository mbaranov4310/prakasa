import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "I bow to Śaśin, Soma, who has the lustre of curd, conch, and frost, born from the ocean of milk, the ornament of Śambhu’s crown.";

export const candra: Chapter = {
  id: "candra",
  titleDev: "चन्द्रः",
  titleIast: "candraḥ",
  titleEn: "Candra",
  status: "ready",
  translation,
  glossary: [
    { term: "dadhiśaṅkhatuṣārābham", meaning: "of appearance like curd, a conch, and frost" },
    { term: "kṣīrodārṇavasambhavam", meaning: "born from the ocean of milk" },
    { term: "namāmi", meaning: "I bow" },
    { term: "śaśinam", meaning: "to Śaśin" },
    { term: "somam", meaning: "to Soma as the Moon" },
    { term: "śambhoḥ", meaning: "of Śambhu" },
    { term: "mukuṭabhūṣaṇam", meaning: "the crest-ornament" },
  ],
  root: group("cn-verse", "verse", translation, [
    group("cn-pada12", "phrase", "lustre of curd, conch, and frost; born from the ocean of milk", [
      word("cn-dadhi", "of appearance like curd, conch, and frost", [
        ["द", "da"],
        ["धि", "dhi"],
        ["शङ्", "śaṅ"],
        ["ख", "kha"],
        ["तु", "tu"],
        ["षा", "ṣā"],
        ["रा", "rā"],
        ["भं", "bhaṃ"],
      ]),
      word("cn-ksiroda", "born from the ocean of milk", [
        ["क्षी", "kṣī"],
        ["रो", "ro"],
        ["दा", "dā"],
        ["र्ण", "rṇa"],
        ["व", "va"],
        ["सम्", "sam"],
        ["भ", "bha"],
        ["वम्", "vam"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("cn-pada34", "phrase", "I bow to Śaśin, Soma, ornament of Śambhu’s crown", [
      word("cn-namami", "I bow", [["न", "na"], ["मा", "mā"], ["मि", "mi"]]),
      word("cn-sasinam", "to Śaśin", [["श", "śa"], ["शि", "śi"], ["नं", "naṃ"]]),
      word("cn-somam", "to Soma as the Moon", [["सो", "so"], ["मं", "maṃ"]]),
      word("cn-sambhoh", "of Śambhu", [["शम्", "śam"], ["भोर्", "bhor"]], {
        trailing: "",
      }),
      word("cn-mukuta", "crest-ornament", [
        ["मु", "mu"],
        ["कु", "ku"],
        ["ट", "ṭa"],
        ["भू", "bhū"],
        ["ष", "ṣa"],
        ["णम्", "ṇam"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
