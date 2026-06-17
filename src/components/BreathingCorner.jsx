import { useEffect, useRef, useState } from "react";

const PHASES = [
  { key: "in", label: "breathe in", ms: 4000 },
  { key: "hold", label: "hold", ms: 2000 },
  { key: "out", label: "and let it go", ms: 4000 },
];

export default function BreathingCorner() {
  const [active, setActive] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const current = PHASES[phaseIndex];
    timerRef.current = setTimeout(() => {
      setPhaseIndex((i) => (i + 1) % PHASES.length);
    }, current.ms);
    return () => clearTimeout(timerRef.current);
  }, [active, phaseIndex]);

  function toggle() {
    if (active) {
      setActive(false);
      clearTimeout(timerRef.current);
      setPhaseIndex(0);
    } else {
      setActive(true);
    }
  }

  const phase = PHASES[phaseIndex];

  return (
    <section className="calm" id="calm">
      <p className="calm__kicker">if you need a minute</p>
      <h2 className="calm__title">just breathe with me for a bit</h2>
      <p className="calm__subtitle">
        no rush. follow the circle, in and out, for as long as you want.
      </p>

      <button
        className={`calm__circle calm__circle--${active ? phase.key : "idle"}`}
        onClick={toggle}
      >
        <span className="calm__circle-label">
          {active ? phase.label : "tap to begin"}
        </span>
      </button>
    </section>
  );
}
