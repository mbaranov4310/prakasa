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
    { term: 'svānubhūtirasāveśāt', meaning: 'from absorption in the taste of one’s own experience' },
    { term: 'dṛśyaśabdau', meaning: 'seen and word' },
    { term: 'upekṣya', meaning: 'having disregarded' },
    { term: 'tu', meaning: 'but' },
    { term: 'nirvikalpaḥ', meaning: 'without distinction' },
    { term: 'samādhiḥ', meaning: 'samādhi' },
    { term: 'syāt', meaning: 'would be' },
    { term: 'nivātasthitadīpavat', meaning: 'like a lamp in a windless place' },
  ],
  root: group('ddv-26-verse', 'verse', 'But when, absorbed in the taste of one’s own being, one disregards both the seen and words, that is nirvikalpa samādhi, like a lamp in a windless place.', [
    group('ddv-26-p1', 'phrase', 'From absorption in the rasa of one’s own experience, disregarding seen and word —', [
    word('ddv-26-w1', 'from absorption in the taste of one’s own experience', [
      ['स्वा', 'svā'],
      ['नु', 'nu'],
      ['भू', 'bhū'],
      ['ति', 'ti'],
      ['र', 'ra'],
      ['सा', 'sā'],
      ['वे', 've'],
      ['शा', 'śā'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-26-w2', 'seen and word', [
      ['दृ', 'dṛ'],
      ['श्य', 'śya'],
      ['श', 'śa'],
      ['ब्दा', 'bdā'],
      ['वु', 'vu'],
    ], { trailing: '' }),
    word('ddv-26-w3', 'having disregarded', [
      ['पे', 'pe'],
      ['क्ष्य', 'kṣya'],
    ]),
    word('ddv-26-w4', 'but', [
      ['तु', 'tu'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-26-p2', 'phrase', 'nirvikalpa samādhi, like a lamp standing in still air.', [
    word('ddv-26-w5', 'without distinction', [
      ['नि', 'ni'],
      ['र्वि', 'rvi'],
      ['क', 'ka'],
      ['ल्पः', 'lpaḥ'],
    ]),
    word('ddv-26-w6', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धिः', 'dhiḥ'],
    ]),
    word('ddv-26-w7', 'would be', [
      ['स्या', 'syā'],
      ['न्', 'n'],
    ], { trailing: '' }),
    word('ddv-26-w8', 'like a lamp in a windless place', [
      ['नि', 'ni'],
      ['वा', 'vā'],
      ['त', 'ta'],
      ['स्थि', 'sthi'],
      ['त', 'ta'],
      ['दी', 'dī'],
      ['प', 'pa'],
      ['व', 'va'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
