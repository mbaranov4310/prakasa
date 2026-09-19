import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv40: Chapter = {
  id: 'ddv-40',
  titleDev: 'प्रातिभासिकजीवो यस्तज्जगत् प्रातिभासिकम्',
  titleIast: 'prātibhāsikajīvo yastajjagat prātibhāsikam',
  titleEn: 'Verse 40',
  status: 'ready',
  translation: 'The apparent jīva takes that apparent world as real; another, the empirical jīva, thinks it false.',
  glossary: [
    { term: 'prātibhāsikajīvaḥ', meaning: 'the apparent jīva' },
    { term: 'yaḥ', meaning: 'who' },
    { term: 'tat', meaning: 'that' },
    { term: 'jagat', meaning: 'world' },
    { term: 'prātibhāsikam', meaning: 'is apparent' },
    { term: 'vāstavaṃ', meaning: 'as real' },
    { term: 'manyate', meaning: 'thinks' },
    { term: 'anyaḥ', meaning: 'another' },
    { term: 'tu', meaning: 'but' },
    { term: 'mithyā', meaning: 'as false' },
    { term: 'iti', meaning: 'thus' },
    { term: 'vyāvahārikaḥ', meaning: 'the empirical (jīva)' },
  ],
  root: group('ddv-40-verse', 'verse', 'The apparent jīva takes that apparent world as real; another, the empirical jīva, thinks it false.', [
    group('ddv-40-p1', 'phrase', 'The apparent jīva (takes) that apparent world', [
    word('ddv-40-w1', 'the apparent jīva', [
      ['प्रा', 'prā'],
      ['ति', 'ti'],
      ['भा', 'bhā'],
      ['सि', 'si'],
      ['क', 'ka'],
      ['जी', 'jī'],
      ['वो', 'vo'],
    ]),
    word('ddv-40-w2', 'who', [
      ['य', 'ya'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-40-w3', 'that', [
      ['त', 'ta'],
      ['ज्', 'j'],
    ], { trailing: '' }),
    word('ddv-40-w4', 'world', [
      ['ज', 'ja'],
      ['ग', 'ga'],
      ['त्', 't'],
    ]),
    word('ddv-40-w5', 'is apparent', [
      ['प्रा', 'prā'],
      ['ति', 'ti'],
      ['भा', 'bhā'],
      ['सि', 'si'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-40-p2', 'phrase', 'as real; the other, the empirical, thinks it false.', [
    word('ddv-40-w6', 'as real', [
      ['वा', 'vā'],
      ['स्त', 'sta'],
      ['वं', 'vaṃ'],
    ]),
    word('ddv-40-w7', 'thinks', [
      ['म', 'ma'],
      ['न्य', 'nya'],
      ['तेऽ', 'te\''],
    ], { trailing: '' }),
    word('ddv-40-w8', 'another', [
      ['न्य', 'nya'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-40-w9', 'but', [
      ['तु', 'tu'],
    ]),
    word('ddv-40-w10', 'as false', [
      ['मि', 'mi'],
      ['थ्ये', 'thye'],
    ], { trailing: '' }),
    word('ddv-40-w11', 'thus', [
      ['ति', 'ti'],
    ]),
    word('ddv-40-w12', 'the empirical (jīva)', [
      ['व्या', 'vyā'],
      ['व', 'va'],
      ['हा', 'hā'],
      ['रि', 'ri'],
      ['कः', 'kaḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
