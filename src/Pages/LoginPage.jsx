import React from "react";
import { Link } from "react-router-dom";
import "./../components/AuthForm.css";

function LoginPage() {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <h3>Welcome Back</h3>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
         <div className="auth-links">
          <Link to="/ForgotPassword">Forgot Password?</Link>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div> 
      </form>
    </div>
  );
}

export default LoginPage;
