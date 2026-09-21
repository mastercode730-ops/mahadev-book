'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header-root">
      <div className="header-container">
        {/* Brand / Logo */}
        <a href="#home" className="logo-brand" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="Mahadev Book ID Logo"
            width={44}
            height={38}
            priority
            className="logo-img"
          />
          <span className="logo-text">
            Mahadev Book <span className="logo-gold">ID</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#benefits" className="nav-link">Benefits</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
          </ul>
        </nav>

        {/* Action Button Desktop */}
        <div className="header-action">
          <a
            href="https://wa.me/9187966330?text=I%20Want%20Mahadev%20Book%20ID"
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta-btn"
          >
            <svg viewBox="0 0 448 512" className="wa-icon" fill="currentColor">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <span>WhatsApp ID</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle-btn"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMenu}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            <li><a href="#home" className="mobile-nav-link" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a></li>
            <li><a href="#features" className="mobile-nav-link" onClick={closeMenu}>Features</a></li>
            <li><a href="#benefits" className="mobile-nav-link" onClick={closeMenu}>Benefits</a></li>
            <li><a href="#faq" className="mobile-nav-link" onClick={closeMenu}>FAQ</a></li>
          </ul>
          <div className="mobile-action">
            <a
              href="https://wa.me/9187966330?text=I%20Want%20Mahadev%20Book%20ID"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              onClick={closeMenu}
            >
              Get Mahadev Book ID
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .header-root {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: rgba(5, 5, 5, 0.96);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          transition: background-color 0.3s ease;
        }

        .header-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0.6rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 62px;
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
        }

        .logo-img {
          object-fit: contain;
          border-radius: 4px;
        }

        .logo-text {
          font-size: 1.18rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .logo-gold {
          color: var(--gold);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 1.6rem;
          padding: 0;
          margin: 0;
        }

        .nav-link {
          font-size: 0.88rem;
          font-weight: 600;
          color: #cccccc;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color 0.2s ease;
          padding: 0.3rem 0;
          position: relative;
        }

        .nav-link:hover {
          color: var(--gold);
        }

        .header-action {
          display: flex;
          align-items: center;
        }

        .header-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: var(--gold);
          color: #050505;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.55rem 1.15rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          transition: all 0.2s ease;
        }

        .header-cta-btn:hover {
          background: var(--gold-bright);
          color: #000;
          transform: translateY(-1px);
        }

        .wa-icon {
          width: 16px;
          height: 16px;
        }

        .mobile-toggle-btn {
          display: none;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--gold);
          padding: 0.4rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .mobile-drawer {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-nav,
          .header-action {
            display: none;
          }

          .mobile-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-drawer {
            display: block;
            background: #0a0a0a;
            border-bottom: 1px solid var(--border);
            padding: 1rem 1.25rem 1.5rem;
          }

          .mobile-nav-list {
            list-style: none;
            padding: 0;
            margin: 0 0 1rem 0;
          }

          .mobile-nav-link {
            display: block;
            padding: 0.75rem 0;
            font-size: 1rem;
            font-weight: 600;
            color: #eeeeee;
            border-bottom: 1px solid rgba(41, 41, 41, 0.4);
          }

          .mobile-nav-link:hover {
            color: var(--gold);
          }

          .mobile-action {
            padding-top: 0.5rem;
          }

          .mobile-action .btn-gold {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
}
