import React from "react";
import { Link } from "react-router-dom";
import "./../components/AuthForm.css";

function ForgotPasswordPage() {
  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form className="auth-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Reset Password</button>
        <p>
          Back to <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
