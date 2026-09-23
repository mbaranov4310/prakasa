/**
 * Drill card provenance:
 * - suffix|-a: printed lesson glyphs only (bhū→bhāva, mṛ→māra, ānand→ānanda,
 *   yuj→yoga, śuc→śoka, tyaj→tyāga). First Steps has no kṛt / ghañ drill;
 *   Gonda Composition (§107–113) is preverbs and compounds, not these suffixes.
 * - suffix|-ana: printed lesson glyphs (kṛ→karaṇa, i→ayana, mṛ→maraṇa,
 *   mṛd→mardana). One card for karaṇa (noun and adj senses share spelling).
 * -aka (kāraka, pācaka), -in (kārin), -tṛ (kartṛ, netṛ, yoddhṛ), -tra (netra,
 *   mantra), and kartari prayoga omitted: each suffix has fewer than four
 *   distinct IAST; lesson does not state a join complete enough to invent more.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-other-root-suffixes",
  titleEn: "Other root suffixes",
  titleIast: "kṛt",
  lessonId: "suffixes-other-root-suffixes",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // suffix|-a (ghañ abstracts)
    {
      id: "bhava",
      // lesson glyph
      dev: "भाव",
      iast: "bhāva",
      meaning: "existence; the state of being or becoming (bhū + -a)",
      unit: "word",
      group: "suffix|-a",
    },
    {
      id: "mara",
      // lesson glyph
      dev: "मार",
      iast: "māra",
      meaning: "death (mṛ + -a)",
      unit: "word",
      group: "suffix|-a",
    },
    {
      id: "ananda",
      // lesson glyph
      dev: "आनन्द",
      iast: "ānanda",
      meaning: "bliss (ānand + -a)",
      unit: "word",
      group: "suffix|-a",
    },
    {
      id: "yoga",
      // lesson glyph (yuj + -a, j → g)
      dev: "योग",
      iast: "yoga",
      meaning: "joining; yoga (yuj + -a, j → g)",
      unit: "word",
      group: "suffix|-a",
    },
    {
      id: "soka",
      // lesson glyph (śuc + -a, c → k)
      dev: "शोक",
      iast: "śoka",
      meaning: "grief, sorrow (śuc + -a, c → k)",
      unit: "word",
      group: "suffix|-a",
    },
    {
      id: "tyaga",
      // lesson glyph (tyaj + -a, j → g)
      dev: "त्याग",
      iast: "tyāga",
      meaning: "abandonment, relinquishment (tyaj + -a, j → g)",
      unit: "word",
      group: "suffix|-a",
    },
    // suffix|-ana (lyuṭ/lyu nouns and adjectives)
    {
      id: "karana",
      // lesson glyph (noun and adj senses share spelling)
      dev: "करण",
      iast: "karaṇa",
      meaning: "act of doing; action; means (kṛ + -ana)",
      unit: "word",
      group: "suffix|-ana",
    },
    {
      id: "ayana",
      // lesson glyph
      dev: "अयन",
      iast: "ayana",
      meaning: "act of going; journey (i + -ana)",
      unit: "word",
      group: "suffix|-ana",
    },
    {
      id: "marana",
      // lesson glyph
      dev: "मरण",
      iast: "maraṇa",
      meaning: "act of dying; death (mṛ + -ana)",
      unit: "word",
      group: "suffix|-ana",
    },
    {
      id: "mardana",
      // lesson glyph
      dev: "मर्दन",
      iast: "mardana",
      meaning: "one who crushes or pulverizes (mṛd + -ana)",
      unit: "word",
      group: "suffix|-ana",
    },
  ] as QuizDeckItem[],
};
