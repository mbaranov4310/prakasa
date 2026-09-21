import type { LessonBlock } from "../catalog";

export const sentenceParticiples: LessonBlock[] = [
  {
    type: "p",
    text: "Participles are verbal adjectives. English has them too; Sanskrit has several kinds. These five cover the main types:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कुर्वन्", iast: "kurvan", note: "while doing" },
      { dev: "करिष्यन्", iast: "kariṣyan", note: "about to do" },
      { dev: "कृतम्", iast: "kṛtam", note: "(has been) done" },
      { dev: "कृतवान्", iast: "kṛtavān", note: "(has) done" },
      { dev: "कर्तव्यम्", iast: "kartavyam", note: "should or must be done" },
    ],
  },
  {
    type: "p",
    text: "A participle marks one action that relates to another:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अहं गायन् चरामि।", iast: "ahaṃ gāyan carāmi.", note: "I walk while singing." },
      { dev: "रामश् चरन् चखाद।", iast: "rāmaś caran cakhāda.", note: "Rama ate while walking." },
    ],
  },
  { type: "h2", text: "Basic participles" },
  {
    type: "p",
    text: "The simplest use is as an ordinary adjective — describing the subject, or the object:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अहं नृत्यन् गायामि।", iast: "ahaṃ nṛtyan gāyāmi.", note: "I sing while dancing." },
      {
        dev: "अहं खादन्तं सिंहं पश्यामि।",
        iast: "ahaṃ khādantaṃ siṃhaṃ paśyāmi.",
        note: "I see a lion (who is) eating.",
      },
    ],
  },
  {
    type: "p",
    text: "Because they are verbal, participles can take other nominals the way verbs do:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अहं राज्ञे नृत्यन् गायामि।",
        iast: "ahaṃ rājñe nṛtyan gāyāmi.",
        note: "I sing while dancing for the king.",
      },
      {
        dev: "अहम् मांसम् खादन्तं सिंहं पश्यामि।",
        iast: "aham māṃsam khādantaṃ siṃhaṃ paśyāmi.",
        note: "I see a lion (who is) eating meat.",
      },
    ],
  },
  { type: "h2", text: "Simultaneous action with case 7" },
  {
    type: "p",
    text: "Also called the locative absolute. To show that as one action happens, another does too — often with a felt link between them — put the participle and the word it describes in case 7.",
  },
  {
    type: "p",
    text: "From two simple sentences:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "दशरथः शोचति।", iast: "daśarathaḥ śocati.", note: "Dasharatha grieves." },
      { dev: "रामो वनं गच्छति।", iast: "rāmo vanaṃ gacchati.", note: "Rama goes to the forest." },
    ],
  },
  {
    type: "p",
    text: "Join them with case 7 on the first actor and its participle:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "दशरथे शोचति रामो वनं गच्छति।",
        iast: "daśarathe śocati rāmo vanaṃ gacchati.",
        note: "As Dasharatha grieves, Rama goes to the forest.",
      },
    ],
  },
  {
    type: "note",
    text: "Here śocati is a case-7 singular adjective, not the finite verb — easy to mix up. Consonant-stem endings explain the look.",
  },
  {
    type: "p",
    text: "The same frame works with other participles:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामे वनं गमिष्यति कैकेयी हृष्यति।",
        iast: "rāme vanaṃ gamiṣyati kaikeyī hṛṣyati.",
        note: "With Rama about to go to the forest, Kaikeyi rejoices.",
      },
      {
        dev: "रामे वनं गच्छति कैकेयी हृष्यति।",
        iast: "rāme vanaṃ gacchati kaikeyī hṛṣyati.",
        note: "With Rama going to the forest, Kaikeyi rejoices.",
      },
      {
        dev: "रामे वनं गते कैकेयी हृष्यति।",
        iast: "rāme vanaṃ gate kaikeyī hṛṣyati.",
        note: "With Rama gone to the forest, Kaikeyi rejoices.",
      },
    ],
  },
  { type: "h2", text: "Simultaneous action with case 6" },
  {
    type: "p",
    text: "Also called the genitive absolute. Case 6 can mark the same kind of pairing; the sense is usually that one action happens in spite of, or even as, the other:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "दशरथस्य शोचतो रामो वनं गच्छति।",
        iast: "daśarathasya śocato rāmo vanaṃ gacchati.",
        note: "Even as Dasharatha grieves, Rama goes to the forest.",
      },
    ],
  },
  {
    type: "note",
    text: "śocataḥ here is case-6 singular of the participle (printed with sandhi as śocato), not the finite verb. Later lessons cover each participle suffix in turn; this page is only how they fit in sentences.",
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org sentences overview of participles: the five type examples, related-action use, basic adjective use with and without extra nominals, locative absolute (case 7) with the printed Dasharatha/Rama and Rama/Kaikeyi sets, and genitive absolute (case 6). No suffix-formation tables.",
  },
];
