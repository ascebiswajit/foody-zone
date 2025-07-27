import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Signup({ onSignup, switchToLogin }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!fullName || fullName.length < 3) {
      alert('❌ Full name must be at least 3 characters.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert('❌ Please enter a valid email address.');
      return false;
    }

    const phoneRegex = /^\d{10,}$/;
    if (!phone || !phoneRegex.test(phone)) {
      alert('❌ Please enter a valid 10-digit phone number.');
      return false;
    }

    if (!password || password.length < 6) {
      alert('❌ Password must be at least 6 characters long.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/signup`,
        {
          name: fullName,
          email,
          password,
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert('✅ Signup successful!');
        onSignup({ fullName, email, phone, password });
      } else {
        alert(`⚠️ Unexpected response: ${response.status}`);
      }
    } catch (error) {
      if (error.response) {
        alert(`❌ ${error.response.data.message}`);
      } else {
        alert('❌ Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
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
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>

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
