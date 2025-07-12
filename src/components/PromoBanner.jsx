import React from "react";
import "./PromoBanner.css";
import { FaShippingFast } from "react-icons/fa";

const PromoBanner = () => {
  return (
    <section className="promo-banner">
      <div className="promo-content">
        <FaShippingFast className="promo-icon" />
        <div>
          <h3>Free Shipping</h3>
          <p>On all orders above ₹499. Limited Time Only!</p>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
