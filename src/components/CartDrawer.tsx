"use client";

import Image from "next/image";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export default function CartDrawer({
  open,
  onClose,
  items,
  onUpdateQty,
  onRemove,
}: CartDrawerProps) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <div
        className={`cart-overlay${open ? " open" : ""}`}
        onClick={onClose}
      />
      <div className={`cart-drawer${open ? " open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p>Your cart is empty</p>
              <button className="btn btn-secondary" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-img">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="cart-item-qty">
                    <button onClick={() => onUpdateQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onUpdateQty(item.id, 1)}>+</button>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="cart-shipping-note">
              Shipping &amp; taxes calculated at checkout
            </p>
            <button className="btn btn-primary btn-full">Checkout</button>
            <button className="btn btn-secondary btn-full" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
