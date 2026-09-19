import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv11: Chapter = {
  id: 'ddv-11',
  titleDev: 'अन्तःकरणवृत्तिश्च चितिच्छायैक्यमागता',
  titleIast: 'antaḥkaraṇavṛttiśca citicchāyaikyamāgatā',
  titleEn: 'Verse 11',
  status: 'ready',
  translation: 'The modification of the inner organ, identified with the reflection of Consciousness, imagines impressions in dream, and in waking imagines outer objects through the senses.',
  glossary: [
    { term: 'antaḥkaraṇavṛttiḥ', meaning: 'a modification of the inner organ' },
    { term: 'ca', meaning: 'and' },
    { term: 'citicchāyaikyam', meaning: 'identity with the reflection of Consciousness' },
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
    word('ddv-11-w1', 'a modification of the inner organ', [
      ['अ', 'a'],
      ['न्तः', 'ntaḥ'],
      ['क', 'ka'],
      ['र', 'ra'],
      ['ण', 'ṇa'],
      ['वृ', 'vṛ'],
      ['त्ति', 'tti'],
      ['श्', 'ś'],
    ], { trailing: '' }),
    word('ddv-11-w2', 'and', [
      ['च', 'ca'],
    ]),
    word('ddv-11-w3', 'identity with the reflection of Consciousness', [
      ['चि', 'ci'],
      ['ति', 'ti'],
      ['च्छा', 'cchā'],
      ['यै', 'yai'],
      ['क्य', 'kya'],
      ['मा', 'mā'],
    ], { trailing: '' }),
    word('ddv-11-w4', 'having attained', [
      ['ग', 'ga'],
      ['ता', 'tā'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-11-p2', 'phrase', 'projects impressions in dream, and outer objects in waking through the senses.', [
    word('ddv-11-w5', 'impressions', [
      ['वा', 'vā'],
      ['स', 'sa'],
      ['नाः', 'nāḥ'],
    ]),
    word('ddv-11-w6', 'it imagines', [
      ['क', 'ka'],
      ['ल्प', 'lpa'],
      ['ये', 'ye'],
      ['त्', 't'],
    ]),
    word('ddv-11-w7', 'in dream', [
      ['स्व', 'sva'],
      ['प्ने', 'pne'],
    ]),
    word('ddv-11-w8', 'in waking', [
      ['बो', 'bo'],
      ['धेऽ', 'dhe\''],
    ], { trailing: '' }),
    word('ddv-11-w9', 'through the senses', [
      ['क्षै', 'kṣai'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-11-w10', 'objects', [
      ['वि', 'vi'],
      ['ष', 'ṣa'],
      ['या', 'yā'],
      ['न्', 'n'],
    ]),
    word('ddv-11-w11', 'outside', [
      ['ब', 'ba'],
      ['हिः', 'hiḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
