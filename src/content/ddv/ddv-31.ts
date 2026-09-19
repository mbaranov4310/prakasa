import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv31: Chapter = {
  id: 'ddv-31',
  titleDev: 'भिद्यते हृदयग्रन्थिश्छिद्यन्ते सर्वसंशयाः',
  titleIast: 'bhidyate hṛdayagranthiśchidyante sarvasaṃśayāḥ',
  titleEn: 'Verse 31',
  status: 'ready',
  translation: 'When that high-and-low is seen, the knot of the heart is cut, all doubts are cut away, and his karmas wear out.',
  glossary: [
    { term: 'bhidyate', meaning: 'is split' },
    { term: 'hṛdayagranthiḥ', meaning: 'the knot of the heart' },
    { term: 'chidyante', meaning: 'are cut' },
    { term: 'sarvasaṃśayāḥ', meaning: 'all doubts' },
    { term: 'kṣīyante', meaning: 'wear away' },
    { term: 'ca', meaning: 'and' },
    { term: 'asya', meaning: 'his' },
    { term: 'karmāṇi', meaning: 'karmas' },
    { term: 'tasmin', meaning: 'in that' },
    { term: 'dṛṣṭe', meaning: 'when seen' },
    { term: 'parāvare', meaning: 'which is high and low' },
  ],
  root: group('ddv-31-verse', 'verse', 'When that high-and-low is seen, the knot of the heart is cut, all doubts are cut away, and his karmas wear out.', [
    group('ddv-31-p1', 'phrase', 'The knot of the heart is split; all doubts are cut.', [
    word('ddv-31-w1', 'is split', [
      ['भि', 'bhi'],
      ['द्य', 'dya'],
      ['ते', 'te'],
    ]),
    word('ddv-31-w2', 'the knot of the heart', [
      ['हृ', 'hṛ'],
      ['द', 'da'],
      ['य', 'ya'],
      ['ग्र', 'gra'],
      ['न्थि', 'nthi'],
      ['श्', 'ś'],
    ], { trailing: '' }),
    word('ddv-31-w3', 'are cut', [
      ['छि', 'chi'],
      ['द्य', 'dya'],
      ['न्ते', 'nte'],
    ]),
    word('ddv-31-w4', 'all doubts', [
      ['स', 'sa'],
      ['र्व', 'rva'],
      ['सं', 'saṃ'],
      ['श', 'śa'],
      ['याः', 'yāḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-31-p2', 'phrase', 'His karmas wear away when that which is high and low is seen.', [
    word('ddv-31-w5', 'wear away', [
      ['क्षी', 'kṣī'],
      ['य', 'ya'],
      ['न्ते', 'nte'],
    ]),
    word('ddv-31-w6', 'and', [
      ['चा', 'cā'],
    ], { trailing: '' }),
    word('ddv-31-w7', 'his', [
      ['स्य', 'sya'],
    ]),
    word('ddv-31-w8', 'karmas', [
      ['क', 'ka'],
      ['र्मा', 'rmā'],
      ['णि', 'ṇi'],
    ]),
    word('ddv-31-w9', 'in that', [
      ['त', 'ta'],
      ['स्मि', 'smi'],
      ['न्', 'n'],
    ]),
    word('ddv-31-w10', 'when seen', [
      ['दृ', 'dṛ'],
      ['ष्टे', 'ṣṭe'],
    ]),
    word('ddv-31-w11', 'which is high and low', [
      ['प', 'pa'],
      ['रा', 'rā'],
      ['व', 'va'],
      ['रे', 're'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
