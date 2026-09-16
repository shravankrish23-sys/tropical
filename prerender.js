import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');

// 7 Primary Canonical URLs
const primaryRoutes = [
  '/',
  '/pricing',
  '/locations/yelahanka',
  '/services/swedish-massage',
  '/services/traditional-thai-massage',
  '/services/deep-tissue-massage',
  '/services/couples-massage'
];

// Alias routes mapped to their master canonical URLs
const aliasMap = {
  '/location-yelahanka': '/locations/yelahanka',
  '/swedish-massage': '/services/swedish-massage',
  '/thai-massage': '/services/traditional-thai-massage',
  '/deep-tissue': '/services/deep-tissue-massage',
  '/couples-massage': '/services/couples-massage'
};

const allRoutes = [...primaryRoutes, ...Object.keys(aliasMap)];

const metadata = {
  '/': {
    title: 'Tropical Spa | Luxury Spa & Massage Centre in Yelahanka, Bengaluru',
    description: 'Visit Tropical Spa on Doddaballapura Main Rd, Yelahanka. Certified therapists, premium private rooms, complimentary beverages & ₹1000 special vouchers. Call +91 95503 66963.',
    heading: 'Experience the Tropical Spa Sanctuary in Yelahanka',
    subheading: 'Premium holistic wellness, certified body therapies, and private relaxation suites in Doddaballapura Main Rd, Bengaluru.'
  },
  '/pricing': {
    title: 'Spa Tariff & Massage Packages | Tropical Spa Yelahanka',
    description: 'Transparent pricing for massage and spa treatments at Tropical Spa Yelahanka. Claim your ₹1,000 gift voucher. Book today at +91 95503 66963.',
    heading: 'Tropical Spa Menu & Transparent Tariff in Yelahanka',
    subheading: 'Affordable luxury packages starting with special ₹1,000 gift vouchers and a 100% money-back guarantee.'
  },
  '/locations/yelahanka': {
    title: 'Best Spa in Yelahanka Bengaluru | Tropical Spa Doddaballapura Main Rd',
    description: 'Looking for the best spa in Yelahanka? Tropical Spa at ACSS Complex on Doddaballapura Main Rd (next to Nice Mart) offers Deep Tissue, Thai, Swedish & Couples massage. Book now: +91 95503 66963.',
    heading: 'Tropical Spa Yelahanka Sanctuary',
    subheading: 'Conveniently located on Doddaballapura Main Road, next to Nice Mart, Yelahanka, Bengaluru.'
  },
  '/services/swedish-massage': {
    title: 'Swedish Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Unwind with a classic luxury Swedish Massage at Tropical Spa Yelahanka. Relax muscles, improve circulation, and melt stress. Book now: +91 95503 66963.',
    heading: 'Classic Swedish Massage Therapy in Yelahanka',
    subheading: 'Gentle, flowing strokes using warm therapeutic herbal oils designed to eliminate tension and promote complete relaxation.'
  },
  '/services/traditional-thai-massage': {
    title: 'Authentic Thai Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Experience authentic Thai dry massage and yoga stretching at Tropical Spa Yelahanka. Boost flexibility and energy. Call +91 95503 66963.',
    heading: 'Authentic Traditional Thai Massage in Yelahanka',
    subheading: 'Ancient passive stretching and acupressure therapy without oils, restoring vitality and joint flexibility.'
  },
  '/services/deep-tissue-massage': {
    title: 'Deep Tissue Massage in Yelahanka | Tropical Spa Bengaluru',
    description: 'Relieve chronic pain, stiff neck, and back tension with Deep Tissue Massage at Tropical Spa Yelahanka. Certified therapists. Book session: +91 95503 66963.',
    heading: 'Deep Tissue Muscle Recovery Massage in Yelahanka',
    subheading: 'Focused deep pressure targeting chronic back pain, muscle stiffness, and athletic fatigue.'
  },
  '/services/couples-massage': {
    title: 'Couples Spa & Massage in Yelahanka | Tropical Spa Bengaluru',
    description: 'Exclusive couples spa packages with private suites and jacuzzi hydrotherapy at Tropical Spa Yelahanka. Reserve your private session: +91 95503 66963.',
    heading: 'Luxury Couples Spa & Jacuzzi Retreat in Yelahanka',
    subheading: 'Side-by-side synchronized body treatments in private romantic couple suites with complimentary beverages.'
  }
};

// Aliases inherit master metadata
for (const [alias, master] of Object.entries(aliasMap)) {
  metadata[alias] = metadata[master];
}

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["DaySpa", "HealthAndBeautyBusiness", "LocalBusiness"],
      "@id": "https://tropicalspa.in/#organization",
      "name": "Tropical Spa",
      "alternateName": "Tropical Spa Yelahanka",
      "url": "https://tropicalspa.in",
      "logo": "https://tropicalspa.in/logo.png",
      "image": "https://tropicalspa.in/hero-yoga.png",
      "description": "Tropical Spa in Yelahanka, Bengaluru provides luxury wellness therapies, certified Deep Tissue, Traditional Thai, Swedish, and Couples massages with complimentary beverages and ₹1,000 vouchers.",
      "telephone": "+919550366963",
      "email": "tropicalventures23@gmail.com",
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
      "hasMap": "https://www.google.com/maps/place/Tropical+Spa/@13.1209003,77.5770156,16z/data=!4m6!3m5!1s0x3bae19c65bc99fdb:0x348c454846c0e5d0!8m2!3d13.1212569!4d77.5765474!16s%2Fg%2F11zd95jf1c?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "10:00",
          "closes": "21:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/tropicalspa.yelahanka/",
        "https://www.instagram.com/tropicalspa.yelahanka/",
        "https://www.trustpilot.com/review/tropicalspa.in",
        "https://share.google/625MmYP0nILV8oq3x"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Tropical Spa located in Bengaluru?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tropical Spa is located at 1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart, Yelahanka, Bengaluru - 560064."
          }
        },
        {
          "@type": "Question",
          "name": "What massage therapies are offered at Tropical Spa Yelahanka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer Deep Tissue Massage, Authentic Thai Massage, Classic Swedish Massage, Couples Massage with private jacuzzi, and specialized head/foot reflexology treatments."
          }
        },
        {
          "@type": "Question",
          "name": "How do I claim the ₹1,000 gift voucher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call or WhatsApp us at +91 95503 66963 or visit our Yelahanka centre to claim your ₹1,000 gift voucher on select therapies."
          }
        },
        {
          "@type": "Question",
          "name": "What are your operating hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tropical Spa is open 7 days a week from 10:00 AM to 9:00 PM."
          }
        }
      ]
    }
  ]
};

(async () => {
  for (const url of allRoutes) {
    const routePath = url === '/' ? '' : url;
    const outDir = toAbsolute(`dist${routePath}`);
    
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    let html = template;
    const meta = metadata[url] || metadata['/'];
    
    // Master canonical URL determination: aliases canonicalize to master long-form paths
    const masterTarget = aliasMap[url] || url;
    const canonicalUrl = `https://tropicalspa.in${masterTarget === '/' ? '/' : `${masterTarget}/`}`;
    
    const canonicalLink = `<link rel="canonical" href="${canonicalUrl}" />`;
    const schemaScript = `<script type="application/ld+json" id="local-business-schema" data-schema="local-business">${JSON.stringify(schemaJson)}</script>`;
    
    // Ensure <meta charset="UTF-8" /> is always the very first tag immediately after <head>
    html = html.replace(/<head>(\s*<meta charset=["']UTF-8["']\s*\/?>)?/i, `<head>\n  <meta charset="UTF-8" />\n  ${canonicalLink}\n  ${schemaScript}`);

    
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
        html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/, `<meta property="og:url" content="${canonicalUrl}" />`);
      } else {
        html = html.replace('</title>', `</title>\n  <meta property="og:url" content="${canonicalUrl}" />`);
      }
    }

    // Crawler-friendly semantic HTML inside #root
    const fallbackContent = `
      <header style="padding: 20px; text-align: center; background: #0c120c; color: #ffffff;">
        <h2>Tropical Spa - Luxury Massage & Wellness Sanctuary</h2>
        <nav style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 10px;">
          <a href="/" style="color: #c5a059;">Home</a>
          <a href="/locations/yelahanka/" style="color: #c5a059;">Yelahanka Centre</a>
          <a href="/services/swedish-massage/" style="color: #c5a059;">Swedish Massage</a>
          <a href="/services/traditional-thai-massage/" style="color: #c5a059;">Thai Massage</a>
          <a href="/services/deep-tissue-massage/" style="color: #c5a059;">Deep Tissue</a>
          <a href="/services/couples-massage/" style="color: #c5a059;">Couples Retreat</a>
          <a href="/pricing/" style="color: #c5a059;">Pricing & Tariff</a>
        </nav>
      </header>
      <main style="max-width: 900px; margin: 40px auto; padding: 0 20px; font-family: sans-serif; color: #333333;">
        <h1 style="font-size: 2.2rem; color: #141c15; margin-bottom: 12px;">${meta.heading}</h1>
        <p style="font-size: 1.15rem; line-height: 1.6; color: #4a554a; margin-bottom: 25px;">${meta.subheading}</p>
        <div style="background: #f4f6f2; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
          <h3 style="margin-top: 0; color: #2d4030;">Special Voucher & Booking</h3>
          <p>Claim your exclusive <strong>₹1,000 Gift Voucher</strong> on premium spa therapies with certified therapists and 100% money-back guarantee.</p>
          <p><strong>Call / WhatsApp:</strong> <a href="tel:+919550366963" style="color: #2d4030; font-weight: bold;">+91 95503 66963</a></p>
        </div>
      </main>
      <footer style="background: #141c15; color: #e0e0e0; padding: 30px 20px; text-align: center;">
        <p><strong>Tropical Spa Yelahanka</strong></p>
        <p>1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart, Yelahanka, Bengaluru - 560064</p>
        <p>Hours: Open Daily 10:00 AM – 9:00 PM</p>
        <div style="margin-top: 15px; display: flex; justify-content: center; gap: 20px;">
          <a href="https://www.facebook.com/tropicalspa.yelahanka/" style="color: #c5a059;">Facebook</a>
          <a href="https://www.instagram.com/tropicalspa.yelahanka/" style="color: #c5a059;">Instagram</a>
          <a href="https://www.trustpilot.com/review/tropicalspa.in" style="color: #c5a059;">Trustpilot Reviews</a>
          <a href="https://share.google/S8qcA1i8wY72WiVed" style="color: #c5a059;">Google Business Profile</a>
        </div>
      </footer>
    `;

    html = html.replace('<div id="root"></div>', `<div id="root">${fallbackContent}</div>`);
    
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
  }

  // Ensure sitemap.xml strictly contains only the 7 primary canonical URLs
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tropicalspa.in/</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tropicalspa.in/pricing/</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://tropicalspa.in/locations/yelahanka/</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://tropicalspa.in/services/swedish-massage/</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tropicalspa.in/services/traditional-thai-massage/</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tropicalspa.in/services/deep-tissue-massage/</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tropicalspa.in/services/couples-massage/</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`;
  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemapXml);
  fs.writeFileSync(toAbsolute('public/sitemap.xml'), sitemapXml);

  // Ensure _headers and llms.txt exist in dist
  if (fs.existsSync(toAbsolute('public/_headers'))) {
    fs.copyFileSync(toAbsolute('public/_headers'), toAbsolute('dist/_headers'));
  }
  if (fs.existsSync(toAbsolute('public/llms.txt'))) {
    fs.copyFileSync(toAbsolute('public/llms.txt'), toAbsolute('dist/llms.txt'));
  }

  console.log(`Successfully pre-rendered routes and generated sitemap with strictly 7 primary canonical URLs.`);
})();
