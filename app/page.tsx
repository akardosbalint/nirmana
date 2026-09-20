import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ConcentricCircles } from "@/components/ConcentricCircles";
import { home } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";
import { CIRCLE_URL } from "@/lib/config";

export const metadata = pageMetadata({
  title: "Nirmana-módszer",
  description:
    "A jóga 8 tagján keresztül vezet végig a valóság 3 rétegén, hogy a spirituális szintre ne csak eljuss, hanem ott is maradj, és onnan teremtsd meg az életet, amelyet élni akarsz.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-paper-dim">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:py-24 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="font-serif-display text-4xl leading-tight text-ink sm:text-5xl">
              {home.hero.title}
            </h1>
            <p className="mt-6 text-lg text-ink-soft">{home.hero.subtitle}</p>
            <p className="mt-4 font-serif-display text-xl italic text-accent-dark">
              {home.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={CIRCLE_URL} external>
                {home.hero.ctaPrimary}
              </Button>
              <Button href="/modszer" variant="secondary">
                {home.hero.ctaSecondary}
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <ConcentricCircles size={280} />
          </div>
        </div>
      </section>

      <Section>
        <h2 className="font-serif-display text-3xl text-ink">
          {home.layers.title}
        </h2>
        <p className="mt-3 text-ink-soft">{home.layers.intro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {home.layers.items.map((item) => (
            <Card key={item.title}>
              <h3 className="font-serif-display text-xl text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/modszer" variant="secondary">
            {home.layers.cta}
          </Button>
        </div>
      </Section>

      <Section tint>
        <h2 className="font-serif-display text-3xl text-ink">
          {home.muhely.title}
        </h2>
        <p className="mt-3 text-ink-soft">{home.muhely.text}</p>
        <div className="mt-6">
          <Button href="/szolgaltatasok/muhely" variant="secondary">
            {home.muhely.cta}
          </Button>
        </div>
      </Section>

      <Section>
        <h2 className="font-serif-display text-3xl text-ink">
          {home.balint.title}
        </h2>
        <p className="mt-3 text-ink-soft">{home.balint.text}</p>
        <div className="mt-6">
          <Button href="/bemutatkozom" variant="secondary">
            {home.balint.cta}
          </Button>
        </div>
      </Section>

      <Section tint className="max-w-3xl text-center">
        <h2 className="font-serif-display text-3xl text-ink">
          {home.closing.title}
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href={CIRCLE_URL} external>
            {home.closing.ctaPrimary}
          </Button>
          <Button href="/kapcsolat" variant="secondary">
            {home.closing.ctaSecondary}
          </Button>
        </div>
      </Section>
    </>
  );
}
