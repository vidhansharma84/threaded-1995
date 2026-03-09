import Image from "next/image";

export default function About() {
  return (
    <section className="lv-about" id="about">
      <div className="lv-block-img lv-about-img">
        <Image
          src="https://images.pexels.com/photos/10474372/pexels-photo-10474372.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="The art of crochet craftsmanship"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="lv-block-text">
        <h2>Our Story</h2>
        <p className="lv-about-desc">
          Threaded 1995 was born from a deep love for the timeless art of crochet.
          What started as a grandmother&apos;s craft passed down through generations
          has blossomed into a modern brand that honors tradition while embracing
          contemporary design.
        </p>
        <a href="#" className="cta-link">Discover Our Story</a>
      </div>
    </section>
  );
}
