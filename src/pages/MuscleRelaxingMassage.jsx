import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const MuscleRelaxingMassage = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "60 Minutes", price: "₹2,300", label: "Muscle Relief & Tension Release" },
    { duration: "90 Minutes", price: "₹3,500", label: "Full Body Deep Muscular Relaxation" }
  ];

  const highlights = [
    {
      title: "Sore Muscle Decompression",
      desc: "Targeted rhythmic pressure eases lactic acid buildup, soothing stiffness and muscular fatigue from physical exertion or workout strain."
    },
    {
      title: "Thermal Herbal Oil Application",
      desc: "Warm organic botanical oils deeply penetrate tight muscle fibers, improving localized circulation and restoring elasticity."
    },
    {
      title: "Full Body Stress Relief",
      desc: "Systematically unwinds physical exhaustion, lowers nervous tension, and revitalizes energy levels across key stress zones."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Muscle Relaxing Massage in Yelahanka Bengaluru | Tropical Spa"
        description="Release muscular stiffness and chronic fatigue with Muscle Relaxing Massage at Tropical Spa Yelahanka. Certified therapists. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/muscle-relaxing-massage/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="muscle-relax-h1">
          <div className="service-banner-content">
            <h1 id="muscle-relax-h1">{business.name} | Muscle Relaxing Massage</h1>
            <p className="service-desc">
              Our Muscle Relaxing Massage is an intensive restorative bodywork session engineered to release tightness, eliminate lactic acid buildup, and soothe fatigued muscle groups. Utilizing rhythmic gliding pressures, specialized kneading, and warm herbal carrier oils, our certified therapists work systematically along tension lines in the back, shoulders, and legs to restore optimal muscle flexibility and full-body vitality.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Muscle Relaxing Massage session.")}
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
                alt="Muscle Relaxing Massage treatment at Tropical Spa Yelahanka" 
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
            <p>Select your treatment duration. Enjoy a private suite with attached shower and warm herbal oils.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Muscle Relaxing Massage (at ${pkg.price}).`)}
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
            <p>Tailored physical therapy to relieve post-workout fatigue and workday stiffness.</p>
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

export default MuscleRelaxingMassage;
