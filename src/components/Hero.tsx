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
        <h1 className="hero-title">The Art of Crochet</h1>
        <a href="#collections" className="cta-link">Discover</a>
      </div>
    </section>
  );
}
