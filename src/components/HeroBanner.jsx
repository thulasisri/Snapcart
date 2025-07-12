import React from "react";
import "./HeroBanner.css";
import heroImage from "../assets/heroImage.jpeg";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
     <img src={heroImage} alt="Electronics Carnival" className="hero-img" /> 
      <div className="hero-content">
        <h1>Flat 50% Off</h1>
        <p>Electronics Carnival | Limited Time Offer</p>
        <div className="hero-buttons">
          <button onClick={() => navigate("/shop")}>Shop Now</button>
          <button className="outline" onClick={() => navigate("/categories")}>
            Explore Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
