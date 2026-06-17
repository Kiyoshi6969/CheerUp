import { useRef, useState } from "react";

let idCounter = 0;

export default function Closing() {
  const [hearts, setHearts] = useState([]);
  const [sent, setSent] = useState(false);
  const timeoutRef = useRef(null);

  function sendHug() {
    const batch = Array.from({ length: 10 }, () => ({
      id: idCounter++,
      left: 38 + Math.random() * 24,
      drift: (Math.random() - 0.5) * 60,
      delay: Math.random() * 0.4,
      duration: 2.2 + Math.random() * 1.2,
      size: 14 + Math.random() * 16,
    }));
    setHearts((h) => [...h, ...batch]);
    setSent(true);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHearts([]);
    }, 3600);
  }

  return (
    <section className="closing" id="closing">
      <div className="closing__hearts" aria-hidden="true">
        {hearts.map((h) => (
          <span
            key={h.id}
            className="closing__heart"
            style={{
              left: `${h.left}%`,
              fontSize: `${h.size}px`,
              animationDelay: `${h.delay}s`,
              animationDuration: `${h.duration}s`,
              "--drift": `${h.drift}px`,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <p className="closing__kicker">last thing, promise</p>
      <h2 className="closing__title">I'm always here for you my luvv!</h2>
      <p className="closing__subtitle">
        cheer up a little, love — even just a little is enough for now.
      </p>

      <button className="closing__button" onClick={sendHug}>
        {sent ? "sending another one →" : "tap for a hug"}
      </button>
    </section>
  );
}
