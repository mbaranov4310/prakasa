import { group, word } from "../../lib/span";
import type { Chapter } from "../../types";

export const ddv13: Chapter = {
  id: 'ddv-13',
  titleDev: 'Verse 13',
  titleIast: 'Verse 13',
  titleEn: 'Verse 13',
  status: 'ready',
  translation: 'Māyā has two powers, projecting and veiling. The projecting power creates the world from the subtle body up to the cosmic egg.',
  glossary: [
    { term: 'śakti', meaning: 'powers' },
    { term: 'dvayam', meaning: 'a pair' },
    { term: 'hi', meaning: 'indeed' },
    { term: 'māyāyāḥ', meaning: 'of Māyā' },
    { term: 'vikṣepa', meaning: 'projecting' },
    { term: 'āvṛti', meaning: 'veiling' },
    { term: 'rūpakam', meaning: 'of the form of' },
    { term: 'śaktiḥ', meaning: 'power' },
    { term: 'liṅgādi', meaning: 'from the subtle body onward' },
    { term: 'brahmāṇḍa', meaning: 'the cosmic egg' },
    { term: 'antam', meaning: 'up to' },
    { term: 'jagat', meaning: 'the world' },
    { term: 'sṛjet', meaning: 'creates' },
  ],
  root: group('ddv-13-verse', 'verse', 'Māyā has two powers, projecting and veiling. The projecting power creates the world from the subtle body up to the cosmic egg.', [
    group('ddv-13-p1', 'phrase', 'Māyā has two powers: projecting and veiling.', [
    word('ddv-13-w1', 'powers', [
      ['श', 'śa'],
      ['क्ति', 'kti'],
    ], { trailing: '' }),
    word('ddv-13-w2', 'a pair', [
      ['द्व', 'dva'],
      ['यं', 'yaṃ'],
    ]),
    word('ddv-13-w3', 'indeed', [
      ['हि', 'hi'],
    ]),
    word('ddv-13-w4', 'of Māyā', [
      ['मा', 'mā'],
      ['या', 'yā'],
      ['या', 'yā'],
    ]),
    word('ddv-13-w5', 'projecting', [
      ['वि', 'vi'],
      ['क्षे', 'kṣe'],
      ['पा', 'pā'],
    ], { trailing: '' }),
    word('ddv-13-w6', 'veiling', [
      ['वृ', 'vṛ'],
      ['ति', 'ti'],
    ], { trailing: '' }),
    word('ddv-13-w7', 'of the form of', [
      ['रू', 'rū'],
      ['प', 'pa'],
      ['क', 'ka'],
      ['म्', 'm'],
    ], { trailing: ' ।', lineBreakAfter: true }),
    ]),
    group('ddv-13-p2', 'phrase', 'The projecting power creates the world from the subtle body to the universe.', [
    word('ddv-13-w8', 'projecting', [
      ['वि', 'vi'],
      ['क्षे', 'kṣe'],
      ['प', 'pa'],
    ], { trailing: '' }),
    word('ddv-13-w9', 'power', [
      ['श', 'śa'],
      ['क्ति', 'kti'],
      ['र्', 'r'],
    ], { trailing: '' }),
    word('ddv-13-w10', 'from the subtle body onward', [
      ['लि', 'li'],
      ['ङ्गा', 'ṅgā'],
      ['दि', 'di'],
    ]),
    word('ddv-13-w11', 'the cosmic egg', [
      ['ब्र', 'bra'],
      ['ह्मा', 'hmā'],
      ['ण्डा', 'ṇḍā'],
    ], { trailing: '' }),
    word('ddv-13-w12', 'up to', [
      ['न्तं', 'ntaṃ'],
    ]),
    word('ddv-13-w13', 'the world', [
      ['ज', 'ja'],
      ['ग', 'ga'],
      ['त्', 't'],
    ]),
    word('ddv-13-w14', 'creates', [
      ['सृ', 'sṛ'],
      ['जे', 'je'],
      ['त्', 't'],
    ], { trailing: ' ॥', lineBreakAfter: true }),
    ]),
  ]),
};
