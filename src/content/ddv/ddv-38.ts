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
    { term: 'cidābhāsasthitā', meaning: 'seated in the reflection of Consciousness' },
    { term: 'nidrā', meaning: 'sleep' },
    { term: 'vikṣepāvṛtirūpiṇī', meaning: 'of the nature of projecting and veiling' },
    { term: 'āvṛtya', meaning: 'having covered' },
    { term: 'jīvajagatī', meaning: 'jīva and world' },
    { term: 'pūrve', meaning: 'the previous' },
    { term: 'nūtne', meaning: 'new ones' },
    { term: 'tu', meaning: 'but' },
    { term: 'kalpayet', meaning: 'it imagines' },
  ],
  root: group('ddv-38-verse', 'verse', 'Sleep, of the nature of projecting and veiling, rests in the reflection of Consciousness. Covering the previous jīva and world, it imagines new ones.', [
    group('ddv-38-p1', 'phrase', 'Sleep, projecting and veiling, is seated in the reflection.', [
    word('ddv-38-w1', 'seated in the reflection of Consciousness', [
      ['चि', 'ci'],
      ['दा', 'dā'],
      ['भा', 'bhā'],
      ['स', 'sa'],
      ['स्थि', 'sthi'],
      ['ता', 'tā'],
    ]),
    word('ddv-38-w2', 'sleep', [
      ['नि', 'ni'],
      ['द्रा', 'drā'],
    ]),
    word('ddv-38-w3', 'of the nature of projecting and veiling', [
      ['वि', 'vi'],
      ['क्षे', 'kṣe'],
      ['पा', 'pā'],
      ['वृ', 'vṛ'],
      ['ति', 'ti'],
      ['रू', 'rū'],
      ['पि', 'pi'],
      ['णी', 'ṇī'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-38-p2', 'phrase', 'Covering the former jīva and world, it imagines new ones.', [
    word('ddv-38-w4', 'having covered', [
      ['आ', 'ā'],
      ['वृ', 'vṛ'],
      ['त्य', 'tya'],
    ]),
    word('ddv-38-w5', 'jīva and world', [
      ['जी', 'jī'],
      ['व', 'va'],
      ['ज', 'ja'],
      ['ग', 'ga'],
      ['ती', 'tī'],
    ]),
    word('ddv-38-w6', 'the previous', [
      ['पू', 'pū'],
      ['र्वे', 'rve'],
    ]),
    word('ddv-38-w7', 'new ones', [
      ['नू', 'nū'],
      ['त्ने', 'tne'],
    ]),
    word('ddv-38-w8', 'but', [
      ['तु', 'tu'],
    ]),
    word('ddv-38-w9', 'it imagines', [
      ['क', 'ka'],
      ['ल्प', 'lpa'],
      ['ये', 'ye'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
