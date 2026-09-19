import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const BalineseMassage = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "60 Minutes", price: "₹3,000", label: "Traditional Indonesian Healing" },
    { duration: "90 Minutes", price: "₹4,300", label: "Full Ritual Body Restoration" }
  ];

  const highlights = [
    {
      title: "Holistic Indonesian Techniques",
      desc: "Blends gentle stretching, long rolling strokes, acupressure, and skin rolling to stimulate the flow of vital Qi energy."
    },
    {
      title: "Deep Micro-Circulation",
      desc: "Firm thumb pressure along energy meridian channels increases oxygenation to deeper muscle tissues and joints."
    },
    {
      title: "Exotic Tropical Essential Oils",
      desc: "Infused with therapeutic floral and herbal oils like frangipani, jasmine, and sandalwood to revitalize dry skin and soothe stress."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Balinese Massage in Yelahanka Bengaluru | Tropical Spa"
        description="Experience authentic Indonesian Balinese Massage at Tropical Spa Yelahanka. Acupressure, reflexology, and warm oils. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/balinese-massage/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="balinese-h1">
          <div className="service-banner-content">
            <h1 id="balinese-h1">{business.name} | Traditional Balinese Massage</h1>
            <p className="service-desc">
              Originating from the exotic Indonesian island of Bali, Balinese Massage is an ancient full-body treatment that harmonizes gentle stretching, acupressure, skin rolling, and aromatherapy. Designed to bring deep calmness and spiritual balance, this therapy improves blood flow, breaks down persistent muscular tightness, and renews whole-body vitality.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Traditional Balinese Massage session.")}
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
                alt="Balinese massage therapy suite at Tropical Spa Yelahanka" 
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
            <p>Select your treatment duration. Includes private suite, aromatic foot bath, and hot shower access.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Balinese Massage (at ${pkg.price}).`)}
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
            <h2 id="benefits-heading">Traditional Healing Principles</h2>
            <p>Why Balinese therapy is revered worldwide for deep holistic rejuvenation.</p>
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

export default BalineseMassage;
