'use client';

import React from 'react';

export default function Benefits() {
  const benefitsList = [
    {
      num: '01',
      title: 'Easy Access to Betting Markets',
      desc: 'With your Mahadev Book ID, you can effortlessly access an expansive range of sports coverage including live IPL cricket, global soccer tournaments, grand slam tennis, and premium casino games without having to toggle between different sites.',
    },
    {
      num: '02',
      title: 'Quick Deposits and Withdrawals',
      desc: 'Mahadev Book facilitates ultra-fast transactions through native Indian payment systems like UPI, IMPS, and Net Banking, ensuring you add capital and withdraw your winnings without unnecessary lag or administrative delays.',
    },
    {
      num: '03',
      title: 'Personalized Experience',
      desc: 'Your designated Mahadev Book ID securely organizes your activities, tracks historical participation, and maintains your personal preferences for an uncluttered and customized sports dashboard.',
    },
    {
      num: '04',
      title: 'Account Security & Data Protection',
      desc: 'Using an authorized Mahadev Book ID ensures your login credentials, transactional statements, and private records remain shielded under advanced 256-bit encryption protocols within an anti-fraud environment.',
    },
    {
      num: '05',
      title: 'Exclusive Offers & Loyalty Bonuses',
      desc: 'Registered account holders qualify for regular seasonal rewards, activity-based incentives, and referral benefits designed to maximize overall platform value and customer satisfaction.',
    },
    {
      num: '06',
      title: '24/7 Account Management & Fast Recovery',
      desc: 'Round-the-clock administrative assistance is available via WhatsApp to help check your live balance, monitor event odds, resolve transaction questions, or immediately recover login credentials if access is ever misplaced.',
    },
  ];

  const whyPopular = [
    'Comprehensive sports coverage including live international cricket, IPL, football, and tennis',
    'User-friendly and responsive design suitable for both beginners and experienced players',
    'Fast and reliable transactional processing through standard Indian payment rails (UPI, Net Banking)',
    'Robust data privacy protocols safeguarding sensitive user credentials and funds',
    'Around-the-clock human customer support directly accessible through WhatsApp messaging',
    'Continuous platform uptime with zero server lag during high-stakes championship games',
  ];

  return (
    <section id="benefits" className="section benefits-section">
      <div className="container">
        {/* Top Benefits */}
        <h2>Top Benefits of Your Mahadev Book For Online Betting</h2>
        <p className="benefits-intro">
          A Mahadev Book ID provides several critical benefits that improve your overall online sports experience:
        </p>

        <div className="editorial-benefits-list">
          {benefitsList.map((item) => (
            <div key={item.num} className="benefit-editorial-item">
              <div className="benefit-num-wrap">
                <span className="benefit-num">{item.num}</span>
              </div>
              <div className="benefit-copy">
                <h3 className="benefit-item-title">{item.title}</h3>
                <p className="benefit-item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Popular Section */}
        <div className="why-popular-box">
          <h2>Why Is Mahadev Book ID The Best Option For Online Betting?</h2>
          <p>
            Mahadev Book ID is considered one of the most reliable options for online cricket and sports enthusiasts in India due to several defining advantages:
          </p>

          <ul className="reasons-bullet-list">
            {whyPopular.map((reason, idx) => (
              <li key={idx} className="reason-bullet-item">
                <span className="reason-check">✓</span>
                <span className="reason-text">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .benefits-section {
          background-color: var(--background-secondary);
        }

        .benefits-intro {
          margin-bottom: 2rem;
          color: #cccccc;
        }

        .editorial-benefits-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .benefit-editorial-item {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          background: #0d0d0d;
          border: 1px solid var(--border);
          padding: 1.4rem;
          border-radius: 4px;
          transition: border-color 0.2s ease;
        }

        .benefit-editorial-item:hover {
          border-color: rgba(216, 169, 0, 0.4);
        }

        .benefit-num-wrap {
          width: 44px;
          height: 44px;
          min-width: 44px;
          background: rgba(216, 169, 0, 0.1);
          border: 1px solid var(--gold);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .benefit-num {
          color: var(--gold-bright);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .benefit-copy {
          flex: 1;
        }

        .benefit-item-title {
          font-size: 1.1rem;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .benefit-item-desc {
          font-size: 0.88rem;
          color: #b5b5b5;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .why-popular-box {
          background: #0d0d0d;
          border: 1px solid var(--border);
          border-left: 4px solid var(--gold);
          padding: 2rem;
          border-radius: 4px;
        }

        .reasons-bullet-list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem 1.75rem;
        }

        .reason-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #dddddd;
          font-size: 0.92rem;
          line-height: 1.5;
          margin-bottom: 0;
        }

        .reason-check {
          color: var(--gold);
          font-weight: bold;
          font-size: 1.1rem;
          line-height: 1;
        }

        @media (max-width: 900px) {
          .editorial-benefits-list {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .reasons-bullet-list {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }

          .why-popular-box {
            padding: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
