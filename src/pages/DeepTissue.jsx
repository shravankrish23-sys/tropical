import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import deepTissueImg from '../assets/deep-tissue-spa.jpg';

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://tropicalspa.in/services/deep-tissue-massage/#service",
      "name": "Deep Tissue Massage in Yelahanka",
      "serviceType": "Deep Tissue Massage",
      "url": "https://tropicalspa.in/services/deep-tissue-massage/",
      "description": "Firm, custom-paced deep tissue massage in Yelahanka for back, neck, and shoulder knot relief, desk stiffness, and sports recovery. Performed in acoustically isolated private suites with attached hot showers and a 100% money-back satisfaction guarantee.",
      "provider": {
        "@type": "DaySpa",
        "@id": "https://tropicalspa.in/#organization",
        "name": "Tropical Spa",
        "url": "https://tropicalspa.in/",
        "telephone": "+91-95503-66963",
        "priceRange": "₹2,100 - ₹4,400",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart",
          "addressLocality": "Yelahanka, Bengaluru",
          "addressRegion": "Karnataka",
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
        { "@type": "Place", "name": "North Bengaluru" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Deep Tissue Massage Session Rates",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "60-Minute Deep Tissue Massage (First-Visit Welcome Offer)",
            "description": "60 minutes of hands-on deep tissue massage after ₹1,000 first-visit welcome voucher. Includes private suite, attached hot shower, organic oil, and herbal tea.",
            "price": "2100",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://tropicalspa.in/services/deep-tissue-massage/"
          },
          {
            "@type": "Offer",
            "name": "60-Minute Deep Tissue Massage (Standard Rate)",
            "description": "60 minutes of hands-on deep tissue massage targeting neck, shoulders, and upper and lower back knots.",
            "price": "3100",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://tropicalspa.in/services/deep-tissue-massage/"
          },
          {
            "@type": "Offer",
            "name": "90-Minute Deep Tissue Massage (First-Visit Welcome Offer)",
            "description": "90 minutes of unhurried full-body deep tissue massage after ₹1,000 first-visit welcome voucher. Includes private suite, attached hot shower, organic oil, and herbal tea.",
            "price": "3400",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://tropicalspa.in/services/deep-tissue-massage/"
          },
          {
            "@type": "Offer",
            "name": "90-Minute Deep Tissue Massage (Standard Rate)",
            "description": "90 minutes of full-body deep tissue massage covering back, shoulders, hips, legs, and feet.",
            "price": "4400",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://tropicalspa.in/services/deep-tissue-massage/"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://tropicalspa.in/services/deep-tissue-massage/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a Deep Tissue Massage cost at Tropical Spa Yelahanka, and how does the ₹1,000 voucher work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 60-minute Deep Tissue Massage is ₹3,100 (just ₹2,100 on your first visit after the ₹1,000 welcome voucher), and a 90-minute session is ₹4,400 (₹3,400 on your first visit). Simply mention the welcome voucher when booking via WhatsApp or phone, and the ₹1,000 discount is applied straight to your bill with no extra fees for showers, organic oils, or herbal tea."
          }
        },
        {
          "@type": "Question",
          "name": "What should I wear, and will oil stain my clothes afterward?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arrive in whatever everyday clothes feel comfortable. Inside your private suite, we provide fresh disposable spa attire and use minimal warm organic oil so your therapist maintains steady grip without leaving you overly greasy. You can also take a hot shower in your suite's attached bathroom with fresh towels and toiletries before dressing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I choose a male or female therapist, and will the pressure be too painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can request a certified, background-verified male or female therapist when booking your slot, subject to availability. Deep tissue massage uses firm, slow pressure, but it should never cause sharp pain—your therapist checks in regularly and adjusts pressure immediately to match your exact comfort level."
          }
        },
        {
          "@type": "Question",
          "name": "How private and hygienic are your therapy rooms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every session takes place in an acoustically isolated, climate-controlled private suite with a lockable door and its own attached hot shower. Massage tables, towels, and fresh linens are completely replaced and sanitized between every single guest."
          }
        },
        {
          "@type": "Question",
          "name": "Should I book 60 minutes or 90 minutes, and does showering cut into my massage time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose 60 minutes if you want focused relief on two or three tight zones such as your neck, shoulders, and lower back; choose 90 minutes if you want unhurried full-body recovery from shoulders down to calves and feet. Your booked duration is dedicated hands-on therapy time—your check-in consultation, shower, and herbal tea never reduce your massage minutes."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an advance appointment, and is parking available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Walk-ins are welcome whenever a suite is free, though booking a few hours ahead on WhatsApp (+91 95503 66963) is strongly recommended for weekday evenings and weekends. We are open daily from 10:00 AM to 9:00 PM at ACSS Complex on Doddaballapura Main Road (next to Nice Mart), with ample highway parking right outside."
          }
        }
      ]
    }
  ]
};

export const DeepTissue = () => {
  const { links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const quickDecision = [
    { label: "Duration", value: "60 Min or 90 Min (Full hands-on therapy time)" },
    { label: "Starting Price (INR)", value: "₹2,100 First Visit (Base ₹3,100 less ₹1,000 Welcome Voucher)" },
    { label: "Pressure & Oil Style", value: "Firm, Custom-Paced • Minimal warm organic oil for controlled grip" },
    { label: "Suite Facility", value: "Sound-Isolated Private Suite with attached hot shower" }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Private Check-In and Pressure Calibration",
      desc: "Your visit starts with a warm welcome drink and a quick, quiet chat with your therapist. Tell us exactly where you feel locked up—neck, shoulder blades, lower back, hips, or calves—and mention any recent injuries or sensitive spots so we tailor the session safely."
    },
    {
      step: "02",
      title: "Slow Warm-Up Across Tight Areas",
      desc: "Once you settle onto our cushioned massage table under fresh, crisp draping, your therapist starts with steady, unhurried hand pressure. This gently warms stiff muscles so deeper work feels smooth and welcoming rather than abrupt."
    },
    {
      step: "03",
      title: "Focused Knot and Tension Release",
      desc: "Unlike slippery relaxation massages, our therapists use minimal warm organic oil or smooth friction cream so their hands keep a steady grip. Using slow strokes with thumbs, knuckles, and forearms, they work patiently across stubborn knots—delivering the thorough connective-tissue release many guests seek when searching for a myofascial release massage in Bengaluru."
    },
    {
      step: "04",
      title: "Hot Shower Refresh and Herbal Tea",
      desc: "Your therapist checks in on pressure throughout the session so it stays firmly in your \"good relief\" zone. Afterward, take your time in your suite's attached hot shower with luxury toiletries, followed by a complimentary cup of soothing herbal tea before stepping back outside."
    }
  ];

  const packages = [
    {
      duration: "60 Minutes",
      title: "60-Minute Deep Tissue Massage",
      label: "Focused Relief for 2–3 Problem Areas",
      basePrice: "₹3,100",
      firstVisitPrice: "₹2,100",
      desc: "Focused relief for 2–3 problem areas (neck, shoulders, upper & lower back).",
      popular: false
    },
    {
      duration: "90 Minutes",
      title: "90-Minute Extended Deep Tissue Ritual",
      label: "Unhurried Full-Body Deep Work",
      basePrice: "₹4,400",
      firstVisitPrice: "₹3,400",
      desc: "Unhurried full-body deep work (back, shoulders, hips, legs & feet).",
      popular: true
    }
  ];

  const idealFor = [
    {
      title: "IT and Tech Professionals",
      desc: "Ideal if you are searching for a deep tissue massage for IT professionals near Manyata Tech Park to undo hours of laptop hunch, stiff necks, and mouse-shoulder fatigue."
    },
    {
      title: "Daily Highway Commuters",
      desc: "Releases tight hips and aching lower backs built up during long drives along Airport Road, Hebbal Flyover, and Outer Ring Road."
    },
    {
      title: "Runners, Cyclists, and Gym Regulars",
      desc: "Works as a practical sports recovery massage in Yelahanka, loosening tight calves, hamstrings, and glutes after intense workouts."
    },
    {
      title: "Guests with Stubborn Back & Shoulder Knots",
      desc: "Built for anyone typing \"back and shoulder knot relief massage near me\" after weeks of carrying chronic upper-body stiffness."
    },
    {
      title: "Weekend Reset & Couples Bookings",
      desc: "Great for recharging on a Saturday or Sunday—and if you are visiting with your partner, ask our desk about booking side-by-side sessions in our private couples suite."
    }
  ];

  const comparisonRows = [
    { feature: "Main Goal", deep: "Unlocking deep knots & chronic stiffness", swedish: "Stress relief, calm & better sleep", thai: "Flexibility, mobility & energy boost" },
    { feature: "Pressure Level", deep: "Firm, slow & targeted (custom-adjusted)", swedish: "Light to medium, smooth & flowing", thai: "Medium to firm rhythmic pressure" },
    { feature: "Oil & Attire", deep: "Minimal warm organic oil; draped", swedish: "Generous warm organic oil; draped", thai: "Dry (no oil); loose cotton spa attire" },
    { feature: "Best Occasion", deep: "Desk pain, gym recovery, tight back", swedish: "Exhausting week, gentle unwinding", thai: "Stiff hips/joints, active stretch lovers" }
  ];

  const addOns = [
    {
      title: "Back Massage in Yelahanka (30 Min)",
      desc: "Short on time mid-week? Book our focused 30-minute Back Massage in Yelahanka for a quick lunchtime or post-commute reset on tight shoulders and lower-back tension.",
      path: "/services/back-massage/"
    },
    {
      title: "Traditional Thai Massage",
      desc: "Prefer stretching without oil? Try our Traditional Thai Massage, blending rhythmic pressure points with guided yoga-style stretches to open stiff hips and joints.",
      path: "/services/traditional-thai-massage/"
    },
    {
      title: "Classic Swedish Massage",
      desc: "Looking for lighter full-body unwinding? Choose our Classic Swedish Massage for long, warm-oil gliding strokes crafted purely for deep mental calm and better sleep.",
      path: "/services/swedish-massage/"
    }
  ];

  const faqs = [
    {
      q: "How much does a Deep Tissue Massage cost at Tropical Spa Yelahanka, and how does the ₹1,000 voucher work?",
      a: "A 60-minute Deep Tissue Massage is ₹3,100 (just ₹2,100 on your first visit after the ₹1,000 welcome voucher), and a 90-minute session is ₹4,400 (₹3,400 on your first visit). Simply mention the welcome voucher when booking via WhatsApp or phone, and the ₹1,000 discount is applied straight to your bill with no extra fees for showers, organic oils, or herbal tea."
    },
    {
      q: "What should I wear, and will oil stain my clothes afterward?",
      a: "Arrive in whatever everyday clothes feel comfortable. Inside your private suite, we provide fresh disposable spa attire and use minimal warm organic oil so your therapist maintains steady grip without leaving you overly greasy. You can also take a hot shower in your suite's attached bathroom with fresh towels and toiletries before dressing."
    },
    {
      q: "Can I choose a male or female therapist, and will the pressure be too painful?",
      a: "Yes, you can request a certified, background-verified male or female therapist when booking your slot, subject to availability. Deep tissue massage uses firm, slow pressure, but it should never cause sharp pain—your therapist checks in regularly and adjusts pressure immediately to match your exact comfort level."
    },
    {
      q: "How private and hygienic are your therapy rooms?",
      a: "Every session takes place in an acoustically isolated, climate-controlled private suite with a lockable door and its own attached hot shower. Massage tables, towels, and fresh linens are completely replaced and sanitized between every single guest."
    },
    {
      q: "Should I book 60 minutes or 90 minutes, and does showering cut into my massage time?",
      a: "Choose 60 minutes if you want focused relief on two or three tight zones such as your neck, shoulders, and lower back; choose 90 minutes if you want unhurried full-body recovery from shoulders down to calves and feet. Your booked duration is dedicated hands-on therapy time—your check-in consultation, shower, and herbal tea never reduce your massage minutes."
    },
    {
      q: "Do I need an advance appointment, and is parking available?",
      a: "Walk-ins are welcome whenever a suite is free, though booking a few hours ahead on WhatsApp (+91 95503 66963) is strongly recommended for weekday evenings and weekends. We are open daily from 10:00 AM to 9:00 PM at ACSS Complex on Doddaballapura Main Road (next to Nice Mart), with ample highway parking right outside."
    }
  ];

  const whatsappBookingMsg = "Hi Tropical Spa Yelahanka! I would like to book a Deep Tissue Massage (60 or 90 Min) and claim my Rs.1000 first-visit welcome voucher. Please share available slots.";

  return (
    <div>
      <SeoMeta
        title="Deep Tissue Massage in Yelahanka (₹2,100*) | Tropical Spa"
        description="Melt stubborn back, neck & shoulder knots with deep tissue massage on Doddaballapura Rd, Yelahanka. Claim ₹1,000 off your 1st visit. Book on WhatsApp!"
        canonical="https://tropicalspa.in/services/deep-tissue-massage/"
        schema={pageSchema}
      />

      <div className="page-container">

        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="deeptissue-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Lasting Pain &amp; Knot Relief | Yelahanka
            </div>

            <h1 id="deeptissue-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Deep Tissue Massage in Yelahanka for Lasting Pain &amp; Knot Relief
            </h1>

            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Tight shoulders that ache by 4 PM, a stiff lower back after sitting in Bellary Road traffic, or stubborn gym soreness that refuses to fade—surface-level spa rubs rarely fix deep tension. Our <strong>deep tissue massage in Yelahanka</strong> uses slow, deliberate, firm pressure to reach tight underlying muscle layers and release the knots slowing you down.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Whether you need a focused <strong>pain relief massage in Yelahanka</strong> after a brutal work week or regular recovery after heavy training, every session at Tropical Spa is paced around your comfort. You walk out feeling looser, lighter, and moving freely again.
            </p>

            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button
                href={links.whatsappUrl(whatsappBookingMsg)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(158, 184, 117, 0.25)' }}
              >
                Book Deep Tissue Massage &amp; Claim ₹1,000 Off on WhatsApp
              </Button>
            </div>
          </div>

          <div className="service-image-holder">
            <picture>
              <source type="image/jpeg" srcSet={deepTissueImg} />
              <img
                src={deepTissueImg}
                alt="Deep Tissue Massage therapy suite with warm towels and herbal oils at Tropical Spa Yelahanka"
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

        {/* 2. What to Expect: Step-by-Step Deep Tissue Ritual */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>What to Expect: Your Step-by-Step Deep Tissue Ritual</h2>
            <p>Deep tissue work should feel deeply relieving, never rushed or unbearable. Here is how your session unfolds inside our quiet private suites on Doddaballapura Main Road:</p>
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

        {/* 3. Transparent Deep Tissue Massage Prices in Yelahanka */}
        <section aria-labelledby="pricing-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="pricing-heading">Transparent Deep Tissue Massage Prices in Yelahanka</h2>
            <p>No surprise add-ons or guesswork at checkout. Compare our exact session rates alongside our ₹1,000 First-Visit Welcome Offer:</p>
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
                    ✦ Full-Body Recovery
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
                    href={links.whatsappUrl(`Hi Tropical Spa Yelahanka! I would like to book the ${pkg.duration} Deep Tissue Massage and claim my Rs.1000 first-visit welcome voucher.`)}
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
            Every booking includes a private consultation, full hands-on massage time, fresh disposable spa attire, attached hot shower access, and complimentary herbal tea.
          </p>
        </section>

        {/* 4. Who Is This Deep Tissue Massage Best For? */}
        <section className="service-highlights-section" aria-labelledby="ideal-for-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="ideal-for-heading">Who Is This Deep Tissue Massage Best For?</h2>
            <p>Guests visit us from across North Bengaluru when a gentle spa rub simply is not strong enough:</p>
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

        {/* 5. Deep Tissue vs. Swedish vs. Traditional Thai: Pick Your Fit Fast */}
        <section aria-labelledby="comparison-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="comparison-heading">Deep Tissue vs. Swedish vs. Traditional Thai: Pick Your Fit Fast</h2>
            <p>Not sure if Deep Tissue is the right match for your body today? Compare our three most requested therapies in seconds:</p>
          </div>

          <div className="pricing-table-wrap" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Deep Tissue Massage</th>
                  <th>Classic Swedish Massage</th>
                  <th>Traditional Thai Massage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: '600', color: 'var(--clr-white)' }}>{row.feature}</td>
                    <td style={{ color: 'var(--clr-btn-bg)', fontWeight: '500' }}>{row.deep}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.swedish}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.thai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Why North Bengaluru Guests Choose Tropical Spa Yelahanka */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>Why North Bengaluru Guests Choose Tropical Spa Yelahanka</h2>
            <p>Finding a clean, quiet, genuinely effective deep tissue massage in North Bangalore should not require crossing half the city in traffic.</p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '18px', padding: '2rem', marginBottom: '2.5rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.88)' }}>
            <p style={{ marginBottom: '1rem' }}>
              Tropical Spa sits right on Doddaballapura Main Road (1st Floor, Building No. 1, ACSS Complex, next to Nice Mart) with <strong>ample highway parking directly outside</strong>—an easy, direct drive from Yelahanka New Town, Sahakaranagar, Jakkur, Vidyaranyapura, Hebbal, and Manyata Tech Park.
            </p>
            <p style={{ margin: 0 }}>
              Every therapy room is an <strong>acoustically isolated private suite equipped with an attached hot shower and freshly sanitized linens</strong>, so road noise never interrupts your reset. Our <strong>background-verified, certified male and female therapists</strong> maintain complete professionalism and adjust every stroke to your comfort, backed by our <strong>100% money-back satisfaction guarantee</strong>.
            </p>
          </div>

          <div className="section-header-center" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--clr-white)' }}>Complementary Add-Ons &amp; Similar Therapies</h3>
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
            Book a 60-minute Deep Tissue Massage for ₹2,100 (standard ₹3,100) or 90 minutes for ₹3,400 (standard ₹4,400) with our 100% money-back satisfaction guarantee.
          </p>
          <a
            href={links.whatsappUrl(whatsappBookingMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
          >
            Book Deep Tissue Massage &amp; Claim ₹1,000 Off on WhatsApp
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

export default DeepTissue;
