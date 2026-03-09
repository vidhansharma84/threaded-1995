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
          <p className="section-tag">Newsletter</p>
          <h2 className="section-title">Stay in Touch</h2>
          <p className="newsletter-text">
            Be the first to know about new collections and exclusive offers.
          </p>
          {submitted ? (
            <p className="newsletter-thanks">
              Thank you for subscribing.
            </p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                />
                <button type="submit" className="btn-newsletter">
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
