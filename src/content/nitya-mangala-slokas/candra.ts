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
    { term: "dadhi", meaning: "curd" },
    { term: "śaṅkha", meaning: "conch" },
    { term: "tuṣāra", meaning: "frost / snow" },
    { term: "ābham", meaning: "of appearance like" },
    { term: "kṣīra", meaning: "milk" },
    { term: "uda", meaning: "water" },
    { term: "arṇava", meaning: "ocean" },
    { term: "sambhavam", meaning: "born from" },
    { term: "namāmi", meaning: "I bow" },
    { term: "śaśinam", meaning: "to Śaśin" },
    { term: "somam", meaning: "to Soma as the Moon" },
    { term: "śambhoḥ", meaning: "of Śambhu" },
    { term: "mukuṭa", meaning: "crest / crown" },
    { term: "bhūṣaṇam", meaning: "ornament" },
  ],
  root: group("cn-verse", "verse", translation, [
    group("cn-pada12", "phrase", "lustre of curd, conch, and frost; born from the ocean of milk", [
      group("cn-lustre", "phrase", "of appearance like curd, conch, and frost", [
        word("cn-dadhi-w", "curd", [["द", "da"], ["धि", "dhi"]], { trailing: "" }),
        word("cn-sankha", "conch", [["शङ्", "śaṅ"], ["ख", "kha"]], { trailing: "" }),
        word("cn-tusara", "frost / snow", [
          ["तु", "tu"],
          ["षा", "ṣā"],
          ["रा", "rā"],
        ], { trailing: "" }),
        word("cn-abham", "of appearance like", [["भं", "bhaṃ"]]),
      ]),
      group("cn-born", "phrase", "born from the ocean of milk", [
        word("cn-ksira", "milk", [["क्षी", "kṣī"], ["रो", "ro"]], { trailing: "" }),
        word("cn-uda", "water", [["दा", "dā"]], { trailing: "" }),
        word("cn-arnava", "ocean", [["र्ण", "rṇa"], ["व", "va"]], { trailing: "" }),
        word("cn-sambhavam", "born from", [
          ["सम्", "sam"],
          ["भ", "bha"],
          ["वम्", "vam"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
    ]),
    group("cn-pada34", "phrase", "I bow to Śaśin, Soma, ornament of Śambhu’s crown", [
      word("cn-namami", "I bow", [["न", "na"], ["मा", "mā"], ["मि", "mi"]]),
      word("cn-sasinam", "to Śaśin", [["श", "śa"], ["शि", "śi"], ["नं", "naṃ"]]),
      word("cn-somam", "to Soma as the Moon", [["सो", "so"], ["मं", "maṃ"]]),
      word("cn-sambhoh", "of Śambhu", [["शम्", "śam"], ["भोर्", "bhor"]], {
        trailing: "",
      }),
      group("cn-crest", "phrase", "the crest-ornament", [
        word("cn-mukuta-w", "crest / crown", [
          ["मु", "mu"],
          ["कु", "ku"],
          ["ट", "ṭa"],
        ], { trailing: "" }),
        word("cn-bhusanam", "ornament", [
          ["भू", "bhū"],
          ["ष", "ṣa"],
          ["णम्", "ṇam"],
        ], { trailing: " ॥" }),
      ]),
    ]),
  ]),
};
