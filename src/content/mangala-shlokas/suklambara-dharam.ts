import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "One should meditate on Viṣṇu, wearing white clothes, moon-colored, four-armed, and pleasant-faced, for the calming of all obstacles.";

export const suklambaraDharam: Chapter = {
  id: "suklambara-dharam",
  titleDev: "शुक्लाम्बरधरं",
  titleIast: "śuklāmbaradharaṃ",
  titleEn: "Wearing white clothes",
  status: "ready",
  translation,
  glossary: [
    { term: "śuklāmbaradhara", meaning: "wearing white clothes" },
    { term: "viṣṇu", meaning: "Viṣṇu" },
    { term: "śaśivarṇa", meaning: "moon-colored" },
    { term: "caturbhuja", meaning: "four-armed" },
    { term: "prasannavadana", meaning: "pleasant-faced" },
    { term: "dhyāyet", meaning: "one should meditate" },
    { term: "sarvavighnopaśānti", meaning: "calming of all obstacles" },
  ],
  root: group("sb-verse", "verse", translation, [
    group("sb-form", "sentence", "Viṣṇu, wearing white clothes, moon-colored, four-armed.", [
      word("sb-sukla", "wearing white clothes", [
        ["शु", "śu"],
        ["क्ला", "klā"],
        ["म्ब", "mba"],
        ["र", "ra"],
        ["ध", "dha"],
        ["रं", "raṃ"],
      ]),
      word("sb-visnum", "Viṣṇu", [
        ["वि", "vi"],
        ["ष्णुं", "ṣṇuṃ"],
      ]),
      word("sb-sasi", "moon-colored", [
        ["श", "śa"],
        ["शि", "śi"],
        ["व", "va"],
        ["र्णं", "rṇaṃ"],
      ]),
      word("sb-catur", "four-armed", [
        ["च", "ca"],
        ["तु", "tu"],
        ["र्भु", "rbhu"],
        ["जं", "jaṃ"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("sb-meditate", "sentence", "One should meditate on the pleasant-faced one, for the calming of all obstacles.", [
      word("sb-prasanna", "pleasant-faced", [
        ["प्र", "pra"],
        ["स", "sa"],
        ["न्न", "nna"],
        ["व", "va"],
        ["द", "da"],
        ["नं", "naṃ"],
      ]),
      word("sb-dhyayet", "one should meditate", [
        ["ध्या", "dhyā"],
        ["ये", "ye"],
        ["त्", "t"],
      ]),
      word("sb-sarva", "for the calming of all obstacles", [
        ["स", "sa"],
        ["र्व", "rva"],
        ["वि", "vi"],
        ["घ्नो", "ghno"],
        ["प", "pa"],
        ["शान्", "śān"],
        ["त", "ta"],
        ["ये", "ye"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
