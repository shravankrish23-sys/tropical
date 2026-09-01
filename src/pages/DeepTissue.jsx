import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const DeepTissue = () => {
  const { business, links } = spaConfig;

  const packages = [
    { duration: "60 Minutes", price: "₹2,299", label: "Introductory Therapy" },
    { duration: "90 Minutes", price: "₹2,799", label: "Full Body Restorative" },
    { duration: "120 Minutes", price: "₹3,299", label: "Complete Clinical Release" }
  ];

  const benefits = [
    {
      title: "Break Down Adhesions",
      desc: "Direct physical pressure breaks up rigid tissue bands (knots) that cause pain, limit movement, and restrict blood flow."
    },
    {
      title: "Relieve Chronic Tension",
      desc: "Perfect for long-term stiffness in the neck, upper back, lower back, and shoulders caused by desk work or posture issues."
    },
    {
      title: "Enhance Muscle Recovery",
      desc: "Speeds up recovery times for active individuals and athletes by increasing blood circulation and reducing metabolic waste."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Deep Tissue Massage in Yelahanka | Tropical Spa Bengaluru"
        description="Relieve chronic pain, stiff neck, and back tension with Deep Tissue Massage at Tropical Spa Yelahanka. Certified therapists. Book session: +91 95503 66963."
        canonical="https://tropicalspa.in/services/deep-tissue-massage/"
      />

      <div className="page-container">
        
        {/* Banner Section */}
        <section className="service-hero-banner" aria-labelledby="deep-tissue-h1">
          <div className="service-banner-content">
            <h1 id="deep-tissue-h1">{business.name} | Therapeutic Deep Tissue Massage</h1>
            <p className="service-desc">
              Our Deep Tissue Massage is a clinical, targeted therapy specifically designed to alleviate chronic muscle tension, structural tightness, and deep-seated trigger points. Long hours at a desk, daily traffic, and strenuous workouts create rigid muscular adhesions that reduce blood circulation and trap metabolic waste. Using deliberate cross-fiber strokes, forearm compression, and thumb pressure, our certified therapists reach deep myofascial layers to restore full mobility and relieve neck, shoulder, and lower back stiffness.
            </p>
            
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button href={links.telUrl}>
                Book Session: {business.phone}
              </Button>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Deep Tissue Massage session.")}
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
              alt="Deep Tissue Massage therapy session at Tropical Spa" 
            />
          </div>
        </section>

        {/* Pricing & Duration Section */}
        <section aria-labelledby="pricing-heading" style={{ marginBottom: '4rem' }}>
          <div className="section-header-center">
            <h2 id="pricing-heading">Therapy Durations &amp; Tariffs</h2>
            <p>Select your treatment duration. Enjoy a private suite with attached shower and organic oils.</p>
          </div>

          <div className="service-price-cards">
            {packages.map((pkg, i) => (
              <div key={i} className="price-card">
                <div className="price-duration">{pkg.duration}</div>
                <div className="price-amount">{pkg.price}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{pkg.label}</div>
                <Button 
                  href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Deep Tissue Massage (at ${pkg.price}).`)}
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
            <h2 id="benefits-heading">Targeted Physical Benefits</h2>
            <p>Why Deep Myofascial Therapy is vital for desk professionals and active lifestyles.</p>
          </div>

          <div className="highlights-grid">
            {benefits.map((item, i) => (
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
export default DeepTissue;
