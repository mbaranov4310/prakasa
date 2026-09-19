import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv16: Chapter = {
  id: 'ddv-16',
  titleDev: 'साक्षिणः पुरतो भाति लिङ्गं देहेन संयुतम्',
  titleIast: 'sākṣiṇaḥ purato bhāti liṅgaṃ dehena saṃyutam',
  titleEn: 'Verse 16',
  status: 'ready',
  translation: 'Before the Witness appears the subtle body joined with the gross body. From the entry of the reflection of Consciousness it becomes the empirical living self.',
  glossary: [
    { term: 'sākṣiṇaḥ', meaning: 'of the Witness' },
    { term: 'purataḥ', meaning: 'in front' },
    { term: 'bhāti', meaning: 'appears' },
    { term: 'liṅgaṃ', meaning: 'the subtle body' },
    { term: 'dehena', meaning: 'with the (gross) body' },
    { term: 'saṃyutam', meaning: 'joined' },
    { term: 'citi', meaning: 'Consciousness' },
    { term: 'chāyā', meaning: 'the reflection' },
    { term: 'samāveśāt', meaning: 'from its entry' },
    { term: 'jīvaḥ', meaning: 'the living self' },
    { term: 'syāt', meaning: 'becomes' },
    { term: 'vyāvahārikaḥ', meaning: 'empirical' },
  ],
  root: group('ddv-16-verse', 'verse', 'Before the Witness appears the subtle body joined with the gross body. From the entry of the reflection of Consciousness it becomes the empirical living self.', [
    group('ddv-16-p1', 'phrase', 'The subtle body, joined with the body, appears before the Witness.', [
    word('ddv-16-w1', 'of the Witness', [
      ['सा', 'sā'],
      ['क्षि', 'kṣi'],
      ['णः', 'ṇaḥ'],
    ]),
    word('ddv-16-w2', 'in front', [
      ['पु', 'pu'],
      ['र', 'ra'],
      ['तो', 'to'],
    ]),
    word('ddv-16-w3', 'appears', [
      ['भा', 'bhā'],
      ['ति', 'ti'],
    ]),
    word('ddv-16-w4', 'the subtle body', [
      ['लि', 'li'],
      ['ङ्गं', 'ṅgaṃ'],
    ]),
    word('ddv-16-w5', 'with the (gross) body', [
      ['दे', 'de'],
      ['हे', 'he'],
      ['न', 'na'],
    ]),
    word('ddv-16-w6', 'joined', [
      ['सं', 'saṃ'],
      ['यु', 'yu'],
      ['त', 'ta'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-16-p2', 'phrase', 'By the entry of the reflection it becomes the empirical jīva.', [
    word('ddv-16-w7', 'Consciousness', [
      ['चि', 'ci'],
      ['ति', 'ti'],
    ], { trailing: '' }),
    word('ddv-16-w8', 'the reflection', [
      ['च्छा', 'cchā'],
      ['या', 'yā'],
    ]),
    word('ddv-16-w9', 'from its entry', [
      ['स', 'sa'],
      ['मा', 'mā'],
      ['वे', 've'],
      ['शा', 'śā'],
      ['ज्', 'j'],
    ], { trailing: '' }),
    word('ddv-16-w10', 'the living self', [
      ['जी', 'jī'],
      ['वः', 'vaḥ'],
    ]),
    word('ddv-16-w11', 'becomes', [
      ['स्या', 'syā'],
      ['द्', 'd'],
    ], { trailing: '' }),
    word('ddv-16-w12', 'empirical', [
      ['व्या', 'vyā'],
      ['व', 'va'],
      ['हा', 'hā'],
      ['रि', 'ri'],
      ['कः', 'kaḥ'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
