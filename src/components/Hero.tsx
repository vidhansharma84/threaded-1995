import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <Image
          src="https://images.pexels.com/photos/3945638/pexels-photo-3945638.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Crochet hooks and yarn"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tag">— Handmade with Heart —</p>
        <h1 className="hero-title">
          Handcrafted Crochet
          <br />
          Pieces Made With Love
        </h1>
        <p className="hero-subtitle">
          Each piece is lovingly handcrafted using premium natural fibers,
          bringing warmth and artistry into your everyday life. From our hands
          to your home.
        </p>
        <div className="hero-btns">
          <a href="#shop" className="btn btn-primary">
            Shop Collection
          </a>
          <a href="#about" className="btn btn-hero-outline">
            Our Story
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
