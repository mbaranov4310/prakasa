import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "Salutations to you, O Mahāmāyā, who dwell on the seat of Śrī and are worshipped by the gods. O Mahālakṣmī, who hold conch, discus, and mace — salutations to you.";

export const laksmi: Chapter = {
  id: "laksmi",
  titleDev: "लक्ष्मी",
  titleIast: "lakṣmī",
  titleEn: "Lakṣmī",
  status: "ready",
  translation,
  glossary: [
    { term: "namaḥ", meaning: "salutation" },
    { term: "te", meaning: "to you" },
    { term: "astu", meaning: "let there be" },
    { term: "mahāmāye", meaning: "O great Māyā" },
    { term: "śrīpīṭhe", meaning: "O you who dwell on the seat of Śrī" },
    { term: "surapūjite", meaning: "O you worshipped by the gods" },
    { term: "śaṅkhacakragadāhaste", meaning: "O you who hold conch, discus, and mace" },
    { term: "mahālakṣmi", meaning: "O Mahālakṣmī" },
  ],
  root: group("lk-verse", "verse", translation, [
    group("lk-pada1", "phrase", "salutations to you, O Mahāmāyā, on the seat of Śrī, worshipped by the gods", [
      word("lk-namah", "salutation", [["न", "na"], ["म", "ma"], ["स्ते", "ste"]], { trailing: "" }),
      word("lk-astu", "let there be", [["ऽस्तु", "’stu"]]),
      word("lk-mahamaye", "O great Māyā", [
        ["म", "ma"],
        ["हा", "hā"],
        ["मा", "mā"],
        ["ये", "ye"],
      ]),
      word("lk-sripithe", "O you who dwell on the seat of Śrī", [
        ["श्री", "śrī"],
        ["पी", "pī"],
        ["ठे", "ṭhe"],
      ]),
      word("lk-surapujite", "O you worshipped by the gods", [
        ["सु", "su"],
        ["र", "ra"],
        ["पू", "pū"],
        ["जि", "ji"],
        ["ते", "te"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("lk-pada2", "phrase", "O Mahālakṣmī who hold conch, discus, and mace — salutations to you", [
      word("lk-sankha", "conch, discus, and mace in hand", [
        ["शङ्", "śaṅ"],
        ["ख", "kha"],
        ["च", "ca"],
        ["क्र", "kra"],
        ["ग", "ga"],
        ["दा", "dā"],
        ["ह", "ha"],
        ["स्ते", "ste"],
      ]),
      word("lk-mahalaksmi", "O Mahālakṣmī", [
        ["म", "ma"],
        ["हा", "hā"],
        ["ल", "la"],
        ["क्ष्मि", "kṣmi"],
      ]),
      word("lk-namo", "salutation", [["न", "na"], ["मो", "mo"]], { trailing: "" }),
      word("lk-stu", "let there be", [["ऽस्तु", "’stu"]]),
      word("lk-te", "to you", [["ते", "te"]], { trailing: " ॥" }),
    ]),
  ]),
};
