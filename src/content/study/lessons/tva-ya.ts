import type { LessonBlock } from "../catalog";

export const tvaYa: LessonBlock[] = [
  {
    type: "p",
    text: "Also called the gerund, the absolutive, or the indeclinable (adverbial) participle. The root suffixes -tvā and -ya both make uninflected words.",
  },
  { type: "h2", text: "-tvā" },
  {
    type: "p",
    text: "Also known as ktvā. On a root meaning “X,” -tvā yields “after X-ing”: one action before another.",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो लङ्कां गच्छति",
        iast: "rāmo laṅkāṃ gacchati",
        note: "Rama goes to Lanka",
      },
      {
        dev: "रामो रावणं पश्यति",
        iast: "rāmo rāvaṇaṃ paśyati",
        note: "Rama sees Ravana",
      },
      {
        dev: "रामो लङ्कां गत्वा रावणं पश्यति",
        iast: "rāmo laṅkāṃ gatvā rāvaṇaṃ paśyati",
        note: "Rama, after going to Lanka, sees Ravana",
      },
    ],
  },
  {
    type: "p",
    text: "-tvā can trigger many sandhi changes (see below).",
  },
  { type: "h2", text: "-ya" },
  {
    type: "p",
    text: "Also known as lyap. Same sense as -tvā. With a verb prefix, always use -ya; otherwise use -tvā.",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "हनुमान् रामं प्रतिगच्छति",
        iast: "hanumān rāmaṃ pratigacchati",
        note: "Hanuman returns to Rama",
      },
      {
        dev: "हनुमान् हृष्यति",
        iast: "hanumān hṛṣyati",
        note: "Hanuman rejoices",
      },
      {
        dev: "हनुमान् रामं प्रतिगम्य हृष्यति",
        iast: "hanumān rāmaṃ pratigamya hṛṣyati",
        note: "Hanuman, after returning to Rama, rejoices",
      },
    ],
  },
  {
    type: "p",
    text: "If the root ends in a short vowel, add an extra -t before -ya:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "आहृत्य",
        iast: "āhṛtya",
        note: "āhṛ → after fetching",
      },
    ],
  },
  { type: "h2", text: "Sound changes for -tvā" },
  {
    type: "p",
    text: "Unlike many suffixes, -tvā does not strengthen the root vowel:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "नीत्वा", iast: "nītvā", note: "nī → after leading" },
      { dev: "भूत्वा", iast: "bhūtvā", note: "bhū → after becoming" },
      { dev: "कृत्वा", iast: "kṛtvā", note: "kṛ → after doing" },
    ],
  },
  {
    type: "p",
    text: "Some roots take connecting iṭ; others do not. Roots that use iṭ:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "वन्दित्वा",
        iast: "vanditvā",
        note: "vand → after venerating",
      },
      {
        dev: "पठित्वा",
        iast: "paṭhitvā",
        note: "paṭh → after reading or reciting",
      },
    ],
  },
  {
    type: "p",
    text: "If a root ends in a consonant and has no iṭ, that consonant may meet the -t of -tvā and trigger sandhi. After a voiced aspirate (gh jh ḍh dh bh h), -tvā usually becomes -dhvā:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "लब्ध", iast: "labdha", note: "labh → obtained" },
      { dev: "बुद्ध", iast: "buddha", note: "budh → awakened" },
      { dev: "दग्ध्वा", iast: "dagdhvā", note: "dah → after burning" },
    ],
  },
  {
    type: "p",
    text: "Final -c of a root usually becomes -k; final -j usually becomes -k or -ṣ:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "मुक्त",
        iast: "mukta",
        note: "muc → freed, released",
      },
      {
        dev: "युक्त्वा",
        iast: "yuktvā",
        note: "yuj → after yoking or joining",
      },
      {
        dev: "मृष्ट्वा",
        iast: "mṛṣṭvā",
        note: "mṛj → after wiping, polishing, or cleaning",
      },
    ],
  },
  {
    type: "p",
    text: "Roots ending in -ā, -e, or -ai often use -i or -ī for the vowel:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "स्थित्वा", iast: "sthitvā", note: "sthā → after standing" },
      { dev: "गीत्वा", iast: "gītvā", note: "gai → after singing" },
    ],
  },
  {
    type: "p",
    text: "Some roots in -m or -n drop that sound:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गत्वा", iast: "gatvā", note: "gam → after going" },
      { dev: "हत्वा", iast: "hatvā", note: "han → after killing" },
      { dev: "मत्वा", iast: "matvā", note: "man → after thinking" },
    ],
  },
  {
    type: "p",
    text: "Samprasāraṇa: some roots turn a semivowel into a vowel and drop other vowels:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "उक्त्वा", iast: "uktvā", note: "vac → after speaking" },
      { dev: "सुप्त्वा", iast: "suptvā", note: "svap → after sleeping" },
      { dev: "इष्ट्वा", iast: "iṣṭvā", note: "yaj → after sacrificing" },
      { dev: "गृहीत्वा", iast: "gṛhītvā", note: "grah → after grabbing" },
      { dev: "उषित्वा", iast: "uṣitvā", note: "vas → after living" },
      { dev: "पृष्ट्वा", iast: "pṛṣṭvā", note: "prach → after asking" },
    ],
  },
  {
    type: "p",
    text: "Other irregular changes occur too:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "दत्त्वा", iast: "dattvā", note: "dā → after giving" },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org -tvā and -ya page: gerund/absolutive names; -tvā (ktvā) “after X-ing” with the Lanka example; -ya (lyap) with prefixes and the pratigamya example; short-vowel + -t before -ya (āhṛtya); no vowel strengthening; iṭ examples; consonant sandhi (aspirates, -c/-j), ā/e/ai → i/ī, lost -m/-n, samprasāraṇa set, and dattvā. No extra roots.",
  },
];
