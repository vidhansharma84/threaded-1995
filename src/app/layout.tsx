import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Threaded 1995 — Handcrafted Crochet Pieces",
  description:
    "Discover handmade crochet bags, tops, home decor & accessories. Each piece is lovingly handcrafted using premium sustainable fibers. Shop the collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
