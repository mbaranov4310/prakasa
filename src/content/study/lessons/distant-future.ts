import type { LessonBlock } from "../catalog";

export const distantFuture: LessonBlock[] = [
  {
    type: "p",
    text: "Also called the periphrastic future, anadyatana (“not of today”), or luṭ. It names actions that will happen far from now — remote, and more certain than the ordinary future.",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "यदि पृच्छति तदा गन्तास्मि",
        iast: "yadi pṛcchati tadā gantāsmi",
        note: "If he asks, then I will go",
      },
      {
        dev: "यदि पृच्छति तदा गन्ता",
        iast: "yadi pṛcchati tadā gantā",
        note: "If he asks, then he will go",
      },
    ],
  },
  {
    type: "p",
    text: "The ordinary future covers what will happen soon and depends on present circumstances. The distant future covers what is set apart from the present — something that will not come for a long while.",
  },
  { type: "h2", text: "Formation" },
  {
    type: "p",
    text: "The forms start from a masculine -tṛ noun (as in gantṛ) plus the verb as. Treat the result as a real verb, even though a noun supplies the stem. Paradigm of bhū:",
  },
  {
    type: "table",
    caption: "bhū — distant future (luṭ)",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "3rd person", dev: "प्रथमः", iast: "prathamaḥ", cue: "he, she, they" },
        cells: [
          { dev: "भविता", iast: "bhavitā" },
          { dev: "भवितारौ", iast: "bhavitārau" },
          { dev: "भवितारः", iast: "bhavitāraḥ" },
        ],
      },
      {
        label: { en: "2nd person", dev: "मध्यमः", iast: "madhyamaḥ", cue: "you" },
        cells: [
          { dev: "भवितासि", iast: "bhavitāsi" },
          { dev: "भवितास्थः", iast: "bhavitāsthaḥ" },
          { dev: "भवितास्थ", iast: "bhavitāstha" },
        ],
      },
      {
        label: { en: "1st person", dev: "उत्तमः", iast: "uttamaḥ", cue: "I, we" },
        cells: [
          { dev: "भवितास्मि", iast: "bhavitāsmi" },
          { dev: "भवितास्वः", iast: "bhavitāsvaḥ" },
          { dev: "भवितास्मः", iast: "bhavitāsmaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "In the first and second persons, the case-1 singular of the masculine -tṛ noun is followed by as, which marks number and person. In the third person there is no as — only the case-1 endings of the -tṛ noun. That can look like a plain agent noun:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "स हन्ता", iast: "sa hantā", note: "He is a killer — or: he will kill" },
    ],
  },
  {
    type: "p",
    text: "Context decides whether hantā is the noun or the distant-future verb.",
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org (distant future / luṭ): sense vs ordinary future; -tṛ + as formation; bhū paradigm; third-person noun/verb ambiguity with sa hantā. Guide path may redirect; content matched the roots/distant page.",
  },
];
