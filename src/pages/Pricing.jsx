import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const Pricing = () => {
  const { business, links } = spaConfig;
  const [activeTab, setActiveTab] = useState('all');

  const pricingData = [
    // 1. Full Body Spa Services (60 min & 90 min)
    {
      name: "Muscle Relaxing Massage",
      desc: "Intensive bodywork designed to alleviate stiffness, release lactic acid, and restore muscle elasticity.",
      category: "full_body",
      path: "/services/muscle-relaxing-massage/",
      options: [
        { duration: "60 Min", price: "₹2,300" },
        { duration: "90 Min", price: "₹3,500" }
      ]
    },
    {
      name: "Swedish Massage",
      desc: "Quintessential relaxation therapy utilizing long gliding strokes and organic botanical oils.",
      category: "full_body",
      path: "/services/swedish-massage/",
      options: [
        { duration: "60 Min", price: "₹2,600" },
        { duration: "90 Min", price: "₹3,800" }
      ]
    },
    {
      name: "Aroma Therapy",
      desc: "Holistic sensory bodywork infused with pure organic essential oils to balance the central nervous system.",
      category: "full_body",
      path: "/services/aromatherapy-massage/",
      options: [
        { duration: "60 Min", price: "₹2,800" },
        { duration: "90 Min", price: "₹4,100" }
      ]
    },
    {
      name: "Thai Massage",
      desc: "Ancient dry bodywork combining passive yoga stretches, rhythmic joint mobilization, and Sen line acupressure.",
      category: "full_body",
      path: "/services/traditional-thai-massage/",
      options: [
        { duration: "60 Min", price: "₹3,000" },
        { duration: "90 Min", price: "₹4,300" }
      ]
    },
    {
      name: "Balinese Massage",
      desc: "Traditional Indonesian healing combining gentle stretching, acupressure rolling, and scented exotic oils.",
      category: "full_body",
      path: "/services/balinese-massage/",
      options: [
        { duration: "60 Min", price: "₹3,000" },
        { duration: "90 Min", price: "₹4,300" }
      ]
    },
    {
      name: "Deep Tissue Massage",
      desc: "Clinical myofascial therapy with firm cross-fiber pressure targeting chronic pain, stiff neck, and deep knots.",
      category: "full_body",
      path: "/services/deep-tissue-massage/",
      options: [
        { duration: "60 Min", price: "₹3,100" },
        { duration: "90 Min", price: "₹4,400" }
      ]
    },
    {
      name: "Four Hand Massage",
      desc: "The pinnacle of luxury with two certified master therapists delivering synchronized mirrored strokes.",
      category: "full_body",
      path: "/services/four-hand-massage/",
      options: [
        { duration: "60 Min", price: "₹4,300" },
        { duration: "90 Min", price: "₹6,500" }
      ]
    },

    // 2. Express / Targeted Body Treatments (30 min)
    {
      name: "Back Massage",
      desc: "Focused relief for upper, mid, and lower back muscles strained by desk work or driving.",
      category: "targeted",
      path: "/services/back-massage/",
      options: [
        { duration: "30 Min", price: "₹1,600" }
      ]
    },
    {
      name: "Feet Massage",
      desc: "Traditional foot reflexology stimulating vital energy points and relieving lower limb fatigue.",
      category: "targeted",
      path: "/services/feet-massage/",
      options: [
        { duration: "30 Min", price: "₹1,200" }
      ]
    },
    {
      name: "Body Polish",
      desc: "Gentle botanical resurfacing and deep hydration that leaves your skin luminous and velvety soft.",
      category: "targeted",
      path: "/services/body-polish/",
      options: [
        { duration: "30 Min", price: "₹2,600" }
      ]
    },
    {
      name: "Body Scrub",
      desc: "Exfoliating mineral crystal scrub to remove dead cells, unclog pores, and revitalize skin tone.",
      category: "targeted",
      path: "/services/body-scrub/",
      options: [
        { duration: "30 Min", price: "₹1,600" }
      ]
    },

    // 3. Add-On Services
    {
      name: "HOT STONE THERAPY",
      desc: "Smooth heated volcanic basalt stones delivering radiant thermal energy into tight muscle layers.",
      category: "addons",
      path: "/services/hot-stone-therapy/",
      options: [
        { duration: "20 Min", price: "₹1,600" }
      ]
    },
    {
      name: "CUPPING THERAPY",
      desc: "Negative pressure myofascial suction to separate bound connective tissues and detoxify muscles.",
      category: "addons",
      path: "/services/cupping-therapy/",
      options: [
        { duration: "20 Min", price: "₹1,300" }
      ]
    },
    {
      name: "HEAD MASSAGE",
      desc: "Shiroabhyanga acupressure scalp massage relieving mental tension, digital eye strain, and headaches.",
      category: "addons",
      path: "/services/head-massage/",
      options: [
        { duration: "30 Min", price: "₹900" }
      ]
    },
    {
      name: "HEAD MASSAGE ( WOMEN )",
      desc: "Tailored scalp, hair root, and temple massage with premium nourishing herbal oils.",
      category: "addons",
      path: "/services/head-massage/",
      options: [
        { duration: "Standard", price: "₹1,100" }
      ]
    },
    {
      name: "ESSENTIAL OIL UPGRADE (AROMATHERAPY OILS)",
      desc: "Upgrade any bodywork session with our top-tier pure organic essential oil blends.",
      category: "addons",
      path: "/services/aromatherapy-massage/",
      options: [
        { duration: "Upgrade", price: "₹600" }
      ]
    }
  ];

  const filteredPricing = pricingData.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <div>
      <SeoMeta 
        title="Spa Tariff & Menu | Tropical Spa Yelahanka Bengaluru"
        description="Official transparent tariffs for full body massages, 30 min express therapies & add-ons at Tropical Spa Yelahanka. Book now at +91 95503 66963."
        canonical="https://tropicalspa.in/pricing/"
      />

      <div className="page-container">
        
        {/* Page Header */}
        <header className="page-header">
          <h1 className="page-h1">Tropical Spa Menu &amp; Official Tariffs</h1>
          <p className="page-subtitle">Transparent rates for certified therapies in Yelahanka. Click on any treatment to view details.</p>
        </header>

        {/* Interactive Filter Tabs */}
        <div className="pricing-tabs" role="tablist" aria-label="Filter therapies by category">
          <button 
            role="tab"
            aria-selected={activeTab === 'all'}
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Services ({pricingData.length})
          </button>
          <button 
            role="tab"
            aria-selected={activeTab === 'full_body'}
            className={`tab-btn ${activeTab === 'full_body' ? 'active' : ''}`}
            onClick={() => setActiveTab('full_body')}
          >
            Full Body Massages (60 / 90 Min)
          </button>
          <button 
            role="tab"
            aria-selected={activeTab === 'targeted'}
            className={`tab-btn ${activeTab === 'targeted' ? 'active' : ''}`}
            onClick={() => setActiveTab('targeted')}
          >
            Targeted Therapies (30 Min)
          </button>
          <button 
            role="tab"
            aria-selected={activeTab === 'addons'}
            className={`tab-btn ${activeTab === 'addons' ? 'active' : ''}`}
            onClick={() => setActiveTab('addons')}
          >
            Add-On Services
          </button>
        </div>

        {/* Pricing Table Wrap */}
        <div className="pricing-table-wrap" aria-label="Official Spa Pricing Menu">
          <table className="pricing-table">
            <thead>
              <tr>
                <th style={{ width: '52%' }}>Therapy Description</th>
                <th style={{ width: '18%' }}>Duration</th>
                <th style={{ width: '30%' }}>Tariff &amp; Booking</th>
              </tr>
            </thead>
            <tbody>
              {filteredPricing.map((item, index) => (
                <React.Fragment key={index}>
                  {item.options.map((opt, optIndex) => (
                    <tr key={`${index}-${optIndex}`}>
                      <td>
                        {optIndex === 0 ? (
                          <>
                            <div className="pricing-row-name">
                              <Link 
                                to={item.path} 
                                style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--clr-btn-bg)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--clr-white)'}
                                title={`View detailed treatment info for ${item.name}`}
                              >
                                {item.name} &rarr;
                              </Link>
                            </div>
                            <div className="pricing-row-desc">{item.desc}</div>
                          </>
                        ) : (
                          <div style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.85rem' }}>
                            └─ {item.name} ({opt.duration})
                          </div>
                        )}
                      </td>
                      <td className="pricing-row-duration">{opt.duration}</td>
                      <td className="pricing-row-price">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                          <span>{opt.price}</span>
                          <Button 
                            href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${opt.duration} ${item.name} (at ${opt.price}).`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{ minHeight: '34px', fontSize: '0.8rem', padding: '0 1rem' }}
                          >
                            Book
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Voucher Redemption Promotion */}
        <section className="voucher-promo-section" aria-labelledby="voucher-heading">
          <div className="voucher-badge">Limited Time Offer</div>
          <h2 id="voucher-heading" className="voucher-title">How to Claim Your ₹1,000 Gift Voucher</h2>
          <p className="voucher-desc">
            Claim an exclusive discount of ₹1,000 on qualifying wellness and spa packages. Follow these three simple steps to secure your session.
          </p>

          <div className="voucher-steps">
            <div className="voucher-step">
              <span className="step-num">01</span>
              <h3 className="step-title">Claim Offer</h3>
              <p className="step-desc">Click "Claim Voucher" to chat on WhatsApp or call our desk directly at +91 95503 66963.</p>
            </div>
            <div className="voucher-step">
              <span className="step-num">02</span>
              <h3 className="step-title">Select Therapy</h3>
              <p className="step-desc">Pick any qualifying body massage, Balinese therapy, or Four Hand package from our menu.</p>
            </div>
            <div className="voucher-step">
              <span className="step-num">03</span>
              <h3 className="step-title">Visit Spa</h3>
              <p className="step-desc">Experience luxury healing at ACSS Complex Doddaballapura Rd, Yelahanka with ₹1,000 off.</p>
            </div>
          </div>

          <div className="cta-button-group">
            <Button 
              href={links.whatsappUrl(business.voucherMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn"
              style={{ minWidth: 'auto', padding: '1.2rem 3rem' }}
            >
              Claim ₹1,000 Gift Voucher
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Pricing;
