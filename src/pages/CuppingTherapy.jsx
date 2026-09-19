import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const CuppingTherapy = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "20 Minutes", price: "₹1,300", label: "Myofascial Decompression & Detox" }
  ];

  const highlights = [
    {
      title: "Negative Pressure Decompression",
      desc: "Unlike traditional massage that pushes muscles down, cupping pulls tissues upward, rapidly separating stuck fascial layers and releasing deep knots."
    },
    {
      title: "Cellular Waste Clearing",
      desc: "Suction pulls stagnant blood and metabolic toxins to the surface, triggering fresh oxygenated blood flow to speed up tissue regeneration."
    },
    {
      title: "Deep Chronic Pain Relief",
      desc: "Highly effective for athletes and individuals dealing with persistent stiffness in the upper back, shoulders, and lower lumbar."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Cupping Therapy in Yelahanka Bengaluru | Tropical Spa"
        description="Experience myofascial decompression and chronic pain relief with Cupping Therapy at Tropical Spa Yelahanka. Book your session: +91 95503 66963."
        canonical="https://tropicalspa.in/services/cupping-therapy/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="cupping-h1">
          <div className="service-banner-content">
            <h1 id="cupping-h1">{business.name} | Myofascial Cupping Therapy</h1>
            <p className="service-desc">
              Cupping Therapy is an ancient medical bodywork technique that applies localized suction to the skin. By creating negative pressure, cupping decompresses tight myofascial layers, pulls cellular metabolic waste to the surface, and dramatically enhances localized blood flow to break through chronic tightness and muscle knots.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Cupping Therapy session.")}
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
              <source type="image/webp" srcSet={`${spaConfig.images.heroYogaWebp} 1x, /hero-yoga.webp 2x`} />
              <source type="image/png" srcSet={`${spaConfig.images.heroYoga} 1x, /hero-yoga.png 2x`} />
              <img 
                src={spaConfig.images.heroYoga} 
                alt="Cupping Therapy at Tropical Spa Yelahanka" 
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
            <p>Can be booked standalone or combined with any Deep Tissue or Swedish massage session.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Cupping Therapy (at ${pkg.price}).`)}
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
            <h2 id="benefits-heading">Myofascial Decompression Benefits</h2>
            <p>Why cupping therapy is chosen by athletes and physical therapists worldwide.</p>
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

export default CuppingTherapy;
