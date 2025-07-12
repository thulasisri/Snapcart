import React from "react";
import HeroBanner from "../components/HeroBanner";
// import "./../styles/HomePage.css";
import banners from "../components/Banner";
import PromoBanner from "../components/PromoBanner";
const HomePage = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <banners />
      <PromoBanner />
      {/* Add more sections below: FeaturedCategories, BestSellers, etc. */}
    </div>
  );
};

export default HomePage;
