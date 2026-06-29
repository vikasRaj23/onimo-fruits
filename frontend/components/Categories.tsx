"use client";

type CategoriesProps = {
  category: string;
  setCategory: (value: string) => void;
};

export default function Categories({
  category,
  setCategory,
}: CategoriesProps) {
  const categories = [
    "All",
    "Fruits",
    "Vegetables",
  ];

  return (
    <section
      style={{
        padding: "50px",
        background: "#f5fff5",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "35px",
          marginBottom: "30px",
        }}
      >
        Shop by Category
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{
              padding: "15px 30px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              background:
                category === item ? "#16a34a" : "white",
              color:
                category === item ? "white" : "black",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}