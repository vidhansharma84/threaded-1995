"use client";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  return (
    <div
      className={`search-overlay${open ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="search-overlay-content">
        <button className="search-close" onClick={onClose}>
          &times;
        </button>
        <h3>Search our collection</h3>
        <div className="search-input-wrap">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="search-input"
            autoFocus={open}
          />
          <button className="search-submit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
