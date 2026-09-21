import type { LessonBlock } from "../catalog";

export const rStems: LessonBlock[] = [
  {
    type: "p",
    text: "The -ṛ stem family is usually masculine or neuter. These stems mostly take the basic nominal endings, but the masculine stem changes in certain cases and numbers. Stems that keep the changed shape are strong; the others are weak.",
  },
  {
    type: "p",
    text: "Take kartṛ, “doer” or “maker.” In the masculine, cases 1, 2, and 8 (except the accusative plural) use the strong stem kartār, and the nominative singular drops the final -r.",
  },
  { type: "h2", text: "Masculine kartṛ, 8 × 3" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "कर्ता", iast: "kartā" },
          { dev: "कर्तारौ", iast: "kartārau" },
          { dev: "कर्तारः", iast: "kartāraḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "कर्तारम्", iast: "kartāram" },
          { dev: "कर्तारौ", iast: "kartārau" },
          { dev: "कर्तॄन्", iast: "kartṝn" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "कर्त्रा", iast: "kartrā" },
          { dev: "कर्तृभ्याम्", iast: "kartṛbhyām" },
          { dev: "कर्तृभिः", iast: "kartṛbhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "कर्त्रे", iast: "kartre" },
          { dev: "कर्तृभ्याम्", iast: "kartṛbhyām" },
          { dev: "कर्तृभ्यः", iast: "kartṛbhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "कर्तुः", iast: "kartuḥ" },
          { dev: "कर्तृभ्याम्", iast: "kartṛbhyām" },
          { dev: "कर्तृभ्यः", iast: "kartṛbhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "कर्तुः", iast: "kartuḥ" },
          { dev: "कर्त्रोः", iast: "kartroḥ" },
          { dev: "कर्तॄणाम्", iast: "kartṝṇām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "कर्तरि", iast: "kartari" },
          { dev: "कर्त्रोः", iast: "kartroḥ" },
          { dev: "कर्तृषु", iast: "kartṛṣu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "कर्तः", iast: "kartaḥ" },
          { dev: "कर्तारौ", iast: "kartārau" },
          { dev: "कर्तारः", iast: "kartāraḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Singular ablative and genitive share kartuḥ. Locative singular kartari keeps the usual ending on a different stem. Plural accusative and genitive kartṝn and kartṝṇām line up with other masculine plurals such as gajān / gajānām, śucīn / śucīnām, and madhūn / madhūnām.",
  },
  {
    type: "p",
    text: "Vocative singular kartaḥ comes from kartar by sandhi. It often behaves like rāmaḥ, but where rāmaḥ becomes rāmo before a soft sound, kartaḥ becomes kartar:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो नगरं गच्छति",
        iast: "rāmo nagaraṃ gacchati",
        note: "rāmaḥ nagaram gacchati",
      },
      {
        dev: "कर्तर् नगरं गच्छ",
        iast: "kartar nagaraṃ gaccha",
        note: "kartaḥ nagaram gaccha",
      },
    ],
  },
  { type: "h2", text: "Neuter kartṛ, in brief" },
  {
    type: "p",
    text: "Neuter differs from the masculine in nominative, accusative, and vocative:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "कर्तृ", iast: "kartṛ" },
          { dev: "कर्तृणी", iast: "kartṛṇī" },
          { dev: "कर्तॄणि", iast: "kartṝṇi" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "कर्तृ", iast: "kartṛ" },
          { dev: "कर्तृणी", iast: "kartṛṇī" },
          { dev: "कर्तॄणि", iast: "kartṝṇi" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "कर्तृ", iast: "kartṛ" },
          { dev: "कर्तृणी", iast: "kartṛṇī" },
          { dev: "कर्तॄणि", iast: "kartṝṇi" },
        ],
      },
    ],
  },
  { type: "h2", text: "Family words" },
  {
    type: "p",
    text: "Many -ṛ stems name relatives. Four common ones are pitṛ, mātṛ, bhrātṛ, and svasṛ:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "दशरथो रामस्य पिता", iast: "daśaratho rāmasya pitā", note: "Dasharatha is Rāma's father" },
      { dev: "कौसल्या रामस्य माता", iast: "kausalyā rāmasya mātā", note: "Kausalyā is Rāma's mother" },
      { dev: "लक्ष्मणो रामस्य भ्राता", iast: "lakṣmaṇo rāmasya bhrātā", note: "Lakṣmaṇa is Rāma's brother" },
      { dev: "रामस्य न स्वसा", iast: "rāmasya na svasā", note: "Rāma has no sister" },
    ],
  },
  {
    type: "p",
    text: "Most of these use -ar rather than -ār for the strong stem. Feminine accusative plural is mātṝḥ; otherwise the endings match the masculine pattern.",
  },
  { type: "h2", text: "Masculine pitṛ, 8 × 3" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "पिता", iast: "pitā" },
          { dev: "पितरौ", iast: "pitarau" },
          { dev: "पितरः", iast: "pitaraḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "पितरम्", iast: "pitaram" },
          { dev: "पितरौ", iast: "pitarau" },
          { dev: "पितॄन्", iast: "pitṝn" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "पित्रा", iast: "pitrā" },
          { dev: "पितृभ्याम्", iast: "pitṛbhyām" },
          { dev: "पितृभिः", iast: "pitṛbhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "पित्रे", iast: "pitre" },
          { dev: "पितृभ्याम्", iast: "pitṛbhyām" },
          { dev: "पितृभ्यः", iast: "pitṛbhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "पितुः", iast: "pituḥ" },
          { dev: "पितृभ्याम्", iast: "pitṛbhyām" },
          { dev: "पितृभ्यः", iast: "pitṛbhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "पितुः", iast: "pituḥ" },
          { dev: "पित्रोः", iast: "pitroḥ" },
          { dev: "पितॄणाम्", iast: "pitṝṇām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "पितरि", iast: "pitari" },
          { dev: "पित्रोः", iast: "pitroḥ" },
          { dev: "पितृषु", iast: "pitṛṣu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "पितः", iast: "pitaḥ" },
          { dev: "पितरौ", iast: "pitarau" },
          { dev: "पितरः", iast: "pitaraḥ" },
        ],
      },
    ],
  },
  { type: "h2", text: "Feminine mātṛ, 8 × 3" },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "माता", iast: "mātā" },
          { dev: "मातरौ", iast: "mātarau" },
          { dev: "मातरः", iast: "mātaraḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "मातरम्", iast: "mātaram" },
          { dev: "मातरौ", iast: "mātarau" },
          { dev: "मातॄः", iast: "mātṝḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "मात्रा", iast: "mātrā" },
          { dev: "मातृभ्याम्", iast: "mātṛbhyām" },
          { dev: "मातृभिः", iast: "mātṛbhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "मात्रे", iast: "mātre" },
          { dev: "मातृभ्याम्", iast: "mātṛbhyām" },
          { dev: "मातृभ्यः", iast: "mātṛbhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "मातुः", iast: "mātuḥ" },
          { dev: "मातृभ्याम्", iast: "mātṛbhyām" },
          { dev: "मातृभ्यः", iast: "mātṛbhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "मातुः", iast: "mātuḥ" },
          { dev: "मात्रोः", iast: "mātroḥ" },
          { dev: "मातॄणाम्", iast: "mātṝṇām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "मातरि", iast: "mātari" },
          { dev: "मात्रोः", iast: "mātroḥ" },
          { dev: "मातृषु", iast: "mātṛṣu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "मातः", iast: "mātaḥ" },
          { dev: "मातरौ", iast: "mātarau" },
          { dev: "मातरः", iast: "mātaraḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "svasṛ keeps the normal strong stem svasār. The forms that differ from mātṛ are:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "स्वसा", iast: "svasā" },
          { dev: "स्वसारौ", iast: "svasārau" },
          { dev: "स्वसारः", iast: "svasāraḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "स्वसारम्", iast: "svasāram" },
          { dev: "स्वसारौ", iast: "svasārau" },
          { dev: "स्वसॄः", iast: "svasṝḥ" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "स्वसः", iast: "svasaḥ" },
          { dev: "स्वसारौ", iast: "svasārau" },
          { dev: "स्वसारः", iast: "svasāraḥ" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org -ṛ stems: strong/weak for masculine kartṛ (full 8×3), neuter kartṛ nom./acc./voc., vocative sandhi vs rāmaḥ, plural -ṝn/-ṝṇām parallels, family examples pitṛ/mātṛ/bhrātṛ/svasṛ, full pitṛ and mātṛ grids, and the svasār cells that differ from mātṛ. Review quiz omitted.",
  },
];
