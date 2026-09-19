import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv07: Chapter = {
  id: 'ddv-07',
  titleDev: 'Verse 7',
  titleIast: 'Verse 7',
  titleEn: 'Verse 7',
  status: 'ready',
  translation: 'The identity of the reflection (of Consciousness) and the ego is held to be like that of fire and a heated iron ball. Through identification with that ego, the body has attained sentiency.',
  glossary: [
    { term: 'chāyā', meaning: 'reflection' },
    { term: 'ahaṅkārayoḥ', meaning: 'and the ego' },
    { term: 'aikyaṃ', meaning: 'identity' },
    { term: 'tapta', meaning: 'heated' },
    { term: 'ayaḥ', meaning: 'iron' },
    { term: 'piṇḍavat', meaning: 'like a ball' },
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
    word('ddv-07-w1', 'reflection', [
      ['छा', 'chā'],
      ['याऽ', 'yā\''],
    ], { trailing: '' }),
    word('ddv-07-w2', 'and the ego', [
      ['ह', 'ha'],
      ['ङ्का', 'ṅkā'],
      ['र', 'ra'],
      ['यो', 'yo'],
    ], { trailing: '' }),
    word('ddv-07-w3', 'identity', [
      ['रै', 'rai'],
      ['क्यं', 'kyaṃ'],
    ]),
    word('ddv-07-w4', 'heated', [
      ['त', 'ta'],
      ['प्ता', 'ptā'],
    ], { trailing: '' }),
    word('ddv-07-w5', 'iron', [
      ['यः', 'yaḥ'],
    ], { trailing: '' }),
    word('ddv-07-w6', 'like a ball', [
      ['पि', 'pi'],
      ['ण्ड', 'ṇḍa'],
      ['व', 'va'],
      ['न्', 'n'],
    ], { trailing: '' }),
    word('ddv-07-w7', 'is held (by the wise)', [
      ['म', 'ma'],
      ['त', 'ta'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-07-p2', 'phrase', 'By identity with that ego, the body appears sentient.', [
    word('ddv-07-w8', 'that', [
      ['त', 'ta'],
      ['द', 'da'],
    ], { trailing: '' }),
    word('ddv-07-w9', 'ego', [
      ['ह', 'ha'],
      ['ङ्का', 'ṅkā'],
      ['र', 'ra'],
    ], { trailing: '' }),
    word('ddv-07-w10', 'from identification', [
      ['ता', 'tā'],
      ['दा', 'dā'],
      ['त्म्या', 'tmyā'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-07-w11', 'the body', [
      ['दे', 'de'],
      ['ह', 'ha'],
      ['श्', 'ś'],
    ], { trailing: '' }),
    word('ddv-07-w12', 'sentiency', [
      ['चे', 'ce'],
      ['त', 'ta'],
      ['न', 'na'],
      ['ता', 'tā'],
      ['म', 'ma'],
    ], { trailing: '' }),
    word('ddv-07-w13', 'has attained', [
      ['गा', 'gā'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
