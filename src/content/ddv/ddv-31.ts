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
    { term: 'hṛdaya', meaning: 'of the heart' },
    { term: 'granthiḥ', meaning: 'the knot' },
    { term: 'chidyante', meaning: 'are cut' },
    { term: 'sarva', meaning: 'all' },
    { term: 'saṃśayāḥ', meaning: 'doubts' },
    { term: 'kṣīyante', meaning: 'wear away' },
    { term: 'ca', meaning: 'and' },
    { term: 'asya', meaning: 'his' },
    { term: 'karmāṇi', meaning: 'karmas' },
    { term: 'tasmin', meaning: 'in that' },
    { term: 'dṛṣṭe', meaning: 'when seen' },
    { term: 'para', meaning: 'high' },
    { term: 'avare', meaning: 'and low' },
  ],
  root: group('ddv-31-verse', 'verse', 'When that high-and-low is seen, the knot of the heart is cut, all doubts are cut away, and his karmas wear out.', [
    group('ddv-31-p1', 'phrase', 'The knot of the heart is split; all doubts are cut.', [
    word('ddv-31-w1', 'is split', [
      ['भि', 'bhi'],
      ['द्य', 'dya'],
      ['ते', 'te'],
    ]),
    word('ddv-31-w2', 'of the heart', [
      ['हृ', 'hṛ'],
      ['द', 'da'],
      ['य', 'ya'],
    ], { trailing: '' }),
    word('ddv-31-w3', 'the knot', [
      ['ग्र', 'gra'],
      ['न्थि', 'nthi'],
      ['श्', 'ś'],
    ], { trailing: '' }),
    word('ddv-31-w4', 'are cut', [
      ['छि', 'chi'],
      ['द्य', 'dya'],
      ['न्ते', 'nte'],
    ]),
    word('ddv-31-w5', 'all', [
      ['स', 'sa'],
      ['र्व', 'rva'],
    ], { trailing: '' }),
    word('ddv-31-w6', 'doubts', [
      ['सं', 'saṃ'],
      ['श', 'śa'],
      ['याः', 'yāḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-31-p2', 'phrase', 'His karmas wear away when that which is high and low is seen.', [
    word('ddv-31-w7', 'wear away', [
      ['क्षी', 'kṣī'],
      ['य', 'ya'],
      ['न्ते', 'nte'],
    ]),
    word('ddv-31-w8', 'and', [
      ['चा', 'cā'],
    ], { trailing: '' }),
    word('ddv-31-w9', 'his', [
      ['स्य', 'sya'],
    ]),
    word('ddv-31-w10', 'karmas', [
      ['क', 'ka'],
      ['र्मा', 'rmā'],
      ['णि', 'ṇi'],
    ]),
    word('ddv-31-w11', 'in that', [
      ['त', 'ta'],
      ['स्मि', 'smi'],
      ['न्', 'n'],
    ]),
    word('ddv-31-w12', 'when seen', [
      ['दृ', 'dṛ'],
      ['ष्टे', 'ṣṭe'],
    ]),
    word('ddv-31-w13', 'high', [
      ['प', 'pa'],
      ['रा', 'rā'],
    ], { trailing: '' }),
    word('ddv-31-w14', 'and low', [
      ['व', 'va'],
      ['रे', 're'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
