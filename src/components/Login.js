// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = ({ onLogin, switchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        { email, password }
      );

      if (response.status === 200) {
        alert(response.data.message || 'Login successful');
        onLogin(email, password); // Trigger main screen or token logic
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed';
      alert(msg);
    }
  };

  return (
    <div className="login-container">
      <h2>Foody Zone Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <div className="password-wrapper">
          <input
            type={showPwd ? 'text' : 'password'}
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="toggle-eye"
            onClick={() => setShowPwd((prev) => !prev)}
          >
            {showPwd ? '🙈' : '👁️'}
          </span>
        </div><br />

        <button type="submit">Login</button>

        <p style={{ marginTop: '10px' }}>
          Don’t have an account?{' '}
          <span
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={switchToSignup}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
