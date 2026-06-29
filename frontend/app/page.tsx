"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />

      <Hero
        search={search}
        setSearch={setSearch}
      />

      <Categories
        category={category}
        setCategory={setCategory}
      />

      <ProductCard
        search={search}
        category={category}
      />

      <Footer />
    </>
  );
}