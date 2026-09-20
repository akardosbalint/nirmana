import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ConcentricCircles } from "@/components/ConcentricCircles";

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <ConcentricCircles size={180} />
      <p className="mt-8 text-sm uppercase tracking-widest text-accent-dark">
        404
      </p>
      <h1 className="mt-2 font-serif-display text-4xl text-ink">
        Ez az oldal nem található
      </h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">
        Úgy tűnik, erre az útra még nem vezet gyakorlás. Indulj vissza a
        főoldalról.
      </p>
      <div className="mt-8">
        <Button href="/">Vissza a főoldalra</Button>
      </div>
    </Section>
  );
}
