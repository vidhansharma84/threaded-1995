"use client";

import { useState, useCallback, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyUs from "@/components/WhyUs";
import InstagramGallery from "@/components/InstagramGallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";
import Toast from "@/components/Toast";
import { Product } from "@/components/ProductCard";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toast, setToast] = useState({ message: "", visible: false });

  // Scroll-triggered fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2500);
  }, []);

  const handleAddToCart = useCallback(
    (product: Product) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.id === product.id);
        if (existing) {
          return prev.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          );
        }
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1,
          },
        ];
      });
      showToast(`${product.name} added to cart!`);
    },
    [showToast]
  );

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
      <Hero />
      <Marquee />
      <div className="fade-in"><Collections /></div>
      <div className="fade-in"><FeaturedProducts onAddToCart={handleAddToCart} /></div>
      <div className="fade-in"><WhyUs /></div>
      <div className="fade-in"><InstagramGallery /></div>
      <div className="fade-in"><About /></div>
      <div className="fade-in"><Testimonials /></div>
      <div className="fade-in"><Newsletter /></div>
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemove}
      />
      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
