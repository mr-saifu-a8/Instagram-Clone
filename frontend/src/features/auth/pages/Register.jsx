import React from "react";
import "../style/form.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="auth-page">
      <div className="form-container">
        <h1>Create Account</h1>
        <p className="subtitle">Join us and get started 🚀</p>

        <form>
          <div className="input-group">
            <input type="text" name="username" required />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>

          <button type="submit">Create Account</button>
        </form>

        <p className="bottom-text">
          Already have an account?{" "}
          <Link className="toggleAuthForm" to="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
