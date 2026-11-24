# Flags — where the digital copies of the Gītā disagree

The text we follow is the 1910 Vāṇī Vilās print (`docs/gita/ENCODE.md`). This list says where to look hardest on the page: the verses where the Sringeri text and the Gita Supersite text differ by a letter or a word after spelling conventions are set aside.

Regenerate the detail, with the letters on each side: `python3 scripts/gita-compare.py` (needs `data/gita/`).

Of 700 verses, 521 are letter-for-letter the same in both copies, 129 differ only in spelling convention or scrape glitches (anusvāra or class nasal, `तत्त्व` or `तत्व`, a misplaced vowel sign), and 50 differ in a letter or a word. Those 50 are below. None is in chapter 12.

## Readings — two real forms of the verse

For each, the print decides. Write what the page has when the chapter is done.

| Verse | Sringeri | Supersite | Print (1910) |
| --- | --- | --- | --- |
| 1.8 | `सौमदत्तिर्जयद्रथः` | `सौमदत्तिस्तथैव च` | `सौमदत्तिर्जयद्रथः` |
| 1.28 | `दृष्ट्वेमान्स्वजनान् … युयुत्सून् समुपस्थितान्` | `दृष्ट्वेमं स्वजनं … युयुत्सुं समुपस्थितम्` | the plural, as Sringeri |
| 1.37 | `सबान्धवान्` | `स्वबान्धवान्` | `सबान्धवान्` |
| 2.5 | `भैक्षम्` | `भैक्ष्यम्` | `भैक्षम्` |
| 2.9 | `परन्तपः` | `परन्तप` | `परंतपः` |
| 3.23 | `वर्तेय` | `वर्तेयं` | |
| 6.19 | `यदा दीपो` | `यथा दीपो` | |
| 7.11 | `बलवतां चाहं` | `बलवतामस्मि` | |
| 8.7 | `असंशयः` | `असंशयम्` | |
| 11.16 | `त्वा` | `त्वां` | |
| 11.20 | `रूपमिदं तवोग्रं` | `रूपमुग्रं तवेदं` | |
| 11.21 | `त्वा सुरसङ्घा` | `त्वां सुरसङ्घाः` | |
| 11.32 | `त्वा` | `त्वां` | |
| 11.54 | `शक्य अहम्` | `शक्यमहम्` | |
| 13.20 | `कार्यकरण` | `कार्यकारण` | |
| 14.18 | `जघन्यगुणवृत्तस्था` | `जघन्यगुणवृत्तिस्था` | |
| 16.4 | `अतिमानश्च` | `अभिमानश्च` | |
| 16.13 | `लब्धमिदं प्राप्स्ये` | `लब्धमिमं प्राप्स्ये` | |
| 17.17 | `अफलकाङ्क्षिभिः` | `अफलाकाङ्क्षिभिः` | |
| 18.28 | `नैकृतिको` | `नैष्कृतिको` | |
| 18.35 | `सा तामसी मता` | `सा पार्थ तामसी` | |
| 18.57 | `बुद्धियोगमपाश्रित्य` | `बुद्धियोगमुपाश्रित्य` | |
| 18.59 | `यद्यहङ्कारम्` | `यदहङ्कारम्` | |
| 18.75 | `श्रुतवानिमं गुह्यतमं परम्` | `श्रुतवानेतद्गुह्यमहं परम्` | |

## Probably a slip in one copy

Still read these on the page.

4.29, 5.8, 5.23, 6.32, 6.35, 7.12, 8.5, 8.6, 9.4, 9.21, 9.25, 10.29, 11.28, 15.4, 16.1, 16.20, 17.6, 17.23, 17.25, 18.40, 18.72

## Supersite's extra verse

Supersite prints 35 verses in chapter 13: Arjuna's question `प्रकृतिं पुरुषं चैव …` stands before 13.1. Śaṅkara's text does not have it, and the 1910 print numbers 34. The compare script drops it.

## Chapter 1 — resolved

Read from the print, vol. 11 pp. 4–12. 47 verses. The print writes संजय with anusvāra every time.

The page agrees with Sringeri on the real readings: 1.8 `सौमदत्तिर्जयद्रथः`, 1.28 the plural `दृष्ट्वेमान्स्वजनान् … युयुत्सून्समुपस्थितान्`, 1.37 `सबान्धवान्`. Also `श्वशुराः` and `स्यालाः` in 1.34, not the Supersite spellings.

Two short vowels, each one mark on the page: `काशिराजः` in 1.5, and `पितृन्` / `भ्रातृन्` in 1.26. A second look at 1.26, enlarged, shows a single hook under त, so the short vowel stands.

## Chapter 2 — resolved

Read from the print, vol. 11 pp. 15–71. 72 verses. The colophon names सांख्ययोगः.

The page has `भैक्षम्` in 2.5, `परंतपः` in 2.9 (the vocative in 2.3 is `परन्तप`), and `चेत्` in 2.33. At 2.54 the verse line prints `पृभाषेत`; the commentary on that page glosses `प्रभाषेत`. The verse file keeps the printed `पृ`.

## Chapter 12 — resolved

All 20 verses were read from the print, vol. 12 pp. 339–354. The wording is the same in the print, Sringeri, Supersite, and GRETIL. `python3 scripts/gita-compare.py --locked 12` prints no difference.

The print's spelling was kept where the digital copies write a class nasal: `धनंजय` (12.9), `निरहंकारः` (12.13), `संतुष्टः` (12.14), `संतुष्टो` (12.19).
