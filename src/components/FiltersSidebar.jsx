import React from "react";
import "./FiltersSidebar.css";

const FiltersSidebar = ({ filters, setFilters, products }) => {
  const brands = ["Samsung", "Nike", "Apple", "Sony"];
  const categories = [...new Set(products.map(p => p.category))];

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="filters-sidebar">
      <h3>Filters</h3>

      <label>Category</label>
      <select
        value={filters.category}
        onChange={(e) => updateFilter("category", e.target.value)}
      >
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <label>Brand</label>
      <select
        value={filters.brand}
        onChange={(e) => updateFilter("brand", e.target.value)}
      >
        <option value="">All</option>
        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <label>Price Range</label>
      <input
        type="number"
        placeholder="Min"
        value={filters.price.min}
        onChange={(e) =>
          updateFilter("price", { ...filters.price, min: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Max"
        value={filters.price.max}
        onChange={(e) =>
          updateFilter("price", { ...filters.price, max: e.target.value })
        }
      />

      <label>Rating (Minimum)</label>
      <select
        value={filters.rating}
        onChange={(e) => updateFilter("rating", parseFloat(e.target.value))}
      >
        <option value="">All</option>
        <option value="1">1★ & above</option>
        <option value="2">2★ & above</option>
        <option value="3">3★ & above</option>
        <option value="4">4★ & above</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={filters.availability}
          onChange={(e) => updateFilter("availability", e.target.checked)}
        />
        In Stock Only
      </label>
    </div>
  );
};

export default FiltersSidebar;



