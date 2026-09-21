'use client';

import React from 'react';

export default function About() {
  const tableRows = [
    { category: 'Platform Name', details: 'Mahadev Book ID' },
    { category: 'Service Type', details: 'Online Cricket ID Provider and Sports Access Platform' },
    { category: 'Availability', details: 'India Focused Users (24/7 Access)' },
    { category: 'Supported Languages', details: 'English, Hindi, Regional Languages' },
    { category: 'Registration Process', details: 'Quick and Simple ID Creation via WhatsApp' },
    { category: 'Device Compatibility', details: 'Mobile (Android/iOS), Tablet, Desktop' },
    { category: 'Sports Coverage', details: 'Cricket, Football, Tennis, Live Sports & Casino' },
    { category: 'Payment Methods', details: 'UPI, Net Banking, IMPS, Wallet Services' },
    { category: 'User Access', details: 'Instant Login After ID Activation' },
    { category: 'Support Service', details: 'Round the Clock Assistance via WhatsApp and Call' },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2>About Mahadev Book ID</h2>
        
        <p>
          Mahadev Book ID is widely recognized as a reliable platform for users who want quick access to online cricket betting and sports information in India. It is designed to provide a smooth and efficient experience, allowing users to explore various sports and informational options without unnecessary complications. From live cricket matches to other major sports activities, users can access comprehensive updates in one consolidated place.
        </p>
        
        <p>
          The platform focuses on simplicity, speed, and security. With a fast registration process and stable performance across devices, users can start using their Mahadev Book ID without delays. Secure transactions and consistent support make the platform dependable for users who want a hassle-free experience in online sports information.
        </p>

        <div className="table-header-caption">
          <h3>Platform Overview & Key Specifications</h3>
        </div>

        {/* Responsive Table */}
        <div className="table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Category</th>
                <th style={{ width: '65%' }}>Details</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.category}</td>
                  <td>{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-color: var(--background);
        }

        .table-header-caption {
          margin-top: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .table-header-caption h3 {
          font-size: 1.15rem;
          color: var(--gold-bright);
        }
      `}</style>
    </section>
  );
}
