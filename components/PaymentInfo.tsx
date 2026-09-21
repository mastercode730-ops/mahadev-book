'use client';

import React from 'react';

export default function PaymentInfo() {
  const depositMethods = [
    { name: 'UPI Services', desc: 'Instant transfers via Google Pay, PhonePe, Paytm, and BHIM UPI.' },
    { name: 'IMPS & Net Banking', desc: 'Direct electronic account transfers from all premier Indian public and private banks.' },
    { name: 'Digital Wallets', desc: 'Fast, hassle-free top-ups via leading approved wallet services.' },
    { name: 'Debit / Credit Cards', desc: 'Supported payment networks with standard two-factor OTP authentication.' },
  ];

  const withdrawalMethods = [
    { name: 'Direct UPI Withdrawal', desc: 'Direct balance transfer to your linked VPA/UPI ID within hours.' },
    { name: 'Bank Transfer (IMPS/NEFT)', desc: 'Standard direct deposit directly into your verified checking or savings bank account.' },
    { name: 'Wallet Credit', desc: 'Convenient payouts directly to your registered digital wallet profile.' },
  ];

  const withdrawSteps = [
    'Log in using your verified Mahadev Book ID credentials.',
    'Navigate to the account withdrawal or balance management section.',
    'Select your preferred payout method (UPI or Bank Account).',
    'Specify the exact amount you wish to withdraw.',
    'Review the account destination details and confirm your request.',
    'Our finance desk completes rapid validation in 1–2 hours.',
    'Funds are credited directly to your bank account with instant SMS confirmation.',
  ];

  const bonusesTable = [
    { type: 'Welcome Bonus', desc: 'Special incentive credited on initial account creation and deposit', eligibility: 'New registered users', claim: 'Auto-applied on first deposit', val: 'Up to ₹10,000' },
    { type: 'Referral Bonus', desc: 'Reward for inviting friends who register their Mahadev Book ID', eligibility: 'Active account holders', claim: 'Share referral code via WhatsApp', val: 'Up to ₹2,000' },
    { type: 'Cashback Offers', desc: 'Percentage return based on regular sports participation volume', eligibility: 'Selected active users', claim: 'Auto-credited weekly', val: 'Up to 10%' },
    { type: 'Loyalty Rewards', desc: 'Monthly tier benefits for consistent platform members', eligibility: 'Based on account activity', claim: 'Contact WhatsApp account manager', val: 'Monthly Tier Perks' },
    { type: 'Weekly Event Promos', desc: 'Exclusive bonus odds and contests during major cricket tournaments', eligibility: 'All registered users', claim: 'Available during tournament windows', val: 'Event Specific' },
  ];

  return (
    <section className="section payment-info-section">
      <div className="container">
        {/* 1. Bonuses and Rewards Table */}
        <div className="bonuses-block">
          <h2>Mahadev Book ID Bonuses and Rewards for Players</h2>
          <p>
            Mahadev Book ID provides multiple promotional offers and loyalty incentives designed to elevate your overall sports participation value:
          </p>

          <div className="table-wrapper">
            <table className="styled-table">
              <thead>
                <tr>
                  <th style={{ width: '20%' }}>Bonus Type</th>
                  <th style={{ width: '32%' }}>Description</th>
                  <th style={{ width: '18%' }}>Eligibility</th>
                  <th style={{ width: '18%' }}>How to Claim</th>
                  <th style={{ width: '12%' }}>Value</th>
                </tr>
              </thead>
              <tbody>
                {bonusesTable.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.type}</td>
                    <td>{item.desc}</td>
                    <td>{item.eligibility}</td>
                    <td>{item.claim}</td>
                    <td style={{ color: 'var(--gold-bright)', fontWeight: 700 }}>{item.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Deposit & Withdrawal Methods */}
        <div className="methods-block">
          <h2>Deposit and Withdrawal Payment Methods</h2>
          <p>
            Mahadev Book ID supports a comprehensive suite of secure Indian payment methods for seamless deposits and swift payouts:
          </p>

          <div className="methods-columns">
            {/* Deposit Methods */}
            <div className="method-col-card">
              <h3 className="col-title">Mahadev Book Deposit Methods</h3>
              <ul className="method-items">
                {depositMethods.map((m, i) => (
                  <li key={i}>
                    <strong>{m.name}:</strong> {m.desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Withdrawal Methods */}
            <div className="method-col-card">
              <h3 className="col-title">Mahadev Book Withdrawal Methods</h3>
              <ul className="method-items">
                {withdrawalMethods.map((m, i) => (
                  <li key={i}>
                    <strong>{m.name}:</strong> {m.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Processing Times */}
          <div className="processing-times-card">
            <h3 className="processing-heading">Transaction Processing Timelines</h3>
            <div className="times-grid">
              <div className="time-item">
                <span className="time-val">Instant</span>
                <span className="time-label">UPI Deposits</span>
              </div>
              <div className="time-item">
                <span className="time-val">1 - 2 Hours</span>
                <span className="time-label">Average Withdrawal</span>
              </div>
              <div className="time-item">
                <span className="time-val">24/7</span>
                <span className="time-label">Payment Desk Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. How to Withdraw Cash */}
        <div className="withdraw-steps-block">
          <h2>How to Withdraw Cash from Mahadev Book?</h2>
          <p>
            Withdrawing your account balance is designed to be hassle-free. Follow these step-by-step instructions:
          </p>

          <ol className="styled-numbered-list">
            {withdrawSteps.map((step, idx) => (
              <li key={idx}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style jsx>{`
        .payment-info-section {
          background-color: var(--background);
        }

        .bonuses-block,
        .methods-block {
          margin-bottom: 3rem;
        }

        .methods-columns {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
          margin-top: 1.5rem;
        }

        .method-col-card {
          background: #0c0c0c;
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1.5rem;
        }

        .col-title {
          font-size: 1.15rem;
          color: var(--gold-bright);
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(216, 169, 0, 0.2);
          padding-bottom: 0.5rem;
        }

        .method-items {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .method-items li {
          color: #cccccc;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 0;
        }

        .method-items li strong {
          color: #ffffff;
        }

        .processing-times-card {
          background: #0f0f0f;
          border: 1px solid rgba(216, 169, 0, 0.25);
          border-radius: 4px;
          padding: 1.4rem 1.5rem;
          margin-top: 1.5rem;
        }

        .processing-heading {
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 1rem;
          text-align: center;
        }

        .times-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          text-align: center;
        }

        .time-item {
          display: flex;
          flex-direction: column;
        }

        .time-val {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--gold);
        }

        .time-label {
          font-size: 0.8rem;
          color: var(--muted);
          margin-top: 0.15rem;
        }

        .styled-numbered-list {
          padding-left: 1.4rem;
          margin-top: 1rem;
        }

        .styled-numbered-list li {
          color: #cccccc;
          padding-left: 0.35rem;
          margin-bottom: 0.65rem;
          font-size: 0.95rem;
        }

        @media (max-width: 900px) {
          .methods-columns {
            grid-template-columns: 1fr;
          }

          .times-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
