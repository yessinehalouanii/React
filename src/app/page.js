// pages/index.js
import React from 'react';


import Navbar from './Navbar';
import Footer from './Footer';
import CarSection from './CarSection';
import CarBox from './CarBox';
const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'white', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Navbar />
      <main>
        <CarSection
          image="/images/poppp.jpg"
          description="looking to rent a car and wondering wich place to go , you're in the right one , we offer wide range of cars and our offers are special so be stress-free and enjoy our proposals"
        />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
          <CarBox image="/images/nn.jpg" text="luxury cars for a weeding or a special day in your life with normal price range " />
          <CarBox image="/images/never mind.png" text="offordable cars for a visit or a vacation and daily usage" />
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
