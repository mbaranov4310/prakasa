/**
 * Drill card provenance:
 * Cue: First Steps Towards Sanskrit §7.6 gerund (book pp.134–135) — likhitvā /
 *   tyaktvā / gatvā / abhilikhya / parityajya / āgamya; Gonda §106 GERUNDS
 *   (pp.78–79) — kṛtvā set and -ya (vimucya, abhidrutya). Textbook roots swapped
 *   (tyaj→bhaj, ā-gam→sam-gam, abhi-likh→abhi-paṭh, abhi-dru→upa-hṛ, etc.).
 * Groups are the suffix join (same sound-change rule), not mixed stems.
 */
import type { QuizDeckItem, QuizDeckKind, QuizDirection } from "../../../lib/quiz";

export const pendingDeck = {
  id: "suffixes-tva-and-ya",
  titleEn: "-tvā and -ya",
  titleIast: "ktvā",
  lessonId: "suffixes-tva-and-ya",
  kind: "grammar" as QuizDeckKind,
  direction: "meaning-iast" as QuizDirection,
  items: [
    // --- tvā|no-strengthen ---
    {
      id: "nitva",
      // lesson glyph; no strengthening
      dev: "नीत्वा",
      iast: "nītvā",
      meaning: "after leading (nī)",
      unit: "word",
      group: "tvā|no-strengthen",
    },
    {
      id: "bhutva",
      // lesson glyph
      dev: "भूत्वा",
      iast: "bhūtvā",
      meaning: "after becoming (bhū)",
      unit: "word",
      group: "tvā|no-strengthen",
    },
    {
      id: "krtva",
      // lesson glyph; Gonda §106 kṛtvā
      dev: "कृत्वा",
      iast: "kṛtvā",
      meaning: "after doing (kṛ)",
      unit: "word",
      group: "tvā|no-strengthen",
    },
    {
      id: "srutva",
      // same join on √śru (swap)
      dev: "श्रुत्वा",
      iast: "śrutvā",
      meaning: "after hearing (śru)",
      unit: "word",
      group: "tvā|no-strengthen",
    },

    // --- tvā|c-or-j ---
    {
      id: "yuktva",
      // lesson glyph; -j → -k before -tvā
      dev: "युक्त्वा",
      iast: "yuktvā",
      meaning: "after yoking (yuj)",
      unit: "word",
      group: "tvā|c-or-j",
    },
    {
      id: "mrstva",
      // lesson glyph; -j → -ṣ
      dev: "मृष्ट्वा",
      iast: "mṛṣṭvā",
      meaning: "after wiping (mṛj)",
      unit: "word",
      group: "tvā|c-or-j",
    },
    {
      id: "muktva",
      // lesson muc→mukta pattern applied to -tvā
      dev: "मुक्त्वा",
      iast: "muktvā",
      meaning: "after freeing (muc)",
      unit: "word",
      group: "tvā|c-or-j",
    },
    {
      id: "bhaktva",
      // First Steps tyaktvā shape (p.134); √tyaj → √bhaj
      dev: "भक्त्वा",
      iast: "bhaktvā",
      meaning: "after sharing (bhaj)",
      unit: "word",
      group: "tvā|c-or-j",
    },

    // --- tvā|samprasarana ---
    {
      id: "uktva",
      // lesson glyph
      dev: "उक्त्वा",
      iast: "uktvā",
      meaning: "after speaking (vac)",
      unit: "word",
      group: "tvā|samprasarana",
    },
    {
      id: "suptva",
      // lesson glyph; Gonda §106 suptvā
      dev: "सुप्त्वा",
      iast: "suptvā",
      meaning: "after sleeping (svap)",
      unit: "word",
      group: "tvā|samprasarana",
    },
    {
      id: "istva",
      // lesson glyph
      dev: "इष्ट्वा",
      iast: "iṣṭvā",
      meaning: "after sacrificing (yaj)",
      unit: "word",
      group: "tvā|samprasarana",
    },
    {
      id: "grhitva",
      // lesson glyph; Gonda §106 gṛhītvā
      dev: "गृहीत्वा",
      iast: "gṛhītvā",
      meaning: "after grabbing (grah)",
      unit: "word",
      group: "tvā|samprasarana",
    },
    {
      id: "usitva",
      // lesson glyph
      dev: "उषित्वा",
      iast: "uṣitvā",
      meaning: "after living (vas)",
      unit: "word",
      group: "tvā|samprasarana",
    },
    {
      id: "prstva",
      // lesson glyph
      dev: "पृष्ट्वा",
      iast: "pṛṣṭvā",
      meaning: "after asking (prach)",
      unit: "word",
      group: "tvā|samprasarana",
    },

    // --- ya|prefix ---
    {
      id: "pratigamya",
      // lesson glyph; prefix → -ya
      dev: "प्रतिगम्य",
      iast: "pratigamya",
      meaning: "after returning (prati-gam)",
      unit: "word",
      group: "ya|prefix",
    },
    {
      id: "vimucya",
      // Gonda §106 vimucya (p.78)
      dev: "विमुच्य",
      iast: "vimucya",
      meaning: "after freeing (vi-muc)",
      unit: "word",
      group: "ya|prefix",
    },
    {
      id: "samgamya",
      // First Steps āgamya shape (p.135); ā- → sam-
      dev: "संगम्य",
      iast: "saṃgamya",
      meaning: "after coming together (sam-gam)",
      unit: "word",
      group: "ya|prefix",
    },
    {
      id: "abhipathya",
      // First Steps abhilikhya shape (p.135); √likh → √paṭh
      dev: "अभिपठ्य",
      iast: "abhipaṭhya",
      meaning: "after reading toward (abhi-paṭh)",
      unit: "word",
      group: "ya|prefix",
    },

    // --- ya|short-vowel-t ---
    {
      id: "ahrtya",
      // lesson glyph; short vowel + -t before -ya
      dev: "आहृत्य",
      iast: "āhṛtya",
      meaning: "after fetching (ā-hṛ)",
      unit: "word",
      group: "ya|short-vowel-t",
    },
    {
      id: "upahrtya",
      // Gonda §106 abhidrutya shape (p.78); abhi-dru → upa-hṛ
      dev: "उपहृत्य",
      iast: "upahṛtya",
      meaning: "after bringing near (upa-hṛ)",
      unit: "word",
      group: "ya|short-vowel-t",
    },
    {
      id: "prakrtya",
      // same join on pra-kṛ
      dev: "प्रकृत्य",
      iast: "prakṛtya",
      meaning: "after making (pra-kṛ)",
      unit: "word",
      group: "ya|short-vowel-t",
    },
    {
      id: "asrutya",
      // same join on ā-śru
      dev: "आश्रुत्य",
      iast: "āśrutya",
      meaning: "after hearing (ā-śru)",
      unit: "word",
      group: "ya|short-vowel-t",
    },
  ] as QuizDeckItem[],
};
