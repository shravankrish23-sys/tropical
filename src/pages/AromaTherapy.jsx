import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const AromaTherapy = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "60 Minutes", price: "₹2,800", label: "Holistic Essential Oil Therapy" },
    { duration: "90 Minutes", price: "₹4,100", label: "Full Body Restorative Aromatherapy" }
  ];

  const highlights = [
    {
      title: "Pure Essential Botanical Extracts",
      desc: "Custom-blended plant essences like Lavender, Eucalyptus, Lemongrass, and Ylang Ylang target specific physical and emotional needs."
    },
    {
      title: "Nervous System Equilibrium",
      desc: "Inhalation and skin absorption of essential oils actively calm the central nervous system, reducing stress hormones and promoting deep rest."
    },
    {
      title: "Lymphatic Detoxification",
      desc: "Gentle rhythmic effleurage stimulates lymphatic drainage, helping remove cellular waste and enhancing immune resilience."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Aroma Therapy Massage in Yelahanka Bengaluru | Tropical Spa"
        description="Indulge in pure organic Aromatherapy Massage at Tropical Spa Yelahanka. Custom essential oils for deep mental and physical healing. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/aromatherapy-massage/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="aroma-h1">
          <div className="service-banner-content">
            <h1 id="aroma-h1">{business.name} | Aromatherapy Wellness Massage</h1>
            <p className="service-desc">
              Our Aroma Therapy massage combines gentle, harmonizing full-body touch with the powerful therapeutic properties of 100% pure organic essential oils. Designed to harmonize mind, body, and spirit, this multisensory ritual eases nervous anxiety, enhances sleep quality, and deeply nourishes skin tissue in an atmosphere of tranquil serenity.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book an Aroma Therapy Massage session.")}
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
                alt="Organic Aromatherapy oils and wellness sanctuary at Tropical Spa" 
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
            <h2 id="pricing-heading">Therapy Durations &amp; Tariffs</h2>
            <p>Select your treatment duration. Includes pure organic essential oil selection and private suite access.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Aroma Therapy (at ${pkg.price}).`)}
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
            <h2 id="benefits-heading">Key Restorative Benefits</h2>
            <p>Why essential plant therapy provides profound full-body restoration.</p>
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

export default AromaTherapy;
