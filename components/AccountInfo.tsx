'use client';

import React from 'react';

export default function AccountInfo() {
  const creationSteps = [
    'Contact us via WhatsApp to request your personalized Mahadev Book ID.',
    'Share your basic details such as your preferred username and active mobile contact number.',
    'Our verification desk registers and configures your official Mahadev Book ID.',
    'Receive your private login credentials and secure portal address from the helpdesk.',
    'Log in to your account using the provided ID and temporary password.',
    'Add your initial funds using native UPI (Paytm, GPay, PhonePe) or direct bank transfer.',
    'Start exploring live cricket events, sports odds, and platform utilities right away.',
  ];

  const verificationChecklist = [
    'Log in using your designated Mahadev Book ID and credentials.',
    'Navigate to the account settings or profile verification section.',
    'Provide your basic identity confirmation details accurately.',
    'Submit your documentation securely through the platform interface.',
    'Wait for quick validation confirmation from our 24/7 compliance team.',
    'Once verified, your account is upgraded for instant withdrawals and elevated limits.',
  ];

  const whatsappSteps = [
    'Save our official WhatsApp helpdesk number or click the WhatsApp CTA button.',
    'Send an initial text mentioning "I Want Mahadev Book ID".',
    'Share your registered contact number with our executive.',
    'Our support agent guides you through step-by-step identity confirmation.',
    'Complete the quick verification questions within 2–3 minutes.',
    'Receive immediate account confirmation and your activated ID access credentials.',
  ];

  return (
    <section className="section account-info-section">
      <div className="container">
        {/* 1. Account Creation */}
        <div className="account-block">
          <h2>How to Create Your Mahadev Betting ID Account?</h2>
          <p>
            Creating a Mahadev Book ID is simple, safe, and can be completed in just a few minutes through our direct WhatsApp assistance:
          </p>

          <ol className="styled-numbered-list">
            {creationSteps.map((step, idx) => (
              <li key={idx}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* 2. Account Verification */}
        <div className="account-block">
          <h2>Mahadev Book ID Account Verification Process</h2>
          <p>
            Account verification guarantees legitimate user ownership, shields personal funds, and enables expedited processing for all withdrawal requests:
          </p>

          <ul className="styled-checklist">
            {verificationChecklist.map((item, idx) => (
              <li key={idx} className="check-item">
                <span className="check-icon">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. WhatsApp Information CTA Block */}
        <div className="whatsapp-info-card">
          <div className="wa-card-header">
            <h2>How to Get Verified Mahadev Book Account ID Using WhatsApp?</h2>
            <p>
              WhatsApp is the fastest, safest, and most convenient channel for creating and managing your Mahadev Book ID without waiting in lines:
            </p>
          </div>

          <ol className="wa-steps-list">
            {whatsappSteps.map((step, idx) => (
              <li key={idx}>
                <strong>Step {idx + 1}:</strong> {step}
              </li>
            ))}
          </ol>

          <div className="wa-cta-footer">
            <a
              href="https://wa.me/9187966330?text=I%20Want%20Mahadev%20Book%20ID"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-gold-pill"
            >
              <svg viewBox="0 0 448 512" className="wa-btn-svg" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span>Connect on WhatsApp for Instant ID</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .account-info-section {
          background-color: var(--background-secondary);
        }

        .account-block {
          margin-bottom: 2.75rem;
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

        .styled-checklist {
          list-style: none;
          padding: 0;
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #cccccc;
          font-size: 0.95rem;
          background: #0e0e0e;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border);
          border-radius: 4px;
        }

        .check-icon {
          color: var(--gold);
          font-weight: bold;
          font-size: 1.05rem;
        }

        .whatsapp-info-card {
          background: #0d0d0d;
          border: 1px solid var(--border);
          border-top: 3px solid var(--gold);
          border-radius: 6px;
          padding: 2rem;
          margin-top: 1rem;
        }

        .wa-steps-list {
          list-style: none;
          padding: 0;
          margin: 1.25rem 0 1.75rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem 1.5rem;
        }

        .wa-steps-list li {
          color: #cccccc;
          font-size: 0.92rem;
          line-height: 1.5;
          margin-bottom: 0;
        }

        .wa-steps-list li strong {
          color: var(--gold-bright);
        }

        .wa-cta-footer {
          text-align: center;
          padding-top: 0.75rem;
        }

        .wa-btn-svg {
          width: 18px;
          height: 18px;
        }

        @media (max-width: 768px) {
          .wa-steps-list {
            grid-template-columns: 1fr;
          }

          .whatsapp-info-card {
            padding: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
