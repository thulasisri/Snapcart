import React from 'react';
import { Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import CategoryPage from "./Pages/CategoryPage";
import Home from './Pages/Home';
import ShopPage from './Pages/ShopPage';
import LoginPage from "./Pages/LoginPage";
import Signup from "./Pages/SignupPage";
import CategoriesPage from './components/CategoriesPage';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import CheckoutPage from './components/CheckoutPage';
function App() {
  return (
    <div className="font-sans">
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<CheckoutPage />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
