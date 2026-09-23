/**
 * Drill card provenance:
 * - gerundive|tavya: printed lesson stems (nī, vand, budh, yudh) plus gantavya /
 *   hantavya from the lesson sentence glyphs (gantavyam, hantavyaḥ). Cue: Gonda
 *   §104 a (p.77) lists kartavya / bhavitavya — textbook roots swapped to the
 *   lesson set. First Steps leaves participles out of scope (book ~p.150).
 * - gerundive|anīya: printed karaṇīya / darśanīya; vandanīya / bodhanīya /
 *   yodhanīya / gamanīya composed with the lesson rule (medium grade, no extra
 *   sandhi) on roots already on the page. Gonda §104 b cintanīya (class X) not
 *   used — special ay-drop.
 * - gerundive|ya: printed lesson cells only (irregular sound changes).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-tavya-aniya-and-ya",
  titleEn: "-tavya, -anīya, and -ya",
  titleIast: "tavya",
  lessonId: "suffixes-tavya-aniya-and-ya",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // --- gerundive|tavya ---
    {
      id: "netavya",
      // lesson glyph; Gonda §104 a swapped away from kartavya
      dev: "नेतव्य",
      iast: "netavya",
      meaning: "should or must be led (nī)",
      unit: "word",
      group: "gerundive|tavya",
    },
    {
      id: "vanditavya",
      // lesson glyph
      dev: "वन्दितव्य",
      iast: "vanditavya",
      meaning: "should or must be venerated (vand)",
      unit: "word",
      group: "gerundive|tavya",
    },
    {
      id: "boddhavya",
      // lesson glyph
      dev: "बोद्धव्य",
      iast: "boddhavya",
      meaning: "should or must be awakened (budh)",
      unit: "word",
      group: "gerundive|tavya",
    },
    {
      id: "yoddhavya",
      // lesson glyph
      dev: "योद्धव्य",
      iast: "yoddhavya",
      meaning: "should or must be fought (yudh)",
      unit: "word",
      group: "gerundive|tavya",
    },
    {
      id: "gantavya",
      // lesson sentence: gantavyam → stem
      dev: "गन्तव्य",
      iast: "gantavya",
      meaning: "should or must be gone to (gam)",
      unit: "word",
      group: "gerundive|tavya",
    },
    {
      id: "hantavya",
      // lesson sentence: hantavyaḥ → stem
      dev: "हन्तव्य",
      iast: "hantavya",
      meaning: "should or must be killed (han)",
      unit: "word",
      group: "gerundive|tavya",
    },
    // --- gerundive|anīya ---
    {
      id: "karaniya",
      // lesson glyph; Gonda §104 b
      dev: "करणीय",
      iast: "karaṇīya",
      meaning: "should or must be done (kṛ)",
      unit: "word",
      group: "gerundive|anīya",
    },
    {
      id: "darsaniya",
      // lesson glyph
      dev: "दर्शनीय",
      iast: "darśanīya",
      meaning: "should or must be seen (dṛś)",
      unit: "word",
      group: "gerundive|anīya",
    },
    {
      id: "vandaniya",
      // composed: lesson -anīya rule on vand
      dev: "वन्दनीय",
      iast: "vandanīya",
      meaning: "should or must be venerated (vand)",
      unit: "word",
      group: "gerundive|anīya",
    },
    {
      id: "bodhaniya",
      // composed: lesson -anīya rule on budh (medium grade)
      dev: "बोधनीय",
      iast: "bodhanīya",
      meaning: "should or must be awakened (budh)",
      unit: "word",
      group: "gerundive|anīya",
    },
    {
      id: "yodhaniya",
      // composed: lesson -anīya rule on yudh
      dev: "योधनीय",
      iast: "yodhanīya",
      meaning: "should or must be fought (yudh)",
      unit: "word",
      group: "gerundive|anīya",
    },
    {
      id: "gamaniya",
      // composed: lesson -anīya rule on gam (sentence root)
      dev: "गमनीय",
      iast: "gamanīya",
      meaning: "should or must be gone to (gam)",
      unit: "word",
      group: "gerundive|anīya",
    },
    // --- gerundive|ya (printed only) ---
    {
      id: "geyam",
      // lesson glyph
      dev: "गेयम्",
      iast: "geyam",
      meaning: "should or must be sung (gai)",
      unit: "word",
      group: "gerundive|ya",
    },
    {
      id: "peyam",
      // lesson glyph
      dev: "पेयम्",
      iast: "peyam",
      meaning: "should or must be drunk (pā)",
      unit: "word",
      group: "gerundive|ya",
    },
    {
      id: "labhya",
      // lesson glyph; Gonda §104 c labhya kept
      dev: "लभ्य",
      iast: "labhya",
      meaning: "should or must be obtained (labh)",
      unit: "word",
      group: "gerundive|ya",
    },
    {
      id: "sakya",
      // lesson glyph
      dev: "शक्य",
      iast: "śakya",
      meaning: "able to be done, possible (śak)",
      unit: "word",
      group: "gerundive|ya",
    },
    {
      id: "sahya",
      // lesson glyph
      dev: "सह्य",
      iast: "sahya",
      meaning: "endurable (sah)",
      unit: "word",
      group: "gerundive|ya",
    },
    {
      id: "karya",
      // lesson glyph; Gonda §104 c / §116 VII kāryam → stem
      dev: "कार्य",
      iast: "kārya",
      meaning: "should or must be done (kṛ)",
      unit: "word",
      group: "gerundive|ya",
    },
  ] as QuizDeckItem[],
};
