import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv41: Chapter = {
  id: 'ddv-41',
  titleDev: 'Verse 41',
  titleIast: 'Verse 41',
  titleEn: 'Verse 41',
  status: 'ready',
  translation: 'The empirical jīva takes that empirical world as true; the absolute thinks it false.',
  glossary: [
    { term: 'vyāvahārika', meaning: 'empirical' },
    { term: 'jīvaḥ', meaning: 'the jīva' },
    { term: 'yaḥ', meaning: 'who' },
    { term: 'tat', meaning: 'that' },
    { term: 'jagat', meaning: 'world' },
    { term: 'vyāvahārikam', meaning: 'is empirical' },
    { term: 'satyaṃ', meaning: 'as true' },
    { term: 'pratyeti', meaning: 'cognizes' },
    { term: 'mithyā', meaning: 'as false' },
    { term: 'iti', meaning: 'thus' },
    { term: 'manyate', meaning: 'thinks' },
    { term: 'pāramārthikaḥ', meaning: 'the absolute (jīva)' },
  ],
  root: group('ddv-41-verse', 'verse', 'The empirical jīva takes that empirical world as true; the absolute thinks it false.', [
    group('ddv-41-p1', 'phrase', 'The empirical jīva (takes) that empirical world', [
    word('ddv-41-w1', 'empirical', [
      ['व्या', 'vyā'],
      ['व', 'va'],
      ['हा', 'hā'],
      ['रि', 'ri'],
      ['क', 'ka'],
    ], { trailing: '' }),
    word('ddv-41-w2', 'the jīva', [
      ['जी', 'jī'],
      ['वो', 'vo'],
    ]),
    word('ddv-41-w3', 'who', [
      ['य', 'ya'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-41-w4', 'that', [
      ['त', 'ta'],
      ['ज्', 'j'],
    ], { trailing: '' }),
    word('ddv-41-w5', 'world', [
      ['ज', 'ja'],
      ['ग', 'ga'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-41-w6', 'is empirical', [
      ['व्या', 'vyā'],
      ['व', 'va'],
      ['हा', 'hā'],
      ['रि', 'ri'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-41-p2', 'phrase', 'as true; the absolute thinks it false.', [
    word('ddv-41-w7', 'as true', [
      ['स', 'sa'],
      ['त्यं', 'tyaṃ'],
    ]),
    word('ddv-41-w8', 'cognizes', [
      ['प्र', 'pra'],
      ['त्ये', 'tye'],
      ['ति', 'ti'],
    ]),
    word('ddv-41-w9', 'as false', [
      ['मि', 'mi'],
      ['थ्ये', 'thye'],
    ], { trailing: '' }),
    word('ddv-41-w10', 'thus', [
      ['ति', 'ti'],
    ]),
    word('ddv-41-w11', 'thinks', [
      ['म', 'ma'],
      ['न्य', 'nya'],
      ['ते', 'te'],
    ]),
    word('ddv-41-w12', 'the absolute (jīva)', [
      ['पा', 'pā'],
      ['र', 'ra'],
      ['मा', 'mā'],
      ['र्थि', 'rthi'],
      ['कः', 'kaḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
