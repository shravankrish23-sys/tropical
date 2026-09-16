import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { MapFacade } from '../components/MapFacade';
import { spaConfig } from '../config/spaConfig';

export const LocationYelahanka = () => {
  const { business, links } = spaConfig;

  return (
    <div>
      <SeoMeta 
        title="Best Spa in Yelahanka Bengaluru | Tropical Spa Doddaballapura Main Rd"
        description="Looking for the best spa in Yelahanka? Tropical Spa at ACSS Complex on Doddaballapura Main Rd (next to Nice Mart) offers Deep Tissue, Thai, Swedish & Couples massage. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/locations/yelahanka/"
      />

      <div className="page-container">
        
        {/* Page Header */}
        <header className="page-header">
          <h1 className="page-h1">Premium Body Massage &amp; Wellness Spa in Yelahanka, Bengaluru</h1>
          <p className="page-subtitle">Wellness Centre located on Doddaballapura Main Road</p>
        </header>

        {/* Main Grid */}
        <div className="geo-main-grid">
          
          {/* Left Column: Local Copy & Directions */}
          <div className="geo-content-block">
            
            <section aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="geo-section-title">Your Local Wellness Oasis</h2>
              <p className="geo-intro-text" style={{ marginTop: '1rem' }}>
                Conveniently located at 1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart, Tropical Spa is the premier wellness destination for residents across Yelahanka New Town, Kogilu, Allalasandra, Judicial Layout, and surrounding North Bengaluru neighborhoods. Avoid long commutes into central Bengaluru and experience luxury massage therapies right in your neighborhood.
              </p>
            </section>

            {/* Directions & Landmarks */}
            <section aria-labelledby="directions-heading">
              <h2 id="directions-heading" className="geo-section-title">Directions &amp; Landmarks</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Finding our spa is extremely simple. We are situated directly on the Doddaballapura Highway, ensuring easy accessibility by car, cab, or public transit.
              </p>
              
              <div className="landmarks-grid">
                <div className="landmark-item">
                  <div className="landmark-name">Nice Mart</div>
                  <div className="landmark-desc">Located right next to Nice Mart on Doddaballapura Main Road, serving as our primary regional landmark.</div>
                </div>
                <div className="landmark-item">
                  <div className="landmark-name">ACSS Complex</div>
                  <div className="landmark-desc">Our facility occupies the entire 1st Floor of the ACSS Complex. Look for our clear, premium signage from the highway.</div>
                </div>
                <div className="landmark-item">
                  <div className="landmark-name">Doddaballapura Highway</div>
                  <div className="landmark-desc">Directly accessible on the main road connecting Yelahanka to Doddaballapura, with ample parking space for guests.</div>
                </div>
                <div className="landmark-item">
                  <div className="landmark-name">Yelahanka New Town</div>
                  <div className="landmark-desc">Less than a 5-minute drive from the heart of Yelahanka New Town residential sectors, Kogilu, and Allalasandra.</div>
                </div>
              </div>
            </section>

            {/* High-converting Booking CTAs */}
            <section className="geo-booking-card" aria-labelledby="voucher-booking-heading">
              <h3 id="voucher-booking-heading">Claim Your ₹1,000 Gift Voucher</h3>
              <p>Book any premium massage or luxury spa package today and receive ₹1,000 off. Exclusive to new guests booking online or via WhatsApp.</p>
              
              <div className="cta-button-group">
                <Button 
                  href={links.telUrl}
                  className="hero-cta-btn"
                  style={{ minWidth: 'auto', padding: '1rem 2rem', fontSize: '1.15rem' }}
                >
                  Call +91 95503 66963
                </Button>
                <Button 
                  href={links.whatsappUrl(business.voucherMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-btn cta-outline"
                  style={{ minWidth: 'auto', padding: '1rem 2rem', fontSize: '1.15rem' }}
                >
                  WhatsApp Us
                </Button>
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Maps & Hours */}
          <aside className="geo-map-container" aria-label="Location Details">
            <h3 className="geo-section-title" style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Store Information</h3>
            
            <ul className="footer-info-list" style={{ marginBottom: '2rem' }}>
              <li className="footer-info-item">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
                <span>
                  <strong>Address:</strong><br />
                  {business.addressSingleLine}
                </span>
              </li>
              <li className="footer-info-item">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span>
                  <strong>Hours:</strong><br />
                  {business.hours}
                </span>
              </li>
              <li className="footer-info-item">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
                </svg>
                <span>
                  <strong>Call Directly:</strong><br />
                  <a href={links.telUrl} style={{ color: 'var(--clr-btn-bg)', textDecoration: 'underline', fontWeight: 600 }}>{business.phone}</a>
                </span>
              </li>
            </ul>

            <div className="geo-map-frame">
              <MapFacade 
                title="Google Maps Location for Tropical Spa Yelahanka Centre" 
                height="100%" 
              />
            </div>
          </aside>

        </div>

      </div>
    </div>
  );
};
export default LocationYelahanka;
