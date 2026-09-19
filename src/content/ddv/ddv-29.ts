import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv29: Chapter = {
  id: 'ddv-29',
  titleDev: 'स्तब्धीभावो रसास्वादात्तृतीयः पूर्ववन्मतः',
  titleIast: 'stabdhībhāvo rasāsvādāttṛtīyaḥ pūrvavanmataḥ',
  titleEn: 'Verse 29',
  status: 'ready',
  translation: 'The third, a stillness from tasting that rasa, is like the previous (nirvikalpa). With these six samādhis one should spend time without a break.',
  glossary: [
    { term: 'stabdhībhāvaḥ', meaning: 'a state of stillness' },
    { term: 'rasāsvādāt', meaning: 'from tasting the rasa' },
    { term: 'tṛtīyaḥ', meaning: 'the third' },
    { term: 'pūrvavat', meaning: 'like the previous' },
    { term: 'mataḥ', meaning: 'is held' },
    { term: 'etaiḥ', meaning: 'by these' },
    { term: 'samādhibhiḥ', meaning: 'samādhis' },
    { term: 'ṣaḍbhiḥ', meaning: 'six' },
    { term: 'nayet', meaning: 'one should lead' },
    { term: 'kālaṃ', meaning: 'time' },
    { term: 'nirantaram', meaning: 'without interruption' },
  ],
  root: group('ddv-29-verse', 'verse', 'The third, a stillness from tasting that rasa, is like the previous (nirvikalpa). With these six samādhis one should spend time without a break.', [
    group('ddv-29-p1', 'phrase', 'A freeze of mind from tasting the rasa is the third, like the earlier one.', [
    word('ddv-29-w1', 'a state of stillness', [
      ['स्त', 'sta'],
      ['ब्धी', 'bdhī'],
      ['भा', 'bhā'],
      ['वो', 'vo'],
    ]),
    word('ddv-29-w2', 'from tasting the rasa', [
      ['र', 'ra'],
      ['सा', 'sā'],
      ['स्वा', 'svā'],
      ['दा', 'dā'],
      ['त्', 't'],
    ], { trailing: '' }),
    word('ddv-29-w3', 'the third', [
      ['तृ', 'tṛ'],
      ['ती', 'tī'],
      ['यः', 'yaḥ'],
    ]),
    word('ddv-29-w4', 'like the previous', [
      ['पू', 'pū'],
      ['र्व', 'rva'],
      ['व', 'va'],
      ['न्', 'n'],
    ], { trailing: '' }),
    word('ddv-29-w5', 'is held', [
      ['म', 'ma'],
      ['तः', 'taḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-29-p2', 'phrase', 'By these six samādhis one should pass the time continuously.', [
    word('ddv-29-w6', 'by these', [
      ['ए', 'e'],
      ['तैः', 'taiḥ'],
    ]),
    word('ddv-29-w7', 'samādhis', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धि', 'dhi'],
      ['भिः', 'bhiḥ'],
    ]),
    word('ddv-29-w8', 'six', [
      ['ष', 'ṣa'],
      ['ड्भि', 'ḍbhi'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-29-w9', 'one should lead', [
      ['न', 'na'],
      ['ये', 'ye'],
      ['त्', 't'],
    ]),
    word('ddv-29-w10', 'time', [
      ['का', 'kā'],
      ['लं', 'laṃ'],
    ]),
    word('ddv-29-w11', 'without interruption', [
      ['नि', 'ni'],
      ['र', 'ra'],
      ['न्त', 'nta'],
      ['र', 'ra'],
      ['म्', 'm'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
