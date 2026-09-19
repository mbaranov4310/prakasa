import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv43: Chapter = {
  id: 'ddv-43',
  titleDev: 'माधुर्यद्रवशैत्यानि नीरधर्मास्तरङ्गके',
  titleIast: 'mādhuryadravaśaityāni nīradharmāstaraṅgake',
  titleEn: 'Verse 43',
  status: 'ready',
  translation: 'As sweetness, fluidity, and coldness — properties of water — inhere in the wave and then, resting there, inhere also in the foam,',
  glossary: [
    { term: 'mādhuryadravaśaityāni', meaning: 'sweetness, fluidity, and coldness' },
    { term: 'nīradharmāḥ', meaning: 'properties of water' },
    { term: 'taraṅgake', meaning: 'in the wave' },
    { term: 'anugamya', meaning: 'having inhered' },
    { term: 'atha', meaning: 'then' },
    { term: 'tanniṣṭhe', meaning: 'in that which rests on it' },
    { term: 'phene', meaning: 'in the foam' },
    { term: 'api', meaning: 'also' },
    { term: 'anugatā', meaning: 'inhere' },
    { term: 'yathā', meaning: 'as' },
  ],
  root: group('ddv-43-verse', 'verse', 'As sweetness, fluidity, and coldness — properties of water — inhere in the wave and then, resting there, inhere also in the foam,', [
    group('ddv-43-p1', 'phrase', 'Sweetness, fluidity, and coldness, properties of water, in the wave —', [
    word('ddv-43-w1', 'sweetness, fluidity, and coldness', [
      ['मा', 'mā'],
      ['धु', 'dhu'],
      ['र्य', 'rya'],
      ['द्र', 'dra'],
      ['व', 'va'],
      ['शै', 'śai'],
      ['त्या', 'tyā'],
      ['नि', 'ni'],
    ]),
    word('ddv-43-w2', 'properties of water', [
      ['नी', 'nī'],
      ['र', 'ra'],
      ['ध', 'dha'],
      ['र्मा', 'rmā'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-43-w3', 'in the wave', [
      ['त', 'ta'],
      ['र', 'ra'],
      ['ङ्ग', 'ṅga'],
      ['के', 'ke'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-43-p2', 'phrase', 'having inhered, inhere also in the foam that rests on it, as it were.', [
    word('ddv-43-w4', 'having inhered', [
      ['अ', 'a'],
      ['नु', 'nu'],
      ['ग', 'ga'],
      ['म्या', 'myā'],
    ], { trailing: '' }),
    word('ddv-43-w5', 'then', [
      ['थ', 'tha'],
    ]),
    word('ddv-43-w6', 'in that which rests on it', [
      ['त', 'ta'],
      ['न्नि', 'nni'],
      ['ष्ठे', 'ṣṭhe'],
    ]),
    word('ddv-43-w7', 'in the foam', [
      ['फे', 'phe'],
      ['नेऽ', 'ne\''],
    ], { trailing: '' }),
    word('ddv-43-w8', 'also', [
      ['प्य', 'pya'],
    ], { trailing: '' }),
    word('ddv-43-w9', 'inhere', [
      ['नु', 'nu'],
      ['ग', 'ga'],
      ['ता', 'tā'],
    ]),
    word('ddv-43-w10', 'as', [
      ['य', 'ya'],
      ['था', 'thā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
