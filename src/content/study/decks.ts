import { libraryClusterItems } from "../../lib/clusters";
import type { QuizDeck, QuizDeckItem, QuizUnit } from "../../lib/quiz";
import { pendingDeck as sandhiSystemDeck } from "./pending/sandhi-the-sandhi-system";
import { pendingDeck as vowelSandhiDeck } from "./pending/sandhi-vowel-sandhi";
import { pendingDeck as visargaSandhiDeck } from "./pending/sandhi-visarga-sandhi";
import { pendingDeck as consonantSandhiBetweenDeck } from "./pending/sandhi-consonant-sandhi-between-words";
import { pendingDeck as consonantSandhiWithinDeck } from "./pending/sandhi-consonant-sandhi-within-a-word";
import { pendingDeck as nominalSystemDeck } from "./pending/nominals-the-nominal-system";
import { pendingDeck as basicEndingsDeck } from "./pending/nominals-basic-nominal-endings";
import { pendingDeck as aaIiUuDeck } from "./pending/nominals-aa-ii-uu-stems";
import { pendingDeck as iAndUDeck } from "./pending/nominals-i-and-u-stems";
import { pendingDeck as rStemsDeck } from "./pending/nominals-r-stems";
import { pendingDeck as aiOAuDeck } from "./pending/nominals-ai-o-au-stems";
import { pendingDeck as consonantStemsDeck } from "./pending/nominals-consonant-stems";
import { pendingDeck as soundsTheSoundSystemDeck } from "./pending/sounds-the-sound-system";
import { pendingDeck as soundsVowelsDeck } from "./pending/sounds-vowels";
import { pendingDeck as soundsConsonantsDeck } from "./pending/sounds-consonants";
import { pendingDeck as soundsOtherSoundsDeck } from "./pending/sounds-other-sounds";
import { pendingDeck as soundsSyllablesDeck } from "./pending/sounds-syllables";
import { pendingDeck as soundsModernPronunciationDeck } from "./pending/sounds-modern-pronunciation";
import { pendingDeck as uninflectedTypesDeck } from "./pending/uninflected-types";
import { pendingDeck as uninflectedUpasargaDeck } from "./pending/uninflected-upasarga";
import { pendingDeck as uninflectedOtherPrefixesDeck } from "./pending/uninflected-other-prefixes";
import { pendingDeck as uninflectedCaVaAndOthersDeck } from "./pending/uninflected-ca-va-and-others";
import { pendingDeck as uninflectedAdverbsDeck } from "./pending/uninflected-adverbs";
import { pendingDeck as sentencesSentenceStructureDeck } from "./pending/sentences-sentence-structure";
import { pendingDeck as sentencesAgreementDeck } from "./pending/sentences-agreement";
import { pendingDeck as sentencesVerblessSentencesDeck } from "./pending/sentences-verbless-sentences";
import { pendingDeck as sentencesQuestionsDeck } from "./pending/sentences-questions";
import { pendingDeck as sentencesRelativePhrasesDeck } from "./pending/sentences-relative-phrases";
import { pendingDeck as sentencesParticiplesDeck } from "./pending/sentences-participles";
import { pendingDeck as sentencesTheEightCasesDeck } from "./pending/sentences-the-eight-cases";
import { pendingDeck as nominalsAsmadAndYusmadDeck } from "./pending/nominals-asmad-and-yusmad";
import { pendingDeck as nominalsTadEtadIdamAndAdasDeck } from "./pending/nominals-tad-etad-idam-and-adas";
import { pendingDeck as nominalsKimAndYadDeck } from "./pending/nominals-kim-and-yad";
import { pendingDeck as nominalsPronominalAdjectivesDeck } from "./pending/nominals-pronominal-adjectives";
import { pendingDeck as nominalsNumberWordsDeck } from "./pending/nominals-number-words";
import { pendingDeck as verbsSpecialTenseMoodsDeck } from "./pending/verbs-special-tense-moods";
import { pendingDeck as verbsThePresentTenseDeck } from "./pending/verbs-the-present-tense";
import { pendingDeck as verbsTheCommandMoodDeck } from "./pending/verbs-the-command-mood";
import { pendingDeck as verbsTheOrdinaryPastTenseDeck } from "./pending/verbs-the-ordinary-past-tense";
import { pendingDeck as verbsThePotentialMoodDeck } from "./pending/verbs-the-potential-mood";
import { pendingDeck as verbsAtmanepadaDeck } from "./pending/verbs-atmanepada";
import { pendingDeck as verbsBhuDivTudAndCurDeck } from "./pending/verbs-bhu-div-tud-and-cur";
import { pendingDeck as verbsSuTanAndKriDeck } from "./pending/verbs-su-tan-and-kri";
import { pendingDeck as verbsAdAndRudhDeck } from "./pending/verbs-ad-and-rudh";
import { pendingDeck as verbsTheHuClassDeck } from "./pending/verbs-the-hu-class";
import { pendingDeck as verbsKarmaniAndBhavePrayogaDeck } from "./pending/verbs-karmani-and-bhave-prayoga";
import { pendingDeck as verbsOtherTenseMoodsDeck } from "./pending/verbs-other-tense-moods";
import { pendingDeck as verbsTheSimpleFutureTenseDeck } from "./pending/verbs-the-simple-future-tense";
import { pendingDeck as verbsTheConditionalMoodDeck } from "./pending/verbs-the-conditional-mood";
import { pendingDeck as verbsTheDistantFutureTenseDeck } from "./pending/verbs-the-distant-future-tense";
import { pendingDeck as verbsTheDistantPastTenseDeck } from "./pending/verbs-the-distant-past-tense";
import { pendingDeck as verbsTheRecentPastTenseDeck } from "./pending/verbs-the-recent-past-tense";
import { pendingDeck as verbsTheBlessingMoodDeck } from "./pending/verbs-the-blessing-mood";
import { pendingDeck as verbsCausalRootsDeck } from "./pending/verbs-causal-roots";
import { pendingDeck as verbsDesiderativeRootsDeck } from "./pending/verbs-desiderative-roots";
import { pendingDeck as verbsNominalRootsDeck } from "./pending/verbs-nominal-roots";
import { pendingDeck as verbsIntensiveRootsDeck } from "./pending/verbs-intensive-roots";
import { pendingDeck as suffixesTheSuffixSystemDeck } from "./pending/suffixes-the-suffix-system";
import { pendingDeck as suffixesTvaAndYaDeck } from "./pending/suffixes-tva-and-ya";
import { pendingDeck as suffixesTaAndTavatDeck } from "./pending/suffixes-ta-and-tavat";
import { pendingDeck as suffixesTumDeck } from "./pending/suffixes-tum";
import { pendingDeck as suffixesTavyaAniyaAndYaDeck } from "./pending/suffixes-tavya-aniya-and-ya";
import { pendingDeck as suffixesAtAnaAndVasDeck } from "./pending/suffixes-at-ana-and-vas";
import { pendingDeck as suffixesOtherRootSuffixesDeck } from "./pending/suffixes-other-root-suffixes";
import { pendingDeck as suffixesNominalSuffixesDeck } from "./pending/suffixes-nominal-suffixes";
import { pendingDeck as compoundsTheCompoundSystemDeck } from "./pending/compounds-the-compound-system";
import { pendingDeck as compoundsTheDvandvaDeck } from "./pending/compounds-the-dvandva";
import { pendingDeck as compoundsTheTatpurusaDeck } from "./pending/compounds-the-tatpurusa";
import { pendingDeck as compoundsTheBahuvrihiDeck } from "./pending/compounds-the-bahuvrihi";
import { pendingDeck as compoundsTheAvyayibhavaDeck } from "./pending/compounds-the-avyayibhava";

function letters(
  unit: QuizUnit,
  rows: Array<[id: string, dev: string, iast: string, meaning?: string, group?: string]>,
): QuizDeckItem[] {
  return rows.map(([id, dev, iast, meaning, group]) => ({
    id,
    dev,
    iast,
    unit,
    meaning,
    group,
  }));
}

const howItWorksItems = letters("akshara", [
  ["default-vowel", "क", "a", "Default vowel on a Devanagari consonant (as in क)"],
  ["ka-inherent", "क", "ka", "क with its default vowel"],
  ["k-virama", "क्", "k", "क with the default vowel blocked"],
  ["virama-name", "्", "virāma", "Name of the mark that blocks the default a"],
  ["syllable-script", "देवनागरी", "syllable", "Devanagari groups symbols into this kind of unit"],
  ["direction", "देवनागरी", "left to right", "Direction Devanagari is written"],
  ["de", "दे", "de", "First syllable of देवनागरी"],
  ["va", "व", "va", "Second syllable of देवनागरी"],
  ["naa", "ना", "nā", "Third syllable of देवनागरी"],
  ["ga", "ग", "ga", "Fourth syllable of देवनागरी"],
  ["rii", "री", "rī", "Last syllable of देवनागरी"],
  ["ska", "स्क", "ska", "Cluster s + ka, as in संस्कृत"],
  ["sam", "सं", "saṃ", "स with anusvāra"],
]);

const vowelConsonantItems = letters("akshara", [
  ["a", "अ", "a"],
  ["aa", "आ", "ā"],
  ["i", "इ", "i"],
  ["ii", "ई", "ī"],
  ["u", "उ", "u"],
  ["uu", "ऊ", "ū"],
  ["r", "ऋ", "ṛ"],
  ["rr", "ॠ", "ṝ"],
  ["l", "ऌ", "ḷ"],
  ["ll", "ॡ", "ḹ"],
  ["e", "ए", "e"],
  ["ai", "ऐ", "ai"],
  ["o", "ओ", "o"],
  ["au", "औ", "au"],
  ["ka", "क", "ka"],
  ["kha", "ख", "kha"],
  ["ga", "ग", "ga"],
  ["gha", "घ", "gha"],
  ["nga", "ङ", "ṅa"],
  ["ca", "च", "ca"],
  ["cha", "छ", "cha"],
  ["ja", "ज", "ja"],
  ["jha", "झ", "jha"],
  ["nya", "ञ", "ña"],
  ["tta", "ट", "ṭa"],
  ["ttha", "ठ", "ṭha"],
  ["dda", "ड", "ḍa"],
  ["ddha", "ढ", "ḍha"],
  ["nna", "ण", "ṇa"],
  ["ta", "त", "ta"],
  ["tha", "थ", "tha"],
  ["da", "द", "da"],
  ["dha", "ध", "dha"],
  ["na", "न", "na"],
  ["pa", "प", "pa"],
  ["pha", "फ", "pha"],
  ["ba", "ब", "ba"],
  ["bha", "भ", "bha"],
  ["ma", "म", "ma"],
  ["ya", "य", "ya"],
  ["ra", "र", "ra"],
  ["la", "ल", "la"],
  ["va", "व", "va"],
  ["sha", "श", "śa"],
  ["ssa", "ष", "ṣa"],
  ["sa", "स", "sa"],
  ["ha", "ह", "ha"],
]);

// Masculine -a case drill. Cue: First Steps Towards Sanskrit §6.3 paradigm
// (deva, p.121) and §6.7.1 case/number ID (p.131); lesson table is rāma.
// Swapped stems: aśva (horse, used in ch.6 examples), gaja (elephant).
// Dual omitted: only three distinct spellings (need four for a practice group).
const ramaItems = letters("word", [
  // rāma|sg
  ["rama-sg-nom", "रामः", "rāmaḥ", "subject (one) rāma", "rāma|sg"],
  ["rama-sg-acc", "रामम्", "rāmam", "object (one) rāma", "rāma|sg"],
  ["rama-sg-ins", "रामेण", "rāmeṇa", "with (one) rāma", "rāma|sg"],
  ["rama-sg-dat", "रामाय", "rāmāya", "for (one) rāma", "rāma|sg"],
  ["rama-sg-abl", "रामात्", "rāmāt", "from (one) rāma", "rāma|sg"],
  ["rama-sg-gen", "रामस्य", "rāmasya", "of (one) rāma", "rāma|sg"],
  ["rama-sg-loc", "रामे", "rāme", "in (one) rāma", "rāma|sg"],
  ["rama-sg-voc", "राम", "rāma", "O (one) rāma", "rāma|sg"],
  // rāma|pl (nom=voc; dat=abl collapsed)
  ["rama-pl-nom", "रामाः", "rāmāḥ", "subject / O (many) rāma", "rāma|pl"],
  ["rama-pl-acc", "रामान्", "rāmān", "object (many) rāma", "rāma|pl"],
  ["rama-pl-ins", "रामैः", "rāmaiḥ", "with (many) rāma", "rāma|pl"],
  ["rama-pl-dat", "रामेभ्यः", "rāmebhyaḥ", "for / from (many) rāma", "rāma|pl"],
  ["rama-pl-gen", "रामाणाम्", "rāmāṇām", "of (many) rāma", "rāma|pl"],
  ["rama-pl-loc", "रामेषु", "rāmeṣu", "in (many) rāma", "rāma|pl"],
  // aśva|sg
  ["asva-sg-nom", "अश्वः", "aśvaḥ", "subject (one) aśva", "aśva|sg"],
  ["asva-sg-acc", "अश्वम्", "aśvam", "object (one) aśva", "aśva|sg"],
  ["asva-sg-ins", "अश्वेन", "aśvena", "with (one) aśva", "aśva|sg"],
  ["asva-sg-dat", "अश्वाय", "aśvāya", "for (one) aśva", "aśva|sg"],
  ["asva-sg-abl", "अश्वात्", "aśvāt", "from (one) aśva", "aśva|sg"],
  ["asva-sg-gen", "अश्वस्य", "aśvasya", "of (one) aśva", "aśva|sg"],
  ["asva-sg-loc", "अश्वे", "aśve", "in (one) aśva", "aśva|sg"],
  ["asva-sg-voc", "अश्व", "aśva", "O (one) aśva", "aśva|sg"],
  // aśva|pl
  ["asva-pl-nom", "अश्वाः", "aśvāḥ", "subject / O (many) aśva", "aśva|pl"],
  ["asva-pl-acc", "अश्वान्", "aśvān", "object (many) aśva", "aśva|pl"],
  ["asva-pl-ins", "अश्वैः", "aśvaiḥ", "with (many) aśva", "aśva|pl"],
  ["asva-pl-dat", "अश्वेभ्यः", "aśvebhyaḥ", "for / from (many) aśva", "aśva|pl"],
  ["asva-pl-gen", "अश्वानाम्", "aśvānām", "of (many) aśva", "aśva|pl"],
  ["asva-pl-loc", "अश्वेषु", "aśveṣu", "in (many) aśva", "aśva|pl"],
  // gaja|sg
  ["gaja-sg-nom", "गजः", "gajaḥ", "subject (one) gaja", "gaja|sg"],
  ["gaja-sg-acc", "गजम्", "gajam", "object (one) gaja", "gaja|sg"],
  ["gaja-sg-ins", "गजेन", "gajena", "with (one) gaja", "gaja|sg"],
  ["gaja-sg-dat", "गजाय", "gajāya", "for (one) gaja", "gaja|sg"],
  ["gaja-sg-abl", "गजात्", "gajāt", "from (one) gaja", "gaja|sg"],
  ["gaja-sg-gen", "गजस्य", "gajasya", "of (one) gaja", "gaja|sg"],
  ["gaja-sg-loc", "गजे", "gaje", "in (one) gaja", "gaja|sg"],
  ["gaja-sg-voc", "गज", "gaja", "O (one) gaja", "gaja|sg"],
  // gaja|pl
  ["gaja-pl-nom", "गजाः", "gajāḥ", "subject / O (many) gaja", "gaja|pl"],
  ["gaja-pl-acc", "गजान्", "gajān", "object (many) gaja", "gaja|pl"],
  ["gaja-pl-ins", "गजैः", "gajaiḥ", "with (many) gaja", "gaja|pl"],
  ["gaja-pl-dat", "गजेभ्यः", "gajebhyaḥ", "for / from (many) gaja", "gaja|pl"],
  ["gaja-pl-gen", "गजानाम्", "gajānām", "of (many) gaja", "gaja|pl"],
  ["gaja-pl-loc", "गजेषु", "gajeṣu", "in (many) gaja", "gaja|pl"],
]);

const vowelMarkItems = letters("matra", [
  ["ka", "क", "ka"],
  ["kaa", "का", "kā"],
  ["ki", "कि", "ki"],
  ["kii", "की", "kī"],
  ["ku", "कु", "ku"],
  ["kuu", "कू", "kū"],
  ["kr", "कृ", "kṛ"],
  ["krr", "कॄ", "kṝ"],
  ["kl", "कॢ", "kḷ"],
  ["kll", "कॣ", "kḹ"],
  ["ke", "के", "ke"],
  ["kai", "कै", "kai"],
  ["ko", "को", "ko"],
  ["kau", "कौ", "kau"],
  ["kam", "कं", "kaṃ"],
  ["kah", "कः", "kaḥ"],
  ["k-candra", "कँ", "ka̐"],
  ["k-virama", "क्", "k"],
  ["ru", "रु", "ru"],
  ["ruu", "रू", "rū"],
  ["rr", "रृ", "rṛ"],
  ["hr", "हृ", "hṛ"],
  ["hrr", "हॄ", "hṝ"],
  ["naa", "ना", "nā"],
  ["gu", "गु", "gu"],
  ["bhyo", "भ्यो", "bhyo"],
  ["kraa", "क्रा", "krā"],
]);

const numeralItems = letters("akshara", [
  ["0", "०", "0"],
  ["1", "१", "1"],
  ["2", "२", "2"],
  ["3", "३", "3"],
  ["4", "४", "4"],
  ["5", "५", "5"],
  ["6", "६", "6"],
  ["7", "७", "7"],
  ["8", "८", "8"],
  ["9", "९", "9"],
  ["danda", "।", "|", "daṇḍa (end of a sentence or mid-verse)"],
  ["double-danda", "॥", "||", "double daṇḍa (end of a verse)"],
  ["avagraha", "ऽ", "'", "avagraha (elided vowel)"],
]);

const clusterItems = letters(
  "conjunct",
  libraryClusterItems().map((item) => [item.id, item.dev, item.iast]),
);

function deck(
  id: string,
  titleEn: string,
  titleIast: string,
  lessonId: string,
  items: QuizDeckItem[],
  kind: QuizDeck["kind"] = "script",
): QuizDeck {
  const units = [...new Set(items.map((item) => item.unit))];
  return { id, titleEn, titleIast, lessonId, kind, units, items };
}

export const scriptDecks: QuizDeck[] = [
  deck(
    "devanagari-how-it-works",
    "How Devanagari works",
    "devanāgarī",
    "devanagari-how-devanagari-works",
    howItWorksItems,
  ),
  deck(
    "devanagari-vowels-consonants",
    "Vowels and consonants",
    "svara-vyañjana",
    "devanagari-vowels-and-consonants",
    vowelConsonantItems,
  ),
  deck(
    "devanagari-vowel-marks",
    "Vowel marks",
    "mātrā",
    "devanagari-vowel-marks",
    vowelMarkItems,
  ),
  deck(
    "devanagari-clusters",
    "Consonant clusters",
    "saṃyuktākṣara",
    "devanagari-consonant-clusters",
    clusterItems,
  ),
  deck(
    "devanagari-numerals-punctuation",
    "Numerals and punctuation",
    "aṅka-virāma",
    "devanagari-numerals-and-punctuation",
    numeralItems,
  ),
  deck(
    "nominals-rama-a-stems",
    "Masculine rāma",
    "rāma",
    "nominals-a-stems",
    ramaItems,
    "grammar",
  ),
  ...[
    sandhiSystemDeck,
    vowelSandhiDeck,
    visargaSandhiDeck,
    consonantSandhiBetweenDeck,
    consonantSandhiWithinDeck,
    nominalSystemDeck,
    basicEndingsDeck,
    aaIiUuDeck,
    iAndUDeck,
    rStemsDeck,
    aiOAuDeck,
    consonantStemsDeck,
    soundsTheSoundSystemDeck,
    soundsVowelsDeck,
    soundsConsonantsDeck,
    soundsOtherSoundsDeck,
    soundsSyllablesDeck,
    soundsModernPronunciationDeck,
    uninflectedTypesDeck,
    uninflectedUpasargaDeck,
    uninflectedOtherPrefixesDeck,
    uninflectedCaVaAndOthersDeck,
    uninflectedAdverbsDeck,
    sentencesSentenceStructureDeck,
    sentencesAgreementDeck,
    sentencesVerblessSentencesDeck,
    sentencesQuestionsDeck,
    sentencesRelativePhrasesDeck,
    sentencesParticiplesDeck,
    sentencesTheEightCasesDeck,
    nominalsAsmadAndYusmadDeck,
    nominalsTadEtadIdamAndAdasDeck,
    nominalsKimAndYadDeck,
    nominalsPronominalAdjectivesDeck,
    nominalsNumberWordsDeck,
    verbsSpecialTenseMoodsDeck,
    verbsThePresentTenseDeck,
    verbsTheCommandMoodDeck,
    verbsTheOrdinaryPastTenseDeck,
    verbsThePotentialMoodDeck,
    verbsAtmanepadaDeck,
    verbsBhuDivTudAndCurDeck,
    verbsSuTanAndKriDeck,
    verbsAdAndRudhDeck,
    verbsTheHuClassDeck,
    verbsKarmaniAndBhavePrayogaDeck,
    verbsOtherTenseMoodsDeck,
    verbsTheSimpleFutureTenseDeck,
    verbsTheConditionalMoodDeck,
    verbsTheDistantFutureTenseDeck,
    verbsTheDistantPastTenseDeck,
    verbsTheRecentPastTenseDeck,
    verbsTheBlessingMoodDeck,
    verbsCausalRootsDeck,
    verbsDesiderativeRootsDeck,
    verbsNominalRootsDeck,
    verbsIntensiveRootsDeck,
    suffixesTheSuffixSystemDeck,
    suffixesTvaAndYaDeck,
    suffixesTaAndTavatDeck,
    suffixesTumDeck,
    suffixesTavyaAniyaAndYaDeck,
    suffixesAtAnaAndVasDeck,
    suffixesOtherRootSuffixesDeck,
    suffixesNominalSuffixesDeck,
    compoundsTheCompoundSystemDeck,
    compoundsTheDvandvaDeck,
    compoundsTheTatpurusaDeck,
    compoundsTheBahuvrihiDeck,
    compoundsTheAvyayibhavaDeck,
  ].map((entry) =>
    deck(entry.id, entry.titleEn, entry.titleIast, entry.lessonId, entry.items, entry.kind),
  ),
];
