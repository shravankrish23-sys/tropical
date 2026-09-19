import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const FeetMassage = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "30 Minutes", price: "₹1,200", label: "Foot Reflexology & Fatigue Relief" }
  ];

  const highlights = [
    {
      title: "Foot Reflexology Pressure Points",
      desc: "Stimulates reflex zones in the soles corresponding to vital organs, boosting natural equilibrium and systemic vitality."
    },
    {
      title: "Plantar Fascia & Heel Soothing",
      desc: "Releases tight fascia, arch stiffness, and heel fatigue caused by standing, high steps, or rigorous walking."
    },
    {
      title: "Circulation & Swelling Reduction",
      desc: "Upward lymphatic strokes eliminate fluid retention in tired ankles and calves, restoring lightweight agility."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Feet Massage & Reflexology in Yelahanka | Tropical Spa"
        description="Revitalize tired feet and improve overall wellness with Foot Massage & Reflexology at Tropical Spa Yelahanka. Book session: +91 95503 66963."
        canonical="https://tropicalspa.in/services/feet-massage/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="feet-h1">
          <div className="service-banner-content">
            <h1 id="feet-h1">{business.name} | Foot Massage &amp; Reflexology</h1>
            <p className="service-desc">
              Your feet bear the weight of daily activity. Our 30-minute Foot Massage integrates traditional reflexology, acupressure thumb work, and herbal botanical lotions to relieve soreness, reduce lower-limb swelling, and induce deep systemic tranquility throughout your entire body.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a 30 Min Feet Massage session.")}
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
                alt="Foot reflexology and massage at Tropical Spa Yelahanka" 
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
            <p>Revitalizing foot care with warm towel compress and herbal oils.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Feet Massage (at ${pkg.price}).`)}
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
            <h2 id="benefits-heading">Restorative Reflexology Benefits</h2>
            <p>Why foot therapy revitalizes the entire central nervous system.</p>
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

export default FeetMassage;
