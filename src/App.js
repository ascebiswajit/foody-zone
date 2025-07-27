import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Main from './components/Main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter email and password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? <Main onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
    </>
  );
}

export default App;
