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
| 3.23 | `वर्तेय` | `वर्तेयं` | `वर्तेय` |
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

5.8, 5.23, 6.32, 6.35, 7.12, 8.5, 8.6, 9.4, 9.21, 9.25, 10.29, 11.28, 15.4, 16.1, 16.20, 17.6, 17.23, 17.25, 18.40, 18.72

## Supersite's extra verse

Supersite prints 35 verses in chapter 13: Arjuna's question `प्रकृतिं पुरुषं चैव …` stands before 13.1. Śaṅkara's text does not have it, and the 1910 print numbers 34. The compare script drops it.

## Chapter 1 — resolved

Read from the print, vol. 11 pp. 4–12. 47 verses. The print writes संजय with anusvāra every time.

The page agrees with Sringeri on the real readings: 1.8 `सौमदत्तिर्जयद्रथः`, 1.28 the plural `दृष्ट्वेमान्स्वजनान् … युयुत्सून्समुपस्थितान्`, 1.37 `सबान्धवान्`. Also `श्वशुराः` and `स्यालाः` in 1.34, not the Supersite spellings.

Two short vowels, each one mark on the page: `काशिराजः` in 1.5, and `पितृन्` / `भ्रातृन्` in 1.26. A second look at 1.26, enlarged, shows a single hook under त, so the short vowel stands.

## Chapter 2 — resolved

Read from the print, vol. 11 pp. 15–71. 72 verses. The colophon names सांख्ययोगः.

The page has `भैक्षम्` in 2.5, `परंतपः` in 2.9 (the vocative in 2.3 is `परन्तप`), and `चेत्` in 2.33. At 2.54 the verse line prints `पृभाषेत`; the commentary on that page glosses `प्रभाषेत`. The verse file keeps the printed `पृ`.

## Chapter 3 — resolved

Read from the print, vol. 11 pp. 75–108. 43 verses. The heading and the colophon both say तृतीयोऽध्यायः. The close is the short ācārya formula, not the long महाभारत colophon, and it does not add कर्मयोगो नाम.

The page has `वर्तेय` in 3.23, and `वर्त एव` as two words in 3.22. At 3.8 the verse line is `प्रसिध्येद`, one `ध्य`. The commentary glosses `प्रसिध्येत्`.

## Chapter 4 — resolved

Read from the print, vol. 11 pp. 110–147. 42 verses. The heading and the colophon both say चतुर्थोऽध्यायः. The close is the short ācārya formula.

At 4.20 the long ā in `कर्मफलासङ्गं` is `फल` meeting `आसङ्ग`, attachment, which is what Śaṅkara says he gives up. At 4.29 the page has `प्राणं`, the avagraha in `प्राणेऽपानं`, and `तथापरे` with no avagraha. The print also keeps `परंतप` (4.2, 4.5, 4.33), `तदात्मानं` with no avagraha (4.7), and `ज्ञानासिनात्मनः` with no avagraha (4.42). At 4.39 the page prints a candrabindu; the verse file stores the anusvāra, because the checker turns a candrabindu back into one.

## Chapter 5 — resolved

Read from the print, vol. 11. The numbered pages run 152–176. In this stretch the printed page is the PDF index minus 37.

The heading on the text page is पञ्चमोऽध्यायः. After verse 29 the print sets the long colophon, and the name in it is संन्यासयोगः. The short ācārya formula follows the commentary.

At 5.1 the print ends `सुनिश्चितम्`. At 5.2 the speaker line is `श्रीभगवानुवाच`, with no space. At 5.8 the print joins the participles, `पश्यञ्शृण्वन्स्पृशञ्जिघ्रन्नश्नन्गच्छन्स्वपञ्श्वसन्`, and `शृण्वन्` has a short `ṛ`. At 5.9 there is a space, `प्रलपन् विसृजन्`. At 5.11 the print has `त्यक्त्वात्मशुद्धये`, with no avagraha. At 5.20 the print has `असंमूढो`, with anusvāra. At 5.23 the verse line prints `प्राक्छरीर`, with `छ`. The pada is `शरीर`, and the commentary glosses `शरीर`.

## Chapter 6

Read from the print, vol. 11. Numbered pages run 180–210. In this stretch the printed page is the PDF index minus 36. The opening leaf has no printed number.

The long colophon names ध्यानयोगः. The short ācārya formula follows the commentary.

At 6.1 the speaker line is `श्रीभगवानुवाच`, with no space. At 6.2 and 6.4 `संकल्प` has anusvāra. At 6.5 `उद्धरेदात्मनात्मानं` and at 6.6 `बन्धुरात्मात्मनस्तस्य` have no avagraha. At 6.8 the print has `काश्चनः`, with श, and the commentary repeats it. At 6.15 `सदात्मानं` has no avagraha. At 6.16 the print has `न चातिस्वप्नशीलस्य`. At 6.20 the print has `आत्मनात्मानं`, with no avagraha. At 6.23 `विद्यादुःखसंयोगवियोगं` has no space. At 6.24 `संकल्प` has anusvāra. At 6.25 `उपरमेद्बुद्ध्या` has no space, and `किंचित्` has anusvāra. At 6.28 `सदात्मानं` has no avagraha. At 6.32 the line is `स योगी`, with no visarga. At 6.39 the verse line doubles the छ, `च्छेत्तुम्` and `च्छेत्ता`. The padas are `छेत्तुम्` and `छेत्ता`, and the commentary glosses the single छ. 6.19 prints `यथा दीपो`.

## Chapter 12 — resolved

All 20 verses were read from the print, vol. 12 pp. 339–354. The wording is the same in the print, Sringeri, Supersite, and GRETIL. `python3 scripts/gita-compare.py --locked 12` prints no difference.

The print's spelling was kept where the digital copies write a class nasal: `धनंजय` (12.9), `निरहंकारः` (12.13), `संतुष्टः` (12.14), `संतुष्टो` (12.19).
