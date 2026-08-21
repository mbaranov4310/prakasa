import { group, word } from "../lib/span";
import type { Chapter } from "../types";

function om(id: string) {
  return word(id, "primordial sound", [["ॐ", "oṃ"]]);
}

function tarpayami(id: string, options?: { last?: boolean }) {
  return word(
    id,
    "I offer / I satiate",
    [
      ["त", "ta"],
      ["र्प", "rpa"],
      ["या", "yā"],
      ["मि", "mi"],
    ],
    options?.last ? { trailing: " ।" } : { trailing: " ।", lineBreakAfter: true },
  );
}

const translation =
  "After purification through Ācamanam, we perform Sandhyāṅga Tarpanam. Tarpanam means offering with gratitude. Here, we offer water and remembrance to: Sandhyā – the sacred meeting of night and day; Gāyatrī – the divine mother of wisdom; Brāhmī – the power of pure knowledge; Nimṛjī – the force that washes away inner impurities. This step completes the inner alignment before the main Sandhyā worship.";

export const sandhyangaTarpana: Chapter = {
  id: "sandhyanga-tarpana",
  titleDev: "सन्ध्याङ्ग तर्पणम्",
  titleIast: "sandhyāṅga tarpaṇam",
  titleEn: "Sandhyāṅga tarpaṇa",
  status: "ready",
  translation,
  glossary: [
    { term: "tarpayāmi", meaning: "I offer / I satiate" },
    { term: "sandhyāṃ", meaning: "Sandhyā (here: the meeting of night and day)" },
    { term: "gāyatrīṃ", meaning: "Gāyatrī (here: mother of wisdom)" },
    { term: "brāhmīṃ", meaning: "Brāhmī (here: the power of knowledge)" },
    { term: "nimṛjīṃ", meaning: "Nimṛjī (here: she who wipes away)" },
  ],
  root: group("st-tarpana", "verse", "", [
    group("st-sandhya", "sentence", "I offer tarpaṇa to Sandhyā", [
      om("st-om-sandhya"),
      word("st-sandhyam", "Sandhyā (here: the meeting of night and day)", [
        ["स", "sa"],
        ["न्ध्यां", "ndhyāṃ"],
      ]),
      tarpayami("st-tarpayami-sandhya"),
    ]),
    group("st-gayatri", "sentence", "I offer tarpaṇa to Gāyatrī", [
      om("st-om-gayatri"),
      word("st-gayatrim", "Gāyatrī (here: mother of wisdom)", [
        ["गा", "gā"],
        ["य", "ya"],
        ["त्रीं", "trīṃ"],
      ]),
      tarpayami("st-tarpayami-gayatri"),
    ]),
    group("st-brahmi", "sentence", "I offer tarpaṇa to Brāhmī", [
      om("st-om-brahmi"),
      word("st-brahmim", "Brāhmī (here: the power of knowledge)", [
        ["ब्रा", "brā"],
        ["ह्मीं", "hmīṃ"],
      ]),
      tarpayami("st-tarpayami-brahmi"),
    ]),
    group("st-nimrji", "sentence", "I offer tarpaṇa to Nimṛjī", [
      om("st-om-nimrji"),
      word("st-nimrjim", "Nimṛjī (here: she who wipes away)", [
        ["नि", "ni"],
        ["मृ", "mṛ"],
        ["जीं", "jīṃ"],
      ]),
      tarpayami("st-tarpayami-nimrji", { last: true }),
    ]),
  ]),
};
