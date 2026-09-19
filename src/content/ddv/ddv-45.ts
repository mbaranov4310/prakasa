import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv45: Chapter = {
  id: 'ddv-45',
  titleDev: 'Verse 45',
  titleIast: 'Verse 45',
  titleEn: 'Verse 45',
  status: 'ready',
  translation: 'When the foam disappears, those properties such as fluidity remain in the wave; when that too disappears in the water, they remain as before.',
  glossary: [
    { term: 'laye', meaning: 'on dissolution' },
    { term: 'phenasya', meaning: 'of the foam' },
    { term: 'tat', meaning: 'those' },
    { term: 'dharmāḥ', meaning: 'properties of it' },
    { term: 'drava', meaning: 'fluidity' },
    { term: 'ādyāḥ', meaning: 'and the rest' },
    { term: 'syuḥ', meaning: 'would be' },
    { term: 'taraṅgake', meaning: 'in the wave' },
    { term: 'tasya', meaning: 'of that' },
    { term: 'api', meaning: 'too' },
    { term: 'vilaye', meaning: 'on dissolution' },
    { term: 'nīre', meaning: 'in the water' },
    { term: 'tiṣṭhanti', meaning: 'these remain' },
    { term: 'ete', meaning: 'these' },
    { term: 'yathā', meaning: 'as' },
    { term: 'purā', meaning: 'before' },
  ],
  root: group('ddv-45-verse', 'verse', 'When the foam disappears, those properties such as fluidity remain in the wave; when that too disappears in the water, they remain as before.', [
    group('ddv-45-p1', 'phrase', 'On the dissolution of the foam, those properties such as fluidity are in the wave.', [
    word('ddv-45-w1', 'on dissolution', [
      ['ल', 'la'],
      ['ये', 'ye'],
    ]),
    word('ddv-45-w2', 'of the foam', [
      ['फे', 'phe'],
      ['न', 'na'],
      ['स्य', 'sya'],
    ]),
    word('ddv-45-w3', 'those', [
      ['त', 'ta'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-45-w4', 'properties of it', [
      ['ध', 'dha'],
      ['र्मा', 'rmā'],
    ]),
    word('ddv-45-w5', 'fluidity', [
      ['द्र', 'dra'],
      ['वा', 'vā'],
    ], { trailing: '' }),
    word('ddv-45-w6', 'and the rest', [
      ['द्याः', 'dyāḥ'],
    ]),
    word('ddv-45-w7', 'would be', [
      ['स्यु', 'syu'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-45-w8', 'in the wave', [
      ['त', 'ta'],
      ['र', 'ra'],
      ['ङ्ग', 'ṅga'],
      ['के', 'ke'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-45-p2', 'phrase', 'When that too dissolves in the water, they remain as before.', [
    word('ddv-45-w9', 'of that', [
      ['त', 'ta'],
      ['स्या', 'syā'],
    ], { trailing: '' }),
    word('ddv-45-w10', 'too', [
      ['पि', 'pi'],
    ]),
    word('ddv-45-w11', 'on dissolution', [
      ['वि', 'vi'],
      ['ल', 'la'],
      ['ये', 'ye'],
    ]),
    word('ddv-45-w12', 'in the water', [
      ['नी', 'nī'],
      ['रे', 're'],
    ]),
    word('ddv-45-w13', 'these remain', [
      ['ति', 'ti'],
      ['ष्ठ', 'ṣṭha'],
      ['न्त्ये', 'ntye'],
    ], { trailing: '' }),
    word('ddv-45-w14', 'these', [
      ['ते', 'te'],
    ]),
    word('ddv-45-w15', 'as', [
      ['य', 'ya'],
      ['था', 'thā'],
    ]),
    word('ddv-45-w16', 'before', [
      ['पु', 'pu'],
      ['रा', 'rā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
