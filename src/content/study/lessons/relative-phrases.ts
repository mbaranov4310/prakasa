import type { LessonBlock } from "../catalog";

export const relativePhrases: LessonBlock[] = [
  {
    type: "p",
    text: "Relative phrases build complex sentences by linking a clause to another part of the sentence — who, where, when, and the like:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अहम् अपश्यं नरं यो गजम् अचोरयत्।",
        iast: "aham apaśyaṃ naraṃ yo gajam acorayat.",
        note: "I saw the man who stole the elephant.",
      },
      {
        dev: "स नरो गच्छति यत्र बहवो गजा वसन्ति।",
        iast: "sa naro gacchati yatra bahavo gajā vasanti.",
        note: "That man is going where many elephants live.",
      },
      {
        dev: "गजा भीता भवन्ति यदा चोरम् पश्यन्ति।",
        iast: "gajā bhītā bhavanti yadā coram paśyanti.",
        note: "Elephants become scared when they see the thief.",
      },
    ],
  },
  { type: "h2", text: "yad" },
  {
    type: "p",
    text: "The pronoun yad is the most direct relative. Start from a plain sentence:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "राहुलो नगरं चरति।",
        iast: "rāhulo nagaraṃ carati.",
        note: "Rahula walks to the city.",
      },
    ],
  },
  {
    type: "p",
    text: "Then add a relative clause with yad:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "राहुलो यो ग्रामे वसति नगरं चरति।",
        iast: "rāhulo yo grāme vasati nagaraṃ carati.",
        note: "Rahula, who lives in the village, walks to the city.",
      },
    ],
  },
  {
    type: "p",
    text: "yad matches the gender and number of the word it describes, but its case can differ:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "राहुलो यम् माता मार्गति नगरं चरति।",
        iast: "rāhulo yam mātā mārgati nagaraṃ carati.",
        note: "Rahula, whom his mother is searching for, walks to the city.",
      },
      {
        dev: "राहुलो यस्य पिता योधो नगरं चरति।",
        iast: "rāhulo yasya pitā yodho nagaraṃ carati.",
        note: "Rahula, whose father is a warrior, walks to the city.",
      },
    ],
  },
  {
    type: "p",
    text: "The full endings of yad are covered with kim and yad.",
  },
  { type: "h2", text: "yad with tad" },
  {
    type: "p",
    text: "Pairing yad with tad (“that”) builds denser sentences. The paired pronouns share gender and number; different cases mark different roles:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "या पृच्छति सा रामस्य पत्नी।",
        iast: "yā pṛcchati sā rāmasya patnī.",
        note: "The person who asks is Rama's wife.",
      },
      {
        dev: "यस्यै रामः फलं ददाति सा रामस्य पत्नी",
        iast: "yasyai rāmaḥ phalaṃ dadāti sā rāmasya patnī",
        note: "The person to whom Rama gives a fruit is Rama's wife.",
      },
      {
        dev: "यस्यै रामः फलं ददाति तस्याः पिता जनकः",
        iast: "yasyai rāmaḥ phalaṃ dadāti tasyāḥ pitā janakaḥ",
        note: "The father of the one to whom Rama gives a fruit is Janaka.",
      },
    ],
  },
  {
    type: "p",
    text: "Switching which pronoun comes first shifts the English emphasis, while the Sanskrit stays clear:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "या पृच्छति सा रामस्य पत्नी।",
        iast: "yā pṛcchati sā rāmasya patnī.",
        note: "yā first — the person who asks is Rama's wife.",
      },
      {
        dev: "सा पृच्छति या रामस्य पत्नी।",
        iast: "sā pṛcchati yā rāmasya patnī.",
        note: "sā first — she, who is Rama's wife, asks.",
      },
    ],
  },
  { type: "h2", text: "yatra, yadā, and others" },
  {
    type: "p",
    text: "Other common uninflected relatives:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "यथा", iast: "yathā", note: "in which way" },
      { dev: "यदा", iast: "yadā", note: "when" },
      { dev: "यदर्थम्", iast: "yadartham", note: "for which reason" },
      { dev: "यतः", iast: "yataḥ", note: "from what, for what reason" },
      { dev: "यत्र", iast: "yatra", note: "where" },
    ],
  },
  {
    type: "p",
    text: "They are often paired with these correlatives:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "तथा", iast: "tathā", note: "in that way" },
      { dev: "तदा", iast: "tadā", note: "then" },
      { dev: "तदर्थम्", iast: "tadartham", note: "for that reason" },
      { dev: "ततः", iast: "tataḥ", note: "from that, for that reason" },
      { dev: "तत्र", iast: "tatra", note: "there" },
    ],
  },
  {
    type: "p",
    text: "Common relative adjectives, and the adjectives they pair with:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "यावत्", iast: "yāvat", note: "so much" },
      { dev: "यादृश", iast: "yādṛśa", note: "of which kind" },
      { dev: "तावत्", iast: "tāvat", note: "that much" },
      { dev: "तादृश", iast: "tādṛśa", note: "of that kind" },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org relative-phrases page: opening yo/yatra/yadā examples; yad agreeing in gender/number with free case; yad–tad pairs and order emphasis; uninflected yathā/yadā/yadartham/yataḥ/yatra with tathā/tadā/tadartham/tataḥ/tatra; adjectives yāvat/yādṛśa with tāvat/tādṛśa. Full kim/yad endings left to that lesson.",
  },
];
