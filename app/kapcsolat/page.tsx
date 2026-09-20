import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
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

        <div className="mt-8">
          <ContactForm />
        </div>

        <p className="mt-8 text-sm text-ink-soft">
          Vagy írj közvetlenül:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-accent-dark hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </Section>
    </>
  );
}
