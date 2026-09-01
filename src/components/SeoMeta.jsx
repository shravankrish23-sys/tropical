import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { businessInfo } from '../config/businessInfo';

export const primaryCanonicalMap = {
  '': 'https://tropicalspa.in/',
  '/': 'https://tropicalspa.in/',
  '/pricing': 'https://tropicalspa.in/pricing/',
  '/locations/yelahanka': 'https://tropicalspa.in/locations/yelahanka/',
  '/location-yelahanka': 'https://tropicalspa.in/locations/yelahanka/',
  '/services/swedish-massage': 'https://tropicalspa.in/services/swedish-massage/',
  '/swedish-massage': 'https://tropicalspa.in/services/swedish-massage/',
  '/services/traditional-thai-massage': 'https://tropicalspa.in/services/traditional-thai-massage/',
  '/thai-massage': 'https://tropicalspa.in/services/traditional-thai-massage/',
  '/services/deep-tissue-massage': 'https://tropicalspa.in/services/deep-tissue-massage/',
  '/deep-tissue': 'https://tropicalspa.in/services/deep-tissue-massage/',
  '/services/couples-massage': 'https://tropicalspa.in/services/couples-massage/',
  '/couples-massage': 'https://tropicalspa.in/services/couples-massage/'
};

export const resolveCanonicalUrl = (pathname, explicitCanonical) => {
  if (explicitCanonical) return explicitCanonical;
  if (!pathname) return 'https://tropicalspa.in/';
  const normalized = pathname.replace(/\/+$/, '').toLowerCase();
  return primaryCanonicalMap[normalized] || `https://tropicalspa.in${normalized ? `${normalized}/` : '/'}`;
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "HealthAndBeautyBusiness", "LocalBusiness"],
  "@id": "https://tropicalspa.in/#organization",
  "name": businessInfo.name,
  "alternateName": "Tropical Spa Yelahanka",
  "url": businessInfo.websiteUrl,
  "logo": "https://tropicalspa.in/logo.png",
  "image": "https://tropicalspa.in/hero-yoga.png",
  "description": "Luxury Spa & Massage Centre located in Doddaballapura Main Rd, Yelahanka, Bengaluru. Offering certified Deep Tissue, Traditional Thai, Classic Swedish, and Luxury Couples Massage therapies.",
  "telephone": businessInfo.phoneRaw,
  "email": businessInfo.email,
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart",
    "addressLocality": "Yelahanka, Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560064",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.121476,
    "longitude": 77.576569
  },
  "hasMap": "https://maps.google.com/maps?q=13.121476,77.576569",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    businessInfo.socialLinks.facebook,
    businessInfo.socialLinks.instagram,
    businessInfo.socialLinks.trustpilot,
    businessInfo.socialLinks.googleProfile
  ]
};

export const SeoMeta = ({ title, description, canonical, schema }) => {
  let location;
  try {
    location = useLocation();
  } catch (e) {
    location = null;
  }

  useEffect(() => {
    if (title) {
      document.title = title;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      const metaTitle = document.querySelector('meta[name="title"]');
      if (metaTitle) metaTitle.setAttribute('content', title);
    }
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
    }

    // Dynamic Canonical Link management
    const currentPath = location?.pathname || (typeof window !== 'undefined' ? window.location.pathname : '');
    const canonicalUrl = resolveCanonicalUrl(currentPath, canonical);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Update og:url
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }

    // Inject / Update LocalBusiness JSON-LD schema (Strictly exactly one script tag)
    const activeSchema = schema || localBusinessSchema;
    const allSchemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    let schemaScript = document.getElementById('local-business-schema') || (allSchemaScripts.length > 0 ? allSchemaScripts[0] : null);

    // Remove any duplicate schema scripts if present
    if (allSchemaScripts.length > 1) {
      for (let i = 1; i < allSchemaScripts.length; i++) {
        allSchemaScripts[i].remove();
      }
    }

    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.id = 'local-business-schema';
      schemaScript.setAttribute('data-schema', 'local-business');
      document.head.appendChild(schemaScript);
    } else {
      schemaScript.id = 'local-business-schema';
      schemaScript.setAttribute('data-schema', 'local-business');
    }
    schemaScript.textContent = JSON.stringify(activeSchema, null, 2);
  }, [title, description, canonical, schema, location]);

  return null;
};



