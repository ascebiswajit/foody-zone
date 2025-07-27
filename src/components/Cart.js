import React from 'react';

function Cart({ cartItems, addToCart, removeFromCart, isOpen, toggleCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Your Cart 🛒</h2>
        <button onClick={toggleCart} className="close-btn">✖</button>
      </div>

      {cartItems.length === 0 ? (
        <p style={{ marginTop: '30px', color: '#777' }}>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div>
                <strong>{item.name}</strong><br />
                <small>${item.price.toFixed(2)} × {item.qty}</small>
              </div>
              <div className="qty-control">
                <button onClick={() => removeFromCart(item.name)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-footer">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-btn" disabled={cartItems.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
