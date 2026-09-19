import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv07: Chapter = {
  id: 'ddv-07',
  titleDev: 'छायाऽहङ्कारयोरैक्यं तप्तायःपिण्डवन्मतम्',
  titleIast: 'chāyā\'haṅkārayoraikyaṃ taptāyaḥpiṇḍavanmatam',
  titleEn: 'Verse 7',
  status: 'ready',
  translation: 'The identity of the reflection (of Consciousness) and the ego is held to be like that of fire and a heated iron ball. Through identification with that ego, the body has attained sentiency.',
  glossary: [
    { term: 'chāyā\'haṅkārayoḥ', meaning: 'of the reflection and the ego' },
    { term: 'aikyaṃ', meaning: 'identity' },
    { term: 'tapta', meaning: 'heated' },
    { term: 'ayaḥpiṇḍavat', meaning: 'like an iron ball' },
    { term: 'matam', meaning: 'is held (by the wise)' },
    { term: 'tat', meaning: 'that' },
    { term: 'ahaṅkāra', meaning: 'ego' },
    { term: 'tādātmyāt', meaning: 'from identification' },
    { term: 'dehaḥ', meaning: 'the body' },
    { term: 'cetanatām', meaning: 'sentiency' },
    { term: 'agāt', meaning: 'has attained' },
  ],
  root: group('ddv-07-verse', 'verse', 'The identity of the reflection (of Consciousness) and the ego is held to be like that of fire and a heated iron ball. Through identification with that ego, the body has attained sentiency.', [
    group('ddv-07-p1', 'phrase', 'The reflection and the ego are one, like a red-hot iron ball.', [
    word('ddv-07-w1', 'of the reflection and the ego', [
      ['छा', 'chā'],
      ['याऽ', 'yā\''],
      ['ह', 'ha'],
      ['ङ्का', 'ṅkā'],
      ['र', 'ra'],
      ['यो', 'yo'],
    ], { trailing: '' }),
    word('ddv-07-w2', 'identity', [
      ['रै', 'rai'],
      ['क्यं', 'kyaṃ'],
    ]),
    word('ddv-07-w3', 'heated', [
      ['त', 'ta'],
      ['प्ता', 'ptā'],
    ], { trailing: '' }),
    word('ddv-07-w4', 'like an iron ball', [
      ['यः', 'yaḥ'],
      ['पि', 'pi'],
      ['ण्ड', 'ṇḍa'],
      ['व', 'va'],
      ['न्', 'n'],
    ], { trailing: '' }),
    word('ddv-07-w5', 'is held (by the wise)', [
      ['म', 'ma'],
      ['त', 'ta'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-07-p2', 'phrase', 'By identity with that ego, the body appears sentient.', [
    word('ddv-07-w6', 'that', [
      ['त', 'ta'],
      ['द', 'da'],
    ], { trailing: '' }),
    word('ddv-07-w7', 'ego', [
      ['ह', 'ha'],
      ['ङ्का', 'ṅkā'],
      ['र', 'ra'],
    ], { trailing: '' }),
    word('ddv-07-w8', 'from identification', [
      ['ता', 'tā'],
      ['दा', 'dā'],
      ['त्म्या', 'tmyā'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-07-w9', 'the body', [
      ['दे', 'de'],
      ['ह', 'ha'],
      ['श्', 'ś'],
    ], { trailing: '' }),
    word('ddv-07-w10', 'sentiency', [
      ['चे', 'ce'],
      ['त', 'ta'],
      ['न', 'na'],
      ['ता', 'tā'],
      ['म', 'ma'],
    ], { trailing: '' }),
    word('ddv-07-w11', 'has attained', [
      ['गा', 'gā'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
