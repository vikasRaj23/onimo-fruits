"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "./context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  return (
    <>
      <header
        style={{
          background: "#16a34a",
          color: "white",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 999,
          boxShadow: "0 2px 10px rgba(0,0,0,.15)",
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "26px",
          }}
        >
          🍎 ONIMO FRUITS
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "32px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </header>

      {menuOpen && (
        <div
          style={{
            background: "#15803d",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            textAlign: "center",
          }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            🏠 Home
          </Link>

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            🥬 Vegetables
          </Link>

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            🍎 Fruits
          </Link>

          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#22c55e",
              color: "white",
              textDecoration: "none",
              padding: "12px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            🛒 Cart ({totalItems})
          </Link>
        </div>
      )}
    </>
  );
}