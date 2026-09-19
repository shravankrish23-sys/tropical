import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const HeadMassage = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "30 Minutes", price: "₹900", label: "Indian Head & Scalp Massage" },
    { duration: "Custom Care", price: "₹1,100", label: "Head Massage ( Women )" }
  ];

  const highlights = [
    {
      title: "Mental Clarity & Tension Release",
      desc: "Rhythmic scalp kneading and acupressure release deep tension around the forehead, temples, and base of the skull."
    },
    {
      title: "Hair Follicle & Scalp Nourishment",
      desc: "Warm herbal oils stimulate blood circulation to hair roots, supporting healthy growth, cooling the brain, and reducing dryness."
    },
    {
      title: "Migraine & Screen Strain Relief",
      desc: "Perfect remedy for eye fatigue, computer vision stress, tension headaches, and everyday corporate burnout."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Head Massage in Yelahanka Bengaluru | Tropical Spa"
        description="Soothe mental exhaustion, tension headaches, and nourish your scalp with traditional Head Massage at Tropical Spa Yelahanka. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/head-massage/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="head-h1">
          <div className="service-banner-content">
            <h1 id="head-h1">{business.name} | Ayurvedic Head &amp; Scalp Massage</h1>
            <p className="service-desc">
              Drawing from ancient Indian Shiroabhyanga rituals, our Head Massage focuses on energy points across the scalp, neck, and temples. Using warm nourishing botanical oils, this soothing treatment melts away digital eye strain, relieves tension headaches, and fosters deep mental clarity.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Head Massage session.")}
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
              <source type="image/webp" srcSet={`${spaConfig.images.heroCorridorWebp} 1x, /hero-corridor.webp 2x`} />
              <source type="image/png" srcSet={`${spaConfig.images.heroCorridor} 1x, /hero-corridor.png 2x`} />
              <img 
                src={spaConfig.images.heroCorridor} 
                alt="Ayurvedic Head & Scalp Massage at Tropical Spa Yelahanka" 
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
            <h2 id="pricing-heading">Therapy Options &amp; Tariffs</h2>
            <p>Select your preferred head massage option with warm Ayurvedic oils.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.label} (${pkg.duration} at ${pkg.price}).`)}
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
            <h2 id="benefits-heading">Key Scalp &amp; Mind Benefits</h2>
            <p>Why ancient head acupressure remains the quintessential stress antidote.</p>
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

export default HeadMassage;
