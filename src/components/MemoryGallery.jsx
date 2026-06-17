import { useState } from "react";

const MEMORIES = [
  {
    src: "/images/elevator.jpg",
    alt: "Mirror selfie in an elevator",
    tag: "the elevator selfie era",
    note: "You throw a peace sign in literally every elevator. I've counted. At least eleven.",
  },
  {
    src: "/images/lights.jpg",
    alt: "Hugging under string lights at night",
    tag: "fairy lights, and you",
    note: "Pretty sure you outshined every single one of those lights that night.",
  },
  {
    src: "/images/carselfie.jpg",
    alt: "Close selfie leaning on each other by the car",
    tag: "the 'about to head home' selfie",
    note: "98% of our photos happen in or next to a car. Should we fix that? Nah.",
  },
  {
    src: "/images/silly.jpg",
    alt: "Making silly faces for a selfie",
    tag: "exhibit A: the faces we make",
    note: "This, apparently, is what true love looks like.",
  },
];

function PolaroidCard({ memory, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      className={`polaroid ${flipped ? "is-flipped" : ""}`}
      style={{ "--tilt": `${index % 2 === 0 ? -1 : 1}` }}
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${memory.tag}. Tap to ${flipped ? "see photo" : "read the note"}.`}
    >
      <span className="polaroid__inner">
        <span className="polaroid__face polaroid__face--front">
          <img src={memory.src} alt={memory.alt} />
          <span className="polaroid__tag">{memory.tag}</span>
        </span>
        <span className="polaroid__face polaroid__face--back">
          <span className="polaroid__note">{memory.note}</span>
          <span className="polaroid__hint">tap to flip back</span>
        </span>
      </span>
    </button>
  );
}

export default function MemoryGallery() {
  return (
    <section className="gallery" id="gallery">
      <p className="gallery__kicker">a few of my favorite moments with you</p>
      <h2 className="gallery__title">tap a photo for a little note</h2>
      <div className="gallery__grid">
        {MEMORIES.map((memory, i) => (
          <PolaroidCard memory={memory} index={i} key={memory.src} />
        ))}
      </div>
    </section>
  );
}
