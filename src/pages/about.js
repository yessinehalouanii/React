// pages/about.js
import React from 'react';
import Navbar from '../app/Navbar';
import Footer from '../app/Footer';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: 'red', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>About Us</h1>
        <p>Details about the company will be displayed here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
