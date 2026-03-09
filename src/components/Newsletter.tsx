"use client";

import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="newsletter" id="contact">
      <div className="container">
        <div className="newsletter-content">
          <p className="section-tag">Stay Connected</p>
          <h2 className="section-title">Join the Threaded Family</h2>
          <p className="newsletter-text">
            Subscribe to receive early access to new collections, exclusive
            offers, and behind-the-scenes glimpses of our handcrafted process.
          </p>
          {submitted ? (
            <p style={{ fontSize: "1rem", marginTop: "1.5rem", color: "var(--color-sage-light)" }}>
              Thank you for subscribing! Welcome to the family.
            </p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
              <p className="newsletter-note">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
