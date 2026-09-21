'use client';

import React from 'react';

export default function Features() {
  // 1. Quick Stats Highlights (circular indicators from reference)
  const circularStats = [
    {
      title: 'Active Users',
      value: '1,000,000+',
      sub: 'Verified Indian users',
    },
    {
      title: 'Winnings',
      value: '₹10 Crore +',
      sub: 'Total payouts processed',
    },
    {
      title: 'Fast Withdrawals',
      value: '24 Hours',
      sub: 'Average processing time',
    },
    {
      title: 'User Rating',
      value: '4.8 / 5.0',
      sub: 'Based on genuine feedback',
    },
  ];

  // 2. 7-Item Grid Feature Cards
  const featuresList = [
    {
      title: 'Platform',
      sub: 'Mahadev Book',
      desc: 'India’s dedicated online sports ID management ecosystem with high stability and round-the-clock server uptime.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      title: 'Specialisation',
      sub: 'Online Cricket & Sports',
      desc: 'Dedicated cricket exchange coverage, IPL tournaments, international tours, football, and tennis leagues.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
    {
      title: 'Security',
      sub: 'Advanced 256-Bit SSL',
      desc: 'Military-grade data encryption, private transactional gateways, and strict anti-fraud measures safeguarding every user.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Customer Support',
      sub: '24/7 WhatsApp & Call',
      desc: 'Direct human support agents ready on WhatsApp to solve account queries, deposit verifications, and withdrawals in minutes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: 'Mobile Compatibility',
      sub: 'Mobile & Tablet Ready',
      desc: 'Engineered for smooth responsiveness across all screen dimensions with ultra-low latency and minimal data usage.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: 'User Experience',
      sub: 'Clean & Intuitive Interface',
      desc: 'Simple layout designed for ease of navigation, swift account creation, zero clutter, and instantaneous ID delivery.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Payment Information',
      sub: 'UPI, IMPS, Cards & Wallets',
      desc: 'Multiple convenient Indian transaction avenues with verified instant deposits and streamlined withdrawal policies.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="section features-section">
      <div className="container">
        {/* Quick Highlights with Circles */}
        <div className="section-title-wrap">
          <h2>Mahadev Book ID Quick Stats</h2>
          <p>Numbers do not lie. Here is what the platform consistently delivers across India.</p>
        </div>

        <div className="circular-stats-grid">
          {circularStats.map((item, index) => (
            <div key={index} className="circle-stat-card">
              <div className="circle-ring">
                <span className="circle-stat-val">{item.value}</span>
              </div>
              <div className="circle-stat-name">{item.title}</div>
              <div className="circle-stat-sub">{item.sub}</div>
            </div>
          ))}
        </div>

        <div className="middle-action-bar">
          <a
            href="https://wa.me/9187966330?text=I%20Want%20Mahadev%20Book%20Online%20ID"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Get Online Betting ID
          </a>
        </div>

        {/* 7-Card Grid */}
        <div className="features-grid-header">
          <h2>What You Get With Mahadev Book ID?</h2>
          <p>Everything you need to get started with Mahadev Book ID in one unified place.</p>
        </div>

        <div className="features-card-grid">
          {featuresList.map((card, idx) => (
            <div key={idx} className="feature-item-card">
              <div className="feature-icon-box">{card.icon}</div>
              <h3 className="feature-item-title">{card.title}</h3>
              <div className="feature-item-sub">{card.sub}</div>
              <p className="feature-item-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features-section {
          background-color: var(--background);
        }

        .circular-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
          margin-bottom: 2.2rem;
        }

        .circle-stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem 1rem;
          background: #0b0b0b;
          border: 1px solid var(--border);
          border-radius: 6px;
          transition: border-color 0.25s ease;
        }

        .circle-stat-card:hover {
          border-color: var(--gold);
        }

        .circle-ring {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 2px solid var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle, rgba(216, 169, 0, 0.12) 0%, transparent 70%);
          margin-bottom: 1.1rem;
          box-shadow: 0 0 15px rgba(216, 169, 0, 0.15);
        }

        .circle-stat-val {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--gold-bright);
        }

        .circle-stat-name {
          font-size: 1.02rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .circle-stat-sub {
          font-size: 0.8rem;
          color: var(--muted);
        }

        .middle-action-bar {
          text-align: center;
          margin: 1.5rem 0 3.5rem;
        }

        .features-grid-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .features-grid-header h2 {
          font-size: 1.85rem;
          color: var(--gold);
          text-transform: uppercase;
        }

        .features-grid-header p {
          color: var(--muted);
        }

        .features-card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        /* Span the 7th card or make layout clean */
        .feature-item-card {
          background: #0d0d0d;
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1.6rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.25s ease;
        }

        .feature-item-card:hover {
          border-color: var(--gold);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8);
        }

        .feature-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(216, 169, 0, 0.1);
          border: 1px solid var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          margin-bottom: 1rem;
        }

        .feature-icon-box svg {
          width: 22px;
          height: 22px;
        }

        .feature-item-title {
          font-size: 1.12rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .feature-item-sub {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--gold);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .feature-item-desc {
          font-size: 0.86rem;
          color: #b5b5b5;
          line-height: 1.6;
          margin-bottom: 0;
        }

        @media (max-width: 1024px) {
          .circular-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .features-card-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .circular-stats-grid {
            grid-template-columns: 1fr;
          }

          .features-card-grid {
            grid-template-columns: 1fr;
          }

          .circle-ring {
            width: 105px;
            height: 105px;
          }
        }

        @media (max-width: 380px) {
          .circle-ring {
            width: 90px;
            height: 90px;
          }

          .circle-stat-val {
            font-size: 0.98rem;
          }

          .feature-item-card {
            padding: 1.25rem 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
