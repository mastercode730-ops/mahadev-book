'use client';

import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: 'What is Mahadev Book ID?',
      a: 'Mahadev Book ID is a structured digital account identifier that enables users across India to access verified cricket, sports, and gaming informational platforms through a single login.',
    },
    {
      q: 'How does Mahadev Book ID work?',
      a: 'You request an account via WhatsApp support, receive your designated credentials, log in on your preferred device, add initial funds via UPI or bank transfer, and explore sports options.',
    },
    {
      q: 'Can I use the same Mahadev Book ID on multiple devices?',
      a: 'Yes, you can use your Mahadev Book ID on different devices such as mobile smartphones, tablets, or desktop web browsers. Your balance and account settings synchronize seamlessly.',
    },
    {
      q: 'Is mobile access available?',
      a: 'Yes, the platform is fully responsive and optimized for mobile devices (Android and iOS browsers) with zero installation required, fast page load speeds, and low data bandwidth consumption.',
    },
    {
      q: 'What should I do if I cannot access my account or forgot password?',
      a: 'If you encounter any login or password access difficulties, contact our 24/7 WhatsApp helpdesk directly. Our verification desk will rapidly re-verify your identity and reset your credentials.',
    },
    {
      q: 'How can I contact customer support?',
      a: 'Customer support is active 24 hours a day, 7 days a week via our official WhatsApp support lines, chat links, and direct telephonic assistance for prompt, personalized problem resolution.',
    },
    {
      q: 'Is account verification required?',
      a: 'Yes, basic mobile and identity verification are conducted to maintain account security, ensure legitimate user ownership, and safeguard transaction processing.',
    },
    {
      q: 'Is there any minimum deposit requirement for Mahadev Book ID?',
      a: 'The minimum deposit threshold is designed to be accessible and varies depending on preferred payment channels, typically allowing users to start with small sums via UPI.',
    },
    {
      q: 'Can I access live cricket matches and real-time scores?',
      a: 'Yes, with Mahadev Book ID you can follow live cricket matches, ball-by-ball updates, and major sports fixtures alongside comprehensive match statistics.',
    },
    {
      q: 'Are online sports betting laws the same across every Indian state?',
      a: 'Online sports regulations vary across individual Indian states. Users must independently verify their state-specific laws and guidelines before participating.',
    },
  ];

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-intro">
          Find fast answers to common questions about Mahadev Book ID account creation, security, payment processing, and platform access:
        </p>

        <div className="faq-accordion-list">
          {faqs.map((item, idx) => (
            <details key={idx} className="faq-details-item" open={idx === 0}>
              <summary className="faq-summary">
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-toggle-arrow">▼</span>
              </summary>
              <div className="faq-answer-content">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          background-color: var(--background);
        }

        .faq-intro {
          color: #cccccc;
          margin-bottom: 2rem;
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .faq-details-item {
          background: #0d0d0d;
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }

        .faq-details-item:hover {
          border-color: rgba(216, 169, 0, 0.4);
        }

        .faq-details-item[open] {
          border-color: var(--gold-dark);
          background: #111111;
        }

        .faq-summary {
          list-style: none;
          padding: 1.15rem 1.4rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;
          font-weight: 600;
          color: var(--gold);
          font-size: 1.02rem;
        }

        .faq-summary::-webkit-details-marker {
          display: none;
        }

        .faq-question-text {
          flex: 1;
          padding-right: 1rem;
          color: #ffffff;
        }

        .faq-details-item[open] .faq-question-text {
          color: var(--gold-bright);
        }

        .faq-toggle-arrow {
          color: var(--gold);
          font-size: 0.8rem;
          transition: transform 0.25s ease;
        }

        .faq-details-item[open] .faq-toggle-arrow {
          transform: rotate(180deg);
        }

        .faq-answer-content {
          padding: 0 1.4rem 1.25rem;
          border-top: 1px solid rgba(41, 41, 41, 0.4);
          padding-top: 0.9rem;
        }

        .faq-answer-content p {
          color: #cccccc;
          font-size: 0.94rem;
          line-height: 1.65;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
