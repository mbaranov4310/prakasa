import type { LessonBlock } from "../catalog";

export const simpleFuture: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as the s future, the second future, bhaviṣyan (“future”), or lṛṭ. It refers to events that have not yet occurred. Sanskrit has another tense-mood for distant future events; this one is the ordinary future.",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "गमिष्यामि",
        iast: "gamiṣyāmi",
        note: "gam → I will go",
      },
    ],
  },
  { type: "h2", text: "Making the stem" },
  {
    type: "p",
    text: "Strengthen the root’s vowel and add -sya. Some roots take no iṭ; others do. After most vowels and after r and k sounds, s becomes ṣ, so -sya often appears as -ṣya.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नेष्य", iast: "neṣya", note: "nī → will lead (no iṭ)" },
      {
        dev: "वन्दिष्य",
        iast: "vandiṣya",
        note: "vand → will venerate (with iṭ)",
      },
    ],
  },
  {
    type: "p",
    text: "Roots ending in ṛ take iṭ, and a few other roots do as well:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "करिष्य", iast: "kariṣya", note: "kṛ → will do" },
      { dev: "स्मरिष्य", iast: "smariṣya", note: "smṛ → will remember" },
      { dev: "गमिष्य", iast: "gamiṣya", note: "gam → will go" },
    ],
  },
  {
    type: "p",
    text: "When the root ends in a consonant, sya can trigger sandhi:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "लप्स्य", iast: "lapsya", note: "labh → will obtain" },
      { dev: "भोत्स्य", iast: "bhotsya", note: "budh → will awaken" },
      { dev: "धक्ष्य", iast: "dhakṣya", note: "dah → will burn" },
    ],
  },
  {
    type: "p",
    text: "A few common stems are slightly irregular:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "द्रक्ष्य", iast: "drakṣya", note: "dṛś → will see" },
      { dev: "मंस्य", iast: "maṃsya", note: "man → will think" },
    ],
  },
  { type: "h2", text: "Adding endings" },
  {
    type: "p",
    text: "Use the same person–number endings and the same pada as in the present. Below, the first form is present and the second is simple future:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "गच्छति, गमिष्यति",
        iast: "gacchati, gamiṣyati",
        note: "gam → goes, will go",
      },
      {
        dev: "लभते, लप्स्यते",
        iast: "labhate, lapsyate",
        note: "labh → obtains, will obtain",
      },
      {
        dev: "करोति, करिष्यति",
        iast: "karoti, kariṣyati",
        note: "kṛ → does, will do (parasmaipada)",
      },
      {
        dev: "कुरुते, करिष्यते",
        iast: "kurute, kariṣyate",
        note: "kṛ → does, will do (ātmanepada)",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org simple-future page (guide/verbs-2): aliases and gamiṣyāmi; stem with -sya / iṭ, ṛ-roots and gam, consonant sandhi (lapsya, bhotsya, dhakṣya), irregulars drakṣya and maṃsya; present vs future pairs for gam, labh, and kṛ in both padas. No extra roots or endings.",
  },
];
