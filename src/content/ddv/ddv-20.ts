import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv20: Chapter = {
  id: 'ddv-20',
  titleDev: 'अस्ति भाति प्रियं रूपं नाम चेत्यंशपञ्चकम्',
  titleIast: 'asti bhāti priyaṃ rūpaṃ nāma cetyaṃśapañcakam',
  titleEn: 'Verse 20',
  status: 'ready',
  translation: 'There are five aspects: it exists, it shines, it is dear, form, and name. The first three are the nature of Brahman; the last two are the nature of the world.',
  glossary: [
    { term: 'asti', meaning: 'it exists' },
    { term: 'bhāti', meaning: 'it shines' },
    { term: 'priyaṃ', meaning: 'it is dear' },
    { term: 'rūpaṃ', meaning: 'form' },
    { term: 'nāma', meaning: 'name' },
    { term: 'ca', meaning: 'and' },
    { term: 'iti', meaning: 'thus' },
    { term: 'aṃśa', meaning: 'aspects' },
    { term: 'pañcakam', meaning: 'a group of five' },
    { term: 'ādya', meaning: 'the first' },
    { term: 'trayam', meaning: 'three' },
    { term: 'brahma', meaning: 'Brahman' },
    { term: 'rūpam', meaning: 'are the nature of' },
    { term: 'jagat', meaning: 'the world' },
    { term: 'tataḥ', meaning: 'then' },
    { term: 'dvayam', meaning: 'the two' },
  ],
  root: group('ddv-20-verse', 'verse', 'There are five aspects: it exists, it shines, it is dear, form, and name. The first three are the nature of Brahman; the last two are the nature of the world.', [
    group('ddv-20-p1', 'phrase', 'Existence, shining, dearness, form, and name: five parts.', [
    word('ddv-20-w1', 'it exists', [
      ['अ', 'a'],
      ['स्ति', 'sti'],
    ]),
    word('ddv-20-w2', 'it shines', [
      ['भा', 'bhā'],
      ['ति', 'ti'],
    ]),
    word('ddv-20-w3', 'it is dear', [
      ['प्रि', 'pri'],
      ['यं', 'yaṃ'],
    ]),
    word('ddv-20-w4', 'form', [
      ['रू', 'rū'],
      ['पं', 'paṃ'],
    ]),
    word('ddv-20-w5', 'name', [
      ['ना', 'nā'],
      ['म', 'ma'],
    ]),
    word('ddv-20-w6', 'and', [
      ['चे', 'ce'],
    ], { trailing: '' }),
    word('ddv-20-w7', 'thus', [
      ['त्यं', 'tyaṃ'],
    ], { trailing: '' }),
    word('ddv-20-w8', 'aspects', [
      ['श', 'śa'],
    ], { trailing: '' }),
    word('ddv-20-w9', 'a group of five', [
      ['प', 'pa'],
      ['ञ्च', 'ñca'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-20-p2', 'phrase', 'The first three are Brahman’s; the last two are the world’s.', [
    word('ddv-20-w10', 'the first', [
      ['आ', 'ā'],
      ['द्य', 'dya'],
    ], { trailing: '' }),
    word('ddv-20-w11', 'three', [
      ['त्र', 'tra'],
      ['यं', 'yaṃ'],
    ]),
    word('ddv-20-w12', 'Brahman', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
    ], { trailing: '' }),
    word('ddv-20-w13', 'are the nature of', [
      ['रू', 'rū'],
      ['पं', 'paṃ'],
    ]),
    word('ddv-20-w14', 'the world', [
      ['ज', 'ja'],
      ['ग', 'ga'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-20-w15', 'the nature of', [
      ['रू', 'rū'],
      ['पं', 'paṃ'],
    ]),
    word('ddv-20-w16', 'then', [
      ['त', 'ta'],
      ['तो', 'to'],
    ]),
    word('ddv-20-w17', 'the two', [
      ['द्व', 'dva'],
      ['य', 'ya'],
      ['म्', 'm'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
