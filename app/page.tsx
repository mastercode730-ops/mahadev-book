'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import WhatIs from '@/components/WhatIs';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import PremiumFeatures from '@/components/PremiumFeatures';
import AccountInfo from '@/components/AccountInfo';
import PaymentInfo from '@/components/PaymentInfo';
import LegalInfo from '@/components/LegalInfo';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="site-wrapper">
      {/* 1. Header */}
      <Header />

      <main id="content" className="main-content">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Quick Statistics */}
        <Stats />

        {/* 4. About Mahadev Book ID */}
        <About />

        {/* 5. What Is Mahadev Book? & 6. How Mahadev Book ID Works */}
        <WhatIs />

        {/* 7. Quick Highlights & 8. Features (7-card grid) */}
        <Features />

        {/* 9. Benefits & 10. Why Mahadev Book ID */}
        <Benefits />

        {/* 11. Premium Features */}
        <PremiumFeatures />

        {/* 12. Account Information, 13. Account Verification, 14. WhatsApp Information */}
        <AccountInfo />

        {/* 15. Payment Information, Bonuses, Timelines & Withdrawal steps */}
        <PaymentInfo />

        {/* 16. Responsible Participation, Legal Information & Conclusion */}
        <LegalInfo />

        {/* 17. FAQ */}
        <FAQ />

        {/* 18. Final CTA */}
        <FinalCTA />
      </main>

      {/* 19. Footer */}
      <Footer />

      {/* 20. Floating WhatsApp button */}
      <WhatsAppButton />

      <style jsx>{`
        .site-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--background);
        }

        .main-content {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
