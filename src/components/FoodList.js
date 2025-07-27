import React, { useState } from 'react';
import './FoodList.css'; // Make sure to create and import styles

const foodItems = [
  { name: 'Boiled Egg', price: 10, cal: 78, time: '5 min', rating: 4.5, category: 'Breakfast' },
  { name: 'Ramen', price: 25, cal: 436, time: '15 min', rating: 4.8, category: 'Lunch' },
  { name: 'Chicken Curry', price: 35, cal: 540, time: '30 min', rating: 4.7, category: 'Dinner' },
  { name: 'Toast', price: 5, cal: 120, time: '4 min', rating: 4.2, category: 'Breakfast' },
];

function FoodList({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleCategory = (cat) => setSelectedCategory(cat);

  const filteredItems = foodItems.filter(item => {
    const matchName = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchName && matchCategory;
  });

  return (
    <div className="food-section">
      <div className="food-header">
        <h2>🍴 Explore <span className="highlight">Delicious</span> Meals</h2>
        <p>Pick from a wide variety of dishes to satisfy your cravings</p>
        <input
          type="text"
          className="food-search"
          placeholder="🔍 Search food by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="food-filters">
        {['All', 'Breakfast', 'Lunch', 'Dinner'].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="food-cards">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => (
            <div className="food-card" key={idx}>
              <div className="card-top">
                <span className="food-time">{item.time}</span>
                <span className="food-category">{item.category}</span>
              </div>
              <h3 className="food-name">{item.name}</h3>
              <p className="food-meta">{item.cal} cal • ⭐ {item.rating}</p>
              <p className="food-price">${item.price.toFixed(2)}</p>
              <button className="add-btn" onClick={() => addToCart(item)}>+ Add to Cart</button>
            </div>
          ))
        ) : (
          <p className="no-results">😞 No matching food found</p>
        )}
      </div>
    </div>
  );
}

export default FoodList;
