import { type ElementType, type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  tint?: boolean;
};

export function Section({
  children,
  className = "max-w-3xl",
  as: Tag = "section",
  tint = false,
}: SectionProps) {
  return (
    <Tag className={`${tint ? "bg-paper-dim" : ""} py-16 sm:py-24`}>
      <div className={`mx-auto px-6 ${className}`}>{children}</div>
    </Tag>
  );
}
