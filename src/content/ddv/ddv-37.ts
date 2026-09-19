import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv37: Chapter = {
  id: 'ddv-37',
  titleDev: 'अनादिकालमारभ्य मोक्षात् पूर्वमिदं द्वयम्',
  titleIast: 'anādikālamārabhya mokṣāt pūrvamidaṃ dvayam',
  titleEn: 'Verse 37',
  status: 'ready',
  translation: 'From beginningless time until liberation these two stand in empirical dealing; therefore both are empirical.',
  glossary: [
    { term: 'anādikālam', meaning: 'beginningless time' },
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
    word('ddv-37-w1', 'beginningless time', [
      ['अ', 'a'],
      ['ना', 'nā'],
      ['दि', 'di'],
      ['का', 'kā'],
      ['ल', 'la'],
      ['मा', 'mā'],
    ], { trailing: '' }),
    word('ddv-37-w2', 'beginning from', [
      ['र', 'ra'],
      ['भ्य', 'bhya'],
    ]),
    word('ddv-37-w3', 'from liberation', [
      ['मो', 'mo'],
      ['क्षा', 'kṣā'],
      ['त्', 't'],
    ]),
    word('ddv-37-w4', 'before it', [
      ['पू', 'pū'],
      ['र्व', 'rva'],
      ['मि', 'mi'],
    ], { trailing: '' }),
    word('ddv-37-w5', 'this', [
      ['दं', 'daṃ'],
    ]),
    word('ddv-37-w6', 'pair', [
      ['द्व', 'dva'],
      ['य', 'ya'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-37-p2', 'phrase', 'stands in vyavahāra; therefore both are empirical.', [
    word('ddv-37-w7', 'in empirical dealing', [
      ['व्य', 'vya'],
      ['व', 'va'],
      ['हा', 'hā'],
      ['रे', 're'],
    ]),
    word('ddv-37-w8', 'stands', [
      ['स्थि', 'sthi'],
      ['तं', 'taṃ'],
    ]),
    word('ddv-37-w9', 'therefore', [
      ['त', 'ta'],
      ['स्मा', 'smā'],
      ['दु', 'du'],
    ], { trailing: '' }),
    word('ddv-37-w10', 'both', [
      ['भ', 'bha'],
      ['यं', 'yaṃ'],
    ]),
    word('ddv-37-w11', 'are empirical', [
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
