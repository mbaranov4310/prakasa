import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv43: Chapter = {
  id: 'ddv-43',
  titleDev: 'Verse 43',
  titleIast: 'Verse 43',
  titleEn: 'Verse 43',
  status: 'ready',
  translation: 'As sweetness, fluidity, and coldness — properties of water — inhere in the wave and then, resting there, inhere also in the foam,',
  glossary: [
    { term: 'mādhurya', meaning: 'sweetness' },
    { term: 'drava', meaning: 'fluidity' },
    { term: 'śaityāni', meaning: 'and coldness' },
    { term: 'nīra', meaning: 'of water' },
    { term: 'dharmāḥ', meaning: 'properties' },
    { term: 'taraṅgake', meaning: 'in the wave' },
    { term: 'anugamya', meaning: 'having inhered' },
    { term: 'atha', meaning: 'then' },
    { term: 'tat', meaning: 'that' },
    { term: 'niṣṭhe', meaning: 'in that which rests on' },
    { term: 'phene', meaning: 'in the foam' },
    { term: 'api', meaning: 'also' },
    { term: 'anugatā', meaning: 'inhere' },
    { term: 'yathā', meaning: 'as' },
  ],
  root: group('ddv-43-verse', 'verse', 'As sweetness, fluidity, and coldness — properties of water — inhere in the wave and then, resting there, inhere also in the foam,', [
    group('ddv-43-p1', 'phrase', 'Sweetness, fluidity, and coldness, properties of water, in the wave —', [
    word('ddv-43-w1', 'sweetness', [
      ['मा', 'mā'],
      ['धु', 'dhu'],
      ['र्य', 'rya'],
    ], { trailing: '' }),
    word('ddv-43-w2', 'fluidity', [
      ['द्र', 'dra'],
      ['व', 'va'],
    ], { trailing: '' }),
    word('ddv-43-w3', 'and coldness', [
      ['शै', 'śai'],
      ['त्या', 'tyā'],
      ['नि', 'ni'],
    ]),
    word('ddv-43-w4', 'of water', [
      ['नी', 'nī'],
      ['र', 'ra'],
    ], { trailing: '' }),
    word('ddv-43-w5', 'properties', [
      ['ध', 'dha'],
      ['र्मा', 'rmā'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-43-w6', 'in the wave', [
      ['त', 'ta'],
      ['र', 'ra'],
      ['ङ्ग', 'ṅga'],
      ['के', 'ke'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-43-p2', 'phrase', 'having inhered, inhere also in the foam that rests on it, as it were.', [
    word('ddv-43-w7', 'having inhered', [
      ['अ', 'a'],
      ['नु', 'nu'],
      ['ग', 'ga'],
      ['म्या', 'myā'],
    ], { trailing: '' }),
    word('ddv-43-w8', 'then', [
      ['थ', 'tha'],
    ]),
    word('ddv-43-w9', 'that', [
      ['त', 'ta'],
      ['न्', 'n'],
    ], { trailing: '' }),
    word('ddv-43-w10', 'in that which rests on', [
      ['नि', 'ni'],
      ['ष्ठे', 'ṣṭhe'],
    ]),
    word('ddv-43-w11', 'in the foam', [
      ['फे', 'phe'],
      ['नेऽ', 'ne\''],
    ], { trailing: '' }),
    word('ddv-43-w12', 'also', [
      ['प्य', 'pya'],
    ], { trailing: '' }),
    word('ddv-43-w13', 'inhere', [
      ['नु', 'nu'],
      ['ग', 'ga'],
      ['ता', 'tā'],
    ]),
    word('ddv-43-w14', 'as', [
      ['य', 'ya'],
      ['था', 'thā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
