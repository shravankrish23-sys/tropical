import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import swedishImg from '../assets/swedish-massage-spa.jpg';

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://tropicalspa.in/services/swedish-massage/#service",
      "name": "Swedish Massage in Yelahanka",
      "alternateName": [
        "Classic Swedish Therapy Bangalore",
        "Relaxing Full Body Massage Yelahanka"
      ],
      "serviceType": "Swedish Massage",
      "url": "https://tropicalspa.in/services/swedish-massage/",
      "description": "Gentle, light-to-medium pressure full-body Swedish massage in Yelahanka using warm cold-pressed organic botanical oils inside acoustically isolated private suites with attached hot showers.",
      "provider": {
        "@type": "DaySpa",
        "@id": "https://tropicalspa.in/#organization",
        "name": "Tropical Spa",
        "url": "https://tropicalspa.in/",
        "telephone": "+91-95503-66963",
        "priceRange": "₹1,600 - ₹3,800",
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
        { "@type": "AdministrativeArea", "name": "North Bengaluru, Karnataka" }
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "60-Minute Swedish Massage (Standard Base Rate)",
          "description": "Full 60 minutes hands-on Swedish massage with warm cold-pressed organic oils, private attached hot shower, and herbal tea. Eligible for ₹1,000 first-visit welcome voucher.",
          "price": "2600",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/swedish-massage/"
        },
        {
          "@type": "Offer",
          "name": "60-Minute Swedish Massage (First-Visit Welcome Offer)",
          "description": "Net first-visit rate after applying the ₹1,000 welcome voucher for new guests.",
          "price": "1600",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/swedish-massage/"
        },
        {
          "@type": "Offer",
          "name": "90-Minute Swedish Massage (Standard Base Rate)",
          "description": "Full 90 minutes hands-on extended Swedish massage with extra focus on tight shoulders, upper back, and legs. Eligible for ₹1,000 first-visit welcome voucher.",
          "price": "3800",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/swedish-massage/"
        },
        {
          "@type": "Offer",
          "name": "90-Minute Swedish Massage (First-Visit Welcome Offer)",
          "description": "Net first-visit rate for the 90-minute session after applying the ₹1,000 welcome voucher for new guests.",
          "price": "2800",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/swedish-massage/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://tropicalspa.in/services/swedish-massage/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a Swedish massage cost in Yelahanka, and how do I use the ₹1,000 welcome voucher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 60-minute Swedish massage is ₹2,600 (just ₹1,600 on your first visit after the ₹1,000 welcome voucher), and a 90-minute session is ₹3,800 (₹2,800 on your first visit). Simply mention the ₹1,000 welcome voucher when you message us on WhatsApp or call +91 95503 66963 to book, and our front desk will apply it directly to your bill."
          }
        },
        {
          "@type": "Question",
          "name": "What oils do you use, what should I wear, and is there a private shower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use warm, cold-pressed organic botanical oils such as sweet almond and jojoba that feel light on the skin and rinse off easily without heavy residue. Arrive in whatever comfortable clothes you are wearing—you will change in complete privacy inside your suite, disposable spa wear is provided, and your therapist uses strict modesty draping so only the area being worked on is uncovered. Every suite includes a private attached hot shower with fresh towels and toiletries."
          }
        },
        {
          "@type": "Question",
          "name": "Is Swedish massage comfortable for first-time spa guests? Can I adjust the pressure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—Swedish massage is our #1 choice for first-time spa guests because it uses smooth, flowing, light-to-medium strokes rather than intense elbow pressure. Your therapist checks in with you right at the start and during the session, so you can ask for lighter or slightly firmer pressure at any moment. Most guests walk out feeling deeply rested and loose, with none of the next-day soreness that can follow deep tissue work."
          }
        },
        {
          "@type": "Question",
          "name": "Can I choose a male or female therapist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can choose either a male or female therapist based on your personal comfort. Every therapist at Tropical Spa Yelahanka is professionally certified and background-verified, and we confirm your preference when you reserve your slot so there are no surprises at arrival."
          }
        },
        {
          "@type": "Question",
          "name": "Should I book 60 minutes or 90 minutes—and is consultation or shower time deducted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your 60 or 90 minutes is 100% full hands-on massage time—we never deduct your intake chat, changing time, or post-massage hot shower from your session. Choose 60 minutes for a complete full-body reset when you are short on time, or 90 minutes if you want extra unhurried focus on tight shoulders, upper back, neck, and tired legs."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an appointment, and is parking available on Doddaballapura Main Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While we welcome walk-ins whenever a suite is free, booking ahead on WhatsApp or by calling +91 95503 66963 is strongly recommended—especially on weekday evenings and weekends. We are open daily from 10:00 AM to 9:00 PM at 1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd (right next to Nice Mart), with ample highway parking right outside so you can arrive stress-free."
          }
        }
      ]
    }
  ]
};

export const SwedishMassage = () => {
  const { links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const quickDecision = [
    { label: "Duration", value: "60 Min or 90 Min (Full hands-on time)" },
    { label: "Starting Price (INR)", value: "₹1,600 first visit (Base ₹2,600 – ₹1,000 voucher)" },
    { label: "Pressure & Oil Style", value: "Light to Medium with warm, cold-pressed organic oils" },
    { label: "Suite Facility", value: "Soundproof Private Suite with attached hot shower" }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Calm Welcome and Organic Oil Choice",
      desc: "You are greeted with a refreshing drink and a quick, relaxed chat about how your body feels. Share where you hold tension—such as a stiff neck, tired lower back, or heavy legs—and pick your cold-pressed organic botanical oil, including lightweight sweet almond or nourishing jojoba oil."
    },
    {
      step: "02",
      title: "Private Suite and Full Modesty Draping",
      desc: "Your therapist escorts you to a quiet, climate-controlled suite with soft lighting and fresh linens. You change in complete privacy with disposable spa wear provided, then settle onto a warm table under a soft sheet. Strict draping protocols keep you comfortably covered throughout, uncovering only the area being massaged."
    },
    {
      step: "03",
      title: "Full 60 or 90 Minutes of Gentle, Flowing Strokes",
      desc: "Using warmed cold-pressed organic oil, your therapist works smoothly from head to toe with long gliding strokes and gentle kneading. Pressure stays comfortably light to medium and adjusts the instant you want it softer or firmer. Your 60 or 90 minutes is 100% full hands-on therapy time—consultation and shower time are never deducted."
    },
    {
      step: "04",
      title: "Private Hot Shower and Herbal Tea",
      desc: "When your massage concludes, take your time rinsing off in your suite’s attached private hot shower, stocked with fresh towels and gentle toiletries. Step out to a warm cup of organic herbal tea so you leave feeling calm, light, and refreshed."
    }
  ];

  const packages = [
    {
      duration: "60 Minutes",
      title: "60-Minute Swedish Massage",
      label: "Complete Full-Body Unwind",
      basePrice: "₹2,600",
      firstVisitPrice: "₹1,600",
      desc: "Complete full-body unwind across back, neck, shoulders, arms, and legs.",
      popular: false
    },
    {
      duration: "90 Minutes",
      title: "90-Minute Extended Swedish Ritual",
      label: "Unhurried Full-Body Relaxation",
      basePrice: "₹3,800",
      firstVisitPrice: "₹2,800",
      desc: "Unhurried full-body relaxation with extra time on tight shoulders, upper back, and tired legs.",
      popular: true
    }
  ];

  const idealFor = [
    {
      title: "Stressed IT & Office Professionals",
      desc: "Release desk stiffness, screen fatigue, and commute tension after long weeks at Manyata Tech Park or Hebbal."
    },
    {
      title: "First-Time Spa Visitors",
      desc: "Enjoy respectful draping, clear communication, and gentle pressure that put first-visit nerves completely at ease."
    },
    {
      title: "Light or Restless Sleepers",
      desc: "Quiet a racing evening mind and ease physical restlessness so your body settles into deeper sleep."
    },
    {
      title: "Weekend Unwinders & Travellers",
      desc: "Shake off travel fatigue or a hectic week with an unhurried afternoon escape that leaves skin soft and nourished."
    }
  ];

  const comparisonRows = [
    { feature: "Pressure Level", swedish: "Light to medium", aroma: "Light and soothing", deep: "Firm to deep" },
    { feature: "Oil & Sensory Feel", swedish: "Warm, cold-pressed organic carrier oils (light, subtle scent)", aroma: "Custom-blended aromatic essential oils for mood calm", deep: "Warm organic oil with slow, focused muscle work" },
    { feature: "Best For", swedish: "Everyday stress relief, better sleep, and first-time guests", aroma: "Mental overload, emotional calm, and scent lovers", deep: "Stubborn knots, chronic desk pain, and workout soreness" },
    { feature: "How You Feel After", swedish: "Light, loose, and deeply rested", aroma: "Calm, balanced, and refreshed", deep: "Deeply released (mild next-day soreness possible)" }
  ];

  const addOns = [
    {
      title: "Aromatherapy Massage",
      desc: "Prefer the same gentle, flowing touch elevated with mood-calming natural essential oils like lavender or sweet orange? Explore our custom-scented Aromatherapy Massage.",
      path: "/services/aromatherapy-massage/"
    },
    {
      title: "Balinese Massage",
      desc: "Love warm oil strokes but want slightly firmer kneading and gentle stretches to open tight hips and shoulders? Try our authentic Balinese Massage.",
      path: "/services/balinese-massage/"
    },
    {
      title: "Japanese Head Spa & Head Massage",
      desc: "Add targeted scalp relief for headaches, eye strain, and mental fatigue with our warm-oil Japanese Head Spa and Head Massage ritual.",
      path: "/services/head-massage/"
    }
  ];

  const faqs = [
    {
      q: "How much does a Swedish massage cost in Yelahanka, and how do I use the ₹1,000 welcome voucher?",
      a: "A 60-minute Swedish massage is ₹2,600 (just ₹1,600 on your first visit after the ₹1,000 welcome voucher), and a 90-minute session is ₹3,800 (₹2,800 on your first visit). Simply mention the ₹1,000 welcome voucher when you message us on WhatsApp or call +91 95503 66963 to book, and our front desk will apply it directly to your bill."
    },
    {
      q: "What oils do you use, what should I wear, and is there a private shower?",
      a: "We use warm, cold-pressed organic botanical oils such as sweet almond and jojoba that feel light on the skin and rinse off easily without heavy residue. Arrive in whatever comfortable clothes you are wearing—you will change in complete privacy inside your suite, disposable spa wear is provided, and your therapist uses strict modesty draping so only the area being worked on is uncovered. Every suite includes a private attached hot shower with fresh towels and toiletries."
    },
    {
      q: "Is Swedish massage comfortable for first-time spa guests? Can I adjust the pressure?",
      a: "Yes—Swedish massage is our #1 choice for first-time spa guests because it uses smooth, flowing, light-to-medium strokes rather than intense elbow pressure. Your therapist checks in with you right at the start and during the session, so you can ask for lighter or slightly firmer pressure at any moment. Most guests walk out feeling deeply rested and loose, with none of the next-day soreness that can follow deep tissue work."
    },
    {
      q: "Can I choose a male or female therapist?",
      a: "Yes, you can choose either a male or female therapist based on your personal comfort. Every therapist at Tropical Spa Yelahanka is professionally certified and background-verified, and we confirm your preference when you reserve your slot so there are no surprises at arrival."
    },
    {
      q: "Should I book 60 minutes or 90 minutes—and is consultation or shower time deducted?",
      a: "Your 60 or 90 minutes is 100% full hands-on massage time—we never deduct your intake chat, changing time, or post-massage hot shower from your session. Choose 60 minutes for a complete full-body reset when you are short on time, or 90 minutes if you want extra unhurried focus on tight shoulders, upper back, neck, and tired legs."
    },
    {
      q: "Do I need an appointment, and is parking available on Doddaballapura Main Road?",
      a: "While we welcome walk-ins whenever a suite is free, booking ahead on WhatsApp or by calling +91 95503 66963 is strongly recommended—especially on weekday evenings and weekends. We are open daily from 10:00 AM to 9:00 PM at 1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd (right next to Nice Mart), with ample highway parking right outside so you can arrive stress-free."
    }
  ];

  const whatsappBookingMsg = "Hi Tropical Spa, I would like to book a Swedish Massage in Yelahanka and claim my ₹1,000 first-visit welcome voucher. Please share available 60/90 min slots.";

  return (
    <div>
      <SeoMeta
        title="Swedish Massage in Yelahanka (₹1,000 Off) | Tropical Spa"
        description="Unwind with a gentle Swedish massage in Yelahanka on Doddaballapura Rd. Private shower suites, organic oils & ₹1,000 welcome voucher. Book on WhatsApp!"
        canonical="https://tropicalspa.in/services/swedish-massage/"
        schema={pageSchema}
      />

      <div className="page-container">

        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="swedish-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Gentle Full-Body Relaxation | Yelahanka
            </div>

            <h1 id="swedish-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Swedish Massage in Yelahanka — Gentle Full-Body Relaxation
            </h1>

            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Long laptop hours, crawling North Bengaluru traffic, and restless nights leave your shoulders tight and your mind racing. Our <strong>Swedish massage in Yelahanka</strong> is a calm, unhurried full-body oil therapy designed to ease daily stress, soften everyday stiffness, and help you sleep deeply again.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              If you want a <strong>relaxing full body massage in Yelahanka</strong> without intense, painful pressure, this is the most comforting place to start. Every session unfolds in an acoustically isolated suite on Doddaballapura Main Road, giving you a full 60 or 90 minutes of uninterrupted hands-on care.
            </p>

            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button
                href={links.whatsappUrl(whatsappBookingMsg)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(158, 184, 117, 0.25)' }}
              >
                Book Swedish Massage on WhatsApp (Claim ₹1,000 Off)
              </Button>
            </div>
          </div>

          <div className="service-image-holder">
            <picture>
              <source type="image/jpeg" srcSet={swedishImg} />
              <img
                src={swedishImg}
                alt="Swedish Massage therapy suite with warm organic oils and soft linens at Tropical Spa Yelahanka"
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

        {/* 2. What to Expect During Your Swedish Massage Ritual */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>What to Expect During Your Swedish Massage Ritual</h2>
            <p>At Tropical Spa, nothing feels rushed or intimidating. From the moment you arrive, your visit follows four calm, simple steps built around your privacy and comfort.</p>
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

        {/* 3. Swedish Massage Cost in Yelahanka: Transparent Pricing */}
        <section aria-labelledby="pricing-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="pricing-heading">Swedish Massage Cost in Yelahanka: Transparent Pricing</h2>
            <p>Checking Swedish massage cost in Yelahanka should be clear and upfront, with zero hidden extras. First-time guests receive a flat ₹1,000 welcome voucher applied directly to their session.</p>
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
                    ✦ Most Popular
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
                    href={links.whatsappUrl(`Hi Tropical Spa, I would like to book a ${pkg.duration} Swedish Massage in Yelahanka and claim my ₹1,000 first-visit welcome voucher.`)}
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

          <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1.8rem' }}>
            Every session includes a private consultation, warm cold-pressed organic oils, attached hot shower access, fresh towels, and complimentary herbal tea.
          </p>
        </section>

        {/* 4. Who Is Classic Swedish Therapy Best For? */}
        <section className="service-highlights-section" aria-labelledby="ideal-for-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="ideal-for-heading">Who Is Classic Swedish Therapy Best For?</h2>
            <p>Looking for a gentle oil massage for first timers in Bangalore? Swedish massage is our most recommended starting point—strokes stay smooth and predictable, and you walk out feeling rested, never sore.</p>
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

        {/* 5. Swedish vs. Aromatherapy vs. Deep Tissue Massage */}
        <section aria-labelledby="comparison-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="comparison-heading">Swedish vs. Aromatherapy vs. Deep Tissue Massage</h2>
            <p>Deciding between Swedish vs. aromatherapy massage or deeper bodywork? Compare them at a glance to pick the feel you want today.</p>
          </div>

          <div className="pricing-table-wrap" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Swedish Massage</th>
                  <th>Aromatherapy Massage</th>
                  <th>Deep Tissue Massage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: '600', color: 'var(--clr-white)' }}>{row.feature}</td>
                    <td style={{ color: 'var(--clr-btn-bg)', fontWeight: '500' }}>{row.swedish}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.aroma}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.deep}</td>
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
            <p>Choosing a full body relaxation spa near Doddaballapura Road comes down to privacy, hygiene, and therapists you can trust.</p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '18px', padding: '2rem', marginBottom: '2.5rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.88)' }}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'grid', gap: '0.7rem' }}>
              <li><strong>Acoustically Isolated Private Suites:</strong> Hear soft music—not highway traffic or hallway chatter.</li>
              <li><strong>Attached Private Hot Showers:</strong> Rinse off warm organic oil privately inside your suite before heading out.</li>
              <li><strong>Cold-Pressed Organic Botanical Oils:</strong> Pure, gentle oils that nourish skin without synthetic heaviness or sticky residue.</li>
              <li><strong>Certified Male &amp; Female Therapists:</strong> Every therapist is professionally trained and background-verified, with your gender preference honored at booking.</li>
              <li><strong>Easy Highway Access &amp; Ample Parking:</strong> Located at 1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd (next to Nice Mart)—an easy drive from Yelahanka New Town, Sahakaranagar, Jakkur, Hebbal, Vidyaranyapura, and Manyata Tech Park, with ample highway parking outside.</li>
              <li><strong>100% Money-Back Satisfaction Guarantee:</strong> If your session ever falls short of your expectations, we stand behind our quality completely.</li>
            </ul>
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
            Book a 60-minute Swedish Massage for ₹1,600 (standard ₹2,600) or 90 minutes for ₹2,800 (standard ₹3,800) with our 100% money-back satisfaction guarantee.
          </p>
          <a
            href={links.whatsappUrl(whatsappBookingMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
          >
            Book Swedish Massage on WhatsApp (Claim ₹1,000 Off)
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

export default SwedishMassage;
