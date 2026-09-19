import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv38: Chapter = {
  id: 'ddv-38',
  titleDev: 'चिदाभासस्थिता निद्रा विक्षेपावृतिरूपिणी',
  titleIast: 'cidābhāsasthitā nidrā vikṣepāvṛtirūpiṇī',
  titleEn: 'Verse 38',
  status: 'ready',
  translation: 'Sleep, of the nature of projecting and veiling, rests in the reflection of Consciousness. Covering the previous jīva and world, it imagines new ones.',
  glossary: [
    { term: 'cit', meaning: 'Consciousness' },
    { term: 'ābhāsa', meaning: 'reflection' },
    { term: 'sthitā', meaning: 'seated in' },
    { term: 'nidrā', meaning: 'sleep' },
    { term: 'vikṣepa', meaning: 'projecting' },
    { term: 'āvṛti', meaning: 'veiling' },
    { term: 'rūpiṇī', meaning: 'of the nature of' },
    { term: 'āvṛtya', meaning: 'having covered' },
    { term: 'jīva', meaning: 'jīva' },
    { term: 'jagatī', meaning: 'and world' },
    { term: 'pūrve', meaning: 'the previous' },
    { term: 'nūtne', meaning: 'new ones' },
    { term: 'tu', meaning: 'but' },
    { term: 'kalpayet', meaning: 'it imagines' },
  ],
  root: group('ddv-38-verse', 'verse', 'Sleep, of the nature of projecting and veiling, rests in the reflection of Consciousness. Covering the previous jīva and world, it imagines new ones.', [
    group('ddv-38-p1', 'phrase', 'Sleep, projecting and veiling, is seated in the reflection.', [
    word('ddv-38-w1', 'Consciousness', [
      ['चि', 'ci'],
      ['दा', 'dā'],
    ], { trailing: '' }),
    word('ddv-38-w2', 'reflection', [
      ['भा', 'bhā'],
      ['स', 'sa'],
    ], { trailing: '' }),
    word('ddv-38-w3', 'seated in', [
      ['स्थि', 'sthi'],
      ['ता', 'tā'],
    ]),
    word('ddv-38-w4', 'sleep', [
      ['नि', 'ni'],
      ['द्रा', 'drā'],
    ]),
    word('ddv-38-w5', 'projecting', [
      ['वि', 'vi'],
      ['क्षे', 'kṣe'],
      ['पा', 'pā'],
    ], { trailing: '' }),
    word('ddv-38-w6', 'veiling', [
      ['वृ', 'vṛ'],
      ['ति', 'ti'],
    ], { trailing: '' }),
    word('ddv-38-w7', 'of the nature of', [
      ['रू', 'rū'],
      ['पि', 'pi'],
      ['णी', 'ṇī'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-38-p2', 'phrase', 'Covering the former jīva and world, it imagines new ones.', [
    word('ddv-38-w8', 'having covered', [
      ['आ', 'ā'],
      ['वृ', 'vṛ'],
      ['त्य', 'tya'],
    ]),
    word('ddv-38-w9', 'jīva', [
      ['जी', 'jī'],
      ['व', 'va'],
    ], { trailing: '' }),
    word('ddv-38-w10', 'and world', [
      ['ज', 'ja'],
      ['ग', 'ga'],
      ['ती', 'tī'],
    ]),
    word('ddv-38-w11', 'the previous', [
      ['पू', 'pū'],
      ['र्वे', 'rve'],
    ]),
    word('ddv-38-w12', 'new ones', [
      ['नू', 'nū'],
      ['त्ने', 'tne'],
    ]),
    word('ddv-38-w13', 'but', [
      ['तु', 'tu'],
    ]),
    word('ddv-38-w14', 'it imagines', [
      ['क', 'ka'],
      ['ल्प', 'lpa'],
      ['ये', 'ye'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
