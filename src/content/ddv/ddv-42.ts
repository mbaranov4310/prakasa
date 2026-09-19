import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv42: Chapter = {
  id: 'ddv-42',
  titleDev: 'पारमार्थिकजीवस्तु ब्रह्मैक्यं पारमार्थिकम्',
  titleIast: 'pāramārthikajīvastu brahmaikyaṃ pāramārthikam',
  titleEn: 'Verse 42',
  status: 'ready',
  translation: 'The absolute jīva knows its identity with Brahman to be absolute. It does not see another; it sees (the other) as of the nature of untruth.',
  glossary: [
    { term: 'pāramārthikajīvaḥ', meaning: 'the absolute jīva' },
    { term: 'tu', meaning: 'but' },
    { term: 'brahmaikyaṃ', meaning: 'identity with Brahman' },
    { term: 'pāramārthikam', meaning: 'as absolute' },
    { term: 'pratyeti', meaning: 'cognizes' },
    { term: 'vīkṣate', meaning: 'sees' },
    { term: 'na', meaning: 'does not' },
    { term: 'anyat', meaning: 'another' },
    { term: 'anṛtātmanā', meaning: 'as of the nature of untruth' },
  ],
  root: group('ddv-42-verse', 'verse', 'The absolute jīva knows its identity with Brahman to be absolute. It does not see another; it sees (the other) as of the nature of untruth.', [
    group('ddv-42-p1', 'phrase', 'The absolute jīva (knows) identity with Brahman as absolute.', [
    word('ddv-42-w1', 'the absolute jīva', [
      ['पा', 'pā'],
      ['र', 'ra'],
      ['मा', 'mā'],
      ['र्थि', 'rthi'],
      ['क', 'ka'],
      ['जी', 'jī'],
      ['व', 'va'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-42-w2', 'but', [
      ['तु', 'tu'],
    ]),
    word('ddv-42-w3', 'identity with Brahman', [
      ['ब्र', 'bra'],
      ['ह्मै', 'hmai'],
      ['क्यं', 'kyaṃ'],
    ]),
    word('ddv-42-w4', 'as absolute', [
      ['पा', 'pā'],
      ['र', 'ra'],
      ['मा', 'mā'],
      ['र्थि', 'rthi'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-42-p2', 'phrase', 'It does not see another; it sees it as untrue.', [
    word('ddv-42-w5', 'cognizes', [
      ['प्र', 'pra'],
      ['त्ये', 'tye'],
      ['ति', 'ti'],
    ]),
    word('ddv-42-w6', 'sees', [
      ['वी', 'vī'],
      ['क्ष', 'kṣa'],
      ['ते', 'te'],
    ]),
    word('ddv-42-w7', 'does not', [
      ['ना', 'nā'],
    ], { trailing: '' }),
    word('ddv-42-w8', 'another', [
      ['न्य', 'nya'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-42-w9', 'it sees', [
      ['वी', 'vī'],
      ['क्ष', 'kṣa'],
      ['ते', 'te'],
    ]),
    word('ddv-42-w10', 'but', [
      ['त्व', 'tva'],
    ], { trailing: '' }),
    word('ddv-42-w11', 'as of the nature of untruth', [
      ['नृ', 'nṛ'],
      ['ता', 'tā'],
      ['त्म', 'tma'],
      ['ना', 'nā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
