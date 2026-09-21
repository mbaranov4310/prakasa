import type { LessonBlock } from "../catalog";

export const basicNominalEndings: LessonBlock[] = [
  {
    type: "p",
    text: "Stem families use different endings, but they tend to share one basic set. Compare instrumental singular for agni, “fire,” and manas, “mind”: agni takes -nā, manas takes -ā — different shapes, both ending in long ā. Knowing the basic endings makes each family's changes easier to see.",
  },
  {
    type: "glyphs",
    items: [
      { dev: "अग्निना", iast: "agninā", note: "with the fire" },
      { dev: "मनसा", iast: "manasā", note: "with the mind" },
    ],
  },
  { type: "h2", text: "Basic masculine and feminine endings" },
  {
    type: "p",
    text: "Masculine and feminine use the same basic endings. The table is for patterns, not rote memorization — many cells share one form.",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "ः", iast: "ḥ" },
          { dev: "औ", iast: "au" },
          { dev: "अः", iast: "aḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "अम्", iast: "am" },
          { dev: "औ", iast: "au" },
          { dev: "अः", iast: "aḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "आ", iast: "ā" },
          { dev: "भ्याम्", iast: "bhyām" },
          { dev: "भिः", iast: "bhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "ए", iast: "e" },
          { dev: "भ्याम्", iast: "bhyām" },
          { dev: "भ्यः", iast: "bhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "अः", iast: "aḥ" },
          { dev: "भ्याम्", iast: "bhyām" },
          { dev: "भ्यः", iast: "bhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "अः", iast: "aḥ" },
          { dev: "ओः", iast: "oḥ" },
          { dev: "आम्", iast: "ām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "इ", iast: "i" },
          { dev: "ओः", iast: "oḥ" },
          { dev: "सु", iast: "su" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "ः", iast: "ḥ" },
          { dev: "औ", iast: "au" },
          { dev: "अः", iast: "aḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Dual instrumental, dative, and ablative are all bhyām. Without sentence context you cannot tell which case is meant.",
  },
  { type: "h2", text: "Basic neuter endings" },
  {
    type: "p",
    text: "From instrumental through locative, neuter matches the table above. Nominative, accusative, and vocative use the endings below — and those three cases are identical to each other. The dash means no ending is added.",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "—", iast: "—" },
          { dev: "ई", iast: "ī" },
          { dev: "इ", iast: "i" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "—", iast: "—" },
          { dev: "ई", iast: "ī" },
          { dev: "इ", iast: "i" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "—", iast: "—" },
          { dev: "ई", iast: "ī" },
          { dev: "इ", iast: "i" },
        ],
      },
    ],
  },
  { type: "h2", text: "Feminine nau, “boat”" },
  {
    type: "p",
    text: "When the ending starts with a vowel, nau shows light sandhi; otherwise it is regular. Locative plural nausu becomes nauṣu (s → ṣ after a vowel other than a or ā).",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "नौः", iast: "nauḥ" },
          { dev: "नावौ", iast: "nāvau" },
          { dev: "नावः", iast: "nāvaḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "नावम्", iast: "nāvam" },
          { dev: "नावौ", iast: "nāvau" },
          { dev: "नावः", iast: "nāvaḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "नावा", iast: "nāvā" },
          { dev: "नौभ्याम्", iast: "naubhyām" },
          { dev: "नौभिः", iast: "naubhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "नावे", iast: "nāve" },
          { dev: "नौभ्याम्", iast: "naubhyām" },
          { dev: "नौभ्यः", iast: "naubhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "नावः", iast: "nāvaḥ" },
          { dev: "नौभ्याम्", iast: "naubhyām" },
          { dev: "नौभ्यः", iast: "naubhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "नावः", iast: "nāvaḥ" },
          { dev: "नावोः", iast: "nāvoḥ" },
          { dev: "नावाम्", iast: "nāvām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "नावि", iast: "nāvi" },
          { dev: "नावोः", iast: "nāvoḥ" },
          { dev: "नौषु", iast: "nauṣu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "नौः", iast: "nauḥ" },
          { dev: "नावौ", iast: "nāvau" },
          { dev: "नावः", iast: "nāvaḥ" },
        ],
      },
    ],
  },
  { type: "h2", text: "Neuter manas, “mind”" },
  {
    type: "p",
    text: "Neuter manas uses the neuter pattern. Final s becomes visarga at word end or before a consonant ending; manaḥ then follows visarga sandhi (manaḥ + bhyām → manobhyām). Nominative–accusative–vocative plural manāṃsi lengthens the stem vowel and inserts anusvāra — a change neuter stems often show.",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "मनः", iast: "manaḥ" },
          { dev: "मनसी", iast: "manasī" },
          { dev: "मनांसि", iast: "manāṃsi" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "मनः", iast: "manaḥ" },
          { dev: "मनसी", iast: "manasī" },
          { dev: "मनांसि", iast: "manāṃsi" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "मनसा", iast: "manasā" },
          { dev: "मनोभ्याम्", iast: "manobhyām" },
          { dev: "मनोभिः", iast: "manobhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "मनसे", iast: "manase" },
          { dev: "मनोभ्याम्", iast: "manobhyām" },
          { dev: "मनोभ्यः", iast: "manobhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "मनसः", iast: "manasaḥ" },
          { dev: "मनोभ्याम्", iast: "manobhyām" },
          { dev: "मनोभ्यः", iast: "manobhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "मनसः", iast: "manasaḥ" },
          { dev: "मनसोः", iast: "manasoḥ" },
          { dev: "मनसाम्", iast: "manasām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "मनसि", iast: "manasi" },
          { dev: "मनसोः", iast: "manasoḥ" },
          { dev: "मनःसु", iast: "manaḥsu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "मनः", iast: "manaḥ" },
          { dev: "मनसी", iast: "manasī" },
          { dev: "मनांसि", iast: "manāṃsi" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the reference: the agni / manas instrumental contrast; the basic masculine–feminine endings grid; the shared-ending note for bhyām; the neuter nominative–accusative–vocative endings; and the full nau and manas paradigms with their sandhi notes. Case labels follow the Prakāśa eight-name set (not the reference's “Case 1–8” numbering alone).",
  },
];
