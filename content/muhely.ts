import { CHECKOUT_ALAP_URL } from "@/lib/config";

export const muhely = {
  header: {
    title: "Nirmana Műhely",
    lead: "A Nirmana-módszer online gyakorlóközössége: itt együtt gyakorlunk.",
  },
  intro:
    "A Műhely nem egy videótár, hanem egy közösség, amely lépésről lépésre, közösen halad végig a módszeren – a materiális rétegtől a spirituálisig.",
  hogyanMukodik: {
    title: "Hogyan működik",
    items: [
      {
        title: "3 modul",
        text: "A valóság 3 rétegére épülő, egymásra épülő gyakorlássorozat.",
      },
      {
        title: "Gyakorlótár",
        text: "Visszatérő gyakorlatok, amelyekhez bármikor visszatérhetsz.",
      },
      {
        title: "Kihívások",
        text: "Időszakos, közös kihívások, amelyek lendületet adnak a gyakorlásnak.",
      },
      {
        title: "Heti közös gyakorlás",
        text: "Rendszeres alkalom, ahol nem egyedül, hanem együtt gyakorlunk.",
      },
      {
        title: "Közösség",
        text: "Olyan emberek, akik ugyanazon az úton járnak, mint te.",
      },
    ],
  },
  csomagok: {
    title: "Csomag",
    // Egyelőre csak az Alap csomag elérhető; a Haladó később indul.
    current: {
      id: "alap",
      name: "Alap",
      // TODO: pontos tartalom és ár megadása a tulajdonos részéről
      text: "TODO: az Alap csomag részletes tartalma és ára.",
      href: CHECKOUT_ALAP_URL,
    },
    upcoming: {
      name: "Haladó",
      text: "Hamarosan indul.",
    },
  },
  konzultacio: {
    title: "Konzultáció szabályai",
    // TODO: a konzultációkra vonatkozó konkrét szabályok (gyakoriság, időpontfoglalás, feltételek) megadása.
    text: "TODO: a konzultációk gyakorisága, menete és feltételei.",
  },
  faq: {
    title: "Gyakori kérdések",
    items: [
      {
        question: "Kell-e előzetes jóga- vagy meditációs tapasztalat?",
        // TODO: végleges válasz megadása
        answer: "TODO: válasz megadása.",
      },
      {
        question: "Mennyi időt érdemes hetente szánni a gyakorlásra?",
        // TODO: végleges válasz megadása
        answer: "TODO: válasz megadása.",
      },
      {
        question: "Mikor indul a Haladó csomag?",
        // TODO: végleges válasz megadása
        answer: "TODO: válasz megadása.",
      },
      {
        question: "Hogyan tudok csatlakozni vagy lemondani?",
        // TODO: végleges válasz megadása
        answer: "TODO: válasz megadása.",
      },
    ],
  },
  closing: {
    title: "Csatlakozz a Nirmana Műhelyhez",
    cta: "Csatlakozom a Műhelyhez",
  },
};
