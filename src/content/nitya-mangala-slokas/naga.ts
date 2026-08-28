import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Ananta, Vāsuki, Śeṣa, Padmanābha and Kambala; Śaṅkhapāla, Dhṛtarāṣṭra, Takṣaka, and likewise Kāliya.";

export const naga: Chapter = {
  id: "naga",
  titleDev: "नागः",
  titleIast: "nāgaḥ",
  titleEn: "Nāga",
  status: "ready",
  translation,
  glossary: [
    { term: "anantam", meaning: "Ananta" },
    { term: "vāsukim", meaning: "Vāsuki" },
    { term: "śeṣam", meaning: "Śeṣa" },
    { term: "padma", meaning: "lotus" },
    { term: "nābham", meaning: "navel" },
    { term: "ca", meaning: "and" },
    { term: "kambalam", meaning: "Kambala" },
    { term: "śaṅkha", meaning: "conch" },
    { term: "pālam", meaning: "protector" },
    { term: "dhṛta", meaning: "held" },
    { term: "rāṣṭram", meaning: "kingdom" },
    { term: "takṣakam", meaning: "Takṣaka" },
    { term: "kāliyam", meaning: "Kāliya" },
    { term: "tathā", meaning: "and / likewise" },
  ],
  root: group("ng-verse", "verse", translation, [
    group("ng-pada12", "phrase", "Ananta, Vāsuki, Śeṣa, Padmanābha and Kambala", [
      word("ng-anantam", "Ananta", [
        ["अ", "a"],
        ["न", "na"],
        ["न्तं", "ntaṃ"],
      ]),
      word("ng-vasukim", "Vāsuki", [
        ["वा", "vā"],
        ["सु", "su"],
        ["किं", "kiṃ"],
      ]),
      word("ng-sesam", "Śeṣa", [["शे", "śe"], ["षं", "ṣaṃ"]]),
      group("ng-padmanabha", "phrase", "Padmanābha (a nāga name)", [
        word("ng-padma", "lotus", [["प", "pa"], ["द्म", "dma"]], { trailing: "" }),
        word("ng-nabham", "navel", [
          ["ना", "nā"],
          ["भं", "bhaṃ"],
        ]),
      ]),
      word("ng-ca", "and", [["च", "ca"]]),
      word("ng-kambalam", "Kambala", [
        ["क", "ka"],
        ["म्ब", "mba"],
        ["लम्", "lam"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("ng-pada34", "phrase", "Śaṅkhapāla, Dhṛtarāṣṭra, Takṣaka, and likewise Kāliya", [
      group("ng-sankhapala", "phrase", "Śaṅkhapāla", [
        word("ng-sankha", "conch", [["शङ्", "śaṅ"], ["ख", "kha"]], { trailing: "" }),
        word("ng-palam", "protector", [
          ["पा", "pā"],
          ["लं", "laṃ"],
        ]),
      ]),
      group("ng-dhrtarastra", "phrase", "Dhṛtarāṣṭra (the nāga)", [
        word("ng-dhrta", "held", [["धृ", "dhṛ"], ["त", "ta"]], { trailing: "" }),
        word("ng-rastram", "kingdom", [
          ["रा", "rā"],
          ["ष्ट्रं", "ṣṭraṃ"],
        ]),
      ]),
      word("ng-taksakam", "Takṣaka", [
        ["त", "ta"],
        ["क्ष", "kṣa"],
        ["कं", "kaṃ"],
      ]),
      word("ng-kaliyam", "Kāliya", [
        ["का", "kā"],
        ["लि", "li"],
        ["यं", "yaṃ"],
      ]),
      word("ng-tatha", "and / likewise", [["त", "ta"], ["था", "thā"]], {
        trailing: " ॥",
      }),
    ]),
  ]),
};
