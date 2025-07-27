import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = (email, password) => {
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter email and password");
    }
  };

  const handleSignup = (userData) => {
    // You can send data to backend here.
    console.log("Signed up:", userData);
    setIsSignup(false); // Redirect to login
  };

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      {isLoggedIn ? (
        <Main onLogout={handleLogout} />
      ) : isSignup ? (
        <Signup onSignup={handleSignup} switchToLogin={() => setIsSignup(false)} />
      ) : (
        <Login onLogin={handleLogin} switchToSignup={() => setIsSignup(true)} />
      )}
    </>
  );
}

export default App;
