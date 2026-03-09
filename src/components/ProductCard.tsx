"use client";

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

export default function ProductCard({ product }: ProductCardProps) {
  return null;
}
