import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products"; 
const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
