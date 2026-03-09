import Image from "next/image";

const images = [
  "https://images.pexels.com/photos/10566057/pexels-photo-10566057.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3945638/pexels-photo-3945638.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5371357/pexels-photo-5371357.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/10474372/pexels-photo-10474372.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function InstagramGallery() {
  return (
    <section className="lv-instagram">
      <div className="lv-insta-header">
        <h2>@threaded1995</h2>
      </div>
      <div className="lv-insta-grid">
        {images.map((src, i) => (
          <a href="#" className="lv-insta-item" key={i}>
            <Image src={src} alt={`Instagram ${i + 1}`} fill sizes="25vw" style={{ objectFit: "cover" }} />
          </a>
        ))}
      </div>
    </section>
  );
}
