import type { LessonBlock } from "../catalog";

export const upasarga: LessonBlock[] = [
  {
    type: "p",
    text: "Also called the preverb, preposition, or verb prefix. In traditional grammar these prefixes are uninflected words. Twenty special ones form a closed list; when they prefix a verb they are called upasargas, though they have other uses too.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गच्छन्ति", iast: "gacchanti", note: "they go" },
      {
        dev: "समागच्छन्ति",
        iast: "samāgacchanti",
        note: "they come together; they convene",
      },
    ],
  },
  { type: "h2", text: "The list" },
  {
    type: "glyphs",
    items: [
      { dev: "अति", iast: "ati", note: "beyond, over, excessive" },
      { dev: "अधि", iast: "adhi", note: "above, over" },
      { dev: "अनु", iast: "anu", note: "after, along" },
      { dev: "अप", iast: "apa", note: "away from" },
      { dev: "अपि", iast: "api", note: "close to" },
      { dev: "अभि", iast: "abhi", note: "towards" },
      { dev: "अव", iast: "ava", note: "down, downward" },
      { dev: "आ", iast: "ā", note: "here, near" },
      { dev: "उद्", iast: "ud", note: "up, upward" },
      { dev: "उप", iast: "upa", note: "next to, under" },
      { dev: "दुस्", iast: "dus", note: "bad, difficult" },
      { dev: "नि", iast: "ni", note: "in, into" },
      { dev: "निस्", iast: "nis", note: "out, out of" },
      { dev: "परा", iast: "parā", note: "far away, gone" },
      { dev: "परि", iast: "pari", note: "around, about" },
      { dev: "प्र", iast: "pra", note: "forward" },
      { dev: "प्रति", iast: "prati", note: "backward, against" },
      { dev: "वि", iast: "vi", note: "apart, separate" },
      { dev: "सम्", iast: "sam", note: "together; complete, full" },
      { dev: "सु", iast: "su", note: "good, easy" },
    ],
  },
  { type: "h2", text: "How to use an upasarga" },
  {
    type: "p",
    text: "An upasarga usually does one of three things. It may shift the root’s meaning in a straightforward way:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "संगच्छन्ति",
        iast: "saṃgacchanti",
        note: "they meet (“go together”)",
      },
      {
        dev: "संनयन्ति",
        iast: "saṃnayanti",
        note: "they unite (“lead others together”)",
      },
    ],
  },
  {
    type: "p",
    text: "It may create a new meaning that depends on cultural context:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अवगच्छन्ति",
        iast: "avagacchanti",
        note: "they understand",
      },
    ],
  },
  {
    type: "p",
    text: "Or it may intensify the root’s meaning — or leave it unchanged:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "संजयति",
        iast: "saṃjayati",
        note: "they (intensely or fully) conquer",
      },
    ],
  },
  {
    type: "p",
    text: "More than one upasarga can appear at once:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "समागच्छन्ति",
        iast: "samāgacchanti",
        note: "they come together; they convene",
      },
      {
        dev: "समानयन्ति",
        iast: "samānayanti",
        note: "they gather (“lead together here”)",
      },
    ],
  },
  {
    type: "p",
    text: "Many verbs use the past-tense prefix a-. An upasarga comes before that a-:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "आगच्छन्", iast: "āgacchan", note: "ā + agacchan — they came" },
      {
        dev: "पर्यगच्छन्",
        iast: "paryagacchan",
        note: "pari + agacchan — they went around",
      },
    ],
  },
  {
    type: "p",
    text: "In older Sanskrit the upasarga is freer and can stand almost anywhere in the sentence. In later Sanskrit it usually joins the verb as one word.",
  },
  { type: "h2", text: "Other uses of these words" },
  {
    type: "p",
    text: "Some of the twenty can stand alone. After a word, api means “also” or “even”:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "लक्ष्मणो ऽपि वनं गच्छति",
        iast: "lakṣmaṇo 'pi vanaṃ gacchati",
        note: "Lakshmana also goes to the forest",
      },
      {
        dev: "रामो न रावणाद् अपि भीतः",
        iast: "rāmo na rāvaṇād api bhītaḥ",
        note: "Rama is not even afraid of Ravana",
      },
    ],
  },
  {
    type: "p",
    text: "At the start of a sentence, api can ask a yes/no question:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अपि त्वं सुखिनी",
        iast: "api tvaṃ sukhinī",
        note: "Are you happy?",
      },
    ],
  },
  {
    type: "p",
    text: "prati with a noun in case 2 means “regarding …”:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "रामं प्रति", iast: "rāmaṃ prati", note: "regarding Rama" },
      { dev: "तत् प्रति", iast: "tat prati", note: "regarding that" },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org upasarga page: the twenty-word list and basic meanings; the three prefix effects with printed examples; multiple upasargas; placement before past a-; older vs later freedom; independent api (“also/even,” yes/no) and prati with case 2. No extra prefixes or roots.",
  },
];
