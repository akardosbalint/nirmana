// Központi hely a külső linkekhez és a site-szintű beállításokhoz.
// Env-változóval felülírhatók, alapértelmezettel esnek vissza.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://nirmanamodszer.hu";

export const CIRCLE_URL =
  process.env.NEXT_PUBLIC_CIRCLE_URL ?? "https://muhely.nirmanamodszer.hu";

// TODO: külön checkout linkek, ha elkészülnek – addig a Műhely főoldalára mutatnak.
export const CHECKOUT_ALAP_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_ALAP_URL ?? CIRCLE_URL;

export const CHECKOUT_HALADO_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_HALADO_URL ?? CIRCLE_URL;

// TODO: végleges kapcsolati e-mail cím megadása.
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "TODO@nirmanamodszer.hu";
