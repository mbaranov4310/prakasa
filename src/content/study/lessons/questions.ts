import type { LessonBlock } from "../catalog";

export const questions: LessonBlock[] = [
  {
    type: "p",
    text: "Sanskrit has several ways to ask a question. The main tools are the pronoun kim, a few particles for yes-no questions, and a short set of uninflected question words.",
  },
  { type: "h2", text: "kim" },
  {
    type: "p",
    text: "kim means “who?” or “what?” — context usually picks which. Decline it to ask about different parts of a sentence. From a statement like this:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "राहुलो कौतूहलाद् वानराय फलं ददाति",
        iast: "rāhulo kautūhalād vānarāya phalaṃ dadāti",
        note: "Rahula gives the monkey a fruit out of curiosity",
      },
    ],
  },
  {
    type: "p",
    text: "you can ask and answer:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "को वानराय फलम् ददाति", iast: "ko vānarāya phalam dadāti", note: "Who gives a fruit to the monkey?" },
      { dev: "राहुलः", iast: "rāhulaḥ", note: "Rahula" },
      { dev: "राहुलः कस्मै फलं ददाति", iast: "rāhulaḥ kasmai phalaṃ dadāti", note: "To whom does Rahula give a fruit?" },
      { dev: "वानराय", iast: "vānarāya", note: "To the monkey" },
      { dev: "राहुलो वानराय किं ददाति", iast: "rāhulo vānarāya kiṃ dadāti", note: "What does Rahula give the monkey?" },
      { dev: "फलम्", iast: "phalam", note: "A fruit" },
      { dev: "राहुलः कस्माद् वानराय फलं ददाति", iast: "rāhulaḥ kasmād vānarāya phalaṃ dadāti", note: "From what (cause)…?" },
      { dev: "कौतूहलात्", iast: "kautūhalāt", note: "From curiosity" },
    ],
  },
  {
    type: "p",
    text: "In many styles kim can also mean “why,” especially in the Rāmāyaṇa and Mahābhārata:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "किं मां हन्तुम् इच्छसि", iast: "kiṃ māṃ hantum icchasi", note: "Why do you want to kill me?" },
    ],
  },
  {
    type: "p",
    text: "The full set of kim endings is in the later lesson on kim and yad.",
  },
  { type: "h2", text: "Yes-no questions" },
  {
    type: "p",
    text: "Yes-no questions expect “yes” or “no.” One common pattern puts api at the start:",
  },
  {
    type: "glyphs",
    items: [{ dev: "अपि त्वं सुखी", iast: "api tvaṃ sukhī", note: "Are you happy?" }],
  },
  {
    type: "p",
    text: "Another puts kim at the beginning or end (like Hindi kyā):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "किं त्वं सुखी", iast: "kiṃ tvaṃ sukhī", note: "Are you happy?" },
      { dev: "त्वं सुखी किम्", iast: "tvaṃ sukhī kim", note: "Are you happy?" },
    ],
  },
  {
    type: "p",
    text: "kim can mark either a yes-no question or “why?” — style and context decide. In newer Sanskrit it is usually yes-no. kaccit asks a yes-no question while hoping the answer is yes:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कच्चित् त्वं सुखी", iast: "kaccit tvaṃ sukhī", note: "Are you happy? (I hope you are.)" },
    ],
  },
  {
    type: "p",
    text: "Answers often repeat part of the question, or in informal speech use ām (“yes”) or na (“no”):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अहं सुखी", iast: "ahaṃ sukhī", note: "I am happy" },
      { dev: "अहं न सुखी", iast: "ahaṃ na sukhī", note: "I am not happy" },
      { dev: "आम् अहं सुखी", iast: "ām ahaṃ sukhī", note: "Yes, I am happy" },
    ],
  },
  { type: "h2", text: "kutra, kadā, and others" },
  {
    type: "p",
    text: "Common uninflected question words:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कथम्", iast: "katham", note: "in what way? how?" },
      { dev: "कदा", iast: "kadā", note: "when?" },
      { dev: "किमर्थम्", iast: "kimartham", note: "for what reason? why?" },
      { dev: "कुतः", iast: "kutaḥ", note: "from what? for what reason?" },
      { dev: "कुत्र", iast: "kutra", note: "where?" },
      { dev: "क्व", iast: "kva", note: "where?" },
    ],
  },
  {
    type: "p",
    text: "kutra and kva mean the same; kutra is more common in older Sanskrit. Two common adjectives:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कियत्", iast: "kiyat", note: "how much?" },
      { dev: "कीदृश", iast: "kīdṛśa", note: "of what kind?" },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org questions page: kim for who/what (and why), the Rahula examples with case forms, yes-no with api / kim / kaccit and answers, and the uninflected and adjective lists. No full kim paradigm.",
  },
];
