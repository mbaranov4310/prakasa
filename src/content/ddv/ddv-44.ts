import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv44: Chapter = {
  id: 'ddv-44',
  titleDev: 'साक्षिस्थाः सच्चिदानन्दाः सम्बन्धाद्व्यावहारिके',
  titleIast: 'sākṣisthāḥ saccidānandāḥ sambandhādvyāvahārike',
  titleEn: 'Verse 44',
  status: 'ready',
  translation: 'Existence-Consciousness-Bliss, standing in the Witness, inhere by relation in the empirical, and through that likewise in the apparent.',
  glossary: [
    { term: 'sākṣi', meaning: 'in the Witness' },
    { term: 'sthāḥ', meaning: 'standing' },
    { term: 'sat', meaning: 'Existence' },
    { term: 'cit', meaning: 'Consciousness' },
    { term: 'ānandāḥ', meaning: 'Bliss' },
    { term: 'sambandhāt', meaning: 'from relation' },
    { term: 'vyāvahārike', meaning: 'in the empirical' },
    { term: 'tat', meaning: 'that' },
    { term: 'dvāreṇa', meaning: 'through' },
    { term: 'anugacchanti', meaning: 'they follow' },
    { term: 'tathaiva', meaning: 'in the same way' },
    { term: 'prātibhāsike', meaning: 'in the apparent' },
  ],
  root: group('ddv-44-verse', 'verse', 'Existence-Consciousness-Bliss, standing in the Witness, inhere by relation in the empirical, and through that likewise in the apparent.', [
    group('ddv-44-p1', 'phrase', 'Existence-Consciousness-Bliss standing in the Witness, by relation, in the empirical —', [
    word('ddv-44-w1', 'in the Witness', [
      ['सा', 'sā'],
      ['क्षि', 'kṣi'],
    ], { trailing: '' }),
    word('ddv-44-w2', 'standing', [
      ['स्थाः', 'sthāḥ'],
    ]),
    word('ddv-44-w3', 'Existence', [
      ['स', 'sa'],
      ['च्', 'c'],
    ], { trailing: '' }),
    word('ddv-44-w4', 'Consciousness', [
      ['चि', 'ci'],
      ['दा', 'dā'],
    ], { trailing: '' }),
    word('ddv-44-w5', 'Bliss', [
      ['न', 'na'],
      ['न्दाः', 'ndāḥ'],
    ]),
    word('ddv-44-w6', 'from relation', [
      ['स', 'sa'],
      ['म्ब', 'mba'],
      ['न्धा', 'ndhā'],
      ['द्व्', 'dv'],
    ], { trailing: '' }),
    word('ddv-44-w7', 'in the empirical', [
      ['या', 'yā'],
      ['व', 'va'],
      ['हा', 'hā'],
      ['रि', 'ri'],
      ['के', 'ke'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-44-p2', 'phrase', 'through that they follow likewise in the apparent.', [
    word('ddv-44-w8', 'that', [
      ['त', 'ta'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-44-w9', 'through', [
      ['द्वा', 'dvā'],
      ['रे', 're'],
      ['णा', 'ṇā'],
    ], { trailing: '' }),
    word('ddv-44-w10', 'they follow', [
      ['नु', 'nu'],
      ['ग', 'ga'],
      ['च्छ', 'ccha'],
      ['न्ति', 'nti'],
    ]),
    word('ddv-44-w11', 'in the same way', [
      ['त', 'ta'],
      ['थै', 'thai'],
      ['व', 'va'],
    ]),
    word('ddv-44-w12', 'in the apparent', [
      ['प्रा', 'prā'],
      ['ति', 'ti'],
      ['भा', 'bhā'],
      ['सि', 'si'],
      ['के', 'ke'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
