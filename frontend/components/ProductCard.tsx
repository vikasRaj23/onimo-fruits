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
        background: "#f3f4f6",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "34px",
          color: "#166534",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        🛒 Fresh Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "18px",
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
                borderRadius: "20px",
                padding: "18px",
                textAlign: "center",
                position: "relative",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                transition: "all .3s ease",
                cursor: "pointer",
              }}
            >
              {/* Discount */}

              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "#ef4444",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                {item.discount}
              </span>

              {/* Badge */}

              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "#16a34a",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                {item.badge}
              </span>

              {/* Image */}

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "130px",
                  height: "130px",
                  objectFit: "contain",
                  margin: "20px auto 10px",
                  transition: ".3s",
                }}
              />

              <h3
                style={{
                  marginBottom: "8px",
                  fontSize: "20px",
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

              <p>{item.rating}</p>

              <p
                style={{
                  color: "#15803d",
                  fontWeight: "bold",
                }}
              >
                ✅ {item.stock}
              </p>

              <h2
                style={{
                  color: "#16a34a",
                  margin: "12px 0",
                  fontSize: "30px",
                }}
              >
                ₹{item.price}

                <span
                  style={{
                    fontSize: "15px",
                    color: "#777",
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
                  padding: "13px",
                  border: "none",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(90deg,#16a34a,#22c55e)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  boxShadow:
                    "0 6px 15px rgba(34,197,94,.35)",
                  transition: ".3s",
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