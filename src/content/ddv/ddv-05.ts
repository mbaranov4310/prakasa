import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv05: Chapter = {
  id: 'ddv-05',
  titleDev: 'नोदेति नास्तमेत्येषा न वृद्धिं याति न क्षयम्',
  titleIast: 'nodeti nāstametyeṣā na vṛddhiṃ yāti na kṣayam',
  titleEn: 'Verse 5',
  status: 'ready',
  translation: 'This Consciousness neither rises nor sets; it does not increase or decay. Shining of itself, it illumines all else without any other aid.',
  glossary: [
    { term: 'na', meaning: 'not' },
    { term: 'udeti', meaning: 'rises' },
    { term: 'astam', meaning: 'setting' },
    { term: 'eti', meaning: 'goes' },
    { term: 'eṣā', meaning: 'this (Consciousness)' },
    { term: 'vṛddhim', meaning: 'increase' },
    { term: 'yāti', meaning: 'goes to / undergoes' },
    { term: 'kṣayam', meaning: 'decay' },
    { term: 'svayam', meaning: 'of itself' },
    { term: 'vibhāti', meaning: 'shines' },
    { term: 'atha', meaning: 'and / moreover' },
    { term: 'anyāni', meaning: 'other things' },
    { term: 'bhāsayet', meaning: 'illumines' },
    { term: 'sādhanam', meaning: 'means / aid' },
    { term: 'vinā', meaning: 'without' },
  ],
  root: group('ddv-05-verse', 'verse', 'This Consciousness neither rises nor sets; it does not increase or decay. Shining of itself, it illumines all else without any other aid.', [
    group('ddv-05-p1', 'phrase', 'This (Consciousness) does not rise or set, grow or decay.', [
    word('ddv-05-w1', 'not', [
      ['नो', 'no'],
    ], { trailing: '' }),
    word('ddv-05-w2', 'rises', [
      ['दे', 'de'],
      ['ति', 'ti'],
    ]),
    word('ddv-05-w3', 'not', [
      ['ना', 'nā'],
    ], { trailing: '' }),
    word('ddv-05-w4', 'setting', [
      ['स्त', 'sta'],
      ['मे', 'me'],
    ], { trailing: '' }),
    word('ddv-05-w5', 'goes', [
      ['त्ये', 'tye'],
    ], { trailing: '' }),
    word('ddv-05-w6', 'this (Consciousness)', [
      ['षा', 'ṣā'],
    ]),
    word('ddv-05-w7', 'not', [
      ['न', 'na'],
    ]),
    word('ddv-05-w8', 'increase', [
      ['वृ', 'vṛ'],
      ['द्धिं', 'ddhiṃ'],
    ]),
    word('ddv-05-w9', 'goes to / undergoes', [
      ['या', 'yā'],
      ['ति', 'ti'],
    ]),
    word('ddv-05-w10', 'not', [
      ['न', 'na'],
    ]),
    word('ddv-05-w11', 'decay', [
      ['क्ष', 'kṣa'],
      ['य', 'ya'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-05-p2', 'phrase', 'It shines of itself, and lights up everything else without any other means.', [
    word('ddv-05-w12', 'of itself', [
      ['स्व', 'sva'],
      ['यं', 'yaṃ'],
    ]),
    word('ddv-05-w13', 'shines', [
      ['वि', 'vi'],
      ['भा', 'bhā'],
      ['त्य', 'tya'],
    ], { trailing: '' }),
    word('ddv-05-w14', 'and / moreover', [
      ['था', 'thā'],
    ], { trailing: '' }),
    word('ddv-05-w15', 'other things', [
      ['न्या', 'nyā'],
      ['नि', 'ni'],
    ]),
    word('ddv-05-w16', 'illumines', [
      ['भा', 'bhā'],
      ['स', 'sa'],
      ['ये', 'ye'],
      ['त्', 't'],
    ], { trailing: '' }),
    word('ddv-05-w17', 'means / aid', [
      ['सा', 'sā'],
      ['ध', 'dha'],
      ['नं', 'naṃ'],
    ]),
    word('ddv-05-w18', 'without', [
      ['वि', 'vi'],
      ['ना', 'nā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
