import React, { useState } from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const Pricing = () => {
  const { business, links } = spaConfig;
  const [activeTab, setActiveTab] = useState('all');

  const pricingData = [
    {
      name: "Traditional Thai Dry Massage",
      desc: "Invigorating dry bodywork combining yoga stretches and Sen line acupressure.",
      category: "single",
      options: [
        { duration: "60 Min", price: "₹1,999" },
        { duration: "90 Min", price: "₹2,499" }
      ]
    },
    {
      name: "Deep Tissue Therapy",
      desc: "Clinical myofascial work using firm cross-fiber friction to relieve muscle knots.",
      category: "single",
      options: [
        { duration: "60 Min", price: "₹2,299" },
        { duration: "90 Min", price: "₹2,799" }
      ]
    },
    {
      name: "Classic Swedish Therapy",
      desc: "Ultimate relaxation using light-to-medium strokes and calming organic oils.",
      category: "single",
      options: [
        { duration: "60 Min", price: "₹1,999" },
        { duration: "90 Min", price: "₹2,499" }
      ]
    },
    {
      name: "Balinese Aromatherapy",
      desc: "Traditional Indonesian massage incorporating gentle stretches, rolling, and scented oils.",
      category: "single",
      options: [
        { duration: "60 Min", price: "₹2,199" },
        { duration: "90 Min", price: "₹2,699" }
      ]
    },
    {
      name: "VIP Couples Suite",
      desc: "Side-by-side massages, steam chamber access, and hot jacuzzi bath for two.",
      category: "couples",
      options: [
        { duration: "90 Min", price: "₹4,999" },
        { duration: "120 Min", price: "₹6,299" }
      ]
    },
    {
      name: "Herbal Steam & Shower Add-on",
      desc: "Enhance any bodywork with hot steam and refreshing private shower access.",
      category: "addons",
      options: [
        { duration: "30 Min", price: "₹799" }
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
        title="Spa Tariff &amp; Massage Packages | Tropical Spa Yelahanka"
        description="Transparent pricing for massage and spa treatments at Tropical Spa Yelahanka. Claim your ₹1,000 gift voucher. Book today at +91 95503 66963."
        canonical="https://tropicalspa.in/pricing/"
      />

      <div className="page-container">
        
        {/* Page Header */}
        <header className="page-header">
          <h1 className="page-h1">Spa Menu, Tariffs &amp; Special Voucher Offers</h1>
          <p className="page-subtitle">Transparent rates for premium, certified therapies in Yelahanka. No hidden charges.</p>
        </header>

        {/* Interactive Filter Tabs */}
        <div className="pricing-tabs" role="tablist">
          <button 
            role="tab"
            aria-selected={activeTab === 'all'}
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Services
          </button>
          <button 
            role="tab"
            aria-selected={activeTab === 'single'}
            className={`tab-btn ${activeTab === 'single' ? 'active' : ''}`}
            onClick={() => setActiveTab('single')}
          >
            Single Massages
          </button>
          <button 
            role="tab"
            aria-selected={activeTab === 'couples'}
            className={`tab-btn ${activeTab === 'couples' ? 'active' : ''}`}
            onClick={() => setActiveTab('couples')}
          >
            Couples Packages
          </button>
          <button 
            role="tab"
            aria-selected={activeTab === 'addons'}
            className={`tab-btn ${activeTab === 'addons' ? 'active' : ''}`}
            onClick={() => setActiveTab('addons')}
          >
            Add-ons &amp; Steam
          </button>
        </div>

        {/* Pricing Grid / Table */}
        <div className="pricing-table-wrap" aria-label="Spa Pricing Menu">
          <table className="pricing-table">
            <thead>
              <tr>
                <th style={{ width: '55%' }}>Therapy Description</th>
                <th style={{ width: '20%' }}>Duration</th>
                <th style={{ width: '25%' }}>Tariff</th>
              </tr>
            </thead>
            <tbody>
              {filteredPricing.map((item, index) => (
                <React.Fragment key={index}>
                  {item.options.map((opt, optIndex) => (
                    <tr key={`${index}-${optIndex}`}>
                      <td>
                        {optIndex === 0 && (
                          <>
                            <div className="pricing-row-name">{item.name}</div>
                            <div className="pricing-row-desc">{item.desc}</div>
                          </>
                        )}
                      </td>
                      <td className="pricing-row-duration">{opt.duration}</td>
                      <td className="pricing-row-price">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
              <p className="step-desc">Pick any qualifying body massage, Balinese therapy, or VIP couples package from our menu.</p>
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
