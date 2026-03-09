import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              Threaded <span>1995</span>
            </Link>
            <p className="footer-desc">
              Handcrafted crochet pieces made with love, passion, and
              sustainable materials. From our hands to your home.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.08 2.46 7.58 5.97 9.12-.08-.72-.16-1.82.03-2.6.17-.71 1.09-4.6 1.09-4.6s-.28-.56-.28-1.38c0-1.3.75-2.26 1.69-2.26.8 0 1.18.6 1.18 1.31 0 .8-.51 1.99-.77 3.1-.22.92.46 1.67 1.37 1.67 1.64 0 2.9-1.73 2.9-4.22 0-2.21-1.59-3.76-3.86-3.76-2.63 0-4.17 1.97-4.17 4.01 0 .79.31 1.64.69 2.1.08.09.09.17.07.27-.07.29-.23.92-.26 1.05-.04.17-.14.21-.32.13-1.19-.56-1.94-2.29-1.94-3.69 0-3 2.18-5.75 6.29-5.75 3.3 0 5.87 2.35 5.87 5.5 0 3.28-2.07 5.92-4.94 5.92-.96 0-1.87-.5-2.18-1.09l-.59 2.26c-.22.83-.8 1.87-1.19 2.5.9.28 1.85.43 2.84.43 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop All</a></li>
              <li><a href="#">Collections</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns &amp; Exchanges</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Size Guide</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Threaded 1995. All rights reserved. Handcrafted with love.</p>
          <div className="footer-payments">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
