"use client";

import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";

export const products: Product[] = [
  {
    id: 1,
    name: "Bohemian Tote Bag",
    category: "bags",
    price: 89,
    rating: 5,
    reviewCount: 48,
    image: "https://images.pexels.com/photos/10566057/pexels-photo-10566057.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "New",
  },
  {
    id: 2,
    name: "Summer Crochet Top",
    category: "tops",
    price: 65,
    originalPrice: 82,
    rating: 4,
    reviewCount: 36,
    image: "https://images.pexels.com/photos/6633323/pexels-photo-6633323.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "-20%",
    badgeClass: "badge-sale",
  },
  {
    id: 3,
    name: "Macrame Wall Hanging",
    category: "decor",
    price: 120,
    rating: 5,
    reviewCount: 72,
    image: "https://images.pexels.com/photos/5371357/pexels-photo-5371357.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Crochet Beanie Set",
    category: "accessories",
    price: 28,
    rating: 5,
    reviewCount: 112,
    image: "https://images.pexels.com/photos/2460527/pexels-photo-2460527.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Bestseller",
  },
  {
    id: 5,
    name: "Beach Crossbody Bag",
    category: "bags",
    price: 135,
    rating: 5,
    reviewCount: 28,
    image: "https://images.pexels.com/photos/8093198/pexels-photo-8093198.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Limited",
    badgeClass: "badge-limited",
  },
  {
    id: 6,
    name: "Crochet Cardigan",
    category: "tops",
    price: 110,
    rating: 4,
    reviewCount: 54,
    image: "https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "Cozy Knit Blanket",
    category: "decor",
    price: 75,
    originalPrice: 88,
    rating: 4,
    reviewCount: 41,
    image: "https://images.pexels.com/photos/5806980/pexels-photo-5806980.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "-15%",
    badgeClass: "badge-sale",
  },
  {
    id: 8,
    name: "Macrame Plant Hanger",
    category: "decor",
    price: 45,
    rating: 5,
    reviewCount: 95,
    image: "https://images.pexels.com/photos/6627241/pexels-photo-6627241.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const filters = ["all", "bags", "tops", "decor", "accessories"];

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
}

export default function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="featured-products" id="shop">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Handpicked for You</p>
          <h2 className="section-title">Featured Products</h2>
          <div className="product-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="products-grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onWishlist={toggleWishlist}
              wishlisted={wishlist.has(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
