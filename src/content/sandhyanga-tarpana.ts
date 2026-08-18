import { group, word } from "../lib/span";
import type { Chapter } from "../types";
import { acamana } from "./acamana";

function om(id: string) {
  return word(id, "primordial sound", [["ॐ", "oṃ"]]);
}

function tarpayami(id: string, options?: { last?: boolean }) {
  return word(
    id,
    "",
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

const acamanaRoot = acamana.root!;

export const sandhyangaTarpana: Chapter = {
  id: "sandhyanga-tarpana",
  titleDev: "आचमनम्, सन्ध्याङ्ग तर्पणम्",
  titleIast: "ācamanam, sandhyāṅga tarpaṇam",
  titleEn: "Ācamana, Sandhyāṅga tarpaṇa",
  status: "ready",
  translation,
  glossary: [],
  root: group("st-verse", "verse", translation, [
    acamanaRoot,
    group(
      "st-tarpana",
      "verse",
      "Here, we offer water and remembrance to: Sandhyā – the sacred meeting of night and day; Gāyatrī – the divine mother of wisdom; Brāhmī – the power of pure knowledge; Nimṛjī – the force that washes away inner impurities.",
      [
        group("st-sandhya", "sentence", "the sacred meeting of night and day", [
          om("st-om-sandhya"),
          word("st-sandhyam", "the sacred meeting of night and day", [
            ["स", "sa"],
            ["न्ध्यां", "ndhyāṃ"],
          ]),
          tarpayami("st-tarpayami-sandhya"),
        ]),
        group("st-gayatri", "sentence", "the divine mother of wisdom", [
          om("st-om-gayatri"),
          word("st-gayatrim", "the divine mother of wisdom", [
            ["गा", "gā"],
            ["य", "ya"],
            ["त्रीं", "trīṃ"],
          ]),
          tarpayami("st-tarpayami-gayatri"),
        ]),
        group("st-brahmi", "sentence", "the power of pure knowledge", [
          om("st-om-brahmi"),
          word("st-brahmim", "the power of pure knowledge", [
            ["ब्रा", "brā"],
            ["ह्मीं", "hmīṃ"],
          ]),
          tarpayami("st-tarpayami-brahmi"),
        ]),
        group(
          "st-nimrji",
          "sentence",
          "the force that washes away inner impurities",
          [
            om("st-om-nimrji"),
            word("st-nimrjim", "the force that washes away inner impurities", [
              ["नि", "ni"],
              ["मृ", "mṛ"],
              ["जीं", "jīṃ"],
            ]),
            tarpayami("st-tarpayami-nimrji", { last: true }),
          ],
        ),
      ],
    ),
  ]),
};
