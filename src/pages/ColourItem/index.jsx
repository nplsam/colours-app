import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'

const ColourItem = () => {
  const { colour } = useParams()

  const colourHex = {
    Red: '#FF0000',
    Green: '#00FF00',
    Blue: '#0000FF',
    Yellow: '#FFFF00',
    Purple: '#800080',
    Orange: '#FFA500',
    Pink: '#FFC0CB',
    Brown: '#964B00',
    Cyan: '#00FFFF',
    Lime: '#32CD32',
  }[colour];

  return (
    <div>
      <h2>{colour}</h2>
      <div className="colour-item" style={{ backgroundColor: colourHex }}>
        <p>Hex: {colourHex}</p>
      </div>
    </div>
  );
};

export default ColourItem