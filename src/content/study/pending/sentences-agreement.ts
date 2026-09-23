/**
 * Drill card provenance:
 * - krsna-sarpa-sg-nom: lesson kṛṣṇa/sarpa; -a endings — kṛṣṇaḥ sarpaḥ
 * - krsna-sarpa-du-nom: lesson kṛṣṇa/sarpa; -a endings — kṛṣṇau sarpau
 * - krsna-sarpa-pl-nom: lesson kṛṣṇa/sarpa; -a endings — kṛṣṇāḥ sarpāḥ
 * - krsna-sarpa-sg-acc: lesson kṛṣṇa/sarpa; -a endings — kṛṣṇaṃ sarpam
 * - krsna-sarpa-sg-ins: lesson kṛṣṇa/sarpa; -a endings — kṛṣṇena sarpeṇa
 * - krsna-sarpa-sg-dat: lesson kṛṣṇa/sarpa; -a endings — kṛṣṇāya sarpāya
 * - krsna-sarpa-sg-gen: lesson kṛṣṇa/sarpa; -a endings — kṛṣṇasya sarpasya
 * - krsna-sarpa-sg-loc: lesson kṛṣṇa/sarpa; -a endings — kṛṣṇe sarpe
 * - krsna-asva-sg-nom: First Steps aśva; noun swapped from sarpa — kṛṣṇaḥ aśvaḥ
 * - krsna-asva-du-nom: First Steps aśva; noun swapped from sarpa — kṛṣṇau aśvau
 * - krsna-asva-pl-nom: First Steps aśva; noun swapped from sarpa — kṛṣṇāḥ aśvāḥ
 * - krsna-asva-sg-acc: First Steps aśva; noun swapped from sarpa — kṛṣṇaṃ aśvam
 * - krsna-asva-sg-ins: First Steps aśva; noun swapped from sarpa — kṛṣṇena aśvena
 * - krsna-asva-sg-dat: First Steps aśva; noun swapped from sarpa — kṛṣṇāya aśvāya
 * - krsna-asva-sg-gen: First Steps aśva; noun swapped from sarpa — kṛṣṇasya aśvasya
 * - krsna-asva-sg-loc: First Steps aśva; noun swapped from sarpa — kṛṣṇe aśve
 * - sukla-gaja-sg-nom: lesson gaja; adj swapped to śukla — śuklaḥ gajaḥ
 * - sukla-gaja-du-nom: lesson gaja; adj swapped to śukla — śuklau gajau
 * - sukla-gaja-pl-nom: lesson gaja; adj swapped to śukla — śuklāḥ gajāḥ
 * - sukla-gaja-sg-acc: lesson gaja; adj swapped to śukla — śuklaṃ gajam
 * - sukla-gaja-sg-ins: lesson gaja; adj swapped to śukla — śuklena gajena
 * - sukla-gaja-sg-dat: lesson gaja; adj swapped to śukla — śuklāya gajāya
 * - sukla-gaja-sg-gen: lesson gaja; adj swapped to śukla — śuklasya gajasya
 * - sukla-gaja-sg-loc: lesson gaja; adj swapped to śukla — śukle gaje
 * - car-aham: lesson √car person/number (/karmaṇi) — ahaṃ carāmi
 * - car-tvam: lesson √car person/number (/karmaṇi) — tvaṃ carasi
 * - car-gaja-sg: lesson √car person/number (/karmaṇi) — gajaś carati
 * - car-gaja-du: lesson √car person/number (/karmaṇi) — gajau carataḥ
 * - car-gaja-pl: lesson √car person/number (/karmaṇi) — gajāś caranti
 * - cary-aham: lesson √car person/number (/karmaṇi) — ahaṃ carye
 * - cary-tvam: lesson √car person/number (/karmaṇi) — tvaṃ caryase
 * - cary-gaja-sg: lesson √car person/number (/karmaṇi) — nareṇa gajaś caryate
 * - cary-gaja-du: lesson √car person/number (/karmaṇi) — nareṇa gajau caryete
 * - cary-gaja-pl: lesson √car person/number (/karmaṇi) — nareṇa gajāś caryante
 * - likh-aham: First Steps §7.7 √likh; sūta from (ii) — ahaṃ likhāmi
 * - likh-tvam: First Steps §7.7 √likh; sūta from (ii) — tvaṃ likhasi
 * - likh-suta-sg: First Steps §7.7 √likh; sūta from (ii) — sūtaḥ likhati
 * - likh-suta-du: First Steps §7.7 √likh; sūta from (ii) — sūtau likhataḥ
 * - likh-suta-pl: First Steps §7.7 √likh; sūta from (ii) — sūtāḥ likhanti
 * - nrt-aham: First Steps §7.7 √nṛt; kanyā number varied — ahaṃ nṛtyāmi
 * - nrt-tvam: First Steps §7.7 √nṛt; kanyā number varied — tvaṃ nṛtyasi
 * - nrt-kanya-sg: First Steps §7.7 √nṛt; kanyā number varied — kanyā nṛtyati
 * - nrt-kanya-du: First Steps §7.7 √nṛt; kanyā number varied — kanye nṛtyataḥ
 * - nrt-kanya-pl: First Steps §7.7 √nṛt; kanyā number varied — kanyāḥ nṛtyanti
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sentences-agreement",
  titleEn: "Agreement",
  titleIast: "anvaya",
  lessonId: "sentences-agreement",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "krsna-sarpa-sg-nom",
      dev: "कृष्णः सर्पः",
      iast: "kṛṣṇaḥ sarpaḥ",
      meaning: "kṛṣṇa + sarpa as subject (one)",
      unit: "word",
      group: "kṛṣṇa-sarpa",
    },
    {
      id: "krsna-sarpa-du-nom",
      dev: "कृष्णौ सर्पौ",
      iast: "kṛṣṇau sarpau",
      meaning: "kṛṣṇa + sarpa as subjects (two)",
      unit: "word",
      group: "kṛṣṇa-sarpa",
    },
    {
      id: "krsna-sarpa-pl-nom",
      dev: "कृष्णाः सर्पाः",
      iast: "kṛṣṇāḥ sarpāḥ",
      meaning: "kṛṣṇa + sarpa as subjects (many)",
      unit: "word",
      group: "kṛṣṇa-sarpa",
    },
    {
      id: "krsna-sarpa-sg-acc",
      dev: "कृष्णं सर्पम्",
      iast: "kṛṣṇaṃ sarpam",
      meaning: "kṛṣṇa + sarpa as object (one)",
      unit: "word",
      group: "kṛṣṇa-sarpa",
    },
    {
      id: "krsna-sarpa-sg-ins",
      dev: "कृष्णेन सर्पेण",
      iast: "kṛṣṇena sarpeṇa",
      meaning: "with (one) kṛṣṇa + sarpa",
      unit: "word",
      group: "kṛṣṇa-sarpa",
    },
    {
      id: "krsna-sarpa-sg-dat",
      dev: "कृष्णाय सर्पाय",
      iast: "kṛṣṇāya sarpāya",
      meaning: "for (one) kṛṣṇa + sarpa",
      unit: "word",
      group: "kṛṣṇa-sarpa",
    },
    {
      id: "krsna-sarpa-sg-gen",
      dev: "कृष्णस्य सर्पस्य",
      iast: "kṛṣṇasya sarpasya",
      meaning: "of (one) kṛṣṇa + sarpa",
      unit: "word",
      group: "kṛṣṇa-sarpa",
    },
    {
      id: "krsna-sarpa-sg-loc",
      dev: "कृष्णे सर्पे",
      iast: "kṛṣṇe sarpe",
      meaning: "in/at (one) kṛṣṇa + sarpa",
      unit: "word",
      group: "kṛṣṇa-sarpa",
    },
    {
      id: "krsna-asva-sg-nom",
      dev: "कृष्णः अश्वः",
      iast: "kṛṣṇaḥ aśvaḥ",
      meaning: "kṛṣṇa + aśva as subject (one)",
      unit: "word",
      group: "kṛṣṇa-aśva",
    },
    {
      id: "krsna-asva-du-nom",
      dev: "कृष्णौ अश्वौ",
      iast: "kṛṣṇau aśvau",
      meaning: "kṛṣṇa + aśva as subjects (two)",
      unit: "word",
      group: "kṛṣṇa-aśva",
    },
    {
      id: "krsna-asva-pl-nom",
      dev: "कृष्णाः अश्वाः",
      iast: "kṛṣṇāḥ aśvāḥ",
      meaning: "kṛṣṇa + aśva as subjects (many)",
      unit: "word",
      group: "kṛṣṇa-aśva",
    },
    {
      id: "krsna-asva-sg-acc",
      dev: "कृष्णं अश्वम्",
      iast: "kṛṣṇaṃ aśvam",
      meaning: "kṛṣṇa + aśva as object (one)",
      unit: "word",
      group: "kṛṣṇa-aśva",
    },
    {
      id: "krsna-asva-sg-ins",
      dev: "कृष्णेन अश्वेन",
      iast: "kṛṣṇena aśvena",
      meaning: "with (one) kṛṣṇa + aśva",
      unit: "word",
      group: "kṛṣṇa-aśva",
    },
    {
      id: "krsna-asva-sg-dat",
      dev: "कृष्णाय अश्वाय",
      iast: "kṛṣṇāya aśvāya",
      meaning: "for (one) kṛṣṇa + aśva",
      unit: "word",
      group: "kṛṣṇa-aśva",
    },
    {
      id: "krsna-asva-sg-gen",
      dev: "कृष्णस्य अश्वस्य",
      iast: "kṛṣṇasya aśvasya",
      meaning: "of (one) kṛṣṇa + aśva",
      unit: "word",
      group: "kṛṣṇa-aśva",
    },
    {
      id: "krsna-asva-sg-loc",
      dev: "कृष्णे अश्वे",
      iast: "kṛṣṇe aśve",
      meaning: "in/at (one) kṛṣṇa + aśva",
      unit: "word",
      group: "kṛṣṇa-aśva",
    },
    {
      id: "sukla-gaja-sg-nom",
      dev: "शुक्लः गजः",
      iast: "śuklaḥ gajaḥ",
      meaning: "śukla + gaja as subject (one)",
      unit: "word",
      group: "śukla-gaja",
    },
    {
      id: "sukla-gaja-du-nom",
      dev: "शुक्लौ गजौ",
      iast: "śuklau gajau",
      meaning: "śukla + gaja as subjects (two)",
      unit: "word",
      group: "śukla-gaja",
    },
    {
      id: "sukla-gaja-pl-nom",
      dev: "शुक्लाः गजाः",
      iast: "śuklāḥ gajāḥ",
      meaning: "śukla + gaja as subjects (many)",
      unit: "word",
      group: "śukla-gaja",
    },
    {
      id: "sukla-gaja-sg-acc",
      dev: "शुक्लं गजम्",
      iast: "śuklaṃ gajam",
      meaning: "śukla + gaja as object (one)",
      unit: "word",
      group: "śukla-gaja",
    },
    {
      id: "sukla-gaja-sg-ins",
      dev: "शुक्लेन गजेन",
      iast: "śuklena gajena",
      meaning: "with (one) śukla + gaja",
      unit: "word",
      group: "śukla-gaja",
    },
    {
      id: "sukla-gaja-sg-dat",
      dev: "शुक्लाय गजाय",
      iast: "śuklāya gajāya",
      meaning: "for (one) śukla + gaja",
      unit: "word",
      group: "śukla-gaja",
    },
    {
      id: "sukla-gaja-sg-gen",
      dev: "शुक्लस्य गजस्य",
      iast: "śuklasya gajasya",
      meaning: "of (one) śukla + gaja",
      unit: "word",
      group: "śukla-gaja",
    },
    {
      id: "sukla-gaja-sg-loc",
      dev: "शुक्ले गजे",
      iast: "śukle gaje",
      meaning: "in/at (one) śukla + gaja",
      unit: "word",
      group: "śukla-gaja",
    },
    {
      id: "car-aham",
      dev: "अहं चरामि",
      iast: "ahaṃ carāmi",
      meaning: "car with aham (one)",
      unit: "word",
      group: "car|agree",
    },
    {
      id: "car-tvam",
      dev: "त्वं चरसि",
      iast: "tvaṃ carasi",
      meaning: "car with tvam (one)",
      unit: "word",
      group: "car|agree",
    },
    {
      id: "car-gaja-sg",
      dev: "गजश् चरति",
      iast: "gajaś carati",
      meaning: "car with gaja (one)",
      unit: "word",
      group: "car|agree",
    },
    {
      id: "car-gaja-du",
      dev: "गजौ चरतः",
      iast: "gajau carataḥ",
      meaning: "car with gaja (two)",
      unit: "word",
      group: "car|agree",
    },
    {
      id: "car-gaja-pl",
      dev: "गजाश् चरन्ति",
      iast: "gajāś caranti",
      meaning: "car with gaja (many)",
      unit: "word",
      group: "car|agree",
    },
    {
      id: "cary-aham",
      dev: "अहं चर्ये",
      iast: "ahaṃ carye",
      meaning: "cary with aham as patient (one)",
      unit: "word",
      group: "car|agree",
    },
    {
      id: "cary-tvam",
      dev: "त्वं चर्यसे",
      iast: "tvaṃ caryase",
      meaning: "cary with tvam as patient (one)",
      unit: "word",
      group: "car|agree",
    },
    {
      id: "cary-gaja-sg",
      dev: "नरेण गजश् चर्यते",
      iast: "nareṇa gajaś caryate",
      meaning: "cary with gaja as patient (one), by nara",
      unit: "word",
      group: "car|agree",
    },
    {
      id: "cary-gaja-du",
      dev: "नरेण गजौ चर्येते",
      iast: "nareṇa gajau caryete",
      meaning: "cary with gaja as patient (two), by nara",
      unit: "word",
      group: "car|agree",
    },
    {
      id: "cary-gaja-pl",
      dev: "नरेण गजाश् चर्यन्ते",
      iast: "nareṇa gajāś caryante",
      meaning: "cary with gaja as patient (many), by nara",
      unit: "word",
      group: "car|agree",
    },
    {
      id: "likh-aham",
      dev: "अहं लिखामि",
      iast: "ahaṃ likhāmi",
      meaning: "likh with aham (one)",
      unit: "word",
      group: "likh|agree",
    },
    {
      id: "likh-tvam",
      dev: "त्वं लिखसि",
      iast: "tvaṃ likhasi",
      meaning: "likh with tvam (one)",
      unit: "word",
      group: "likh|agree",
    },
    {
      id: "likh-suta-sg",
      dev: "सूतः लिखति",
      iast: "sūtaḥ likhati",
      meaning: "likh with sūta (one)",
      unit: "word",
      group: "likh|agree",
    },
    {
      id: "likh-suta-du",
      dev: "सूतौ लिखतः",
      iast: "sūtau likhataḥ",
      meaning: "likh with sūta (two)",
      unit: "word",
      group: "likh|agree",
    },
    {
      id: "likh-suta-pl",
      dev: "सूताः लिखन्ति",
      iast: "sūtāḥ likhanti",
      meaning: "likh with sūta (many)",
      unit: "word",
      group: "likh|agree",
    },
    {
      id: "nrt-aham",
      dev: "अहं नृत्यामि",
      iast: "ahaṃ nṛtyāmi",
      meaning: "nṛt with aham (one)",
      unit: "word",
      group: "nṛt|agree",
    },
    {
      id: "nrt-tvam",
      dev: "त्वं नृत्यसि",
      iast: "tvaṃ nṛtyasi",
      meaning: "nṛt with tvam (one)",
      unit: "word",
      group: "nṛt|agree",
    },
    {
      id: "nrt-kanya-sg",
      dev: "कन्या नृत्यति",
      iast: "kanyā nṛtyati",
      meaning: "nṛt with kanyā (one)",
      unit: "word",
      group: "nṛt|agree",
    },
    {
      id: "nrt-kanya-du",
      dev: "कन्ये नृत्यतः",
      iast: "kanye nṛtyataḥ",
      meaning: "nṛt with kanyā (two)",
      unit: "word",
      group: "nṛt|agree",
    },
    {
      id: "nrt-kanya-pl",
      dev: "कन्याः नृत्यन्ति",
      iast: "kanyāḥ nṛtyanti",
      meaning: "nṛt with kanyā (many)",
      unit: "word",
      group: "nṛt|agree",
    }
  ] as QuizDeckItem[],
};
