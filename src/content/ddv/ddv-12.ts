import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv12: Chapter = {
  id: 'ddv-12',
  titleDev: 'Verse 12',
  titleIast: 'Verse 12',
  titleEn: 'Verse 12',
  status: 'ready',
  translation: 'The subtle body — one, insentient, having mind and ego as its material — follows the three states; so it is born and it dies.',
  glossary: [
    { term: 'manas', meaning: 'mind' },
    { term: 'ahaṅkṛtyupādānam', meaning: 'having ego as material' },
    { term: 'liṅgam', meaning: 'the subtle body' },
    { term: 'ekaṃ', meaning: 'one' },
    { term: 'jaḍa', meaning: 'insentient' },
    { term: 'ātmakam', meaning: 'of the nature of' },
    { term: 'avasthā', meaning: 'states' },
    { term: 'trayam', meaning: 'three' },
    { term: 'anveti', meaning: 'it follows' },
    { term: 'jāyate', meaning: 'is born' },
    { term: 'mriyate', meaning: 'dies' },
    { term: 'tathā', meaning: 'likewise' },
  ],
  root: group('ddv-12-verse', 'verse', 'The subtle body — one, insentient, having mind and ego as its material — follows the three states; so it is born and it dies.', [
    group('ddv-12-p1', 'phrase', 'Mind and ego are the material of the one insentient subtle body.', [
    word('ddv-12-w1', 'mind', [
      ['म', 'ma'],
      ['नोऽ', 'no\''],
    ], { trailing: '' }),
    word('ddv-12-w2', 'having ego as material', [
      ['ह', 'ha'],
      ['ङ्कृ', 'ṅkṛ'],
      ['त्यु', 'tyu'],
      ['पा', 'pā'],
      ['दा', 'dā'],
      ['नं', 'naṃ'],
    ]),
    word('ddv-12-w3', 'the subtle body', [
      ['लि', 'li'],
      ['ङ्ग', 'ṅga'],
      ['मे', 'me'],
    ], { trailing: '' }),
    word('ddv-12-w4', 'one', [
      ['कं', 'kaṃ'],
    ]),
    word('ddv-12-w5', 'insentient', [
      ['ज', 'ja'],
      ['डा', 'ḍā'],
    ], { trailing: '' }),
    word('ddv-12-w6', 'of the nature of', [
      ['त्म', 'tma'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-12-p2', 'phrase', 'It follows the three states; it is born and it dies.', [
    word('ddv-12-w7', 'states', [
      ['अ', 'a'],
      ['व', 'va'],
      ['स्था', 'sthā'],
    ], { trailing: '' }),
    word('ddv-12-w8', 'three', [
      ['त्र', 'tra'],
      ['य', 'ya'],
      ['म', 'ma'],
    ], { trailing: '' }),
    word('ddv-12-w9', 'it follows', [
      ['न्वे', 'nve'],
      ['ति', 'ti'],
    ]),
    word('ddv-12-w10', 'is born', [
      ['जा', 'jā'],
      ['य', 'ya'],
      ['ते', 'te'],
    ]),
    word('ddv-12-w11', 'dies', [
      ['म्रि', 'mri'],
      ['य', 'ya'],
      ['ते', 'te'],
    ]),
    word('ddv-12-w12', 'likewise', [
      ['त', 'ta'],
      ['था', 'thā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
