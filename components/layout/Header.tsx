"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, navCta, siteName } from "@/content/site";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-serif-display text-lg text-ink whitespace-nowrap"
        >
          {siteName}
        </Link>

        <nav
          aria-label="Fő navigáció"
          className="hidden items-center gap-8 sm:flex"
        >
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href} className="text-sm">
              {item.label}
            </NavLink>
          ))}
          <a
            href={navCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-paper hover:bg-accent-dark"
          >
            {navCta.label}
            <span aria-hidden="true">↗</span>
            <span className="sr-only">(külső link, új lapon nyílik meg)</span>
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
