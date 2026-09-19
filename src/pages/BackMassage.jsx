import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const BackMassage = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "30 Minutes", price: "₹1,600", label: "Targeted Upper & Lower Back Relief" }
  ];

  const highlights = [
    {
      title: "Spinal & Scapular Focus",
      desc: "Concentrated manual therapy targeting the rhomboids, latissimus dorsi, and lumbar muscles where work fatigue accumulates."
    },
    {
      title: "Posture & Desk Strain Decompression",
      desc: "Alleviates structural tightness resulting from prolonged desk sitting, driving, and ergonomic slouching."
    },
    {
      title: "Quick Restorative Breakthrough",
      desc: "A fast-acting 30-minute session that delivers maximum tension relief without requiring a full day commitment."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Back Massage in Yelahanka Bengaluru | Tropical Spa"
        description="Fast, focused relief for upper and lower back pain at Tropical Spa Yelahanka. Certified therapists, organic oils. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/back-massage/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="back-h1">
          <div className="service-banner-content">
            <h1 id="back-h1">{business.name} | Targeted Back Massage</h1>
            <p className="service-desc">
              Designed for busy professionals and anyone suffering from focused back discomfort, our 30-minute Back Massage provides intensive relief to the spine, shoulders, and lower lumbar region. Using concentrated deep kneading and warm herbal oils, our therapists release tight postural adhesions and restore effortless mobility.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a 30 Min Back Massage session.")}
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
                alt="Targeted Back Massage at Tropical Spa Yelahanka" 
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
            <p>High-impact, focused therapy for immediate back tension release.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Back Massage (at ${pkg.price}).`)}
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
            <h2 id="benefits-heading">Targeted Clinical Benefits</h2>
            <p>Why focused back therapy brings rapid comfort and ease.</p>
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

export default BackMassage;
