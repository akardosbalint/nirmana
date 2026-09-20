import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { impresszum } from "@/content/jog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Impresszum",
  description: "Impresszum.",
  path: "/impresszum",
});

export default function ImpresszumPage() {
  return (
    <>
      <PageHeader title={impresszum.title} />
      <Section className="max-w-2xl">
        <p className="text-ink-soft">{impresszum.text}</p>
      </Section>
    </>
  );
}
