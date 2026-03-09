"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onSearchClick: () => void;
}

export default function Navbar({ cartCount, onCartClick, onSearchClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`lv-nav${scrolled ? " scrolled" : ""}`}>
      <div className="lv-nav-inner">
        <button
          className={`mobile-menu-btn${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`lv-nav-links lv-nav-left${menuOpen ? " open" : ""}`}>
          {["Collections", "Shop"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            </li>
          ))}
        </ul>

        <Link href="/" className="lv-logo">
          Threaded 1995
        </Link>

        <ul className={`lv-nav-links lv-nav-right${menuOpen ? " open" : ""}`}>
          {["About", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="lv-nav-icons">
          <button className="lv-icon-btn" aria-label="Search" onClick={onSearchClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </button>
          <button className="lv-icon-btn" aria-label="Account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </button>
          <button className="lv-icon-btn lv-cart-btn" aria-label="Cart" onClick={onCartClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            {cartCount > 0 && <span className="lv-cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}
