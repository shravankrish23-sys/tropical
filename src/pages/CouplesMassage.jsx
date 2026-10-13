import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const CouplesMassage = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "90 Minutes", label: "Classic Couples Retreat", desc: "Side-by-side full body relaxation with calming essential oils and private shower." },
    { duration: "120 Minutes", label: "VIP Premium Hydrotherapy Package", desc: "Extended dual bodywork, herbal steam bath, and private jacuzzi hydrotherapy." }
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
        canonical="https://tropicalspa.in/services/couples-massage/"
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
            <picture>
              <source type="image/webp" srcSet={`${spaConfig.images.heroYogaWebp} 1x, /hero-yoga.webp 2x`} />
              <source type="image/png" srcSet={`${spaConfig.images.heroYoga} 1x, /hero-yoga.png 2x`} />
              <img 
                src={spaConfig.images.heroYoga} 
                alt="VIP Couples Suite setup at Tropical Spa" 
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
            <h2 id="pricing-heading">VIP Couples Packages &amp; Session Options</h2>
            <p>Inclusive for two guests. Connect with our front desk to receive custom package tariffs and schedule your private suite.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--clr-white)', margin: '0.5rem 0' }}>{pkg.label}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>{pkg.desc}</p>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to inquire about package pricing and availability for the ${pkg.duration} ${pkg.label}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ width: '100%', minHeight: '40px' }}
                >
                  💬 Inquire Package
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
