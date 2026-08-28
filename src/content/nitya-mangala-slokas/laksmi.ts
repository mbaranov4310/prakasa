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
    { term: "mahā", meaning: "great" },
    { term: "māye", meaning: "O Māyā" },
    { term: "śrī", meaning: "Śrī" },
    { term: "pīṭhe", meaning: "O you on the seat" },
    { term: "sura", meaning: "of the gods" },
    { term: "pūjite", meaning: "O worshipped one" },
    { term: "śaṅkha", meaning: "conch" },
    { term: "cakra", meaning: "discus" },
    { term: "gadā", meaning: "mace" },
    { term: "haste", meaning: "O you who hold in hand" },
    { term: "lakṣmi", meaning: "O Lakṣmī" },
  ],
  root: group("lk-verse", "verse", translation, [
    group("lk-pada1", "phrase", "salutations to you, O Mahāmāyā, on the seat of Śrī, worshipped by the gods", [
      word("lk-namah", "salutation", [["न", "na"], ["म", "ma"], ["स्ते", "ste"]], {
        trailing: "",
      }),
      word("lk-astu", "let there be", [["ऽस्तु", "’stu"]]),
      group("lk-mahamaya", "phrase", "O great Māyā", [
        word("lk-maha1", "great", [["म", "ma"], ["हा", "hā"]], { trailing: "" }),
        word("lk-maye", "O Māyā", [["मा", "mā"], ["ये", "ye"]]),
      ]),
      group("lk-seat", "phrase", "O you who dwell on the seat of Śrī", [
        word("lk-sri", "Śrī", [["श्री", "śrī"]], { trailing: "" }),
        word("lk-pithe", "O you on the seat", [["पी", "pī"], ["ठे", "ṭhe"]]),
      ]),
      group("lk-worshipped", "phrase", "O you worshipped by the gods", [
        word("lk-sura", "of the gods", [["सु", "su"], ["र", "ra"]], { trailing: "" }),
        word("lk-pujite", "O worshipped one", [
          ["पू", "pū"],
          ["जि", "ji"],
          ["ते", "te"],
        ], { trailing: " ।", lineBreakAfter: true }),
      ]),
    ]),
    group("lk-pada2", "phrase", "O Mahālakṣmī who hold conch, discus, and mace — salutations to you", [
      group("lk-weapons", "phrase", "O you who hold conch, discus, and mace", [
        word("lk-sankha", "conch", [["शङ्", "śaṅ"], ["ख", "kha"]], { trailing: "" }),
        word("lk-cakra", "discus", [["च", "ca"], ["क्र", "kra"]], { trailing: "" }),
        word("lk-gada", "mace", [["ग", "ga"], ["दा", "dā"]], { trailing: "" }),
        word("lk-haste", "O you who hold in hand", [["ह", "ha"], ["स्ते", "ste"]]),
      ]),
      group("lk-name", "phrase", "O Mahālakṣmī", [
        word("lk-maha2", "great", [["म", "ma"], ["हा", "hā"]], { trailing: "" }),
        word("lk-laksmi", "O Lakṣmī", [["ल", "la"], ["क्ष्मि", "kṣmi"]]),
      ]),
      word("lk-namo", "salutation", [["न", "na"], ["मो", "mo"]], { trailing: "" }),
      word("lk-stu", "let there be", [["ऽस्तु", "’stu"]]),
      word("lk-te", "to you", [["ते", "te"]], { trailing: " ॥" }),
    ]),
  ]),
};
