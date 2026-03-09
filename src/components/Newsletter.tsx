"use client";

import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section className="lv-newsletter" id="contact">
      <div className="lv-newsletter-inner">
        <h2>Stay Informed</h2>
        <p>Receive updates on new collections and exclusive pieces.</p>
        {submitted ? (
          <p className="lv-thanks">Thank you for subscribing.</p>
        ) : (
          <form onSubmit={handleSubmit} className="lv-newsletter-form">
            <input type="email" placeholder="Email address" required />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
