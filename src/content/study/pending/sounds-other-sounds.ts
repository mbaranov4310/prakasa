/**
 * Drill card provenance:
 * First Steps Towards Sanskrit §3.5.1–3.5.2 (book ~pp.45–47) and true/false
 * cue §3.6 (book p.50): anusvāra → class nasal; word-final m → ṃ before a
 * consonant; final s/r → visarga.
 * Matching-nasal shape from the book’s śaṃkara / saṃcaya / saṃtoṣa / saṃpūrṇa
 * list; stems swapped (saṅkalpa, sañcara, sandeśa, sambhava) plus the four
 * lesson pairs (saṅgaḥ, sañjayaḥ, sannyāsaḥ, sambandhaḥ).
 * Visarga: lesson rāmas / mātar; swapped gajas, aśvas, naras.
 * Word-final ṃ: lesson rāvaṇaṃ; First Steps nagaraṃ shape swapped to grāmaṃ,
 * phalaṃ, aśvaṃ.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sounds-other-sounds",
  titleEn: "Other sounds",
  titleIast: "ayogavāha",
  lessonId: "sounds-other-sounds",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // --- anusvara|matching-nasal ---
    {
      id: "sangah",
      dev: "सङ्गः",
      iast: "saṅgaḥ",
      meaning: "saṃgaḥ with matching nasal before ga",
      unit: "word",
      group: "anusvara|matching-nasal",
    },
    {
      id: "sanjayah",
      dev: "सञ्जयः",
      iast: "sañjayaḥ",
      meaning: "saṃjayaḥ with matching nasal before ja",
      unit: "word",
      group: "anusvara|matching-nasal",
    },
    {
      id: "sannyasah",
      dev: "सन्न्यासः",
      iast: "sannyāsaḥ",
      meaning: "saṃnyāsaḥ with matching nasal before na",
      unit: "word",
      group: "anusvara|matching-nasal",
    },
    {
      id: "sambandhah",
      dev: "सम्बन्धः",
      iast: "sambandhaḥ",
      meaning: "saṃbandhaḥ with matching nasal before ba",
      unit: "word",
      group: "anusvara|matching-nasal",
    },
    {
      id: "sankalpa",
      dev: "सङ्कल्प",
      iast: "saṅkalpa",
      meaning: "saṃkalpa with matching nasal before ka",
      unit: "word",
      group: "anusvara|matching-nasal",
    },
    {
      id: "sancara",
      dev: "सञ्चर",
      iast: "sañcara",
      meaning: "saṃcara with matching nasal before ca",
      unit: "word",
      group: "anusvara|matching-nasal",
    },
    {
      id: "sandesa",
      dev: "सन्देश",
      iast: "sandeśa",
      meaning: "saṃdeśa with matching nasal before da",
      unit: "word",
      group: "anusvara|matching-nasal",
    },
    {
      id: "sambhava",
      dev: "सम्भव",
      iast: "sambhava",
      meaning: "saṃbhava with matching nasal before bha",
      unit: "word",
      group: "anusvara|matching-nasal",
    },
    // --- visarga|word-final ---
    {
      id: "ramah",
      dev: "रामः",
      iast: "rāmaḥ",
      meaning: "rāmas at word end",
      unit: "word",
      group: "visarga|word-final",
    },
    {
      id: "matah",
      dev: "मातः",
      iast: "mātaḥ",
      meaning: "mātar at word end",
      unit: "word",
      group: "visarga|word-final",
    },
    {
      id: "gajah",
      dev: "गजः",
      iast: "gajaḥ",
      meaning: "gajas at word end",
      unit: "word",
      group: "visarga|word-final",
    },
    {
      id: "asvah",
      dev: "अश्वः",
      iast: "aśvaḥ",
      meaning: "aśvas at word end",
      unit: "word",
      group: "visarga|word-final",
    },
    {
      id: "narah",
      dev: "नरः",
      iast: "naraḥ",
      meaning: "naras at word end",
      unit: "word",
      group: "visarga|word-final",
    },
    // --- anusvara|before-consonant ---
    {
      id: "ravanam",
      dev: "रावणं",
      iast: "rāvaṇaṃ",
      meaning: "rāvaṇam before a consonant",
      unit: "word",
      group: "anusvara|before-consonant",
    },
    {
      id: "gramam",
      dev: "ग्रामं",
      iast: "grāmaṃ",
      meaning: "grāmam before a consonant",
      unit: "word",
      group: "anusvara|before-consonant",
    },
    {
      id: "phalam",
      dev: "फलं",
      iast: "phalaṃ",
      meaning: "phalam before a consonant",
      unit: "word",
      group: "anusvara|before-consonant",
    },
    {
      id: "asvam",
      dev: "अश्वं",
      iast: "aśvaṃ",
      meaning: "aśvam before a consonant",
      unit: "word",
      group: "anusvara|before-consonant",
    },
  ] as QuizDeckItem[],
};
