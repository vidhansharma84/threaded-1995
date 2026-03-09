import Image from "next/image";

const collections = [
  {
    name: "Crochet Bags",
    subtitle: "Handwoven elegance for every occasion",
    image: "https://images.pexels.com/photos/10566057/pexels-photo-10566057.jpeg?auto=compress&cs=tinysrgb&w=1200",
    align: "left" as const,
  },
  {
    name: "Crochet Tops",
    subtitle: "Artisan warmth meets contemporary style",
    image: "https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg?auto=compress&cs=tinysrgb&w=1200",
    align: "right" as const,
  },
  {
    name: "Home Decor",
    subtitle: "Transform your space with handcrafted beauty",
    image: "https://images.pexels.com/photos/5371357/pexels-photo-5371357.jpeg?auto=compress&cs=tinysrgb&w=1200",
    align: "left" as const,
  },
];

export default function Collections() {
  return (
    <section className="editorial-collections" id="collections">
      {collections.map((col) => (
        <a href="#" className={`editorial-block editorial-${col.align}`} key={col.name}>
          <div className="editorial-img">
            <Image
              src={col.image}
              alt={col.name}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="editorial-overlay" />
          <div className="editorial-text">
            <h2 className="editorial-title">{col.name}</h2>
            <p className="editorial-subtitle">{col.subtitle}</p>
            <span className="editorial-cta">Explore the Collection</span>
          </div>
        </a>
      ))}
    </section>
  );
}
