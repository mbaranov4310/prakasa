import type { LessonBlock } from "../catalog";

export const otherSounds: LessonBlock[] = [
  {
    type: "p",
    text: "Besides the vowels and consonants, Sanskrit writing marks two extra sounds that come from sandhi: the anusvāra and the visarga. This page also names two spoken variants of the visarga that print almost never shows.",
  },
  { type: "h2", text: "anusvāra" },
  {
    type: "p",
    text: "The anusvāra usually appears when m is followed by a consonant:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामः रावणम् हन्ति", iast: "rāmaḥ rāvaṇam hanti", note: "before" },
      { dev: "रामो रावणं हन्ति", iast: "rāmo rāvaṇaṃ hanti", note: "after" },
    ],
  },
  {
    type: "p",
    text: "It is a pure nasal with no English match; approximate it as m with the tongue against the roof of the mouth. Before most consonants (not the śavarga set śa ṣa sa ha) it often becomes the closest matching nasal, and writers still like to keep the anusvāra as shorthand:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "संगः", iast: "saṃgaḥ", note: "written" },
      { dev: "सङ्गः", iast: "saṅgaḥ", note: "matching nasal" },
      { dev: "संजयः", iast: "saṃjayaḥ", note: "written" },
      { dev: "सञ्जयः", iast: "sañjayaḥ", note: "matching nasal" },
      { dev: "संन्यासः", iast: "saṃnyāsaḥ", note: "written" },
      { dev: "सन्न्यासः", iast: "sannyāsaḥ", note: "matching nasal" },
      { dev: "संबन्धः", iast: "saṃbandhaḥ", note: "written" },
      { dev: "सम्बन्धः", iast: "sambandhaḥ", note: "matching nasal" },
    ],
  },
  {
    type: "p",
    text: "Before ya ra la va it becomes a nasalized semivowel.",
  },
  { type: "h2", text: "visarga" },
  {
    type: "p",
    text: "When a word ends in s or r, that sound becomes the visarga. The older name visarjanīya means much the same thing:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामस्", iast: "rāmas", note: "before" },
      { dev: "रामः", iast: "rāmaḥ", note: "after" },
      { dev: "मातर्", iast: "mātar", note: "before" },
      { dev: "मातः", iast: "mātaḥ", note: "after" },
    ],
  },
  { type: "h2", text: "jihvāmūlīya and upadhmānīya" },
  {
    type: "p",
    text: "Two spoken variants of the visarga are worth knowing, though they are rarely written. The jihvāmūlīya is a voiceless uvular fricative — like the visarga but further back in the throat — used, if at all, before ka and kha. The upadhmānīya is a voiceless bilabial fricative, like English f but with the lips only, used before pa and pha.",
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org “Other sounds”: anusvāra from m + consonant with the printed rāvaṇaṃ pair; matching-nasal shorthand examples; nasalized semivowel before yavarga; visarga from final s/r with rāmaḥ and mātaḥ; visarjanīya name; jihvāmūlīya before ka/kha and upadhmānīya before pa/pha. No paradigm grid.",
  },
];
