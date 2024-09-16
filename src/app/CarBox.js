// components/CarBox.js
import React from 'react';

const CarBox = ({ image, text }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '1rem',
      margin: '1rem',
      width: '30%',
      textAlign: 'center',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        height: '200px', // Set a fixed height for the image container
        overflow: 'hidden',
        borderRadius: '15px',
      }}>
        <img src={image} alt={text} style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the image covers the container without distortion
          borderRadius: '15px',
        }} />
      </div>
      <p style={{ marginTop: '1rem', color: 'black' }}>{text}</p>
    </div>
  );
};

export default CarBox;
