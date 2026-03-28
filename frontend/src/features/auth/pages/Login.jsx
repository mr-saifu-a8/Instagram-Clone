
import "../style/form.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <main className="auth-page">
      <div className="form-container">
        <h1>Welcome Back</h1>
        <p className="subtitle">Login to continue 🔐</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input onInput={(e)=> {setUsername(e.target.value)}} type="text" name="username" required />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input onInput={(e) => {
              setPassword(e.target.value)
            }} type="password" name="password" required />
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
