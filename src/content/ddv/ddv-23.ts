import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv23: Chapter = {
  id: 'ddv-23',
  titleDev: 'सविकल्पो निर्विकल्पः समाधिर्द्विविधो हृदि',
  titleIast: 'savikalpo nirvikalpaḥ samādhirdvividho hṛdi',
  titleEn: 'Verse 23',
  status: 'ready',
  translation: 'Samādhi in the heart is of two kinds, with distinction and without. That with distinction is again twofold, associated with the seen and with words.',
  glossary: [
    { term: 'savikalpaḥ', meaning: 'with distinction' },
    { term: 'nirvikalpaḥ', meaning: 'without distinction' },
    { term: 'samādhiḥ', meaning: 'samādhi' },
    { term: 'dvividhaḥ', meaning: 'is of two kinds' },
    { term: 'hṛdi', meaning: 'in the heart' },
    { term: 'dṛśyaśabdānuviddhena', meaning: 'associated with the seen and with words' },
    { term: 'punaḥ', meaning: 'again' },
    { term: 'dvidhā', meaning: 'twofold' },
  ],
  root: group('ddv-23-verse', 'verse', 'Samādhi in the heart is of two kinds, with distinction and without. That with distinction is again twofold, associated with the seen and with words.', [
    group('ddv-23-p1', 'phrase', 'With distinction and without: samādhi in the heart is twofold.', [
    word('ddv-23-w1', 'with distinction', [
      ['स', 'sa'],
      ['वि', 'vi'],
      ['क', 'ka'],
      ['ल्पो', 'lpo'],
    ]),
    word('ddv-23-w2', 'without distinction', [
      ['नि', 'ni'],
      ['र्वि', 'rvi'],
      ['क', 'ka'],
      ['ल्पः', 'lpaḥ'],
    ]),
    word('ddv-23-w3', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धि', 'dhi'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-23-w4', 'is of two kinds', [
      ['द्वि', 'dvi'],
      ['वि', 'vi'],
      ['धो', 'dho'],
    ]),
    word('ddv-23-w5', 'in the heart', [
      ['हृ', 'hṛ'],
      ['दि', 'di'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-23-p2', 'phrase', 'The savikalpa kind, associated with the seen or with words, is again two.', [
    word('ddv-23-w6', 'associated with the seen and with words', [
      ['दृ', 'dṛ'],
      ['श्य', 'śya'],
      ['श', 'śa'],
      ['ब्दा', 'bdā'],
      ['नु', 'nu'],
      ['वि', 'vi'],
      ['द्धे', 'ddhe'],
      ['न', 'na'],
    ]),
    word('ddv-23-w7', 'savikalpa', [
      ['स', 'sa'],
      ['वि', 'vi'],
      ['क', 'ka'],
      ['ल्पः', 'lpaḥ'],
    ]),
    word('ddv-23-w8', 'again', [
      ['पु', 'pu'],
      ['न', 'na'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-23-w9', 'twofold', [
      ['द्वि', 'dvi'],
      ['धा', 'dhā'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
