import type { LessonBlock } from "../catalog";

export const distantPast: LessonBlock[] = [
  {
    type: "p",
    text: "Also known as the perfect, parokṣe bhūta (“remote past”), or liṭ. It usually describes historical or legendary events:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नी → निनाय",
        iast: "nī → nināya",
        note: "lead → led (long ago)",
      },
    ],
  },
  {
    type: "p",
    text: "Epics such as the Rāmāyaṇa and the Mahābhārata use this tense extensively. Many forms are irregular, so this lesson sticks to the common patterns.",
  },
  { type: "h2", text: "Strong and weak stems" },
  {
    type: "p",
    text: "The distant past has a strong stem and a weak stem. Singular parasmaipada endings take the strong stem; all other endings take the weak stem:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "निनी + अ → निनाय",
        iast: "ninī + a → nināya",
        note: "someone led (long ago, parasmaipada)",
      },
      {
        dev: "निनी + उः → निन्युः",
        iast: "ninī + uḥ → ninyuḥ",
        note: "they led (long ago, parasmaipada)",
      },
      {
        dev: "निनी + इरे → निन्यिरे",
        iast: "ninī + ire → ninyire",
        note: "they led (long ago, ātmanepada)",
      },
    ],
  },
  { type: "h2", text: "Rules of doubling" },
  {
    type: "p",
    text: "Also known as dvitva. The stem is made by doubling the root, then simplifying the first copy. Get a feel for the changes rather than memorizing every rule.",
  },
  {
    type: "p",
    text: "Long vowels shorten; aspirates lose aspiration; consonants after the double’s vowel drop; clusters keep one consonant (usually the second, unless that is nasal):",
  },
  {
    type: "glyphs",
    items: [
      { dev: "दा → ददा", iast: "dā → dadā", note: "give" },
      { dev: "नी → निनी", iast: "nī → ninī", note: "lead" },
      { dev: "धा → दधा", iast: "dhā → dadhā", note: "place" },
      { dev: "बुध् → बुबुध्", iast: "budh → bubudh", note: "awaken" },
      { dev: "अस् → आस्", iast: "as → ās", note: "be, exist" },
      { dev: "स्तु → तुष्टु", iast: "stu → tuṣṭu", note: "praise" },
      { dev: "स्था → तस्था", iast: "sthā → tasthā", note: "stand" },
      { dev: "स्मृ → सस्मृ", iast: "smṛ → sasmṛ", note: "remember" },
    ],
  },
  {
    type: "p",
    text: "Soft-palate stops shift to the hard palate; ṛ, ṝ, and ḷ become a; roots that allow samprasāraṇa use it; bhū is a common exception:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "गा → जगा", iast: "gā → jagā", note: "sing" },
      { dev: "कृ → चकृ", iast: "kṛ → cakṛ", note: "do" },
      { dev: "तॄ → ततॄ", iast: "tṝ → tatṝ", note: "cross" },
      { dev: "कॢप् → चकॢप्", iast: "kḷp → cakḷp", note: "be fit for" },
      { dev: "वच् → उवच्", iast: "vac → uvac", note: "speak" },
      { dev: "यज् → इयज्", iast: "yaj → iyaj", note: "sacrifice" },
      { dev: "वद् → उवद्", iast: "vad → uvad", note: "say" },
      { dev: "भू → बभू", iast: "bhū → babhū", note: "become" },
    ],
  },
  { type: "h2", text: "Making the stem" },
  {
    type: "p",
    text: "Roots with one vowel generally use that doubling. Some weak stems lose their vowel entirely:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "कृ → चकृ", iast: "kṛ → cakṛ", note: "do" },
      {
        dev: "जजन् + ए → जज्ञे",
        iast: "jajan + e → jajñe",
        note: "was born",
      },
      {
        dev: "जगम् + उः → जग्मुः",
        iast: "jagam + uḥ → jagmuḥ",
        note: "they went",
      },
    ],
  },
  {
    type: "p",
    text: "Samprasāraṇa can apply again in the weak stem:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "उवच् → ऊचुः",
        iast: "uvac → ūcuḥ",
        note: "they spoke",
      },
      {
        dev: "इयज् → ईजुः",
        iast: "iyaj → ījuḥ",
        note: "they sacrificed",
      },
      {
        dev: "उवद् → ऊदुः",
        iast: "uvad → ūduḥ",
        note: "they said",
      },
    ],
  },
  {
    type: "p",
    text: "Under narrow conditions (root vowel a, one consonant on each side, double starting like the root), the weak stem can look like this:",
  },
  {
    type: "glyphs",
    items: [
      { dev: "शक् → शेकुः", iast: "śak → śekuḥ", note: "they were able" },
      { dev: "मन् → मेनिरे", iast: "man → menire", note: "they thought" },
    ],
  },
  {
    type: "p",
    text: "Roots that break those conditions keep the ordinary weak stem: śuc → śuśucuḥ, nand → nananduḥ, gaṇ → jagaṇuḥ.",
  },
  { type: "h2", text: "Derived roots" },
  {
    type: "p",
    text: "For derived roots and cur-class roots, add -ām, then combine with the distant past of kṛ, bhū, or as:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "बोधि → बोधयाम्",
        iast: "bodhi → bodhayām",
        note: "wake someone up",
      },
      {
        dev: "बोधयाञ्चकार",
        iast: "bodhayāñcakāra",
        note: "woke (someone) up",
      },
      {
        dev: "बोधयाम्बभूव",
        iast: "bodhayāmbabhūva",
        note: "woke (someone) up",
      },
      {
        dev: "बोधयामास",
        iast: "bodhayāmāsa",
        note: "woke (someone) up",
      },
    ],
  },
  {
    type: "p",
    text: "These may also appear as separate words: bodhayāṃ cakāra, bodhayāṃ babhūva, bodhayām āsa.",
  },
  { type: "h2", text: "Parasmaipada endings" },
  {
    type: "p",
    text: "The distant past uses special parasmaipada endings. Singular endings take the strong stem; dual and plural take the weak stem:",
  },
  {
    type: "table",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: {
          en: "3rd",
          dev: "प्रथमपुरुष",
          iast: "prathamapuruṣa",
          cue: "he, she, it / they",
        },
        cells: [
          { dev: "अ", iast: "a" },
          { dev: "अतुस्", iast: "atus" },
          { dev: "उस्", iast: "us" },
        ],
      },
      {
        label: {
          en: "2nd",
          dev: "मध्यमपुरुष",
          iast: "madhyamapuruṣa",
          cue: "you",
        },
        cells: [
          { dev: "थ", iast: "tha" },
          { dev: "अथुस्", iast: "athus" },
          { dev: "अ", iast: "a" },
        ],
      },
      {
        label: {
          en: "1st",
          dev: "उत्तमपुरुष",
          iast: "uttamapuruṣa",
          cue: "I / we",
        },
        cells: [
          { dev: "अ", iast: "a" },
          { dev: "व", iast: "va" },
          { dev: "म", iast: "ma" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Singular -a usually strengthens vowel-final roots to the strongest grade (nī → nināya, kṛ → cakāra). Roots whose second-to-last sound is a vowel strengthen that vowel to e, o, or ā (viś → viveśa, śuc → śuśoca, has → jahāsa). First-person singular optionally allows medium strengthening (cakāra or cakara).",
  },
  {
    type: "p",
    text: "Forms of kṛ, “do”:",
  },
  {
    type: "table",
    caption: "kṛ, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: {
          en: "3rd",
          dev: "प्रथमपुरुष",
          iast: "prathamapuruṣa",
          cue: "he, she, it / they",
        },
        cells: [
          { dev: "चकार", iast: "cakāra" },
          { dev: "चक्रतुस्", iast: "cakratus" },
          { dev: "चक्रुस्", iast: "cakrus" },
        ],
      },
      {
        label: {
          en: "2nd",
          dev: "मध्यमपुरुष",
          iast: "madhyamapuruṣa",
          cue: "you",
        },
        cells: [
          { dev: "चकर्थ", iast: "cakartha" },
          { dev: "चक्रथुस्", iast: "cakrathus" },
          { dev: "चक्र", iast: "cakra" },
        ],
      },
      {
        label: {
          en: "1st",
          dev: "उत्तमपुरुष",
          iast: "uttamapuruṣa",
          cue: "I / we",
        },
        cells: [
          { dev: "चकार, चकर", iast: "cakāra, cakara" },
          { dev: "चकृव", iast: "cakṛva" },
          { dev: "चकृम", iast: "cakṛma" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Roots ending in -ā take -au in the singular instead of -a. Forms of sthā, “stand” (second singular also optional):",
  },
  {
    type: "table",
    caption: "sthā, parasmaipada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: {
          en: "3rd",
          dev: "प्रथमपुरुष",
          iast: "prathamapuruṣa",
          cue: "he, she, it / they",
        },
        cells: [
          { dev: "तस्थौ", iast: "tasthau" },
          { dev: "तस्थतुः", iast: "tasthatuḥ" },
          { dev: "तस्थुः", iast: "tasthuḥ" },
        ],
      },
      {
        label: {
          en: "2nd",
          dev: "मध्यमपुरुष",
          iast: "madhyamapuruṣa",
          cue: "you",
        },
        cells: [
          { dev: "तस्थाथ, तस्थिथ", iast: "tasthātha, tasthitha" },
          { dev: "तस्थथुः", iast: "tasthathuḥ" },
          { dev: "तस्थ", iast: "tastha" },
        ],
      },
      {
        label: {
          en: "1st",
          dev: "उत्तमपुरुष",
          iast: "uttamapuruṣa",
          cue: "I / we",
        },
        cells: [
          { dev: "तस्थौ", iast: "tasthau" },
          { dev: "तस्थिव", iast: "tasthiva" },
          { dev: "तस्थिम", iast: "tasthima" },
        ],
      },
    ],
  },
  { type: "h2", text: "Ātmanepada endings" },
  {
    type: "p",
    text: "Most endings match present-tense ātmanepada. The third person uses e and ire instead:",
  },
  {
    type: "table",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: {
          en: "3rd",
          dev: "प्रथमपुरुष",
          iast: "prathamapuruṣa",
          cue: "he, she, it / they",
        },
        cells: [
          { dev: "ए", iast: "e" },
          { dev: "आते", iast: "āte" },
          { dev: "इरे", iast: "ire" },
        ],
      },
      {
        label: {
          en: "2nd",
          dev: "मध्यमपुरुष",
          iast: "madhyamapuruṣa",
          cue: "you",
        },
        cells: [
          { dev: "से", iast: "se" },
          { dev: "आथे", iast: "āthe" },
          { dev: "ध्वे", iast: "dhve" },
        ],
      },
      {
        label: {
          en: "1st",
          dev: "उत्तमपुरुष",
          iast: "uttamapuruṣa",
          cue: "I / we",
        },
        cells: [
          { dev: "ए", iast: "e" },
          { dev: "वहे", iast: "vahe" },
          { dev: "महे", iast: "mahe" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Forms of kṛ. Note dhve → ḍhve, common in this tense:",
  },
  {
    type: "table",
    caption: "kṛ, ātmanepada",
    labelHeader: "Person",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: {
          en: "3rd",
          dev: "प्रथमपुरुष",
          iast: "prathamapuruṣa",
          cue: "he, she, it / they",
        },
        cells: [
          { dev: "चक्रे", iast: "cakre" },
          { dev: "चक्राते", iast: "cakrāte" },
          { dev: "चक्रिरे", iast: "cakrire" },
        ],
      },
      {
        label: {
          en: "2nd",
          dev: "मध्यमपुरुष",
          iast: "madhyamapuruṣa",
          cue: "you",
        },
        cells: [
          { dev: "चकृषे", iast: "cakṛṣe" },
          { dev: "चक्राथे", iast: "cakrāthe" },
          { dev: "चकृढ्वे", iast: "cakṛḍhve" },
        ],
      },
      {
        label: {
          en: "1st",
          dev: "उत्तमपुरुष",
          iast: "uttamapuruṣa",
          cue: "I / we",
        },
        cells: [
          { dev: "चक्रे", iast: "cakre" },
          { dev: "चकृवहे", iast: "cakṛvahe" },
          { dev: "चकृमहे", iast: "cakṛmahe" },
        ],
      },
    ],
  },
  { type: "h2", text: "Review" },
  {
    type: "ul",
    items: [
      "Recognize the tense by its doubled sound; you need not memorize every doubling rule.",
      "It is almost always third person; singular and plural forms are by far the most common.",
      "Sentence context will make the verb’s meaning clear.",
    ],
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org/guide/verbs-2/the-distant-past-tense/ (CC BY 4.0): names (perfect / parokṣe bhūta / liṭ); nināya sense; strong vs weak with nināya / ninyuḥ / ninyire; doubling rules and stem notes (including samprasāraṇa and śekuḥ-type weak stems); -ām + kṛ/bhū/as for derived roots; parasmaipada and ātmanepada ending grids; kṛ and sthā paradigms; review essentials. No extra stems.",
  },
];
