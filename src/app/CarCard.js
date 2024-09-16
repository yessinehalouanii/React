// components/CarCard.js
import React from 'react';
import Image from 'next/image';

const CarCard = ({ image, title, seats, transmission, airConditioning, pricePerDay, totalPrice }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      maxWidth: '300px'
    }}>
      <div>
        <Image src={image} alt={title} width={300} height={200} style={{ borderRadius: '8px' }} />
      </div>
      <h3>{title}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span>Seats: {seats}</span>
        <span>Transmission: {transmission}</span>
        <span>A/C: {airConditioning ? 'Yes' : 'No'}</span>
      </div>
      <div>
        <p>Total for 2 days: <strong>{totalPrice} €</strong></p>
        <p>{pricePerDay} €/day</p>
      </div>
      <button style={{
        backgroundColor: '#ffc107',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        marginTop: '1rem'
      }}>
        QUOTE AND BOOKING
      </button>
    </div>
  );
};

export default CarCard;
