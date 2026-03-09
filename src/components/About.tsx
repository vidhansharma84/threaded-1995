import Image from "next/image";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-editorial">
        <div className="about-editorial-img">
          <Image
            src="https://images.pexels.com/photos/3945638/pexels-photo-3945638.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Artisan crafting crochet"
            fill
            sizes="50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="about-editorial-content">
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
            Every piece is thoughtfully designed and meticulously handcrafted
            using premium, sustainably sourced fibers. We believe in slow
            fashion — creating pieces that are meant to be treasured.
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
              <span className="stat-label">Countries</span>
            </div>
          </div>
          <a href="#" className="btn-underline">
            Discover Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
