import type { LessonBlock } from "../catalog";

export const bhuClass: LessonBlock[] = [
  {
    type: "p",
    text: "Four special tense-moods build their stems in ten patterns. Roots sorted by pattern make ten verb classes. Four of those classes are simple to form:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "भू", iast: "bhū", note: "→ भव bhava — be, become" },
      { dev: "दिव्", iast: "div", note: "→ दीव्य dīvya — gamble" },
      { dev: "तुद्", iast: "tud", note: "→ तुद tuda — strike" },
      { dev: "चुर्", iast: "cur", note: "→ चोरय coraya — steal" },
    ],
  },
  {
    type: "p",
    text: "These are the simple verb classes. Each is named after the first root in its traditional list.",
  },
  { type: "h2", text: "The bhū class" },
  {
    type: "p",
    text: "The largest of the ten; almost half of all roots. Examples:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "भवति", iast: "bhavati", note: "bhū — is or becomes" },
      { dev: "नयति", iast: "nayati", note: "nī — leads" },
      { dev: "शोचति", iast: "śocati", note: "śuc — grieves" },
      { dev: "निन्दति", iast: "nindati", note: "nind — derides" },
      { dev: "जीवति", iast: "jīvati", note: "jīv — lives" },
    ],
  },
  {
    type: "p",
    text: "For most roots, strengthen the root vowel and add -a:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "भव", iast: "bhava", note: "bhū → bho + a" },
      { dev: "नय", iast: "naya", note: "nī → ne + a" },
      { dev: "शोच", iast: "śoca", note: "śuc → śoc + a" },
    ],
  },
  {
    type: "p",
    text: "Some roots do not strengthen. A root vowel a stays as it is:",
  },
  {
    type: "glyphs",
    items: [{ dev: "हस", iast: "hasa", note: "has — laugh" }],
  },
  {
    type: "p",
    text: "No change if the syllable would already be heavy after -a — that is, if the root ends in more than one consonant, or has a long vowel plus a consonant:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "निन्द", iast: "ninda", note: "nind — blame" },
      { dev: "जीव", iast: "jīva", note: "jīv — live" },
    ],
  },
  {
    type: "p",
    text: "A few common roots use irregular stems:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "तिष्ठति", iast: "tiṣṭhati", note: "sthā — stand" },
      { dev: "पिबति", iast: "pibati", note: "pā — drink" },
      { dev: "पश्यति", iast: "paśyati", note: "dṛś — see" },
      { dev: "गच्छति", iast: "gacchati", note: "gam — go" },
    ],
  },
  {
    type: "p",
    text: "Why dṛś rather than paś? Present forms like paśyati suggest paś, but future and perfect forms (drakṣyati, dadarśa, and the like) point to dṛś. The grammarians chose dṛś so general patterns stay easier to state. The same logic covers other irregular roots above.",
  },
  { type: "h2", text: "The div class" },
  {
    type: "p",
    text: "Add -ya to the root. No vowel strengthening:",
  },
  {
    type: "glyphs",
    items: [{ dev: "मुह्य", iast: "muhya", note: "muh — become confused" }],
  },
  {
    type: "p",
    text: "A few irregular stems lengthen the root vowel:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "दीव्यति", iast: "dīvyati", note: "div — gamble" },
      { dev: "जायते", iast: "jāyate", note: "jan — be born" },
      { dev: "शाम्यति", iast: "śāmyati", note: "śam — be tired or calm" },
      { dev: "माद्यति", iast: "mādyati", note: "mad — be intoxicated" },
    ],
  },
  { type: "h2", text: "The tud class" },
  {
    type: "p",
    text: "Add -a with no vowel strengthening:",
  },
  {
    type: "glyphs",
    items: [{ dev: "तुद", iast: "tuda", note: "tud — strike" }],
  },
  {
    type: "p",
    text: "Irregular stems in this class usually insert an extra nasal:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "मुञ्च", iast: "muñca", note: "muc — release" },
      { dev: "कृन्तति", iast: "kṛntati", note: "kṛt — cut" },
      { dev: "लिम्पति", iast: "limpati", note: "lip — anoint or smear" },
      { dev: "सिञ्चति", iast: "siñcati", note: "sic — sprinkle" },
    ],
  },
  {
    type: "p",
    text: "nind also fails to strengthen, yet it belongs to the bhū class, not tud. Old Sanskrit pitch accent puts a low accent on bhū-class -a and a high accent on tud-class -a; nind takes the low accent.",
  },
  { type: "h2", text: "The cur class" },
  {
    type: "p",
    text: "For most roots, strengthen the vowel and add -aya:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "चोरय", iast: "coraya", note: "cur — steal" },
      { dev: "चिन्तयति", iast: "cintayati", note: "cint — thinks" },
    ],
  },
  {
    type: "p",
    text: "cint ends in multiple consonants, so its vowel does not strengthen — cintayati, not *centayati (the * marks a non-form).",
  },
  {
    type: "p",
    text: "Irregular cur stems usually add extra sounds before -aya:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "प्रीणयति", iast: "prīṇayati", note: "prī — please" },
      { dev: "धूनयति", iast: "dhūnayati", note: "dhū — shake" },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org page on the bhū, div, tud, and cur classes: the four simple stem patterns; bhū strengthen-and--a with no-strengthen cases and irregulars; why the root is dṛś; div -ya and lengthening irregulars; tud -a, nasal irregulars, and why nind is not tud; cur -aya, cint without strengthen, and extra-sound irregulars. No conjugation tables.",
  },
];
