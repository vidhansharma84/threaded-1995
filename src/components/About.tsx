import Image from "next/image";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-img-main">
              <Image
                src="https://images.pexels.com/photos/3945638/pexels-photo-3945638.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Crochet hooks and colorful yarn"
                width={600}
                height={750}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="about-img-accent">
              <Image
                src="https://images.pexels.com/photos/10474372/pexels-photo-10474372.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Colorful yarn balls"
                width={400}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="about-content">
            <p className="section-tag">Our Story</p>
            <h2 className="section-title">
              Crafted with Purpose,
              <br />
              Woven with Heart
            </h2>
            <p className="about-text">
              Threaded 1995 was born from a deep love for the timeless art of
              crochet. What started as a grandmother&apos;s craft passed down through
              generations has blossomed into a modern brand that honors tradition
              while embracing contemporary design.
            </p>
            <p className="about-text">
              Every piece in our collection is thoughtfully designed and
              meticulously handcrafted using premium, sustainably sourced fibers.
              We believe in slow fashion — creating pieces that are meant to be
              treasured, not discarded.
            </p>
            <p className="about-text">
              From our small studio, we pour hours of love and skill into each
              creation, ensuring that every stitch tells a story and every
              product carries a piece of our heart to yours.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2,500+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Unique Pieces</span>
              </div>
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Countries Shipped</span>
              </div>
            </div>
            <a href="#" className="btn btn-secondary">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
