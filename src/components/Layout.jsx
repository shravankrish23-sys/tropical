import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { spaConfig } from '../config/spaConfig';

export const Layout = () => {
  const { business, links } = spaConfig;
  const location = useLocation();

  return (
    <div className="app-container">
      <Header />
      
      {/* Main Content Area */}
      <main style={{ flex: '1 0 auto' }}>
        <Outlet />
      </main>

      {/* Premium Footer */}
      <footer className="site-footer" role="contentinfo">
        <div className="footer-top-grid">
          
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <img 
              src={spaConfig.images.logo} 
              alt={`${business.name} Logo`} 
              width="150" 
              height="49"
              style={{ marginBottom: '1.2rem', objectFit: 'contain' }}
            />
            <p className="footer-brand-desc">
              Amid the fast pace of Bengaluru, Tropical Spa provides a dedicated sanctuary for holistic restoration, stress relief, and muscular recovery. Experience luxury body therapies in Doddaballapura Main Rd, Yelahanka.
            </p>
            <ul className="footer-highlights">
              <li className="footer-highlight-item">Certified & Background-Verified Therapists</li>
              <li className="footer-highlight-item">100% Money-Back Satisfaction Guarantee</li>
              <li className="footer-highlight-item">Complimentary Beverages & Hot/Cold Towels</li>
            </ul>
          </div>

          {/* Quick & Services Links Column */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list" style={{ marginBottom: '2rem' }}>
              <li className="footer-link-item"><Link to="/">Home Sanctuary</Link></li>
              <li className="footer-link-item"><Link to="/locations/yelahanka/">Yelahanka Flagship</Link></li>
              <li className="footer-link-item"><Link to="/pricing/">Pricing & Menu</Link></li>
            </ul>

            <h3 className="footer-col-title">Wellness Therapies</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item"><Link to="/services/deep-tissue-massage/">Deep Tissue Massage</Link></li>
              <li className="footer-link-item"><Link to="/services/traditional-thai-massage/">Traditional Thai Massage</Link></li>
              <li className="footer-link-item"><Link to="/services/swedish-massage/">Classic Swedish Massage</Link></li>
              <li className="footer-link-item"><Link to="/services/couples-massage/">Luxury Couples Retreat</Link></li>
            </ul>
          </div>

          {/* NAP Contact Details Column */}
          <div className="footer-contact-col">
            <h3 className="footer-col-title">Contact & Location</h3>
            <ul className="footer-info-list">
              <li className="footer-info-item">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
                <address style={{ fontStyle: 'normal' }}>
                  <strong>{business.name}</strong><br />
                  {business.addressSingleLine}
                </address>
              </li>
              <li className="footer-info-item">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span><strong>Hours:</strong><br />{business.hours}</span>
              </li>
              <li className="footer-info-item">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
                </svg>
                <span>
                  <strong>Call / Book:</strong><br />
                  <a href={links.telUrl} className="contact-link" style={{ textDecoration: 'underline' }}>{business.phone}</a>
                </span>
              </li>
              <li className="footer-info-item">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>
                  <strong>Email Us:</strong><br />
                  <a href={links.emailUrl} className="contact-link contact-email-link">{business.email}</a>
                </span>
              </li>
            </ul>

            {/* Embedded maps style frame */}
            <div className="footer-map-embed">
              <iframe 
                src="https://maps.google.com/maps?q=13.121476,77.576569&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for Tropical Spa Yelahanka"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright and legal */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {business.name}. All Rights Reserved. Designed for local wellness Excellence.</p>
          <div className="footer-bottom-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/pricing/">Sitemap</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
