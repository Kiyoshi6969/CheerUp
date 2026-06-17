import { useMemo } from "react";

/**
 * Signature ambient layer: a soft string of fairy lights (echoing the
 * campsite photo) draped across the top of the hero, plus slow drifting
 * specks of light. Pure CSS/SVG, no external assets, GPU-cheap.
 */
export default function FairyLights() {
  const bulbs = useMemo(() => {
    const count = 14;
    return Array.from({ length: count }, (_, i) => {
      const x = (i / (count - 1)) * 100;
      const y = 6 + Math.sin((i / (count - 1)) * Math.PI) * 10;
      return { x, y, delay: (i * 0.37) % 3 };
    });
  }, []);

  const motes = useMemo(() => {
    return Array.from({ length: 16 }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 9 + Math.random() * 8,
      size: 2 + Math.random() * 3,
    }));
  }, []);

  return (
    <div className="fairy-lights" aria-hidden="true">
      <svg className="fairy-lights__wire" viewBox="0 0 100 20" preserveAspectRatio="none">
        <polyline
          points={bulbs.map((b) => `${b.x},${b.y}`).join(" ")}
          fill="none"
          stroke="rgba(243,200,159,0.35)"
          strokeWidth="0.3"
        />
      </svg>
      {bulbs.map((b, i) => (
        <span
          key={i}
          className="fairy-lights__bulb"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
      {motes.map((m, i) => (
        <span
          key={i}
          className="fairy-lights__mote"
          style={{
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
