/**
 * Drill card provenance:
 * - ta|weak: lesson nīta / kṛta; bhūta from the -tvā no-strengthening join this
 *   page incorporates; bhṛta swapped in from Gonda §102 (p.76) citation √bhṛ.
 * - ta|drop-nasal: lesson gata; hata / mata from the -tvā drop-m/n list; nata
 *   applies the same printed rule to √nam. First Steps leaves PPP out of scope
 *   (~p.150); Gonda Exercises I use hata in sentences (not a stem drill).
 * - ta|aspirate: lesson buddha; labdha from the -tvā aspirate cells; dagdha from
 *   Gonda §102; yuddha applies the same voiced-aspirate join to √yudh.
 * - ta|samprasarana: ukta / supta / iṣṭa from Gonda §102 and the -tvā
 *   samprasāraṇa set; pṛṣṭa from Gonda §102 / -tvā pṛṣṭvā (√prach).
 * - ta|it: vandita / paṭhita from the -tvā iṭ cells; likhita / carita apply the
 *   same iṭ join (First Steps √likh; Gonda §102 patita swapped off √pat).
 * - ta|a-to-i: sthita / gīta from -tvā ā/e/ai→i/ī; pīta / hita from Gonda §102
 *   (√pā / √dhā).
 * - ta|c-j: mukta from -tvā; yukta from Gonda §102; tyakta / bhukta apply the
 *   printed final-c/j→k join to √tyaj / √bhuj.
 * - tavat|vat: lesson śrutavat; uktavat / kṛtavat from Gonda §103 (p.77);
 *   gatavat / nītavat = lesson PPP stems + the same -vat join.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-ta-and-tavat",
  titleEn: "-ta and -tavat",
  titleIast: "kta",
  lessonId: "suffixes-ta-and-tavat",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // --- ta|weak (no vowel strengthening) ---
    {
      id: "nita",
      // lesson glyph
      dev: "नीत",
      iast: "nīta",
      meaning: "led (nī + -ta)",
      unit: "word",
      group: "ta|weak",
    },
    {
      id: "krta",
      // lesson glyph
      dev: "कृत",
      iast: "kṛta",
      meaning: "done, made (kṛ + -ta)",
      unit: "word",
      group: "ta|weak",
    },
    {
      id: "bhuta",
      // -tvā join (bhūtvā) → -ta; same no-strengthening rule
      dev: "भूत",
      iast: "bhūta",
      meaning: "become; been (bhū + -ta)",
      unit: "word",
      group: "ta|weak",
    },
    {
      id: "bhrta",
      // Gonda §102 bhṛta; textbook √bhṛ kept as weak-vowel peer of lesson kṛ
      dev: "भृत",
      iast: "bhṛta",
      meaning: "borne, carried (bhṛ + -ta)",
      unit: "word",
      group: "ta|weak",
    },
    // --- ta|drop-nasal ---
    {
      id: "gata",
      // lesson glyph
      dev: "गत",
      iast: "gata",
      meaning: "(has) gone (gam + -ta)",
      unit: "word",
      group: "ta|drop-nasal",
    },
    {
      id: "hata",
      // -tvā hatvā; Gonda Exercises I hataḥ
      dev: "हत",
      iast: "hata",
      meaning: "killed, struck (han + -ta)",
      unit: "word",
      group: "ta|drop-nasal",
    },
    {
      id: "mata",
      // -tvā matvā; Gonda §102 mata
      dev: "मत",
      iast: "mata",
      meaning: "thought; believed (man + -ta)",
      unit: "word",
      group: "ta|drop-nasal",
    },
    {
      id: "nata",
      // same drop-m/n join on √nam
      dev: "नत",
      iast: "nata",
      meaning: "bent; bowed (nam + -ta)",
      unit: "word",
      group: "ta|drop-nasal",
    },
    // --- ta|aspirate ---
    {
      id: "buddha",
      // lesson glyph
      dev: "बुद्ध",
      iast: "buddha",
      meaning: "(has) awakened (budh + -ta)",
      unit: "word",
      group: "ta|aspirate",
    },
    {
      id: "labdha",
      // -tvā aspirate cell (labdha)
      dev: "लब्ध",
      iast: "labdha",
      meaning: "obtained (labh + -ta)",
      unit: "word",
      group: "ta|aspirate",
    },
    {
      id: "dagdha",
      // Gonda §102 dagdha (√dah)
      dev: "दग्ध",
      iast: "dagdha",
      meaning: "burned (dah + -ta)",
      unit: "word",
      group: "ta|aspirate",
    },
    {
      id: "yuddha",
      // same voiced-aspirate join on √yudh
      dev: "युद्ध",
      iast: "yuddha",
      meaning: "fought; battle (yudh + -ta)",
      unit: "word",
      group: "ta|aspirate",
    },
    // --- ta|samprasarana ---
    {
      id: "ukta",
      // Gonda §102 / -tvā uktvā
      dev: "उक्त",
      iast: "ukta",
      meaning: "spoken, said (vac + -ta)",
      unit: "word",
      group: "ta|samprasarana",
    },
    {
      id: "ista",
      // Gonda §102 iṣṭa
      dev: "इष्ट",
      iast: "iṣṭa",
      meaning: "sacrificed; desired (yaj + -ta)",
      unit: "word",
      group: "ta|samprasarana",
    },
    {
      id: "supta",
      // Gonda §102 / -tvā suptvā
      dev: "सुप्त",
      iast: "supta",
      meaning: "asleep (svap + -ta)",
      unit: "word",
      group: "ta|samprasarana",
    },
    {
      id: "prsta",
      // Gonda §102 pṛṣṭa; -tvā pṛṣṭvā
      dev: "पृष्ट",
      iast: "pṛṣṭa",
      meaning: "asked (prach + -ta)",
      unit: "word",
      group: "ta|samprasarana",
    },
    // --- ta|it ---
    {
      id: "vandita",
      // -tvā vanditvā → -ta
      dev: "वन्दित",
      iast: "vandita",
      meaning: "venerated (vand + i + -ta)",
      unit: "word",
      group: "ta|it",
    },
    {
      id: "pathita",
      // -tvā paṭhitvā → -ta
      dev: "पठित",
      iast: "paṭhita",
      meaning: "read, recited (paṭh + i + -ta)",
      unit: "word",
      group: "ta|it",
    },
    {
      id: "likhita",
      // First Steps √likh; Gonda §102 patita swapped off √pat
      dev: "लिखित",
      iast: "likhita",
      meaning: "written (likh + i + -ta)",
      unit: "word",
      group: "ta|it",
    },
    {
      id: "carita",
      // same iṭ join on √car
      dev: "चरित",
      iast: "carita",
      meaning: "done, practiced (car + i + -ta)",
      unit: "word",
      group: "ta|it",
    },
    // --- ta|a-to-i ---
    {
      id: "sthita",
      // -tvā sthitvā; Gonda §102 sthita
      dev: "स्थित",
      iast: "sthita",
      meaning: "stood; standing (sthā + -ta)",
      unit: "word",
      group: "ta|a-to-i",
    },
    {
      id: "gita",
      // -tvā gītvā → -ta
      dev: "गीत",
      iast: "gīta",
      meaning: "sung (gai + -ta)",
      unit: "word",
      group: "ta|a-to-i",
    },
    {
      id: "pita",
      // Gonda §102 pīta
      dev: "पीत",
      iast: "pīta",
      meaning: "drunk (pā + -ta)",
      unit: "word",
      group: "ta|a-to-i",
    },
    {
      id: "hita",
      // Gonda §102 hita (√dhā)
      dev: "हित",
      iast: "hita",
      meaning: "placed; beneficial (dhā + -ta)",
      unit: "word",
      group: "ta|a-to-i",
    },
    // --- ta|c-j ---
    {
      id: "mukta",
      // -tvā mukta
      dev: "मुक्त",
      iast: "mukta",
      meaning: "freed, released (muc + -ta)",
      unit: "word",
      group: "ta|c-j",
    },
    {
      id: "yukta",
      // Gonda §102 yukta
      dev: "युक्त",
      iast: "yukta",
      meaning: "yoked, joined (yuj + -ta)",
      unit: "word",
      group: "ta|c-j",
    },
    {
      id: "tyakta",
      // same final-j→k join on √tyaj
      dev: "त्यक्त",
      iast: "tyakta",
      meaning: "abandoned (tyaj + -ta)",
      unit: "word",
      group: "ta|c-j",
    },
    {
      id: "bhukta",
      // same final-j→k join on √bhuj
      dev: "भुक्त",
      iast: "bhukta",
      meaning: "eaten, enjoyed (bhuj + -ta)",
      unit: "word",
      group: "ta|c-j",
    },
    // --- tavat|vat ---
    {
      id: "srutavat",
      // lesson glyph
      dev: "श्रुतवत्",
      iast: "śrutavat",
      meaning: "has heard (śru + -tavat)",
      unit: "word",
      group: "tavat|vat",
    },
    {
      id: "uktavat",
      // Gonda §103 uktavat
      dev: "उक्तवत्",
      iast: "uktavat",
      meaning: "has said (vac + -tavat)",
      unit: "word",
      group: "tavat|vat",
    },
    {
      id: "krtavat",
      // Gonda §103 kṛtavān → stem kṛtavat
      dev: "कृतवत्",
      iast: "kṛtavat",
      meaning: "has done, has made (kṛ + -tavat)",
      unit: "word",
      group: "tavat|vat",
    },
    {
      id: "gatavat",
      // lesson gata + Gonda §103 -vat
      dev: "गतवत्",
      iast: "gatavat",
      meaning: "has gone (gam + -tavat)",
      unit: "word",
      group: "tavat|vat",
    },
    {
      id: "nitavat",
      // lesson nīta + Gonda §103 -vat
      dev: "नीतवत्",
      iast: "nītavat",
      meaning: "has led (nī + -tavat)",
      unit: "word",
      group: "tavat|vat",
    },
  ] as QuizDeckItem[],
};
