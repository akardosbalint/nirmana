import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { muhely } from "@/content/muhely";
import { pageMetadata } from "@/lib/metadata";
import { CIRCLE_URL } from "@/lib/config";

export const metadata = pageMetadata({
  title: "Nirmana Műhely",
  description:
    "A Nirmana-módszer online gyakorlóközössége: modulok, gyakorlótár, heti közös gyakorlás és csomagok.",
  path: "/szolgaltatasok/muhely",
});

export default function MuhelyPage() {
  return (
    <>
      <PageHeader title={muhely.header.title} lead={muhely.header.lead} />

      <Section className="max-w-3xl">
        <p className="text-lg text-ink-soft">{muhely.intro}</p>
      </Section>

      <Section tint className="max-w-4xl">
        <h2 className="font-serif-display text-2xl text-ink">
          {muhely.hogyanMukodik.title}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {muhely.hogyanMukodik.items.map((item) => (
            <Card key={item.title}>
              <h3 className="font-serif-display text-lg text-ink">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="max-w-4xl">
        <h2 className="font-serif-display text-2xl text-ink">
          {muhely.csomagok.title}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="font-serif-display text-xl text-ink">
              {muhely.csomagok.current.name}
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              {muhely.csomagok.current.text}
            </p>
            <div className="mt-6">
              <Button href={muhely.csomagok.current.href} external>
                Csatlakozom
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col opacity-70">
            <span className="mb-2 w-fit rounded-full bg-paper-dim px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent-dark">
              Hamarosan
            </span>
            <h3 className="font-serif-display text-xl text-ink">
              {muhely.csomagok.upcoming.name}
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              {muhely.csomagok.upcoming.text}
            </p>
          </Card>
        </div>
      </Section>

      <Section tint className="max-w-3xl">
        <h2 className="font-serif-display text-2xl text-ink">
          {muhely.konzultacio.title}
        </h2>
        <p className="mt-3 text-ink-soft">{muhely.konzultacio.text}</p>
      </Section>

      <Section className="max-w-3xl">
        <h2 className="font-serif-display text-2xl text-ink">
          {muhely.faq.title}
        </h2>
        <div className="mt-6">
          <FaqAccordion items={muhely.faq.items} />
        </div>
      </Section>

      <Section tint className="max-w-3xl text-center">
        <h2 className="font-serif-display text-3xl text-ink">
          {muhely.closing.title}
        </h2>
        <div className="mt-6">
          <Button href={CIRCLE_URL} external>
            {muhely.closing.cta}
          </Button>
        </div>
      </Section>
    </>
  );
}
