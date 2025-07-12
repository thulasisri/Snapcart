import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FiltersSidebar from "../components/FiltersSidebar";
import SortBar from "../components/SortBar";
import Pagination from "../components/Pagination";
import { product as productsData } from "../data/product";

import "./ShopPage.css";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    price: { min: "", max: "" },
    rating: "",
    availability: false,
  });
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ✅ Use local product data here (REPLACE fetch logic)
  useEffect(() => {
    const updated = productsData.map((product) => ({
      ...product,
      // ✅ Add mock brand/stock/tags if needed
      brand: ["Samsung", "Nike", "Apple", "Sony"][Math.floor(Math.random() * 4)],
      stock: Math.floor(Math.random() * 20 + 1),
      tags: ["New", "Trending"].filter(() => Math.random() > 0.5),
      rating: {
        rate: Math.floor(Math.random() * 5) + 1, // mock rating
        count: Math.floor(Math.random() * 100),
      },
    }));
    setProducts(updated);
    setFilteredProducts(updated);
  }, []);

  // Filtering and sorting logic
  useEffect(() => {
    let updated = [...products];

    if (filters.category) {
      updated = updated.filter((p) =>
        p.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    }

    if (filters.brand) {
      updated = updated.filter((p) => p.brand === filters.brand);
    }

    if (filters.price) {
      const min = parseFloat(filters.price.min) || 0;
      const max = parseFloat(filters.price.max) || 99999;
      updated = updated.filter((p) => p.price >= min && p.price <= max);
    }

    if (filters.rating) {
      updated = updated.filter((p) => p.rating?.rate >= filters.rating);
    }

    if (filters.availability) {
      updated = updated.filter((p) => p.stock > 0);
    }

    if (sortOption === "price-low-high") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      updated.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      updated.sort((a, b) => b.rating?.rate - a.rating?.rate);
    }

    setFilteredProducts(updated);
    setCurrentPage(1);
  }, [filters, sortOption, products]);

  // Pagination
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="shop-container">
      <div className="shop-layout">
        <FiltersSidebar filters={filters} setFilters={setFilters} products={products} />
        <div className="shop-content">
          <SortBar sortOption={sortOption} setSortOption={setSortOption} />
          <div className="product-grid">
            {paginatedProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
          <Pagination
            total={filteredProducts.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
