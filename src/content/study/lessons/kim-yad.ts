import type { LessonBlock } from "../catalog";

export const kimYad: LessonBlock[] = [
  {
    type: "p",
    text: "The pronouns kim and yad build different kinds of complex sentences. kim asks; yad joins. Both take the same endings as tad, with a few notes below.",
  },
  { type: "h2", text: "kim" },
  {
    type: "p",
    text: "kim means “who?” or “what?” and asks a question:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कस् त्वम्।", iast: "kas tvam.", note: "Who are you?" },
      {
        dev: "त्वं कस्मै फलं ददासि",
        iast: "tvaṃ kasmai phalaṃ dadāsi",
        note: "To whom are you giving the fruit?",
      },
      {
        dev: "कस्मात् रावणः सीताम् इच्छति।",
        iast: "kasmāt rāvaṇaḥ sītām icchati.",
        note: "For what reason (from what) does Rāvaṇa want Sītā?",
      },
    ],
  },
  {
    type: "p",
    text: "kim uses the same endings as tad, but the neuter singular in nominative and accusative is kim:",
  },
  {
    type: "glyphs",
    items: [{ dev: "किम् एतत्?", iast: "kim etat?", note: "What is this?" }],
  },
  {
    type: "p",
    text: "Masculine nominative singular kaḥ follows ordinary sandhi (unlike saḥ):",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "कः योधः → को योधः",
        iast: "kaḥ yodhaḥ → ko yodhaḥ",
        note: "Who is a warrior?",
      },
      {
        dev: "सः योधः → स योधः",
        iast: "saḥ yodhaḥ → sa yodhaḥ",
        note: "He is a warrior.",
      },
    ],
  },
  { type: "h2", text: "Masculine kim, 7 × 3" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "कः", iast: "kaḥ" },
          { dev: "कौ", iast: "kau" },
          { dev: "के", iast: "ke" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "कम्", iast: "kam" },
          { dev: "कौ", iast: "kau" },
          { dev: "कान्", iast: "kān" },
        ],
      },
      {
        label: {
          en: "instrumental",
          dev: "तृतीया",
          iast: "tṛtīyā",
          cue: "with, by means of",
        },
        cells: [
          { dev: "केन", iast: "kena" },
          { dev: "काभ्याम्", iast: "kābhyām" },
          { dev: "कैः", iast: "kaiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "कस्मै", iast: "kasmai" },
          { dev: "काभ्याम्", iast: "kābhyām" },
          { dev: "केभ्यः", iast: "kebhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "कस्मात्", iast: "kasmāt" },
          { dev: "काभ्याम्", iast: "kābhyām" },
          { dev: "केभ्यः", iast: "kebhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "कस्य", iast: "kasya" },
          { dev: "कयोः", iast: "kayoḥ" },
          { dev: "केषाम्", iast: "keṣām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "कस्मिन्", iast: "kasmin" },
          { dev: "कयोः", iast: "kayoḥ" },
          { dev: "केषु", iast: "keṣu" },
        ],
      },
    ],
  },
  { type: "h2", text: "Feminine kim, 7 × 3" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "का", iast: "kā" },
          { dev: "के", iast: "ke" },
          { dev: "काः", iast: "kāḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "काम्", iast: "kām" },
          { dev: "के", iast: "ke" },
          { dev: "काः", iast: "kāḥ" },
        ],
      },
      {
        label: {
          en: "instrumental",
          dev: "तृतीया",
          iast: "tṛtīyā",
          cue: "with, by means of",
        },
        cells: [
          { dev: "कया", iast: "kayā" },
          { dev: "काभ्याम्", iast: "kābhyām" },
          { dev: "काभिः", iast: "kābhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "कस्यै", iast: "kasyai" },
          { dev: "काभ्याम्", iast: "kābhyām" },
          { dev: "काभ्यः", iast: "kābhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "कस्याः", iast: "kasyāḥ" },
          { dev: "काभ्याम्", iast: "kābhyām" },
          { dev: "काभ्यः", iast: "kābhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "कस्याः", iast: "kasyāḥ" },
          { dev: "कयोः", iast: "kayoḥ" },
          { dev: "कासाम्", iast: "kāsām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "कस्याम्", iast: "kasyām" },
          { dev: "कयोः", iast: "kayoḥ" },
          { dev: "कासु", iast: "kāsu" },
        ],
      },
    ],
  },
  { type: "h2", text: "Neuter kim, nominative and accusative" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "किम्", iast: "kim" },
          { dev: "के", iast: "ke" },
          { dev: "कानि", iast: "kāni" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "किम्", iast: "kim" },
          { dev: "के", iast: "ke" },
          { dev: "कानि", iast: "kāni" },
        ],
      },
    ],
  },
  { type: "h2", text: "-cit and -cana" },
  {
    type: "p",
    text: "The suffixes -cit and -cana turn a kim form into “someone” or “something”:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "कः पृच्छति → कश्चित् पृच्छति",
        iast: "kaḥ pṛcchati → kaścit pṛcchati",
        note: "Who is asking? → Someone is asking.",
      },
      {
        dev: "केन श्रुतम् → केनचन श्रुतम्",
        iast: "kena śrutam → kenacana śrutam",
        note: "By whom was it heard? → By someone it was heard.",
      },
    ],
  },
  { type: "h2", text: "yad" },
  {
    type: "p",
    text: "yad means “who” or “what,” not as a question but as a relative that joins sentences. It often pairs with another pronoun:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "सा पृच्छति।", iast: "sā pṛcchati.", note: "She asks." },
      {
        dev: "सा रामस्य पत्नी।",
        iast: "sā rāmasya patnī.",
        note: "She is Rāma’s wife.",
      },
      {
        dev: "या पृच्छति सा रामस्य पत्नी।",
        iast: "yā pṛcchati sā rāmasya patnī.",
        note: "The person who asks is Rāma’s wife.",
      },
    ],
  },
  {
    type: "p",
    text: "Case on yad can track a different role than the correlative:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामः तस्यै फलं ददाति।",
        iast: "rāmaḥ tasyai phalaṃ dadāti.",
        note: "Rāma gives a fruit to her.",
      },
      {
        dev: "यस्यै रामः फलं ददाति सा रामस्य पत्नी",
        iast: "yasyai rāmaḥ phalaṃ dadāti sā rāmasya patnī",
        note: "The person to whom Rāma gives a fruit is Rāma’s wife.",
      },
      {
        dev: "यस्यै रामः फलं ददाति तस्याः पिता जनकः",
        iast: "yasyai rāmaḥ phalaṃ dadāti tasyāḥ pitā janakaḥ",
        note: "The father of the one to whom Rāma gives a fruit is Janaka.",
      },
    ],
  },
  {
    type: "p",
    text: "yad uses the same endings as tad and follows ordinary sandhi.",
  },
  { type: "h2", text: "Masculine yad, 7 × 3" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "यः", iast: "yaḥ" },
          { dev: "यौ", iast: "yau" },
          { dev: "ये", iast: "ye" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "यम्", iast: "yam" },
          { dev: "यौ", iast: "yau" },
          { dev: "यान्", iast: "yān" },
        ],
      },
      {
        label: {
          en: "instrumental",
          dev: "तृतीया",
          iast: "tṛtīyā",
          cue: "with, by means of",
        },
        cells: [
          { dev: "येन", iast: "yena" },
          { dev: "याभ्याम्", iast: "yābhyām" },
          { dev: "यैः", iast: "yaiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "यस्मै", iast: "yasmai" },
          { dev: "याभ्याम्", iast: "yābhyām" },
          { dev: "येभ्यः", iast: "yebhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "यस्मात्", iast: "yasmāt" },
          { dev: "याभ्याम्", iast: "yābhyām" },
          { dev: "येभ्यः", iast: "yebhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "यस्य", iast: "yasya" },
          { dev: "ययोः", iast: "yayoḥ" },
          { dev: "येषाम्", iast: "yeṣām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "यस्मिन्", iast: "yasmin" },
          { dev: "ययोः", iast: "yayoḥ" },
          { dev: "येषु", iast: "yeṣu" },
        ],
      },
    ],
  },
  { type: "h2", text: "Feminine yad, 7 × 3" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "या", iast: "yā" },
          { dev: "ये", iast: "ye" },
          { dev: "याः", iast: "yāḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "याम्", iast: "yām" },
          { dev: "ये", iast: "ye" },
          { dev: "याः", iast: "yāḥ" },
        ],
      },
      {
        label: {
          en: "instrumental",
          dev: "तृतीया",
          iast: "tṛtīyā",
          cue: "with, by means of",
        },
        cells: [
          { dev: "यया", iast: "yayā" },
          { dev: "याभ्याम्", iast: "yābhyām" },
          { dev: "याभिः", iast: "yābhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "यस्यै", iast: "yasyai" },
          { dev: "याभ्याम्", iast: "yābhyām" },
          { dev: "याभ्यः", iast: "yābhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "यस्याः", iast: "yasyāḥ" },
          { dev: "याभ्याम्", iast: "yābhyām" },
          { dev: "याभ्यः", iast: "yābhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "यस्याः", iast: "yasyāḥ" },
          { dev: "ययोः", iast: "yayoḥ" },
          { dev: "यासाम्", iast: "yāsām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "यस्याम्", iast: "yasyām" },
          { dev: "ययोः", iast: "yayoḥ" },
          { dev: "यासु", iast: "yāsu" },
        ],
      },
    ],
  },
  { type: "h2", text: "Neuter yad, nominative and accusative" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "यत्", iast: "yat" },
          { dev: "ये", iast: "ye" },
          { dev: "यानि", iast: "yāni" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "यत्", iast: "yat" },
          { dev: "ये", iast: "ye" },
          { dev: "यानि", iast: "yāni" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org kim and yad (under nominals-2; catalog URL still says /nominals/): question vs relative sense; kim examples and kaḥ vs saḥ sandhi; full masculine and feminine 7×3 grids for kim and yad; neuter nom./acc. only as printed; -cit/-cana; yad joining examples. No vocative rows (not on the page). Sentences topic left for later.",
  },
];
