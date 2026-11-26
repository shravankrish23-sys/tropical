import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import balineseImg from '../assets/balinese-massage-spa.jpg';

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://tropicalspa.in/services/balinese-massage/#service",
      "name": "Authentic Balinese Massage in Yelahanka",
      "serviceType": "Balinese Massage",
      "url": "https://tropicalspa.in/services/balinese-massage/",
      "description": "Authentic Balinese oil massage in Yelahanka combining warm cold-pressed organic aromatic oils, long rhythmic strokes, palm and thumb acupressure, and gentle stretching in acoustically isolated private suites with attached hot showers.",
      "provider": {
        "@type": "DaySpa",
        "@id": "https://tropicalspa.in/#organization",
        "name": "Tropical Spa",
        "url": "https://tropicalspa.in/",
        "telephone": "+919550366963",
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
        { "@type": "Place", "name": "North Bengaluru" }
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "60-Minute Balinese Massage — First Visit (After ₹1,000 Welcome Voucher)",
          "price": "2000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/balinese-massage/"
        },
        {
          "@type": "Offer",
          "name": "60-Minute Balinese Massage — Standard Rate",
          "price": "3000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/balinese-massage/"
        },
        {
          "@type": "Offer",
          "name": "90-Minute Balinese Massage — First Visit (After ₹1,000 Welcome Voucher)",
          "price": "3300",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/balinese-massage/"
        },
        {
          "@type": "Offer",
          "name": "90-Minute Balinese Massage — Standard Rate",
          "price": "4300",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/balinese-massage/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://tropicalspa.in/services/balinese-massage/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a Balinese massage cost at Tropical Spa, and how do I use the ₹1,000 voucher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 60-minute Balinese massage is ₹3,000 standard and ₹2,000 on your first visit after our ₹1,000 welcome voucher. A 90-minute session is ₹4,300 standard and ₹3,300 on your first visit. Simply message us on WhatsApp at +91 95503 66963 or mention the welcome voucher when booking to apply the ₹1,000 discount."
          }
        },
        {
          "@type": "Question",
          "name": "Balinese vs. Thai vs. Swedish massage: which one is better for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose Swedish massage if you want soft, flowing oil strokes purely to unwind, or Traditional Thai massage if you want oil-free, clothed assisted stretching for flexibility. Choose Balinese massage if you want the middle ground—warm aromatic oil paired with medium-to-firm acupressure and gentle stretching for both calm and muscle relief."
          }
        },
        {
          "@type": "Question",
          "name": "What pressure level is used, and what about oil, attire, and showering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Balinese massage uses medium-to-firm pressure, and your therapist adjusts the depth anytime you ask for softer or firmer work. We provide fresh disposable undergarments or a traditional kemben wrap with full modesty draping, use warm cold-pressed organic aromatic oils, and include an attached hot shower inside your private suite."
          }
        },
        {
          "@type": "Question",
          "name": "Can I request a male or female therapist, and are the suites completely private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tropical Spa employs background-verified, certified male and female therapists, and you can request your preferred therapist gender when booking. Every session takes place in an acoustically isolated private suite with an attached hot shower, backed by our 100% money-back satisfaction guarantee."
          }
        },
        {
          "@type": "Question",
          "name": "Should I book 60 or 90 minutes, and do I get full hands-on massage time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose 60 minutes for a focused reset on your back, neck, shoulders, and legs, or 90 minutes for an unhurried full-body ritual with extra acupressure and stretching. Your intake consultation, private hot shower, and complimentary herbal tea happen outside your therapy timer, so you receive the full 60 or 90 minutes of hands-on massage."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to book in advance, and is parking easy near Yelahanka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are open daily from 10:00 AM to 9:00 PM at 1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart, Yelahanka. Walk-ins are welcome when suites are free, though booking ahead via WhatsApp locks in your preferred time and therapist, and ample highway parking is available right outside."
          }
        }
      ]
    }
  ]
};

export const BalineseMassage = () => {
  const { links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const quickDecision = [
    { label: "Duration", value: "60 Min / 90 Min (Full Hands-On Time)" },
    { label: "Starting Price (INR)", value: "₹2,000* First Visit (₹3,000 standard; ₹1,000 welcome voucher applied)" },
    { label: "Pressure & Oil Style", value: "Medium-to-Firm Warm Aromatic Oil + Gentle Stretching" },
    { label: "Suite Facility", value: "Acoustically Isolated Private Suite + Attached Hot Shower" }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Warm Welcome and Pressure Check-In",
      desc: "You begin with a cool refreshing towel and welcome beverage while your certified therapist asks about tight areas, daily posture strain, and how firm you like your pressure. You also sample and choose your preferred warm, cold-pressed organic aromatic oil blend before stepping into your suite."
    },
    {
      step: "02",
      title: "Private Suite Comfort and Modesty Draping",
      desc: "Inside your acoustically isolated private suite, you have complete privacy to change into disposable undergarments or a traditional kemben wrap. Your therapist follows strict draping standards with fresh, sterilized linens so every area not being massaged stays comfortably covered throughout your session."
    },
    {
      step: "03",
      title: "Warm Aromatic Oil, Acupressure & Gentle Stretching",
      desc: "Your ritual starts with warm aromatic oil poured generously across your back and legs, followed by long, rhythmic strokes that help tight muscles soften and let go. Your therapist then blends in steady palm and thumb acupressure to ease stubborn knots, finishing each limb with light, comfortable stretching that loosens stiff hips, shoulders, and lower backs."
    },
    {
      step: "04",
      title: "Private Attached Hot Shower and Herbal Tea",
      desc: "Once your full hands-on massage wraps up, step directly into the attached hot shower inside your own suite with fresh towels and bath essentials waiting for you. Afterward, linger over a complimentary cup of warm herbal tea so you walk back out feeling rested, light, and completely recharged."
    }
  ];

  const packages = [
    {
      duration: "60 Min",
      title: "60-Minute Balinese Massage",
      label: "Focused Full-Body Recharge",
      basePrice: "₹3,000",
      firstVisitPrice: "₹2,000",
      desc: "Focused full-body recharge targeting back, neck, shoulders, and tired legs.",
      popular: false
    },
    {
      duration: "90 Min",
      title: "90-Minute Extended Balinese Ritual",
      label: "Slow, Unhurried Head-to-Toe Ritual",
      basePrice: "₹4,300",
      firstVisitPrice: "₹3,300",
      desc: "Slow, unhurried head-to-toe ritual with extra acupressure and stretching.",
      popular: true
    }
  ];

  const idealFor = [
    {
      title: "Undecided Guests",
      desc: "Torn between soothing Swedish oil strokes and deeper muscle-release therapies—Balinese gives you the ideal middle ground."
    },
    {
      title: "IT Professionals Near Manyata Tech Park",
      desc: "Carrying heavy neck, upper-back, and wrist stiffness from long screen hours and daily commutes."
    },
    {
      title: "Weekend Unwinders Across Yelahanka",
      desc: "Residents across Yelahanka New Town and Sahakaranagar looking to quiet a busy mind while loosening tight muscles."
    },
    {
      title: "Frequent Flyers & Highway Travelers",
      desc: "Needing steady circulation and calm after flights into Kempegowda International Airport or long highway drives."
    }
  ];

  const comparisonRows = [
    { factor: "Goal", balinese: "Deep calm plus targeted muscle tension release", swedish: "Pure relaxation and everyday stress relief", thai: "Better flexibility, posture, and joint mobility" },
    { factor: "Pressure", balinese: "Medium to firm (fully adjustable)", swedish: "Light to medium", thai: "Medium to deep" },
    { factor: "Oil and Attire", balinese: "Warm cold-pressed organic aromatic oil; draped undergarments", swedish: "Warm aromatic oil; draped undergarments", thai: "Dry therapy (no oil); loose cotton spa attire provided" },
    { factor: "Best For", balinese: "Guests wanting warm oil comfort plus real tension relief", swedish: "First-time spa guests preferring soft, flowing strokes", thai: "Guests who want active assisted stretching without oil" }
  ];

  const addOns = [
    {
      title: "Complete Your Island Ritual with a Body Scrub (30 Min)",
      desc: "Add a 30-minute Body Scrub before your massage—ask for our Balinese Boreh Warming Spice Scrub for a complete island ritual that leaves skin smooth and muscles deeply warmed.",
      path: "/services/body-scrub/"
    },
    {
      title: "Prefer Lighter, Flowing Strokes? (Swedish Massage)",
      desc: "If you want pure surface relaxation without firm thumb acupressure or stretching, book our classic Swedish Massage.",
      path: "/services/swedish-massage/"
    },
    {
      title: "Looking for Oil-Free Assisted Stretching? (Traditional Thai)",
      desc: "If you prefer staying fully clothed while focusing on flexibility and deeper rhythmic compression, explore our Traditional Thai Massage.",
      path: "/services/traditional-thai-massage/"
    }
  ];

  const faqs = [
    {
      q: "How much does a Balinese massage cost at Tropical Spa, and how do I use the ₹1,000 voucher?",
      a: "A 60-minute Balinese massage is ₹3,000 standard and ₹2,000 on your first visit after our ₹1,000 welcome voucher. A 90-minute session is ₹4,300 standard and ₹3,300 on your first visit. Simply message us on WhatsApp at +91 95503 66963 or mention the welcome voucher when booking to apply the ₹1,000 discount."
    },
    {
      q: "Balinese vs. Thai vs. Swedish massage: which one is better for me?",
      a: "Choose Swedish massage if you want soft, flowing oil strokes purely to unwind, or Traditional Thai massage if you want oil-free, clothed assisted stretching for flexibility. Choose Balinese massage if you want the middle ground—warm aromatic oil paired with medium-to-firm acupressure and gentle stretching for both calm and muscle relief."
    },
    {
      q: "What pressure level is used, and what about oil, attire, and showering?",
      a: "Balinese massage uses medium-to-firm pressure, and your therapist adjusts the depth anytime you ask for softer or firmer work. We provide fresh disposable undergarments or a traditional kemben wrap with full modesty draping, use warm cold-pressed organic aromatic oils, and include an attached hot shower inside your private suite."
    },
    {
      q: "Can I request a male or female therapist, and are the suites completely private?",
      a: "Yes. Tropical Spa employs background-verified, certified male and female therapists, and you can request your preferred therapist gender when booking. Every session takes place in an acoustically isolated private suite with an attached hot shower, backed by our 100% money-back satisfaction guarantee."
    },
    {
      q: "Should I book 60 or 90 minutes, and do I get full hands-on massage time?",
      a: "Choose 60 minutes for a focused reset on your back, neck, shoulders, and legs, or 90 minutes for an unhurried full-body ritual with extra acupressure and stretching. Your intake consultation, private hot shower, and complimentary herbal tea happen outside your therapy timer, so you receive the full 60 or 90 minutes of hands-on massage."
    },
    {
      q: "Do I need to book in advance, and is parking easy near Yelahanka?",
      a: "We are open daily from 10:00 AM to 9:00 PM at 1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart, Yelahanka. Walk-ins are welcome when suites are free, though booking ahead via WhatsApp locks in your preferred time and therapist, and ample highway parking is available right outside."
    }
  ];

  const whatsappBookingMsg = "Hello Tropical Spa! I would like to book the Balinese Massage in Yelahanka and claim my ₹1,000 welcome voucher.";

  return (
    <div>
      <SeoMeta
        title="Balinese Massage in Yelahanka @ ₹2,000* | Tropical Spa"
        description="Enjoy warm aromatic oil & gentle stretches! Balinese massage on Doddaballapura Rd, Yelahanka. Claim ₹1,000 voucher—WhatsApp +91 95503 66963 to book."
        canonical="https://tropicalspa.in/services/balinese-massage/"
        schema={pageSchema}
      />

      <div className="page-container">

        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="balinese-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Warm Aromatic Oil &amp; Gentle Stretches | Yelahanka
            </div>

            <h1 id="balinese-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Authentic Balinese Massage in Yelahanka
            </h1>

            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Looking for a massage that genuinely melts away stiff shoulders without leaving you feeling bruised—or wondering if anything actually happened? Our <strong>Balinese massage in Yelahanka</strong> is the ideal bridge between gentle Swedish oil therapy and deeper Thai stretching, combining long, warm aromatic oil strokes with gentle acupressure and light stretching.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Whether you are recovering from post-week burnout, shaking off airport travel fatigue, or simply craving a full-body recharge, this session delivers both deep relaxation and real muscle tension relief. Every treatment at our authentic <strong>Balinese spa Bangalore</strong> guests trust is tailored to how your body feels the moment you arrive.
            </p>

            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button
                href={links.whatsappUrl(whatsappBookingMsg)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(158, 184, 117, 0.25)' }}
              >
                Book Balinese Massage &amp; Claim ₹1,000 Voucher
              </Button>
            </div>
          </div>

          <div className="service-image-holder">
            <picture>
              <source type="image/jpeg" srcSet={balineseImg} />
              <img
                src={balineseImg}
                alt="Balinese Massage therapy suite with frangipani blossoms and warm aromatic oils at Tropical Spa Yelahanka"
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

        {/* 2. What to Expect During Your Balinese Ritual */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>What to Expect During Your Balinese Ritual</h2>
            <p>Your booked 60 or 90 minutes are strictly 100% full hands-on therapy time—your consultation, private shower, and herbal tea never eat into your time on the massage table.</p>
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

        {/* 3. Transparent Balinese Massage Pricing and Durations */}
        <section aria-labelledby="pricing-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="pricing-heading">Transparent Balinese Massage Pricing and Durations</h2>
            <p>Checking the Balinese massage price in Yelahanka before you book should never require guesswork or phone follow-ups. Below are our exact upfront rates, including automatic savings when you claim our ₹1,000 first-visit welcome voucher.</p>
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
                    ✦ Most Recommended
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Balinese Massage in Yelahanka and claim my ₹1,000 welcome voucher.`)}
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

        {/* 4. Who Is Balinese Massage Best For? */}
        <section className="service-highlights-section" aria-labelledby="ideal-for-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="ideal-for-heading">Who Is Balinese Massage Best For?</h2>
            <p>If light relaxation massages feel too soft while intense deep-work leaves you sore, this traditional Indonesian massage Yelahanka locals book is built for you:</p>
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

        {/* 5. Balinese vs. Swedish vs. Traditional Thai Comparison */}
        <section aria-labelledby="comparison-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="comparison-heading">Balinese vs. Swedish vs. Traditional Thai Massage</h2>
            <p>Still weighing Balinese vs. Thai massage—or wondering if Swedish fits your mood today? Compare all three therapies side by side:</p>
          </div>

          <div className="pricing-table-wrap" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Comparison Factor</th>
                  <th>Balinese Massage</th>
                  <th>Swedish Massage</th>
                  <th>Traditional Thai Massage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: '600', color: 'var(--clr-white)' }}>{row.factor}</td>
                    <td style={{ color: 'var(--clr-btn-bg)', fontWeight: '500' }}>{row.balinese}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.swedish}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.thai}</td>
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
            <p>Finding a reliable Balinese oil massage North Bengaluru residents can return to comfortably comes down to hygiene, quiet suites, and trained hands.</p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '18px', padding: '2rem', marginBottom: '2.5rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.88)' }}>
            <p style={{ marginBottom: '1rem' }}>
              At Tropical Spa, every room is an <strong>acoustically isolated private suite with its own attached hot shower, fresh sterilized linens, and warm cold-pressed organic aromatic oils</strong>—so traffic outside never reaches your room and you never wait for shared washrooms.
            </p>
            <p style={{ margin: 0 }}>
              All sessions are performed by <strong>background-verified, certified male and female therapists</strong> matched to your preference, and every visit is backed by our <strong>100% money-back satisfaction guarantee</strong>. Conveniently located at ACSS Complex on Doddaballapura Main Road right next to Nice Mart with ample highway parking, we are a quick, stress-free drive from Yelahanka New Town, Sahakaranagar, Jakkur, Hebbal, Vidyaranyapura, and Manyata Tech Park.
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
            Book a 60-minute Balinese Massage for ₹2,000 (standard ₹3,000) or 90 minutes for ₹3,300 (standard ₹4,300) with our 100% money-back satisfaction guarantee.
          </p>
          <a
            href={links.whatsappUrl(whatsappBookingMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
          >
            Claim ₹1,000 Voucher on WhatsApp
          </a>
        </section>

        {/* 7. Buyer-Objection FAQs */}
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

export default BalineseMassage;
