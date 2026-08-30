import React, { useEffect } from 'react';

export const SeoMeta = ({ title, description }) => {
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
  }, [title, description]);

  // JSON-LD DaySpa and FAQPage schemas
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DaySpa",
        "@id": "https://tropicalspa.in/#organization",
        "name": "Tropical Spa",
        "url": "https://tropicalspa.in",
        "telephone": "+919550366963",
        "email": "tropicalventures23@gmail.com",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NO.1, 1st floor ACSS COMPLEX, CRPF CAMPUS, Doddaballapura Main Rd",
          "addressLocality": "Yelahanka, Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560064",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 13.0956,
          "longitude": 77.5890
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "10:00",
            "closes": "21:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "180"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is Tropical Spa located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tropical Spa is located at NO.1, 1st Floor, ACSS Complex, CRPF Campus, Doddaballapura Main Road, Yelahanka, Bengaluru - 560064."
            }
          },
          {
            "@type": "Question",
            "name": "How do I claim the ₹1,000 gift voucher?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Call or WhatsApp us at +91 95503 66963 or visit us in Yelahanka to claim your ₹1,000 gift voucher on select therapies."
            }
          },
          {
            "@type": "Question",
            "name": "What are your operating hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are open 7 days a week from 10:00 AM to 9:00 PM."
            }
          }
        ]
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaJson)}
    </script>
  );
};
