import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { businessInfo } from './src/config/businessInfo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.resolve(__dirname, 'dist/index.html');

if (!fs.existsSync(indexPath)) {
  console.error(`Error: ${indexPath} does not exist. Run vite build first.`);
  process.exit(1);
}

// 1. Construct Schema.org JSON-LD object
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": businessInfo.name,
  "url": businessInfo.websiteUrl,
  "telephone": businessInfo.phoneRaw,
  "email": businessInfo.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "NO.1, 1st Floor ACSS Complex, CRPF Campus, Doddaballapura, Main Rd Yelahanka",
    "addressLocality": "Bengaluru",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": businessInfo.phoneRaw,
    "contactType": "customer service"
  }
};

// 2. Construct fallback HTML block for non-JS/crawlers
const fallbackHtml = `
  <div class="fallback-contact" style="max-width: 600px; margin: 40px auto; padding: 30px; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; text-align: center; color: #ffffff; background-color: #141c15; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
    <h1 style="font-family: 'Playfair Display', Georgia, serif; font-size: 2.2rem; margin-bottom: 20px; color: #ffffff;">${businessInfo.name}</h1>
    <p style="margin-bottom: 20px; font-size: 1.1rem; line-height: 1.6; color: #e0e0e0;">
      <strong>Address:</strong><br>
      ${businessInfo.addressLines.join('<br>')}
    </p>
    <p style="margin-bottom: 15px; font-size: 1.1rem;">
      <strong>Phone:</strong> <a href="tel:+${businessInfo.phoneRaw.replace(/[-\s+]/g, '')}" style="color: #9eb875; text-decoration: underline; font-weight: 600;">${businessInfo.phone}</a>
    </p>
    <p style="margin-bottom: 15px; font-size: 1.1rem;">
      <strong>WhatsApp:</strong> <a href="https://wa.me/${businessInfo.whatsappNumber}" style="color: #9eb875; text-decoration: underline; font-weight: 600;">WhatsApp Contact</a>
    </p>
    <p style="margin-bottom: 15px; font-size: 1.1rem;">
      <strong>Email:</strong> <a href="mailto:${businessInfo.email}" style="color: #9eb875; text-decoration: underline;">${businessInfo.email}</a>
    </p>
  </div>
`;

// 3. Construct tags to inject into the head
const headTags = `
  <!-- Canonical and Open Graph Link Tags -->
  <link rel="canonical" href="${businessInfo.websiteUrl}" />
  <meta property="og:url" content="${businessInfo.websiteUrl}" />

  <!-- Schema.org JSON-LD Structured Data -->
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>
`;

let html = fs.readFileSync(indexPath, 'utf8');

// Inject head tags
html = html.replace('</head>', `${headTags}\n</head>`);

// Inject fallback contact HTML inside root container
html = html.replace('<div id="root"></div>', `<div id="root">\n${fallbackHtml}\n</div>`);

fs.writeFileSync(indexPath, html, 'utf8');

console.log('Successfully post-processed dist/index.html with contact fallback and Schema.org metadata.');
