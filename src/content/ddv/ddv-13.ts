import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv13: Chapter = {
  id: 'ddv-13',
  titleDev: 'शक्तिद्वयं हि मायाया विक्षेपावृतिरूपकम्',
  titleIast: 'śaktidvayaṃ hi māyāyā vikṣepāvṛtirūpakam',
  titleEn: 'Verse 13',
  status: 'ready',
  translation: 'Māyā has two powers, projecting and veiling. The projecting power creates the world from the subtle body up to the cosmic egg.',
  glossary: [
    { term: 'śaktidvayaṃ', meaning: 'a pair of powers' },
    { term: 'hi', meaning: 'indeed' },
    { term: 'māyāyāḥ', meaning: 'of Māyā' },
    { term: 'vikṣepāvṛtirūpakam', meaning: 'of the form of projecting and veiling' },
    { term: 'vikṣepaśaktiḥ', meaning: 'the projecting power' },
    { term: 'liṅgādi', meaning: 'from the subtle body onward' },
    { term: 'brahmāṇḍāntaṃ', meaning: 'up to the cosmic egg' },
    { term: 'jagat', meaning: 'the world' },
    { term: 'sṛjet', meaning: 'creates' },
  ],
  root: group('ddv-13-verse', 'verse', 'Māyā has two powers, projecting and veiling. The projecting power creates the world from the subtle body up to the cosmic egg.', [
    group('ddv-13-p1', 'phrase', 'Māyā has two powers: projecting and veiling.', [
    word('ddv-13-w1', 'a pair of powers', [
      ['श', 'śa'],
      ['क्ति', 'kti'],
      ['द्व', 'dva'],
      ['यं', 'yaṃ'],
    ]),
    word('ddv-13-w2', 'indeed', [
      ['हि', 'hi'],
    ]),
    word('ddv-13-w3', 'of Māyā', [
      ['मा', 'mā'],
      ['या', 'yā'],
      ['या', 'yā'],
    ]),
    word('ddv-13-w4', 'of the form of projecting and veiling', [
      ['वि', 'vi'],
      ['क्षे', 'kṣe'],
      ['पा', 'pā'],
      ['वृ', 'vṛ'],
      ['ति', 'ti'],
      ['रू', 'rū'],
      ['प', 'pa'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-13-p2', 'phrase', 'The projecting power creates the world from the subtle body to the universe.', [
    word('ddv-13-w5', 'the projecting power', [
      ['वि', 'vi'],
      ['क्षे', 'kṣe'],
      ['प', 'pa'],
      ['श', 'śa'],
      ['क्ति', 'kti'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-13-w6', 'from the subtle body onward', [
      ['लि', 'li'],
      ['ङ्गा', 'ṅgā'],
      ['दि', 'di'],
    ]),
    word('ddv-13-w7', 'up to the cosmic egg', [
      ['ब्र', 'bra'],
      ['ह्मा', 'hmā'],
      ['ण्डा', 'ṇḍā'],
      ['न्तं', 'ntaṃ'],
    ]),
    word('ddv-13-w8', 'the world', [
      ['ज', 'ja'],
      ['ग', 'ga'],
      ['त्', 't'],
    ]),
    word('ddv-13-w9', 'creates', [
      ['सृ', 'sṛ'],
      ['जे', 'je'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
