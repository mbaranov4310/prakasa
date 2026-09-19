import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv35: Chapter = {
  id: 'ddv-35',
  titleDev: 'Verse 35',
  titleIast: 'Verse 35',
  titleEn: 'Verse 35',
  status: 'ready',
  translation: 'Māyā, of the nature of projecting and veiling, rests in Brahman. Covering its undivided nature, she imagines world and jīva there.',
  glossary: [
    { term: 'brahmaṇi', meaning: 'in Brahman' },
    { term: 'avasthitā', meaning: 'established' },
    { term: 'māyā', meaning: 'Māyā' },
    { term: 'vikṣepa', meaning: 'projecting' },
    { term: 'āvṛti', meaning: 'veiling' },
    { term: 'rūpiṇī', meaning: 'of the nature of' },
    { term: 'āvṛtya', meaning: 'having covered' },
    { term: 'akhaṇḍatāṃ', meaning: 'undividedness' },
    { term: 'tasmin', meaning: 'in that' },
    { term: 'jagat', meaning: 'world' },
    { term: 'jīvau', meaning: 'and jīva' },
    { term: 'prakalpayet', meaning: 'she imagines' },
  ],
  root: group('ddv-35-verse', 'verse', 'Māyā, of the nature of projecting and veiling, rests in Brahman. Covering its undivided nature, she imagines world and jīva there.', [
    group('ddv-35-p1', 'phrase', 'Māyā, projecting and veiling, is established in Brahman.', [
    word('ddv-35-w1', 'in Brahman', [
      ['ब्र', 'bra'],
      ['ह्म', 'hma'],
      ['ण्य', 'ṇya'],
    ], { trailing: '' }),
    word('ddv-35-w2', 'established', [
      ['व', 'va'],
      ['स्थि', 'sthi'],
      ['ता', 'tā'],
    ]),
    word('ddv-35-w3', 'Māyā', [
      ['मा', 'mā'],
      ['या', 'yā'],
    ]),
    word('ddv-35-w4', 'projecting', [
      ['वि', 'vi'],
      ['क्षे', 'kṣe'],
      ['पा', 'pā'],
    ], { trailing: '' }),
    word('ddv-35-w5', 'veiling', [
      ['वृ', 'vṛ'],
      ['ति', 'ti'],
    ], { trailing: '' }),
    word('ddv-35-w6', 'of the nature of', [
      ['रू', 'rū'],
      ['पि', 'pi'],
      ['णी', 'ṇī'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-35-p2', 'phrase', 'Covering undividedness, she imagines world and jīva in it.', [
    word('ddv-35-w7', 'having covered', [
      ['आ', 'ā'],
      ['वृ', 'vṛ'],
      ['त्या', 'tyā'],
    ], { trailing: '' }),
    word('ddv-35-w8', 'undividedness', [
      ['ख', 'kha'],
      ['ण्ड', 'ṇḍa'],
      ['तां', 'tāṃ'],
    ]),
    word('ddv-35-w9', 'in that', [
      ['त', 'ta'],
      ['स्मि', 'smi'],
      ['न्', 'n'],
    ]),
    word('ddv-35-w10', 'world', [
      ['ज', 'ja'],
      ['ग', 'ga'],
      ['ज्', 'j'],
    ], { trailing: '' }),
    word('ddv-35-w11', 'and jīva', [
      ['जी', 'jī'],
      ['वौ', 'vau'],
    ]),
    word('ddv-35-w12', 'she imagines', [
      ['प्र', 'pra'],
      ['क', 'ka'],
      ['ल्प', 'lpa'],
      ['ये', 'ye'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
