import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const SwedishMassage = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "60 Minutes", price: "₹1,999", label: "Classic Relaxation" },
    { duration: "90 Minutes", price: "₹2,499", label: "Complete stress Melting" }
  ];

  const highlights = [
    {
      title: "Five Therapeutic Strokes",
      desc: "Incorporates long gliding strokes (effleurage), kneading (petrissage), rhythmic tapping (tapotement), friction, and vibration."
    },
    {
      title: "Boost Blood Circulation",
      desc: "Strokes are performed in the direction of blood flow back to the heart, helping to increase oxygen levels in the blood."
    },
    {
      title: "Pure Aromatherapy Oils",
      desc: "Infused with premium organic essential oils to calm the nervous system and nourish skin tissue."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Swedish Massage in Yelahanka Bengaluru | Tropical Spa"
        description="Unwind with a classic luxury Swedish Massage at Tropical Spa Yelahanka. Relax muscles, improve circulation, and melt stress. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/swedish-massage/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="swedish-h1">
          <div className="service-banner-content">
            <h1 id="swedish-h1">{business.name} | Classic Swedish Massage</h1>
            <p className="service-desc">
              Our Swedish Massage is the quintessential therapeutic bodywork designed for complete relaxation, muscle tension release, and stress reduction. This classic European technique utilizes a combination of five primary strokes—effleurage (long, gliding strokes), petrissage (kneading), tapotement (rhythmic tapping), friction, and vibration. Working in the direction of blood flow, our skilled therapists use pure organic oils to warm up muscle tissues, release superficial tension, and gradually break down muscle knots. This therapy is highly recommended for individuals looking to relieve everyday fatigue, improve systemic circulation, and experience a state of profound mental calmness.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Classic Swedish Massage session.")}
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
                alt="Premium rolled massage towels and frangipani flower for Swedish Massage" 
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
            <p>Select your treatment duration. Includes access to our hot steam chambers and private showers.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Classic Swedish Massage (at ${pkg.price}).`)}
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
            <h2 id="benefits-heading">Therapeutic Focus Areas</h2>
            <p>Perfect relaxation for active lifestyles, students, and corporate professionals.</p>
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
export default SwedishMassage;
