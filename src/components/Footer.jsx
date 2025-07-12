import React,{useState} from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
     const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000); // hide popup after 3 seconds
    }
  };
  return (
    <footer className="footer">
 < div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-column">
          <h3>SnapCart</h3>
          <p>Your one-stop shop for fashion, electronics, home essentials, and more.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div className="footer-column">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="newsletter">
  <h4>Subscribe & Save</h4>
  <p>Subscribe and get 10% off your first purchase!</p>
  <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
           
            <button type="submit">Subscribe</button>
          </form>

          {subscribed && (
            <div className="success-popup">🎉 Successfully Subscribed!</div>
          )}
</div>


      <div className="footer-bottom">
        © {new Date().getFullYear()} SnapCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
