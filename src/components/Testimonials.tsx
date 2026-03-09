"use client";

import { useState } from "react";

const reviews = [
  {
    text: "The quality of the crochet bag I received was beyond my expectations. You can truly feel the love and craftsmanship in every stitch.",
    name: "Sarah M.",
    location: "New York",
  },
  {
    text: "I ordered the macrame wall hanging as a gift and it absolutely made her day. The packaging was beautiful too — such attention to detail.",
    name: "Emma L.",
    location: "London",
  },
  {
    text: "Finally, a brand that combines sustainability with stunning design. The crochet cardigan is gorgeous and incredibly comfortable.",
    name: "Aisha K.",
    location: "Dubai",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials-editorial">
      <div className="container">
        <p className="section-tag">Testimonials</p>
        <blockquote className="editorial-quote">
          &ldquo;{reviews[active].text}&rdquo;
        </blockquote>
        <p className="editorial-quote-author">
          {reviews[active].name} — {reviews[active].location}
        </p>
        <div className="editorial-quote-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`quote-dot${active === i ? " active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
