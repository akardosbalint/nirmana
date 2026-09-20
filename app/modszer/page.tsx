import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { MethodDiagram } from "@/components/MethodDiagram";
import { modszer } from "@/content/modszer";
import { pageMetadata } from "@/lib/metadata";
import { CIRCLE_URL } from "@/lib/config";

export const metadata = pageMetadata({
  title: "A Nirmana-módszer",
  description:
    "A valóság 3 rétege és a jóga 8 tagja: a Nirmana-módszer részletesen, a materiálistól a spirituálisig.",
  path: "/modszer",
});

export default function ModszerPage() {
  return (
    <>
      <PageHeader title={modszer.header.title} lead={modszer.header.lead} />

      <Section className="max-w-3xl">
        {modszer.intro.map((p) => (
          <p key={p} className="mt-4 text-lg text-ink-soft first:mt-0">
            {p}
          </p>
        ))}
      </Section>

      <Section tint className="max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            {modszer.layers.map((layer) =>
              layer.bridge ? (
                <div
                  key={layer.id}
                  className="border-l-2 border-line pl-5"
                >
                  <p className="text-sm uppercase tracking-wide text-accent-dark">
                    Híd
                  </p>
                  <h3 className="mt-1 font-serif-display text-xl text-ink">
                    {layer.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{layer.text}</p>
                </div>
              ) : (
                <div key={layer.id}>
                  <p className="text-sm uppercase tracking-wide text-accent-dark">
                    {layer.number}. réteg
                  </p>
                  <h3 className="mt-1 font-serif-display text-2xl text-ink">
                    {layer.title}
                  </h3>
                  <p className="mt-2 text-ink-soft">{layer.text}</p>
                  {layer.tags ? (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {layer.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-line px-3 py-1 text-sm text-ink"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {layer.tagNotes ? (
                    <ul className="mt-3 space-y-1 text-sm text-ink-soft">
                      {layer.tagNotes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ),
            )}
          </div>
          <MethodDiagram />
        </div>
      </Section>

      <Section className="max-w-3xl">
        <h2 className="font-serif-display text-2xl text-ink">
          {modszer.origin.title}
        </h2>
        <p className="mt-3 text-ink-soft">{modszer.origin.text}</p>
      </Section>

      <Section tint className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-wide text-accent-dark">
          {modszer.closing.title}
        </p>
        <h2 className="mt-1 font-serif-display text-3xl text-ink">
          {modszer.closing.subtitle}
        </h2>
        <div className="mt-6">
          <Button href={CIRCLE_URL} external>
            {modszer.closing.cta}
          </Button>
        </div>
      </Section>
    </>
  );
}
