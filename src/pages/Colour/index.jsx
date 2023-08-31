import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Colour = () => {
  const initialColors = [
    { id: 1, name: 'Red', hex: '#FF0000' },
    { id: 2, name: 'Green', hex: '#00FF00' },
    { id: 3, name: 'Blue', hex: '#0000FF' },
    { id: 4, name: 'Yellow', hex: '#FFFF00' },
    { id: 5, name: 'Purple', hex: '#800080' },
  ];

  const [colours, setColours] = useState(initialColors);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const renderColours = colours.map((el) => (
    <div key={el.id}>
      <Link to={`/colours/${el.name}`}>
        <div className="item">{el.name}</div>
      </Link>
    </div>
  ));

  return (
    <div>
      <h2>Available Colors</h2>
      <div className="colours">
        {loading ? 'Loading...' : renderColours}
      </div>
    </div>
  );
};

export default Colour;