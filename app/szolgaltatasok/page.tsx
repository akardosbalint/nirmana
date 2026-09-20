import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { szolgaltatasok } from "@/content/szolgaltatasok";
import { pageMetadata } from "@/lib/metadata";
import { CIRCLE_URL } from "@/lib/config";

export const metadata = pageMetadata({
  title: "Szolgáltatások",
  description:
    "A Nirmana Műhely online gyakorlóközössége és a hamarosan nyíló Nirmana Központ.",
  path: "/szolgaltatasok",
});

export default function SzolgaltatasokPage() {
  return (
    <>
      <PageHeader
        title={szolgaltatasok.header.title}
        lead={szolgaltatasok.header.lead}
      />

      <Section className="max-w-4xl">
        <div className="grid gap-6 sm:grid-cols-2">
          {szolgaltatasok.cards.map((card) => (
            <Card key={card.id} className="flex flex-col">
              {card.status ? (
                <span className="mb-3 w-fit rounded-full bg-paper-dim px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent-dark">
                  {card.status}
                </span>
              ) : null}
              <h2 className="font-serif-display text-2xl text-ink">
                {card.title}
              </h2>
              <p className="mt-2 text-ink-soft">{card.text}</p>
              {card.features.length > 0 ? (
                <ul className="mt-4 space-y-1 text-sm text-ink-soft">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span aria-hidden="true" className="text-accent">
                        ·
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={card.primaryCta.href} variant="secondary">
                  {card.primaryCta.label}
                </Button>
                {card.secondaryCta ? (
                  <Button href={CIRCLE_URL} external>
                    {card.secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
