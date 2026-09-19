import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const HotStoneTherapy = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "20 Minutes", price: "₹1,600", label: "Volcanic Basalt Thermal Therapy" }
  ];

  const highlights = [
    {
      title: "Volcanic Basalt Heat Retention",
      desc: "Smooth, mineral-rich volcanic basalt stones are heated to optimal therapeutic temperatures to deliver soothing radiant heat into deep tissues."
    },
    {
      title: "Accelerated Muscle Softening",
      desc: "Penetrating heat relaxes rigid muscular bands quickly, allowing deeper physical release without intense mechanical pressure."
    },
    {
      title: "Enhanced Blood Circulation",
      desc: "Thermal energy dilates blood vessels, boosting oxygen flow and rapidly clearing metabolic toxins from fatigued muscles."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Hot Stone Therapy in Yelahanka Bengaluru | Tropical Spa"
        description="Melt away muscle tension with Volcanic Hot Stone Therapy at Tropical Spa Yelahanka. Radiant heat and deep relaxation. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/hot-stone-therapy/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="hotstone-h1">
          <div className="service-banner-content">
            <h1 id="hotstone-h1">{business.name} | Volcanic Hot Stone Therapy</h1>
            <p className="service-desc">
              Hot Stone Therapy is an ancient thermal treatment that uses smooth, heated volcanic basalt stones placed strategically along your energy centers and massaged into tight muscle groups. The soothing thermal energy penetrates deep into muscular tissue, melting stubborn tension, increasing micro-circulation, and calming the central nervous system.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Hot Stone Therapy session.")}
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
                alt="Volcanic Hot Stone Therapy at Tropical Spa Yelahanka" 
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
            <p>Can be booked standalone or as a luxury add-on to any full-body massage therapy.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Hot Stone Therapy (at ${pkg.price}).`)}
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
            <h2 id="benefits-heading">Thermal Healing Benefits</h2>
            <p>Why volcanic stone therapy provides unprecedented muscular comfort.</p>
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

export default HotStoneTherapy;
