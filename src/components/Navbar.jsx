import React, { useState } from "react";
import './Navbar.css';
import logo from '../assets/logo.png';
import pattern from '../assets/pattern.png';
import { FaHome, FaTimes, FaShoppingBag, FaThLarge, FaBars, FaShoppingCart, FaUser, FaUserPlus, FaSearch } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const toggleMenu = () => setIsMobile(!isMobile);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="navbar-logo">SnapCart</h1>
      <ul className={`navbar-links ${isMobile ? 'show' : ''}`}>
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon-label">
              <img src={pattern} className="hover-img" alt="Home" />
              <FaHome /> Home
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon-label">
              <img src={pattern} className="hover-img" alt="shop" />
              <FaShoppingBag /> Shop
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/categories" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon-label">
              <img src={pattern} className="hover-img" alt="Home" />
              <FaThLarge /> Categories
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon-label">
              <img src={pattern} className="hover-img" alt="Home" />
              <FaShoppingCart /> Cart
            </span>
          </NavLink>
        </li>

        <div className="navbar-search">
          <input type="text" placeholder="Search for products..." />
          <button className="search-icon-btn">
            <FaSearch />
          </button>
        </div>

        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon-label">
              <img src={pattern} className="hover-img" alt="Home" />
              <FaUser /> Login
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Signup" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon-label">
              <img src={pattern} className="hover-img" alt="Home" />
              <FaUserPlus /> Sign In
            </span>
          </NavLink>
        </li>
      </ul>

      <button className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
