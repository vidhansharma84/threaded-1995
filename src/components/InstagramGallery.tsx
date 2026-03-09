import Image from "next/image";

const images = [
  "https://images.pexels.com/photos/10566057/pexels-photo-10566057.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3945638/pexels-photo-3945638.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/5371357/pexels-photo-5371357.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/10474372/pexels-photo-10474372.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/19479498/pexels-photo-19479498.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/2731820/pexels-photo-2731820.jpeg?auto=compress&cs=tinysrgb&w=400",
];

function InstaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
    </svg>
  );
}

export default function InstagramGallery() {
  return (
    <section className="instagram-gallery">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">@threaded1995</p>
          <h2 className="section-title">Follow Our Journey</h2>
        </div>
      </div>
      <div className="insta-grid">
        {images.map((src, i) => (
          <a href="#" className="insta-item" key={i}>
            <Image
              src={src}
              alt={`Instagram post ${i + 1}`}
              fill
              sizes="(max-width: 768px) 33vw, 16vw"
              style={{ objectFit: "cover" }}
            />
            <div className="insta-overlay">
              <InstaIcon />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
