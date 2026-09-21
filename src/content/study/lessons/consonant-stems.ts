import type { LessonBlock } from "../catalog";

export const consonantStems: LessonBlock[] = [
  {
    type: "p",
    text: "Consonant stems are the last major family of nominal stems: they end in a consonant. They take the basic nominal endings. Some have strong and weak versions before different endings, as the -ṛ stems do, and sandhi may change the stem-final consonant. The strong stem is used in cases 1, 2, and 8 — except the plural of case 2 — and the weak stem everywhere else.",
  },
  { type: "h2", text: "Basic consonant stems" },
  {
    type: "p",
    text: "Many consonant stems have strong and weak forms, but some keep one form with every ending. Masculine marut, “wind,” is of that basic type. Apart from sandhi, the forms are regular:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "मरुत्", iast: "marut" },
          { dev: "मरुतौ", iast: "marutau" },
          { dev: "मरुतः", iast: "marutaḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "मरुतम्", iast: "marutam" },
          { dev: "मरुतौ", iast: "marutau" },
          { dev: "मरुतः", iast: "marutaḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "मरुता", iast: "marutā" },
          { dev: "मरुद्भ्याम्", iast: "marudbhyām" },
          { dev: "मरुद्भिः", iast: "marudbhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "मरुते", iast: "marute" },
          { dev: "मरुद्भ्याम्", iast: "marudbhyām" },
          { dev: "मरुद्भ्यः", iast: "marudbhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "मरुतः", iast: "marutaḥ" },
          { dev: "मरुद्भ्याम्", iast: "marudbhyām" },
          { dev: "मरुद्भ्यः", iast: "marudbhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "मरुतः", iast: "marutaḥ" },
          { dev: "मरुतोः", iast: "marutoḥ" },
          { dev: "मरुताम्", iast: "marutām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "मरुति", iast: "maruti" },
          { dev: "मरुतोः", iast: "marutoḥ" },
          { dev: "मरुत्सु", iast: "marutsu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "मरुत्", iast: "marut" },
          { dev: "मरुतौ", iast: "marutau" },
          { dev: "मरुतः", iast: "marutaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Neuter manas, “mind,” likewise uses the basic endings throughout:",
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
  { type: "h2", text: "-at, -mat, and -vat" },
  {
    type: "p",
    text: "Many stems in at use the suffixes -at, -mat, or -vat. Root -at on a root meaning “X” yields “(someone who is) X-ing” — paśyat, “(someone who is) seeing.” Nominal -mat and -vat mean “possessing X”: bhagavat, “having glory; blessed”; hanumat, “having (prominent) jaws; Hanuman.”",
  },
  {
    type: "p",
    text: "These stems generally share endings. The strong stem is -ant and the weak stem is -at. Masculine bhagavat, “blessed” or “fortunate”:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "भगवान्", iast: "bhagavān" },
          { dev: "भगवन्तौ", iast: "bhagavantau" },
          { dev: "भगवन्तः", iast: "bhagavantaḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "भगवन्तम्", iast: "bhagavantam" },
          { dev: "भगवन्तौ", iast: "bhagavantau" },
          { dev: "भगवतः", iast: "bhagavataḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "भगवता", iast: "bhagavatā" },
          { dev: "भगवद्भ्याम्", iast: "bhagavadbhyām" },
          { dev: "भगवद्भिः", iast: "bhagavadbhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "भगवते", iast: "bhagavate" },
          { dev: "भगवद्भ्याम्", iast: "bhagavadbhyām" },
          { dev: "भगवद्भ्यः", iast: "bhagavadbhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "भगवतः", iast: "bhagavataḥ" },
          { dev: "भगवद्भ्याम्", iast: "bhagavadbhyām" },
          { dev: "भगवद्भ्यः", iast: "bhagavadbhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "भगवतः", iast: "bhagavataḥ" },
          { dev: "भगवतोः", iast: "bhagavatoḥ" },
          { dev: "भगवताम्", iast: "bhagavatām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "भगवति", iast: "bhagavati" },
          { dev: "भगवतोः", iast: "bhagavatoḥ" },
          { dev: "भगवत्सु", iast: "bhagavatsu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "भगवन्", iast: "bhagavan" },
          { dev: "भगवन्तौ", iast: "bhagavantau" },
          { dev: "भगवन्तः", iast: "bhagavantaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Nominative singular has a long vowel (bhagavān); vocative singular is short (bhagavan). One exception: nominative singular of bare -at is -an, not -ān — hanumān from hanumat, gacchan from gacchat.",
  },
  {
    type: "p",
    text: "Neuter bhagavat in nominative, accusative, and vocative:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "भगवत्", iast: "bhagavat" },
          { dev: "भगवती", iast: "bhagavatī" },
          { dev: "भगवन्ति", iast: "bhagavanti" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "भगवत्", iast: "bhagavat" },
          { dev: "भगवती", iast: "bhagavatī" },
          { dev: "भगवन्ति", iast: "bhagavanti" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "भगवत्", iast: "bhagavat" },
          { dev: "भगवती", iast: "bhagavatī" },
          { dev: "भगवन्ति", iast: "bhagavanti" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Feminine usually takes -antī, -vatī, or -matī and then the ordinary -ī endings. Roots in the hu class use -atī instead of -antī.",
  },
  { type: "h2", text: "-an, -man, and -van" },
  {
    type: "p",
    text: "These use the suffixes -an, -man, or -van. Strong is -ān, weak is -a; before a vowel-initial ending, -an. Masculine ātman, “self” — nominative singular ātmā has no final -n sound:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "आत्मा", iast: "ātmā" },
          { dev: "आत्मानौ", iast: "ātmānau" },
          { dev: "आत्मानः", iast: "ātmānaḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "आत्मानम्", iast: "ātmānam" },
          { dev: "आत्मानौ", iast: "ātmānau" },
          { dev: "आत्मनः", iast: "ātmanaḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "आत्मना", iast: "ātmanā" },
          { dev: "आत्मभ्याम्", iast: "ātmabhyām" },
          { dev: "आत्मभिः", iast: "ātmabhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "आत्मने", iast: "ātmane" },
          { dev: "आत्मभ्याम्", iast: "ātmabhyām" },
          { dev: "आत्मभ्यः", iast: "ātmabhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "आत्मनः", iast: "ātmanaḥ" },
          { dev: "आत्मभ्याम्", iast: "ātmabhyām" },
          { dev: "आत्मभ्यः", iast: "ātmabhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "आत्मनः", iast: "ātmanaḥ" },
          { dev: "आत्मनोः", iast: "ātmanoḥ" },
          { dev: "आत्मनाम्", iast: "ātmanām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "आत्मनि", iast: "ātmani" },
          { dev: "आत्मनोः", iast: "ātmanoḥ" },
          { dev: "आत्मसु", iast: "ātmasu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "आत्मन्", iast: "ātman" },
          { dev: "आत्मानौ", iast: "ātmānau" },
          { dev: "आत्मानः", iast: "ātmānaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Neuter karman, roughly “action,” in nominative, accusative, and vocative (n becomes ṇ by sandhi):",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "कर्म", iast: "karma" },
          { dev: "कर्मणी", iast: "karmaṇī" },
          { dev: "कर्माणि", iast: "karmāṇi" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "कर्म", iast: "karma" },
          { dev: "कर्मणी", iast: "karmaṇī" },
          { dev: "कर्माणि", iast: "karmāṇi" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "कर्म", iast: "karma" },
          { dev: "कर्मणी", iast: "karmaṇī" },
          { dev: "कर्माणि", iast: "karmāṇi" },
        ],
      },
    ],
  },
  { type: "h2", text: "-in, -min, and -vin" },
  {
    type: "p",
    text: "Suffixes -in, -min, or -vin. Strong is -in, weak is -i; before a vowel-initial ending, -in. Masculine yogin, “yogi” — nominative singular yogī has no final -n:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "योगी", iast: "yogī" },
          { dev: "योगिनौ", iast: "yoginau" },
          { dev: "योगिनः", iast: "yoginaḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "योगिनम्", iast: "yoginam" },
          { dev: "योगिनौ", iast: "yoginau" },
          { dev: "योगिनः", iast: "yoginaḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "योगिना", iast: "yoginā" },
          { dev: "योगिभ्याम्", iast: "yogibhyām" },
          { dev: "योगिभिः", iast: "yogibhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "योगिने", iast: "yogine" },
          { dev: "योगिभ्याम्", iast: "yogibhyām" },
          { dev: "योगिभ्यः", iast: "yogibhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "योगिनः", iast: "yoginaḥ" },
          { dev: "योगिभ्याम्", iast: "yogibhyām" },
          { dev: "योगिभ्यः", iast: "yogibhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "योगिनः", iast: "yoginaḥ" },
          { dev: "योगिनोः", iast: "yoginoḥ" },
          { dev: "योगिनाम्", iast: "yoginām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "योगिनि", iast: "yogini" },
          { dev: "योगिनोः", iast: "yoginoḥ" },
          { dev: "योगिषु", iast: "yogiṣu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "योगिन्", iast: "yogin" },
          { dev: "योगिनौ", iast: "yoginau" },
          { dev: "योगिनः", iast: "yoginaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Neuter yogin in nominative, accusative, and vocative:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "योगि", iast: "yogi" },
          { dev: "योगिनी", iast: "yoginī" },
          { dev: "योगीनि", iast: "yogīni" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "योगि", iast: "yogi" },
          { dev: "योगिनी", iast: "yoginī" },
          { dev: "योगीनि", iast: "yogīni" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "योगि", iast: "yogi" },
          { dev: "योगिनी", iast: "yoginī" },
          { dev: "योगीनि", iast: "yogīni" },
        ],
      },
    ],
  },
  { type: "h2", text: "-vas, -ivas, and -yas" },
  {
    type: "p",
    text: "Root -vas (or -ivas on some roots) usually means “one who has X-ed.” Strong is -vāṃs (-ivāṃs), weak is -uṣ; before a consonant-initial ending, -vat (-ivat). Masculine vidvas, “one who knows; a wise person”:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "विद्वान्", iast: "vidvān" },
          { dev: "विद्वांसौ", iast: "vidvāṃsau" },
          { dev: "विद्वांसः", iast: "vidvāṃsaḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "विद्वांसम्", iast: "vidvāṃsam" },
          { dev: "विद्वांसौ", iast: "vidvāṃsau" },
          { dev: "विदुषः", iast: "viduṣaḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "विदुषा", iast: "viduṣā" },
          { dev: "विद्वद्भ्याम्", iast: "vidvadbhyām" },
          { dev: "विद्वद्भिः", iast: "vidvadbhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "विदुषे", iast: "viduṣe" },
          { dev: "विद्वद्भ्याम्", iast: "vidvadbhyām" },
          { dev: "विद्वद्भ्यः", iast: "vidvadbhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "विदुषः", iast: "viduṣaḥ" },
          { dev: "विद्वद्भ्याम्", iast: "vidvadbhyām" },
          { dev: "विद्वद्भ्यः", iast: "vidvadbhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "विदुषः", iast: "viduṣaḥ" },
          { dev: "विदुषोः", iast: "viduṣoḥ" },
          { dev: "विदुषाम्", iast: "viduṣām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "विदुषि", iast: "viduṣi" },
          { dev: "विदुषोः", iast: "viduṣoḥ" },
          { dev: "विद्वत्सु", iast: "vidvatsu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "विद्वन्", iast: "vidvan" },
          { dev: "विद्वांसौ", iast: "vidvāṃsau" },
          { dev: "विद्वांसः", iast: "vidvāṃsaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Neuter vidvas in nominative, accusative, and vocative:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "विद्वत्", iast: "vidvat" },
          { dev: "विदुषी", iast: "viduṣī" },
          { dev: "विद्वांसि", iast: "vidvāṃsi" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "विद्वत्", iast: "vidvat" },
          { dev: "विदुषी", iast: "viduṣī" },
          { dev: "विद्वांसि", iast: "vidvāṃsi" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "विद्वत्", iast: "vidvat" },
          { dev: "विदुषी", iast: "viduṣī" },
          { dev: "विद्वांसि", iast: "vidvāṃsi" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Nominal -yas on a stem meaning “X” means “more X.” Strong is -yāṃs, weak is -yas. Masculine śreyas, “better”:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "श्रेयान्", iast: "śreyān" },
          { dev: "श्रेयांसौ", iast: "śreyāṃsau" },
          { dev: "श्रेयांसः", iast: "śreyāṃsaḥ" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "श्रेयांसम्", iast: "śreyāṃsam" },
          { dev: "श्रेयांसौ", iast: "śreyāṃsau" },
          { dev: "श्रेयसः", iast: "śreyasaḥ" },
        ],
      },
      {
        label: { en: "instrumental", dev: "तृतीया", iast: "tṛtīyā", cue: "with, by means of" },
        cells: [
          { dev: "श्रेयसा", iast: "śreyasā" },
          { dev: "श्रेयोभ्याम्", iast: "śreyobhyām" },
          { dev: "श्रेयोभिः", iast: "śreyobhiḥ" },
        ],
      },
      {
        label: { en: "dative", dev: "चतुर्थी", iast: "caturthī", cue: "for, to" },
        cells: [
          { dev: "श्रेयसे", iast: "śreyase" },
          { dev: "श्रेयोभ्याम्", iast: "śreyobhyām" },
          { dev: "श्रेयोभ्यः", iast: "śreyobhyaḥ" },
        ],
      },
      {
        label: { en: "ablative", dev: "पञ्चमी", iast: "pañcamī", cue: "from" },
        cells: [
          { dev: "श्रेयसः", iast: "śreyasaḥ" },
          { dev: "श्रेयोभ्याम्", iast: "śreyobhyām" },
          { dev: "श्रेयोभ्यः", iast: "śreyobhyaḥ" },
        ],
      },
      {
        label: { en: "genitive", dev: "षष्ठी", iast: "ṣaṣṭhī", cue: "of" },
        cells: [
          { dev: "श्रेयसः", iast: "śreyasaḥ" },
          { dev: "श्रेयसोः", iast: "śreyasoḥ" },
          { dev: "श्रेयसाम्", iast: "śreyasām" },
        ],
      },
      {
        label: { en: "locative", dev: "सप्तमी", iast: "saptamī", cue: "in, on" },
        cells: [
          { dev: "श्रेयसि", iast: "śreyasi" },
          { dev: "श्रेयसोः", iast: "śreyasoḥ" },
          { dev: "श्रेयःसु", iast: "śreyaḥsu" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "श्रेयन्", iast: "śreyan" },
          { dev: "श्रेयांसौ", iast: "śreyāṃsau" },
          { dev: "श्रेयांसः", iast: "śreyāṃsaḥ" },
        ],
      },
    ],
  },
  {
    type: "p",
    text: "Neuter śreyas in nominative, accusative, and vocative:",
  },
  {
    type: "table",
    labelHeader: "Case",
    headers: ["Singular", "Dual", "Plural"],
    rows: [
      {
        label: { en: "nominative", dev: "प्रथमा", iast: "prathamā", cue: "subject" },
        cells: [
          { dev: "श्रेयः", iast: "śreyaḥ" },
          { dev: "श्रेयसी", iast: "śreyasī" },
          { dev: "श्रेयांसि", iast: "śreyāṃsi" },
        ],
      },
      {
        label: { en: "accusative", dev: "द्वितीया", iast: "dvitīyā", cue: "object" },
        cells: [
          { dev: "श्रेयः", iast: "śreyaḥ" },
          { dev: "श्रेयसी", iast: "śreyasī" },
          { dev: "श्रेयांसि", iast: "śreyāṃsi" },
        ],
      },
      {
        label: { en: "vocative", dev: "सम्बोधन", iast: "sambodhana", cue: "O" },
        cells: [
          { dev: "श्रेयः", iast: "śreyaḥ" },
          { dev: "श्रेयसी", iast: "śreyasī" },
          { dev: "श्रेयांसि", iast: "śreyāṃsi" },
        ],
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org consonant-stems page: strong/weak reminder; basic marut and manas full grids; -at/-mat/-vat with bhagavat masculine grid, neuter nom./acc./voc., -an exception (hanumān, gacchan), and feminine -ī note; -an/-man/-van with ātman full grid and karman neuter abbrev.; -in/-min/-vin with yogin full grid and neuter abbrev.; -vas/-ivas/-yas with vidvas and śreyas masculine grids and neuter abbrevs. No invented extra stems.",
  },
];
