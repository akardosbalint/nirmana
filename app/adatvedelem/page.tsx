import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { adatvedelem } from "@/content/jog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Adatvédelem",
  description: "Adatvédelmi tájékoztató.",
  path: "/adatvedelem",
});

export default function AdatvedelemPage() {
  return (
    <>
      <PageHeader title={adatvedelem.title} />
      <Section className="max-w-2xl">
        <p className="text-ink-soft">{adatvedelem.text}</p>
      </Section>
    </>
  );
}
