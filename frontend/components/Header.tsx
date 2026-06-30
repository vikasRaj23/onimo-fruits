"use client";

import Link from "next/link";
import { useCart } from "./context/CartContext";

export default function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  return (
    <header
      style={{
        background: "#16a34a",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      <Link
        href="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        🍎 ONIMO FRUITS
      </Link>

      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          🏠 Home
        </Link>

        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          🥬 Vegetables
        </Link>

        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          🍎 Fruits
        </Link>

        <Link
          href="/cart"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            background: "#15803d",
            padding: "8px 14px",
            borderRadius: "10px",
          }}
        >
          🛒 Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}