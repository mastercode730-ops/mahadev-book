'use client';

import React from 'react';

export default function LegalInfo() {
  const testimonials = [
    {
      author: 'Arjun S., Mumbai',
      quote:
        '“I’ve been using Mahadev Book for sports updates and cricket information for a few months now. The variety of sports matches covered is thorough, transactions are swift via UPI, and customer service is always responsive on WhatsApp.”',
    },
    {
      author: 'Priya M., Delhi',
      quote:
        '“As someone trying out an online cricket ID platform for the first time, I appreciated the clear verification steps and instant support. Registration took just under 3 minutes, and support answered every question patiently.”',
    },
    {
      author: 'Rajesh K., Bangalore',
      quote:
        '“The real-time match stats and reliable performance during major T20 series make Mahadev Book ID stand out. The interface is clutter-free and withdrawals were processed smoothly without delays.”',
    },
    {
      author: 'Shalini D., Hyderabad',
      quote:
        '“Customer support is what sets Mahadev Book apart. Any time I had a question regarding balance reconciliation or account management, the team resolved it via WhatsApp in minutes.”',
    },
  ];

  return (
    <section className="section legal-section">
      <div className="container">
        {/* Testimonials / Bettor Feedback */}
        <div className="testimonials-block">
          <h2>What Our Mahadev Book Bettors Are Saying?</h2>
          <p className="testimonials-intro">
            Read authentic feedback shared by users utilizing Mahadev Book ID across major Indian metropolitan hubs:
          </p>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="quote-icon">“</div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <span className="author-dot"></span>
                  <strong>{t.author}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Regulation & Compliance */}
        <div className="compliance-block">
          <h2>Legal Regulation and Compliance of Mahadev Book ID</h2>
          <p>
            Mahadev Book operates in alignment with international standards for secure, transparent, and fair digital sports information platforms. The network adheres to stringent Know Your Customer (KYC) guidelines and Anti-Money Laundering (AML) precautions to guarantee authentic account ownership and prevent unauthorized access.
          </p>
          <div className="compliance-notice-box">
            <span className="notice-icon">⚠️</span>
            <div className="notice-text">
              <strong>Jurisdictional Notice for Indian Residents:</strong> Online sports entertainment and betting legislation is determined at the state level across the Republic of India. Certain states have enacted specific statutory frameworks governing skill-based gaming and sports participation. Visitors and users are advised to independently review their local state regulations before utilizing account services.
            </div>
          </div>
        </div>

        {/* Responsible Participation */}
        <div className="responsible-block">
          <h2>Responsible Participation & Player Safety</h2>
          <p>
            We advocate strictly for responsible and disciplined sports participation. Platform access is restricted solely to individuals aged 18 years and older. Users are encouraged to establish disciplined personal limits, manage their participation mindfully, and view sports entertainment as a recreational activity rather than a financial strategy.
          </p>
          <ul className="responsible-rules">
            <li>Strict 18+ age verification required prior to full ID activation</li>
            <li>Self-exclusion options and cooldown periods available upon request</li>
            <li>Dedicated account support to address user queries and assist with responsible play</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="conclusion-block">
          <h2>Conclusion</h2>
          <p>
            Mahadev Book ID offers a complete, structured, and dependable gateway for users in India seeking seamless access to online cricket and sports information. By blending rapid WhatsApp registration, multi-device mobile optimization, secure Indian banking rails, and 24/7 human customer service, the platform delivers an organized and dependable digital environment.
          </p>
          <p>
            Whether you are following premier international cricket tournaments, tracking domestic leagues, or managing your personal sports entertainment profile, Mahadev Book ID provides an efficient, transparent, and highly responsive platform built for sports enthusiasts across India.
          </p>
        </div>
      </div>

      <style jsx>{`
        .legal-section {
          background-color: var(--background-secondary);
        }

        .testimonials-block,
        .compliance-block,
        .responsible-block {
          margin-bottom: 3.25rem;
        }

        .testimonials-intro {
          margin-bottom: 1.75rem;
          color: #cccccc;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .testimonial-card {
          background: #0d0d0d;
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .quote-icon {
          font-size: 2.2rem;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 0.5rem;
          font-family: Georgia, serif;
        }

        .testimonial-quote {
          font-size: 0.92rem;
          color: #cccccc;
          line-height: 1.65;
          margin-bottom: 1rem;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gold-bright);
          font-size: 0.88rem;
        }

        .author-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gold);
        }

        .compliance-notice-box {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: rgba(216, 169, 0, 0.05);
          border: 1px solid rgba(216, 169, 0, 0.3);
          border-radius: 4px;
          padding: 1.25rem;
          margin-top: 1.25rem;
        }

        .notice-icon {
          font-size: 1.4rem;
          line-height: 1;
        }

        .notice-text {
          font-size: 0.88rem;
          color: #dddddd;
          line-height: 1.6;
        }

        .notice-text strong {
          color: var(--gold-bright);
        }

        .responsible-rules {
          list-style: square;
          padding-left: 1.4rem;
          margin-top: 0.85rem;
        }

        .responsible-rules li {
          color: #cccccc;
          margin-bottom: 0.45rem;
          font-size: 0.92rem;
        }

        .conclusion-block {
          background: #0d0d0d;
          border: 1px solid var(--border);
          border-left: 4px solid var(--gold);
          border-radius: 4px;
          padding: 2rem;
        }

        .conclusion-block h2 {
          margin-bottom: 1rem;
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .conclusion-block {
            padding: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
