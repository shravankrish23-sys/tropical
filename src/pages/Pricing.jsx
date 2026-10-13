import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { Testimonials } from '../components/Testimonials';
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
        { duration: "60 Min", badge: "Signature" },
        { duration: "90 Min", badge: "Extended Deep Care" }
      ]
    },
    {
      name: "Swedish Massage",
      desc: "Quintessential relaxation therapy utilizing long gliding strokes and organic botanical oils.",
      category: "full_body",
      path: "/services/swedish-massage/",
      options: [
        { duration: "60 Min", badge: "Relaxation" },
        { duration: "90 Min", badge: "Full Stress Relief" }
      ]
    },
    {
      name: "Aroma Therapy",
      desc: "Holistic sensory bodywork infused with pure organic essential oils to balance the central nervous system.",
      category: "full_body",
      path: "/services/aromatherapy-massage/",
      options: [
        { duration: "60 Min", badge: "Sensory Calm" },
        { duration: "90 Min", badge: "Total Renewal" }
      ]
    },
    {
      name: "Thai Massage",
      desc: "Ancient dry bodywork combining passive yoga stretches, rhythmic joint mobilization, and Sen line acupressure.",
      category: "full_body",
      path: "/services/traditional-thai-massage/",
      options: [
        { duration: "60 Min", badge: "Flexibility & Energy" },
        { duration: "90 Min", badge: "Full Body Mobility" }
      ]
    },
    {
      name: "Balinese Massage",
      desc: "Traditional Indonesian healing combining gentle stretching, acupressure rolling, and scented exotic oils.",
      category: "full_body",
      path: "/services/balinese-massage/",
      options: [
        { duration: "60 Min", badge: "Exotic Relaxation" },
        { duration: "90 Min", badge: "Deep Restoration" }
      ]
    },
    {
      name: "Deep Tissue Massage",
      desc: "Clinical myofascial therapy with firm cross-fiber pressure targeting chronic pain, stiff neck, and deep knots.",
      category: "full_body",
      path: "/services/deep-tissue-massage/",
      options: [
        { duration: "60 Min", badge: "Myofascial Release" },
        { duration: "90 Min", badge: "Chronic Pain Relief" }
      ]
    },
    {
      name: "Four Hand Massage",
      desc: "The pinnacle of luxury with two certified master therapists delivering synchronized mirrored strokes.",
      category: "full_body",
      path: "/services/four-hand-massage/",
      options: [
        { duration: "60 Min", badge: "Dual Therapist Sync" },
        { duration: "90 Min", badge: "Ultimate VIP Luxury" }
      ]
    },

    // 2. Express / Targeted Body Treatments (30 min)
    {
      name: "Back Massage",
      desc: "Focused relief for upper, mid, and lower back muscles strained by desk work or driving.",
      category: "targeted",
      path: "/services/back-massage/",
      options: [
        { duration: "30 Min", badge: "Targeted Relief" }
      ]
    },
    {
      name: "Feet Massage",
      desc: "Traditional foot reflexology stimulating vital energy points and relieving lower limb fatigue.",
      category: "targeted",
      path: "/services/feet-massage/",
      options: [
        { duration: "30 Min", badge: "Reflexology Care" }
      ]
    },
    {
      name: "Body Polish",
      desc: "Gentle botanical resurfacing and deep hydration that leaves your skin luminous and velvety soft.",
      category: "targeted",
      path: "/services/body-polish/",
      options: [
        { duration: "30 Min", badge: "Skin Glow & Hydration" }
      ]
    },
    {
      name: "Body Scrub",
      desc: "Exfoliating mineral crystal scrub to remove dead cells, unclog pores, and revitalize skin tone.",
      category: "targeted",
      path: "/services/body-scrub/",
      options: [
        { duration: "30 Min", badge: "Deep Exfoliation" }
      ]
    },

    // 3. Add-On Services
    {
      name: "HOT STONE THERAPY",
      desc: "Smooth heated volcanic basalt stones delivering radiant thermal energy into tight muscle layers.",
      category: "addons",
      path: "/services/hot-stone-therapy/",
      options: [
        { duration: "20 Min", badge: "Thermal Therapy" }
      ]
    },
    {
      name: "CUPPING THERAPY",
      desc: "Negative pressure myofascial suction to separate bound connective tissues and detoxify muscles.",
      category: "addons",
      path: "/services/cupping-therapy/",
      options: [
        { duration: "20 Min", badge: "Toxin Release" }
      ]
    },
    {
      name: "HEAD MASSAGE",
      desc: "Shiroabhyanga acupressure scalp massage relieving mental tension, digital eye strain, and headaches.",
      category: "addons",
      path: "/services/head-massage/",
      options: [
        { duration: "30 Min", badge: "Stress & Scalp Care" }
      ]
    },
    {
      name: "HEAD MASSAGE ( WOMEN )",
      desc: "Tailored scalp, hair root, and temple massage with premium nourishing herbal oils.",
      category: "addons",
      path: "/services/head-massage/",
      options: [
        { duration: "Standard", badge: "Nourishing Herbal Care" }
      ]
    },
    {
      name: "ESSENTIAL OIL UPGRADE (AROMATHERAPY OILS)",
      desc: "Upgrade any bodywork session with our top-tier pure organic essential oil blends.",
      category: "addons",
      path: "/services/aromatherapy-massage/",
      options: [
        { duration: "Upgrade", badge: "Pure Botanical Extract" }
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
        title="Therapy Menu & Custom Packages | Tropical Spa Yelahanka Bengaluru"
        description="Explore certified massage therapies & customized packages at Tropical Spa Yelahanka. Connect with our front desk for package tariffs & claim your ₹1,000 gift voucher."
        canonical="https://tropicalspa.in/pricing/"
      />

      <div className="page-container">
        
        {/* Page Header */}
        <header className="page-header">
          <div className="pricing-badge-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1rem', color: 'var(--clr-btn-bg)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            ✦ Personalized Wellness Packages
          </div>
          <h1 className="page-h1">Tropical Spa Menu &amp; Package Offerings</h1>
          <p className="page-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
            We provide tailored individual sessions, multi-visit wellness packages, and couple retreats. Connect directly with our front desk to receive the complete tariff card and personalized package recommendations.
          </p>
        </header>

        {/* Consultation Callout Banner */}
        <div className="pricing-consult-banner" style={{ background: 'linear-gradient(135deg, rgba(20, 28, 21, 0.85) 0%, rgba(30, 42, 32, 0.85) 100%)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '16px', padding: '1.5rem 2rem', marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--clr-white)', marginBottom: '0.35rem' }}>Looking for custom packages or special corporate offers?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.92rem', margin: 0 }}>
              Speak directly with our spa consultants to choose the right therapy, certified therapist, and package discounts.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <Button 
              href={links.whatsappUrl("Hello Tropical Spa! Please share the complete package tariff card and current offers.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ minHeight: '44px', padding: '0 1.5rem', fontSize: '0.95rem' }}
            >
              💬 WhatsApp for Packages
            </Button>
            <Button 
              href={links.telUrl}
              className="btn cta-outline"
              style={{ minHeight: '44px', padding: '0 1.5rem', fontSize: '0.95rem' }}
            >
              📞 Call Desk: {business.phone}
            </Button>
          </div>
        </div>

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

        {/* Therapy Menu Table Wrap */}
        <div className="pricing-table-wrap" aria-label="Official Spa Therapy Menu">
          <table className="pricing-table">
            <thead>
              <tr>
                <th style={{ width: '50%' }}>Therapy Description</th>
                <th style={{ width: '22%' }}>Duration &amp; Focus</th>
                <th style={{ width: '28%' }}>Package Inquiry</th>
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
                      <td className="pricing-row-duration">
                        <div style={{ fontWeight: 600, color: 'var(--clr-white)' }}>{opt.duration}</div>
                        {opt.badge && (
                          <div style={{ fontSize: '0.78rem', color: 'var(--clr-olive-light)', marginTop: '0.15rem' }}>
                            {opt.badge}
                          </div>
                        )}
                      </td>
                      <td className="pricing-row-price">
                        <Button 
                          href={links.whatsappUrl(`Hello Tropical Spa! I would like to inquire about the package options and tariffs for ${opt.duration} ${item.name}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{ minHeight: '34px', fontSize: '0.8rem', padding: '0 1rem', width: '100%', whiteSpace: 'nowrap' }}
                        >
                          💬 Inquire Package
                        </Button>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Voucher Redemption Promotion */}
        <section className="voucher-promo-section" aria-labelledby="voucher-heading" style={{ marginTop: '3.5rem' }}>
          <div className="voucher-badge">Limited Time Welcome Gift</div>
          <h2 id="voucher-heading" className="voucher-title">How to Claim Your ₹1,000 Gift Voucher</h2>
          <p className="voucher-desc">
            Claim an exclusive welcome benefit of ₹1,000 on qualifying wellness and spa packages. Follow these three simple steps to secure your session.
          </p>

          <div className="voucher-steps">
            <div className="voucher-step">
              <span className="step-num">01</span>
              <h3 className="step-title">Connect With Us</h3>
              <p className="step-desc">Click "Claim Voucher" to chat on WhatsApp or call our desk directly at {business.phone}.</p>
            </div>
            <div className="voucher-step">
              <span className="step-num">02</span>
              <h3 className="step-title">Select Therapy</h3>
              <p className="step-desc">Choose any qualifying full body massage, Balinese therapy, or Four Hand package.</p>
            </div>
            <div className="voucher-step">
              <span className="step-num">03</span>
              <h3 className="step-title">Visit Spa</h3>
              <p className="step-desc">Experience luxury healing at ACSS Complex Doddaballapura Rd, Yelahanka with ₹1,000 applied to your package.</p>
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

          <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem' }}>
            <Link to="/terms/" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'underline' }}>
              *Terms &amp; conditions apply
            </Link>
          </div>
        </section>

        {/* Real Customer Reviews Section */}
        <div style={{ marginTop: '4rem' }}>
          <Testimonials 
            title="Guest Experiences on Our Ambiance & Packages"
            subtitle="Verified guests share their thoughts on our certified therapists, hygiene, and package value."
          />
        </div>

      </div>
    </div>
  );
};

export default Pricing;
