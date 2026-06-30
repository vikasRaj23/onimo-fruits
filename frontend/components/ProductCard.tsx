"use client";

import { products } from "../lib/products";
import { useCart } from "./context/CartContext";

type ProductCardProps = {
  search: string;
  category: string;
};

export default function ProductCard({
  search,
  category,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const filteredProducts = products.filter((item: any) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <section
      id="products"
      style={{
        padding: "15px",
        background: "#f5f5f5",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "20px",
          color: "#166534",
        }}
      >
        🛒 Fresh Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
          gap: "15px",
        }}
      >
        {filteredProducts.length === 0 ? (
          <h2>No Product Found 😔</h2>
        ) : (
          filteredProducts.map((item: any) => (
            <div
              key={item.id}
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,.12)",
                textAlign: "center",
                position: "relative",
                transition: "0.3s",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "#ef4444",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                {item.discount}
              </span>

              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "#16a34a",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                {item.badge}
              </span>

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  marginTop: "20px",
                }}
              />

              <h3
                style={{
                  marginTop: "10px",
                  marginBottom: "5px",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  color: "#16a34a",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                {item.category}
              </p>

              <p
                style={{
                  marginBottom: "5px",
                }}
              >
                {item.rating}
              </p>

              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                ✅ {item.stock}
              </p>

              <h2
                style={{
                  color: "#16a34a",
                  fontSize: "28px",
                  margin: "10px 0",
                }}
              >
                ₹{item.price}
                <span
                  style={{
                    fontSize: "15px",
                    color: "#555",
                  }}
                >
                  {" "}
                  /kg
                </span>
              </h2>

              <button
                onClick={() => addToCart(item)}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                🛒 Add To Cart
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}