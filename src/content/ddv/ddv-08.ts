import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv08: Chapter = {
  id: 'ddv-08',
  titleDev: 'अहङ्कारस्य तादात्म्यं चिच्छायादेहसाक्षिभिः',
  titleIast: 'ahaṅkārasya tādātmyaṃ cicchāyādehasākṣibhiḥ',
  titleEn: 'Verse 8',
  status: 'ready',
  translation: 'The ego’s identification with the reflection of Consciousness, the body, and the Witness is of three kinds, in order: natural, due to karma, and born of error.',
  glossary: [
    { term: 'ahaṅkārasya', meaning: 'of the ego' },
    { term: 'tādātmyaṃ', meaning: 'identification' },
    { term: 'cit', meaning: 'Consciousness' },
    { term: 'chāyā', meaning: 'reflection' },
    { term: 'deha', meaning: 'the body' },
    { term: 'sākṣibhiḥ', meaning: 'and the Witness' },
    { term: 'sahajaṃ', meaning: 'natural' },
    { term: 'karma', meaning: 'of karma' },
    { term: 'jam', meaning: 'born' },
    { term: 'bhrānti', meaning: 'of error' },
    { term: 'janyam', meaning: 'born' },
    { term: 'ca', meaning: 'and' },
    { term: 'tri', meaning: 'three' },
    { term: 'vidham', meaning: 'kinds' },
    { term: 'kramāt', meaning: 'in that order' },
  ],
  root: group('ddv-08-verse', 'verse', 'The ego’s identification with the reflection of Consciousness, the body, and the Witness is of three kinds, in order: natural, due to karma, and born of error.', [
    group('ddv-08-p1', 'phrase', 'The ego’s identification is with the reflection, the body, and the Witness.', [
    word('ddv-08-w1', 'of the ego', [
      ['अ', 'a'],
      ['ह', 'ha'],
      ['ङ्का', 'ṅkā'],
      ['र', 'ra'],
      ['स्य', 'sya'],
    ]),
    word('ddv-08-w2', 'identification', [
      ['ता', 'tā'],
      ['दा', 'dā'],
      ['त्म्यं', 'tmyaṃ'],
    ]),
    word('ddv-08-w3', 'Consciousness', [
      ['चि', 'ci'],
      ['च्', 'c'],
    ], { trailing: '' }),
    word('ddv-08-w4', 'reflection', [
      ['छा', 'chā'],
      ['या', 'yā'],
    ], { trailing: '' }),
    word('ddv-08-w5', 'the body', [
      ['दे', 'de'],
      ['ह', 'ha'],
    ], { trailing: '' }),
    word('ddv-08-w6', 'and the Witness', [
      ['सा', 'sā'],
      ['क्षि', 'kṣi'],
      ['भिः', 'bhiḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-08-p2', 'phrase', 'Natural, born of karma, and born of error — three kinds, in that order.', [
    word('ddv-08-w7', 'natural', [
      ['स', 'sa'],
      ['ह', 'ha'],
      ['जं', 'jaṃ'],
    ]),
    word('ddv-08-w8', 'of karma', [
      ['क', 'ka'],
      ['र्म', 'rma'],
    ], { trailing: '' }),
    word('ddv-08-w9', 'born', [
      ['जं', 'jaṃ'],
    ]),
    word('ddv-08-w10', 'of error', [
      ['भ्रा', 'bhrā'],
      ['न्ति', 'nti'],
    ], { trailing: '' }),
    word('ddv-08-w11', 'born', [
      ['ज', 'ja'],
      ['न्यं', 'nyaṃ'],
    ]),
    word('ddv-08-w12', 'and', [
      ['च', 'ca'],
    ]),
    word('ddv-08-w13', 'three', [
      ['त्रि', 'tri'],
    ], { trailing: '' }),
    word('ddv-08-w14', 'kinds', [
      ['वि', 'vi'],
      ['धं', 'dhaṃ'],
    ]),
    word('ddv-08-w15', 'in that order', [
      ['क्र', 'kra'],
      ['मा', 'mā'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
