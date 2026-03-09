export default function WhyUs() {
  const items = [
    { title: "Handmade", desc: "Every stitch crafted by skilled artisans" },
    { title: "Sustainable", desc: "Eco-friendly organic fibers and natural dyes" },
    { title: "Free Shipping", desc: "Complimentary delivery on orders over $75" },
    { title: "Made with Love", desc: "Passion and dedication in every creation" },
  ];

  return (
    <section className="why-us">
      <div className="why-us-strip">
        {items.map((item) => (
          <div className="why-strip-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
