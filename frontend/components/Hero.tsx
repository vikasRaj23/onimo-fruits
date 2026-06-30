"use client";

type HeroProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Hero({
  search,
  setSearch,
}: HeroProps) {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg,#16a34a,#22c55e,#4ade80)",
        color: "white",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "15px",
          lineHeight: "1.3",
        }}
      >
        🍎 Fresh Fruits <br />
        Delivered in <br />
        <span style={{ color: "#FFE600" }}>10 Minutes</span>
      </h1>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "25px",
        }}
      >
        100% Fresh • Best Quality • Lowest Price
      </p>

      <input
        type="text"
        placeholder="🔍 Search Fruits & Vegetables..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "16px",
          borderRadius: "12px",
          border: "none",
          fontSize: "17px",
          outline: "none",
        }}
      />

      <br />

      <button
        onClick={scrollToProducts}
        style={{
          marginTop: "25px",
          padding: "16px 40px",
          fontSize: "18px",
          border: "none",
          borderRadius: "12px",
          background: "#FFD700",
          color: "#000",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 6px 15px rgba(0,0,0,.25)",
        }}
      >
        🛒 Shop Now
      </button>
    </section>
  );
}