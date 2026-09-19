import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv33: Chapter = {
  id: 'ddv-33',
  titleDev: 'Verse 33',
  titleIast: 'Verse 33',
  titleEn: 'Verse 33',
  status: 'ready',
  translation: 'Limitation is imagined; what seems limited is real. Jīva-hood is superimposed on it; Brahman-hood is its nature.',
  glossary: [
    { term: 'avacchedaḥ', meaning: 'limitation' },
    { term: 'kalpitaḥ', meaning: 'is imagined' },
    { term: 'syāt', meaning: 'would be' },
    { term: 'avacchedyaṃ', meaning: 'that which is limited' },
    { term: 'tu', meaning: 'but' },
    { term: 'vāstavam', meaning: 'is real' },
    { term: 'tasmin', meaning: 'on that' },
    { term: 'jīvatvam', meaning: 'jīva-hood' },
    { term: 'āropāt', meaning: 'from superimposition' },
    { term: 'brahmatvaṃ', meaning: 'Brahman-hood' },
    { term: 'svabhāvataḥ', meaning: 'by its own nature' },
  ],
  root: group('ddv-33-verse', 'verse', 'Limitation is imagined; what seems limited is real. Jīva-hood is superimposed on it; Brahman-hood is its nature.', [
    group('ddv-33-p1', 'phrase', 'Limitation is imagined; that which is limited is real.', [
    word('ddv-33-w1', 'limitation', [
      ['अ', 'a'],
      ['व', 'va'],
      ['च्छे', 'cche'],
      ['दः', 'daḥ'],
    ]),
    word('ddv-33-w2', 'is imagined', [
      ['क', 'ka'],
      ['ल्पि', 'lpi'],
      ['तः', 'taḥ'],
    ]),
    word('ddv-33-w3', 'would be', [
      ['स्या', 'syā'],
      ['द', 'da'],
    ], { trailing: '' }),
    word('ddv-33-w4', 'that which is limited', [
      ['व', 'va'],
      ['च्छे', 'cche'],
      ['द्यं', 'dyaṃ'],
    ]),
    word('ddv-33-w5', 'but', [
      ['तु', 'tu'],
    ]),
    word('ddv-33-w6', 'is real', [
      ['वा', 'vā'],
      ['स्त', 'sta'],
      ['व', 'va'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-33-p2', 'phrase', 'Jīva-hood is superimposed there; Brahman-hood is by nature.', [
    word('ddv-33-w7', 'on that', [
      ['त', 'ta'],
      ['स्मि', 'smi'],
      ['न्', 'n'],
    ]),
    word('ddv-33-w8', 'jīva-hood', [
      ['जी', 'jī'],
      ['व', 'va'],
      ['त्व', 'tva'],
      ['मा', 'mā'],
    ], { trailing: '' }),
    word('ddv-33-w9', 'from superimposition', [
      ['रो', 'ro'],
      ['पा', 'pā'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-33-w10', 'Brahman-hood', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
      ['त्वं', 'tvaṃ'],
    ]),
    word('ddv-33-w11', 'but', [
      ['तु', 'tu'],
    ]),
    word('ddv-33-w12', 'by its own nature', [
      ['स्व', 'sva'],
      ['भा', 'bhā'],
      ['व', 'va'],
      ['तः', 'taḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
