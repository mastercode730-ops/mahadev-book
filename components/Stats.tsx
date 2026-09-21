'use client';

import React from 'react';

export default function Stats() {
  const statsData = [
    {
      number: '100+',
      label: 'Games Available',
      desc: 'Cricket, Football, Tennis & Casino',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      number: '1M+',
      label: 'Active Users',
      desc: 'Trusted community across India',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      number: '24/7',
      label: 'Customer Support',
      desc: 'Instant WhatsApp assistance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      ),
    },
    {
      number: '100%',
      label: 'Mobile Friendly',
      desc: 'Smooth performance on all devices',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
  ];

  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((item, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrap">{item.icon}</div>
              <div className="stat-content">
                <div className="stat-number">{item.number}</div>
                <div className="stat-label">{item.label}</div>
                <div className="stat-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-strip {
          background-color: var(--background-secondary);
          border-bottom: 1px solid var(--border);
          padding: 1.5rem 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          padding: 0.9rem 1.25rem;
          background: #0f0f0f;
          border: 1px solid #1f1f1f;
          border-radius: 4px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .stat-card:hover {
          border-color: rgba(216, 169, 0, 0.4);
          transform: translateY(-2px);
        }

        .stat-icon-wrap {
          width: 42px;
          height: 42px;
          min-width: 42px;
          border-radius: 50%;
          background: rgba(216, 169, 0, 0.1);
          border: 1px solid rgba(216, 169, 0, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
        }

        .stat-icon-wrap svg {
          width: 20px;
          height: 20px;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--gold);
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .stat-label {
          font-size: 0.92rem;
          font-weight: 600;
          color: #ffffff;
          margin-top: 0.15rem;
        }

        .stat-desc {
          font-size: 0.76rem;
          color: var(--muted);
          margin-top: 0.15rem;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 540px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }

          .stat-card {
            padding: 0.85rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}
