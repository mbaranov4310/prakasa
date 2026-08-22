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
];

export function getBook(bookId: string): Book | undefined {
  return books.find((book) => book.id === bookId);
}

export function getChapter(bookId: string, chapterId: string) {
  return getBook(bookId)?.chapters.find((chapter) => chapter.id === chapterId);
}
