# Tropical Spa — Official Website

A luxury, high-performance responsive landing page built for **Tropical Spa** using **React + Vite**.

---

## 🌿 Overview

- **Design**: One-viewport desktop composition with smooth, fluid breakpoints down to 360px mobile.
- **Tech Stack**: React 19, Vite 6, Semantic HTML5, Vanilla CSS with custom properties.
- **Centralized Configuration**: Edit business details, prices, checklist features, and contact links in [`src/config/spaConfig.js`](./src/config/spaConfig.js).
- **Interactive CTAs**: Direct integration with WhatsApp (prefilled voucher claim & booking messages), `tel:` phone dialing, and `mailto:` email links.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production
```bash
npm run build
```
Production assets will be output to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
tropicalspa/
├── public/                 # Static assets (logo, hero images, favicon)
├── src/
│   ├── assets/             # Bundled media assets
│   ├── components/
│   │   ├── Button.jsx      # Polymorphic accessible button / link component
│   │   ├── Section.jsx     # Semantic section wrapper
│   │   ├── Header.jsx      # Top header with logo & "Book Now" CTA
│   │   ├── Hero.jsx        # Two-column hero section with checklist & image grid
│   │   └── ContactBar.jsx  # Bottom contact info strip with direct links
│   ├── config/
│   │   └── spaConfig.js    # Single source of truth for all content & contacts
│   ├── App.jsx             # Main application layout
│   ├── index.css           # Design tokens, typography & responsive styling
│   └── main.jsx            # React root mount
├── index.html              # HTML entry point with meta tags & Google Fonts
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

---

## 🛠️ Customization

To change the phone number, email, address, voucher price, or offer checklist, update:
👉 **[`src/config/spaConfig.js`](./src/config/spaConfig.js)**

---

## 🚢 Deployment

This project can be deployed instantly to **Vercel**, **Netlify**, or **GitHub Pages**:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18+ / 20+
