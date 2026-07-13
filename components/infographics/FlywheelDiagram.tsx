const nodes = [
  { point: [280, 90], label: ["Business", "Value"], anchor: "middle", dx: 0, dy: -22 },
  { point: [445, 185], label: ["Enterprise", "Value"], anchor: "start", dx: 20, dy: -4 },
  { point: [445, 375], label: ["Personal", "Wealth"], anchor: "start", dx: 20, dy: 4 },
  { point: [280, 470], label: ["Family", "Office"], anchor: "middle", dx: 0, dy: 34 },
  { point: [115, 375], label: ["Next", "Generation"], anchor: "end", dx: -20, dy: 4 },
  { point: [115, 185], label: ["New", "Investments"], anchor: "end", dx: -20, dy: -4 },
] as const;

const arcs = [
  "M280,90 A190,190 0 0,1 445,185",
  "M445,185 A190,190 0 0,1 445,375",
  "M445,375 A190,190 0 0,1 280,470",
  "M280,470 A190,190 0 0,1 115,375",
  "M115,375 A190,190 0 0,1 115,185",
  "M115,185 A190,190 0 0,1 280,90",
];

export function FlywheelDiagram() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="mx-auto flex w-full max-w-xl items-center justify-center">
        <svg viewBox="0 0 560 560" className="h-auto w-full" role="img" aria-label="The Lodestone Flywheel">
          <defs>
            <marker
              id="flywheel-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#9C7A42" />
            </marker>
          </defs>

          <circle cx="280" cy="280" r="140" fill="none" stroke="#AEA694" strokeWidth="1" opacity="0.35" />

          {arcs.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#9C7A42"
              strokeWidth="1"
              markerEnd="url(#flywheel-arrow)"
            />
          ))}

          {nodes.map((n, i) => (
            <g key={i}>
              <circle cx={n.point[0]} cy={n.point[1]} r="3.5" fill="#101E2E" />
              <text
                x={n.point[0] + n.dx}
                y={n.point[1] + n.dy}
                textAnchor={n.anchor}
                className="font-sans"
                fontSize="15"
                letterSpacing="0.01em"
                fill="#242320"
              >
                <tspan x={n.point[0] + n.dx} dy="0">
                  {n.label[0]}
                </tspan>
                <tspan x={n.point[0] + n.dx} dy="18">
                  {n.label[1]}
                </tspan>
              </text>
            </g>
          ))}
        </svg>
      </div>
      <p className="max-w-xl text-center font-sans text-[0.95rem] leading-relaxed text-charcoal/65">
        The businesses you build create wealth. The wealth you steward creates opportunity. The
        next generation builds on that foundation.
      </p>
    </div>
  );
}
