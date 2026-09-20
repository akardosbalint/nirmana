import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { bemutatkozom } from "@/content/bemutatkozom";
import { pageMetadata } from "@/lib/metadata";
import { CIRCLE_URL } from "@/lib/config";

export const metadata = pageMetadata({
  title: "Bemutatkozom",
  description: "Bálint története és a Nirmana-módszer háttere.",
  path: "/bemutatkozom",
});

export default function BemutatkozomPage() {
  return (
    <>
      <PageHeader
        title={bemutatkozom.header.title}
        lead={bemutatkozom.header.lead}
      />

      <Section className="max-w-2xl">
        {bemutatkozom.paragraphs.map((p) => (
          <p key={p} className="mt-4 text-lg text-ink-soft first:mt-0">
            {p}
          </p>
        ))}
      </Section>

      <Section tint className="max-w-3xl text-center">
        <h2 className="font-serif-display text-2xl text-ink">
          {bemutatkozom.cta.title}
        </h2>
        <div className="mt-6">
          <Button href={CIRCLE_URL} external>
            {bemutatkozom.cta.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
