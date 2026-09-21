'use client';

import React from 'react';
import Image from 'next/image';

export default function WhatIs() {
  const processSteps = [
    {
      num: '01',
      title: 'Contact Us for ID',
      desc: 'Get in touch with our team through the available WhatsApp contact options to request your Mahadev Book ID.',
    },
    {
      num: '02',
      title: 'Get Your Login Details',
      desc: 'Our support desk creates your official account ID and shares your personalized login credentials instantly.',
    },
    {
      num: '03',
      title: 'Access Your Account',
      desc: 'Use the provided details to log in smoothly across mobile, tablet, or desktop web browsers without delay.',
    },
    {
      num: '04',
      title: 'Add Funds Securely',
      desc: 'Deposit funds securely using convenient Indian payment methods such as UPI (GPay, PhonePe, Paytm) or bank transfer.',
    },
    {
      num: '05',
      title: 'Start Using Services',
      desc: 'Explore available sports schedules, live cricket matches, and premier gaming options according to your preference.',
    },
    {
      num: '06',
      title: 'Track Your Activity',
      desc: 'Monitor your gaming activity, active markets, and balance updates directly through your account dashboard in real time.',
    },
    {
      num: '07',
      title: 'Withdraw Anytime',
      desc: 'Easily submit withdrawal requests with rapid processing directly back into your verified bank account or UPI ID.',
    },
  ];

  return (
    <section className="section what-is-section">
      <div className="container">
        <h2>What Is Mahadev Book ?</h2>
        <p>
          Mahadev Book is an online sports information and cricket ID platform that provides users with access to cricket markets and other sports-based activities through a secure and structured system. It is designed to offer a simple, transparent, and efficient way for users across India to participate in sports information without complicated or opaque processes.
        </p>
        <p>
          The platform allows users to explore various sports events, including premier domestic and international cricket series (IPL, World Cup, T20 leagues, Test matches), football tournaments, and live events in real time. With an unrelenting focus on ease of use, rock-solid security, and responsive 24/7 client care, Mahadev Book ensures that users can access all platform utilities without disruptions.
        </p>

        {/* Two Column Layout: Left Image Card, Right Process */}
        <div className="what-is-grid">
          {/* Left Column: Themed Card Graphic */}
          <div className="card-visual-col">
            <div className="card-outer-frame">
              <Image
                src="/images/mahadev-card.jpg"
                alt="Mahadev Book Gold Card and Chips"
                width={380}
                height={560}
                className="card-media-img"
              />
              <div className="card-cta-overlay">
                <a
                  href="https://wa.me/9187966330?text=I%20Want%20Mahadev%20Book%20ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold btn-gold-pill"
                >
                  Get Mahadev Book ID
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: How It Works Process Checklist */}
          <div className="process-content-col" id="how-it-works">
            <h2 className="process-title">How Mahadev Book ID Works?</h2>
            <p className="process-intro">To start using your Mahadev Book ID, follow these straightforward steps:</p>

            <div className="steps-list">
              {processSteps.map((step) => (
                <div key={step.num} className="step-row">
                  <div className="step-badge">
                    <span className="step-num">{step.num}</span>
                  </div>
                  <div className="step-text">
                    <h4 className="step-heading">{step.title}</h4>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="process-cta-wrap">
              <a
                href="https://wa.me/9187966330?text=I%20Want%20Mahadev%20Book%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Get Mahadev Book ID Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .what-is-section {
          background-color: var(--background-secondary);
        }

        .what-is-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3rem;
          margin-top: 2.2rem;
          align-items: start;
        }

        .card-visual-col {
          display: flex;
          justify-content: center;
        }

        .card-outer-frame {
          position: relative;
          background: #0d0d0d;
          border: 1px solid rgba(216, 169, 0, 0.35);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.9), 0 0 20px rgba(216, 169, 0, 0.1);
          max-width: 400px;
          width: 100%;
        }

        .card-media-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .card-cta-overlay {
          padding: 1.25rem;
          background: linear-gradient(to top, rgba(5, 5, 5, 0.98), rgba(5, 5, 5, 0.8));
          text-align: center;
          border-top: 1px solid var(--border);
        }

        .card-cta-overlay .btn-gold {
          width: 100%;
        }

        .process-title {
          font-size: 1.65rem;
          color: var(--gold);
          margin-bottom: 0.5rem;
        }

        .process-intro {
          color: var(--muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .step-row {
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
          padding: 0.85rem 1rem;
          background: #0d0d0d;
          border: 1px solid #1c1c1c;
          border-radius: 4px;
          transition: border-color 0.2s ease;
        }

        .step-row:hover {
          border-color: rgba(216, 169, 0, 0.4);
        }

        .step-badge {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 50%;
          background: rgba(216, 169, 0, 0.12);
          border: 1px solid var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-num {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--gold-bright);
        }

        .step-text {
          flex: 1;
        }

        .step-heading {
          font-size: 1.02rem;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .step-desc {
          font-size: 0.88rem;
          color: #bbbbbb;
          line-height: 1.5;
          margin-bottom: 0;
        }

        .process-cta-wrap {
          margin-top: 1.75rem;
        }

        @media (max-width: 900px) {
          .what-is-grid {
            grid-template-columns: 1fr;
            gap: 2.2rem;
          }

          .card-visual-col {
            order: 2;
          }

          .process-content-col {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
