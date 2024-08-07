import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Add your login logic here
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <p>Welcome back! Please enter your details.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember for 30 days
            </label>
            <Link to="/forgot-password">Forgot password</Link>
          </div>

          <button type="submit">Sign In</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>

      <div className="container">
        <div className="branding">
          <div className="logo">
            <img src="" alt="Logo" />
          </div>
          <p>Launchpad Coworking Inventory</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
