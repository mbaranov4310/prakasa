import type { LessonBlock } from "../catalog";

export const caVa: LessonBlock[] = [
  {
    type: "p",
    text: "Many small uninflected words turn up constantly. This page takes the common set in alphabetical order.",
  },
  {
    type: "ul",
    items: [
      "atha, eva, evam, iti, iva",
      "ca, tu, na, vā",
      "vinā, saha, sma, hi",
    ],
  },
  { type: "h2", text: "atha, eva, evam" },
  {
    type: "p",
    text: "atha often marks the start of a new topic:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अथ प्रथमो ऽध्यायः",
        iast: "atha prathamo 'dhyāyaḥ",
        note: "now begins the first chapter",
      },
    ],
  },
  {
    type: "p",
    text: "eva stresses the word before it — “indeed,” “truly,” or sometimes “only,” “alone”:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "राम एव लक्ष्मणस्य भ्राता",
        iast: "rāma eva lakṣmaṇasya bhrātā",
        note: "Rama truly is Lakshmana’s brother",
      },
      {
        dev: "अहम् एव बलवान्",
        iast: "aham eva balavān",
        note: "I alone am strong",
      },
    ],
  },
  {
    type: "p",
    text: "evam means “thus” or “in that matter”:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "स एवम् उवाच",
        iast: "sa evam uvāca",
        note: "thus did he speak",
      },
      {
        dev: "स एवं कृत्वा गृहम् अगच्छत्",
        iast: "sa evaṃ kṛtvā gṛham agacchat",
        note: "having done thus, he went home",
      },
    ],
  },
  { type: "h2", text: "iti, iva" },
  {
    type: "p",
    text: "iti generally closes a quote or a topic. A clause with iti can be read as indirect report or as the words themselves:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "अहम् बलवान् इति बालो मन्यते",
        iast: "aham balavān iti bālo manyate",
        note: "the boy thinks that he is strong / “I am strong”",
      },
      {
        dev: "इति प्रथमो ऽध्यायः",
        iast: "iti prathamo 'dhyāyaḥ",
        note: "so ends the first chapter",
      },
      {
        dev: "रामो गत इति शृणोति",
        iast: "rāmo gata iti śṛṇoti",
        note: "he hears that Rama has left / “Rama has left”",
      },
    ],
  },
  {
    type: "p",
    text: "iva means “like” or “as if,” and follows the word it describes. Case endings show which noun the comparison attaches to:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामः सिंह इव रावणं हन्ति",
        iast: "rāmaḥ siṃha iva rāvaṇaṃ hanti",
        note: "Rama kills Ravana as if he (Rama) were a lion",
      },
      {
        dev: "रामो मृगम् इव रावणं हन्ति",
        iast: "rāmo mṛgam iva rāvaṇaṃ hanti",
        note: "Rama kills Ravana as if he (Ravana) were a deer",
      },
      {
        dev: "रामो रावणम् सिंहो मृगम् इव हन्ति",
        iast: "rāmo rāvaṇam siṃho mṛgam iva hanti",
        note: "Rama kills Ravana as a lion would a deer",
      },
    ],
  },
  { type: "h2", text: "ca, tu, na, vā" },
  {
    type: "p",
    text: "ca means “and.” It follows the last item joined:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामः सीता च गच्छतः",
        iast: "rāmaḥ sītā ca gacchataḥ",
        note: "Rama and Sita go",
      },
      {
        dev: "रामः सीता गजश् च गच्छन्ति",
        iast: "rāmaḥ sītā gajaś ca gacchanti",
        note: "Rama, Sita, and the elephant go",
      },
    ],
  },
  {
    type: "p",
    text: "tu means “but” or “however”; na means “not”; vā means “or”:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो वनं गच्छति",
        iast: "rāmo vanaṃ gacchati",
        note: "Rama goes to the forest",
      },
      {
        dev: "दशरथस् तु न वनं गच्छति",
        iast: "daśarathas tu na vanaṃ gacchati",
        note: "but Dasharatha does not go to the forest",
      },
      {
        dev: "रामो न गच्छति",
        iast: "rāmo na gacchati",
        note: "Rama does not go",
      },
      {
        dev: "रामः सीता वा गच्छति",
        iast: "rāmaḥ sītā vā gacchati",
        note: "Rama or Sita goes",
      },
      {
        dev: "रामः सीता गजो वा गच्छति",
        iast: "rāmaḥ sītā gajo vā gacchati",
        note: "Rama, Sita, or the elephant goes",
      },
    ],
  },
  { type: "h2", text: "vinā, saha, sma, hi" },
  {
    type: "p",
    text: "vinā means “without”; saha means “with”:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो दशरथेन विना वनं गच्छति",
        iast: "rāmo daśarathena vinā vanaṃ gacchati",
        note: "Rama goes to the forest without Dasharatha",
      },
      {
        dev: "रामः सीतया सह वनं गच्छति",
        iast: "rāmaḥ sītayā saha vanaṃ gacchati",
        note: "Rama goes to the forest with Sita",
      },
    ],
  },
  {
    type: "p",
    text: "sma often means “indeed” or “truly,” but after a present-tense verb it marks past time:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो वने निवसति स्म",
        iast: "rāmo vane nivasati sma",
        note: "Rama lived in the forest",
      },
    ],
  },
  {
    type: "p",
    text: "hi means “after all” or “since”:",
  },
  {
    type: "glyphs",
    items: [
      {
        dev: "रामो रावणं हन्ति",
        iast: "rāmo rāvaṇaṃ hanti",
        note: "Rama kills Ravana",
      },
      {
        dev: "रामो हि रावणाद् बलवत्तरः",
        iast: "rāmo hi rāvaṇād balavattaraḥ",
        note: "after all, Rama is stronger than Ravana",
      },
    ],
  },
  {
    type: "note",
    text: "Transferred from the learnsanskrit.org page on ca, vā, and others: the alphabetical list and each particle’s sense and printed examples (atha through hi), including iti’s quote/topic use, iva’s case agreement, and sma after a present verb for past. No extra particles.",
  },
];
