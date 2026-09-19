import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv37: Chapter = {
  id: 'ddv-37',
  titleDev: 'Verse 37',
  titleIast: 'Verse 37',
  titleEn: 'Verse 37',
  status: 'ready',
  translation: 'From beginningless time until liberation these two stand in empirical dealing; therefore both are empirical.',
  glossary: [
    { term: 'anādi', meaning: 'beginningless' },
    { term: 'kālam', meaning: 'time' },
    { term: 'ārabhya', meaning: 'beginning from' },
    { term: 'mokṣāt', meaning: 'from liberation' },
    { term: 'pūrvam', meaning: 'before it' },
    { term: 'idaṃ', meaning: 'this' },
    { term: 'dvayam', meaning: 'pair' },
    { term: 'vyavahāre', meaning: 'in empirical dealing' },
    { term: 'sthitaṃ', meaning: 'stands' },
    { term: 'tasmāt', meaning: 'therefore' },
    { term: 'ubhayaṃ', meaning: 'both' },
    { term: 'vyāvahārikam', meaning: 'are empirical' },
  ],
  root: group('ddv-37-verse', 'verse', 'From beginningless time until liberation these two stand in empirical dealing; therefore both are empirical.', [
    group('ddv-37-p1', 'phrase', 'From beginningless time until liberation, this pair —', [
    word('ddv-37-w1', 'beginningless', [
      ['अ', 'a'],
      ['ना', 'nā'],
      ['दि', 'di'],
    ], { trailing: '' }),
    word('ddv-37-w2', 'time', [
      ['का', 'kā'],
      ['ल', 'la'],
      ['मा', 'mā'],
    ], { trailing: '' }),
    word('ddv-37-w3', 'beginning from', [
      ['र', 'ra'],
      ['भ्य', 'bhya'],
    ]),
    word('ddv-37-w4', 'from liberation', [
      ['मो', 'mo'],
      ['क्षा', 'kṣā'],
      ['त्', 't'],
    ]),
    word('ddv-37-w5', 'before it', [
      ['पू', 'pū'],
      ['र्व', 'rva'],
      ['मि', 'mi'],
    ], { trailing: '' }),
    word('ddv-37-w6', 'this', [
      ['दं', 'daṃ'],
    ]),
    word('ddv-37-w7', 'pair', [
      ['द्व', 'dva'],
      ['य', 'ya'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-37-p2', 'phrase', 'stands in vyavahāra; therefore both are empirical.', [
    word('ddv-37-w8', 'in empirical dealing', [
      ['व्य', 'vya'],
      ['व', 'va'],
      ['हा', 'hā'],
      ['रे', 're'],
    ]),
    word('ddv-37-w9', 'stands', [
      ['स्थि', 'sthi'],
      ['तं', 'taṃ'],
    ]),
    word('ddv-37-w10', 'therefore', [
      ['त', 'ta'],
      ['स्मा', 'smā'],
      ['दु', 'du'],
    ], { trailing: '' }),
    word('ddv-37-w11', 'both', [
      ['भ', 'bha'],
      ['यं', 'yaṃ'],
    ]),
    word('ddv-37-w12', 'are empirical', [
      ['व्या', 'vyā'],
      ['व', 'va'],
      ['हा', 'hā'],
      ['रि', 'ri'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
