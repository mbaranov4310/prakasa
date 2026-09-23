/**
 * Pending drills for sandhi-vowel-sandhi.
 *
 * Card provenance (Gonda §§5–8 combine shape; First Steps §8.4 table):
 * - vs-na-asti: Gonda §5; kept
 * - vs-na-aste: Gonda §5; kept
 * - vs-gaja-asva: Gonda §5 shape; sītā→gajā (lesson ā+a)
 * - vs-nara-agni: Gonda §5 shape; swap nara
 * - vs-nadi-iva: Gonda §5; kept
 * - vs-yadi-isvara: Gonda §5; kept
 * - vs-nari-iti: Gonda §5 shape; nadī→nārī
 * - vs-muni-iha: Gonda §5 shape; swap muni
 * - vs-sadhu-uktam: Gonda §5; kept
 * - vs-guru-uktam: Gonda §5 shape; sādhu→guru
 * - vs-madhu-udakam: Gonda §5 shape; swap madhu
 * - vs-bhanu-udaya: Gonda §5 shape; swap bhānu
 * - vs-ca-iha: Gonda §5; kept
 * - vs-tva-isvara: Gonda §5; kept
 * - vs-rama-iti: Gonda §5 shape; swap rāma
 * - vs-gaja-indra: Gonda §5 shape; swap gaja
 * - vs-ca-uktam: Gonda §5; kept
 * - vs-sa-uvaca: Gonda §5; kept
 * - vs-gaja-udakam: lesson sītā+udakam; sītā→gajā
 * - vs-nara-ukti: Gonda §5 shape; swap nara
 * - vs-kva-rsi: Gonda §5; kept
 * - vs-yatha-rsi: Gonda §5; kept
 * - vs-gaja-rsim: lesson sītā+ṛṣim; sītā→gajā
 * - vs-nara-rtu: Gonda §5 shape; swap nara
 * - vs-a-eti: Gonda §5; kept
 * - vs-ca-aiti: Gonda §5; kept
 * - vs-mama-eva: Gonda §5 shape; swap mama
 * - vs-gaja-eka: Gonda §5 shape; swap gaja
 * - vs-sa-osadhi: Gonda §5; kept
 * - vs-tada-augha: Gonda §5; kept
 * - vs-mama-osadhi: Gonda §5 shape; sā→mama
 * - vs-nara-ojas: Gonda §5 shape; swap nara
 * - vs-yadi-etat: Gonda §6; compacted
 * - vs-nadi-asva: Gonda §6 shape; lesson śabarī→nadī
 * - vs-nari-asva: Gonda §6 shape; swap nārī
 * - vs-muni-atra: Gonda §6 shape; swap muni
 * - vs-astu-evam: Gonda §6; compacted
 * - vs-guru-adesa: Gonda §6 shape; swap guru
 * - vs-madhu-atra: Gonda §6 shape; swap madhu
 * - vs-bhanu-asta: Gonda §6 shape; swap bhānu
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "sandhi-vowel-sandhi",
  titleEn: "Vowel sandhi",
  titleIast: "svara-sandhi",
  lessonId: "sandhi-vowel-sandhi",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "vs-na-asti",
      // Gonda §5; kept
      dev: "नास्ति",
      iast: "nāsti",
      meaning: "na + asti",
      unit: "sandhi",
      group: "vowel|a+a",
    },
    {
      id: "vs-na-aste",
      // Gonda §5; kept
      dev: "नास्ते",
      iast: "nāste",
      meaning: "na + āste",
      unit: "sandhi",
      group: "vowel|a+a",
    },
    {
      id: "vs-gaja-asva",
      // Gonda §5 shape; sītā→gajā (lesson ā+a)
      dev: "गजाश्वम्",
      iast: "gajāśvam",
      meaning: "gajā + aśvam",
      unit: "sandhi",
      group: "vowel|a+a",
    },
    {
      id: "vs-nara-agni",
      // Gonda §5 shape; swap nara
      dev: "नराग्निः",
      iast: "narāgniḥ",
      meaning: "nara + agniḥ",
      unit: "sandhi",
      group: "vowel|a+a",
    },
    {
      id: "vs-nadi-iva",
      // Gonda §5; kept
      dev: "नदीव",
      iast: "nadīva",
      meaning: "nadī + iva",
      unit: "sandhi",
      group: "vowel|i+i",
    },
    {
      id: "vs-yadi-isvara",
      // Gonda §5; kept
      dev: "यदीश्वरः",
      iast: "yadīśvaraḥ",
      meaning: "yadi + īśvaraḥ",
      unit: "sandhi",
      group: "vowel|i+i",
    },
    {
      id: "vs-nari-iti",
      // Gonda §5 shape; nadī→nārī
      dev: "नारीति",
      iast: "nārīti",
      meaning: "nārī + iti",
      unit: "sandhi",
      group: "vowel|i+i",
    },
    {
      id: "vs-muni-iha",
      // Gonda §5 shape; swap muni
      dev: "मुनीह",
      iast: "munīha",
      meaning: "muni + iha",
      unit: "sandhi",
      group: "vowel|i+i",
    },
    {
      id: "vs-sadhu-uktam",
      // Gonda §5; kept
      dev: "साधूक्तम्",
      iast: "sādhūktam",
      meaning: "sādhu + uktam",
      unit: "sandhi",
      group: "vowel|u+u",
    },
    {
      id: "vs-guru-uktam",
      // Gonda §5 shape; sādhu→guru
      dev: "गुरूक्तम्",
      iast: "gurūktam",
      meaning: "guru + uktam",
      unit: "sandhi",
      group: "vowel|u+u",
    },
    {
      id: "vs-madhu-udakam",
      // Gonda §5 shape; swap madhu
      dev: "मधूदकम्",
      iast: "madhūdakam",
      meaning: "madhu + udakam",
      unit: "sandhi",
      group: "vowel|u+u",
    },
    {
      id: "vs-bhanu-udaya",
      // Gonda §5 shape; swap bhānu
      dev: "भानूदयः",
      iast: "bhānūdayaḥ",
      meaning: "bhānu + udayaḥ",
      unit: "sandhi",
      group: "vowel|u+u",
    },
    {
      id: "vs-ca-iha",
      // Gonda §5; kept
      dev: "चेह",
      iast: "ceha",
      meaning: "ca + iha",
      unit: "sandhi",
      group: "vowel|a+i",
    },
    {
      id: "vs-tva-isvara",
      // Gonda §5; kept
      dev: "त्वेश्वर",
      iast: "tveśvara",
      meaning: "tvā + īśvara",
      unit: "sandhi",
      group: "vowel|a+i",
    },
    {
      id: "vs-rama-iti",
      // Gonda §5 shape; swap rāma
      dev: "रामेति",
      iast: "rāmeti",
      meaning: "rāma + iti",
      unit: "sandhi",
      group: "vowel|a+i",
    },
    {
      id: "vs-gaja-indra",
      // Gonda §5 shape; swap gaja
      dev: "गजेन्द्रः",
      iast: "gajendraḥ",
      meaning: "gaja + indraḥ",
      unit: "sandhi",
      group: "vowel|a+i",
    },
    {
      id: "vs-ca-uktam",
      // Gonda §5; kept
      dev: "चोक्तम्",
      iast: "coktam",
      meaning: "ca + uktam",
      unit: "sandhi",
      group: "vowel|a+u",
    },
    {
      id: "vs-sa-uvaca",
      // Gonda §5; kept
      dev: "सोवाच",
      iast: "sovāca",
      meaning: "sā + uvāca",
      unit: "sandhi",
      group: "vowel|a+u",
    },
    {
      id: "vs-gaja-udakam",
      // lesson sītā+udakam; sītā→gajā
      dev: "गजोदकम्",
      iast: "gajodakam",
      meaning: "gajā + udakam",
      unit: "sandhi",
      group: "vowel|a+u",
    },
    {
      id: "vs-nara-ukti",
      // Gonda §5 shape; swap nara
      dev: "नरोक्तिः",
      iast: "naroktiḥ",
      meaning: "nara + uktiḥ",
      unit: "sandhi",
      group: "vowel|a+u",
    },
    {
      id: "vs-kva-rsi",
      // Gonda §5; kept
      dev: "क्वर्षिः",
      iast: "kvarṣiḥ",
      meaning: "kva + ṛṣiḥ",
      unit: "sandhi",
      group: "vowel|a+r",
    },
    {
      id: "vs-yatha-rsi",
      // Gonda §5; kept
      dev: "यथर्षिः",
      iast: "yatharṣiḥ",
      meaning: "yathā + ṛṣiḥ",
      unit: "sandhi",
      group: "vowel|a+r",
    },
    {
      id: "vs-gaja-rsim",
      // lesson sītā+ṛṣim; sītā→gajā
      dev: "गजर्षिम्",
      iast: "gajarṣim",
      meaning: "gajā + ṛṣim",
      unit: "sandhi",
      group: "vowel|a+r",
    },
    {
      id: "vs-nara-rtu",
      // Gonda §5 shape; swap nara
      dev: "नरर्तुः",
      iast: "narartuḥ",
      meaning: "nara + ṛtuḥ",
      unit: "sandhi",
      group: "vowel|a+r",
    },
    {
      id: "vs-a-eti",
      // Gonda §5; kept
      dev: "ऐति",
      iast: "aiti",
      meaning: "ā + eti",
      unit: "sandhi",
      group: "vowel|a+e",
    },
    {
      id: "vs-ca-aiti",
      // Gonda §5; kept
      dev: "चैति",
      iast: "caiti",
      meaning: "ca + aiti",
      unit: "sandhi",
      group: "vowel|a+e",
    },
    {
      id: "vs-mama-eva",
      // Gonda §5 shape; swap mama
      dev: "ममैव",
      iast: "mamaiva",
      meaning: "mama + eva",
      unit: "sandhi",
      group: "vowel|a+e",
    },
    {
      id: "vs-gaja-eka",
      // Gonda §5 shape; swap gaja
      dev: "गजैकः",
      iast: "gajaikaḥ",
      meaning: "gaja + ekaḥ",
      unit: "sandhi",
      group: "vowel|a+e",
    },
    {
      id: "vs-sa-osadhi",
      // Gonda §5; kept
      dev: "सौषधिः",
      iast: "sauṣadhiḥ",
      meaning: "sā + oṣadhiḥ",
      unit: "sandhi",
      group: "vowel|a+o",
    },
    {
      id: "vs-tada-augha",
      // Gonda §5; kept
      dev: "तदौघः",
      iast: "tadaughaḥ",
      meaning: "tadā + aughaḥ",
      unit: "sandhi",
      group: "vowel|a+o",
    },
    {
      id: "vs-mama-osadhi",
      // Gonda §5 shape; sā→mama
      dev: "ममौषधिः",
      iast: "mamauṣadhiḥ",
      meaning: "mama + oṣadhiḥ",
      unit: "sandhi",
      group: "vowel|a+o",
    },
    {
      id: "vs-nara-ojas",
      // Gonda §5 shape; swap nara
      dev: "नरौजः",
      iast: "naraujaḥ",
      meaning: "nara + ojaḥ",
      unit: "sandhi",
      group: "vowel|a+o",
    },
    {
      id: "vs-yadi-etat",
      // Gonda §6; compacted
      dev: "यद्येतत्",
      iast: "yadyetat",
      meaning: "yadi + etat",
      unit: "sandhi",
      group: "vowel|i+V",
    },
    {
      id: "vs-nadi-asva",
      // Gonda §6 shape; lesson śabarī→nadī
      dev: "नद्यश्वम्",
      iast: "nadyaśvam",
      meaning: "nadī + aśvam",
      unit: "sandhi",
      group: "vowel|i+V",
    },
    {
      id: "vs-nari-asva",
      // Gonda §6 shape; swap nārī
      dev: "नार्यश्वम्",
      iast: "nāryaśvam",
      meaning: "nārī + aśvam",
      unit: "sandhi",
      group: "vowel|i+V",
    },
    {
      id: "vs-muni-atra",
      // Gonda §6 shape; swap muni
      dev: "मुन्यत्र",
      iast: "munyatra",
      meaning: "muni + atra",
      unit: "sandhi",
      group: "vowel|i+V",
    },
    {
      id: "vs-astu-evam",
      // Gonda §6; compacted
      dev: "अस्त्वेवम्",
      iast: "astvevam",
      meaning: "astu + evam",
      unit: "sandhi",
      group: "vowel|u+V",
    },
    {
      id: "vs-guru-adesa",
      // Gonda §6 shape; swap guru
      dev: "गुर्वादेशः",
      iast: "gurvādeśaḥ",
      meaning: "guru + ādeśaḥ",
      unit: "sandhi",
      group: "vowel|u+V",
    },
    {
      id: "vs-madhu-atra",
      // Gonda §6 shape; swap madhu
      dev: "मध्वत्र",
      iast: "madhvatra",
      meaning: "madhu + atra",
      unit: "sandhi",
      group: "vowel|u+V",
    },
    {
      id: "vs-bhanu-asta",
      // Gonda §6 shape; swap bhānu
      dev: "भान्वस्तः",
      iast: "bhānvastaḥ",
      meaning: "bhānu + astaḥ",
      unit: "sandhi",
      group: "vowel|u+V",
    },
  ] as QuizDeckItem[],
};
