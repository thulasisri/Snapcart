import React from "react";
import { Link } from "react-router-dom";
import "./../components/AuthForm.css";

function SignupPage() {
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default SignupPage;
