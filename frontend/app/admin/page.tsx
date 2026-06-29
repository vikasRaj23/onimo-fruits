export default function AdminPage() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        background: "#f5fff5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "green" }}>🍎 ONIMO FRUITS ADMIN PANEL</h1>

      <h3>Store Management</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2>📦 Products</h2>
          <p>Add / Edit / Delete Products</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2>💰 Prices</h2>
          <p>Update Daily Prices</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2>📋 Orders</h2>
          <p>View Customer Orders</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2>👥 Customers</h2>
          <p>Manage Customers</p>
        </div>
      </div>
    </div>
  );
}