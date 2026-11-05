import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

const translation =
  "At the tip of the hands dwells Lakṣmī, in the middle Sarasvatī, and at the base Govinda. In the morning one looks at the hands.";

export const karagre: Chapter = {
  id: "karagre",
  titleDev: "कराग्रे वसते",
  titleIast: "karāgre vasate",
  titleEn: "Looking at the hands",
  status: "ready",
  translation,
  glossary: [
    { term: "karāgra", meaning: "tip of the hand" },
    { term: "vasate", meaning: "dwells" },
    { term: "lakṣmī", meaning: "Lakṣmī" },
    { term: "karamadhya", meaning: "middle of the hand" },
    { term: "sarasvatī", meaning: "Sarasvatī" },
    { term: "karamūla", meaning: "base of the hand" },
    { term: "govinda", meaning: "Govinda" },
    { term: "prabhāta", meaning: "morning" },
    { term: "karadarśana", meaning: "looking at the hands" },
  ],
  root: group("kg-verse", "verse", translation, [
    group("kg-palms", "sentence", "At the tip of the hands dwells Lakṣmī, and in the middle Sarasvatī.", [
      word("kg-karagre", "at the tip of the hand", [
        ["क", "ka"],
        ["रा", "rā"],
        ["ग्रे", "gre"],
      ]),
      word("kg-vasate", "dwells", [
        ["व", "va"],
        ["स", "sa"],
        ["ते", "te"],
      ]),
      word("kg-laksmi", "Lakṣmī", [
        ["ल", "la"],
        ["क्ष्मीः", "kṣmīḥ"],
      ]),
      word("kg-madhye", "in the middle of the hand", [
        ["क", "ka"],
        ["र", "ra"],
        ["म", "ma"],
        ["ध्ये", "dhye"],
      ]),
      word("kg-sarasvati", "Sarasvatī", [
        ["स", "sa"],
        ["र", "ra"],
        ["स्व", "sva"],
        ["ती", "tī"],
      ], { trailing: " ।", lineBreakAfter: true }),
    ]),
    group("kg-morning", "sentence", "At the base dwells Govinda. In the morning one looks at the hands.", [
      word("kg-mule", "at the base of the hand", [
        ["क", "ka"],
        ["र", "ra"],
        ["मू", "mū"],
        ["ले", "le"],
      ]),
      word("kg-tu", "and", [["तु", "tu"]]),
      word("kg-govinda", "Govinda", [
        ["गो", "go"],
        ["वि", "vi"],
        ["न्दः", "ndaḥ"],
      ]),
      word("kg-prabhate", "in the morning", [
        ["प्र", "pra"],
        ["भा", "bhā"],
        ["ते", "te"],
      ]),
      word("kg-darsanam", "looking at the hands", [
        ["क", "ka"],
        ["र", "ra"],
        ["द", "da"],
        ["र्श", "rśa"],
        ["नं", "naṃ"],
      ], { trailing: " ॥" }),
    ]),
  ]),
};
