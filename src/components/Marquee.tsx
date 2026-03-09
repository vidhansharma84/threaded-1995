export default function Marquee() {
  const items = [
    "Handmade Crochet",
    "Sustainable Materials",
    "Made with Love",
    "Free Shipping Over $75",
    "Premium Quality",
  ];

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {[...items, ...items].map((text, i) => (
          <span key={i}>&#10022; {text}</span>
        ))}
      </div>
    </div>
  );
}
