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
    { term: 'aṃśapañcakam', meaning: 'a group of five aspects' },
    { term: 'ādyatrayaṃ', meaning: 'the first three' },
    { term: 'brahmarūpaṃ', meaning: 'are the nature of Brahman' },
    { term: 'jagadrūpaṃ', meaning: 'the nature of the world' },
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
    word('ddv-20-w8', 'a group of five aspects', [
      ['श', 'śa'],
      ['प', 'pa'],
      ['ञ्च', 'ñca'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-20-p2', 'phrase', 'The first three are Brahman’s; the last two are the world’s.', [
    word('ddv-20-w9', 'the first three', [
      ['आ', 'ā'],
      ['द्य', 'dya'],
      ['त्र', 'tra'],
      ['यं', 'yaṃ'],
    ]),
    word('ddv-20-w10', 'are the nature of Brahman', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
      ['रू', 'rū'],
      ['पं', 'paṃ'],
    ]),
    word('ddv-20-w11', 'the nature of the world', [
      ['ज', 'ja'],
      ['ग', 'ga'],
      ['द्रू', 'drū'],
      ['पं', 'paṃ'],
    ]),
    word('ddv-20-w12', 'then', [
      ['त', 'ta'],
      ['तो', 'to'],
    ]),
    word('ddv-20-w13', 'the two', [
      ['द्व', 'dva'],
      ['य', 'ya'],
      ['म्', 'm'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
