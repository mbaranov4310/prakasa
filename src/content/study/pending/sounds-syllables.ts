/**
 * Drill card provenance:
 * First Steps Towards Sanskrit §3.5.4 / yava split (book ~pp.49–54): name each
 * syllable of a word. Lesson printed splits supply the join rules; swapped
 * ordinary words use the same open-syllable preference, ṃ/ḥ-with-vowel, and
 * final-leftovers pattern. Groups are one word family (need ≥4 distinct IAST).
 * Short lesson examples (yoga, dharma, saṃskṛta, duḥkha, sukham, …) omitted —
 * fewer than four distinct spellings. yuyutsavaḥ omitted (yu repeats).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sounds-syllables",
  titleEn: "Syllables",
  titleIast: "akṣara",
  lessonId: "sounds-syllables",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // --- vyākaraṇa (lesson printed split) ---
    {
      id: "vyakarana-1",
      // First Steps ~p.54 yava shape; lesson vyākaraṇa
      dev: "व्या",
      iast: "vyā",
      meaning: "First syllable of vyākaraṇa",
      unit: "akshara",
      group: "vyākaraṇa",
    },
    {
      id: "vyakarana-2",
      // First Steps ~p.54 yava shape; lesson vyākaraṇa
      dev: "क",
      iast: "ka",
      meaning: "Second syllable of vyākaraṇa",
      unit: "akshara",
      group: "vyākaraṇa",
    },
    {
      id: "vyakarana-3",
      // First Steps ~p.54 yava shape; lesson vyākaraṇa
      dev: "र",
      iast: "ra",
      meaning: "Third syllable of vyākaraṇa",
      unit: "akshara",
      group: "vyākaraṇa",
    },
    {
      id: "vyakarana-4",
      // First Steps ~p.54 yava shape; lesson vyākaraṇa
      dev: "ण",
      iast: "ṇa",
      meaning: "Fourth syllable of vyākaraṇa",
      unit: "akshara",
      group: "vyākaraṇa",
    },
    // --- dharmakṣetre (lesson printed split) ---
    {
      id: "dharmaksetre-1",
      // First Steps ~p.54 yava shape; lesson dharmakṣetre
      dev: "ध",
      iast: "dha",
      meaning: "First syllable of dharmakṣetre",
      unit: "akshara",
      group: "dharmakṣetre",
    },
    {
      id: "dharmaksetre-2",
      // First Steps ~p.54 yava shape; lesson dharmakṣetre
      dev: "र्म",
      iast: "rma",
      meaning: "Second syllable of dharmakṣetre",
      unit: "akshara",
      group: "dharmakṣetre",
    },
    {
      id: "dharmaksetre-3",
      // First Steps ~p.54 yava shape; lesson dharmakṣetre
      dev: "क्षे",
      iast: "kṣe",
      meaning: "Third syllable of dharmakṣetre",
      unit: "akshara",
      group: "dharmakṣetre",
    },
    {
      id: "dharmaksetre-4",
      // First Steps ~p.54 yava shape; lesson dharmakṣetre
      dev: "त्रे",
      iast: "tre",
      meaning: "Fourth syllable of dharmakṣetre",
      unit: "akshara",
      group: "dharmakṣetre",
    },
    // --- kurukṣetre (lesson printed split) ---
    {
      id: "kuruksetre-1",
      // First Steps ~p.54 yava shape; lesson kurukṣetre
      dev: "कु",
      iast: "ku",
      meaning: "First syllable of kurukṣetre",
      unit: "akshara",
      group: "kurukṣetre",
    },
    {
      id: "kuruksetre-2",
      // First Steps ~p.54 yava shape; lesson kurukṣetre
      dev: "रु",
      iast: "ru",
      meaning: "Second syllable of kurukṣetre",
      unit: "akshara",
      group: "kurukṣetre",
    },
    {
      id: "kuruksetre-3",
      // First Steps ~p.54 yava shape; lesson kurukṣetre
      dev: "क्षे",
      iast: "kṣe",
      meaning: "Third syllable of kurukṣetre",
      unit: "akshara",
      group: "kurukṣetre",
    },
    {
      id: "kuruksetre-4",
      // First Steps ~p.54 yava shape; lesson kurukṣetre
      dev: "त्रे",
      iast: "tre",
      meaning: "Fourth syllable of kurukṣetre",
      unit: "akshara",
      group: "kurukṣetre",
    },
    // --- samavetā (lesson printed split) ---
    {
      id: "samaveta-1",
      // First Steps ~p.54 yava shape; lesson samavetā
      dev: "स",
      iast: "sa",
      meaning: "First syllable of samavetā",
      unit: "akshara",
      group: "samavetā",
    },
    {
      id: "samaveta-2",
      // First Steps ~p.54 yava shape; lesson samavetā
      dev: "म",
      iast: "ma",
      meaning: "Second syllable of samavetā",
      unit: "akshara",
      group: "samavetā",
    },
    {
      id: "samaveta-3",
      // First Steps ~p.54 yava shape; lesson samavetā
      dev: "वे",
      iast: "ve",
      meaning: "Third syllable of samavetā",
      unit: "akshara",
      group: "samavetā",
    },
    {
      id: "samaveta-4",
      // First Steps ~p.54 yava shape; lesson samavetā
      dev: "ता",
      iast: "tā",
      meaning: "Fourth syllable of samavetā",
      unit: "akshara",
      group: "samavetā",
    },
    // --- himālaya (swap; First Steps yava shape on an ordinary noun) ---
    {
      id: "himalaya-1",
      // First Steps ~p.54 yava shape; yava→himālaya
      dev: "हि",
      iast: "hi",
      meaning: "First syllable of himālaya",
      unit: "akshara",
      group: "himālaya",
    },
    {
      id: "himalaya-2",
      // First Steps ~p.54 yava shape; yava→himālaya
      dev: "मा",
      iast: "mā",
      meaning: "Second syllable of himālaya",
      unit: "akshara",
      group: "himālaya",
    },
    {
      id: "himalaya-3",
      // First Steps ~p.54 yava shape; yava→himālaya
      dev: "ल",
      iast: "la",
      meaning: "Third syllable of himālaya",
      unit: "akshara",
      group: "himālaya",
    },
    {
      id: "himalaya-4",
      // First Steps ~p.54 yava shape; yava→himālaya
      dev: "य",
      iast: "ya",
      meaning: "Fourth syllable of himālaya",
      unit: "akshara",
      group: "himālaya",
    },
    // --- rājaputra (swap; open syllables + final cluster like kṣetra) ---
    {
      id: "rajaputra-1",
      // First Steps ~p.54 yava shape; yava→rājaputra
      dev: "रा",
      iast: "rā",
      meaning: "First syllable of rājaputra",
      unit: "akshara",
      group: "rājaputra",
    },
    {
      id: "rajaputra-2",
      // First Steps ~p.54 yava shape; yava→rājaputra
      dev: "ज",
      iast: "ja",
      meaning: "Second syllable of rājaputra",
      unit: "akshara",
      group: "rājaputra",
    },
    {
      id: "rajaputra-3",
      // First Steps ~p.54 yava shape; yava→rājaputra
      dev: "पु",
      iast: "pu",
      meaning: "Third syllable of rājaputra",
      unit: "akshara",
      group: "rājaputra",
    },
    {
      id: "rajaputra-4",
      // First Steps ~p.54 yava shape; yava→rājaputra
      dev: "त्र",
      iast: "tra",
      meaning: "Fourth syllable of rājaputra",
      unit: "akshara",
      group: "rājaputra",
    },
    // --- upaniṣad (swap; final leftovers like lesson sukham / vṛkṣāt) ---
    {
      id: "upanisad-1",
      // First Steps ~p.54 yava shape; leftovers cue from lesson sukham; swap upaniṣad
      dev: "उ",
      iast: "u",
      meaning: "First syllable of upaniṣad",
      unit: "akshara",
      group: "upaniṣad",
    },
    {
      id: "upanisad-2",
      // First Steps ~p.54 yava shape; leftovers cue from lesson sukham; swap upaniṣad
      dev: "प",
      iast: "pa",
      meaning: "Second syllable of upaniṣad",
      unit: "akshara",
      group: "upaniṣad",
    },
    {
      id: "upanisad-3",
      // First Steps ~p.54 yava shape; leftovers cue from lesson sukham; swap upaniṣad
      dev: "नि",
      iast: "ni",
      meaning: "Third syllable of upaniṣad",
      unit: "akshara",
      group: "upaniṣad",
    },
    {
      id: "upanisad-4",
      // First Steps ~p.54 yava shape; leftovers cue from lesson sukham; swap upaniṣad
      dev: "षद्",
      iast: "ṣad",
      meaning: "Fourth syllable of upaniṣad",
      unit: "akshara",
      group: "upaniṣad",
    },
    // --- saṃyamana (swap; anusvāra with its vowel like lesson saṃskṛta) ---
    {
      id: "samyamana-1",
      // First Steps ~p.54 yava shape; anusvāra cue from lesson saṃskṛta; swap saṃyamana
      dev: "सं",
      iast: "saṃ",
      meaning: "First syllable of saṃyamana",
      unit: "akshara",
      group: "saṃyamana",
    },
    {
      id: "samyamana-2",
      // First Steps ~p.54 yava shape; anusvāra cue from lesson saṃskṛta; swap saṃyamana
      dev: "य",
      iast: "ya",
      meaning: "Second syllable of saṃyamana",
      unit: "akshara",
      group: "saṃyamana",
    },
    {
      id: "samyamana-3",
      // First Steps ~p.54 yava shape; anusvāra cue from lesson saṃskṛta; swap saṃyamana
      dev: "म",
      iast: "ma",
      meaning: "Third syllable of saṃyamana",
      unit: "akshara",
      group: "saṃyamana",
    },
    {
      id: "samyamana-4",
      // First Steps ~p.54 yava shape; anusvāra cue from lesson saṃskṛta; swap saṃyamana
      dev: "न",
      iast: "na",
      meaning: "Fourth syllable of saṃyamana",
      unit: "akshara",
      group: "saṃyamana",
    },
  ] as QuizDeckItem[],
};
