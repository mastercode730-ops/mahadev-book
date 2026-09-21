'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="container">
        {/* Top Footer Section */}
        <div className="footer-top-grid">
          {/* Col 1: Brand & Summary */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <Image
                src="/images/logo.png"
                alt="Mahadev Book Logo"
                width={38}
                height={32}
                className="footer-logo-img"
              />
              <span className="footer-brand-title">Mahadev Book <span className="gold-text">ID</span></span>
            </div>
            <p className="footer-desc">
              India’s premier online cricket and sports informational platform. Access safe, verified ID generation, 24/7 dedicated customer assistance, and multi-device compatibility.
            </p>
          </div>

          {/* Col 2: Navigation Links (Anchors to single page) */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Mahadev Book</a></li>
              <li><a href="#features">Features & Highlights</a></li>
              <li><a href="#benefits">Benefits of Mahadev ID</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Col 3: Compliance & Legal Information */}
          <div className="footer-col">
            <h4 className="footer-heading">Informational & Legal</h4>
            <ul className="footer-links">
              <li><a href="#faq">Privacy Guidelines</a></li>
              <li><a href="#faq">Terms & Conditions</a></li>
              <li><a href="#faq">Anti-Fraud Policy</a></li>
              <li><a href="#faq">Responsible Gaming</a></li>
              <li><a href="#faq">Customer Support Helpdesk</a></li>
            </ul>
          </div>

          {/* Col 4: WhatsApp Contact Action */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Direct Assistance</h4>
            <p className="footer-contact-text">
              Have questions or need an account created? Our WhatsApp desk is available 24/7.
            </p>
            <a
              href="https://wa.me/9187966330?text=I%20Want%20Mahadev%20Book%20ID"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold footer-wa-btn"
            >
              WhatsApp Support
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="footer-bottom-row">
          <div className="copyright-text">
            Copyright © 2026 <strong style={{ color: '#ffffff' }}>Mahadev Book</strong>. All rights reserved. 18+ Only.
          </div>

          <div className="social-links-row">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon-btn"
            >
              <svg viewBox="0 0 448 512" fill="currentColor">
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-icon-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon-btn"
            >
              <svg viewBox="0 0 448 512" fill="currentColor">
                <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32Z" />
              </svg>
            </a>

            {/* Reddit */}
            <a
              href="https://reddit.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reddit"
              className="social-icon-btn"
            >
              <svg viewBox="0 0 448 512" fill="currentColor">
                <path d="M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-99.7 140.6c-10.1 0-19 4.2-25.6 10.7-24.1-16.7-56.5-27.4-92.5-28.6l18.7-84.2 59.5 13.4c0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-12.2 26.8-26.8 0-14.6-11.9-26.8-26.8-26.8-10.4 0-19.3 6.2-23.8 14.9l-65.7-14.6c-3.3-.9-6.5 1.5-7.4 4.8l-20.5 92.8c-35.7 1.5-67.8 12.2-91.9 28.9-6.5-6.8-15.8-11-25.9-11-37.5 0-49.8 50.4-15.5 67.5-1.2 5.4-1.8 11-1.8 16.7 0 56.5 63.7 102.3 141.9 102.3 78.5 0 142.2-45.8 142.2-102.3 0-5.7-.6-11.6-2.1-17 33.6-17.2 21.2-67.2-16.1-67.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-root {
          background-color: #030303;
          border-top: 1px solid var(--border);
          padding: 3rem 0 1.5rem;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1.1fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }

        .footer-brand-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .gold-text {
          color: var(--gold);
        }

        .footer-desc {
          color: #999999;
          font-size: 0.88rem;
          line-height: 1.6;
        }

        .footer-heading {
          font-size: 0.95rem;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 1.1rem;
          font-weight: 700;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-links a {
          color: #aaaaaa;
          font-size: 0.88rem;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--gold-bright);
        }

        .footer-contact-text {
          color: #aaaaaa;
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 1.1rem;
        }

        .footer-wa-btn {
          font-size: 0.84rem;
          padding: 0.65rem 1.25rem;
          text-align: center;
        }

        .footer-divider {
          height: 1px;
          background: rgba(41, 41, 41, 0.6);
          margin-bottom: 1.5rem;
        }

        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          color: #777777;
          font-size: 0.82rem;
        }

        .social-links-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .social-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 4px;
          background: #111111;
          border: 1px solid #222222;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999999;
          transition: all 0.2s ease;
        }

        .social-icon-btn svg {
          width: 14px;
          height: 14px;
        }

        .social-icon-btn:hover {
          color: var(--gold);
          border-color: var(--gold-dark);
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 550px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }

          .footer-bottom-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
