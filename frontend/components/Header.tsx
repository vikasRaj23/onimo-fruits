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
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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

      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
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
          }}
        >
          🛒 Cart ({totalItems})
        </Link>
      </div>
    </header>
  );
}