import React from "react";
import "./SortBar.css";

const SortBar = ({ sortOption, setSortOption }) => {
  return (
    <div className="sort-bar">
      <label>Sort by:</label>
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="default">Default</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortBar;