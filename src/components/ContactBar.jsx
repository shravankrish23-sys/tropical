import React from 'react';
import { spaConfig } from '../config/spaConfig';

export const ContactBar = () => {
  const { business, links } = spaConfig;

  return (
    <footer className="contact-strip" id="contact" role="contentinfo">
      <div className="contact-container">
        
        {/* Address */}
        <div className="contact-item">
          <div className="contact-icon-circle" aria-hidden="true">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
          </div>
          <div className="contact-info">
            <div className="contact-label">Address :</div>
            <address className="contact-address">
              {business.addressLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < business.addressLines.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div className="contact-divider" aria-hidden="true"></div>

        {/* Call */}
        <div className="contact-item">
          <div className="contact-icon-circle" aria-hidden="true">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
            </svg>
          </div>
          <div className="contact-info">
            <div className="contact-label">Call :</div>
            <div>
              <a href={links.telUrl} className="contact-link" aria-label={`Call Tropical Spa at ${business.phone}`}>
                {business.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-divider" aria-hidden="true"></div>

        {/* WhatsApp */}
        <div className="contact-item">
          <div className="contact-icon-circle" aria-hidden="true">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.073-1.118l-.29-.173-3.016.864.854-2.952-.19-.303A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
            </svg>
          </div>
          <div className="contact-info">
            <div className="contact-label">WhatsApp</div>
            <div>
              <a
                href={links.whatsappUrl(business.bookingMessage)}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Tropical Spa on WhatsApp"
              >
                {business.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-divider" aria-hidden="true"></div>

        {/* Email */}
        <div className="contact-item">
          <div className="contact-icon-circle" aria-hidden="true">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div className="contact-info">
            <div className="contact-label">Email :</div>
            <div>
              <a href={links.emailUrl} className="contact-link contact-email-link" aria-label={`Email Tropical Spa at ${business.email}`}>
                {business.email}
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
