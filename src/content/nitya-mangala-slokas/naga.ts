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
    { term: "padmanābham", meaning: "Padmanābha (a nāga name)" },
    { term: "ca", meaning: "and" },
    { term: "kambalam", meaning: "Kambala" },
    { term: "śaṅkhapālam", meaning: "Śaṅkhapāla" },
    { term: "dhṛtarāṣṭram", meaning: "Dhṛtarāṣṭra (the nāga)" },
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
      word("ng-padmanabham", "Padmanābha (a nāga name)", [
        ["प", "pa"],
        ["द्म", "dma"],
        ["ना", "nā"],
        ["भं", "bhaṃ"],
      ]),
      word("ng-ca", "and", [["च", "ca"]]),
      word("ng-kambalam", "Kambala", [
        ["क", "ka"],
        ["म्ब", "mba"],
        ["लम्", "lam"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("ng-pada34", "phrase", "Śaṅkhapāla, Dhṛtarāṣṭra, Takṣaka, and likewise Kāliya", [
      word("ng-sankhapalam", "Śaṅkhapāla", [
        ["शङ्", "śaṅ"],
        ["ख", "kha"],
        ["पा", "pā"],
        ["लं", "laṃ"],
      ]),
      word("ng-dhrtarastram", "Dhṛtarāṣṭra (the nāga)", [
        ["धृ", "dhṛ"],
        ["त", "ta"],
        ["रा", "rā"],
        ["ष्ट्रं", "ṣṭraṃ"],
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
