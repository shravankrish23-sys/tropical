import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const FourHandMassage = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "60 Minutes", price: "₹4,300", label: "Dual-Therapist Synchronized Flow" },
    { duration: "90 Minutes", price: "₹6,500", label: "VIP Four-Hand Master Experience" }
  ];

  const highlights = [
    {
      title: "Synchronized Dual Choreography",
      desc: "Two master therapists work in harmonious unison, applying mirrored strokes that completely overwhelm the mind's ability to anticipate touch."
    },
    {
      title: "Double the Muscular Tension Release",
      desc: "Simultaneous upper and lower body therapy provides thorough coverage in half the time, unlocking stubborn knots and persistent tension."
    },
    {
      title: "Profound Mental Transcendence",
      desc: "Forces the brain to relinquish control and slip into a deeply restorative delta-wave state of mental calmness and serenity."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Four Hand Massage in Yelahanka Bengaluru | Tropical Spa"
        description="Experience the pinnacle of luxury with Four Hand Synchronized Massage at Tropical Spa Yelahanka. Two therapists, pure bliss. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/four-hand-massage/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="fourhand-h1">
          <div className="service-banner-content">
            <h1 id="fourhand-h1">{business.name} | Four Hand Synchronized Massage</h1>
            <p className="service-desc">
              The four-hand massage represents the pinnacle of luxury spa experiences. Two certified master therapists work in flawless synchronized rhythm, delivering simultaneous therapeutic strokes across your entire body. Because your brain cannot track both sets of hands at once, mental resistance melts away quickly, ushering in an extraordinary sense of peace and full-body physical release.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Four Hand Massage session.")}
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
                alt="Four Hand Synchronized Massage at Tropical Spa Yelahanka" 
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
            <p>Administered by two certified therapists simultaneously. Includes private luxury suite and steam access.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Four Hand Massage (at ${pkg.price}).`)}
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
            <h2 id="benefits-heading">Why Choose Four Hand Therapy</h2>
            <p>The ultimate indulgence in neuromuscular relaxation and sensory serenity.</p>
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

export default FourHandMassage;
