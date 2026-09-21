'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline, Text, CTA */}
          <div className="hero-content">
            <h1 className="hero-title">
              Mahadev Book ID 2026 – Trusted Online Cricket ID Provider in India
            </h1>
            <p className="hero-desc">
              Access fast and secure Mahadev Book ID and get started with online cricket betting with a reliable and smooth platform experience. Enjoy instant ID activation, verified 24/7 customer assistance, and comprehensive real-time sports coverage across India.
            </p>

            <div className="hero-cta-group">
              <a
                href="https://wa.me/9187966330?text=I%20Want%20Mahadev%20Book%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <span>Get Your Mahadev Book ID</span>
                <svg className="btn-icon" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>

              <a
                href="https://wa.me/9187966330?text=Hello%20Mahadev%20Book%20Support"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Contact on WhatsApp
              </a>
            </div>

            <p className="hero-subtext">
              🔒 100% Verified Customer Service • Instant Account Setup • UPI & Bank Transfer
            </p>
          </div>

          {/* Right Column: Hero Graphic Visual */}
          <div className="hero-visual">
            <div className="visual-card-wrap">
              <Image
                src="/images/hero-badge.png"
                alt="Mahadev Book ID 2026 Official Digital Badge"
                width={502}
                height={458}
                priority
                className="hero-badge-img"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 3rem 0 2.5rem;
          background: radial-gradient(circle at 80% 20%, rgba(216, 169, 0, 0.07) 0%, transparent 60%);
          border-bottom: 1px solid var(--border);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2.5rem;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
        }

        .hero-title {
          font-size: 2.35rem;
          color: var(--gold);
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 1.2rem;
          letter-spacing: -0.02em;
        }

        .hero-desc {
          color: #cccccc;
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.8rem;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .btn-icon {
          width: 17px;
          height: 17px;
        }

        .hero-subtext {
          font-size: 0.82rem;
          color: var(--muted);
          margin-top: 0.3rem;
          margin-bottom: 0;
          letter-spacing: 0.02em;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-card-wrap {
          position: relative;
          padding: 0.5rem;
          background: rgba(17, 17, 17, 0.5);
          border: 1px solid rgba(216, 169, 0, 0.25);
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 25px rgba(216, 169, 0, 0.08);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .visual-card-wrap:hover {
          border-color: var(--gold);
          transform: translateY(-4px);
        }

        .hero-badge-img {
          width: 100%;
          height: auto;
          max-width: 460px;
          display: block;
          border-radius: 6px;
        }

        @media (max-width: 900px) {
          .hero-section {
            padding: 2.2rem 0;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: left;
          }

          .hero-title {
            font-size: 1.75rem;
          }

          .hero-desc {
            font-size: 0.96rem;
          }

          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-cta-group .btn-gold,
          .hero-cta-group .btn-secondary {
            width: 100%;
            text-align: center;
          }

          .visual-card-wrap {
            max-width: 380px;
          }
        }
      `}</style>
    </section>
  );
}
