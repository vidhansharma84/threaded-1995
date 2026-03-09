"use client";

import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  badgeClass?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onWishlist: (id: number) => void;
  wishlisted: boolean;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill={i <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i <= rating ? "0" : "2"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({
  product,
  onAddToCart,
  onWishlist,
  wishlisted,
}: ProductCardProps) {
  return (
    <div className="product-card" data-category={product.category}>
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
        />
        <button
          className={`wishlist-btn${wishlisted ? " liked" : ""}`}
          aria-label="Add to wishlist"
          onClick={() => onWishlist(product.id)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        {product.badge && (
          <div className={`product-badge${product.badgeClass ? ` ${product.badgeClass}` : ""}`}>
            {product.badge}
          </div>
        )}
        <div className="product-actions">
          <button
            className="btn-add-cart"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
          <Link href="/product" className="btn-quick-view">
            Quick View
          </Link>
        </div>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">
          <Link href="/product">{product.name}</Link>
        </h3>
        <div className="product-rating">
          <Stars rating={product.rating} />
          <span className="rating-count">({product.reviewCount})</span>
        </div>
        <div className="product-price">
          <span className="price-current">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="price-original">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
