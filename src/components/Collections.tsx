"use client";

import Image from "next/image";

const collections = [
  {
    name: "Crochet Bags",
    count: "24 pieces",
    image: "https://images.pexels.com/photos/10566057/pexels-photo-10566057.jpeg?auto=compress&cs=tinysrgb&w=800",
    className: "collection-card collection-card--large",
  },
  {
    name: "Crochet Tops",
    count: "18 pieces",
    image: "https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg?auto=compress&cs=tinysrgb&w=800",
    className: "collection-card",
  },
  {
    name: "Home Decor",
    count: "32 pieces",
    image: "https://images.pexels.com/photos/5371357/pexels-photo-5371357.jpeg?auto=compress&cs=tinysrgb&w=800",
    className: "collection-card",
  },
  {
    name: "Accessories",
    count: "15 pieces",
    image: "https://images.pexels.com/photos/2460527/pexels-photo-2460527.jpeg?auto=compress&cs=tinysrgb&w=800",
    className: "collection-card",
  },
  {
    name: "Limited Editions",
    count: "8 exclusive pieces",
    image: "https://images.pexels.com/photos/2731820/pexels-photo-2731820.jpeg?auto=compress&cs=tinysrgb&w=800",
    className: "collection-card collection-card--feature",
  },
];

export default function Collections() {
  return (
    <section className="collections" id="collections">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Curated Categories</p>
          <h2 className="section-title">Our Collections</h2>
          <p className="section-subtitle">
            Explore our carefully curated range of handcrafted crochet creations
          </p>
        </div>
        <div className="collections-grid">
          {collections.map((col) => (
            <a href="#" className={col.className} key={col.name}>
              <div className="collection-img">
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="collection-overlay">
                <span className="collection-count">{col.count}</span>
                <h3>{col.name}</h3>
                <span className="collection-explore">Explore &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
