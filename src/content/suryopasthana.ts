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
    { term: "āditya", meaning: "the Sun as cosmic order" },
    { term: "brahman", meaning: "the one infinite reality" },
    { term: "abhidhyāna", meaning: "steady contemplation" },
    { term: "bhadram", meaning: "complete well-being" },
    { term: "udyantam", meaning: "rising" },
    { term: "astaṃ yantam", meaning: "going to setting" },
    { term: "kurvan", meaning: "performing (the act, here the circumambulation)" },
    { term: "brāhmaṇaḥ", meaning: "the brāhmaṇa" },
    { term: "vidvān", meaning: "the learned one" },
    { term: "saḥ", meaning: "he" },
    { term: "sakalaṃ", meaning: "all, entire" },
    { term: "aśnute", meaning: "attains, enjoys" },
    { term: "asau", meaning: "this, that visible one" },
    { term: "iti", meaning: "“thus”" },
    { term: "brahmaiva san", meaning: "being Brahman alone" },
    { term: "brahmāpyeti", meaning: "he reaches/attains Brahman" },
    { term: "ya evam veda", meaning: "whoever knows thus" },
  ],
  root: group("su-verse", "verse", translation, [
    group(
      "su-sent-1",
      "sentence",
      "The Sun that rises and sets is not merely a planet. It is Brahman itself, the visible form of cosmic intelligence.",
      [
        word("su-om", "primordial sound", [["ॐ", "oṃ"]]),
        word("su-udyantam", "rising", [
          ["उ", "u"],
          ["द्य", "dya"],
          ["न्त", "nta"],
          ["म्", "m"],
        ]),
        word("su-astam", "going to setting", [
          ["अ", "a"],
          ["स्तं", "staṃ"],
        ]),
        word("su-yantam", "going to setting", [
          ["य", "ya"],
          ["न्त", "nta"],
          ["म्", "m"],
        ]),
        word("su-adityam", "the Sun as cosmic order", [
          ["आ", "ā"],
          ["दि", "di"],
          ["त्य", "tya"],
          ["म्", "m"],
        ]),
        word("su-abhidhyayan", "steady contemplation", [
          ["अ", "a"],
          ["भि", "bhi"],
          ["ध्या", "dhyā"],
          ["य", "ya"],
          ["न्", "n"],
        ], { trailing: " ।", lineBreakAfter: true }),
        word("su-kurvan", "performing (the act, here the circumambulation)", [
          ["कु", "ku"],
          ["र्व", "rva"],
          ["न्", "n"],
        ]),
        word("su-brahmano", "the brāhmaṇa", [
          ["ब्रा", "brā"],
          ["ह्म", "hma"],
          ["णो", "ṇo"],
        ]),
        word("su-vidvan", "the learned one", [
          ["वि", "vi"],
          ["द्वा", "dvā"],
          ["न्", "n"],
        ], { trailing: " ।", lineBreakAfter: true }),
        word("su-sah", "he", [["सः", "saḥ"]]),
        word("su-sakalam", "all, entire", [
          ["स", "sa"],
          ["क", "ka"],
          ["लं", "laṃ"],
        ]),
        word("su-bhadram", "complete well-being", [
          ["भ", "bha"],
          ["द्र", "dra"],
          ["म्", "m"],
        ]),
        word("su-asnute", "attains, enjoys", [
          ["अ", "a"],
          ["श्नु", "śnu"],
          ["ते", "te"],
        ], { trailing: " ॥", lineBreakAfter: true }),
      ],
    ),
    group(
      "su-sent-2",
      "sentence",
      "It is Brahman itself, the visible form of cosmic intelligence.",
      [
        word("su-asavadityah-1", "the Sun as cosmic order", [
          ["अ", "a"],
          ["सा", "sā"],
          ["वा", "vā"],
          ["दि", "di"],
          ["त्यः", "tyaḥ"],
        ]),
        word("su-brahme", "the one infinite reality", [
          ["ब्र", "bra"],
          ["ह्मे", "hme"],
        ]),
        word("su-iti", "“thus”", [["ति", "ti"]], {
          trailing: " ॥",
          lineBreakAfter: true,
        }),
      ],
    ),
    group(
      "su-sent-3",
      "sentence",
      "One who contemplates this truth attains completeness and auspiciousness.",
      [
        group("su-brahmaiva-san", "phrase", "being Brahman alone", [
          word("su-brahmaiva", "being Brahman alone", [
            ["ब्र", "bra"],
            ["ह्मै", "hmai"],
            ["व", "va"],
          ]),
          word("su-san", "being Brahman alone", [
            ["स", "sa"],
            ["न्", "n"],
          ]),
        ]),
        word("su-brahmapyeti", "he reaches/attains Brahman", [
          ["ब्र", "bra"],
          ["ह्मा", "hmā"],
          ["प्ये", "pye"],
          ["ति", "ti"],
        ]),
        group("su-ya-evam-veda", "phrase", "whoever knows thus", [
          word("su-ya", "whoever knows thus", [["य", "ya"]]),
          word("su-evam", "whoever knows thus", [
            ["ए", "e"],
            ["वम्", "vam"],
          ]),
          word("su-veda", "whoever knows thus", [
            ["वे", "ve"],
            ["द", "da"],
          ], { trailing: " ॥", lineBreakAfter: true }),
        ]),
      ],
    ),
    group(
      "su-sent-4",
      "sentence",
      "It is Brahman itself, the visible form of cosmic intelligence.",
      [
        word("su-asavadityah-2", "the Sun as cosmic order", [
          ["अ", "a"],
          ["सा", "sā"],
          ["वा", "vā"],
          ["दि", "di"],
          ["त्यः", "tyaḥ"],
        ]),
        word("su-brahma", "the one infinite reality", [
          ["ब्र", "bra"],
          ["ह्म", "hma"],
        ], { trailing: " ॥" }),
      ],
    ),
  ]),
};
