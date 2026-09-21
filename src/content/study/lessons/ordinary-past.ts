import type { LessonBlock } from "../catalog";

export const ordinaryPast: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as the imperfect, anadyatana-bhūta (“past action not of today”), or laṅ. Technically it marks past action before today; in practice it covers any past action.",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो लङ्काम् अगच्छत्",
        iast: "rāmo laṅkām agacchat",
        note: "Rama went to Lanka",
      },
      {
        dev: "रामः सीताम् अपश्यत्",
        iast: "rāmaḥ sītām apaśyat",
        note: "Rama saw Sita",
      },
    ],
  },
  {
    type: "p",
    text: "Each verb begins with a-: gacchati “goes” becomes agacchat “went.” Many past tense-moods add this same a- before the stem.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गच्छति", iast: "gacchati", note: "goes" },
      { dev: "अगच्छत्", iast: "agacchat", note: "went" },
    ],
  },
  { type: "h2", text: "Endings with naya" },
  {
    type: "p",
    text: "Ordinary-past forms of the stem naya, “lead”:",
  },
  {
    type: "table",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: {
          en: "3rd",
          dev: "प्रथमपुरुष",
          iast: "prathamapuruṣa",
          cue: "he, she, it / they",
        },
        cells: [
          { dev: "अनयत्", iast: "anayat" },
          { dev: "अनयताम्", iast: "anayatām" },
          { dev: "अनयन्", iast: "anayan" },
        ],
      },
      {
        label: {
          en: "2nd",
          dev: "मध्यमपुरुष",
          iast: "madhyamapuruṣa",
          cue: "you",
        },
        cells: [
          { dev: "अनयः", iast: "anayaḥ" },
          { dev: "अनयतम्", iast: "anayatam" },
          { dev: "अनयत", iast: "anayata" },
        ],
      },
      {
        label: {
          en: "1st",
          dev: "उत्तमपुरुष",
          iast: "uttamapuruṣa",
          cue: "I / we",
        },
        cells: [
          { dev: "अनयम्", iast: "anayam" },
          { dev: "अनयाव", iast: "anayāva" },
          { dev: "अनयाम", iast: "anayāma" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Many endings are shortened present endings. Those that end in -i lose that -i; those that end in visarga lose the visarga:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नयति → अनयत्", iast: "nayati → anayat", note: "loses -i" },
      { dev: "नयसि → अनयः", iast: "nayasi → anayaḥ", note: "loses -i" },
      { dev: "नयामि → अनयम्", iast: "nayāmi → anayam", note: "loses -i" },
      { dev: "नयन्ति → अनयन्", iast: "nayanti → anayan", note: "loses -i" },
      { dev: "नयावः → अनयाव", iast: "nayāvaḥ → anayāva", note: "loses visarga" },
      { dev: "नयामः → अनयाम", iast: "nayāmaḥ → anayāma", note: "loses visarga" },
    ],
  },
  { type: "h2", text: "Verb prefixes" },
  {
    type: "p",
    text: "If the verb has an upasarga, that prefix comes before the past a-:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "परिगच्छति",
        iast: "parigacchati",
        note: "goes around",
      },
      {
        dev: "पर्यगच्छत्",
        iast: "paryagacchat",
        note: "went around",
      },
    ],
  },
  {
    type: "p",
    text: "In early Sanskrit the prefix could stand elsewhere in the sentence as an ordinary uninflected word. Later it almost always sits just before the verb and fuses with it:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "परि ग्रामम् अगच्छत्",
        iast: "pari grāmam agacchat",
        note: "He went around the village (prefix free)",
      },
      {
        dev: "परि अगच्छत् → पर्यगच्छत्",
        iast: "pari agacchat → paryagacchat",
        note: "fused as one word",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org ordinary-past page: names (imperfect / anadyatana-bhūta / laṅ); basic meaning with the Lanka and Sita examples; a- mark (gacchati → agacchat); full naya paradigm; shortened -i and visarga endings; prefix before a- (parigacchati → paryagacchat) with free vs fused placement. No extra stems.",
  },
];
