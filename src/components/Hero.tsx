import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <Image
          src="https://images.pexels.com/photos/3945638/pexels-photo-3945638.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Handcrafted crochet artistry"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tag">Handcrafted Since 1995</p>
        <h1 className="hero-title">
          The Art of
          <br />
          Crochet
        </h1>
        <p className="hero-subtitle">
          Each piece lovingly handcrafted with premium natural fibers.
        </p>
        <div className="hero-btns">
          <a href="#shop" className="btn-hero">
            Discover the Collection
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
      </div>
    </section>
  );
}
