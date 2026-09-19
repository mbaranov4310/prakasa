import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv42: Chapter = {
  id: 'ddv-42',
  titleDev: 'Verse 42',
  titleIast: 'Verse 42',
  titleEn: 'Verse 42',
  status: 'ready',
  translation: 'The absolute jīva knows its identity with Brahman to be absolute. It does not see another; it sees (the other) as of the nature of untruth.',
  glossary: [
    { term: 'pāramārthika', meaning: 'absolute' },
    { term: 'jīvaḥ', meaning: 'the jīva' },
    { term: 'tu', meaning: 'but' },
    { term: 'brahma', meaning: 'Brahman' },
    { term: 'aikyam', meaning: 'identity with' },
    { term: 'pāramārthikam', meaning: 'as absolute' },
    { term: 'pratyeti', meaning: 'cognizes' },
    { term: 'vīkṣate', meaning: 'sees' },
    { term: 'na', meaning: 'does not' },
    { term: 'anyat', meaning: 'another' },
    { term: 'anṛta', meaning: 'untruth' },
    { term: 'ātmanā', meaning: 'as of the nature of' },
  ],
  root: group('ddv-42-verse', 'verse', 'The absolute jīva knows its identity with Brahman to be absolute. It does not see another; it sees (the other) as of the nature of untruth.', [
    group('ddv-42-p1', 'phrase', 'The absolute jīva (knows) identity with Brahman as absolute.', [
    word('ddv-42-w1', 'absolute', [
      ['पा', 'pā'],
      ['र', 'ra'],
      ['मा', 'mā'],
      ['र्थि', 'rthi'],
      ['क', 'ka'],
    ], { trailing: '' }),
    word('ddv-42-w2', 'the jīva', [
      ['जी', 'jī'],
      ['व', 'va'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-42-w3', 'but', [
      ['तु', 'tu'],
    ]),
    word('ddv-42-w4', 'Brahman', [
      ['ब्र', 'bra'],
      ['ह्मै', 'hmai'],
    ], { trailing: '' }),
    word('ddv-42-w5', 'identity with', [
      ['क्यं', 'kyaṃ'],
    ]),
    word('ddv-42-w6', 'as absolute', [
      ['पा', 'pā'],
      ['र', 'ra'],
      ['मा', 'mā'],
      ['र्थि', 'rthi'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-42-p2', 'phrase', 'It does not see another; it sees it as untrue.', [
    word('ddv-42-w7', 'cognizes', [
      ['प्र', 'pra'],
      ['त्ये', 'tye'],
      ['ति', 'ti'],
    ]),
    word('ddv-42-w8', 'sees', [
      ['वी', 'vī'],
      ['क्ष', 'kṣa'],
      ['ते', 'te'],
    ]),
    word('ddv-42-w9', 'does not', [
      ['ना', 'nā'],
    ], { trailing: '' }),
    word('ddv-42-w10', 'another', [
      ['न्य', 'nya'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-42-w11', 'it sees', [
      ['वी', 'vī'],
      ['क्ष', 'kṣa'],
      ['ते', 'te'],
    ]),
    word('ddv-42-w12', 'but', [
      ['त्व', 'tva'],
    ], { trailing: '' }),
    word('ddv-42-w13', 'untruth', [
      ['नृ', 'nṛ'],
      ['ता', 'tā'],
    ], { trailing: '' }),
    word('ddv-42-w14', 'as of the nature of', [
      ['त्म', 'tma'],
      ['ना', 'nā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
