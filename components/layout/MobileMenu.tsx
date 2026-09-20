"use client";

import { useEffect } from "react";
import { mainNav, navCta } from "@/content/site";
import { NavLink } from "./NavLink";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menü"
      className="fixed inset-0 top-16 z-40 bg-paper sm:hidden"
    >
      <nav
        aria-label="Mobil navigáció"
        className="flex h-full flex-col gap-6 px-6 py-10 text-lg"
      >
        {mainNav.map((item) => (
          <NavLink key={item.href} href={item.href} onClick={onClose}>
            {item.label}
          </NavLink>
        ))}
        <a
          href={navCta.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-paper"
        >
          {navCta.label}
          <span aria-hidden="true">↗</span>
          <span className="sr-only">(külső link, új lapon nyílik meg)</span>
        </a>
      </nav>
    </div>
  );
}
