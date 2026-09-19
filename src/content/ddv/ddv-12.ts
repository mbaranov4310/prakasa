import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv12: Chapter = {
  id: 'ddv-12',
  titleDev: 'मनोऽहङ्कृत्युपादानं लिङ्गमेकं जडात्मकम्',
  titleIast: 'mano\'haṅkṛtyupādānaṃ liṅgamekaṃ jaḍātmakam',
  titleEn: 'Verse 12',
  status: 'ready',
  translation: 'The subtle body — one, insentient, having mind and ego as its material — follows the three states; so it is born and it dies.',
  glossary: [
    { term: 'mano\'haṅkṛtyupādānaṃ', meaning: 'having mind and ego as material' },
    { term: 'liṅgam', meaning: 'the subtle body' },
    { term: 'ekaṃ', meaning: 'one' },
    { term: 'jaḍātmakam', meaning: 'of insentient nature' },
    { term: 'avasthātrayam', meaning: 'the three states' },
    { term: 'anveti', meaning: 'it follows' },
    { term: 'jāyate', meaning: 'is born' },
    { term: 'mriyate', meaning: 'dies' },
    { term: 'tathā', meaning: 'likewise' },
  ],
  root: group('ddv-12-verse', 'verse', 'The subtle body — one, insentient, having mind and ego as its material — follows the three states; so it is born and it dies.', [
    group('ddv-12-p1', 'phrase', 'Mind and ego are the material of the one insentient subtle body.', [
    word('ddv-12-w1', 'having mind and ego as material', [
      ['म', 'ma'],
      ['नोऽ', 'no\''],
      ['ह', 'ha'],
      ['ङ्कृ', 'ṅkṛ'],
      ['त्यु', 'tyu'],
      ['पा', 'pā'],
      ['दा', 'dā'],
      ['नं', 'naṃ'],
    ]),
    word('ddv-12-w2', 'the subtle body', [
      ['लि', 'li'],
      ['ङ्ग', 'ṅga'],
      ['मे', 'me'],
    ], { trailing: '' }),
    word('ddv-12-w3', 'one', [
      ['कं', 'kaṃ'],
    ]),
    word('ddv-12-w4', 'of insentient nature', [
      ['ज', 'ja'],
      ['डा', 'ḍā'],
      ['त्म', 'tma'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-12-p2', 'phrase', 'It follows the three states; it is born and it dies.', [
    word('ddv-12-w5', 'the three states', [
      ['अ', 'a'],
      ['व', 'va'],
      ['स्था', 'sthā'],
      ['त्र', 'tra'],
      ['य', 'ya'],
      ['म', 'ma'],
    ], { trailing: '' }),
    word('ddv-12-w6', 'it follows', [
      ['न्वे', 'nve'],
      ['ति', 'ti'],
    ]),
    word('ddv-12-w7', 'is born', [
      ['जा', 'jā'],
      ['य', 'ya'],
      ['ते', 'te'],
    ]),
    word('ddv-12-w8', 'dies', [
      ['म्रि', 'mri'],
      ['य', 'ya'],
      ['ते', 'te'],
    ]),
    word('ddv-12-w9', 'likewise', [
      ['त', 'ta'],
      ['था', 'thā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
