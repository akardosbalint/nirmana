import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL, CONTACT_FROM_EMAIL, RESEND_API_KEY } from "@/lib/config";

export const runtime = "nodejs";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Érvénytelen kérés." }, { status: 400 });
  }

  const { name, email, message, company } = body as Record<string, unknown>;

  // Honeypot: a "company" mezőt a valódi látogatók nem látják és nem töltik ki.
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !isValidEmail(email)
  ) {
    return NextResponse.json(
      { error: "Hiányzó vagy érvénytelen mezők." },
      { status: 400 },
    );
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY nincs beállítva.");
    return NextResponse.json(
      { error: "Az űrlap jelenleg nincs beüzemelve. Írj e-mailt közvetlenül." },
      { status: 503 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: `Nirmana-módszer kapcsolat <${CONTACT_FROM_EMAIL}>`,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Új üzenet a nirmanamodszer.hu kapcsolat űrlapról – ${name}`,
    text: `Név: ${name}\nE-mail: ${email}\n\nÜzenet:\n${message}`,
  });

  if (error) {
    console.error("Resend hiba:", error);
    return NextResponse.json(
      { error: "Nem sikerült elküldeni az üzenetet. Próbáld újra később." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
