export const szolgaltatasok = {
  header: {
    title: "Szolgáltatások",
    lead: "Két helyen találkozhatunk a módszerrel: online a Műhelyben, és később a fizikai Központban.",
  },
  cards: [
    {
      id: "muhely",
      title: "Nirmana Műhely",
      text: "Online gyakorlóközösség, ahol a módszert lépésről lépésre, közösen gyakoroljuk be.",
      features: [
        "3 modul",
        "Gyakorlótár",
        "Kihívások",
        "Heti közös gyakorlás",
        "Közösség",
      ],
      primaryCta: { label: "Részletek", href: "/szolgaltatasok/muhely" },
      secondaryCta: { label: "Csatlakozom", external: true },
      status: null,
    },
    {
      id: "kozpont",
      title: "Nirmana Központ",
      text: "Fizikai hely, ahol személyesen is találkozhatunk majd a módszerrel.",
      features: [],
      primaryCta: { label: "Tudj meg többet", href: "/kozpont" },
      secondaryCta: null,
      status: "Hamarosan",
    },
  ],
};
