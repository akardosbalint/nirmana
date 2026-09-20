import { type ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  lead?: string;
  children?: ReactNode;
};

export function PageHeader({ title, lead, children }: PageHeaderProps) {
  return (
    <header className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h1 className="font-serif-display text-4xl sm:text-5xl text-ink">
          {title}
        </h1>
        {lead ? (
          <p className="mt-4 max-w-xl text-lg text-ink-soft">{lead}</p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
