import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const BodyScrub = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "30 Minutes", price: "₹1,600", label: "Deep Exfoliating Herbal Body Scrub" }
  ];

  const highlights = [
    {
      title: "Deep Pores Cleansing",
      desc: "Natural sea salts, mineral crystals, and organic botanical powders draw out deep-seated impurities and unclog pores."
    },
    {
      title: "Improves Texture & Tone",
      desc: "Eliminates rough, flaky skin around elbows, knees, and back, restoring an even and velvety skin tone."
    },
    {
      title: "Enhances Oil & Moisture Absorption",
      desc: "Prepares skin to absorb therapeutic oils and moisturizers far more effectively, making it an ideal precursor to any full-body massage."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Body Scrub Treatment in Yelahanka Bengaluru | Tropical Spa"
        description="Deeply cleanse and smooth your skin with an Exfoliating Body Scrub at Tropical Spa Yelahanka. Mineral crystals & organic oils. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/body-scrub/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="scrub-h1">
          <div className="service-banner-content">
            <h1 id="scrub-h1">{business.name} | Exfoliating Body Scrub</h1>
            <p className="service-desc">
              Our 30-minute Exfoliating Body Scrub is an invigorating full-body cleansing therapy. Using organic mineral salts, ground botanical herbs, and aromatic essential oils, our therapists gently slough away dead skin cells, stimulate lymphatic circulation, and leave your skin incredibly soft, vibrant, and refreshed.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a 30 Min Body Scrub session.")}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-outline"
              >
                Book on WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="service-image-holder">
            <picture>
              <source type="image/webp" srcSet={`${spaConfig.images.heroTowelsWebp} 1x, /hero-towels.webp 2x`} />
              <source type="image/png" srcSet={`${spaConfig.images.heroTowels} 1x, /hero-towels.png 2x`} />
              <img 
                src={spaConfig.images.heroTowels} 
                alt="Exfoliating Body Scrub treatment at Tropical Spa Yelahanka" 
                loading="lazy"
                decoding="async"
                width="480"
                height="400"
              />
            </picture>
          </div>
        </section>

        {/* Pricing & Duration Section */}
        <section aria-labelledby="pricing-heading" style={{ marginBottom: '4rem' }}>
          <div className="section-header-center">
            <h2 id="pricing-heading">Therapy Duration &amp; Tariff</h2>
            <p>Includes full body exfoliating scrub, hot shower rinse, and light hydration.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Body Scrub (at ${pkg.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ width: '100%', minHeight: '40px' }}
                >
                  Book Therapy
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights/Benefits Section */}
        <section className="service-highlights-section" aria-labelledby="benefits-heading">
          <div className="section-header-center">
            <h2 id="benefits-heading">Key Exfoliation Benefits</h2>
            <p>Why periodic body scrubbing is essential for healthy skin renewal.</p>
          </div>

          <div className="highlights-grid">
            {highlights.map((item, i) => (
              <div key={i} className="highlight-card">
                <h3 className="highlight-title">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.title}
                </h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default BodyScrub;
