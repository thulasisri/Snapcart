import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.item}>
              <img src={item.image} alt={item.title} width="80" />
              <div style={{ marginLeft: "1rem" }}>
                <h4>{item.title}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <hr />
          <h3 style={styles.total}>Total: ₹{total.toFixed(2)}</h3>
          <button onClick={clearCart} style={styles.clearBtn}>Clear Cart</button>
        </>
        
      )}
      <div style={styles.buttonGroup}>
  <button onClick={() => navigate("/checkout")} style={styles.checkoutBtn}>
    Proceed to Checkout
  </button>
  <button onClick={() => navigate("/shopPage")} style={styles.gobackBTN}>
    Go Back
  </button>
</div>

    </div>
  );
};

const styles = {
  total: {
    marginTop: "1rem",
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  clearBtn: {
    padding: "10px 20px",
    backgroundColor: "#ff5252",       // red tone
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s ease",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    background: "#f2f2f2",
    padding: "1rem",
    borderRadius: "8px",
  },
  buttonGroup: {
    display: "flex",
    gap: "12px",        // adds spacing between buttons
    marginTop: "20px",
  },
  checkoutBtn: {
    padding: "10px 24px",
    backgroundColor: "#4CAF50",  // green
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1rem",
    transition: "background 0.3s ease",
  },
  gobackBTN: {
    padding: "10px 24px",
    backgroundColor: "#f44336",  // red
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1rem",
    transition: "background 0.3s ease",
  }
  
};

export default CartPage;
