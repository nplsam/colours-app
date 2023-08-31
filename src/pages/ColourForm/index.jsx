import React, { useState } from 'react'

const ColourForm = ({ setShowForm, onSubmit, onCancel }) => {
  const [colourName, setColourName] = useState('')
  const [colourHex, setColourHex] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newColour = {
      id: Date.now(),
      name: colourName,
      hex: colourHex,
    };

    onSubmit(newColour)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Colour</h2>
      <label>
        Colour Name:
        <input
          type="text"
          value={colourName}
          onChange={(e) => setColourName(e.target.value)}
        />
      </label>
      <label>
        Colour Hex:
        <input
          type="text"
          value={colourHex}
          onChange={(e) => setColourHex(e.target.value)}
        />
      </label>
      <button type="submit">Add Colour</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ColourForm;