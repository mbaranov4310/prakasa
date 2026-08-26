import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "O Nārāyaṇī, you who are the auspiciousness of every auspicious thing, O benevolent Śivā, O accomplisher of every human aim, O refuge of those who come to you, O three-eyed Gaurī — salutations to you.";

export const durga: Chapter = {
  id: "durga",
  titleDev: "दुर्गा",
  titleIast: "durgā",
  titleEn: "Durgā",
  status: "ready",
  translation,
  glossary: [
    { term: "sarvamaṅgalamāṅgalye", meaning: "O you who are the auspiciousness of all that is auspicious" },
    { term: "śive", meaning: "O Śivā / O auspicious one" },
    { term: "sarvārthasādhike", meaning: "O you who accomplish all aims" },
    { term: "śaraṇye", meaning: "O you who are fit to take refuge in" },
    { term: "tryambake", meaning: "O three-eyed one" },
    { term: "gauri", meaning: "O Gaurī" },
    { term: "nārāyaṇi", meaning: "O Nārāyaṇī" },
    { term: "namaḥ", meaning: "salutation" },
    { term: "astu", meaning: "let it be" },
    { term: "te", meaning: "to you" },
  ],
  root: group("du-verse", "verse", translation, [
    group(
      "du-pada12",
      "phrase",
      "O you who are the auspiciousness of every auspicious thing, O Śivā, O accomplisher of every aim",
      [
        word("du-sarvamangala", "O you who are the auspiciousness of all that is auspicious", [
          ["स", "sa"],
          ["र्व", "rva"],
          ["मङ्", "maṅ"],
          ["ग", "ga"],
          ["ल", "la"],
          ["माङ्", "māṅ"],
          ["ग", "ga"],
          ["ल्ये", "lye"],
        ]),
        word("du-sive", "O Śivā / O auspicious one", [["शि", "śi"], ["वे", "ve"]]),
        word("du-sarvartha", "O you who accomplish all aims", [
          ["स", "sa"],
          ["र्वा", "rvā"],
          ["र्थ", "rtha"],
          ["सा", "sā"],
          ["धि", "dhi"],
          ["के", "ke"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ],
    ),
    group(
      "du-pada34",
      "phrase",
      "O refuge, O three-eyed Gaurī, O Nārāyaṇī — salutations to you",
      [
        word("du-saranye", "O you who are fit to take refuge in", [
          ["श", "śa"],
          ["र", "ra"],
          ["ण्ये", "ṇye"],
        ]),
        word("du-tryambake", "O three-eyed one", [
          ["त्र्य", "trya"],
          ["म्ब", "mba"],
          ["के", "ke"],
        ]),
        word("du-gauri", "O Gaurī", [["गौ", "gau"], ["रि", "ri"]]),
        word("du-narayani", "O Nārāyaṇī", [
          ["ना", "nā"],
          ["रा", "rā"],
          ["य", "ya"],
          ["णि", "ṇi"],
        ]),
        word("du-namo", "salutation", [["न", "na"], ["मो", "mo"]], { trailing: "" }),
        word("du-astu", "let it be", [["ऽस्तु", "’stu"]]),
        word("du-te", "to you", [["ते", "te"]], { trailing: " ॥" }),
      ],
    ),
  ]),
};
