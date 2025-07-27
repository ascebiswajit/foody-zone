// src/components/Signup.js
import React, { useState } from 'react';
import './Login.css'; // Reuse styles

function Signup({ onSignup, switchToLogin }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup({ fullName, email, phone, password });
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        /><br />
        
         <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
                 <input
          type="tel"
          placeholder="Enter your Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Sign Up</button>
      <p style={{ marginTop: '10px' }}>
        Already have an account?{' '}
        <span
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={switchToLogin}
        >
          Login
        </span>
      </p>

      </form>

    </div>
  );
}

export default Signup;
