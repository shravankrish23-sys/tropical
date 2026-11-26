import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import thaiImg from '../assets/thai-massage-spa.jpg';

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://tropicalspa.in/services/traditional-thai-massage/#service",
      "name": "Traditional Thai Massage",
      "alternateName": "100% Oil-Free Dry Thai Massage",
      "serviceType": "Traditional Thai Dry Massage",
      "url": "https://tropicalspa.in/services/traditional-thai-massage/",
      "description": "100% oil-free Traditional Thai dry massage performed in provided loose cotton spa attire on a cushioned floor mat inside acoustically isolated private suites with attached hot showers in Yelahanka, Bengaluru.",
      "provider": {
        "@type": "DaySpa",
        "@id": "https://tropicalspa.in/#organization",
        "name": "Tropical Spa",
        "url": "https://tropicalspa.in/",
        "telephone": "+91-95503-66963",
        "openingHours": "Mo-Su 10:00-21:00",
        "priceRange": "₹2,000 - ₹4,100",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart",
          "addressLocality": "Yelahanka, Bengaluru",
          "addressRegion": "KA",
          "postalCode": "560064",
          "addressCountry": "IN"
        }
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
          "name": "Traditional Thai Massage - 60 Minutes (First Visit after ₹1,000 Welcome Voucher)",
          "price": "2000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "eligibleCustomerType": "New customers",
          "url": "https://tropicalspa.in/services/traditional-thai-massage/"
        },
        {
          "@type": "Offer",
          "name": "Traditional Thai Massage - 60 Minutes (Standard Rate)",
          "price": "3000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/traditional-thai-massage/"
        },
        {
          "@type": "Offer",
          "name": "Traditional Thai Massage - 90 Minutes (First Visit after ₹1,000 Welcome Voucher)",
          "price": "3100",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "eligibleCustomerType": "New customers",
          "url": "https://tropicalspa.in/services/traditional-thai-massage/"
        },
        {
          "@type": "Offer",
          "name": "Traditional Thai Massage - 90 Minutes (Standard Rate)",
          "price": "4100",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/traditional-thai-massage/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://tropicalspa.in/services/traditional-thai-massage/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a Traditional Thai Massage cost, and how do I use the ₹1,000 welcome voucher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 60-minute session costs ₹3,000 (or ₹2,000 on your first visit after the ₹1,000 welcome voucher), and a 90-minute session costs ₹4,100 (or ₹3,100 on your first visit). Mention the ₹1,000 voucher when you message us on WhatsApp or call +91 95503 66963, and we deduct it directly from your bill."
          }
        },
        {
          "@type": "Question",
          "name": "Is any oil used, and what should I wear?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No oil, lotion, or cream is used at any point during a Traditional Thai Massage. We provide freshly laundered, loose-fitting cotton spa shirts and trousers inside your private room so you remain fully covered, comfortable, and free of any oily residue when you leave."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be flexible or know yoga? Does it hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not at all—most guests book this therapy precisely because they feel stiff. Your therapist guides every stretch slowly and adjusts pressure from gentle to firm based on your live feedback, staying comfortably within your natural joint range so it feels releasing, never painful."
          }
        },
        {
          "@type": "Question",
          "name": "Can I choose a male or female therapist, and are the rooms private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tropical Spa has background-verified, certified male and female therapists, and you can request your preference when booking. Every session takes place inside an acoustically isolated private suite fitted with a wide floor mat and an attached hot shower."
          }
        },
        {
          "@type": "Question",
          "name": "Should I choose 60 or 90 minutes, and do I get full hands-on time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pick 60 minutes for a balanced full-body stretch and pressure reset, or 90 minutes if your hips, hamstrings, or lower back feel especially tight. Both options guarantee a full 60 or 90 minutes of hands-on bodywork—changing time and complimentary herbal tea never reduce your session time."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to book in advance, and is parking available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are open daily from 10:00 AM to 9:00 PM. Walk-ins are welcome when suites are open, though evenings and weekends fill quickly, so booking ahead via WhatsApp or call (+91 95503 66963) is recommended. Ample highway parking is available outside ACSS Complex on Doddaballapura Main Road, next to Nice Mart."
          }
        }
      ]
    }
  ]
};

export const ThaiMassage = () => {
  const { links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const quickDecision = [
    { label: "Duration", value: "60 or 90 Minutes (Full Hands-On Time)" },
    { label: "Starting Price (INR)", value: "₹2,000* First Visit (₹3,000 base minus ₹1,000 Welcome Voucher)" },
    { label: "Pressure & Oil Style", value: "Firm to Custom, 100% Oil-Free Dry Stretching in Provided Loose Cotton Attire" },
    { label: "Suite Facility", value: "Acoustically Isolated Private Suite, Wide Floor Mat & Attached Hot Shower" }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Quick Comfort Check",
      desc: "You start in our quiet lounge with a refreshing welcome drink and tell your certified therapist where you hold tension—whether that’s a stiff neck, tight lower back, or sore calves—along with your preferred pressure level."
    },
    {
      step: "02",
      title: "Provided Loose Cotton Attire",
      desc: "Inside your private suite, you change into freshly laundered, loose-fitting cotton spa clothes that let your body move and stretch freely with zero oil on your skin or hair."
    },
    {
      step: "03",
      title: "Cushioned Floor-Mat Stretching & Pressure",
      desc: "Resting on a wide, supportive floor mat, your therapist combines rhythmic palm, thumb, and forearm pressure with slow, guided stretches. Think of it as relaxing into assisted yoga where your therapist does all the work—ideal if you want a traditional Thai dry massage in Bangalore that leaves you energized rather than sleepy."
    },
    {
      step: "04",
      title: "Unhurried Finish & Herbal Tea",
      desc: "Once your session concludes, take your time changing or refreshing in your suite’s attached hot shower before enjoying warm herbal tea. Every 60- or 90-minute booking guarantees full hands-on therapy time; changing and tea never cut into your session clock."
    }
  ];

  const packages = [
    {
      duration: "60 Minutes",
      title: "60-Minute Traditional Thai Massage",
      label: "Full-Body Rhythmic Pressure & Core Stretches",
      basePrice: "₹3,000",
      firstVisitPrice: "₹2,000",
      desc: "Full-body rhythmic pressure and core stretches for back, shoulders, hips, and legs.",
      popular: false
    },
    {
      duration: "90 Minutes",
      title: "90-Minute Extended Thai Ritual",
      label: "Unhurried Deep Stretching & Joint Mobility",
      basePrice: "₹4,100",
      firstVisitPrice: "₹3,100",
      desc: "Unhurried deep stretching for extra-tight hamstrings, lower back, neck, and hips.",
      popular: true
    }
  ];

  const idealFor = [
    {
      title: "Desk Workers & Tech Commuters",
      desc: "Professionals around Manyata Tech Park, Hebbal, and Yelahanka New Town dealing with stiff lower backs, locked hips, and rounded shoulders from long laptop hours."
    },
    {
      title: "Runners, Cyclists & Gym-Goers",
      desc: "Active residents from Jakkur, Sahakaranagar, and Vidyaranyapura looking to release tight hamstrings, calves, and hip flexors for faster recovery."
    },
    {
      title: "Airport Road & Highway Travelers",
      desc: "Flyers and drivers shaking off post-flight stiffness or long-drive fatigue without feeling heavy or groggy afterward."
    },
    {
      title: "Guests Who Dislike Oil Massages",
      desc: "Anyone searching for an oil free body massage in Yelahanka because they have meetings, errands, or dinner plans afterward and want zero oil residue in their hair or clothes."
    }
  ];

  const comparisonRows = [
    { feature: "Oil Used", thai: "100% Oil-Free (Dry)", balinese: "Warm aromatic plant oils", deep: "Light organic massage oil" },
    { feature: "Attire & Setup", thai: "Loose cotton spa clothes on wide floor mat", balinese: "Draped on cushioned massage table", deep: "Draped on cushioned massage table" },
    { feature: "Core Technique", thai: "Guided yoga-style stretches + rhythmic acupressure", balinese: "Long gliding strokes + gentle skin rolling", deep: "Slow, firm pressure on deep muscle knots" },
    { feature: "Best For", thai: "Joint stiffness, tight hips, flexibility, energy boost", balinese: "Full-body calm, stress relief, softer skin", deep: "Stubborn shoulder knots, heavy muscle soreness" },
    { feature: "Post-Session Feel", thai: "Light, loose, alert, and mobile", balinese: "Deeply calm, warm, and deeply relaxed", deep: "Relieved, loosened, and grounded" }
  ];

  const addOns = [
    {
      title: "Foot Reflexology & Feet Massage (30 Min)",
      desc: "Pair a 30-minute Foot Reflexology & Feet Massage with your Thai session to soothe tired arches, ankles, and calves after long days standing or walking.",
      path: "/services/feet-massage/"
    },
    {
      title: "Muscle Relaxing Massage",
      desc: "Prefer gentler table bodywork without deep stretching? Explore our Muscle Relaxing Massage for everyday shoulder and back strain.",
      path: "/services/muscle-relaxing-massage/"
    },
    {
      title: "Balinese Massage",
      desc: "Ready for a warm, oil-based unwind next time? Book our Balinese Massage for fragrant botanical oils, flowing strokes, and deep nervous-system calm.",
      path: "/services/balinese-massage/"
    }
  ];

  const faqs = [
    {
      q: "How much does a Traditional Thai Massage cost, and how do I use the ₹1,000 welcome voucher?",
      a: "A 60-minute session costs ₹3,000 (or ₹2,000 on your first visit after the ₹1,000 welcome voucher), and a 90-minute session costs ₹4,100 (or ₹3,100 on your first visit). Mention the ₹1,000 voucher when you message us on WhatsApp or call +91 95503 66963, and we deduct it directly from your bill."
    },
    {
      q: "Is any oil used, and what should I wear?",
      a: "No oil, lotion, or cream is used at any point during a Traditional Thai Massage. We provide freshly laundered, loose-fitting cotton spa shirts and trousers inside your private room so you remain fully covered, comfortable, and free of any oily residue when you leave."
    },
    {
      q: "Do I need to be flexible or know yoga? Does it hurt?",
      a: "Not at all—most guests book this therapy precisely because they feel stiff. Your therapist guides every stretch slowly and adjusts pressure from gentle to firm based on your live feedback, staying comfortably within your natural joint range so it feels releasing, never painful."
    },
    {
      q: "Can I choose a male or female therapist, and are the rooms private?",
      a: "Yes. Tropical Spa has background-verified, certified male and female therapists, and you can request your preference when booking. Every session takes place inside an acoustically isolated private suite fitted with a wide floor mat and an attached hot shower."
    },
    {
      q: "Should I choose 60 or 90 minutes, and do I get full hands-on time?",
      a: "Pick 60 minutes for a balanced full-body stretch and pressure reset, or 90 minutes if your hips, hamstrings, or lower back feel especially tight. Both options guarantee a full 60 or 90 minutes of hands-on bodywork—changing time and complimentary herbal tea never reduce your session time."
    },
    {
      q: "Do I need to book in advance, and is parking available?",
      a: "We are open daily from 10:00 AM to 9:00 PM. Walk-ins are welcome when suites are open, though evenings and weekends fill quickly, so booking ahead via WhatsApp or call (+91 95503 66963) is recommended. Ample highway parking is available outside ACSS Complex on Doddaballapura Main Road, next to Nice Mart."
    }
  ];

  const whatsappBookingMsg = "Hi Tropical Spa Yelahanka, I would like to book a Traditional Thai Massage (100% oil-free) and claim the ₹1,000 welcome voucher.";

  return (
    <div>
      <SeoMeta
        title="Thai Massage in Yelahanka From ₹2,000* | Tropical Spa"
        description="100% oil-free Thai stretching massage on Doddaballapura Rd, Yelahanka. Ease stiff back & joints from ₹2,000 with a ₹1,000 voucher. WhatsApp to book!"
        canonical="https://tropicalspa.in/services/traditional-thai-massage/"
        schema={pageSchema}
      />

      <div className="page-container">

        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="thai-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ 100% Oil-Free Dry Stretching | Yelahanka
            </div>

            <h1 id="thai-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Traditional Thai Massage in Yelahanka (100% Oil-Free Dry Stretching)
            </h1>

            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Tight hips from long desk hours, a stiff lower back after Bellary Road traffic, or sore hamstrings from a morning run don’t always call for a heavy oil rubdown. Our <strong>Traditional Thai Massage in Yelahanka</strong> is a <strong>100% oil-free dry massage in provided loose cotton attire</strong>, built to unlock stiff joints and stretch tight muscles without leaving sticky oil on your skin or hair.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Located on Doddaballapura Main Road next to Nice Mart, Tropical Spa is an easy 5-to-20-minute drive from Yelahanka New Town, Sahakaranagar, Jakkur, Hebbal, Vidyaranyapura, and Manyata Tech Park. With our ₹1,000 first-visit welcome voucher, you can book a full 60-minute <strong>Thai spa Yelahanka</strong> session starting at just <strong>₹2,000</strong>.
            </p>

            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button
                href={links.whatsappUrl(whatsappBookingMsg)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(158, 184, 117, 0.25)' }}
              >
                Book Thai Massage &amp; Claim ₹1,000 Off
              </Button>
            </div>
          </div>

          <div className="service-image-holder">
            <picture>
              <source type="image/jpeg" srcSet={thaiImg} />
              <img
                src={thaiImg}
                alt="Traditional Thai Massage floor futon suite with traditional cotton attire at Tropical Spa Yelahanka"
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

        {/* 2. What to Expect: Step-by-Step Ritual */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>What to Expect: Your Step-by-Step Thai Dry Massage Ritual</h2>
            <p>Every session is paced around your comfort, modesty, and natural mobility—never rushed and never forced.</p>
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
            <p>Review our upfront dry Thai massage price in Yelahanka with zero hidden charges or surprise add-ons:</p>
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
                    href={links.whatsappUrl(`Hi Tropical Spa Yelahanka, I would like to book the ${pkg.duration} Traditional Thai Massage and claim the ₹1,000 welcome voucher.`)}
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
            First-time guests receive a flat ₹1,000 welcome voucher applied directly to either the 60-minute or 90-minute session.
          </p>
        </section>

        {/* 4. Who Is This Best For? */}
        <section className="service-highlights-section" aria-labelledby="ideal-for-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="ideal-for-heading">Who Is This Best For?</h2>
            <p>If you have been searching for a Thai stretching massage for flexibility near me, this dry session is ideal for:</p>
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

        {/* 5. Quick Comparison Table */}
        <section aria-labelledby="comparison-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="comparison-heading">Traditional Thai vs. Balinese vs. Deep Tissue: Quick Comparison</h2>
            <p>Undecided on which style matches how your body feels today? Compare our three most-booked full-body therapies side by side:</p>
          </div>

          <div className="pricing-table-wrap" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Traditional Thai Massage</th>
                  <th>Balinese Massage</th>
                  <th>Deep Tissue Massage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: '600', color: 'var(--clr-white)' }}>{row.feature}</td>
                    <td style={{ color: 'var(--clr-btn-bg)', fontWeight: '500' }}>{row.thai}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.balinese}</td>
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
            <p>When booking an authentic Thai massage in North Bengaluru, privacy, cleanliness, and therapist skill matter just as much as price.</p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '18px', padding: '2rem', marginBottom: '2.5rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.88)' }}>
            <p style={{ marginBottom: '1rem' }}>
              Every room at Tropical Spa is an <strong>acoustically isolated private suite with an attached hot shower, fresh towels, and sterilized linens</strong>—keeping street and hallway noise completely out of your session.
            </p>
            <p style={{ margin: 0 }}>
              You can request either a <strong>background-verified, certified male or female therapist</strong> trained in traditional Thai stretching and safe joint mobilization. Located on the 1st Floor of ACSS Complex on Doddaballapura Main Road (next to Nice Mart), we offer ample highway parking and effortless access for anyone seeking a <strong>Thai massage near Yelahanka New Town</strong>, backed by our <strong>100% money-back satisfaction guarantee</strong>.
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
            Book a 60-minute Traditional Thai Massage for ₹2,000 (standard ₹3,000) or 90 minutes for ₹3,100 (standard ₹4,100) with our 100% money-back satisfaction guarantee.
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

export default ThaiMassage;
