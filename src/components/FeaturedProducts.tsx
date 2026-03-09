"use client";

import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  badgeClass?: string;
}

const products: Product[] = [
  { id: 1, name: "Bohemian Tote Bag", price: 89, image: "https://images.pexels.com/photos/10566057/pexels-photo-10566057.jpeg?auto=compress&cs=tinysrgb&w=800", category: "bags", rating: 5, reviewCount: 48 },
  { id: 2, name: "Summer Crochet Top", price: 65, image: "https://images.pexels.com/photos/6633323/pexels-photo-6633323.jpeg?auto=compress&cs=tinysrgb&w=800", category: "tops", rating: 4, reviewCount: 36 },
  { id: 3, name: "Macrame Wall Hanging", price: 120, image: "https://images.pexels.com/photos/5371357/pexels-photo-5371357.jpeg?auto=compress&cs=tinysrgb&w=800", category: "decor", rating: 5, reviewCount: 72 },
  { id: 4, name: "Crochet Beanie Set", price: 28, image: "https://images.pexels.com/photos/2460527/pexels-photo-2460527.jpeg?auto=compress&cs=tinysrgb&w=800", category: "accessories", rating: 5, reviewCount: 112 },
  { id: 5, name: "Beach Crossbody Bag", price: 135, image: "https://images.pexels.com/photos/8093198/pexels-photo-8093198.jpeg?auto=compress&cs=tinysrgb&w=800", category: "bags", rating: 5, reviewCount: 28 },
  { id: 6, name: "Crochet Cardigan", price: 110, image: "https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg?auto=compress&cs=tinysrgb&w=800", category: "tops", rating: 4, reviewCount: 54 },
];

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
}

export default function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  return (
    <section className="lv-products" id="shop">
      <div className="lv-products-header">
        <h2>Featured Pieces</h2>
        <a href="#" className="cta-link">View All</a>
      </div>
      <div className="lv-products-scroll">
        {products.map((p) => (
          <Link href="/product" className="lv-product-card" key={p.id}>
            <div className="lv-product-img">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 70vw, 30vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="lv-product-info">
              <span className="lv-product-name">{p.name}</span>
              <span className="lv-product-price">${p.price.toFixed(2)}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { products };
