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
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        🍎 Fresh Fruits Delivered in 10 Minutes
      </h1>

      <p
        style={{
          fontSize: "24px",
          marginBottom: "35px",
        }}
      >
        100% Fresh • Best Quality • Lowest Price
      </p>

      <input
        type="text"
        placeholder="Search Fruits, Vegetables..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "60%",
          maxWidth: "700px",
          padding: "18px",
          borderRadius: "12px",
          border: "none",
          fontSize: "18px",
          outline: "none",
        }}
      />

      <br />

      <button
        onClick={scrollToProducts}
        style={{
          marginTop: "30px",
          padding: "18px 50px",
          fontSize: "20px",
          border: "none",
          borderRadius: "10px",
          background: "#ffcc00",
          color: "#000",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        🛒 Shop Now
      </button>
    </section>
  );
}