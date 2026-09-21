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
  rows: Array<[id: string, dev: string, iast: string, meaning?: string]>,
): QuizDeckItem[] {
  return rows.map(([id, dev, iast, meaning]) => ({
    id,
    dev,
    iast,
    unit,
    meaning,
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

const ramaItems = letters("word", [
  ["sg1", "रामः", "rāmaḥ", "Rāma as the subject (one)"],
  ["sg2", "रामम्", "rāmam", "Rāma as the object (one)"],
  ["sg3", "रामेण", "rāmeṇa", "with (one) Rāma"],
  ["sg4", "रामाय", "rāmāya", "for (one) Rāma"],
  ["sg5", "रामात्", "rāmāt", "from (one) Rāma"],
  ["sg6", "रामस्य", "rāmasya", "of (one) Rāma"],
  ["sg7", "रामे", "rāme", "in (one) Rāma"],
  ["sg8", "राम", "rāma", "O Rāma (one)"],
  ["du1", "रामौ", "rāmau", "two Rāmas as the subject"],
  ["du2", "रामौ", "rāmau", "two Rāmas as the object"],
  ["du3", "रामाभ्याम्", "rāmābhyām", "with two Rāmas"],
  ["du4", "रामाभ्याम्", "rāmābhyām", "for two Rāmas"],
  ["du5", "रामाभ्याम्", "rāmābhyām", "from two Rāmas"],
  ["du6", "रामयोः", "rāmayoḥ", "of two Rāmas"],
  ["du7", "रामयोः", "rāmayoḥ", "in two Rāmas"],
  ["du8", "रामौ", "rāmau", "O two Rāmas"],
  ["pl1", "रामाः", "rāmāḥ", "Rāmas as the subject (many)"],
  ["pl2", "रामान्", "rāmān", "Rāmas as the object (many)"],
  ["pl3", "रामैः", "rāmaiḥ", "with (many) Rāmas"],
  ["pl4", "रामेभ्यः", "rāmebhyaḥ", "for (many) Rāmas"],
  ["pl5", "रामेभ्यः", "rāmebhyaḥ", "from (many) Rāmas"],
  ["pl6", "रामाणाम्", "rāmāṇām", "of (many) Rāmas"],
  ["pl7", "रामेषु", "rāmeṣu", "in (many) Rāmas"],
  ["pl8", "रामाः", "rāmāḥ", "O Rāmas (many)"],
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
