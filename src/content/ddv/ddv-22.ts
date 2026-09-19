import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv22: Chapter = {
  id: 'ddv-22',
  titleDev: 'उपेक्ष्य नामरूपे द्वे सच्चिदानन्दतत्परः',
  titleIast: 'upekṣya nāmarūpe dve saccidānandatatparaḥ',
  titleEn: 'Verse 22',
  status: 'ready',
  translation: 'Setting aside the two, name and form, and intent on Existence-Consciousness-Bliss, one should always practise samādhi — in the heart or outside.',
  glossary: [
    { term: 'upekṣya', meaning: 'having disregarded' },
    { term: 'nāmarūpe', meaning: 'name and form' },
    { term: 'dve', meaning: 'the two' },
    { term: 'saccidānandatatparaḥ', meaning: 'intent on Existence-Consciousness-Bliss' },
    { term: 'samādhiṃ', meaning: 'samādhi' },
    { term: 'sarvadā', meaning: 'always' },
    { term: 'kuryāt', meaning: 'one should practise' },
    { term: 'hṛdaye', meaning: 'in the heart' },
    { term: 'vā', meaning: 'or' },
    { term: 'athavā', meaning: 'or else' },
    { term: 'bahiḥ', meaning: 'outside' },
  ],
  root: group('ddv-22-verse', 'verse', 'Setting aside the two, name and form, and intent on Existence-Consciousness-Bliss, one should always practise samādhi — in the heart or outside.', [
    group('ddv-22-p1', 'phrase', 'Leaving name and form aside, intent on Existence-Consciousness-Bliss,', [
    word('ddv-22-w1', 'having disregarded', [
      ['उ', 'u'],
      ['पे', 'pe'],
      ['क्ष्य', 'kṣya'],
    ]),
    word('ddv-22-w2', 'name and form', [
      ['ना', 'nā'],
      ['म', 'ma'],
      ['रू', 'rū'],
      ['पे', 'pe'],
    ]),
    word('ddv-22-w3', 'the two', [
      ['द्वे', 'dve'],
    ]),
    word('ddv-22-w4', 'intent on Existence-Consciousness-Bliss', [
      ['स', 'sa'],
      ['च्चि', 'cci'],
      ['दा', 'dā'],
      ['न', 'na'],
      ['न्द', 'nda'],
      ['त', 'ta'],
      ['त्प', 'tpa'],
      ['रः', 'raḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-22-p2', 'phrase', 'one should always do samādhi in the heart or outside.', [
    word('ddv-22-w5', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धिं', 'dhiṃ'],
    ]),
    word('ddv-22-w6', 'always', [
      ['स', 'sa'],
      ['र्व', 'rva'],
      ['दा', 'dā'],
    ]),
    word('ddv-22-w7', 'one should practise', [
      ['कु', 'ku'],
      ['र्या', 'ryā'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-22-w8', 'in the heart', [
      ['धृ', 'dhṛ'],
      ['द', 'da'],
      ['ये', 'ye'],
    ]),
    word('ddv-22-w9', 'or', [
      ['वाऽ', 'vā\''],
    ], { trailing: '' }),
    word('ddv-22-w10', 'or else', [
      ['थ', 'tha'],
      ['वा', 'vā'],
    ]),
    word('ddv-22-w11', 'outside', [
      ['ब', 'ba'],
      ['हिः', 'hiḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
