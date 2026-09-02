import { acamana } from "./acamana";
import { aghamarsana } from "./aghamarsana";
import { bhagavanNamaskara } from "./bhagavan-namaskara";
import { bhutocchatanam } from "./bhutocchatanam";
import { bhumyAkasaAbhivandanam } from "./bhumy-akasa-abhivandanam";
import { dhyanam } from "./dhyanam";
import { digdevataNamaskara } from "./digdevata-namaskara";
import { dvitiyaMarjana } from "./dvitiya-marjana";
import { gayatriAvahanaNyasa } from "./gayatri-avahana-nyasa";
import { gayatriAvahanam } from "./gayatri-avahanam";
import { gayatriUdvasanam } from "./gayatri-udvasanam";
import { guruNamaskara } from "./guru-namaskara";
import { isvararpanam } from "./isvararpanam";
import { karanyasa } from "./karanyasa";
import { marjana } from "./marjana";
import { mitraSukta } from "./mitra-sukta";
import { mudraPradarsanam } from "./mudra-pradarsanam";
import { muniNamaskara } from "./muni-namaskara";
import { pranama } from "./pranama";
import { pranayama } from "./pranayama";
import { pratahMantracamana } from "./pratah-mantracamana";
import { punahMarjana } from "./punah-marjana";
import { sandhyangaTarpana } from "./sandhyanga-tarpana";
import { sariraSuddhi } from "./sarira-suddhi";
import { suryopasthana } from "./suryopasthana";
import { brahma } from "./nitya-mangala-slokas/brahma";
import { durga } from "./nitya-mangala-slokas/durga";
import { ganesa } from "./nitya-mangala-slokas/ganesa";
import { hanuman } from "./nitya-mangala-slokas/hanuman";
import { kartikeya } from "./nitya-mangala-slokas/kartikeya";
import { krsna } from "./nitya-mangala-slokas/krsna";
import { laksmi } from "./nitya-mangala-slokas/laksmi";
import { parvati } from "./nitya-mangala-slokas/parvati";
import { rama } from "./nitya-mangala-slokas/rama";
import { sani } from "./nitya-mangala-slokas/sani";
import { sarasvati } from "./nitya-mangala-slokas/sarasvati";
import { siva } from "./nitya-mangala-slokas/siva";
import { surya } from "./nitya-mangala-slokas/surya";
import { visnu } from "./nitya-mangala-slokas/visnu";
import { agni } from "./nitya-mangala-slokas/agni";
import { candra } from "./nitya-mangala-slokas/candra";
import { dhanvantari } from "./nitya-mangala-slokas/dhanvantari";
import { ganga } from "./nitya-mangala-slokas/ganga";
import { garuda } from "./nitya-mangala-slokas/garuda";
import { indra } from "./nitya-mangala-slokas/indra";
import { kubera } from "./nitya-mangala-slokas/kubera";
import { naga } from "./nitya-mangala-slokas/naga";
import { nandi } from "./nitya-mangala-slokas/nandi";
import { varuna } from "./nitya-mangala-slokas/varuna";
import { vayu } from "./nitya-mangala-slokas/vayu";
import type { Book } from "../types";

function comingSoon(
  id: string,
  titleDev: string,
  titleIast: string,
  titleEn: string,
): Book["chapters"][number] {
  return { id, titleDev, titleIast, titleEn, status: "coming-soon" };
}

export const books: Book[] = [
  {
    id: "sandhya-vandana",
    titleDev: "सन्ध्यावन्दनम्",
    titleIast: "sandhyāvandanam",
    titleEn: "Sandhyāvandana",
    blurb: "Morning prayers: meanings of the mantras, word by word.",
    chapters: [
      guruNamaskara,
      sariraSuddhi,
      acamana,
      bhutocchatanam,
      pranayama,
      comingSoon("sankalpa", "संकल्पः", "saṅkalpaḥ", "Saṅkalpa"),
      marjana,
      pratahMantracamana,
      dvitiyaMarjana,
      punahMarjana,
      aghamarsana,
      suryopasthana,
      sandhyangaTarpana,
      gayatriAvahanam,
      gayatriAvahanaNyasa,
      karanyasa,
      dhyanam,
      mudraPradarsanam,
      comingSoon(
        "asta-mudra",
        "अष्ट-मुद्रा प्रदर्शनम्",
        "aṣṭa-mudrā pradarśanam",
        "Eight mudrās",
      ),
      mitraSukta,
      digdevataNamaskara,
      muniNamaskara,
      pranama,
      gayatriUdvasanam,
      bhagavanNamaskara,
      bhumyAkasaAbhivandanam,
      comingSoon("abhivada", "अभिवादः", "abhivādaḥ", "Abhivāda"),
      isvararpanam,
    ],
  },
  {
    id: "devata-namaskara",
    titleDev: "देवता नमस्कारः",
    titleIast: "devatā namaskāraḥ",
    titleEn: "Devatā namaskāra",
    blurb: "Short salutations to each deity, word by word.",
    chapters: [
      ganesa,
      siva,
      parvati,
      visnu,
      laksmi,
      sarasvati,
      durga,
      krsna,
      rama,
      hanuman,
      kartikeya,
      surya,
      sani,
      brahma,
      indra,
      agni,
      vayu,
      varuna,
      comingSoon("soma", "सोमः", "somaḥ", "Soma"),
      candra,
      comingSoon("usas", "उषस्", "uṣas", "Uṣas"),
      ganga,
      nandi,
      garuda,
      naga,
      dhanvantari,
      kubera,
    ],
  },
  {
    id: "rudra-namakam-chamakam",
    titleDev: "रुद्रः — नमकं चमकम्",
    titleIast: "rudraḥ — namakaṃ camakam",
    titleEn: "Rudra namakam camakam",
    blurb: "Taittirīya Saṃhitā 4.5 and 4.7, word by word from the pada-pāṭha.",
    chapters: rudraComingSoon(),
  },
];

function rudraComingSoon(): Book["chapters"] {
  const digits = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११"];
  const namakam = digits.map((digit, index) => {
    const n = index + 1;
    const id = `namakam-${String(n).padStart(2, "0")}`;
    return comingSoon(id, `नमकम् ${digit}`, `namakam ${n}`, `Namakam ${n}`);
  });
  const chamakam = digits.map((digit, index) => {
    const n = index + 1;
    const id = `chamakam-${String(n).padStart(2, "0")}`;
    return comingSoon(id, `चमकम् ${digit}`, `camakam ${n}`, `Camakam ${n}`);
  });
  return [...namakam, ...chamakam];
}

export function getBook(bookId: string): Book | undefined {
  if (bookId === "nitya-mangala-slokas") bookId = "devata-namaskara";
  return books.find((book) => book.id === bookId);
}

export function getChapter(bookId: string, chapterId: string) {
  return getBook(bookId)?.chapters.find((chapter) => chapter.id === chapterId);
}
