"use client";

import Link from "next/link";
import { useCart } from "./context/CartContext";

export default function BottomNav() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "70px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 -3px 12px rgba(0,0,0,.15)",
        zIndex: 9999,
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "#16a34a", textAlign: "center" }}>
        <div style={{ fontSize: "26px" }}>🏠</div>
        <div style={{ fontSize: "12px" }}>Home</div>
      </Link>

      <Link href="/" style={{ textDecoration: "none", color: "#16a34a", textAlign: "center" }}>
        <div style={{ fontSize: "26px" }}>🥬</div>
        <div style={{ fontSize: "12px" }}>Veg</div>
      </Link>

      <Link href="/" style={{ textDecoration: "none", color: "#16a34a", textAlign: "center" }}>
        <div style={{ fontSize: "26px" }}>🍎</div>
        <div style={{ fontSize: "12px" }}>Fruits</div>
      </Link>

      <Link
        href="/cart"
        style={{
          textDecoration: "none",
          color: "#16a34a",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ fontSize: "26px" }}>🛒</div>
        <div style={{ fontSize: "12px" }}>Cart</div>

        {totalItems > 0 && (
          <span
            style={{
              position: "absolute",
              top: -5,
              right: -8,
              background: "red",
              color: "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            {totalItems}
          </span>
        )}
      </Link>
    </div>
  );
}