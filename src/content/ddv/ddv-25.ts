import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv25: Chapter = {
  id: 'ddv-25',
  titleDev: 'असङ्गः सच्चिदानन्दः स्वप्रभो द्वैतवर्जितः',
  titleIast: 'asaṅgaḥ saccidānandaḥ svaprabho dvaitavarjitaḥ',
  titleEn: 'Verse 25',
  status: 'ready',
  translation: '“I am the unattached Existence-Consciousness-Bliss, self-luminous, free from duality” — this, associated with words, is savikalpa samādhi.',
  glossary: [
    { term: 'asaṅgaḥ', meaning: 'unattached' },
    { term: 'saccidānandaḥ', meaning: 'Existence-Consciousness-Bliss' },
    { term: 'svaprabhaḥ', meaning: 'self-luminous' },
    { term: 'dvaitavarjitaḥ', meaning: 'free from duality' },
    { term: 'asmi', meaning: 'I am' },
    { term: 'iti', meaning: 'thus' },
    { term: 'śabdaviddhaḥ', meaning: 'associated with words' },
    { term: 'ayaṃ', meaning: 'this' },
    { term: 'samādhiḥ', meaning: 'samādhi' },
    { term: 'savikalpakaḥ', meaning: 'with distinction' },
  ],
  root: group('ddv-25-verse', 'verse', '“I am the unattached Existence-Consciousness-Bliss, self-luminous, free from duality” — this, associated with words, is savikalpa samādhi.', [
    group('ddv-25-p1', 'phrase', 'Unattached, Existence-Consciousness-Bliss, self-luminous, without duality —', [
    word('ddv-25-w1', 'unattached', [
      ['अ', 'a'],
      ['स', 'sa'],
      ['ङ्गः', 'ṅgaḥ'],
    ]),
    word('ddv-25-w2', 'Existence-Consciousness-Bliss', [
      ['स', 'sa'],
      ['च्चि', 'cci'],
      ['दा', 'dā'],
      ['न', 'na'],
      ['न्दः', 'ndaḥ'],
    ]),
    word('ddv-25-w3', 'self-luminous', [
      ['स्व', 'sva'],
      ['प्र', 'pra'],
      ['भो', 'bho'],
    ]),
    word('ddv-25-w4', 'free from duality', [
      ['द्वै', 'dvai'],
      ['त', 'ta'],
      ['व', 'va'],
      ['र्जि', 'rji'],
      ['तः', 'taḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-25-p2', 'phrase', '“I am (that),” associated with words, is savikalpa samādhi.', [
    word('ddv-25-w5', 'I am', [
      ['अ', 'a'],
      ['स्मी', 'smī'],
    ], { trailing: '' }),
    word('ddv-25-w6', 'thus', [
      ['ति', 'ti'],
    ]),
    word('ddv-25-w7', 'associated with words', [
      ['श', 'śa'],
      ['ब्द', 'bda'],
      ['वि', 'vi'],
      ['द्धोऽ', 'ddho\''],
    ], { trailing: '' }),
    word('ddv-25-w8', 'this', [
      ['यं', 'yaṃ'],
    ]),
    word('ddv-25-w9', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धिः', 'dhiḥ'],
    ]),
    word('ddv-25-w10', 'with distinction', [
      ['स', 'sa'],
      ['वि', 'vi'],
      ['क', 'ka'],
      ['ल्प', 'lpa'],
      ['कः', 'kaḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
