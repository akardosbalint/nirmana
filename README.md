# nirmanamodszer.hu

A Nirmana-módszer márkaoldala. Next.js (App Router) + TypeScript + Tailwind CSS, statikusan generálva (SSG), backend és süti nélkül.

## Fejlesztés

```bash
npm install
npm run dev
```

Nyisd meg: [http://localhost:3000](http://localhost:3000)

## Tartalom szerkesztése

Minden látható szöveg a `content/` mappában van, oldalanként egy fájlban (pl. `content/modszer.ts`). A komponensek (`components/`, `app/**/page.tsx`) bogarászása nélkül is szerkeszthető.

## Konfiguráció

Külső linkek és elérhetőségek a `lib/config.ts`-ben, env-változókkal felülírhatók:

| Env változó | Alapértelmezett |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://nirmanamodszer.hu` |
| `NEXT_PUBLIC_CIRCLE_URL` | `https://muhely.nirmanamodszer.hu` |
| `NEXT_PUBLIC_CHECKOUT_ALAP_URL` | a Circle URL-re esik vissza (TODO) |
| `NEXT_PUBLIC_CHECKOUT_HALADO_URL` | a Circle URL-re esik vissza (TODO) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `TODO@nirmanamodszer.hu` (TODO) |

## Build

```bash
npm run build
```

Statikus oldalak generálódnak minden route-hoz (App Router SSG).

## Deploy

A projekt Vercelre van optimalizálva (`vercel.json` nélkül is működik az alapértelmezett Next.js preset-tel).
