import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { MapFacade } from './MapFacade';
import { spaConfig } from '../config/spaConfig';

export const Layout = () => {
  const { business, links, images } = spaConfig;
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
            <picture>
              <source type="image/webp" srcSet={`${images.logoWebp} 1x, /logo.webp 2x`} />
              <source type="image/png" srcSet={`${images.logo} 1x, /logo.png 2x`} />
              <img 
                src={images.logo} 
                alt={`${business.name} Logo`} 
                width="150" 
                height="49"
                loading="lazy"
                decoding="async"
                style={{ marginBottom: '1.2rem', objectFit: 'contain' }}
              />
            </picture>
            <p className="footer-brand-desc">
              Amid the fast pace of Bengaluru, Tropical Spa provides a dedicated sanctuary for holistic restoration, stress relief, and muscular recovery. Experience luxury body therapies in Doddaballapura Main Rd, Yelahanka.
            </p>
            <ul className="footer-highlights">
              <li className="footer-highlight-item">Certified & Background-Verified Therapists</li>
              <li className="footer-highlight-item">100% Money-Back Satisfaction Guarantee</li>
              <li className="footer-highlight-item">Complimentary Beverages & Hot/Cold Towels</li>
            </ul>

            <div className="footer-social-wrapper">
              <span className="footer-social-title">Follow Us & Verified Reviews</span>
              <div className="footer-social-icons">
                <a
                  href={business.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon-btn social-facebook"
                  aria-label="Visit Tropical Spa on Facebook"
                  title="Facebook - Tropical Spa Yelahanka"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={business.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon-btn social-instagram"
                  aria-label="Visit Tropical Spa on Instagram"
                  title="Instagram - @tropicalspa.yelahanka"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={business.socialLinks.trustpilot}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon-btn social-trustpilot"
                  aria-label="Read Tropical Spa Reviews on Trustpilot"
                  title="Trustpilot - Tropical Spa Reviews"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
                  </svg>
                </a>
                <a
                  href={business.socialLinks.googleProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon-btn social-google"
                  aria-label="View Tropical Spa Google Business Profile"
                  title="Google Business Profile - Tropical Spa"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M12 11.5v3.6h5.8c-.3 1.5-1.7 4.4-5.8 4.4-3.5 0-6.4-2.9-6.4-6.5s2.9-6.5 6.4-6.5c2 0 3.3.8 4.1 1.6l2.8-2.7C16.8 3.3 14.6 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12s4.3 9.6 9.6 9.6c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.7H12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>


          {/* Quick & Services Links Column */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list" style={{ marginBottom: '2rem' }}>
              <li className="footer-link-item"><Link to="/">Home Sanctuary</Link></li>
              <li className="footer-link-item"><Link to="/locations/yelahanka/">Yelahanka Centre</Link></li>
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
              <MapFacade title="Google Maps Location for Tropical Spa Yelahanka" height="100%" />
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
