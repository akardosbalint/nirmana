"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setErrorMessage(body?.error ?? "Nem sikerült elküldeni az üzenetet.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Hálózati hiba történt. Próbáld újra.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-lg border border-line bg-paper-dim px-4 py-3 text-ink-soft"
      >
        Köszönöm az üzeneted, hamarosan válaszolok!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot mező: valódi látogatók nem látják, robotok gyakran kitöltik. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Cég</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Neved
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-lg border border-line bg-white/60 px-3 py-2 text-ink placeholder:text-ink-soft/60 focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          E-mail címed
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-lg border border-line bg-white/60 px-3 py-2 text-ink placeholder:text-ink-soft/60 focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink"
        >
          Üzeneted
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-line bg-white/60 px-3 py-2 text-ink placeholder:text-ink-soft/60 focus:border-accent focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-accent-dark">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-medium text-paper transition-colors duration-150 hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "sending" ? "Küldés…" : "Üzenet küldése"}
      </button>
    </form>
  );
}
