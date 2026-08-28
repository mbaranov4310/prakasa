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
    { term: "sarva", meaning: "all / every" },
    { term: "maṅgala", meaning: "auspicious thing" },
    { term: "māṅgalye", meaning: "O you who are the auspiciousness" },
    { term: "śive", meaning: "O Śivā / O auspicious one" },
    { term: "artha", meaning: "aim / human aim" },
    { term: "sādhike", meaning: "O accomplisher" },
    { term: "śaraṇye", meaning: "O you who are fit to take refuge in" },
    { term: "tri", meaning: "three" },
    { term: "ambake", meaning: "O you with eyes" },
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
        group("du-auspicious", "phrase", "O you who are the auspiciousness of all that is auspicious", [
          word("du-sarva1", "all / every", [["स", "sa"], ["र्व", "rva"]], {
            trailing: "",
          }),
          word("du-mangala", "auspicious thing", [
            ["मङ्", "maṅ"],
            ["ग", "ga"],
            ["ल", "la"],
          ], { trailing: "" }),
          word("du-mangalye", "O you who are the auspiciousness", [
            ["माङ्", "māṅ"],
            ["ग", "ga"],
            ["ल्ये", "lye"],
          ]),
        ]),
        word("du-sive", "O Śivā / O auspicious one", [["शि", "śi"], ["वे", "ve"]]),
        group("du-aims", "phrase", "O you who accomplish all aims", [
          word("du-sarva2", "all / every", [["स", "sa"], ["र्वा", "rvā"]], {
            trailing: "",
          }),
          word("du-artha", "aim / human aim", [["र्थ", "rtha"]], { trailing: "" }),
          word("du-sadhike", "O accomplisher", [
            ["सा", "sā"],
            ["धि", "dhi"],
            ["के", "ke"],
          ], { trailing: " ।", lineBreakAfter: true }),
        ]),
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
        group("du-three-eyed", "phrase", "O three-eyed one", [
          word("du-tri", "three", [["त्र्य", "trya"]], { trailing: "" }),
          word("du-ambake", "O you with eyes", [
            ["म्ब", "mba"],
            ["के", "ke"],
          ]),
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
