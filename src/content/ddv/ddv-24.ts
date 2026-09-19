import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv24: Chapter = {
  id: 'ddv-24',
  titleDev: 'Verse 24',
  titleIast: 'Verse 24',
  titleEn: 'Verse 24',
  status: 'ready',
  translation: 'Desire and the other mental objects are the seen; one should meditate as the Consciousness that is their Witness. This is savikalpa samādhi associated with the seen.',
  glossary: [
    { term: 'kāma', meaning: 'desires' },
    { term: 'ādyāḥ', meaning: 'and the rest' },
    { term: 'citta', meaning: 'in the mind' },
    { term: 'gāḥ', meaning: 'occurring' },
    { term: 'dṛśyāḥ', meaning: 'are the seen' },
    { term: 'tat', meaning: 'their' },
    { term: 'sākṣitvena', meaning: 'as Witness' },
    { term: 'cetanam', meaning: 'Consciousness' },
    { term: 'dhyāyet', meaning: 'one should meditate' },
    { term: 'dṛśya', meaning: 'the seen' },
    { term: 'anuviddhaḥ', meaning: 'associated with' },
    { term: 'ayaṃ', meaning: 'this' },
    { term: 'samādhiḥ', meaning: 'samādhi' },
    { term: 'savikalpakaḥ', meaning: 'with distinction' },
  ],
  root: group('ddv-24-verse', 'verse', 'Desire and the other mental objects are the seen; one should meditate as the Consciousness that is their Witness. This is savikalpa samādhi associated with the seen.', [
    group('ddv-24-p1', 'phrase', 'Desires etc. in the mind are the seen; Consciousness is their Witness.', [
    word('ddv-24-w1', 'desires', [
      ['का', 'kā'],
      ['मा', 'mā'],
    ], { trailing: '' }),
    word('ddv-24-w2', 'and the rest', [
      ['द्या', 'dyā'],
      ['श्', 'ś'],
    ], { trailing: '' }),
    word('ddv-24-w3', 'in the mind', [
      ['चि', 'ci'],
      ['त्त', 'tta'],
    ], { trailing: '' }),
    word('ddv-24-w4', 'occurring', [
      ['गा', 'gā'],
    ]),
    word('ddv-24-w5', 'are the seen', [
      ['दृ', 'dṛ'],
      ['श्या', 'śyā'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-24-w6', 'their', [
      ['त', 'ta'],
      ['त्', 't'],
    ], { trailing: '' }),
    word('ddv-24-w7', 'as Witness', [
      ['सा', 'sā'],
      ['क्षि', 'kṣi'],
      ['त्वे', 'tve'],
      ['न', 'na'],
    ]),
    word('ddv-24-w8', 'Consciousness', [
      ['चे', 'ce'],
      ['त', 'ta'],
      ['न', 'na'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-24-p2', 'phrase', 'Meditating thus is savikalpa samādhi associated with the seen.', [
    word('ddv-24-w9', 'one should meditate', [
      ['ध्या', 'dhyā'],
      ['ये', 'ye'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-24-w10', 'the seen', [
      ['दृ', 'dṛ'],
      ['श्या', 'śyā'],
    ], { trailing: '' }),
    word('ddv-24-w11', 'associated with', [
      ['नु', 'nu'],
      ['वि', 'vi'],
      ['द्धोऽ', 'ddho\''],
    ], { trailing: '' }),
    word('ddv-24-w12', 'this', [
      ['यं', 'yaṃ'],
    ]),
    word('ddv-24-w13', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धिः', 'dhiḥ'],
    ]),
    word('ddv-24-w14', 'with distinction', [
      ['स', 'sa'],
      ['वि', 'vi'],
      ['क', 'ka'],
      ['ल्प', 'lpa'],
      ['कः', 'kaḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
