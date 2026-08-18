import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const anantaMeaning =
  "Salutations to Ananta (the Infinite Lord), who has thousands of forms, thousands of feet, eyes, heads, thighs, and arms.";

const purusaMeaning =
  "Salutations to that eternal Purusha, who is praised by thousands of names, and who sustains thousands of crores of yugas (ages of time).";

const translation =
  "This chapter is a final salutation to Bhagavān (the Supreme Lord). The verse praises the Lord as Ananta — the Infinite One — whose form is beyond human counting and beyond time. “Salutations to Ananta (the Infinite Lord), who has thousands of forms, thousands of feet, eyes, heads, thighs, and arms. Salutations to that eternal Purusha, who is praised by thousands of names, and who sustains thousands of crores of yugas (ages of time).” This is a declaration that Bhagavān is: infinite in form; infinite in power; infinite in presence; infinite across time cycles. It reminds the practitioner that Sandhyāvandanam ultimately ends not in ritual alone, but in surrender to the Supreme Reality.";

export const bhagavanNamaskara: Chapter = {
  id: "bhagavan-namaskara",
  titleDev: "भगवन्नमस्कारः",
  titleIast: "bhagavan-namaskāraḥ",
  titleEn: "Bhagavan namaskāra",
  status: "ready",
  translation,
  glossary: [
    { term: "Bhagavān", meaning: "the Supreme Lord, full of divine powers" },
    { term: "Namah / Namo’stu", meaning: "salutations / I bow" },
    {
      term: "Ananta",
      meaning: "infinite, endless (also name of Ādiśeṣa / Viṣṇu)",
    },
    { term: "Sahasra", meaning: "thousand (symbolic of countless)" },
    { term: "Mūrti", meaning: "form / manifestation" },
    { term: "Pāda", meaning: "feet" },
    { term: "Akṣi", meaning: "eyes" },
    { term: "Śiras", meaning: "head" },
    { term: "Ūru", meaning: "thighs" },
    { term: "Bāhu", meaning: "arms" },
    {
      term: "Sahasra-nāma",
      meaning: "thousand names (countless divine names)",
    },
    { term: "Puruṣa", meaning: "cosmic being, Supreme Spirit" },
    { term: "Śāśvata", meaning: "eternal, unchanging" },
    { term: "Koṭi", meaning: "crore (10 million)" },
    { term: "Yuga", meaning: "cosmic age cycle" },
    { term: "Dhāriṇe", meaning: "sustainer / supporter / bearer" },
    { term: "sahasra-mūrtaye", meaning: "of a thousand forms" },
    {
      term: "sahasra-pādākṣi-śiroru-bāhave",
      meaning: "with a thousand feet, eyes, heads, thighs, and arms",
    },
    {
      term: "sahasra-koṭī-yuga-dhāriṇe",
      meaning:
        "to the bearer of innumerable aeons (literally “one who holds/ sustains thousands of crores of ages”)",
    },
  ],
  root: group("bn-verse", "verse", translation, [
    group("bn-ananta", "sentence", anantaMeaning, [
      word(
        "bn-namostvanantaya",
        "salutations / I bow; infinite, endless (also name of Ādiśeṣa / Viṣṇu)",
        [
          ["न", "na"],
          ["मो", "mo"],
          ["ऽस्त्व", "’stva"],
          ["न", "na"],
          ["न्ता", "ntā"],
          ["य", "ya"],
        ],
      ),
      word("bn-sahasramurtaye", "of a thousand forms", [
        ["स", "sa"],
        ["ह", "ha"],
        ["स्र", "sra"],
        ["मू", "mū"],
        ["र्त", "rta"],
        ["ये", "ye"],
      ], { lineBreakAfter: true }),
      word(
        "bn-sahasrapadaksisiro",
        "with a thousand feet, eyes, heads, thighs, and arms",
        [
          ["स", "sa"],
          ["ह", "ha"],
          ["स्र", "sra"],
          ["पा", "pā"],
          ["दा", "dā"],
          ["क्षि", "kṣi"],
          ["शि", "śi"],
          ["रो", "ro"],
          ["रु", "ru"],
          ["बा", "bā"],
          ["ह", "ha"],
          ["वे", "ve"],
        ],
        { trailing: " ।", lineBreakAfter: true },
      ),
    ]),
    group("bn-purusa", "sentence", purusaMeaning, [
      word(
        "bn-sahasranamne",
        "thousand names (countless divine names)",
        [
          ["स", "sa"],
          ["ह", "ha"],
          ["स्र", "sra"],
          ["ना", "nā"],
          ["म्ने", "mne"],
        ],
      ),
      word("bn-purusaya", "cosmic being, Supreme Spirit", [
        ["पु", "pu"],
        ["रु", "ru"],
        ["षा", "ṣā"],
        ["य", "ya"],
      ]),
      word("bn-sasvate", "eternal, unchanging", [
        ["शा", "śā"],
        ["श्व", "śva"],
        ["ते", "te"],
      ], { lineBreakAfter: true }),
      word(
        "bn-sahasrakotiyugadharine",
        "to the bearer of innumerable aeons (literally “one who holds/ sustains thousands of crores of ages”)",
        [
          ["स", "sa"],
          ["ह", "ha"],
          ["स्र", "sra"],
          ["को", "ko"],
          ["टी", "ṭī"],
          ["यु", "yu"],
          ["ग", "ga"],
          ["धा", "dhā"],
          ["रि", "ri"],
          ["णे", "ṇe"],
        ],
      ),
      word(
        "bn-namah",
        "salutations / I bow",
        [
          ["न", "na"],
          ["मः", "maḥ"],
        ],
        { trailing: " ॥" },
      ),
    ]),
  ]),
};
