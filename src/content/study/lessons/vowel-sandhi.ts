import type { LessonBlock } from "../catalog";

export const vowelSandhi: LessonBlock[] = [
  {
    type: "p",
    text: "Vowel sandhi (svara-sandhi, ac-sandhi) is what happens when two vowels sit next to each other. The guide also prints a full first-vowel × second-vowel grid; the sections below are the same changes told as rules.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सीता", iast: "sītā" },
      { dev: "उदकम्", iast: "udakam" },
      { dev: "सीतोदकम्", iast: "sītodakam", note: "ā + u → o" },
    ],
  },
  { type: "h2", text: "Similar vowels" },
  {
    type: "p",
    text: "If the two vowels are similar, they combine and become long:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सीताश्वम्", iast: "sītāśvam", note: "ā + a → ā" },
      { dev: "शबरीषुम्", iast: "śabarīṣum", note: "ī + i → ī" },
    ],
  },
  { type: "h2", text: "Dissimilar vowels" },
  {
    type: "p",
    text: "If they are not similar, one of three things happens.",
  },
  {
    type: "p",
    text: "First: if the first vowel is simple and not a or ā, it becomes a semivowel (i/ī → y, u/ū → v, ṛ/ṝ → r):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "शबर्य्", iast: "śabary", note: "ī + a → y" },
      { dev: "अश्वम्", iast: "aśvam" },
    ],
  },
  {
    type: "p",
    text: "Second: if the first vowel is a or ā, the two combine into a compound vowel (a/ā + i/ī → e, a/ā + u/ū → o, a/ā + e → ai, a/ā + o → au). But if the second vowel is ṛ, ṝ, or ḷ, it becomes a semivowel instead, and the result is ar (not ār):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सीतोदकम्", iast: "sītodakam", note: "ā + u → o" },
      { dev: "सीतर्षिम्", iast: "sītarṣim", note: "ā + ṛ → ar" },
    ],
  },
  {
    type: "p",
    text: "Third: if the first vowel is a compound vowel, it becomes ay, āy, av, or āv (e → ay, ai → āy, o → av, au → āv):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नयन्ति", iast: "nayanti", note: "ne + a → naya" },
      { dev: "भवन्ति", iast: "bhavanti", note: "bho + a → bhava" },
    ],
  },
  { type: "h2", text: "Compound vowels at the end of a word" },
  {
    type: "p",
    text: "Word-final -e, -ai, and -o usually make extra changes. -ai becomes -ā before a following vowel (via āy with the y dropped). The new -ā does not combine further:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "तस्यै", iast: "tasyai" },
      { dev: "अश्वम्", iast: "aśvam" },
      { dev: "तस्या", iast: "tasyā", note: "ai → ā; stops" },
    ],
  },
  {
    type: "p",
    text: "-e generally becomes -a before most vowels. But if the next vowel is a, -e stays and the a disappears (avagraha). -o follows the same pattern as -e:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "त आम्रम्", iast: "ta āmram", note: "e → a before ā" },
      { dev: "तेऽश्वम्", iast: "te'śvam", note: "e + a → e '" },
      { dev: "रामोऽश्वम्", iast: "rāmo'śvam", note: "aḥ + a, same elision" },
    ],
  },
  { type: "h2", text: "Vowels that don't use sandhi" },
  {
    type: "p",
    text: "Word-final -ī, -ū, and -e that belong to a dual form never change:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अग्नी", iast: "agnī", note: "dual; stays" },
      { dev: "अपश्यम्", iast: "apaśyam" },
      { dev: "बाहू", iast: "bāhū", note: "dual; stays" },
      { dev: "लभेते", iast: "labhete", note: "dual; stays" },
    ],
  },
  { type: "h2", text: "Verb prefixes" },
  {
    type: "p",
    text: "If a verb prefix ends in a or ā and the root starts with ṛ, the combination is ār, not the usual ar:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "उपार्च्छति", iast: "upārcchati", note: "upa + ṛ → ār" },
      { dev: "सीतर्च्छति", iast: "sītarcchati", note: "sītā + ṛ → ar" },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org vowel sandhi: opening ā+u example; similar-vowel pairs; the three dissimilar cases (semivowel, a/ā compounds including ā+ṛ → ar, compound → ay/āv); word-final -ai/-e/-o; dual exemption; verb-prefix ār vs ar. The full lookup grid is not copied cell-for-cell. Review practice sentences at the end of the guide are left for drills.",
  },
];
