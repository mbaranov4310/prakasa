# Devatā stuti inventory

Status is research, not the live site. No chapter is wired until a verse is chosen and glossed.

**Live snag list:** `docs/devata-stuti/FIND_QUEUE.md`  
**Packages:** `docs/devata-stuti/findings/<id>.md`

Working book id: `devata-namaskara`. Titles: देवता नमस्कारः / devatā namaskāraḥ / Devatā namaskāra.

## Deities

Order is a first guess (Gaṇeśa first, then a common temple / children’s set). Not final.

| Deity | Names to search | Status |
| --- | --- | --- |
| Gaṇeśa | गणेश, गणपति, विनायक, वक्रतुण्ड | verse proposed (calibration) |
| Kārtikeya | कार्तिकेय, स्कन्द, सुब्रह्मण्य, षण्मुख, षडानन, गुह, कुमार, முருகன் | ready (`kartikeya`) |
| Sarasvatī | सरस्वती, वाग्देवी, शारदा | verse proposed |
| Śiva | शिव, शङ्कर, महेश्वर, रुद्र | verse proposed |
| Viṣṇu | विष्णु, नारायण, हरि | not started |
| Devī / Durgā | दुर्गा, देवी, पार्वती, अम्बिका | not started |
| Lakṣmī | लक्ष्मी, श्री, महालक्ष्मी | not started |
| Sūrya | सूर्य, आदित्य, भास्कर | not started |
| Hanumān | हनुमान्, आञ्जनेय, मारुति | not started |
| Rāma | राम, रघुनाथ | not started |
| Kṛṣṇa | कृष्ण, गोविन्द, वासुदेव | not started |
| Guru | गुरु, सद्गुरु | not started |

---

## Gaṇeśa

**Names searched:** given as the collection’s yardstick, not a fresh hunt.

**Candidate (proposed):**

```
वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।
निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
```

IAST: `vakratuṇḍa mahākāya sūryakoṭi samaprabha | nirvighnaṃ kuru me deva sarvakāryeṣu sarvadā ||`

Genre: prārthanā. This is the length and tone we want for the whole book.

**Attestation:** Popularity is not in doubt (school, home, any new undertaking). Devotional sites often name Mudgala Purāṇa because Vakratuṇḍa is the first of that text’s eight Gaṇeśa avatāras; that is not the same as finding *this* four-pāda prayer in the Purāṇa. Treat origin as unknown until someone cites a verse number. Variants include vocative *vakratuṇḍāya*, and *sūrya-koṭi* vs *candra-koṭi*.

**Proposal:** encode this recension once confirmed. Use it as the shape filter for every other deity.

**Uncertainties:** original source; north/south wording.

---

## Kārtikeya

Chosen and encoded. Find block: `docs/devata-stuti/findings/kartikeya.md`. Chapter: `src/content/nitya-mangala-slokas/kartikeya.ts`.

### Candidate A — Subrahmaṇya dhyāna (leading)

```
षडाननं कुङ्कुमरक्तवर्णं महामतिं दिव्यमयूरवाहनम् ।
रुद्रस्य सूनुं सुरसैन्यनाथं गुहं सदा शरणमहं प्रपद्ये ॥
```

IAST: `ṣaḍānanaṃ kuṅkuma-rakta-varṇaṃ mahāmatiṃ divya-mayūra-vāhanam | rudrasya sūnuṃ sura-sainya-nāthaṃ guhaṃ sadā śaraṇam ahaṃ prapadye ||`

Genre: dhyāna + śaraṇāgati. One verse, independently recited, right length.

**Attestation:** Printed as verse 1 of Śrī Subrahmaṇya Dhyānam on [sanskritdocuments.org](https://sanskritdocuments.org/doc_subrahmanya/subradhyanam.html) (the rest of that file is a longer dhyāna; this first verse circulates on its own). Same incipit in Vishvasa’s stotra dump. Used as the opening dhyāna before Murugan worship on countless sites — that last fact is popularity, not origin. No Purāṇa/āgama verse citation found yet.

**Variants (do not mix):**

- `महामतिं` (great intellect) vs `महामणिं` (great jewel) on some pages
- `गुहं सदा शरणमहं प्रपद्ये` vs `गुहं सदाहं शरणं प्रपद्ये`
- A close paddhati cousin in Vaidika Vignanam’s [Subrahmaṇya nitya pūjā](https://vignanam.org/samskritam/subrahmanya-nitya-puja-vidhanam.html):

```
षडाननं चन्दनलेपिताङ्गं महोरसं दिव्यमयूरवाहनम् ।
रुद्रस्य सूनुं सुरलोकनाथं ब्रह्मण्यदेवं शरणं प्रपद्ये ॥
```

Same frame, different adjectives (*candanlepita* / *mahorasa* / *suraloka-nātha* / *brahmaṇyadeva*). That is village/recension variation in the wild.

### Candidate B — namaskāra (closer to “hello”)

```
ज्ञानशक्तिधर स्कन्द वल्लीकल्याणसुन्दर ।
देवसेनामनःकान्त कार्तिकेय नमोऽस्तु ते ॥
```

IAST (one common recension): `jñāna-śakti-dhara skanda vallī-kalyāṇa-sundara | devasenā-manaḥ-kānta kārtikeya namo ’stu te ||`

Genre: namaskāra. Same size as vakratuṇḍa. Often paired *after* candidate A in pūjā, then `oṃ subrahmaṇyāya namaḥ`.

**Attestation:** Very widely printed as a Kartikeya dhyāna/namaskāra. Grammar wobbles in the copies: some have nominatives (`ज्ञानशक्तिधरः स्कन्दः … कार्तिकेयो नमोऽस्तु ते`), some vocatives. Valli + Devasenā in one verse is a Tamil/South signature; a North “Kartikeya only” book might not lead with this. Origin not traced beyond modern compilations.

### Not proposed (wrong size or wrong job)

- Prajñāvivardhana stotra (Rudra-yāmala namāvalī, six verses / 28 names) — real text, too long, not a temple hello
- Skanda ṣaṭkam — six verses with refrain
- Ṣaṇmukha dhyāna beginning `षडाननं त्रिषण्णेत्रं` — paddhati iconography, several verses, for pūjā visualization not a child’s greeting

**Proposal:** Candidate A if we want the verse people actually use as Subrahmaṇya dhyāna; Candidate B if we want the vakratuṇḍa-shaped namaskāra. A is the stronger “this is the standard short verse” claim. Recension for A: sanskritdocuments `महामतिं` / `शरणमहं प्रपद्ये`, unless a family reading is preferred.

**Uncertainties:** no primary-text citation for A or B; mahāmati vs mahāmaṇi; paddhati cousin in the Vignanam pūjā; whether a North Indian family would recognize either as readily as vakratuṇḍa.

---

## Sarasvatī

**Names searched:** सरस्वती वन्दना, या कुन्देन्दु, दैनिक प्रार्थना.

**Candidate (proposed):**

```
या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता
या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना ।
या ब्रह्माच्युतशङ्करप्रभृतिभिर्देवैः सदा वन्दिता
सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा ॥
```

Genre: dhyāna that ends in a request (*pātu … jāḍyāpahā*). Longer meter (śārdūlavikrīḍita), but this is the school-assembly verse: every kid who went to an Indian school has heard it.

**Attestation:** Opening stanza of a Sarasvatī stotra traditionally labelled Agastya-kṛta in stotra collections. Not Vedic. Not a demonstrated Śaṅkara work despite occasional ascription. Variant in pāda 3: `वन्दिता` vs `पूजिता`.

**Proposal:** encode this; it is the Gaṇeśa-grade “everyone knows it” verse for this goddess, even though it is longer than vakratuṇḍa.

**Uncertainties:** Agastya ascription is traditional, not verified; `vanditā` / `pūjitā`.

---

## Śiva

**Names searched:** कर्पूरगौरं, शिव श्लोक दैनिक प्रार्थना.

**Candidate (proposed):**

```
कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम् ।
सदा वसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि ॥
```

Genre: namaskāra / closing dhyāna. Same ballpark length as vakratuṇḍa. Function is often *after* ārati (including ārati of other gods), so it is a greeting people actually say, just at a slightly different moment in the visit.

**Attestation:** Universally known. Sites claim Yajurveda; that is false (this is classical kāvya meter, not a saṃhitā mantra). Origin still untraced here. Do not encode a Vedic label.

**Proposal:** encode this as the Śiva hello unless a family prefers `नमस्ते अस्तु भगवन्` or another short verse.

**Uncertainties:** origin; whether we want an opening verse instead of this closing one.
