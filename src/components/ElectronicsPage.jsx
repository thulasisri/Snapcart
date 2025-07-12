
import React from 'react';
import { products } from '../data/Eproducts';
import './ElectronicsPage.css'; 
const ElectronicsPage = () => {
  const electronicsProducts = products.filter(p => p.category === "Electronics");

  return (
    <div className="electronics-section">
      <h2 className="section-title">Electronics</h2>
      <div className="product-grid">
        {electronicsProducts.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="product-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsPage;
