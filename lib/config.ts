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

// Szerveroldali (nem publikus) beállítások a kapcsolatűrlaphoz.
// TODO: RESEND_API_KEY beállítása a Vercel projekt env változói között.
export const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";

// TODO: saját, Resendben hitelesített domain esetén cseréld le (pl. kapcsolat@nirmanamodszer.hu).
// Amíg nincs hitelesített domain, a Resend teszt feladója csak a Resend-fiók saját
// e-mail címére tud kézbesíteni.
export const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
