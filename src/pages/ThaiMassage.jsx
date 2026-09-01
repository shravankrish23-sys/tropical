import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const ThaiMassage = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "60 Minutes", price: "₹1,999", label: "Energy Flow Dry Therapy" },
    { duration: "90 Minutes", price: "₹2,499", label: "Full Yoga Stretching" },
    { duration: "120 Minutes", price: "₹2,999", label: "Complete Spinal Decompression" }
  ];

  const highlights = [
    {
      title: "Passive Yoga Stretching",
      desc: "Gentle, assisted yoga stretches increase range of motion, elongate muscles, and decompress tight spinal vertebrae."
    },
    {
      title: "Acupressure & Sen Lines",
      desc: "Thumb and palm pressure along vital Sen energy pathways stimulates blood circulation and releases blockages."
    },
    {
      title: "Dry Restorative Therapy",
      desc: "Performed traditionally on a soft floor mat in loose, comfortable clothing without the use of heavy oils."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Authentic Thai Massage in Yelahanka Bengaluru | Tropical Spa"
        description="Experience authentic Thai dry massage and yoga stretching at Tropical Spa Yelahanka. Boost flexibility and energy. Call +91 95503 66963."
        canonical="https://tropicalspa.in/services/traditional-thai-massage/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="thai-h1">
          <div className="service-banner-content">
            <h1 id="thai-h1">{business.name} | Authentic Traditional Thai Massage</h1>
            <p className="service-desc">
              Thai massage is an ancient bodywork system combining passive yoga stretches, rhythmic joint mobilization, and targeted acupressure along the body's natural Sen energy lines. Performed without heavy oils on specialized padded mats, this invigorating dry therapy decompresses the spine, increases joint flexibility, and relieves physical fatigue.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Traditional Thai Massage session.")}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-outline"
              >
                Book on WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="service-image-holder">
            <img 
              src={spaConfig.images.heroCorridor} 
              alt="Traditional Thai dry massage therapy at Tropical Spa" 
            />
          </div>
        </section>

        {/* Pricing & Duration Section */}
        <section aria-labelledby="pricing-heading" style={{ marginBottom: '4rem' }}>
          <div className="section-header-center">
            <h2 id="pricing-heading">Therapy Durations &amp; Tariffs</h2>
            <p>Select your treatment duration. Experience authentic dry bodywork on padded mats.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Traditional Thai Massage (at ${pkg.price}).`)}
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
            <p>Why this traditional dry massage has been practiced for over 2,500 years.</p>
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
export default ThaiMassage;
