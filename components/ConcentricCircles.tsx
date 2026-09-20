"use client";

import { useEffect, useRef, useState } from "react";

type ConcentricCirclesProps = {
  className?: string;
  size?: number;
};

export function ConcentricCircles({
  className = "",
  size = 320,
}: ConcentricCirclesProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        className={`origin-center ${inView ? "animate-spin-slow" : ""}`}
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="var(--color-line)"
        strokeWidth="1.5"
      />
      <circle
        className={`origin-center ${inView ? "animate-spin-slow-reverse" : ""}`}
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="var(--color-ink-soft)"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <circle cx="100" cy="100" r="28" fill="var(--color-accent)" />
    </svg>
  );
}
