'use client';

import React from 'react';

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="cta-content-card">
          <h2 className="cta-headline">Learn More About Mahadev Book ID</h2>
          <p className="cta-paragraph">
            Join over 1,000,000+ satisfied users across India. Connect with our dedicated 24/7 helpdesk on WhatsApp to get your official Mahadev Book ID created in less than 2 minutes. Enjoy smooth transactions, live match coverage, and verified assistance.
          </p>

          <div className="cta-buttons-wrap">
            <a
              href="https://wa.me/9187966330?text=I%20Want%20Mahadev%20Book%20ID"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-gold-pill"
            >
              <svg viewBox="0 0 448 512" className="btn-wa-svg" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span>Contact on WhatsApp</span>
            </a>
          </div>

          <div className="cta-guarantees">
            <span>⚡ Instant ID Activation</span>
            <span>🔒 256-Bit SSL Protection</span>
            <span>💬 24/7 Dedicated Indian Support</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .final-cta-section {
          padding: 3.5rem 0;
          background: linear-gradient(180deg, var(--background) 0%, #0c0c0c 100%);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .cta-content-card {
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
          background: #0d0d0d;
          border: 1px solid rgba(216, 169, 0, 0.3);
          border-radius: 8px;
          padding: 2.75rem 2rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.9), 0 0 30px rgba(216, 169, 0, 0.08);
        }

        .cta-headline {
          font-size: 2.1rem;
          color: var(--gold);
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }

        .cta-paragraph {
          font-size: 1.02rem;
          color: #cccccc;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .cta-buttons-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .btn-wa-svg {
          width: 18px;
          height: 18px;
        }

        .cta-guarantees {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 0.84rem;
          color: var(--muted);
          border-top: 1px solid rgba(41, 41, 41, 0.6);
          padding-top: 1.4rem;
        }

        @media (max-width: 768px) {
          .cta-content-card {
            padding: 2rem 1.25rem;
          }

          .cta-headline {
            font-size: 1.6rem;
          }

          .cta-paragraph {
            font-size: 0.95rem;
          }

          .cta-guarantees {
            gap: 0.85rem;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
