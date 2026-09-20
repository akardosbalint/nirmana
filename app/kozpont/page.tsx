import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ConcentricCircles } from "@/components/ConcentricCircles";
import { kozpont } from "@/content/kozpont";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Nirmana Központ",
  description: "A Nirmana Központ hamarosan – fizikai hely a módszerhez.",
  path: "/kozpont",
});

export default function KozpontPage() {
  return (
    <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <ConcentricCircles size={200} />
      <p className="mt-8 text-sm uppercase tracking-widest text-accent-dark">
        {kozpont.lead}
      </p>
      <h1 className="mt-2 font-serif-display text-4xl text-ink">
        {kozpont.title}
      </h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">{kozpont.text}</p>
      <div className="mt-8">
        <Button href="/" variant="secondary">
          {kozpont.backCta}
        </Button>
      </div>
    </Section>
  );
}
