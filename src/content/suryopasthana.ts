import { group, word } from "../lib/span";
import type { Chapter } from "../types";

const translation =
  "The Sūryopasthāna mantra teaches a profound truth: The Sun that rises and sets is not merely a planet. It is Brahman itself, the visible form of cosmic intelligence. One who contemplates this truth attains completeness and auspiciousness. This is where ritual turns into realization.";

export const suryopasthana: Chapter = {
  id: "suryopasthana",
  titleDev: "सूर्योपस्थानम्",
  titleIast: "sūryopasthānam",
  titleEn: "Sūryopasthāna",
  status: "ready",
  translation,
  glossary: [
    { term: "āditya", meaning: "Āditya / the sun" },
    { term: "brahman", meaning: "Brahman" },
    { term: "abhidhyāyan", meaning: "contemplating" },
    { term: "bhadram", meaning: "auspiciousness" },
    { term: "udyantam", meaning: "rising" },
    { term: "astam", meaning: "to setting" },
    { term: "yantam", meaning: "going" },
    { term: "kurvan", meaning: "doing" },
    { term: "brāhmaṇaḥ", meaning: "the brāhmaṇa" },
    { term: "vidvān", meaning: "the learned" },
    { term: "saḥ", meaning: "he" },
    { term: "sakalam", meaning: "all" },
    { term: "aśnute", meaning: "attains" },
    { term: "asau", meaning: "that (visible one)" },
    { term: "iti", meaning: "thus" },
    { term: "eva", meaning: "alone / indeed" },
    { term: "san", meaning: "being" },
    { term: "āpyeti", meaning: "he attains" },
  ],
  root: group("su-verse", "verse", "", [
    group(
      "su-sent-1",
      "sentence",
      "contemplating Āditya as he rises and goes to setting, the learned brāhmaṇa, doing this, attains all auspiciousness",
      [
        word("su-om", "primordial sound", [["ॐ", "oṃ"]]),
        group(
          "su-pada-1",
          "phrase",
          "contemplating Āditya as he rises and goes to setting, the learned brāhmaṇa, doing this, attains all auspiciousness",
          [
            word("su-udyantam", "rising", [
              ["उ", "u"],
              ["द्य", "dya"],
              ["न्त", "nta"],
              ["म्", "m"],
            ]),
            word("su-astam", "to setting", [
              ["अ", "a"],
              ["स्तं", "staṃ"],
            ]),
            word("su-yantam", "going", [
              ["य", "ya"],
              ["न्त", "nta"],
              ["म्", "m"],
            ]),
            word("su-adityam", "Āditya / the sun", [
              ["आ", "ā"],
              ["दि", "di"],
              ["त्य", "tya"],
              ["म्", "m"],
            ]),
            word("su-abhidhyayan", "contemplating", [
              ["अ", "a"],
              ["भि", "bhi"],
              ["ध्या", "dhyā"],
              ["य", "ya"],
              ["न्", "n"],
            ], { trailing: " ।", lineBreakAfter: true }),
            word("su-kurvan", "doing", [
              ["कु", "ku"],
              ["र्व", "rva"],
              ["न्", "n"],
            ]),
            word("su-brahmanah", "the brāhmaṇa", [
              ["ब्रा", "brā"],
              ["ह्म", "hma"],
              ["णो", "ṇo"],
            ]),
            word("su-vidvan", "the learned", [
              ["वि", "vi"],
              ["द्वा", "dvā"],
              ["न्", "n"],
            ], { trailing: " ।", lineBreakAfter: true }),
            word("su-sah", "he", [["सः", "saḥ"]]),
            word("su-sakalam", "all", [
              ["स", "sa"],
              ["क", "ka"],
              ["लं", "laṃ"],
            ]),
            word("su-bhadram", "auspiciousness", [
              ["भ", "bha"],
              ["द्र", "dra"],
              ["म्", "m"],
            ]),
            word("su-asnute", "attains", [
              ["अ", "a"],
              ["श्नु", "śnu"],
              ["ते", "te"],
            ], { trailing: " ॥", lineBreakAfter: true }),
          ],
        ),
      ],
    ),
    group(
      "su-sent-2",
      "sentence",
      "that Āditya is Brahman — thus",
      [
        group("su-pada-2", "phrase", "that Āditya is Brahman — thus", [
          word("su-asau-1", "that (visible one)", [
            ["अ", "a"],
            ["सौ", "sau"],
          ]),
          word("su-adityah-1", "Āditya / the sun", [
            ["आ", "ā"],
            ["दि", "di"],
            ["त्यः", "tyaḥ"],
          ]),
          word("su-brahma-1", "Brahman", [
            ["ब्र", "bra"],
            ["ह्म", "hma"],
          ]),
          word("su-iti", "thus", [
            ["इ", "i"],
            ["ति", "ti"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ]),
      ],
    ),
    group(
      "su-sent-3",
      "sentence",
      "being Brahman alone, he attains Brahman, who knows thus",
      [
        group("su-pada-3", "phrase", "being Brahman alone, he attains Brahman, who knows thus", [
          word("su-brahma-2", "Brahman", [
            ["ब्र", "bra"],
            ["ह्म", "hma"],
          ]),
          word("su-eva", "alone / indeed", [
            ["ए", "e"],
            ["व", "va"],
          ]),
          word("su-san", "being", [
            ["स", "sa"],
            ["न्", "n"],
          ]),
          word("su-brahma-3", "Brahman", [
            ["ब्र", "bra"],
            ["ह्म", "hma"],
          ]),
          word("su-apyeti", "he attains", [
            ["आ", "ā"],
            ["प्ये", "pye"],
            ["ति", "ti"],
          ]),
          word("su-yah", "who", [["यः", "yaḥ"]]),
          word("su-evam", "thus", [
            ["ए", "e"],
            ["वम्", "vam"],
          ]),
          word("su-veda", "knows", [
            ["वे", "ve"],
            ["द", "da"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ]),
      ],
    ),
    group(
      "su-sent-4",
      "sentence",
      "that Āditya is Brahman",
      [
        group("su-pada-4", "phrase", "that Āditya is Brahman", [
          word("su-asau-2", "that (visible one)", [
            ["अ", "a"],
            ["सौ", "sau"],
          ]),
          word("su-adityah-2", "Āditya / the sun", [
            ["आ", "ā"],
            ["दि", "di"],
            ["त्यः", "tyaḥ"],
          ]),
          word("su-brahma-4", "Brahman", [
            ["ब्र", "bra"],
            ["ह्म", "hma"],
          ], { trailing: " ॥" }),
        ]),
      ],
    ),
  ]),
};
