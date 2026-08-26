import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "O Annapūrṇā, ever complete, dear as life to Śaṅkara — give me alms so that knowledge and dispassion may be accomplished, O Pārvatī.";

export const parvati: Chapter = {
  id: "parvati",
  titleDev: "पार्वती",
  titleIast: "pārvatī",
  titleEn: "Pārvatī",
  status: "ready",
  translation,
  glossary: [
    { term: "annapūrṇe", meaning: "O Annapūrṇā" },
    { term: "sadāpūrṇe", meaning: "O ever-full one" },
    { term: "śaṅkaraprāṇavallabhe", meaning: "O one dear as life to Śaṅkara" },
    { term: "jñānavairāgyasiddhyartham", meaning: "for the accomplishment of knowledge and dispassion" },
    { term: "bhikṣām", meaning: "alms" },
    { term: "dehi", meaning: "give" },
    { term: "ca", meaning: "and" },
    { term: "pārvati", meaning: "O Pārvatī" },
  ],
  root: group("pv-verse", "verse", translation, [
    group("pv-names", "phrase", "O Annapūrṇā, ever-full, dear as life to Śaṅkara", [
      word("pv-anna", "food", [["अ", "a"], ["न्न", "nna"]], { trailing: "" }),
      word("pv-purne", "O full one", [["पू", "pū"], ["र्णे", "rṇe"]]),
      word("pv-sada", "always", [["स", "sa"], ["दा", "dā"]], { trailing: "" }),
      word("pv-purne2", "O full one", [["पू", "pū"], ["र्णे", "rṇe"]]),
      group("pv-dear", "phrase", "dear as life to Śaṅkara", [
        word("pv-sankara", "Śaṅkara", [["शङ्", "śaṅ"], ["क", "ka"], ["र", "ra"]], { trailing: "" }),
        word("pv-prana", "life-breath", [["प्रा", "prā"], ["ण", "ṇa"]], { trailing: "" }),
        word("pv-vallabhe", "O beloved", [["व", "va"], ["ल्ल", "lla"], ["भे", "bhe"]], {
          trailing: " ।",
          lineBreakAfter: true,
        }),
      ]),
    ]),
    group("pv-ask", "phrase", "give alms for knowledge and dispassion, O Pārvatī", [
      group("pv-for", "phrase", "for the accomplishment of knowledge and dispassion", [
        word("pv-jnana", "knowledge", [["ज्ञा", "jñā"], ["न", "na"]], { trailing: "" }),
        word("pv-vairagya", "dispassion", [["वै", "vai"], ["रा", "rā"], ["ग्य", "gya"]], { trailing: "" }),
        word("pv-siddhyartham", "for accomplishment", [
          ["सि", "si"],
          ["द्ध्य", "ddhya"],
          ["र्थं", "rthaṃ"],
        ]),
      ]),
      word("pv-bhiksam", "alms", [["भि", "bhi"], ["क्षां", "kṣāṃ"]]),
      word("pv-dehi", "give", [["दे", "de"], ["हि", "hi"]]),
      word("pv-ca", "and", [["च", "ca"]]),
      word("pv-parvati", "O Pārvatī", [["पा", "pā"], ["र्व", "rva"], ["ति", "ti"]], {
        trailing: " ॥",
      }),
    ]),
  ]),
};
