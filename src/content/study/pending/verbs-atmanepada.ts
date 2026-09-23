/**
 * Drill card provenance:
 * - naya-present-3sg: from the lesson — naya present 3rd one
 * - naya-present-3du: from the lesson — naya present 3rd two
 * - naya-present-3pl: from the lesson — naya present 3rd many
 * - naya-present-2sg: from the lesson — naya present 2nd one
 * - naya-present-2du: from the lesson — naya present 2nd two
 * - naya-present-2pl: from the lesson — naya present 2nd many
 * - naya-present-1sg: from the lesson — naya present 1st one
 * - naya-present-1du: from the lesson — naya present 1st two
 * - naya-present-1pl: from the lesson — naya present 1st many
 * - naya-command-3sg: from the lesson — naya command 3rd one
 * - naya-command-3du: from the lesson — naya command 3rd two
 * - naya-command-3pl: from the lesson — naya command 3rd many
 * - naya-command-2sg: from the lesson — naya command 2nd one
 * - naya-command-2du: from the lesson — naya command 2nd two
 * - naya-command-2pl: from the lesson — naya command 2nd many
 * - naya-command-1sg: from the lesson — naya command 1st one
 * - naya-command-1du: from the lesson — naya command 1st two
 * - naya-command-1pl: from the lesson — naya command 1st many
 * - naya-past-3sg: from the lesson — naya ordinary past 3rd one
 * - naya-past-3du: from the lesson — naya ordinary past 3rd two
 * - naya-past-3pl: from the lesson — naya ordinary past 3rd many
 * - naya-past-2sg: from the lesson — naya ordinary past 2nd one
 * - naya-past-2du: from the lesson — naya ordinary past 2nd two
 * - naya-past-2pl: from the lesson — naya ordinary past 2nd many
 * - naya-past-1sg: from the lesson — naya ordinary past 1st one
 * - naya-past-1du: from the lesson — naya ordinary past 1st two
 * - naya-past-1pl: from the lesson — naya ordinary past 1st many
 * - naya-potential-3sg: from the lesson — naya potential 3rd one
 * - naya-potential-3du: from the lesson — naya potential 3rd two
 * - naya-potential-3pl: from the lesson — naya potential 3rd many
 * - naya-potential-2sg: from the lesson — naya potential 2nd one
 * - naya-potential-2du: from the lesson — naya potential 2nd two
 * - naya-potential-2pl: from the lesson — naya potential 2nd many
 * - naya-potential-1sg: from the lesson — naya potential 1st one
 * - naya-potential-1du: from the lesson — naya potential 1st two
 * - naya-potential-1pl: from the lesson — naya potential 1st many
 * - labha-present-3sg: First Steps §7.3 bhū ātm. present (book p.129); √bhū→labh, stem labha
 * - labha-present-3du: First Steps §7.3 bhū ātm. present (book p.129); √bhū→labh, stem labha
 * - labha-present-3pl: First Steps §7.3 bhū ātm. present (book p.129); √bhū→labh, stem labha
 * - labha-present-2sg: First Steps §7.3 bhū ātm. present (book p.129); √bhū→labh, stem labha
 * - labha-present-2du: First Steps §7.3 bhū ātm. present (book p.129); √bhū→labh, stem labha
 * - labha-present-2pl: First Steps §7.3 bhū ātm. present (book p.129); √bhū→labh, stem labha
 * - labha-present-1sg: First Steps §7.3 bhū ātm. present (book p.129); √bhū→labh, stem labha
 * - labha-present-1du: First Steps §7.3 bhū ātm. present (book p.129); √bhū→labh, stem labha
 * - labha-present-1pl: First Steps §7.3 bhū ātm. present (book p.129); √bhū→labh, stem labha
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "verbs-atmanepada",
  titleEn: "ātmanepada",
  titleIast: "ātmanepada",
  lessonId: "verbs-atmanepada",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "naya-present-3sg",
      dev: "नयते",
      iast: "nayate",
      meaning: "3rd (one) naya — present",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "naya-present-3du",
      dev: "नयेते",
      iast: "nayete",
      meaning: "3rd (two) naya — present",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "naya-present-3pl",
      dev: "नयन्ते",
      iast: "nayante",
      meaning: "3rd (many) naya — present",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "naya-present-2sg",
      dev: "नयसे",
      iast: "nayase",
      meaning: "2nd (one) naya — present",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "naya-present-2du",
      dev: "नयेथे",
      iast: "nayethe",
      meaning: "2nd (two) naya — present",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "naya-present-2pl",
      dev: "नयध्वे",
      iast: "nayadhve",
      meaning: "2nd (many) naya — present",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "naya-present-1sg",
      dev: "नये",
      iast: "naye",
      meaning: "1st (one) naya — present",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "naya-present-1du",
      dev: "नयावहे",
      iast: "nayāvahe",
      meaning: "1st (two) naya — present",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "naya-present-1pl",
      dev: "नयामहे",
      iast: "nayāmahe",
      meaning: "1st (many) naya — present",
      unit: "word",
      group: "nī|present",
    },
    {
      id: "naya-command-3sg",
      dev: "नयताम्",
      iast: "nayatām",
      meaning: "3rd (one) naya — command",
      unit: "word",
      group: "nī|command",
    },
    {
      id: "naya-command-3du",
      dev: "नयेताम्",
      iast: "nayetām",
      meaning: "3rd (two) naya — command",
      unit: "word",
      group: "nī|command",
    },
    {
      id: "naya-command-3pl",
      dev: "नयन्ताम्",
      iast: "nayantām",
      meaning: "3rd (many) naya — command",
      unit: "word",
      group: "nī|command",
    },
    {
      id: "naya-command-2sg",
      dev: "नयस्व",
      iast: "nayasva",
      meaning: "2nd (one) naya — command",
      unit: "word",
      group: "nī|command",
    },
    {
      id: "naya-command-2du",
      dev: "नयेथाम्",
      iast: "nayethām",
      meaning: "2nd (two) naya — command",
      unit: "word",
      group: "nī|command",
    },
    {
      id: "naya-command-2pl",
      dev: "नयध्वम्",
      iast: "nayadhvam",
      meaning: "2nd (many) naya — command",
      unit: "word",
      group: "nī|command",
    },
    {
      id: "naya-command-1sg",
      dev: "नयै",
      iast: "nayai",
      meaning: "1st (one) naya — command",
      unit: "word",
      group: "nī|command",
    },
    {
      id: "naya-command-1du",
      dev: "नयावहै",
      iast: "nayāvahai",
      meaning: "1st (two) naya — command",
      unit: "word",
      group: "nī|command",
    },
    {
      id: "naya-command-1pl",
      dev: "नयामहै",
      iast: "nayāmahai",
      meaning: "1st (many) naya — command",
      unit: "word",
      group: "nī|command",
    },
    {
      id: "naya-past-3sg",
      dev: "अनयत",
      iast: "anayata",
      meaning: "3rd (one) naya — ordinary past",
      unit: "word",
      group: "nī|past",
    },
    {
      id: "naya-past-3du",
      dev: "अनयेताम्",
      iast: "anayetām",
      meaning: "3rd (two) naya — ordinary past",
      unit: "word",
      group: "nī|past",
    },
    {
      id: "naya-past-3pl",
      dev: "अनयन्त",
      iast: "anayanta",
      meaning: "3rd (many) naya — ordinary past",
      unit: "word",
      group: "nī|past",
    },
    {
      id: "naya-past-2sg",
      dev: "अनयथाः",
      iast: "anayathāḥ",
      meaning: "2nd (one) naya — ordinary past",
      unit: "word",
      group: "nī|past",
    },
    {
      id: "naya-past-2du",
      dev: "अनयेथाम्",
      iast: "anayethām",
      meaning: "2nd (two) naya — ordinary past",
      unit: "word",
      group: "nī|past",
    },
    {
      id: "naya-past-2pl",
      dev: "अनयध्वम्",
      iast: "anayadhvam",
      meaning: "2nd (many) naya — ordinary past",
      unit: "word",
      group: "nī|past",
    },
    {
      id: "naya-past-1sg",
      dev: "अनये",
      iast: "anaye",
      meaning: "1st (one) naya — ordinary past",
      unit: "word",
      group: "nī|past",
    },
    {
      id: "naya-past-1du",
      dev: "अनयावहि",
      iast: "anayāvahi",
      meaning: "1st (two) naya — ordinary past",
      unit: "word",
      group: "nī|past",
    },
    {
      id: "naya-past-1pl",
      dev: "अनयामहि",
      iast: "anayāmahi",
      meaning: "1st (many) naya — ordinary past",
      unit: "word",
      group: "nī|past",
    },
    {
      id: "naya-potential-3sg",
      dev: "नयेत",
      iast: "nayeta",
      meaning: "3rd (one) naya — potential",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "naya-potential-3du",
      dev: "नयेयाताम्",
      iast: "nayeyātām",
      meaning: "3rd (two) naya — potential",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "naya-potential-3pl",
      dev: "नयेरन्",
      iast: "nayeran",
      meaning: "3rd (many) naya — potential",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "naya-potential-2sg",
      dev: "नयेः",
      iast: "nayeḥ",
      meaning: "2nd (one) naya — potential",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "naya-potential-2du",
      dev: "नयेयाथम्",
      iast: "nayeyātham",
      meaning: "2nd (two) naya — potential",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "naya-potential-2pl",
      dev: "नयेध्वम्",
      iast: "nayedhvam",
      meaning: "2nd (many) naya — potential",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "naya-potential-1sg",
      dev: "नयेय",
      iast: "nayeya",
      meaning: "1st (one) naya — potential",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "naya-potential-1du",
      dev: "नयेवहि",
      iast: "nayevahi",
      meaning: "1st (two) naya — potential",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "naya-potential-1pl",
      dev: "नयेमहि",
      iast: "nayemahi",
      meaning: "1st (many) naya — potential",
      unit: "word",
      group: "nī|potential",
    },
    {
      id: "labha-present-3sg",
      dev: "लभते",
      iast: "labhate",
      meaning: "3rd (one) labha — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "labha-present-3du",
      dev: "लभेते",
      iast: "labhete",
      meaning: "3rd (two) labha — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "labha-present-3pl",
      dev: "लभन्ते",
      iast: "labhante",
      meaning: "3rd (many) labha — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "labha-present-2sg",
      dev: "लभसे",
      iast: "labhase",
      meaning: "2nd (one) labha — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "labha-present-2du",
      dev: "लभेथे",
      iast: "labhethe",
      meaning: "2nd (two) labha — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "labha-present-2pl",
      dev: "लभध्वे",
      iast: "labhadhve",
      meaning: "2nd (many) labha — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "labha-present-1sg",
      dev: "लभे",
      iast: "labhe",
      meaning: "1st (one) labha — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "labha-present-1du",
      dev: "लभावहे",
      iast: "labhāvahe",
      meaning: "1st (two) labha — present",
      unit: "word",
      group: "labh|present",
    },
    {
      id: "labha-present-1pl",
      dev: "लभामहे",
      iast: "labhāmahe",
      meaning: "1st (many) labha — present",
      unit: "word",
      group: "labh|present",
    },
  ] as QuizDeckItem[],
};
