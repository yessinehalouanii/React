// components/CarSection.js
import React from 'react';

const CarSection = ({ image, description }) => {
  return (
    <div style={{
      position: 'relative', // Make the container a positioning context
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '2rem',
      margin: '2rem 0',
      maxWidth: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px',
       color: 'rgba(255, 255, 255, 0.85)',
    }}>
      {/* Text positioned exactly in the space you indicated */}
      <div style={{
        position: 'absolute',
        top: '55%', // Adjust to position closer to the top
        left: '15%',
        right:'55%', // Adjust to position closer to the left
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        borderRadius: '5px',
        padding: '0.5rem 1rem',
        maxWidth: '60%',
        fontFamily: `'Roboto', sans-serif`, // Custom font style
        fontSize: '1.5rem', // Font size
        fontWeight: 'bold', // Font weight
        letterSpacing: '1px', // Letter spacing
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Text shadow for texture
      }}>
        <p style={{ margin: 0 }}>{description}</p>
      </div>
    </div>
  );
};

export default CarSection;
