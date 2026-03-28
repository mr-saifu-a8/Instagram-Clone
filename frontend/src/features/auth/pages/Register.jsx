import React, { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          email,
          password,
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <main className="auth-page">
      <div className="form-container">
        <h1>Create Account</h1>
        <p className="subtitle">Join us and get started 🚀</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              onInput={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              name="username"
              required
            />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              required
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              onInput={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              required
            />
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
