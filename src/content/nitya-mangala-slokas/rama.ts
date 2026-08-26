import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Salutation to Rāma — Rāmabhadra, Rāmacandra, the Creator, lord of the Raghu line, Lord of all, husband of Sītā.";

export const rama: Chapter = {
  id: "rama",
  titleDev: "रामः",
  titleIast: "rāmaḥ",
  titleEn: "Rāma",
  status: "ready",
  translation,
  glossary: [
    { term: "rāmāya", meaning: "to Rāma" },
    { term: "rāmabhadrāya", meaning: "to Rāmabhadra" },
    { term: "rāmacandrāya", meaning: "to Rāmacandra" },
    { term: "vedhase", meaning: "to the Vidhātā / creator" },
    { term: "raghunāthāya", meaning: "to the lord of the Raghus" },
    { term: "nāthāya", meaning: "to the lord / protector" },
    { term: "sītāyāḥ", meaning: "of Sītā" },
    { term: "pataye", meaning: "to the husband" },
    { term: "namaḥ", meaning: "salutation" },
  ],
  root: group("ra-verse", "verse", translation, [
    group(
      "ra-pada12",
      "phrase",
      "to Rāma, Rāmabhadra, Rāmacandra, the Creator",
      [
        word("ra-ramaya", "to Rāma", [
          ["रा", "rā"],
          ["मा", "mā"],
          ["य", "ya"],
        ]),
        group("ra-bhadra", "phrase", "to Rāmabhadra", [
          word("ra-rama1", "Rāma", [["रा", "rā"], ["म", "ma"]], { trailing: "" }),
          word("ra-bhadraya", "to the auspicious / protective", [
            ["भ", "bha"],
            ["द्रा", "drā"],
            ["य", "ya"],
          ]),
        ]),
        group("ra-candra", "phrase", "to Rāmacandra", [
          word("ra-rama2", "Rāma", [["रा", "rā"], ["म", "ma"]], { trailing: "" }),
          word("ra-candraya", "to the moon-like", [
            ["च", "ca"],
            ["न्द्रा", "ndrā"],
            ["य", "ya"],
          ]),
        ]),
        word("ra-vedhase", "to the Vidhātā / creator", [
          ["वे", "ve"],
          ["ध", "dha"],
          ["से", "se"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "ra-pada34",
      "phrase",
      "to the lord of the Raghus, the Lord, husband of Sītā — salutation",
      [
        group("ra-raghu", "phrase", "to the lord of the Raghus", [
          word("ra-raghu-w", "Raghu", [["र", "ra"], ["घु", "ghu"]], { trailing: "" }),
          word("ra-nathaya1", "to the lord", [
            ["ना", "nā"],
            ["था", "thā"],
            ["य", "ya"],
          ]),
        ]),
        word("ra-nathaya2", "to the lord / protector", [
          ["ना", "nā"],
          ["था", "thā"],
          ["य", "ya"],
        ]),
        word("ra-sitayah", "of Sītā", [
          ["सी", "sī"],
          ["ता", "tā"],
          ["याः", "yāḥ"],
        ]),
        word("ra-pataye", "to the husband", [
          ["प", "pa"],
          ["त", "ta"],
          ["ये", "ye"],
        ]),
        word("ra-namah", "salutation", [["न", "na"], ["मः", "maḥ"]], {
          trailing: " ॥",
        }),
      ],
    ),
  ]),
};
