export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "white",
        padding: "50px 20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <div>
          <h2>🍎 ONIMO FRUITS</h2>
          <p>Fresh Fruits & Vegetables</p>
          <p>⚡ Delivery in 10 Minutes</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>📞 9680560867</p>
          <p>📍 Nijampura Ojatoo</p>
          <p>Chirawa, Rajasthan</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Categories</p>
          <p>Cart</p>
          <p>About</p>
        </div>
      </div>

      <hr style={{ margin: "30px 0", opacity: 0.3 }} />

      <p style={{ textAlign: "center" }}>
        © 2026 ONIMO FRUITS. All Rights Reserved.
      </p>
    </footer>
  );
}