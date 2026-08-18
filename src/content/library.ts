import { acamana } from "./acamana";
import { aghamarsana } from "./aghamarsana";
import { bhutocchatanam } from "./bhutocchatanam";
import { dvitiyaMarjana } from "./dvitiya-marjana";
import { guruNamaskara } from "./guru-namaskara";
import { marjana } from "./marjana";
import { pranayama } from "./pranayama";
import { pratahMantracamana } from "./pratah-mantracamana";
import { punahMarjana } from "./punah-marjana";
import { sandhyangaTarpana } from "./sandhyanga-tarpana";
import { sariraSuddhi } from "./sarira-suddhi";
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
      comingSoon(
        "punah-pranayama-suryopasthana",
        "पुनः प्राणायामः, संकल्प वाक्य, सूर्योपस्थानम्",
        "punaḥ prāṇāyāmaḥ, saṅkalpa vākya, sūryopasthānam",
        "Punaḥ prāṇāyāma, saṅkalpa, sūryopasthāna",
      ),
      sandhyangaTarpana,
    ],
  },
];

export function getBook(bookId: string): Book | undefined {
  return books.find((book) => book.id === bookId);
}

export function getChapter(bookId: string, chapterId: string) {
  return getBook(bookId)?.chapters.find((chapter) => chapter.id === chapterId);
}
