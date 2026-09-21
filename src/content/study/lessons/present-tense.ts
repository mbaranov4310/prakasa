import type { LessonBlock } from "../catalog";

export const presentTense: LessonBlock[] = [
  {
    type: "p",
    text: "Also called the present indicative, vartamānaḥ (“occurring”), or laṭ. This is the first tense-mood these lessons cover, and traditionally the first one students learn.",
  },
  { type: "h2", text: "Basic meaning" },
  {
    type: "p",
    text: "Most often the present tense names what is happening now. English may choose “leads” or “is leading”; Sanskrit uses one form, and context picks the sense:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नयति।", iast: "nayati.", note: "(Someone) leads or is leading." },
      { dev: "चरति।", iast: "carati.", note: "(Someone) walks or is walking." },
    ],
  },
  {
    type: "p",
    text: "As a default tense it also covers habitual action:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अहं प्रतिदिनं पचामि।",
        iast: "ahaṃ pratidinaṃ pacāmi.",
        note: "I cook every day.",
      },
      {
        dev: "संजयः प्रतिवर्षं नगरं गच्छति।",
        iast: "saṃjayaḥ prativarṣaṃ nagaraṃ gacchati.",
        note: "Sanjaya goes to the city every year.",
      },
    ],
  },
  {
    type: "p",
    text: "It can mark an action that has just finished, or one that is about to happen:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "त्वम् कदा ग्रामम् आगच्छसि।",
        iast: "tvam kadā grāmam āgacchasi.",
        note: "When did you come to the village? (very recently)",
      },
      {
        dev: "अहं वनम् गच्छामि।",
        iast: "ahaṃ vanam gacchāmi.",
        note: "I (am just about to) go to the forest.",
      },
    ],
  },
  {
    type: "p",
    text: "In the first person it can also mean “let's”:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गच्छामः।", iast: "gacchāmaḥ.", note: "Let's (all) go." },
      {
        dev: "राजानं पृच्छावः।",
        iast: "rājānaṃ pṛcchāvaḥ.",
        note: "Let's (both) ask the king.",
      },
    ],
  },
  {
    type: "p",
    text: "Uninflected words can shift the basic sense. With sma, a present form often marks past time:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "सिंहो गुहायां निवसति स्म।",
        iast: "siṃho guhāyāṃ nivasati sma.",
        note: "The lion lived (or was living) in the cave.",
      },
    ],
  },
  { type: "h2", text: "Endings" },
  {
    type: "p",
    text: "Present-tense endings on the stem naya. Rows are person; columns are number. The grid is for seeing patterns, not for rote memorization.",
  },
  {
    type: "table",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd", dev: "प्रथमः", iast: "prathamaḥ", cue: "he, she, it, they" },
        cells: [
          { dev: "नयति", iast: "nayati" },
          { dev: "नयतः", iast: "nayataḥ" },
          { dev: "नयन्ति", iast: "nayanti" },
        ],
      },
      {
        label: { en: "2nd", dev: "मध्यमः", iast: "madhyamaḥ", cue: "you" },
        cells: [
          { dev: "नयसि", iast: "nayasi" },
          { dev: "नयथः", iast: "nayathaḥ" },
          { dev: "नयथ", iast: "nayatha" },
        ],
      },
      {
        label: { en: "1st", dev: "उत्तमः", iast: "uttamaḥ", cue: "I, we" },
        cells: [
          { dev: "नयामि", iast: "nayāmi" },
          { dev: "नयावः", iast: "nayāvaḥ" },
          { dev: "नयामः", iast: "nayāmaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Patterns that stand out on this stem:",
  },
  {
    type: "ul",
    items: [
      "All first-person forms have a long ā in the ending.",
      "All singular forms end in -i.",
      "The sound tha appears only in the second person.",
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org the present tense: meanings (ongoing, habitual, just finished / about to, first-person “let's”), sma for past, and the full naya person × number grid. No extra stems or endings.",
  },
];
