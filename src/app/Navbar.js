"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
 // Import Link component

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: 'black',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/images/mlk.jpg" alt="Logo" width={50} height={50} style={{ borderRadius: '50%' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link href="/pricing" passHref>
          <button style={{
            background: 'linear-gradient(135deg, #ff0000, #ff6347)',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            margin: '0 1rem',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(255, 0, 0, 0.5)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 0, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 0, 0, 0.5)';
            }}
          >
            Pricing
          </button>
        </Link>
        <Link href="/about" passHref>
          <button style={{
            background: 'linear-gradient(135deg, #ff0000, #ff6347)',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            margin: '0 1rem',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(255, 0, 0, 0.5)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 0, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 0, 0, 0.5)';
            }}
          >
            About Us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
