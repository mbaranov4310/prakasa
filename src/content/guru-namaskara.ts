import { group, word } from "../lib/span";
import type { Chapter } from "../types";

export const guruNamaskara: Chapter = {
  id: "guru-namaskara",
  titleDev: "ॐ श्री गुरुभ्यो नमः",
  titleIast: "oṃ śrī gurubhyo namaḥ",
  titleEn: "Salutation to the Gurus",
  status: "ready",
  translation:
    "Salutations to the revered lineage of Gurus. (Offering respect to all teachers — physical, scriptural, and inner.)",
  glossary: [
    { term: "oṃ", meaning: "primordial sound" },
    { term: "śrī gurubhyo namaḥ", meaning: "salutations to the lineage of Gurus" },
    { term: "śrī", meaning: "auspicious; an honorific of reverence" },
    { term: "gurubhyaḥ", meaning: "to the Gurus (the lineage of teachers)" },
    { term: "namaḥ", meaning: "reverence, salutation" },
  ],
  root: group("g-line", "sentence", "Salutations to the revered lineage of Gurus.", [
    word("g-om", "primordial sound", [["ॐ", "oṃ"]]),
    group("g-salutations", "phrase", "salutations to the lineage of Gurus", [
      word("g-sri", "auspicious; an honorific of reverence", [["श्री", "śrī"]]),
      word("g-gurubhyo", "to the Gurus (the lineage of teachers)", [
        ["गु", "gu"],
        ["रु", "ru"],
        ["भ्यो", "bhyo"],
      ]),
      word("g-namah", "reverence, salutation", [
        ["न", "na"],
        ["मः", "maḥ"],
      ], { trailing: "" }),
    ]),
  ]),
};
