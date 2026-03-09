function Stars() {
  return (
    <div className="testimonial-stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

const reviews = [
  {
    text: `"The quality of the crochet bag I received was beyond my expectations. You can truly feel the love and craftsmanship in every stitch. It's become my everyday bag!"`,
    name: "Sarah M.",
    location: "New York, USA",
    initial: "S",
  },
  {
    text: `"I ordered the macramé wall hanging as a gift and it absolutely made her day. The packaging was beautiful too — such attention to detail. Will definitely order again."`,
    name: "Emma L.",
    location: "London, UK",
    initial: "E",
  },
  {
    text: `"Finally, a brand that combines sustainability with stunning design. The crochet cardigan is not only gorgeous but incredibly comfortable. Supporting slow fashion never looked this good!"`,
    name: "Aisha K.",
    location: "Dubai, UAE",
    initial: "A",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">What They Say</p>
          <h2 className="section-title">Customer Love</h2>
        </div>
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div className="testimonial-card" key={review.name}>
              <Stars />
              <p className="testimonial-text">{review.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{review.initial}</div>
                <div>
                  <span className="author-name">{review.name}</span>
                  <span className="author-location">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
