import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin, switchToSignup }) {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    
    <div className="login-container">
      <h2>Foody Zone Login</h2>
      
      <form onSubmit={handleSubmit}>

        
         <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
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
}

export default Login;
