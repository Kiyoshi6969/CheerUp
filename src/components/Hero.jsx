import FairyLights from "./FairyLights.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <FairyLights />
      <div className="hero__content">
        <p className="hero__eyebrow">a small corner of the internet, just for you</p>
        <h1 className="hero__title">
          for the girl who lights up<br /> every room I'm in
        </h1>
        <p className="hero__subtitle">
          even on the days she forgets it herself.
        </p>
      </div>
      <a href="#letter" className="hero__scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
