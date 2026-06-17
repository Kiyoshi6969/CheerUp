import useInView from "../hooks/useInView.js";

const PARAGRAPHS = [
  "Hey Luvv. I know that right now, what you need most is a little space — some time that's just yours. That's more than okay. I'm not here to crowd it.",
  "But I needed you to know this one thing: whatever kind of day you're having, quiet or heavy or somewhere in between, I'm still right here. I'm not going anywhere.",
  "I put together this little corner of the internet just for you. It's nothing fancy, but it's full of us — and I hope even one small part of it gets a smile out of you.",
];

export default function Letter() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section id="letter" className="letter" ref={ref}>
      <div className={`letter__note ${inView ? "is-visible" : ""}`}>
        <p className="letter__kicker">a note, for you</p>
        {PARAGRAPHS.map((text, i) => (
          <p
            key={i}
            className="letter__paragraph"
            style={{ transitionDelay: `${0.25 + i * 0.35}s` }}
          >
            {text}
          </p>
        ))}
        <p className="letter__signoff" style={{ transitionDelay: `${0.25 + PARAGRAPHS.length * 0.35}s` }}>
          Take all the time you need, love. I'll be right here when you're ready.
          <br />
          I love you, always.
        </p>
      </div>
    </section>
  );
}
