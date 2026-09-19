import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const BodyPolish = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "30 Minutes", price: "₹2,600", label: "Luxury Botanical Skin Radiance" }
  ];

  const highlights = [
    {
      title: "Silky Skin Resurfacing",
      desc: "Micro-fine exfoliating crystals and natural fruit enzymes gently slough off dull dead surface cells to reveal glowing, silky skin."
    },
    {
      title: "Deep Hydration & Nourishment",
      desc: "Infused with rich shea butter and tropical essential oils that penetrate deeply to restore long-lasting moisture balance."
    },
    {
      title: "Cellular Regeneration",
      desc: "Stimulates epidermal micro-circulation, promoting rapid cellular renewal and a smooth, radiant dermal texture."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Body Polish Treatment in Yelahanka Bengaluru | Tropical Spa"
        description="Reveal glowing, velvety-soft skin with our Luxury Body Polish at Tropical Spa Yelahanka. Exfoliation and hydration. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/body-polish/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="polish-h1">
          <div className="service-banner-content">
            <h1 id="polish-h1">{business.name} | Luxury Body Polish</h1>
            <p className="service-desc">
              Experience the ultimate skin renewal ritual with our Body Polish treatment. Formulated with organic botanical exfoliants, precious floral oils, and rich moisture balms, this 30-minute therapy gently buffs away dead surface skin while drenching your body in deep, restorative hydration for a vibrant, luminous glow.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a 30 Min Body Polish session.")}
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
                alt="Luxury Body Polish treatment at Tropical Spa Yelahanka" 
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
            <p>Includes complete body polish, warm private shower, and nourishing body balm application.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Body Polish (at ${pkg.price}).`)}
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
            <h2 id="benefits-heading">Skin Rejuvenation Benefits</h2>
            <p>Why professional body polishing transforms your skin's health and glow.</p>
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

export default BodyPolish;
