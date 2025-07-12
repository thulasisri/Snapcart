// src/pages/CategoryPage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (product) =>
      product.category &&
      product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="category-page" style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>
        {categoryName.toUpperCase()}
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
