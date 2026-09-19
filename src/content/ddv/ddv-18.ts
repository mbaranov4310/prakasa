import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv18: Chapter = {
  id: 'ddv-18',
  titleDev: 'तथा सर्गब्रह्मणोश्च भेदमावृत्य तिष्ठति',
  titleIast: 'tathā sargabrahmaṇośca bhedamāvṛtya tiṣṭhati',
  titleEn: 'Verse 18',
  status: 'ready',
  translation: 'So too a power remains, concealing the distinction of creation and Brahman; under its influence Brahman appears as modified.',
  glossary: [
    { term: 'tathā', meaning: 'in the same way' },
    { term: 'sargabrahmaṇoḥ', meaning: 'of creation and Brahman' },
    { term: 'ca', meaning: 'and' },
    { term: 'bhedam', meaning: 'the distinction' },
    { term: 'āvṛtya', meaning: 'having concealed' },
    { term: 'tiṣṭhati', meaning: 'it remains' },
    { term: 'yā', meaning: 'which' },
    { term: 'śaktiḥ', meaning: 'power' },
    { term: 'tadvaśāt', meaning: 'by its force' },
    { term: 'brahma', meaning: 'Brahman' },
    { term: 'vikṛtatvena', meaning: 'as modified' },
    { term: 'bhāsate', meaning: 'appears' },
  ],
  root: group('ddv-18-verse', 'verse', 'So too a power remains, concealing the distinction of creation and Brahman; under its influence Brahman appears as modified.', [
    group('ddv-18-p1', 'phrase', 'Likewise a power stands concealing the distinction of creation and Brahman.', [
    word('ddv-18-w1', 'in the same way', [
      ['त', 'ta'],
      ['था', 'thā'],
    ]),
    word('ddv-18-w2', 'of creation and Brahman', [
      ['स', 'sa'],
      ['र्ग', 'rga'],
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
      ['णो', 'ṇo'],
      ['श्', 'ś'],
    ], { trailing: '' }),
    word('ddv-18-w3', 'and', [
      ['च', 'ca'],
    ]),
    word('ddv-18-w4', 'the distinction', [
      ['भे', 'bhe'],
      ['द', 'da'],
      ['मा', 'mā'],
    ], { trailing: '' }),
    word('ddv-18-w5', 'having concealed', [
      ['वृ', 'vṛ'],
      ['त्य', 'tya'],
    ]),
    word('ddv-18-w6', 'it remains', [
      ['ति', 'ti'],
      ['ष्ठ', 'ṣṭha'],
      ['ति', 'ti'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-18-p2', 'phrase', 'By its force Brahman appears as if transformed.', [
    word('ddv-18-w7', 'which', [
      ['या', 'yā'],
    ]),
    word('ddv-18-w8', 'power', [
      ['श', 'śa'],
      ['क्ति', 'kti'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-18-w9', 'by its force', [
      ['त', 'ta'],
      ['द्व', 'dva'],
      ['शा', 'śā'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-18-w10', 'Brahman', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
    ]),
    word('ddv-18-w11', 'as modified', [
      ['वि', 'vi'],
      ['कृ', 'kṛ'],
      ['त', 'ta'],
      ['त्वे', 'tve'],
      ['न', 'na'],
    ]),
    word('ddv-18-w12', 'appears', [
      ['भा', 'bhā'],
      ['स', 'sa'],
      ['ते', 'te'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
