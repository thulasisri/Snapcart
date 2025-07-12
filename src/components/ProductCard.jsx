import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
 import './productcard.css'; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = () => {
    addToCart({ ...product, quantity: 1 });
    navigate("/cart");
  };

  const rating = product.rating?.rate;
  const count = product.rating?.count;

  return (

    <div className="card-container">
      <img
        src={product.image}
        alt={product.name}
        className="image"
        width="150"
        height="150"
         style={{ objectFit: "contain" }}
      />
      <h4 className="name">{product.name}</h4>
      <p className="price">₹{product.price}</p>
      <p className="rating">⭐ {rating} ({count} reviews)</p>
      <button onClick={handleAdd} className="button">
        Add to Cart
      </button>
    </div>
    
  );
};

export default ProductCard;
