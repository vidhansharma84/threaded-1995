import Image from "next/image";

const collections = [
  {
    name: "Crochet Bags",
    image: "https://images.pexels.com/photos/10566057/pexels-photo-10566057.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    name: "Crochet Tops & Wear",
    image: "https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    name: "Home Decor",
    image: "https://images.pexels.com/photos/5371357/pexels-photo-5371357.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

export default function Collections() {
  return (
    <section className="lv-collections" id="collections">
      {collections.map((col) => (
        <div className="lv-block" key={col.name}>
          <div className="lv-block-img">
            <Image
              src={col.image}
              alt={col.name}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="lv-block-text">
            <h2>{col.name}</h2>
            <a href="#" className="cta-link">Explore the Collection</a>
          </div>
        </div>
      ))}
    </section>
  );
}
