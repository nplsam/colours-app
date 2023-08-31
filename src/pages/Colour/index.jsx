import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ColourForm from '../ColourForm'
import './style.css'

const Colour = () => {
  const initialColors = [
    { id: 1, name: 'Red', hex: '#FF0000' },
    { id: 2, name: 'Green', hex: '#00FF00' },
    { id: 3, name: 'Blue', hex: '#0000FF' },
    { id: 4, name: 'Yellow', hex: '#FFFF00' },
    { id: 5, name: 'Purple', hex: '#800080' },
    { id: 6, name: 'Orange', hex: '#FFA500' },
    { id: 7, name: 'Pink', hex: '#FFC0CB' },
    { id: 8, name: 'Brown', hex: '#A52A2A' },
    { id: 9, name: 'Cyan', hex: '#00FFFF' },
    { id: 10, name: 'Lime', hex: '#00FF00' },
  ];

  const [colours, setColours] = useState(initialColors)
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const renderColours = colours.map((el) => (
    <div key={el.id}>
      <Link to={`/colours/${el.name}`}>
        <div className="item">{el.name}</div>
      </Link>
    </div>
  ));

  const handleAddColourClick = () => {
    setShowForm(true)
  };

  const addColourAndRedirect = (newColour) => {
    setColours([newColour, ...colours]);
    setShowForm(false)
  };

  return (
    <div>
      <h2>Available Colors</h2>
      <button onClick={handleAddColourClick}>Add New Colour</button>
      <div className="colours">
        {loading ? 'Loading...' : renderColours}
      </div>
      {showForm && <ColourForm setShowForm={setShowForm} onSubmit={addColourAndRedirect} />}
    </div>
  );
};

export default Colour