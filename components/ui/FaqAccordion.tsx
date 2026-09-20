export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-accent transition-transform duration-150 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
