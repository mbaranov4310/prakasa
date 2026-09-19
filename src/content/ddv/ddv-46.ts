import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv46: Chapter = {
  id: 'ddv-46',
  titleDev: 'प्रातिभासिकजीवस्य लये स्युर्व्यावहारिके',
  titleIast: 'prātibhāsikajīvasya laye syurvyāvahārike',
  titleEn: 'Verse 46',
  status: 'ready',
  translation: 'On the dissolution of the apparent jīva they remain in the empirical; on its dissolution, Existence-Consciousness-Bliss come to rest in the Witness.',
  glossary: [
    { term: 'prātibhāsikajīvasya', meaning: 'of the apparent jīva' },
    { term: 'laye', meaning: 'on dissolution' },
    { term: 'syuḥ', meaning: 'they would be' },
    { term: 'vyāvahārike', meaning: 'in the empirical' },
    { term: 'tallaye', meaning: 'on the dissolution of that' },
    { term: 'saccidānandāḥ', meaning: 'Existence-Consciousness-Bliss' },
    { term: 'paryavasyanti', meaning: 'come to rest' },
    { term: 'sākṣiṇi', meaning: 'in the Witness' },
  ],
  root: group('ddv-46-verse', 'verse', 'On the dissolution of the apparent jīva they remain in the empirical; on its dissolution, Existence-Consciousness-Bliss come to rest in the Witness.', [
    group('ddv-46-p1', 'phrase', 'When the apparent jīva dissolves, they remain in the empirical.', [
    word('ddv-46-w1', 'of the apparent jīva', [
      ['प्रा', 'prā'],
      ['ति', 'ti'],
      ['भा', 'bhā'],
      ['सि', 'si'],
      ['क', 'ka'],
      ['जी', 'jī'],
      ['व', 'va'],
      ['स्य', 'sya'],
    ]),
    word('ddv-46-w2', 'on dissolution', [
      ['ल', 'la'],
      ['ये', 'ye'],
    ]),
    word('ddv-46-w3', 'they would be', [
      ['स्यु', 'syu'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-46-w4', 'in the empirical', [
      ['व्या', 'vyā'],
      ['व', 'va'],
      ['हा', 'hā'],
      ['रि', 'ri'],
      ['के', 'ke'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-46-p2', 'phrase', 'When that dissolves, Existence-Consciousness-Bliss come to rest in the Witness.', [
    word('ddv-46-w5', 'on the dissolution of that', [
      ['त', 'ta'],
      ['ल्ल', 'lla'],
      ['ये', 'ye'],
    ]),
    word('ddv-46-w6', 'Existence-Consciousness-Bliss', [
      ['स', 'sa'],
      ['च्चि', 'cci'],
      ['दा', 'dā'],
      ['न', 'na'],
      ['न्दाः', 'ndāḥ'],
    ]),
    word('ddv-46-w7', 'come to rest', [
      ['प', 'pa'],
      ['र्य', 'rya'],
      ['व', 'va'],
      ['स्य', 'sya'],
      ['न्ति', 'nti'],
    ]),
    word('ddv-46-w8', 'in the Witness', [
      ['सा', 'sā'],
      ['क्षि', 'kṣi'],
      ['णि', 'ṇi'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
