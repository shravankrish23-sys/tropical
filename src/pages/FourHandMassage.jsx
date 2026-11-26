import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import fourHandImg from '../assets/four-hand-massage-spa.jpg';

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://tropicalspa.in/services/four-hand-massage/#service",
      "name": "Four Hand Synchronized Massage",
      "serviceType": "Four Hand Massage",
      "url": "https://tropicalspa.in/services/four-hand-massage/",
      "description": "An ultra-luxury, strictly professional synchronized two-therapist massage in Yelahanka, Bengaluru, performed with warm cold-pressed organic oils in acoustically isolated private suites with attached hot showers.",
      "provider": {
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://tropicalspa.in/#organization",
        "name": "Tropical Spa",
        "url": "https://tropicalspa.in/",
        "telephone": "+919550366963",
        "priceRange": "₹3,300 - ₹6,500",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart",
          "addressLocality": "Yelahanka, Bengaluru",
          "addressRegion": "KA",
          "postalCode": "560064",
          "addressCountry": "IN"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "10:00",
            "closes": "21:00"
          }
        ]
      },
      "areaServed": [
        { "@type": "Place", "name": "Yelahanka, Bengaluru" },
        { "@type": "Place", "name": "Yelahanka New Town, Bengaluru" },
        { "@type": "Place", "name": "Sahakaranagar, Bengaluru" },
        { "@type": "Place", "name": "Jakkur, Bengaluru" },
        { "@type": "Place", "name": "Hebbal, Bengaluru" },
        { "@type": "Place", "name": "Vidyaranyapura, Bengaluru" },
        { "@type": "Place", "name": "Manyata Tech Park, Bengaluru" },
        { "@type": "City", "name": "North Bengaluru" }
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "60-Minute Four Hand Massage - First Visit (After ₹1,000 Welcome Voucher)",
          "price": "3300",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/four-hand-massage/"
        },
        {
          "@type": "Offer",
          "name": "60-Minute Four Hand Massage - Standard Rate",
          "price": "4300",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/four-hand-massage/"
        },
        {
          "@type": "Offer",
          "name": "90-Minute Four Hand Massage - First Visit (After ₹1,000 Welcome Voucher)",
          "price": "5500",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/four-hand-massage/"
        },
        {
          "@type": "Offer",
          "name": "90-Minute Four Hand Massage - Standard Rate",
          "price": "6500",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/four-hand-massage/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://tropicalspa.in/services/four-hand-massage/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a Four Hand Massage cost, and how do I use the ₹1,000 voucher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our 60-minute Four Hand Massage is ₹4,300 (₹3,300 on your first visit after the ₹1,000 welcome voucher), and our 90-minute session is ₹6,500 (₹5,500 on your first visit). Message us on WhatsApp or call +91 95503 66963 and mention your welcome voucher when confirming your booking."
          }
        },
        {
          "@type": "Question",
          "name": "How does a synchronized two-therapist massage actually work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before starting, both therapists confirm your preferred pressure and focus areas. Inside the suite, one senior therapist sets a calm, steady tempo while the second therapist mirrors every glide, knead, and stretch across opposite sides or upper and lower areas in silent harmony."
          }
        },
        {
          "@type": "Question",
          "name": "Are your therapists certified, and what draping standards do you follow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every ritual is performed by certified, background-verified therapists trained specifically in coordinated dual-therapist techniques. Tropical Spa maintains strict international draping and professional spa standards, keeping every non-treated area respectfully covered with fresh, sterilized linens at all times."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to book in advance for a Four Hand Massage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, advance booking is strongly recommended. Because a Four Hand Massage requires scheduling two certified therapists together in a private suite, booking ahead by WhatsApp or phone secures your preferred 60- or 90-minute slot—especially on evenings and weekends."
          }
        },
        {
          "@type": "Question",
          "name": "Should I choose 60 or 90 minutes, and is shower time deducted from my massage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose 60 minutes for a complete full-body reset, or 90 minutes if you want unhurried extra focus on tight shoulders, neck, or legs. You receive the full 60 or 90 minutes of hands-on massage; your consultation, attached hot shower, and herbal tea never reduce your therapy clock."
          }
        },
        {
          "@type": "Question",
          "name": "Are private showers and parking available at your Yelahanka centre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every suite is acoustically isolated with an attached hot shower, luxury toiletries, and fresh towels. We also have ample highway parking at ACSS Complex on Doddaballapura Main Road, offering easy access from Yelahanka New Town, Sahakaranagar, Jakkur, Hebbal, Vidyaranyapura, and Manyata Tech Park."
          }
        }
      ]
    }
  ]
};

export const FourHandMassage = () => {
  const { links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const quickDecision = [
    { label: "Duration", value: "60 Min or 90 Min (Full Hands-On Therapy)" },
    { label: "Starting Price (INR)", value: "₹3,300 First Visit (After ₹1,000 Welcome Voucher; ₹4,300 Base)" },
    { label: "Pressure and Style", value: "Two Certified Therapists in Mirrored Rhythm, Warm Organic Oil (Light to Firm)" },
    { label: "Suite Facility", value: "Acoustically Isolated Private Suite with Attached Hot Shower and Highway Parking" }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Private Consultation and Pressure Matching",
      desc: "Your two background-verified therapists welcome you in our quiet lounge with a warm towel and refreshment. Together, you choose your warm organic oil and confirm your focus areas and preferred pressure, from gentle relaxation to firm muscle release."
    },
    {
      step: "02",
      title: "Complete Privacy and Strict Draping",
      desc: "You step into an acoustically isolated private suite, settle onto a pre-warmed table in complete privacy, and rest beneath fresh, sterilized linens. Both therapists uphold strict international draping standards, keeping all non-treated areas respectfully covered throughout your ritual."
    },
    {
      step: "03",
      title: "Warm Cold-Pressed Oil Choreography",
      desc: "Warmed cold-pressed organic oil is poured smoothly across your skin as one lead therapist sets a slow, steady tempo and the second mirrors every sweep, knead, and gentle palm press in quiet harmony."
    },
    {
      step: "04",
      title: "Attached Hot Shower and Herbal Tea",
      desc: "After your massage concludes, take your time refreshing in your suite's attached hot shower with luxury toiletries and plush towels. Step back into our lounge for a complimentary cup of warm organic herbal tea before heading back out."
    }
  ];

  const packages = [
    {
      duration: "60 Minutes",
      title: "60-Minute Four Hand Massage",
      label: "Full-Body Synchronized Reset",
      basePrice: "₹4,300",
      firstVisitPrice: "₹3,300",
      desc: "Full-body synchronized reset for rapid mental switch-off and tension relief.",
      popular: false
    },
    {
      duration: "90 Minutes",
      title: "90-Minute Extended Four Hand Ritual",
      label: "Top-to-Toe 4 Hands Luxury Immersion",
      basePrice: "₹6,500",
      firstVisitPrice: "₹5,500",
      desc: "Unhurried, top-to-toe 4 hands luxury massage North Bengaluru immersion for deep burnout recovery.",
      popular: true
    }
  ];

  const idealFor = [
    {
      title: "High-Stress Executives and Founders",
      desc: "Ideal if you work near Manyata Tech Park or Hebbal and need deep burnout recovery in a single 60- or 90-minute break."
    },
    {
      title: "Milestone Celebrations and VIP Self-Care",
      desc: "A memorable birthday treat, anniversary surprise, or well-earned reward at a VIP luxury massage spa Yelahanka residents trust."
    },
    {
      title: "Seasoned Spa-Goers",
      desc: "Perfect if you already enjoy regular massages and want to experience the unmistakable richness of four hands moving as one."
    }
  ];

  const comparisonRows = [
    { feature: "Therapists", fourHand: "Two certified therapists in mirrored rhythm", balinese: "One certified therapist", aroma: "One certified therapist" },
    { feature: "Touch and Style", fourHand: "Synchronized dual glides across upper and lower body", balinese: "Acupressure, gentle skin rolling, and rhythmic strokes", aroma: "Light-to-medium flowing strokes with essential oils" },
    { feature: "Pressure Level", fourHand: "Customized light to firm", balinese: "Medium to firm", aroma: "Light to medium" },
    { feature: "Ideal Outcome", fourHand: "Total mental switch-off and doubled full-body care in one visit", balinese: "Releasing stiff shoulders, lower back tightness, and fatigue", aroma: "Calming a busy mind and soothing dry skin" }
  ];

  const addOns = [
    {
      title: "Couples & Jacuzzi Retreat",
      desc: "Planning a shared celebration? Reserve a private couple suite with aromatic bath rituals and side-by-side relaxation.",
      path: "/services/couples-massage/"
    },
    {
      title: "Aromatherapy Massage",
      desc: "Prefer a softer, single-therapist pace? Unwind with calming botanical oil blends designed for restful sleep and gentle stress relief.",
      path: "/services/aromatherapy-massage/"
    },
    {
      title: "Balinese Massage",
      desc: "Want firmer, single-therapist muscle focus? Enjoy traditional island kneading and acupressure tailored for desk-bound tension.",
      path: "/services/balinese-massage/"
    }
  ];

  const faqs = [
    {
      q: "How much does a Four Hand Massage cost, and how do I use the ₹1,000 voucher?",
      a: "Our 60-minute Four Hand Massage is ₹4,300 (₹3,300 on your first visit after the ₹1,000 welcome voucher), and our 90-minute session is ₹6,500 (₹5,500 on your first visit). Message us on WhatsApp or call +91 95503 66963 and mention your welcome voucher when confirming your booking."
    },
    {
      q: "How does a synchronized two-therapist massage actually work?",
      a: "Before starting, both therapists confirm your preferred pressure and focus areas. Inside the suite, one senior therapist sets a calm, steady tempo while the second therapist mirrors every glide, knead, and stretch across opposite sides or upper and lower areas in silent harmony."
    },
    {
      q: "Are your therapists certified, and what draping standards do you follow?",
      a: "Yes. Every ritual is performed by certified, background-verified therapists trained specifically in coordinated dual-therapist techniques. Tropical Spa maintains strict international draping and professional spa standards, keeping every non-treated area respectfully covered with fresh, sterilized linens at all times."
    },
    {
      q: "Do I need to book in advance for a Four Hand Massage?",
      a: "Yes, advance booking is strongly recommended. Because a Four Hand Massage requires scheduling two certified therapists together in a private suite, booking ahead by WhatsApp or phone secures your preferred 60- or 90-minute slot—especially on evenings and weekends."
    },
    {
      q: "Should I choose 60 or 90 minutes, and is shower time deducted from my massage?",
      a: "Choose 60 minutes for a complete full-body reset, or 90 minutes if you want unhurried extra focus on tight shoulders, neck, or legs. You receive the full 60 or 90 minutes of hands-on massage; your consultation, attached hot shower, and herbal tea never reduce your therapy clock."
    },
    {
      q: "Are private showers and parking available at your Yelahanka centre?",
      a: "Yes. Every suite is acoustically isolated with an attached hot shower, luxury toiletries, and fresh towels. We also have ample highway parking at ACSS Complex on Doddaballapura Main Road, offering easy access from Yelahanka New Town, Sahakaranagar, Jakkur, Hebbal, Vidyaranyapura, and Manyata Tech Park."
    }
  ];

  const whatsappBookingMsg = "Hello Tropical Spa Yelahanka! I would like to book the Four Hand Massage and claim my ₹1,000 welcome voucher.";

  return (
    <div>
      <SeoMeta
        title="Four Hand Massage in Yelahanka ₹3,300* | Tropical Spa"
        description="Unwind with a luxury synchronized two-therapist Four Hand Massage on Doddaballapura Rd, Yelahanka. Claim your ₹1,000 voucher—book on WhatsApp now!"
        canonical="https://tropicalspa.in/services/four-hand-massage/"
        schema={pageSchema}
      />

      <div className="page-container">

        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="fourhand-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Synchronized Two-Therapist Luxury | Yelahanka
            </div>

            <h1 id="fourhand-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Four Hand Massage in Yelahanka: Synchronized Two-Therapist Luxury
            </h1>

            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              When one therapist works on your shoulders, your mind still follows every movement. When you experience a <strong>four hand massage in Yelahanka</strong> at Tropical Spa, two certified therapists move together in unbroken, mirrored rhythm—one tending to your upper body while the other works along your legs, or both gliding down each side in perfect unison.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Within minutes, your mind stops trying to keep track and finally switches off. Instead of battling cross-city traffic for a <strong>four hand massage in Bangalore</strong>, North Bengaluru guests can step into an ultra-luxury, strictly professional wellness sanctuary right on Doddaballapura Main Road.
            </p>

            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button
                href={links.whatsappUrl(whatsappBookingMsg)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(158, 184, 117, 0.25)' }}
              >
                Book Four Hand Massage on WhatsApp (Claim ₹1,000 Off)
              </Button>
            </div>
          </div>

          <div className="service-image-holder">
            <picture>
              <source type="image/jpeg" srcSet={fourHandImg} />
              <img
                src={fourHandImg}
                alt="VIP Four-Hand Massage therapy suite with twin oil warmers and plush linens at Tropical Spa Yelahanka"
                loading="lazy"
                decoding="async"
                width="480"
                height="400"
              />
            </picture>
          </div>
        </section>

        {/* Above-the-Fold Quick-Decision Bar */}
        <section aria-label="Quick decision summary" style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
            {quickDecision.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, rgba(20, 28, 21, 0.75) 100%)',
                  border: '1px solid rgba(158, 184, 117, 0.22)',
                  borderRadius: '14px',
                  padding: '1.4rem 1.3rem'
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--clr-btn-bg)', fontWeight: '700', marginBottom: '0.45rem' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--clr-white)', lineHeight: '1.5', fontWeight: '500' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. What to Expect During Your Synchronized Ritual */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>What to Expect During Your Synchronized Ritual</h2>
            <p>Every detail of this synchronized dual therapist massage Bangalore guests book for deep recovery is calm, discreet, and unhurried. Your 60 or 90 minutes represent full, uninterrupted hands-on therapy time.</p>
          </div>

          <div className="voucher-steps" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {journeySteps.map((j, i) => (
              <div key={i} className="voucher-step">
                <span className="step-num">{j.step}</span>
                <div className="step-title">{j.title}</div>
                <div className="step-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>{j.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Transparent Pricing and Session Durations */}
        <section aria-labelledby="pricing-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="pricing-heading">Transparent Pricing and Session Durations</h2>
            <p>Our four hand massage price in Bangalore is transparent from the start. First-time guests receive an instant ₹1,000 welcome voucher applied directly to either session.</p>
          </div>

          <div className="service-price-cards" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="price-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: pkg.popular ? '1px solid var(--clr-btn-bg)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: pkg.popular ? 'linear-gradient(145deg, rgba(158, 184, 117, 0.08) 0%, rgba(20, 28, 21, 0.8) 100%)' : 'rgba(255, 255, 255, 0.03)'
                }}
              >
                {pkg.popular && (
                  <div style={{ position: 'absolute', top: '-12px', right: '20px', background: 'var(--clr-btn-bg)', color: 'var(--clr-btn-text)', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', padding: '0.25rem 0.8rem', borderRadius: '12px', letterSpacing: '0.05em' }}>
                    ✦ Signature Flagship
                  </div>
                )}

                <div>
                  <div className="price-duration">{pkg.duration}</div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--clr-white)', marginBottom: '0.4rem' }}>{pkg.title}</h3>
                  <div style={{ color: 'var(--clr-btn-bg)', fontSize: '0.92rem', fontWeight: '600', marginBottom: '1rem' }}>{pkg.label}</div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--clr-white)' }}>{pkg.firstVisitPrice}</span>
                    <span style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.55)', textDecoration: 'line-through' }}>{pkg.basePrice}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--clr-btn-bg)', fontWeight: '700', background: 'rgba(158, 184, 117, 0.14)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>
                      First Visit (₹1,000 Off)
                    </span>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.82)', lineHeight: '1.6', marginBottom: '2rem' }}>{pkg.desc}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <Button
                    href={links.whatsappUrl(`Hello Tropical Spa Yelahanka! I would like to book the ${pkg.duration} Four Hand Massage and claim my ₹1,000 welcome voucher.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ width: '100%', minHeight: '46px', fontSize: '0.95rem' }}
                  >
                    Book {pkg.duration} on WhatsApp &rarr;
                  </Button>
                  <Link
                    to="/pricing/"
                    className="btn cta-outline"
                    style={{ width: '100%', minHeight: '40px', fontSize: '0.9rem', textAlign: 'center' }}
                  >
                    View Full Menu &amp; Pricing
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Who Is This Ritual Best For? */}
        <section className="service-highlights-section" aria-labelledby="ideal-for-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="ideal-for-heading">Who Is This Ritual Best For?</h2>
            <p>Designed for guests who value depth, comfort, and time efficiency, our dual-therapist session delivers twice the attentive care in a single visit:</p>
          </div>

          <div className="highlights-grid">
            {idealFor.map((item, i) => (
              <div key={i} className="highlight-card">
                <h3 className="highlight-title">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.title}
                </h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Comparing Four Hand, Balinese, and Aromatherapy Massages */}
        <section aria-labelledby="comparison-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="comparison-heading">Comparing Four Hand, Balinese, and Aromatherapy Massages</h2>
            <p>If you are deciding whether to upgrade from a single-therapist treatment, this quick guide highlights how our signature therapies differ:</p>
          </div>

          <div className="pricing-table-wrap" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Four Hand Massage</th>
                  <th>Balinese Massage</th>
                  <th>Aromatherapy Massage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: '600', color: 'var(--clr-white)' }}>{row.feature}</td>
                    <td style={{ color: 'var(--clr-btn-bg)', fontWeight: '500' }}>{row.fourHand}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.balinese}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.aroma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Why Choose Tropical Spa Yelahanka & Complementary Therapies */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>Why Choose Tropical Spa Yelahanka</h2>
            <p>Hygiene, privacy, and genuine synchronized skill—backed by our 100% money-back satisfaction guarantee.</p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '18px', padding: '2rem', marginBottom: '2.5rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.88)' }}>
            <p style={{ marginBottom: '1rem' }}>
              Every guest enjoys an <strong>acoustically isolated private suite with an attached hot shower, fresh sterilized linens, warm cold-pressed organic oils, and background-verified therapists trained to work in synchronized pairs</strong>.
            </p>
            <p style={{ margin: 0 }}>
              Located on the 1st Floor of Building No. 1, ACSS Complex on Doddaballapura Main Road (next to Nice Mart) with <strong>ample highway parking</strong>, we are minutes from Yelahanka New Town, Sahakaranagar, Jakkur, Vidyaranyapura, Hebbal, and Manyata Tech Park.
            </p>
          </div>

          <div className="section-header-center" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--clr-white)' }}>Complementary Add-Ons and Similar Therapies</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {addOns.map((addon, i) => (
              <Link
                key={i}
                to={addon.path}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '1.6rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h4 style={{ color: 'var(--clr-btn-bg)', fontSize: '1.1rem', marginBottom: '0.6rem' }}>{addon.title}</h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>{addon.desc}</p>
                </div>
                <span style={{ color: 'var(--clr-white)', fontSize: '0.88rem', fontWeight: '600' }}>Explore Therapy &rarr;</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Luxury Gift Voucher Incentive */}
        <section style={{ marginBottom: '4.5rem', background: 'linear-gradient(135deg, rgba(20, 28, 21, 0.95) 0%, rgba(30, 40, 31, 0.9) 100%)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '2.5rem 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'var(--clr-btn-bg)', color: 'var(--clr-btn-text)', padding: '0.35rem 1rem', borderRadius: '16px', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.06em' }}>
            🎁 Special Welcome Voucher
          </div>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--clr-white)', marginBottom: '0.8rem' }}>
            Claim Your ₹1,000 First-Visit Welcome Voucher
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '650px', margin: '0 auto 1.5rem', lineHeight: '1.6', fontSize: '1rem' }}>
            Book a 60-minute Four Hand Massage for ₹3,300 (standard ₹4,300) or 90 minutes for ₹5,500 (standard ₹6,500) with our 100% money-back satisfaction guarantee.
          </p>
          <a
            href={links.whatsappUrl(whatsappBookingMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
          >
            Book Four Hand Massage on WhatsApp (Claim ₹1,000 Off)
          </a>
        </section>

        {/* 7. Six Buyer-Objection FAQs */}
        <section className="faq-accordion-section" aria-labelledby="faq-heading" style={{ marginBottom: '2rem' }}>
          <h2 id="faq-heading" className="faq-title-center">Frequently Asked Questions</h2>

          <div className="faq-list-wrap">
            {faqs.map((faq, i) => (
              <div key={i} className={openFaq === i ? "faq-item-card open" : "faq-item-card"}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span>{faq.q}</span>
                  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default FourHandMassage;
