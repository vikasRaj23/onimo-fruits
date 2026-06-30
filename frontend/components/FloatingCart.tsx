"use client";

import Link from "next/link";
import { useCart } from "./context/CartContext";

export default function FloatingCart() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  if (totalItems === 0) return null;

  return (
    <Link
      href="/cart"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        background: "#16a34a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        textDecoration: "none",
        boxShadow: "0 8px 20px rgba(0,0,0,.3)",
        zIndex: 9999,
      }}
    >
      🛒

      <span
        style={{
          position: "absolute",
          top: "-5px",
          right: "-5px",
          background: "red",
          color: "white",
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        {totalItems}
      </span>
    </Link>
  );
}