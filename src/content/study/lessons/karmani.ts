import type { LessonBlock } from "../catalog";

export const karmani: LessonBlock[] = [
  {
    type: "p",
    text: "Also called patientive and impersonal usage — what English often labels the “passive voice.” Sanskrit verbs use one of three prayogas. kartari prayoga (“agent usage”) is the familiar active pattern:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो नगरं गच्छति।",
        iast: "rāmo nagaraṃ gacchati.",
        note: "Rama goes to the city",
      },
      {
        dev: "कुम्भकर्णः स्वपिति।",
        iast: "kumbhakarṇaḥ svapiti.",
        note: "Kumbhakarna sleeps",
      },
    ],
  },
  {
    type: "p",
    text: "karmaṇi prayoga (“object usage”) is available when the verb takes an object:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामेण नगरं गम्यते।",
        iast: "rāmeṇa nagaraṃ gamyate.",
        note: "The city is gone to by Rama",
      },
    ],
  },
  {
    type: "p",
    text: "bhāve prayoga (“stative usage”) is used when the verb has no object:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "कुम्भकर्णेन सुप्यते।",
        iast: "kumbhakarṇena supyate.",
        note: "There is sleeping by Kumbhakarna",
      },
    ],
  },
  {
    type: "p",
    text: "prayoga does not change what the sentence means; it only changes how the same facts are framed — like “I go to the store” versus “The store was gone to by me.”",
  },
  { type: "h2", text: "Four special tense-moods" },
  {
    type: "p",
    text: "The four special tense-moods appear in karmaṇi and bhāve as well:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रावणो हन्यते",
        iast: "rāvaṇo hanyate",
        note: "is being killed",
      },
      {
        dev: "रावणो हन्यताम्",
        iast: "rāvaṇo hanyatām",
        note: "may be killed",
      },
      {
        dev: "रावणो ऽहन्यत",
        iast: "rāvaṇo 'hanyata",
        note: "was killed",
      },
      {
        dev: "रावणो हन्येत",
        iast: "rāvaṇo hanyeta",
        note: "might be killed",
      },
    ],
  },
  { type: "h2", text: "Active, middle, passive" },
  {
    type: "ul",
    items: [
      "active voice: kartari prayoga, parasmaipada",
      "middle voice: kartari prayoga, ātmanepada",
      "passive voice: karmaṇi and bhāve prayoga (always ātmanepada)",
    ],
  },
  {
    type: "p",
    text: "Those English labels are workable, but this guide prefers pada and prayoga.",
  },
  { type: "h2", text: "A new stem" },
  {
    type: "p",
    text: "karmaṇi and bhāve share one formation: add the suffix ya to the root, then use ātmanepada endings.",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नी + य → नीय",
        iast: "nī + ya → nīya",
        note: "lead → be led",
      },
    ],
  },
  {
    type: "p",
    text: "In karmaṇi, person and number agree with the object:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अहं गजान् नयामि।",
        iast: "ahaṃ gajān nayāmi.",
        note: "I lead the elephants",
      },
      {
        dev: "मया गजा नीयन्ते।",
        iast: "mayā gajā nīyante.",
        note: "By me, the elephants are led",
      },
    ],
  },
  {
    type: "p",
    text: "In bhāve, the verb is always third-person singular:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "मया सुप्यते।",
        iast: "mayā supyate.",
        note: "There is sleeping by me",
      },
      {
        dev: "नरैः सुप्यते।",
        iast: "naraiḥ supyate.",
        note: "There is sleeping by the men",
      },
    ],
  },
  { type: "h2", text: "Adding the -ya suffix" },
  {
    type: "p",
    text: "Often -ya joins the root directly:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "नी → नीयते",
        iast: "nī → nīyate",
        note: "lead → is led",
      },
    ],
  },
  {
    type: "p",
    text: "Roots ending in a short vowel lengthen it:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "जि → जीयते",
        iast: "ji → jīyate",
        note: "conquer → is conquered",
      },
    ],
  },
  {
    type: "p",
    text: "Roots in -ā and -ai usually take -ī instead:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "स्था → स्थीयते",
        iast: "sthā → sthīyate",
        note: "stand → is stood",
      },
      {
        dev: "गै → गीयते",
        iast: "gai → gīyate",
        note: "sing → is sung",
      },
      {
        dev: "दा → दीयते",
        iast: "dā → dīyate",
        note: "give → is given",
      },
    ],
  },
  {
    type: "p",
    text: "Final -ṛ becomes -ri, or -ar after a consonant cluster:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "कृ → क्रियते",
        iast: "kṛ → kriyate",
        note: "do → is done",
      },
      {
        dev: "स्मृ → स्मर्यते",
        iast: "smṛ → smaryate",
        note: "remember → is remembered",
      },
    ],
  },
  {
    type: "p",
    text: "Final ṝ becomes -īr, or -ūr after a lip consonant:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "तॄ → तीर्यते",
        iast: "tṝ → tīryate",
        note: "cross → is crossed",
      },
      {
        dev: "पॄ → पूर्यते",
        iast: "pṝ → pūryate",
        note: "fill → is filled",
      },
    ],
  },
  {
    type: "p",
    text: "A few roots use samprasāraṇa: their semivowels become vowels, and other vowels drop:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "वच् → उच्यते",
        iast: "vac → ucyate",
        note: "speak → is spoken",
      },
      {
        dev: "स्वप् → सुप्यते",
        iast: "svap → supyate",
        note: "sleep → there is sleeping",
      },
      {
        dev: "यज् → इज्यते",
        iast: "yaj → ijyate",
        note: "sacrifice → is sacrificed",
      },
      {
        dev: "प्रछ् → पृच्छ्यते",
        iast: "prach → pṛcchyate",
        note: "ask → is asked",
      },
    ],
  },
  {
    type: "note",
    text: "Roughly, samprasāraṇa roots were strengthened by adding a after the root vowel; weakening undoes that a and its sandhi. karmaṇi is common; bhāve is rarer but still appears.",
  },
  {
    type: "note",
    text: "Transferred from learnsanskrit.org karmaṇi and bhāve prayoga: three prayogas with printed examples; meaning-neutral framing; four special tense-moods on han; active/middle/passive vs pada–prayoga; -ya stem + ātmanepada; object agreement vs bhāve 3sg; -ya suffix rules (short-vowel lengthening, ā/ai → ī, ṛ → ri/ar, ṝ → īr/ūr, samprasāraṇa set). No extra stems.",
  },
];
