'use client';

import React from 'react';

export default function PremiumFeatures() {
  const tableData = [
    { feature: 'Platform', details: 'Mahadev Book online platform for cricket betting access' },
    { feature: 'Focus', details: 'Specialized in online cricket betting and live sports activities' },
    { feature: 'Security', details: 'Strong 256-bit encrypted system for secure transactions and user data protection' },
    { feature: 'Customer Support', details: '24/7 dedicated support team through direct WhatsApp and phone calls' },
    { feature: 'Mobile Compatibility', details: 'Fully optimized for mobile smartphones, tablets, and desktop browsers' },
    { feature: 'Promotions', details: 'Regular incentive programs including welcome and activity-based benefits' },
    { feature: 'Payment Options', details: 'UPI (PhonePe, GPay, Paytm), wallet services, net banking, and IMPS' },
    { feature: 'Account Management', details: 'Self-service dashboard with real-time balance tracking and historical records' },
  ];

  return (
    <section className="section premium-features-section">
      <div className="container">
        <h2>Premium Features of Mahadev Book ID</h2>
        <p>
          Compare the core technical capabilities, security infrastructure, and service standards delivered across the Mahadev Book network.
        </p>

        <div className="table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Feature</th>
                <th style={{ width: '70%' }}>Details</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.feature}</td>
                  <td>{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .premium-features-section {
          background-color: var(--background);
        }
      `}</style>
    </section>
  );
}
