import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');

const routes = [
  '/',
  '/locations/yelahanka',
  '/services/deep-tissue-massage',
  '/services/traditional-thai-massage',
  '/services/swedish-massage',
  '/services/couples-massage',
  '/pricing'
];

const metadata = {
  '/': {
    title: 'Tropical Spa | Luxury Spa & Massage Centre in Yelahanka, Bengaluru',
    description: 'Visit Tropical Spa on Doddaballapura Main Rd, Yelahanka. Certified therapists, premium private rooms, complimentary beverages & ₹1000 special vouchers. Call +91 95503 66963.'
  },
  '/locations/yelahanka': {
    title: 'Best Spa in Yelahanka Bengaluru | Tropical Spa Doddaballapura Main Rd',
    description: 'Looking for the best spa in Yelahanka? Tropical Spa at ACSS Complex near CRPF Campus offers Deep Tissue, Thai, Swedish & Couples massage. Book now: +91 95503 66963.'
  },
  '/services/deep-tissue-massage': {
    title: 'Deep Tissue Massage in Yelahanka | Tropical Spa Bengaluru',
    description: 'Relieve chronic pain, stiff neck, and back tension with Deep Tissue Massage at Tropical Spa Yelahanka. Certified therapists. Book session: +91 95503 66963.'
  },
  '/services/traditional-thai-massage': {
    title: 'Authentic Thai Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Experience authentic Thai dry massage and yoga stretching at Tropical Spa Yelahanka. Boost flexibility and energy. Call +91 95503 66963.'
  },
  '/services/swedish-massage': {
    title: 'Swedish Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Unwind with a classic luxury Swedish Massage at Tropical Spa Yelahanka. Relax muscles, improve circulation, and melt stress. Book now: +91 95503 66963.'
  },
  '/services/couples-massage': {
    title: 'Couples Spa & Massage in Yelahanka | Tropical Spa Bengaluru',
    description: 'Exclusive couples spa packages with private suites and jacuzzi hydrotherapy at Tropical Spa Yelahanka. Reserve your private session: +91 95503 66963.'
  },
  '/pricing': {
    title: 'Spa Tariff & Massage Packages | Tropical Spa Yelahanka',
    description: 'Transparent pricing for massage and spa treatments at Tropical Spa Yelahanka. Claim your ₹1,000 gift voucher. Book today at +91 95503 66963.'
  }
};

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

(async () => {
  for (const url of routes) {
    const routePath = url === '/' ? '' : url;
    const outDir = toAbsolute(`dist${routePath}`);
    
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    let html = template;
    const meta = metadata[url];
    
    const canonicalLink = `<link rel="canonical" href="https://tropicalspa.in${url === '/' ? '' : url}" />`;
    const schemaScript = `<script type="application/ld+json">${JSON.stringify(schemaJson)}</script>`;
    
    html = html.replace('<head>', `<head>\n  ${canonicalLink}\n  ${schemaScript}`);
    
    if (meta) {
      html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
      
      if (html.includes('name="title"')) {
        html = html.replace(/<meta name="title" content=".*?"\s*\/?>/, `<meta name="title" content="${meta.title}" />`);
      } else {
        html = html.replace('</title>', `</title>\n  <meta name="title" content="${meta.title}" />`);
      }
      
      if (html.includes('name="description"')) {
        html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${meta.description}" />`);
      } else {
        html = html.replace('</title>', `</title>\n  <meta name="description" content="${meta.description}" />`);
      }

      if (html.includes('property="og:title"')) {
        html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/, `<meta property="og:title" content="${meta.title}" />`);
      }
      
      if (html.includes('property="og:description"')) {
        html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/, `<meta property="og:description" content="${meta.description}" />`);
      }

      if (html.includes('property="og:url"')) {
        html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/, `<meta property="og:url" content="https://tropicalspa.in${url === '/' ? '' : url}" />`);
      } else {
        html = html.replace('</title>', `</title>\n  <meta property="og:url" content="https://tropicalspa.in${url === '/' ? '' : url}" />`);
      }
    }
    
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
  }
  console.log('Successfully pre-rendered all static routes.');
})();
