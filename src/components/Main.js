import React, { useState } from 'react';
import FoodList from './FoodList';
import Cart from './Cart';
import logo from '../logo.svg';
import './Main.css';

function Main({ onLogout }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart with quantity management
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.name === item.name);
      if (existing) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prevItems, { ...item, qty: 1 }];
    });
  };

  // Remove item or decrease quantity
  const handleRemoveFromCart = (itemName) => {
    setCartItems((prevItems) =>
      prevItems
        .map((i) =>
          i.name === itemName ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <header className="app-header">
        <div className="logo-area">
          <img src={logo} alt="logo" className="logo" />
          <span>Foody Zone</span>
        </div>

        <div className="header-buttons">
          <button className="cart-toggle" onClick={toggleCart}>
            🛒 Cart ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
          </button>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </header>

      <main>
        <FoodList addToCart={handleAddToCart} />
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          isOpen={isCartOpen}
          toggleCart={toggleCart}
        />
      </main>
    </>
  );
}

export default Main;
