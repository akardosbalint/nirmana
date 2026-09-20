import Link from "next/link";
import { CIRCLE_URL } from "@/lib/config";
import {
  footerLegalNav,
  footerNav,
  footerNote,
  siteName,
} from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-serif-display text-lg text-ink">{siteName}</p>
            <p className="mt-2 max-w-xs text-sm text-ink-soft">
              {footerNote}
            </p>
            <a
              href={CIRCLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark hover:underline"
            >
              Nirmana Műhely
              <span aria-hidden="true">↗</span>
              <span className="sr-only">
                (külső link, új lapon nyílik meg)
              </span>
            </a>
          </div>

          <nav aria-label="Lábléc navigáció" className="flex flex-col gap-2 text-sm">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink-soft hover:text-accent-dark"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteName}
          </p>
          <nav aria-label="Jogi navigáció" className="flex gap-4">
            {footerLegalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-accent-dark">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
