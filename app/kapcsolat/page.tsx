import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { kapcsolat } from "@/content/kapcsolat";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata = pageMetadata({
  title: "Kapcsolat",
  description: "Kérdésed van a Nirmana-módszerről vagy a Nirmana Műhelyről? Írj e-mailt.",
  path: "/kapcsolat",
});

export default function KapcsolatPage() {
  return (
    <>
      <PageHeader
        title={kapcsolat.header.title}
        lead={kapcsolat.header.lead}
      />
      <Section className="max-w-xl">
        <p className="text-lg text-ink-soft">{kapcsolat.text}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-medium text-paper hover:bg-accent-dark min-h-12"
        >
          {kapcsolat.emailLabel}
        </a>
        <p className="mt-3 text-sm text-ink-soft">{CONTACT_EMAIL}</p>
      </Section>
    </>
  );
}
