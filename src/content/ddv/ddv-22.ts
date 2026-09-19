import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv22: Chapter = {
  id: 'ddv-22',
  titleDev: 'Verse 22',
  titleIast: 'Verse 22',
  titleEn: 'Verse 22',
  status: 'ready',
  translation: 'Setting aside the two, name and form, and intent on Existence-Consciousness-Bliss, one should always practise samādhi — in the heart or outside.',
  glossary: [
    { term: 'upekṣya', meaning: 'having disregarded' },
    { term: 'nāma', meaning: 'name' },
    { term: 'rūpe', meaning: 'and form' },
    { term: 'dve', meaning: 'the two' },
    { term: 'sat', meaning: 'Existence' },
    { term: 'cit', meaning: 'Consciousness' },
    { term: 'ānanda', meaning: 'Bliss' },
    { term: 'tatparaḥ', meaning: 'intent on' },
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
    word('ddv-22-w2', 'name', [
      ['ना', 'nā'],
      ['म', 'ma'],
    ], { trailing: '' }),
    word('ddv-22-w3', 'and form', [
      ['रू', 'rū'],
      ['पे', 'pe'],
    ]),
    word('ddv-22-w4', 'the two', [
      ['द्वे', 'dve'],
    ]),
    word('ddv-22-w5', 'Existence', [
      ['स', 'sa'],
      ['च्', 'c'],
    ], { trailing: '' }),
    word('ddv-22-w6', 'Consciousness', [
      ['चि', 'ci'],
      ['दा', 'dā'],
    ], { trailing: '' }),
    word('ddv-22-w7', 'Bliss', [
      ['न', 'na'],
      ['न्द', 'nda'],
    ], { trailing: '' }),
    word('ddv-22-w8', 'intent on', [
      ['त', 'ta'],
      ['त्प', 'tpa'],
      ['रः', 'raḥ'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-22-p2', 'phrase', 'one should always do samādhi in the heart or outside.', [
    word('ddv-22-w9', 'samādhi', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['धिं', 'dhiṃ'],
    ]),
    word('ddv-22-w10', 'always', [
      ['स', 'sa'],
      ['र्व', 'rva'],
      ['दा', 'dā'],
    ]),
    word('ddv-22-w11', 'one should practise', [
      ['कु', 'ku'],
      ['र्या', 'ryā'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-22-w12', 'in the heart', [
      ['धृ', 'dhṛ'],
      ['द', 'da'],
      ['ये', 'ye'],
    ]),
    word('ddv-22-w13', 'or', [
      ['वाऽ', 'vā\''],
    ], { trailing: '' }),
    word('ddv-22-w14', 'or else', [
      ['थ', 'tha'],
      ['वा', 'vā'],
    ]),
    word('ddv-22-w15', 'outside', [
      ['ब', 'ba'],
      ['हिः', 'hiḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
