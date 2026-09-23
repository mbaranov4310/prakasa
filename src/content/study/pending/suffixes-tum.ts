/**
 * Drill card provenance (infinitive / tumun; group = formation shape):
 * - tum|guna-vowel: lesson nī→netum; Gonda §105 ji→jetum; swaps śru, ci
 * - tum|it: lesson vand, khād; Gonda §105 jīv, bhū; First Steps likh→paṭh
 * - tum|palatal-k: lesson muc→moktum; Gonda §105 yuj→yoktum; FS tyaj→bhuj; vac
 * - tum|aspirate: lesson budh→boddhum; swaps yudh, labh, rudh
 * - tum|nasal: lesson/FS han→hantum; Gonda/FS gam→gantum; swaps yam, man
 * - tum|aa: lesson gai→gātum; swaps dā, pā, sthā
 * - tum|r-guna: Gonda §105 kṛ→kartum; swaps hṛ, smṛ, mṛ
 * Cue: First Steps Towards Sanskrit §7.5 (book p.133); Gonda §105 (pp.77–78).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-tum",
  titleEn: "-tum",
  titleIast: "tumun",
  lessonId: "suffixes-tum",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // tum|guna-vowel — guṇa + -tum, no iṭ (vowel roots)
    {
      id: "netum",
      // lesson nī → netum
      dev: "नेतुम्",
      iast: "netum",
      meaning: "to lead (nī + -tum)",
      unit: "word",
      group: "tum|guna-vowel",
    },
    {
      id: "jetum",
      // Gonda §105 ji → jetum
      dev: "जेतुम्",
      iast: "jetum",
      meaning: "to conquer (ji + -tum)",
      unit: "word",
      group: "tum|guna-vowel",
    },
    {
      id: "srotum",
      // Gonda §105 shape; ji→śru
      dev: "श्रोतुम्",
      iast: "śrotum",
      meaning: "to hear (śru + -tum)",
      unit: "word",
      group: "tum|guna-vowel",
    },
    {
      id: "cetum",
      // Gonda §105 shape; ji→ci
      dev: "चेतुम्",
      iast: "cetum",
      meaning: "to notice; perceive (ci + -tum)",
      unit: "word",
      group: "tum|guna-vowel",
    },

    // tum|it — connecting iṭ
    {
      id: "vanditum",
      // lesson vand → vanditum
      dev: "वन्दितुम्",
      iast: "vanditum",
      meaning: "to venerate (vand + -itum)",
      unit: "word",
      group: "tum|it",
    },
    {
      id: "khaditum",
      // lesson khāditum
      dev: "खादितुम्",
      iast: "khāditum",
      meaning: "to eat (khād + -itum)",
      unit: "word",
      group: "tum|it",
    },
    {
      id: "jivitum",
      // Gonda §105 jīv → jīvitum
      dev: "जीवितुम्",
      iast: "jīvitum",
      meaning: "to live (jīv + -itum)",
      unit: "word",
      group: "tum|it",
    },
    {
      id: "bhavitum",
      // Gonda §105 bhū → bhavitum
      dev: "भवितुम्",
      iast: "bhavitum",
      meaning: "to become; be (bhū + -itum)",
      unit: "word",
      group: "tum|it",
    },
    {
      id: "pathitum",
      // First Steps §7.5 likh→likhitum; swap paṭh (lesson -tvā has paṭhitvā)
      dev: "पठितुम्",
      iast: "paṭhitum",
      meaning: "to read; recite (paṭh + -itum)",
      unit: "word",
      group: "tum|it",
    },

    // tum|palatal-k — final c/j → k before -tum
    {
      id: "moktum",
      // lesson muc → moktum
      dev: "मोक्तुम्",
      iast: "moktum",
      meaning: "to free (muc + -tum)",
      unit: "word",
      group: "tum|palatal-k",
    },
    {
      id: "yoktum",
      // Gonda §105 yuj → yoktum
      dev: "योक्तुम्",
      iast: "yoktum",
      meaning: "to yoke; join (yuj + -tum)",
      unit: "word",
      group: "tum|palatal-k",
    },
    {
      id: "bhoktum",
      // First Steps §7.5 tyaj→tyaktum; swap bhuj
      dev: "भोक्तुम्",
      iast: "bhoktum",
      meaning: "to enjoy; eat (bhuj + -tum)",
      unit: "word",
      group: "tum|palatal-k",
    },
    {
      id: "vaktum",
      // First Steps / Gonda shape; vac (c → k)
      dev: "वक्तुम्",
      iast: "vaktum",
      meaning: "to say; speak (vac + -tum)",
      unit: "word",
      group: "tum|palatal-k",
    },

    // tum|aspirate — voiced aspirate + t → …ddh/…bdh (as -tvā)
    {
      id: "boddhum",
      // lesson budh → boddhum
      dev: "बोद्धुम्",
      iast: "boddhum",
      meaning: "to awaken (budh + -tum)",
      unit: "word",
      group: "tum|aspirate",
    },
    {
      id: "yoddhum",
      // lesson budh shape; swap yudh
      dev: "योद्धुम्",
      iast: "yoddhum",
      meaning: "to fight (yudh + -tum)",
      unit: "word",
      group: "tum|aspirate",
    },
    {
      id: "labdhum",
      // lesson budh shape; swap labh
      dev: "लब्धुम्",
      iast: "labdhum",
      meaning: "to obtain (labh + -tum)",
      unit: "word",
      group: "tum|aspirate",
    },
    {
      id: "roddhum",
      // lesson budh shape; swap rudh
      dev: "रोद्धुम्",
      iast: "roddhum",
      meaning: "to obstruct; stop (rudh + -tum)",
      unit: "word",
      group: "tum|aspirate",
    },

    // tum|nasal — final nasal adjusts before -tum
    {
      id: "hantum",
      // lesson / First Steps §7.5 han → hantum
      dev: "हन्तुम्",
      iast: "hantum",
      meaning: "to kill; strike (han + -tum)",
      unit: "word",
      group: "tum|nasal",
    },
    {
      id: "gantum",
      // Gonda §105 / First Steps gam → gantum
      dev: "गन्तुम्",
      iast: "gantum",
      meaning: "to go (gam + -tum)",
      unit: "word",
      group: "tum|nasal",
    },
    {
      id: "yantum",
      // First Steps gam shape; swap yam
      dev: "यन्तुम्",
      iast: "yantum",
      meaning: "to restrain; bestow (yam + -tum)",
      unit: "word",
      group: "tum|nasal",
    },
    {
      id: "mantum",
      // First Steps han/gam shape; swap man
      dev: "मन्तुम्",
      iast: "mantum",
      meaning: "to think (man + -tum)",
      unit: "word",
      group: "tum|nasal",
    },

    // tum|aa — root in ā / ai → …ātum
    {
      id: "gatum",
      // lesson gai → gātum
      dev: "गातुम्",
      iast: "gātum",
      meaning: "to sing (gai + -tum)",
      unit: "word",
      group: "tum|aa",
    },
    {
      id: "datum",
      // lesson gai shape; swap dā
      dev: "दातुम्",
      iast: "dātum",
      meaning: "to give (dā + -tum)",
      unit: "word",
      group: "tum|aa",
    },
    {
      id: "patum",
      // lesson gai shape; swap pā
      dev: "पातुम्",
      iast: "pātum",
      meaning: "to drink (pā + -tum)",
      unit: "word",
      group: "tum|aa",
    },
    {
      id: "sthatum",
      // lesson gai shape; swap sthā
      dev: "स्थातुम्",
      iast: "sthātum",
      meaning: "to stand (sthā + -tum)",
      unit: "word",
      group: "tum|aa",
    },

    // tum|r-guna — ṛ → ar + -tum
    {
      id: "kartum",
      // Gonda §105 kṛ → kartum
      dev: "कर्तुम्",
      iast: "kartum",
      meaning: "to do; make (kṛ + -tum)",
      unit: "word",
      group: "tum|r-guna",
    },
    {
      id: "hartum",
      // Gonda §105 kṛ shape; swap hṛ
      dev: "हर्तुम्",
      iast: "hartum",
      meaning: "to take; seize (hṛ + -tum)",
      unit: "word",
      group: "tum|r-guna",
    },
    {
      id: "smartum",
      // Gonda §105 kṛ shape; swap smṛ
      dev: "स्मर्तुम्",
      iast: "smartum",
      meaning: "to remember (smṛ + -tum)",
      unit: "word",
      group: "tum|r-guna",
    },
    {
      id: "martum",
      // Gonda §105 kṛ shape; swap mṛ
      dev: "मर्तुम्",
      iast: "martum",
      meaning: "to die (mṛ + -tum)",
      unit: "word",
      group: "tum|r-guna",
    },
  ] as QuizDeckItem[],
};
