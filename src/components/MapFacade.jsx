import React, { useState } from 'react';
import { spaConfig } from '../config/spaConfig';

export const MapFacade = ({ 
  title = "Google Maps Location for Tropical Spa Yelahanka",
  height = "100%",
  className = ""
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { business } = spaConfig;
  const mapEmbedUrl = "https://maps.google.com/maps?q=13.121476,77.576569&z=17&output=embed";
  const mapDirectUrl = business.googleMapsPlaceUrl || "https://www.google.com/maps/place/Tropical+Spa/@13.1209003,77.5770156,16z/data=!4m6!3m5!1s0x3bae19c65bc99fdb:0x348c454846c0e5d0!8m2!3d13.1212569!4d77.5765474!16s%2Fg%2F11zd95jf1c?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D";

  if (isLoaded) {
    return (
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height={height}
        style={{ border: 0, minHeight: '200px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    );
  }

  return (
    <div 
      className={`map-facade-card ${className}`}
      style={{ 
        height, 
        minHeight: '160px',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(20, 28, 21, 0.95) 0%, rgba(30, 40, 31, 0.9) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        padding: '1.2rem',
        textAlign: 'center',
        overflow: 'hidden'
      }}
      aria-label="Map preview for Tropical Spa Yelahanka"
    >
      {/* Decorative Grid Pattern */}
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: 'radial-gradient(circle, #9eb875 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9eb875' }}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
          </svg>
          <span style={{ fontWeight: '600', fontSize: '0.95rem', color: '#ffffff' }}>Yelahanka Centre</span>
        </div>

        <p style={{ fontSize: '0.82rem', color: '#d1dccd', maxWidth: '340px', lineHeight: '1.4', margin: 0 }}>
          1st Floor, ACSS Complex, Doddaballapura Main Rd, Yelahanka
        </p>

        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="btn"
            style={{
              minHeight: '36px',
              padding: '0.4rem 1.1rem',
              fontSize: '0.85rem',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            aria-label="Load interactive Google map"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
            Load Map
          </button>

          <a
            href={mapDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn cta-outline"
            style={{
              minHeight: '36px',
              padding: '0.4rem 1.1rem',
              fontSize: '0.85rem',
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}
            aria-label="Get directions in Google Maps"
          >
            Directions ↗
          </a>
        </div>
      </div>
    </div>
  );
};
