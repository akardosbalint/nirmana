"use client";

import { useEffect, useRef, useState } from "react";

type YogaNode = {
  id: string;
  label: string;
  description: string;
  angle: number;
  ringRadius: number;
  labelRadius: number;
  bridge?: boolean;
};

const OUTER_R = 190;
const MIDDLE_R = 125;
const CENTER_R = 60;
const CX = 220;
const CY = 220;

const VIEWBOX_MIN_X = 0;
const VIEWBOX_MIN_Y = -30;
const VIEWBOX_W = 440;
const VIEWBOX_H = 470;

const nodes: YogaNode[] = [
  {
    id: "yama",
    label: "Yama",
    description: "Etikai önmegtartóztatások – hogyan viszonyulsz a világhoz.",
    angle: 60,
    ringRadius: OUTER_R,
    labelRadius: OUTER_R + 22,
  },
  {
    id: "niyama",
    label: "Niyama",
    description: "Önfegyelem, belső szokások – hogyan viszonyulsz magadhoz.",
    angle: 90,
    ringRadius: OUTER_R,
    labelRadius: OUTER_R + 22,
  },
  {
    id: "aszana",
    label: "Ászana",
    description: "Testtartások – a fizikai gyakorlás alapja.",
    angle: 120,
    ringRadius: OUTER_R,
    labelRadius: OUTER_R + 22,
  },
  {
    id: "pranajama",
    label: "Pránájáma",
    description:
      "Híd a Materiális és a Mentális réteg között: légzés, idegrendszer-szabályozás – ez köti össze a testet az elmével.",
    angle: 270,
    ringRadius: (OUTER_R + MIDDLE_R) / 2,
    labelRadius: OUTER_R + 30,
    bridge: true,
  },
  {
    id: "pratjahara",
    label: "Pratjáhára",
    description: "Az érzékek visszavonása, a figyelem befelé fordítása.",
    angle: 350,
    ringRadius: MIDDLE_R,
    labelRadius: MIDDLE_R + 22,
  },
  {
    id: "dharana",
    label: "Dháraná",
    description: "Koncentráció, a figyelem egy pontra rögzítése.",
    angle: 10,
    ringRadius: MIDDLE_R,
    labelRadius: MIDDLE_R + 22,
  },
  {
    id: "dhjana",
    label: "Dhjána",
    description: "Folyamatos, megszakítás nélküli meditáció.",
    angle: 160,
    ringRadius: CENTER_R,
    labelRadius: CENTER_R + 20,
  },
  {
    id: "szamadhi",
    label: "Számádhi",
    description: "Egyesülés, tiszta tudatosság.",
    angle: 200,
    ringRadius: CENTER_R,
    labelRadius: CENTER_R + 20,
  },
];

function polar(r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function toPercent(point: { x: number; y: number }) {
  return {
    left: `${((point.x - VIEWBOX_MIN_X) / VIEWBOX_W) * 100}%`,
    top: `${((point.y - VIEWBOX_MIN_Y) / VIEWBOX_H) * 100}%`,
  };
}

export function MethodDiagram({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [supportsHover] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });

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
  const activeNode = nodes.find((n) => n.id === activeId) ?? null;

  return (
    <div
      ref={ref}
      className={`diagram-fade-in ${visible ? "is-visible" : ""} ${className}`}
    >
      <div className="relative mx-auto max-w-md">
        <svg
          viewBox={`${VIEWBOX_MIN_X} ${VIEWBOX_MIN_Y} ${VIEWBOX_W} ${VIEWBOX_H}`}
          className="h-auto w-full"
          aria-hidden="true"
          focusable="false"
        >
          <circle
            cx={CX}
            cy={CY}
            r={OUTER_R}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth="1.5"
          />
          <circle
            cx={CX}
            cy={CY}
            r={MIDDLE_R}
            fill="none"
            stroke="var(--color-ink-soft)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <circle cx={CX} cy={CY} r={CENTER_R} fill="var(--color-accent)" />

          {/* Pránájáma: híd a materiális és a mentális réteg között */}
          <line
            className="bridge-flow-line"
            x1={bridgeOuter.x}
            y1={bridgeOuter.y}
            x2={bridgeInner.x}
            y2={bridgeInner.y}
            stroke="var(--color-accent)"
            strokeWidth={activeId === "pranajama" ? 2.5 : 2}
            strokeDasharray="5 5"
            strokeLinecap="round"
          />

          {nodes.map((node) => {
            const point = node.bridge ? bridgeOuter : polar(node.ringRadius, node.angle);
            const labelPoint = polar(node.labelRadius, node.angle);
            const cos = Math.cos((node.angle * Math.PI) / 180);
            const textAnchor =
              cos > 0.25 ? "start" : cos < -0.25 ? "end" : "middle";
            const isActive = activeId === node.id;

            return (
              <g key={node.id}>
                {!node.bridge && (
                  <line
                    className="diagram-tick"
                    x1={point.x}
                    y1={point.y}
                    x2={labelPoint.x}
                    y2={labelPoint.y}
                    stroke={isActive ? "var(--color-accent)" : "var(--color-line)"}
                    strokeWidth={isActive ? 1.5 : 1}
                  />
                )}
                <circle
                  className="diagram-dot"
                  cx={point.x}
                  cy={point.y}
                  r={isActive ? 6 : 3.5}
                  fill="var(--color-accent)"
                />
                {node.bridge && (
                  <text
                    x={labelPoint.x}
                    y={labelPoint.y - 13}
                    textAnchor="middle"
                    fontSize="10"
                    letterSpacing="1"
                    fill="var(--color-accent-dark)"
                  >
                    HÍD
                  </text>
                )}
                <text
                  className="diagram-label"
                  x={labelPoint.x}
                  y={labelPoint.y}
                  textAnchor={textAnchor}
                  dominantBaseline="middle"
                  fontSize="13"
                  fontWeight={isActive ? 600 : 400}
                  fill={isActive ? "var(--color-accent-dark)" : "var(--color-ink)"}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {nodes.map((node) => {
          const point = node.bridge ? bridgeOuter : polar(node.ringRadius, node.angle);
          const hitPoint = node.bridge
            ? polar((OUTER_R + MIDDLE_R) / 2, 270)
            : point;
          const pos = toPercent(hitPoint);
          return (
            <button
              key={node.id}
              type="button"
              className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={pos}
              aria-label={`${node.label}: ${node.description}`}
              onMouseEnter={() => supportsHover && setActiveId(node.id)}
              onMouseLeave={() =>
                supportsHover &&
                setActiveId((cur) => (cur === node.id ? null : cur))
              }
              onFocus={() => setActiveId(node.id)}
              onBlur={() => setActiveId((cur) => (cur === node.id ? null : cur))}
              onClick={() => setActiveId(node.id)}
            />
          );
        })}

        {activeNode && (
          <div
            role="tooltip"
            className="diagram-tooltip pointer-events-none absolute left-1/2 z-10 w-48 rounded-lg border border-line bg-paper px-3 py-2 text-xs leading-snug text-ink shadow-md"
            style={(() => {
              const anchor = activeNode.bridge
                ? polar((OUTER_R + MIDDLE_R) / 2, 270)
                : polar(activeNode.ringRadius, activeNode.angle);
              const pos = toPercent(anchor);
              const sin = Math.sin((activeNode.angle * Math.PI) / 180);
              const translateY = sin < -0.3 ? "12px" : "calc(-100% - 12px)";
              return {
                top: pos.top,
                transform: `translate(-50%, ${translateY})`,
              };
            })()}
          >
            <p className="font-serif-display text-sm text-ink">
              {activeNode.label}
            </p>
            <p className="mt-1 text-ink-soft">{activeNode.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
