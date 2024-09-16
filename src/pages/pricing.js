// pages/pricing.js
import React from 'react';



import CarCard from '@/app/CarCard';
import Navbar from '@/app/Navbar';
import Footer from '@/app/Footer';

const PricingPage = () => {
  const cars = [
    {
      image: '/images/nn.jpg',
      title: 'Hyundai i10 BVA',
      seats: 4,
      transmission: 'Automatic',
      airConditioning: true,
      pricePerDay: 75,
      totalPrice: 150
    },
    {
      image: '/images/nn.jpg',
      title: 'Skoda Fabia 2023',
      seats: 5,
      transmission: 'Manual',
      airConditioning: true,
      pricePerDay: 75,
      totalPrice: 150
    },
    {
      image: '/images/nn.jpg',
      title: 'Seat Ibiza BVA',
      seats: 5,
      transmission: 'Automatic',
      airConditioning: true,
      pricePerDay: 90,
      totalPrice: 180
    }
    // Add more cars as needed
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ padding: '2rem', flex: '1' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Car Rentals</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
