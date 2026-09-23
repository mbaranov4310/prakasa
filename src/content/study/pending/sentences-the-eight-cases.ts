/**
 * Drill card provenance:
 * Cue: First Steps Towards Sanskrit §6.2 case functions (pp.105–108),
 * §6.3 short -a paradigm (deva, p.121), §6.7.1 case/number ID (p.131).
 * Textbook noun aśva/deva swapped to nara, siṃha, grāma (lesson examples).
 * Endings as masculine short -a (rāma/deva table); dual omitted
 * (three distinct spellings after collapse — need four for a practice group).
 *
 * nara|sg
 * - nara-sg-nom: First Steps aśva/deva → nara — naraḥ
 * - nara-sg-acc: First Steps aśva/deva → nara — naram
 * - nara-sg-ins: First Steps aśva/deva → nara — nareṇa
 * - nara-sg-dat: First Steps aśva/deva → nara — narāya
 * - nara-sg-abl: First Steps aśva/deva → nara — narāt
 * - nara-sg-gen: First Steps aśva/deva → nara — narasya
 * - nara-sg-loc: First Steps aśva/deva → nara — nare
 * - nara-sg-voc: First Steps aśva/deva → nara — nara
 * nara|pl (nom=voc; dat=abl collapsed)
 * - nara-pl-nom: First Steps aśva/deva → nara — narāḥ
 * - nara-pl-acc: First Steps aśva/deva → nara — narān
 * - nara-pl-ins: First Steps aśva/deva → nara — naraiḥ
 * - nara-pl-dat: First Steps aśva/deva → nara — narebhyaḥ
 * - nara-pl-gen: First Steps aśva/deva → nara — narāṇām
 * - nara-pl-loc: First Steps aśva/deva → nara — nareṣu
 *
 * siṃha|sg
 * - simha-sg-nom: First Steps aśva/deva → siṃha — siṃhaḥ
 * - simha-sg-acc: First Steps aśva/deva → siṃha — siṃham
 * - simha-sg-ins: First Steps aśva/deva → siṃha — siṃhena
 * - simha-sg-dat: First Steps aśva/deva → siṃha — siṃhāya
 * - simha-sg-abl: First Steps aśva/deva → siṃha — siṃhāt
 * - simha-sg-gen: First Steps aśva/deva → siṃha — siṃhasya
 * - simha-sg-loc: First Steps aśva/deva → siṃha — siṃhe
 * - simha-sg-voc: First Steps aśva/deva → siṃha — siṃha
 * siṃha|pl (nom=voc; dat=abl collapsed)
 * - simha-pl-nom: First Steps aśva/deva → siṃha — siṃhāḥ
 * - simha-pl-acc: First Steps aśva/deva → siṃha — siṃhān
 * - simha-pl-ins: First Steps aśva/deva → siṃha — siṃhaiḥ
 * - simha-pl-dat: First Steps aśva/deva → siṃha — siṃhebhyaḥ
 * - simha-pl-gen: First Steps aśva/deva → siṃha — siṃhānām
 * - simha-pl-loc: First Steps aśva/deva → siṃha — siṃheṣu
 *
 * grāma|sg
 * - grama-sg-nom: First Steps aśva/deva → grāma — grāmaḥ
 * - grama-sg-acc: First Steps aśva/deva → grāma — grāmam
 * - grama-sg-ins: First Steps aśva/deva → grāma — grāmeṇa
 * - grama-sg-dat: First Steps aśva/deva → grāma — grāmāya
 * - grama-sg-abl: First Steps aśva/deva → grāma — grāmāt
 * - grama-sg-gen: First Steps aśva/deva → grāma — grāmasya
 * - grama-sg-loc: First Steps aśva/deva → grāma — grāme
 * - grama-sg-voc: First Steps aśva/deva → grāma — grāma
 * grāma|pl (nom=voc; dat=abl collapsed)
 * - grama-pl-nom: First Steps aśva/deva → grāma — grāmāḥ
 * - grama-pl-acc: First Steps aśva/deva → grāma — grāmān
 * - grama-pl-ins: First Steps aśva/deva → grāma — grāmaiḥ
 * - grama-pl-dat: First Steps aśva/deva → grāma — grāmebhyaḥ
 * - grama-pl-gen: First Steps aśva/deva → grāma — grāmāṇām
 * - grama-pl-loc: First Steps aśva/deva → grāma — grāmeṣu
 *
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sentences-the-eight-cases",
  titleEn: "The eight cases",
  titleIast: "vibhakti",
  lessonId: "sentences-the-eight-cases",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "nara-sg-nom",
      dev: "नरः",
      iast: "naraḥ",
      meaning: "subject (one) nara",
      unit: "word",
      group: "nara|sg",
    },
    {
      id: "nara-sg-acc",
      dev: "नरम्",
      iast: "naram",
      meaning: "object (one) nara",
      unit: "word",
      group: "nara|sg",
    },
    {
      id: "nara-sg-ins",
      dev: "नरेण",
      iast: "nareṇa",
      meaning: "with (one) nara",
      unit: "word",
      group: "nara|sg",
    },
    {
      id: "nara-sg-dat",
      dev: "नराय",
      iast: "narāya",
      meaning: "for (one) nara",
      unit: "word",
      group: "nara|sg",
    },
    {
      id: "nara-sg-abl",
      dev: "नरात्",
      iast: "narāt",
      meaning: "from (one) nara",
      unit: "word",
      group: "nara|sg",
    },
    {
      id: "nara-sg-gen",
      dev: "नरस्य",
      iast: "narasya",
      meaning: "of (one) nara",
      unit: "word",
      group: "nara|sg",
    },
    {
      id: "nara-sg-loc",
      dev: "नरे",
      iast: "nare",
      meaning: "in (one) nara",
      unit: "word",
      group: "nara|sg",
    },
    {
      id: "nara-sg-voc",
      dev: "नर",
      iast: "nara",
      meaning: "O (one) nara",
      unit: "word",
      group: "nara|sg",
    },
    {
      id: "nara-pl-nom",
      dev: "नराः",
      iast: "narāḥ",
      meaning: "subject / O (many) nara",
      unit: "word",
      group: "nara|pl",
    },
    {
      id: "nara-pl-acc",
      dev: "नरान्",
      iast: "narān",
      meaning: "object (many) nara",
      unit: "word",
      group: "nara|pl",
    },
    {
      id: "nara-pl-ins",
      dev: "नरैः",
      iast: "naraiḥ",
      meaning: "with (many) nara",
      unit: "word",
      group: "nara|pl",
    },
    {
      id: "nara-pl-dat",
      dev: "नरेभ्यः",
      iast: "narebhyaḥ",
      meaning: "for / from (many) nara",
      unit: "word",
      group: "nara|pl",
    },
    {
      id: "nara-pl-gen",
      dev: "नराणाम्",
      iast: "narāṇām",
      meaning: "of (many) nara",
      unit: "word",
      group: "nara|pl",
    },
    {
      id: "nara-pl-loc",
      dev: "नरेषु",
      iast: "nareṣu",
      meaning: "in (many) nara",
      unit: "word",
      group: "nara|pl",
    },
    {
      id: "simha-sg-nom",
      dev: "सिंहः",
      iast: "siṃhaḥ",
      meaning: "subject (one) siṃha",
      unit: "word",
      group: "siṃha|sg",
    },
    {
      id: "simha-sg-acc",
      dev: "सिंहम्",
      iast: "siṃham",
      meaning: "object (one) siṃha",
      unit: "word",
      group: "siṃha|sg",
    },
    {
      id: "simha-sg-ins",
      dev: "सिंहेन",
      iast: "siṃhena",
      meaning: "with (one) siṃha",
      unit: "word",
      group: "siṃha|sg",
    },
    {
      id: "simha-sg-dat",
      dev: "सिंहाय",
      iast: "siṃhāya",
      meaning: "for (one) siṃha",
      unit: "word",
      group: "siṃha|sg",
    },
    {
      id: "simha-sg-abl",
      dev: "सिंहात्",
      iast: "siṃhāt",
      meaning: "from (one) siṃha",
      unit: "word",
      group: "siṃha|sg",
    },
    {
      id: "simha-sg-gen",
      dev: "सिंहस्य",
      iast: "siṃhasya",
      meaning: "of (one) siṃha",
      unit: "word",
      group: "siṃha|sg",
    },
    {
      id: "simha-sg-loc",
      dev: "सिंहे",
      iast: "siṃhe",
      meaning: "in (one) siṃha",
      unit: "word",
      group: "siṃha|sg",
    },
    {
      id: "simha-sg-voc",
      dev: "सिंह",
      iast: "siṃha",
      meaning: "O (one) siṃha",
      unit: "word",
      group: "siṃha|sg",
    },
    {
      id: "simha-pl-nom",
      dev: "सिंहाः",
      iast: "siṃhāḥ",
      meaning: "subject / O (many) siṃha",
      unit: "word",
      group: "siṃha|pl",
    },
    {
      id: "simha-pl-acc",
      dev: "सिंहान्",
      iast: "siṃhān",
      meaning: "object (many) siṃha",
      unit: "word",
      group: "siṃha|pl",
    },
    {
      id: "simha-pl-ins",
      dev: "सिंहैः",
      iast: "siṃhaiḥ",
      meaning: "with (many) siṃha",
      unit: "word",
      group: "siṃha|pl",
    },
    {
      id: "simha-pl-dat",
      dev: "सिंहेभ्यः",
      iast: "siṃhebhyaḥ",
      meaning: "for / from (many) siṃha",
      unit: "word",
      group: "siṃha|pl",
    },
    {
      id: "simha-pl-gen",
      dev: "सिंहानाम्",
      iast: "siṃhānām",
      meaning: "of (many) siṃha",
      unit: "word",
      group: "siṃha|pl",
    },
    {
      id: "simha-pl-loc",
      dev: "सिंहेषु",
      iast: "siṃheṣu",
      meaning: "in (many) siṃha",
      unit: "word",
      group: "siṃha|pl",
    },
    {
      id: "grama-sg-nom",
      dev: "ग्रामः",
      iast: "grāmaḥ",
      meaning: "subject (one) grāma",
      unit: "word",
      group: "grāma|sg",
    },
    {
      id: "grama-sg-acc",
      dev: "ग्रामम्",
      iast: "grāmam",
      meaning: "object (one) grāma",
      unit: "word",
      group: "grāma|sg",
    },
    {
      id: "grama-sg-ins",
      dev: "ग्रामेण",
      iast: "grāmeṇa",
      meaning: "with (one) grāma",
      unit: "word",
      group: "grāma|sg",
    },
    {
      id: "grama-sg-dat",
      dev: "ग्रामाय",
      iast: "grāmāya",
      meaning: "for (one) grāma",
      unit: "word",
      group: "grāma|sg",
    },
    {
      id: "grama-sg-abl",
      dev: "ग्रामात्",
      iast: "grāmāt",
      meaning: "from (one) grāma",
      unit: "word",
      group: "grāma|sg",
    },
    {
      id: "grama-sg-gen",
      dev: "ग्रामस्य",
      iast: "grāmasya",
      meaning: "of (one) grāma",
      unit: "word",
      group: "grāma|sg",
    },
    {
      id: "grama-sg-loc",
      dev: "ग्रामे",
      iast: "grāme",
      meaning: "in (one) grāma",
      unit: "word",
      group: "grāma|sg",
    },
    {
      id: "grama-sg-voc",
      dev: "ग्राम",
      iast: "grāma",
      meaning: "O (one) grāma",
      unit: "word",
      group: "grāma|sg",
    },
    {
      id: "grama-pl-nom",
      dev: "ग्रामाः",
      iast: "grāmāḥ",
      meaning: "subject / O (many) grāma",
      unit: "word",
      group: "grāma|pl",
    },
    {
      id: "grama-pl-acc",
      dev: "ग्रामान्",
      iast: "grāmān",
      meaning: "object (many) grāma",
      unit: "word",
      group: "grāma|pl",
    },
    {
      id: "grama-pl-ins",
      dev: "ग्रामैः",
      iast: "grāmaiḥ",
      meaning: "with (many) grāma",
      unit: "word",
      group: "grāma|pl",
    },
    {
      id: "grama-pl-dat",
      dev: "ग्रामेभ्यः",
      iast: "grāmebhyaḥ",
      meaning: "for / from (many) grāma",
      unit: "word",
      group: "grāma|pl",
    },
    {
      id: "grama-pl-gen",
      dev: "ग्रामाणाम्",
      iast: "grāmāṇām",
      meaning: "of (many) grāma",
      unit: "word",
      group: "grāma|pl",
    },
    {
      id: "grama-pl-loc",
      dev: "ग्रामेषु",
      iast: "grāmeṣu",
      meaning: "in (many) grāma",
      unit: "word",
      group: "grāma|pl",
    }
  ] as QuizDeckItem[],
};
