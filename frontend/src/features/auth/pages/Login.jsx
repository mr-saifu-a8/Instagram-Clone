import React, { useState } from "react";
import "../style/style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { user, loading, handleLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin(username, password)
    console.log("user loggedin");
    
    navigate("/")
  };

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            id="password"
            type="password"
            placeholder="Enter password"
          />
          <button className="button primary-button" type="submit">
            Login
          </button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
