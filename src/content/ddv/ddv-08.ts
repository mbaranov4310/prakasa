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
    { term: 'cicchāyā', meaning: 'with the reflection of Consciousness' },
    { term: 'dehasākṣibhiḥ', meaning: 'the body, and the Witness' },
    { term: 'sahajaṃ', meaning: 'natural' },
    { term: 'karmajaṃ', meaning: 'born of karma' },
    { term: 'bhrāntijanyaṃ', meaning: 'born of error' },
    { term: 'ca', meaning: 'and' },
    { term: 'trividhaṃ', meaning: 'of three kinds' },
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
    word('ddv-08-w3', 'with the reflection of Consciousness', [
      ['चि', 'ci'],
      ['च्छा', 'cchā'],
      ['या', 'yā'],
    ], { trailing: '' }),
    word('ddv-08-w4', 'the body, and the Witness', [
      ['दे', 'de'],
      ['ह', 'ha'],
      ['सा', 'sā'],
      ['क्षि', 'kṣi'],
      ['भिः', 'bhiḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-08-p2', 'phrase', 'Natural, born of karma, and born of error — three kinds, in that order.', [
    word('ddv-08-w5', 'natural', [
      ['स', 'sa'],
      ['ह', 'ha'],
      ['जं', 'jaṃ'],
    ]),
    word('ddv-08-w6', 'born of karma', [
      ['क', 'ka'],
      ['र्म', 'rma'],
      ['जं', 'jaṃ'],
    ]),
    word('ddv-08-w7', 'born of error', [
      ['भ्रा', 'bhrā'],
      ['न्ति', 'nti'],
      ['ज', 'ja'],
      ['न्यं', 'nyaṃ'],
    ]),
    word('ddv-08-w8', 'and', [
      ['च', 'ca'],
    ]),
    word('ddv-08-w9', 'of three kinds', [
      ['त्रि', 'tri'],
      ['वि', 'vi'],
      ['धं', 'dhaṃ'],
    ]),
    word('ddv-08-w10', 'in that order', [
      ['क्र', 'kra'],
      ['मा', 'mā'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
