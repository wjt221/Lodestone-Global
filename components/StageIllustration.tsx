import { ReactElement } from "react";
import { StageId } from "./stages";

function GovernScene() {
  return (
    <>
      <ellipse cx="200" cy="230" rx="130" ry="58" fill="none" stroke="#0C1B2A" strokeWidth="1.2" />
      <line x1="90" y1="230" x2="310" y2="230" stroke="#8C6A3D" strokeWidth="0.8" />
      {[-100, -60, -20, 20, 60, 100].map((x) => (
        <rect key={`t-${x}`} x={200 + x - 7} y="160" width="14" height="8" fill="none" stroke="#A99C87" strokeWidth="1" />
      ))}
      {[-100, -60, -20, 20, 60, 100].map((x) => (
        <rect key={`b-${x}`} x={200 + x - 7} y="292" width="14" height="8" fill="none" stroke="#A99C87" strokeWidth="1" />
      ))}
    </>
  );
}

function ScaleScene() {
  return (
    <>
      <path
        d="M20 340 L90 250 L140 300 L200 190 L260 280 L320 210 L380 340 Z"
        fill="none"
        stroke="#A99C87"
        strokeWidth="1"
      />
      <path
        d="M20 380 L110 300 L170 340 L230 250 L300 320 L380 260 L380 380 Z"
        fill="none"
        stroke="#0C1B2A"
        strokeWidth="1.2"
      />
      <circle cx="200" cy="190" r="3.5" fill="#8C6A3D" />
      <path d="M60 230 L200 190" fill="none" stroke="#8C6A3D" strokeWidth="0.8" strokeDasharray="2 4" />
    </>
  );
}

function CompoundScene() {
  const points: [number, number][] = [];
  const cx = 200;
  const cy = 260;
  const turns = 2.75;
  const maxAngle = turns * 360;
  for (let i = 0; i <= maxAngle; i += 6) {
    const angle = (i * Math.PI) / 180;
    const r = 6 + (i / maxAngle) * 140;
    points.push([cx + r * Math.cos(angle), cy - r * Math.sin(angle)]);
  }
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const last = points[points.length - 1];
  return (
    <>
      <line x1="40" y1="400" x2="360" y2="400" stroke="#A99C87" strokeWidth="0.8" />
      <path d={d} fill="none" stroke="#0C1B2A" strokeWidth="1.2" />
      <circle cx={last[0]} cy={last[1]} r="3.5" fill="#8C6A3D" />
    </>
  );
}

function StewardScene() {
  return (
    <>
      <line x1="40" y1="340" x2="360" y2="340" stroke="#A99C87" strokeWidth="0.8" />
      <path d="M200 340 L200 230" fill="none" stroke="#0C1B2A" strokeWidth="1.4" />
      <circle cx="200" cy="180" r="52" fill="none" stroke="#0C1B2A" strokeWidth="1.1" />
      <circle cx="155" cy="205" r="34" fill="none" stroke="#0C1B2A" strokeWidth="1.1" />
      <circle cx="245" cy="205" r="34" fill="none" stroke="#0C1B2A" strokeWidth="1.1" />
      <path d="M200 340 L160 380 M200 340 L240 380 M200 340 L200 385" fill="none" stroke="#8C6A3D" strokeWidth="1" />
    </>
  );
}

const scenes: Record<StageId, () => ReactElement> = {
  govern: GovernScene,
  scale: ScaleScene,
  compound: CompoundScene,
  steward: StewardScene,
};

export function StageIllustration({ stage, className = "" }: { stage: StageId; className?: string }) {
  const Scene = scenes[stage];
  return (
    <div className={`border border-charcoal/15 bg-parchment/50 ${className}`}>
      <svg viewBox="0 0 400 500" className="h-full w-full" role="presentation" aria-hidden>
        <Scene />
      </svg>
    </div>
  );
}
