"use client";

import { useEffect, useRef, useState } from "react";

type Node = {
  angle: number;
  radius: number;
  label: string;
  ringRadius: number;
};

const OUTER_R = 190;
const MIDDLE_R = 125;
const CENTER_R = 60;

const nodes: Node[] = [
  { angle: 60, radius: OUTER_R, ringRadius: OUTER_R, label: "Yama" },
  { angle: 90, radius: OUTER_R, ringRadius: OUTER_R, label: "Niyama" },
  { angle: 120, radius: OUTER_R, ringRadius: OUTER_R, label: "Ászana" },
  { angle: 350, radius: MIDDLE_R, ringRadius: MIDDLE_R, label: "Pratjáhára" },
  { angle: 10, radius: MIDDLE_R, ringRadius: MIDDLE_R, label: "Dháraná" },
  { angle: 160, radius: CENTER_R + 20, ringRadius: CENTER_R, label: "Dhjána" },
  {
    angle: 200,
    radius: CENTER_R + 20,
    ringRadius: CENTER_R,
    label: "Számádhi",
  },
];

function polar(r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 220 + r * Math.cos(rad), y: 220 + r * Math.sin(rad) };
}

export function MethodDiagram({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bridgeOuter = polar(OUTER_R, 270);
  const bridgeInner = polar(MIDDLE_R, 270);
  const bridgeLabel = polar(OUTER_R + 24, 270);

  return (
    <div
      ref={ref}
      className={`diagram-fade-in ${visible ? "is-visible" : ""} ${className}`}
    >
      <svg
        viewBox="0 -30 440 470"
        className="h-auto w-full max-w-md mx-auto"
        aria-hidden="true"
        focusable="false"
      >
        <circle
          cx="220"
          cy="220"
          r={OUTER_R}
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1.5"
        />
        <circle
          cx="220"
          cy="220"
          r={MIDDLE_R}
          fill="none"
          stroke="var(--color-ink-soft)"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <circle cx="220" cy="220" r={CENTER_R} fill="var(--color-accent)" />

        <line
          x1={bridgeOuter.x}
          y1={bridgeOuter.y}
          x2={bridgeInner.x}
          y2={bridgeInner.y}
          stroke="var(--color-ink-soft)"
          strokeWidth="1"
        />
        <circle
          cx={bridgeOuter.x}
          cy={bridgeOuter.y}
          r="3"
          fill="var(--color-ink-soft)"
        />
        <text
          x={bridgeLabel.x}
          y={bridgeLabel.y}
          textAnchor="middle"
          fontSize="12"
          fill="var(--color-ink-soft)"
        >
          Pránájáma
        </text>

        {nodes.map((node) => {
          const point = polar(node.ringRadius, node.angle);
          const labelPoint = polar(node.radius + 22, node.angle);
          const cos = Math.cos((node.angle * Math.PI) / 180);
          const textAnchor = cos > 0.25 ? "start" : cos < -0.25 ? "end" : "middle";
          return (
            <g key={node.label}>
              <line
                x1={point.x}
                y1={point.y}
                x2={labelPoint.x}
                y2={labelPoint.y}
                stroke="var(--color-line)"
                strokeWidth="1"
              />
              <circle cx={point.x} cy={point.y} r="3" fill="var(--color-accent)" />
              <text
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor={textAnchor}
                dominantBaseline="middle"
                fontSize="13"
                fill="var(--color-ink)"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
