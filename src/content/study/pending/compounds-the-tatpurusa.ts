/**
 * Drill card provenance (Gonda §110–111 shape; First Steps has no tatpuruṣa drill):
 * - nagaragata: lesson; case 2
 * - gramagata: Gonda §110 acc. shape; nagara→grāma
 * - vanagata: Gonda §110 acc. shape; nagara→vana
 * - svargagata: Gonda svarga-gati; participle like lesson
 * - nakhabhinna: lesson; case 3
 * - devagupta: Gonda §110; kept
 * - asvagupta: Gonda §110 shape; deva→aśva
 * - narahata: Gonda §110 shape; swap nara + hata
 * - gohitam: lesson; case 4
 * - asvahitam: lesson gohitam shape; go→aśva
 * - gajahitam: lesson gohitam shape; go→gaja
 * - narahitam: lesson gohitam shape; go→nara
 * - caurabhaya: lesson; case 5
 * - simhabhaya: lesson caurabhaya shape; caura→siṃha
 * - asvabhaya: lesson caurabhaya shape; caura→aśva
 * - svargapatita: Gonda §110; kept
 * - rajaputra: lesson; case 6
 * - dharmaksetra: lesson; case 6
 * - asvakovida: Gonda §110 aśva-kovida; kept
 * - gajaputra: lesson rājaputra shape; rājan→gaja
 * - naraputra: lesson rājaputra shape; rājan→nara
 * - kuruksetra: lesson; case 6
 * - atapasuska: lesson; case 7
 * - vanasuska: lesson ātapaśuṣka shape; ātapa→vana
 * - nagarasthita: lesson case-7 shape; swap nagara + sthita
 * - gramasthita: lesson case-7 shape; swap grāma + sthita
 * - krsnasarpa: lesson karmadhāraya
 * - meghasyama: lesson karmadhāraya
 * - suklakrsna: lesson karmadhāraya
 * - nilotpala: Gonda §111; kept
 * - suklasva: lesson kṛṣṇasarpa shape; sarpa→aśva
 * - krsnagaja: lesson kṛṣṇasarpa shape; sarpa→gaja
 * - abhava: lesson na→a
 * - adharma: lesson na→a; swap dharma
 * - anasva: lesson na→an before vowel; swap aśva
 * - anisvara: lesson na→an before vowel; swap īśvara
 * - kumbhakara: lesson upapada
 * - rathakara: lesson kumbhakāra shape; kumbha→ratha
 * - malakara: lesson kumbhakāra shape; kumbha→mālā
 * - jaladhi: lesson upapada
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "compounds-the-tatpurusa",
  titleEn: "The tatpuruṣa",
  titleIast: "tatpuruṣa",
  lessonId: "compounds-the-tatpurusa",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    {
      id: "nagaragata",
      // lesson; case 2
      dev: "नगरगतः",
      iast: "nagaragataḥ",
      meaning: "nagaraṃ gataḥ",
      unit: "word",
      group: "case-2",
    },
    {
      id: "gramagata",
      // Gonda §110 acc. shape; nagara→grāma
      dev: "ग्रामगतः",
      iast: "grāmagataḥ",
      meaning: "grāmaṃ gataḥ",
      unit: "word",
      group: "case-2",
    },
    {
      id: "vanagata",
      // Gonda §110 acc. shape; nagara→vana
      dev: "वनगतः",
      iast: "vanagataḥ",
      meaning: "vanaṃ gataḥ",
      unit: "word",
      group: "case-2",
    },
    {
      id: "svargagata",
      // Gonda svarga-gati; participle like lesson
      dev: "स्वर्गगतः",
      iast: "svargagataḥ",
      meaning: "svargaṃ gataḥ",
      unit: "word",
      group: "case-2",
    },
    {
      id: "nakhabhinna",
      // lesson; case 3
      dev: "नखभिन्नः",
      iast: "nakhabhinnaḥ",
      meaning: "nakhair bhinnaḥ",
      unit: "word",
      group: "case-3",
    },
    {
      id: "devagupta",
      // Gonda §110; kept
      dev: "देवगुप्तः",
      iast: "devaguptaḥ",
      meaning: "devena guptaḥ",
      unit: "word",
      group: "case-3",
    },
    {
      id: "asvagupta",
      // Gonda §110 shape; deva→aśva
      dev: "अश्वगुप्तः",
      iast: "aśvaguptaḥ",
      meaning: "aśvena guptaḥ",
      unit: "word",
      group: "case-3",
    },
    {
      id: "narahata",
      // Gonda §110 shape; swap nara + hata
      dev: "नरहतः",
      iast: "narahataḥ",
      meaning: "nareṇa hataḥ",
      unit: "word",
      group: "case-3",
    },
    {
      id: "gohitam",
      // lesson; case 4
      dev: "गोहितम्",
      iast: "gohitam",
      meaning: "gave hitam",
      unit: "word",
      group: "case-4",
    },
    {
      id: "asvahitam",
      // lesson gohitam shape; go→aśva
      dev: "अश्वहितम्",
      iast: "aśvahitam",
      meaning: "aśvāya hitam",
      unit: "word",
      group: "case-4",
    },
    {
      id: "gajahitam",
      // lesson gohitam shape; go→gaja
      dev: "गजहितम्",
      iast: "gajahitam",
      meaning: "gajāya hitam",
      unit: "word",
      group: "case-4",
    },
    {
      id: "narahitam",
      // lesson gohitam shape; go→nara
      dev: "नरहितम्",
      iast: "narahitam",
      meaning: "narāya hitam",
      unit: "word",
      group: "case-4",
    },
    {
      id: "caurabhaya",
      // lesson; case 5
      dev: "चौरभयम्",
      iast: "caurabhayam",
      meaning: "caurāt bhayam",
      unit: "word",
      group: "case-5",
    },
    {
      id: "simhabhaya",
      // lesson caurabhaya shape; caura→siṃha
      dev: "सिंहभयम्",
      iast: "siṃhabhayam",
      meaning: "siṃhāt bhayam",
      unit: "word",
      group: "case-5",
    },
    {
      id: "asvabhaya",
      // lesson caurabhaya shape; caura→aśva
      dev: "अश्वभयम्",
      iast: "aśvabhayam",
      meaning: "aśvāt bhayam",
      unit: "word",
      group: "case-5",
    },
    {
      id: "svargapatita",
      // Gonda §110; kept
      dev: "स्वर्गपतितः",
      iast: "svargapatitaḥ",
      meaning: "svargāt patitaḥ",
      unit: "word",
      group: "case-5",
    },
    {
      id: "rajaputra",
      // lesson; case 6
      dev: "राजपुत्रः",
      iast: "rājaputraḥ",
      meaning: "rājñaḥ putraḥ",
      unit: "word",
      group: "case-6",
    },
    {
      id: "dharmaksetra",
      // lesson; case 6
      dev: "धर्मक्षेत्रम्",
      iast: "dharmakṣetram",
      meaning: "dharmasya kṣetram",
      unit: "word",
      group: "case-6",
    },
    {
      id: "asvakovida",
      // Gonda §110 aśva-kovida; kept
      dev: "अश्वकोविदः",
      iast: "aśvakovidaḥ",
      meaning: "aśvānāṃ kovidaḥ",
      unit: "word",
      group: "case-6",
    },
    {
      id: "gajaputra",
      // lesson rājaputra shape; rājan→gaja
      dev: "गजपुत्रः",
      iast: "gajaputraḥ",
      meaning: "gajasya putraḥ",
      unit: "word",
      group: "case-6",
    },
    {
      id: "naraputra",
      // lesson rājaputra shape; rājan→nara
      dev: "नरपुत्रः",
      iast: "naraputraḥ",
      meaning: "narasya putraḥ",
      unit: "word",
      group: "case-6",
    },
    {
      id: "kuruksetra",
      // lesson; case 6
      dev: "कुरुक्षेत्रम्",
      iast: "kurukṣetram",
      meaning: "kurūṇāṃ kṣetram",
      unit: "word",
      group: "case-6",
    },
    {
      id: "atapasuska",
      // lesson; case 7
      dev: "आतपशुष्कः",
      iast: "ātapaśuṣkaḥ",
      meaning: "ātape śuṣkaḥ",
      unit: "word",
      group: "case-7",
    },
    {
      id: "vanasuska",
      // lesson ātapaśuṣka shape; ātapa→vana
      dev: "वनशुष्कः",
      iast: "vanaśuṣkaḥ",
      meaning: "vane śuṣkaḥ",
      unit: "word",
      group: "case-7",
    },
    {
      id: "nagarasthita",
      // lesson case-7 shape; swap nagara + sthita
      dev: "नगरस्थितः",
      iast: "nagarasthitaḥ",
      meaning: "nagare sthitaḥ",
      unit: "word",
      group: "case-7",
    },
    {
      id: "gramasthita",
      // lesson case-7 shape; swap grāma + sthita
      dev: "ग्रामस्थितः",
      iast: "grāmasthitaḥ",
      meaning: "grāme sthitaḥ",
      unit: "word",
      group: "case-7",
    },
    {
      id: "krsnasarpa",
      // lesson karmadhāraya
      dev: "कृष्णसर्पः",
      iast: "kṛṣṇasarpaḥ",
      meaning: "kṛṣṇaḥ sarpaḥ",
      unit: "word",
      group: "karmadhāraya",
    },
    {
      id: "meghasyama",
      // lesson karmadhāraya
      dev: "मेघश्यामः",
      iast: "meghaśyāmaḥ",
      meaning: "megha iva śyāmaḥ",
      unit: "word",
      group: "karmadhāraya",
    },
    {
      id: "suklakrsna",
      // lesson karmadhāraya
      dev: "शुक्लकृष्णः",
      iast: "śuklakṛṣṇaḥ",
      meaning: "śuklaḥ kṛṣṇaḥ",
      unit: "word",
      group: "karmadhāraya",
    },
    {
      id: "nilotpala",
      // Gonda §111; kept
      dev: "नीलोत्पलम्",
      iast: "nīlotpalam",
      meaning: "nīlam utpalam",
      unit: "word",
      group: "karmadhāraya",
    },
    {
      id: "suklasva",
      // lesson kṛṣṇasarpa shape; sarpa→aśva
      dev: "शुक्लाश्वः",
      iast: "śuklāśvaḥ",
      meaning: "śuklaḥ aśvaḥ",
      unit: "word",
      group: "karmadhāraya",
    },
    {
      id: "krsnagaja",
      // lesson kṛṣṇasarpa shape; sarpa→gaja
      dev: "कृष्णगजः",
      iast: "kṛṣṇagajaḥ",
      meaning: "kṛṣṇaḥ gajaḥ",
      unit: "word",
      group: "karmadhāraya",
    },
    {
      id: "abhava",
      // lesson na→a
      dev: "अभावः",
      iast: "abhāvaḥ",
      meaning: "na bhāvaḥ",
      unit: "word",
      group: "na",
    },
    {
      id: "adharma",
      // lesson na→a; swap dharma
      dev: "अधर्मः",
      iast: "adharmaḥ",
      meaning: "na dharmaḥ",
      unit: "word",
      group: "na",
    },
    {
      id: "anasva",
      // lesson na→an before vowel; swap aśva
      dev: "अनश्वः",
      iast: "anaśvaḥ",
      meaning: "na aśvaḥ",
      unit: "word",
      group: "na",
    },
    {
      id: "anisvara",
      // lesson na→an before vowel; swap īśvara
      dev: "अनीश्वरः",
      iast: "anīśvaraḥ",
      meaning: "na īśvaraḥ",
      unit: "word",
      group: "na",
    },
    {
      id: "kumbhakara",
      // lesson upapada
      dev: "कुम्भकारः",
      iast: "kumbhakāraḥ",
      meaning: "kumbhaṃ karoti",
      unit: "word",
      group: "upapada",
    },
    {
      id: "rathakara",
      // lesson kumbhakāra shape; kumbha→ratha
      dev: "रथकारः",
      iast: "rathakāraḥ",
      meaning: "rathaṃ karoti",
      unit: "word",
      group: "upapada",
    },
    {
      id: "malakara",
      // lesson kumbhakāra shape; kumbha→mālā
      dev: "मालाकारः",
      iast: "mālākāraḥ",
      meaning: "mālāṃ karoti",
      unit: "word",
      group: "upapada",
    },
    {
      id: "jaladhi",
      // lesson upapada
      dev: "जलधिः",
      iast: "jaladhiḥ",
      meaning: "jalaṃ dhīyate asmin",
      unit: "word",
      group: "upapada",
    },
  ] as QuizDeckItem[],
};
