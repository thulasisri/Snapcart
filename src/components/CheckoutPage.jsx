import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", address: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("🛒 Your cart is empty.");
      return;
    }
    alert(`✅ Order placed successfully, ${form.name}!`);
    clearCart();
    setForm({ name: "", address: "", email: "" });
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-wrapper">
      <div className="checkout-container">
        <h2 className="checkout-heading">Checkout</h2>
        <form onSubmit={handleSubmit} className="checkout-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="checkout-input"
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            className="checkout-textarea"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="checkout-input"
            required
          />
          <input type="tel" name="phone" placeholder="Phone Number" className="checkout-input" required />

<select name="payment" className="checkout-select" required>
  <option value="">Select Payment Method</option>
  <option value="cod">Cash on Delivery</option>
  <option value="upi">UPI</option>
  <option value="card">Credit/Debit Card</option>
</select>

          <button type="submit" className="checkout-button">
            Place Order
          </button>
        </form>
      </div>

      <div className="cart-summary">
        <h3>Your Bag 🛍️</h3>
        {cartItems.length === 0 ? (
          <p>No items in your bag.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <p className="title">{item.title}</p>
                  <p>
                    Qty: {item.quantity} × ₹{item.price}
                  </p>
                  <p className="subtotal">
                    Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <hr />
            <h4>Total: ₹{total.toFixed(2)}</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
