import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv11: Chapter = {
  id: 'ddv-11',
  titleDev: 'Verse 11',
  titleIast: 'Verse 11',
  titleEn: 'Verse 11',
  status: 'ready',
  translation: 'The modification of the inner organ, identified with the reflection of Consciousness, imagines impressions in dream, and in waking imagines outer objects through the senses.',
  glossary: [
    { term: 'antaḥkaraṇa', meaning: 'inner organ' },
    { term: 'vṛttiḥ', meaning: 'a modification' },
    { term: 'ca', meaning: 'and' },
    { term: 'citi', meaning: 'Consciousness' },
    { term: 'chāyā', meaning: 'reflection' },
    { term: 'aikyam', meaning: 'identity' },
    { term: 'āgatā', meaning: 'having attained' },
    { term: 'vāsanāḥ', meaning: 'impressions' },
    { term: 'kalpayet', meaning: 'it imagines' },
    { term: 'svapne', meaning: 'in dream' },
    { term: 'bodhe', meaning: 'in waking' },
    { term: 'akṣaiḥ', meaning: 'through the senses' },
    { term: 'viṣayān', meaning: 'objects' },
    { term: 'bahiḥ', meaning: 'outside' },
  ],
  root: group('ddv-11-verse', 'verse', 'The modification of the inner organ, identified with the reflection of Consciousness, imagines impressions in dream, and in waking imagines outer objects through the senses.', [
    group('ddv-11-p1', 'phrase', 'A thought of the inner organ, one with the reflection of Consciousness,', [
    word('ddv-11-w1', 'inner organ', [
      ['अ', 'a'],
      ['न्तः', 'ntaḥ'],
      ['क', 'ka'],
      ['र', 'ra'],
      ['ण', 'ṇa'],
    ], { trailing: '' }),
    word('ddv-11-w2', 'a modification', [
      ['वृ', 'vṛ'],
      ['त्ति', 'tti'],
      ['श्', 'ś'],
    ], { trailing: '' }),
    word('ddv-11-w3', 'and', [
      ['च', 'ca'],
    ]),
    word('ddv-11-w4', 'Consciousness', [
      ['चि', 'ci'],
      ['ति', 'ti'],
    ], { trailing: '' }),
    word('ddv-11-w5', 'reflection', [
      ['च्छा', 'cchā'],
      ['यै', 'yai'],
    ], { trailing: '' }),
    word('ddv-11-w6', 'identity', [
      ['क्य', 'kya'],
      ['मा', 'mā'],
    ], { trailing: '' }),
    word('ddv-11-w7', 'having attained', [
      ['ग', 'ga'],
      ['ता', 'tā'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-11-p2', 'phrase', 'projects impressions in dream, and outer objects in waking through the senses.', [
    word('ddv-11-w8', 'impressions', [
      ['वा', 'vā'],
      ['स', 'sa'],
      ['नाः', 'nāḥ'],
    ]),
    word('ddv-11-w9', 'it imagines', [
      ['क', 'ka'],
      ['ल्प', 'lpa'],
      ['ये', 'ye'],
      ['त्', 't'],
    ]),
    word('ddv-11-w10', 'in dream', [
      ['स्व', 'sva'],
      ['प्ने', 'pne'],
    ]),
    word('ddv-11-w11', 'in waking', [
      ['बो', 'bo'],
      ['धेऽ', 'dhe\''],
    ], { trailing: '' }),
    word('ddv-11-w12', 'through the senses', [
      ['क्षै', 'kṣai'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-11-w13', 'objects', [
      ['वि', 'vi'],
      ['ष', 'ṣa'],
      ['या', 'yā'],
      ['न्', 'n'],
    ]),
    word('ddv-11-w14', 'outside', [
      ['ब', 'ba'],
      ['हिः', 'hiḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
