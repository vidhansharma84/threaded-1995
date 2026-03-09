"use client";

import { useState } from "react";

const reviews = [
  { text: "The quality is beyond my expectations. You can truly feel the love and craftsmanship in every stitch.", name: "Sarah M." },
  { text: "The packaging was beautiful — such attention to detail. Will definitely order again.", name: "Emma L." },
  { text: "A brand that combines sustainability with stunning design. Supporting slow fashion never looked this good.", name: "Aisha K." },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  return (
    <section className="lv-testimonials">
      <div className="lv-testimonials-inner">
        <blockquote className="lv-quote">&ldquo;{reviews[active].text}&rdquo;</blockquote>
        <p className="lv-quote-author">{reviews[active].name}</p>
        <div className="lv-quote-nav">
          {reviews.map((_, i) => (
            <button key={i} className={`lv-dot${active === i ? " active" : ""}`} onClick={() => setActive(i)} aria-label={`Review ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
