import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv24: Chapter = {
  id: 'ddv-24',
  titleDev: 'कामाद्याश्चित्तगा दृश्यास्तत्साक्षित्वेन चेतनम्',
  titleIast: 'kāmādyāścittagā dṛśyāstatsākṣitvena cetanam',
  titleEn: 'Verse 24',
  status: 'ready',
  translation: 'Desire and the other mental objects are the seen; one should meditate as the Consciousness that is their Witness. This is savikalpa samādhi associated with the seen.',
  glossary: [
    { term: 'kāmādyāḥ', meaning: 'desires and the rest' },
    { term: 'cittagāḥ', meaning: 'occurring in the mind' },
    { term: 'dṛśyāḥ', meaning: 'are the seen' },
    { term: 'tatsākṣitvena', meaning: 'as their Witness' },
    { term: 'cetanam', meaning: 'Consciousness' },
    { term: 'dhyāyet', meaning: 'one should meditate' },
    { term: 'dṛśyānuviddhaḥ', meaning: 'associated with the seen' },
    { term: 'ayaṃ', meaning: 'this' },
    { term: 'samādhiḥ', meaning: 'samādhi' },
    { term: 'savikalpakaḥ', meaning: 'with distinction' },
  ],
  root: group('ddv-24-verse', 'verse', 'Desire and the other mental objects are the seen; one should meditate as the Consciousness that is their Witness. This is savikalpa samādhi associated with the seen.', [
    group('ddv-24-p1', 'phrase', 'Desires etc. in the mind are the seen; Consciousness is their Witness.', [
    word('ddv-24-w1', 'desires and the rest', [
      ['का', 'kā'],
      ['मा', 'mā'],
      ['द्या', 'dyā'],
      ['श्', 'ś'],
    ], { trailing: '' }),
    word('ddv-24-w2', 'occurring in the mind', [
      ['चि', 'ci'],
      ['त्त', 'tta'],
      ['गा', 'gā'],
    ]),
    word('ddv-24-w3', 'are the seen', [
      ['दृ', 'dṛ'],
      ['श्या', 'śyā'],
      ['स्', 's'],
    ], { trailing: '' }),
    word('ddv-24-w4', 'as their Witness', [
      ['त', 'ta'],
      ['त्सा', 'tsā'],
      ['क्षि', 'kṣi'],
      ['त्वे', 'tve'],
      ['न', 'na'],
    ]),
    word('ddv-24-w5', 'Consciousness', [
      ['चे', 'ce'],
      ['त', 'ta'],
      ['न', 'na'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-24-p2', 'phrase', 'Meditating thus is savikalpa samādhi associated with the seen.', [
    word('ddv-24-w6', 'one should meditate', [
      ['ध्या', 'dhyā'],
      ['ये', 'ye'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-24-w7', 'associated with the seen', [
      ['दृ', 'dṛ'],
      ['श्या', 'śyā'],
      ['नु', 'nu'],
      ['वि', 'vi'],
      ['द्धोऽ', 'ddho\''],
    ], { trailing: '' }),
    word('ddv-24-w8', 'this', [
      ['यं', 'yaṃ'],
    ]),
    word('ddv-24-w9', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धिः', 'dhiḥ'],
    ]),
    word('ddv-24-w10', 'with distinction', [
      ['स', 'sa'],
      ['वि', 'vi'],
      ['क', 'ka'],
      ['ल्प', 'lpa'],
      ['कः', 'kaḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
