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
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 999,
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "28px",
        }}
      >
        🍎 ONIMO FRUITS
      </Link>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          🏠 Home
        </Link>

        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          🥬 Vegetables
        </Link>

        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          🍎 Fruits
        </Link>

        <Link
          href="/cart"
          style={{
            background: "#15803d",
            color: "white",
            padding: "10px 18px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          🛒 Cart ({totalItems})
        </Link>
      </div>
    </header>
  );
}