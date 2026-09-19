import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv32: Chapter = {
  id: 'ddv-32',
  titleDev: 'अवच्छिन्नश्चिदाभासस्तृतीयः स्वप्नकल्पितः',
  titleIast: 'avacchinnaścidābhāsastṛtīyaḥ svapnakalpitaḥ',
  titleEn: 'Verse 32',
  status: 'ready',
  translation: 'The limited (jīva), the reflection of Consciousness, and a third imagined in dream: the jīva is to be known as threefold. The first of them is the absolute.',
  glossary: [
    { term: 'avacchinnaḥ', meaning: 'the limited one' },
    { term: 'cidābhāsaḥ', meaning: 'the reflection of Consciousness' },
    { term: 'tṛtīyaḥ', meaning: 'a third' },
    { term: 'svapnakalpitaḥ', meaning: 'imagined in dream' },
    { term: 'vijñeyaḥ', meaning: 'is to be known' },
    { term: 'trividhaḥ', meaning: 'threefold' },
    { term: 'jīvaḥ', meaning: 'the jīva' },
    { term: 'tatra', meaning: 'of them' },
    { term: 'ādyaḥ', meaning: 'the first' },
    { term: 'pāramārthikaḥ', meaning: 'is the absolute' },
  ],
  root: group('ddv-32-verse', 'verse', 'The limited (jīva), the reflection of Consciousness, and a third imagined in dream: the jīva is to be known as threefold. The first of them is the absolute.', [
    group('ddv-32-p1', 'phrase', 'The limited one, the reflection, and a third imagined in dream —', [
    word('ddv-32-w1', 'the limited one', [
      ['अ', 'a'],
      ['व', 'va'],
      ['च्छि', 'cchi'],
      ['न्न', 'nna'],
      ['श्', 'ś'],
    ], { trailing: '' }),
    word('ddv-32-w2', 'the reflection of Consciousness', [
      ['चि', 'ci'],
      ['दा', 'dā'],
      ['भा', 'bhā'],
      ['स', 'sa'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-32-w3', 'a third', [
      ['तृ', 'tṛ'],
      ['ती', 'tī'],
      ['यः', 'yaḥ'],
    ]),
    word('ddv-32-w4', 'imagined in dream', [
      ['स्व', 'sva'],
      ['प्न', 'pna'],
      ['क', 'ka'],
      ['ल्पि', 'lpi'],
      ['तः', 'taḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-32-p2', 'phrase', 'the jīva is threefold; the first is the absolute.', [
    word('ddv-32-w5', 'is to be known', [
      ['वि', 'vi'],
      ['ज्ञे', 'jñe'],
      ['य', 'ya'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-32-w6', 'threefold', [
      ['त्रि', 'tri'],
      ['वि', 'vi'],
      ['धो', 'dho'],
    ]),
    word('ddv-32-w7', 'the jīva', [
      ['जी', 'jī'],
      ['व', 'va'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-32-w8', 'of them', [
      ['त', 'ta'],
      ['त्रा', 'trā'],
    ], { trailing: '' }),
    word('ddv-32-w9', 'the first', [
      ['द्यः', 'dyaḥ'],
    ]),
    word('ddv-32-w10', 'is the absolute', [
      ['पा', 'pā'],
      ['र', 'ra'],
      ['मा', 'mā'],
      ['र्थि', 'rthi'],
      ['कः', 'kaḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
