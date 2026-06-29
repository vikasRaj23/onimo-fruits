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
        padding: "40px",
        background: "#f5f5f5",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "35px",
          marginBottom: "30px",
        }}
      >
        🛒 Fresh Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
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
                padding: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,.1)",
                textAlign: "center",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "red",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
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
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {item.badge}
              </span>

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "140px",
                  height: "140px",
                  objectFit: "contain",
                  marginTop: "20px",
                }}
              />

              <h3>{item.name}</h3>

              <p
                style={{
                  color: "#16a34a",
                  fontWeight: "bold",
                }}
              >
                {item.category}
              </p>

              <p>{item.rating}</p>

              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                ✅ {item.stock}
              </p>

              <h2
                style={{
                  color: "#16a34a",
                }}
              >
                ₹{item.price}
              </h2>

              <button
                onClick={() => addToCart(item)}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "12px",
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
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