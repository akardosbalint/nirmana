import { CIRCLE_URL } from "@/lib/config";

export const siteName = "Nirmana-módszer";

export const siteTagline =
  "A jóga 8 tagján keresztül vezet végig a valóság 3 rétegén.";

export const siteDescription =
  "A Nirmana-módszer a jóga 8 tagján keresztül vezet végig a valóság 3 rétegén, hogy a spirituális szintre ne csak eljuss, hanem ott is maradj, és onnan teremtsd meg az életet, amelyet élni akarsz.";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  { label: "Módszer", href: "/modszer" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Bemutatkozom", href: "/bemutatkozom" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export const navCta: NavItem = {
  label: "Nirmana Műhely",
  href: CIRCLE_URL,
  external: true,
};

export const footerNav: NavItem[] = [
  { label: "Módszer", href: "/modszer" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Bemutatkozom", href: "/bemutatkozom" },
  { label: "Nirmana Központ", href: "/kozpont" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export const footerLegalNav: NavItem[] = [
  { label: "Adatvédelem", href: "/adatvedelem" },
  { label: "Impresszum", href: "/impresszum" },
];

export const footerNote =
  "Nirmana Műhely – a Nirmana-módszer online gyakorlóközössége.";
