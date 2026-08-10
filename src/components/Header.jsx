import React from 'react';
import { Button } from './Button';
import { spaConfig } from '../config/spaConfig';

export const Header = () => {
  const { business, images, links } = spaConfig;

  return (
    <header className="site-header" role="banner">
      <div className="header-container">
        <a href="#" className="brand-link" aria-label={`${business.name} Home`}>
          <img
            src={images.logo}
            alt={`${business.name} Logo`}
            className="brand-logo-img"
            width="140"
            height="46"
          />
        </a>

        <Button
          href={links.whatsappUrl(business.bookingMessage)}
          target="_blank"
          rel="noopener noreferrer"
          id="header-book-now"
          className="header-btn"
          ariaLabel="Book an appointment now via WhatsApp"
        >
          Book Now
        </Button>
      </div>
    </header>
  );
};
