import React, { useEffect } from 'react';
import { businessInfo } from '../config/businessInfo';

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
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "180"
  }
};

export const SeoMeta = ({ title, description, schema }) => {
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

    // Inject / Update LocalBusiness JSON-LD schema
    const activeSchema = schema || localBusinessSchema;
    let schemaScript = document.querySelector('script[data-schema="local-business"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-schema', 'local-business');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(activeSchema, null, 2);

    return () => {
      // Cleanup is optional, keeping head tags valid across route changes
    };
  }, [title, description, schema]);

  return null;
};

