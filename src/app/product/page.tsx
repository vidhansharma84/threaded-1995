"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import Toast from "@/components/Toast";
import SearchOverlay from "@/components/SearchOverlay";

const productImages = [
  "https://images.pexels.com/photos/10566057/pexels-photo-10566057.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/8093198/pexels-photo-8093198.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/9718261/pexels-photo-9718261.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/8187056/pexels-photo-8187056.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const colors = [
  { name: "Natural Cream", hex: "#F5ECD7" },
  { name: "Dusty Rose", hex: "#D4A5A5" },
  { name: "Sage Green", hex: "#A8B5A0" },
  { name: "Warm Brown", hex: "#C4A882" },
];

const reviews = [
  {
    name: "Sarah M.",
    initial: "S",
    date: "2 weeks ago",
    rating: 5,
    text: "Absolutely stunning! The craftsmanship is impeccable. I get compliments every time I carry it. The natural cream color is even more beautiful in person.",
  },
  {
    name: "Emma L.",
    initial: "E",
    date: "1 month ago",
    rating: 5,
    text: "I was hesitant to order a handmade bag online, but this exceeded all expectations. The quality is outstanding and it holds everything I need for my daily essentials.",
  },
  {
    name: "Aisha K.",
    initial: "A",
    date: "1 month ago",
    rating: 4,
    text: "Beautiful bag with lovely details. The only reason I gave 4 stars instead of 5 is that it took a bit longer to ship than expected. But the product itself is perfect!",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="stars" style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill={i <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i <= rating ? "0" : "2"}
          style={{ color: "var(--color-brown-light)" }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toast, setToast] = useState({ message: "", visible: false });

  const showToast = useCallback((msg: string) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2500);
  }, []);

  const addToCart = () => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === 1);
      if (existing) {
        return prev.map((i) =>
          i.id === 1 ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        {
          id: 1,
          name: "Bohemian Tote Bag",
          price: 89,
          image: productImages[0],
          qty,
        },
      ];
    });
    showToast("Bohemian Tote Bag added to cart!");
  };

  const handleUpdateQty = useCallback((id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);

  const handleRemove = useCallback((id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onSearchClick={() => setSearchOpen(true)}
      />

      <section className="product-detail">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <a href="#">Shop</a>
            <span>/</span>
            <a href="#">Bags</a>
            <span>/</span>
            <span>Bohemian Tote Bag</span>
          </div>

          <div className="pd-grid">
            {/* Gallery */}
            <div className="pd-gallery">
              <div className="pd-thumbs">
                {productImages.map((src, i) => (
                  <button
                    key={i}
                    className={`pd-thumb${selectedImage === i ? " active" : ""}`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <Image
                      src={src}
                      alt={`Product view ${i + 1}`}
                      width={80}
                      height={80}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </button>
                ))}
              </div>
              <div className="pd-main-img">
                <Image
                  src={productImages[selectedImage]}
                  alt="Bohemian Tote Bag"
                  width={800}
                  height={1000}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="pd-info">
              <p className="pd-category">Bags</p>
              <h1 className="pd-name">Bohemian Tote Bag</h1>
              <p className="pd-price">$89.00</p>

              <div className="pd-rating">
                <Stars rating={5} />
                <span className="pd-rating-text">4.9 (48 reviews)</span>
              </div>

              <p className="pd-desc">
                Our signature Bohemian Tote Bag is lovingly handcrafted using
                premium organic cotton yarn. Each bag takes approximately 15
                hours to complete, resulting in a one-of-a-kind piece that
                combines artisan craftsmanship with modern bohemian style.
                Spacious enough for your daily essentials, yet lightweight and
                comfortable to carry all day.
              </p>

              {/* Color Selection */}
              <div className="pd-option-group">
                <span className="pd-option-label">
                  Color: {colors[selectedColor].name}
                </span>
                <div className="color-options">
                  {colors.map((c, i) => (
                    <button
                      key={c.name}
                      className={`color-swatch${selectedColor === i ? " active" : ""}`}
                      style={{ background: c.hex }}
                      onClick={() => setSelectedColor(i)}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="pd-option-group">
                <span className="pd-option-label">Quantity</span>
                <div className="qty-selector">
                  <button onClick={() => setQty(Math.max(1, qty - 1))}>
                    −
                  </button>
                  <span>{qty}</span>
                  <button onClick={() => setQty(qty + 1)}>+</button>
                </div>
              </div>

              {/* Actions */}
              <div className="pd-actions">
                <button className="btn btn-primary" onClick={addToCart}>
                  Add to Cart
                </button>
                <button className="btn-buy-now" style={{ flex: 1, padding: "1rem" }}>
                  Buy Now
                </button>
              </div>

              {/* Meta */}
              <div className="pd-meta">
                <div className="pd-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  Free shipping on orders over $75
                </div>
                <div className="pd-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  30-day satisfaction guarantee
                </div>
                <div className="pd-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Handmade with love
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="reviews-section">
            <div className="reviews-header">
              <h3>Customer Reviews (48)</h3>
              <button className="btn btn-secondary">Write a Review</button>
            </div>
            {reviews.map((review) => (
              <div className="review-card" key={review.name}>
                <div className="review-header">
                  <div className="review-author-info">
                    <div className="review-avatar">{review.initial}</div>
                    <div>
                      <span className="review-name">{review.name}</span>
                      <span className="review-date">{review.date}</span>
                    </div>
                  </div>
                  <div className="review-stars">
                    <Stars rating={review.rating} />
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemove}
      />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
