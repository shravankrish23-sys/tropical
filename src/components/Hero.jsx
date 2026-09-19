import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { spaConfig } from '../config/spaConfig';

export const Hero = () => {
  const { business, features, images, links } = spaConfig;

  return (
    <Section as="main" id="main-content" className="hero-section" ariaLabel="Hero promotion">
      <div className="hero-container">
        
        {/* Left Column: Promotion Details */}
        <div className="hero-content">
          <h2 className="hero-title">{business.tagline}</h2>
          <p className="hero-subtitle serif-text">{business.voucherText}</p>
          
          <div className="hero-price-wrap">
            <span className="hero-price serif-text">{business.priceLabel}</span>
          </div>

          <ul className="features-list" aria-label="Included therapy features">
            {features.map((feature, idx) => (
              <li key={idx} className="feature-item">
                <span className="check-icon-badge" aria-hidden="true">
                  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 7L5.5 10L11.5 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            href={links.whatsappUrl(business.voucherMessage)}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-claim-offer"
            className="hero-cta-btn"
            ariaLabel="Claim the Rs.1000 gift voucher offer via WhatsApp"
          >
            Claim the offer
          </Button>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="hero-visuals" aria-label="Tropical Spa gallery visuals">
          <div className="visual-tall">
            <picture>
              <source 
                type="image/webp" 
                srcSet="/hero-yoga-480.webp 480w, /hero-yoga-768.webp 768w, /hero-yoga-1200.webp 1200w" 
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 450px" 
              />
              <img
                src="/hero-yoga-480.webp"
                alt="Woman in a state of relaxation enjoying a therapy session at Tropical Spa"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="450"
                height="580"
              />
            </picture>
          </div>
          
          <div className="visual-stack">
            <div className="visual-stacked-img">
              <picture>
                <source 
                  type="image/webp" 
                  srcSet="/hero-corridor-480.webp 480w, /hero-corridor-768.webp 768w, /hero-corridor-1200.webp 1200w" 
                  sizes="(max-width: 640px) 45vw, 380px" 
                />
                <img
                  src="/hero-corridor-480.webp"
                  alt="Luxury tranquil arched corridor therapy walkway at Tropical Spa"
                  loading="lazy"
                  decoding="async"
                  width="380"
                  height="280"
                />
              </picture>
            </div>
            <div className="visual-stacked-img">
              <picture>
                <source 
                  type="image/webp" 
                  srcSet="/hero-towels-480.webp 480w, /hero-towels-768.webp 768w, /hero-towels-1200.webp 1200w" 
                  sizes="(max-width: 640px) 45vw, 380px" 
                />
                <img
                  src="/hero-towels-480.webp"
                  alt="Premium rolled aromatic towels and natural frangipani flower"
                  loading="lazy"
                  decoding="async"
                  width="380"
                  height="280"
                />
              </picture>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};
