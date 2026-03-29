import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

   const handleSubmit = (e) => {
     e.preventDefault();
   };
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter username" />
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
          <button className="button primary-button" type="submit">
            Register
          </button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}

export default Register