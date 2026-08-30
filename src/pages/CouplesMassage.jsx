import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const CouplesMassage = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "90 Minutes", price: "₹4,999", label: "Classic Couples Retreat" },
    { duration: "120 Minutes", price: "₹6,299", label: "VIP Premium Hydrotherapy Package" }
  ];

  const highlights = [
    {
      title: "VIP Couples Suite",
      desc: "An acoustic-isolated, temperature-controlled spacious double suite with warm ambient lighting and premium decor."
    },
    {
      title: "Dual Master Therapists",
      desc: "Enjoy side-by-side body therapies administered simultaneously by two dedicated professional master therapists."
    },
    {
      title: "Jacuzzi Hydrotherapy & Steam",
      desc: "Complete your session with a warm herbal steam and deep-soaking hydrotherapy bath for shared relaxation."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Couples Spa & Massage in Yelahanka | Tropical Spa Bengaluru"
        description="Exclusive couples spa packages with private suites and jacuzzi hydrotherapy at Tropical Spa Yelahanka. Reserve your private session: +91 95503 66963."
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="couples-h1">
          <div className="service-banner-content">
            <h1 id="couples-h1">{business.name} | Couples Spa Retreat</h1>
            <p className="service-desc">
              Celebrate anniversaries, special occasions, or unwind together in our spacious private VIP Couples Suite. Enjoy side-by-side full-body massages administered by two dedicated master therapists, followed by a warm herbal steam and hydrotherapy bath designed for pure shared relaxation.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Retreat: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book an Exclusive Couples Spa Retreat session.")}
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
              src={spaConfig.images.heroYoga} 
              alt="VIP Couples Suite setup at Tropical Spa" 
            />
          </div>
        </section>

        {/* Pricing & Duration Section */}
        <section aria-labelledby="pricing-heading" style={{ marginBottom: '4rem' }}>
          <div className="section-header-center">
            <h2 id="pricing-heading">VIP Couples Packages &amp; Tariffs</h2>
            <p>Pricing is inclusive for two guests. Includes side-by-side massages, steam, and jacuzzi access.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} VIP Couples Retreat (at ${pkg.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ width: '100%', minHeight: '40px' }}
                >
                  Book Retreat
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights/Benefits Section */}
        <section className="service-highlights-section" aria-labelledby="benefits-heading">
          <div className="section-header-center">
            <h2 id="benefits-heading">Premium Suite Amenities</h2>
            <p>Make your special day unforgettable with our tailored VIP couples retreat features.</p>
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
export default CouplesMassage;
