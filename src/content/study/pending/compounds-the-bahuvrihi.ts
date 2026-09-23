/**
 * Drill card provenance (Gonda §112 pp.83–84; lesson glyphs; noun swaps):
 * - bahuvrīhi|adj-noun: lesson mahārathaḥ / pītāmbaraḥ / dṛḍhavrataḥ /
 *   sthitaprajñaḥ / bahuvrīhi; Gonda gatāyuḥ; swaps ratha→aśva, pīta→rakta,
 *   dṛḍha→sthira.
 * - bahuvrīhi|body-part: lesson cakrapāṇiḥ; Gonda daṇḍapāṇiḥ; swaps
 *   daṇḍa→khaḍga / śūla / padma.
 * - bahuvrīhi|indeclinable: Gonda durbalaḥ / abalaḥ / sabhāryaḥ / sāgnikaḥ;
 *   aputraḥ from Gonda Ex. I.13 (a- + putra for a- + bala); adhanaḥ swap.
 * - bahuvrīhi|noun-noun: Gonda tapodhanaḥ; swaps tapas→vidyā / jñāna / yaśas.
 * - bahuvrīhi|infinitive-kāma: Gonda tyaktukāmaḥ; swaps tyaj→gam / kṛ / vac / ji.
 * First Steps has no bahuvrīhi exercise (compounds only in later readings).
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "compounds-the-bahuvrihi",
  titleEn: "The bahuvrīhi",
  titleIast: "bahuvrīhi",
  lessonId: "compounds-the-bahuvrihi",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // —— adj + noun (Gonda §112 a) ——
    {
      id: "maharathah",
      // lesson glyph; Gonda §112 a shape
      dev: "महारथः",
      iast: "mahārathaḥ",
      meaning: "mahān ratho yasya",
      unit: "word",
      group: "bahuvrīhi|adj-noun",
    },
    {
      id: "mahasvah",
      // lesson mahārathaḥ; ratha→aśva
      dev: "महाश्वः",
      iast: "mahāśvaḥ",
      meaning: "mahān aśvo yasya",
      unit: "word",
      group: "bahuvrīhi|adj-noun",
    },
    {
      id: "pitambarah",
      // lesson glyph
      dev: "पीताम्बरः",
      iast: "pītāmbaraḥ",
      meaning: "pīto 'mbaro yasya",
      unit: "word",
      group: "bahuvrīhi|adj-noun",
    },
    {
      id: "raktambarah",
      // lesson pītāmbaraḥ; pīta→rakta
      dev: "रक्ताम्बरः",
      iast: "raktāmbaraḥ",
      meaning: "rakto 'mbaro yasya",
      unit: "word",
      group: "bahuvrīhi|adj-noun",
    },
    {
      id: "drdhavratah",
      // lesson glyph
      dev: "दृढव्रतः",
      iast: "dṛḍhavrataḥ",
      meaning: "dṛḍhā vratā yasya",
      unit: "word",
      group: "bahuvrīhi|adj-noun",
    },
    {
      id: "sthiravratah",
      // lesson dṛḍhavrataḥ; dṛḍha→sthira
      dev: "स्थिरव्रतः",
      iast: "sthiravrataḥ",
      meaning: "sthirā vratā yasya",
      unit: "word",
      group: "bahuvrīhi|adj-noun",
    },
    {
      id: "sthitaprajnah",
      // lesson glyph
      dev: "स्थितप्रज्ञः",
      iast: "sthitaprajñaḥ",
      meaning: "sthitā prajñā yasya",
      unit: "word",
      group: "bahuvrīhi|adj-noun",
    },
    {
      id: "bahuvrihi",
      // lesson glyph; Gonda §112 a bahu-vrīhi-
      dev: "बहुव्रीहि",
      iast: "bahuvrīhi",
      meaning: "bahur vrīhir yasya",
      unit: "word",
      group: "bahuvrīhi|adj-noun",
    },
    {
      id: "gatayuh",
      // Gonda §112 a gatāyus-
      dev: "गतायुः",
      iast: "gatāyuḥ",
      meaning: "gataṃ āyur yasya",
      unit: "word",
      group: "bahuvrīhi|adj-noun",
    },
    // —— body-part final (Gonda §112; lesson cakrapāṇiḥ) ——
    {
      id: "cakrapanih",
      // lesson glyph
      dev: "चक्रपाणिः",
      iast: "cakrapāṇiḥ",
      meaning: "cakraṃ pāṇau yasya",
      unit: "word",
      group: "bahuvrīhi|body-part",
    },
    {
      id: "dandapanih",
      // Gonda §112 daṇḍa-pāṇi-
      dev: "दण्डपाणिः",
      iast: "daṇḍapāṇiḥ",
      meaning: "daṇḍaḥ pāṇau yasya",
      unit: "word",
      group: "bahuvrīhi|body-part",
    },
    {
      id: "khadgapanih",
      // Gonda daṇḍapāṇiḥ; daṇḍa→khaḍga
      dev: "खड्गपाणिः",
      iast: "khaḍgapāṇiḥ",
      meaning: "khaḍgaḥ pāṇau yasya",
      unit: "word",
      group: "bahuvrīhi|body-part",
    },
    {
      id: "sulapanih",
      // Gonda daṇḍapāṇiḥ; daṇḍa→śūla
      dev: "शूलपाणिः",
      iast: "śūlapāṇiḥ",
      meaning: "śūlaḥ pāṇau yasya",
      unit: "word",
      group: "bahuvrīhi|body-part",
    },
    {
      id: "padmapanih",
      // Gonda daṇḍapāṇiḥ; daṇḍa→padma
      dev: "पद्मपाणिः",
      iast: "padmapāṇiḥ",
      meaning: "padmaḥ pāṇau yasya",
      unit: "word",
      group: "bahuvrīhi|body-part",
    },
    // —— indeclinable first (Gonda §112 c) ——
    {
      id: "durbalah",
      // Gonda §112 c dur-bala-
      dev: "दुर्बलः",
      iast: "durbalaḥ",
      meaning: "duro balo yasya",
      unit: "word",
      group: "bahuvrīhi|indeclinable",
    },
    {
      id: "abalah",
      // Gonda §112 c a-bala-
      dev: "अबलः",
      iast: "abalaḥ",
      meaning: "balo yasya nāsti",
      unit: "word",
      group: "bahuvrīhi|indeclinable",
    },
    {
      id: "sabharyah",
      // Gonda §112 c sa-bhārya-
      dev: "सभार्यः",
      iast: "sabhāryaḥ",
      meaning: "bhāryā yasya saha",
      unit: "word",
      group: "bahuvrīhi|indeclinable",
    },
    {
      id: "aputrah",
      // Gonda Ex. I.13 aputrasya; a- + putra for a-bala shape
      dev: "अपुत्रः",
      iast: "aputraḥ",
      meaning: "putro yasya nāsti",
      unit: "word",
      group: "bahuvrīhi|indeclinable",
    },
    {
      id: "adhanah",
      // Gonda a-bala-; bala→dhana
      dev: "अधनः",
      iast: "adhanaḥ",
      meaning: "dhanaṃ yasya nāsti",
      unit: "word",
      group: "bahuvrīhi|indeclinable",
    },
    {
      id: "sagnikah",
      // Gonda §112 c sāgnika- (sa-agni-ka-)
      dev: "साग्निकः",
      iast: "sāgnikaḥ",
      meaning: "agnir yasya saha",
      unit: "word",
      group: "bahuvrīhi|indeclinable",
    },
    // —— noun + noun (Gonda §112 b) ——
    {
      id: "tapodhanah",
      // Gonda §112 b tapo-dhana-
      dev: "तपोधनः",
      iast: "tapodhanaḥ",
      meaning: "tapo dhanaṃ yasya",
      unit: "word",
      group: "bahuvrīhi|noun-noun",
    },
    {
      id: "vidyadhanah",
      // Gonda tapodhanaḥ; tapas→vidyā
      dev: "विद्याधनः",
      iast: "vidyādhanaḥ",
      meaning: "vidyā dhanaṃ yasya",
      unit: "word",
      group: "bahuvrīhi|noun-noun",
    },
    {
      id: "jnanadhanah",
      // Gonda tapodhanaḥ; tapas→jñāna
      dev: "ज्ञानधनः",
      iast: "jñānadhanaḥ",
      meaning: "jñānaṃ dhanaṃ yasya",
      unit: "word",
      group: "bahuvrīhi|noun-noun",
    },
    {
      id: "yasodhanah",
      // Gonda tapodhanaḥ; tapas→yaśas
      dev: "यशोधनः",
      iast: "yaśodhanaḥ",
      meaning: "yaśo dhanaṃ yasya",
      unit: "word",
      group: "bahuvrīhi|noun-noun",
    },
    // —— infinitive + kāma (Gonda §112) ——
    {
      id: "tyaktukamah",
      // Gonda §112 tyaktukāma-
      dev: "त्यक्तुकामः",
      iast: "tyaktukāmaḥ",
      meaning: "tyaktum kāmo yasya",
      unit: "word",
      group: "bahuvrīhi|infinitive-kāma",
    },
    {
      id: "gantukamah",
      // Gonda tyaktukāmaḥ; tyaj→gam
      dev: "गन्तुकामः",
      iast: "gantukāmaḥ",
      meaning: "gantum kāmo yasya",
      unit: "word",
      group: "bahuvrīhi|infinitive-kāma",
    },
    {
      id: "kartukamah",
      // Gonda tyaktukāmaḥ; tyaj→kṛ
      dev: "कर्तुकामः",
      iast: "kartukāmaḥ",
      meaning: "kartum kāmo yasya",
      unit: "word",
      group: "bahuvrīhi|infinitive-kāma",
    },
    {
      id: "vaktukamah",
      // Gonda tyaktukāmaḥ / vaktumanas-; tyaj→vac
      dev: "वक्तुकामः",
      iast: "vaktukāmaḥ",
      meaning: "vaktum kāmo yasya",
      unit: "word",
      group: "bahuvrīhi|infinitive-kāma",
    },
    {
      id: "jetukamah",
      // Gonda tyaktukāmaḥ; tyaj→ji
      dev: "जेतुकामः",
      iast: "jetukāmaḥ",
      meaning: "jetum kāmo yasya",
      unit: "word",
      group: "bahuvrīhi|infinitive-kāma",
    },
  ] as QuizDeckItem[],
};
