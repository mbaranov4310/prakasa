import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv26: Chapter = {
  id: 'ddv-26',
  titleDev: 'स्वानुभूतिरसावेशाद्दृश्यशब्दावुपेक्ष्य तु',
  titleIast: 'svānubhūtirasāveśāddṛśyaśabdāvupekṣya tu',
  titleEn: 'Verse 26',
  status: 'ready',
  translation: 'But when, absorbed in the taste of one’s own being, one disregards both the seen and words, that is nirvikalpa samādhi, like a lamp in a windless place.',
  glossary: [
    { term: 'sva', meaning: 'one’s own' },
    { term: 'anubhūti', meaning: 'experience' },
    { term: 'rasa', meaning: 'taste' },
    { term: 'āveśāt', meaning: 'from absorption' },
    { term: 'dṛśya', meaning: 'seen' },
    { term: 'śabdau', meaning: 'and word' },
    { term: 'upekṣya', meaning: 'having disregarded' },
    { term: 'tu', meaning: 'but' },
    { term: 'nirvikalpaḥ', meaning: 'without distinction' },
    { term: 'samādhiḥ', meaning: 'samādhi' },
    { term: 'syāt', meaning: 'would be' },
    { term: 'nivāta', meaning: 'windless' },
    { term: 'sthita', meaning: 'standing' },
    { term: 'dīpavat', meaning: 'like a lamp' },
  ],
  root: group('ddv-26-verse', 'verse', 'But when, absorbed in the taste of one’s own being, one disregards both the seen and words, that is nirvikalpa samādhi, like a lamp in a windless place.', [
    group('ddv-26-p1', 'phrase', 'From absorption in the rasa of one’s own experience, disregarding seen and word —', [
    word('ddv-26-w1', 'one’s own', [
      ['स्वा', 'svā'],
    ], { trailing: '' }),
    word('ddv-26-w2', 'experience', [
      ['नु', 'nu'],
      ['भू', 'bhū'],
      ['ति', 'ti'],
    ], { trailing: '' }),
    word('ddv-26-w3', 'taste', [
      ['र', 'ra'],
      ['सा', 'sā'],
    ], { trailing: '' }),
    word('ddv-26-w4', 'from absorption', [
      ['वे', 've'],
      ['शा', 'śā'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-26-w5', 'seen', [
      ['दृ', 'dṛ'],
      ['श्य', 'śya'],
    ], { trailing: '' }),
    word('ddv-26-w6', 'and word', [
      ['श', 'śa'],
      ['ब्दा', 'bdā'],
      ['वु', 'vu'],
    ], { trailing: '' }),
    word('ddv-26-w7', 'having disregarded', [
      ['पे', 'pe'],
      ['क्ष्य', 'kṣya'],
    ]),
    word('ddv-26-w8', 'but', [
      ['तु', 'tu'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-26-p2', 'phrase', 'nirvikalpa samādhi, like a lamp standing in still air.', [
    word('ddv-26-w9', 'without distinction', [
      ['नि', 'ni'],
      ['र्वि', 'rvi'],
      ['क', 'ka'],
      ['ल्पः', 'lpaḥ'],
    ]),
    word('ddv-26-w10', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धिः', 'dhiḥ'],
    ]),
    word('ddv-26-w11', 'would be', [
      ['स्या', 'syā'],
      ['न्', 'n'],
    ], { trailing: '' }),
    word('ddv-26-w12', 'windless', [
      ['नि', 'ni'],
      ['वा', 'vā'],
      ['त', 'ta'],
    ], { trailing: '' }),
    word('ddv-26-w13', 'standing', [
      ['स्थि', 'sthi'],
      ['त', 'ta'],
    ], { trailing: '' }),
    word('ddv-26-w14', 'like a lamp', [
      ['दी', 'dī'],
      ['प', 'pa'],
      ['व', 'va'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
