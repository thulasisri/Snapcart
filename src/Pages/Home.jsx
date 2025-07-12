import React from "react";
import HeroBanner from "../components/HeroBanner";
// import "./../styles/HomePage.css";
import PromoBanner from "../components/PromoBanner";
const HomePage = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <PromoBanner />
      {/* Add more sections below: FeaturedCategories, BestSellers, etc. */}
    </div>
  );
};

export default HomePage;
