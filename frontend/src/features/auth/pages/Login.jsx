import React from "react";
import "../style/form.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="auth-page">
      <div className="form-container">
        <h1>Welcome Back</h1>
        <p className="subtitle">Login to continue 🔐</p>

        <form>
          <div className="input-group">
            <input type="text" name="username" required />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="bottom-text">
          Don’t have an account?{" "}
          <Link className="toggleAuthForm" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
