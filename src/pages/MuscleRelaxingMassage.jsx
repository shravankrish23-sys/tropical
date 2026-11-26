import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import muscleImg from '../assets/muscle-relaxing-spa.jpg';

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://tropicalspa.in/services/muscle-relaxing-massage/#service",
      "name": "Muscle Relaxing Massage in Yelahanka",
      "serviceType": "Full-Body Recovery & Body Pain Relief Massage",
      "url": "https://tropicalspa.in/services/muscle-relaxing-massage/",
      "description": "Medium-to-firm full-body recovery massage in Yelahanka using warm cold-pressed organic oils in acoustically isolated private suites with attached hot showers. Designed for gym soreness, DOMS recovery, stiff shoulders, and everyday body fatigue.",
      "provider": {
        "@type": "DaySpa",
        "@id": "https://tropicalspa.in/#organization",
        "name": "Tropical Spa",
        "url": "https://tropicalspa.in/",
        "telephone": "+91-95503-66963",
        "priceRange": "₹2,300 - ₹3,500",
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
          "name": "60-Minute Muscle Relaxing Massage — Standard Rate",
          "price": "2300",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/muscle-relaxing-massage/"
        },
        {
          "@type": "Offer",
          "name": "90-Minute Muscle Relaxing Massage — Standard Rate",
          "price": "3500",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/muscle-relaxing-massage/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://tropicalspa.in/services/muscle-relaxing-massage/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a Muscle Relaxing Massage cost at Tropical Spa Yelahanka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 60-minute Muscle Relaxing Massage is ₹2,300, and a 90-minute session is ₹3,500. Both options include 100% hands-on massage time, private consultation, warm cold-pressed organic oils, attached hot shower access, and complimentary herbal tea."
          }
        },
        {
          "@type": "Question",
          "name": "How is a Muscle Relaxing Massage different from Deep Tissue or Swedish massage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Swedish uses light, soothing strokes mainly for mental relaxation, while Deep Tissue uses slow, intense pressure on stubborn knots that can leave you feeling tender the next day. Our Muscle Relaxing Massage sits right in the middle—offering rhythmic medium-to-firm kneading that relieves sore muscles and stiffness without uncomfortable pain."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to book this massage for DOMS recovery after a workout or run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a massage for sore muscles and gym recovery in Yelahanka right after a heavy training session or 24 to 48 hours later when post-workout stiffness peaks. Because we use medium-to-firm rhythmic strokes rather than aggressive digging, it stays comfortable on tired legs even when you are already sore—making it an ideal DOMS recovery massage near Hebbal and Yelahanka."
          }
        },
        {
          "@type": "Question",
          "name": "Can I choose a male or female therapist, and are the therapy rooms private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We have background-verified, certified male and female therapists on staff, and you can request your preferred therapist when booking. Every session is conducted inside a fully enclosed, acoustically isolated private suite with strict modesty draping throughout."
          }
        },
        {
          "@type": "Question",
          "name": "Should I choose 60 or 90 minutes, and is the full time spent massaging?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose 60 minutes if you want a focused full-body reset for your back, shoulders, and legs, or choose 90 minutes if you have heavy soreness in multiple areas and want extra time on your lower body or upper back. Either way, your full 60 or 90 minutes is 100% hands-on massage time—check-in, showering, and herbal tea are completely separate."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an attached hot shower, and do I need to book ahead or worry about parking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every private suite includes an attached hot shower stocked with fresh towels and luxury toiletries so you can head straight back to work or home feeling fresh. We offer ample highway parking right outside ACSS Complex on Doddaballapura Main Road, and while walk-ins are welcome daily from 10:00 AM to 9:00 PM, booking via WhatsApp guarantees your preferred slot and therapist."
          }
        }
      ]
    }
  ]
};

export const MuscleRelaxingMassage = () => {
  const { links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const quickDecision = [
    { label: "Duration", value: "60 Min / 90 Min Full-Body (100% Hands-On Time)" },
    { label: "Session Rate (INR)", value: "₹2,300 (60 Min) / ₹3,500 (90 Min)" },
    { label: "Pressure & Oil Style", value: "Medium-to-Firm Recovery, Warm Cold-Pressed Organic Oil" },
    { label: "Suite Facility", value: "Acoustically Isolated Private Suite + Attached Hot Shower" }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Check-In and Sore-Spot Mapping (5 Min Pre-Session)",
      desc: "Relax in our lounge with a warm welcome towel while your therapist asks about your workout routine, desk posture, and tight areas, and helps you pick your preferred warm oil and pressure level."
    },
    {
      step: "02",
      title: "Settling In and Warm Organic Oil Application",
      desc: "Inside your acoustically isolated private suite, you rest beneath fresh, sterilized linens with full modesty draping before your therapist applies warm, cold-pressed organic oils—never cold, synthetic lotions."
    },
    {
      step: "03",
      title: "Rhythmic Medium-to-Firm Full-Body Kneading",
      desc: "Using steady, flowing strokes and deliberate thumb and palm kneading, your therapist works across your upper back, shoulders, lower back, glutes, hamstrings, and calves to release tight spots and restore easy movement."
    },
    {
      step: "04",
      title: "Attached Hot Shower and Herbal Tea",
      desc: "Rinse off at your own pace in your private attached hot shower stocked with fresh towels and toiletries, then unwind with a complimentary cup of warm herbal tea before heading back into North Bengaluru traffic."
    }
  ];

  const packages = [
    {
      duration: "60 Min",
      title: "60-Minute Muscle Relaxing Massage",
      label: "Full-Body Recovery Reset",
      price: "₹2,300",
      desc: "Full-body recovery reset for upper back, shoulders, and tired legs.",
      popular: false
    },
    {
      duration: "90 Min",
      title: "90-Minute Extended Recovery Ritual",
      label: "Unhurried Head-to-Toe Muscle Relief",
      price: "₹3,500",
      desc: "Unhurried head-to-toe muscle relief with extra focus on stubborn tight zones.",
      popular: true
    }
  ];

  const idealFor = [
    {
      title: "Gym Regulars and Weekend Runners",
      desc: "Ideal as a post workout massage in North Bangalore when squats, deadlifts, or long runs around Jakkur leave your quads, glutes, and calves feeling heavy and tight from post-exercise soreness (DOMS)."
    },
    {
      title: "Manyata Tech Park and Hebbal Commuters",
      desc: "Tailored for IT professionals and executives battling stiff necks, rounded shoulders, and lower-back aches from long laptop hours and Outer Ring Road traffic."
    },
    {
      title: "Active Parents and Everyday Movers",
      desc: "Perfect when carrying kids, household chores, or weekend errands leaves your entire body drained and sore."
    },
    {
      title: "Guests Who Dislike Sharp Deep Tissue Pressure",
      desc: "Designed for anyone seeking a true medium pressure full body massage in Bangalore that delivers lasting physical relief without next-day soreness."
    }
  ];

  const comparisonRows = [
    { feature: "Pressure Level", muscle: "Medium-to-Firm (adjustable)", deep: "Firm to Intense", swedish: "Light to Medium" },
    { feature: "Best For", muscle: "Gym recovery, full-body fatigue, everyday stiffness", deep: "Chronic knots, old posture strain, stubborn tight spots", swedish: "Mental stress relief, better sleep, gentle unwinding" },
    { feature: "Soreness After", muscle: "Little to none; feels immediately lighter", deep: "Mild tender feeling for 24–48 hours", swedish: "Zero soreness; purely soothing" },
    { feature: "Ideal Guest", muscle: "Gym-goers, runners, stiff desk workers wanting real relief", deep: "Guests who actively want strong, slow trigger-point work", swedish: "First-time spa guests seeking calm over muscle work" }
  ];

  const addOns = [
    {
      title: "Deep Tissue Massage",
      desc: "Need heavier knot work on stubborn areas? Upgrade to our Deep Tissue Massage for slower, firmer pressure built around long-standing back, neck, and shoulder tension.",
      path: "/services/deep-tissue-massage/"
    },
    {
      title: "Cupping Therapy (20 Min)",
      desc: "Looking to boost local recovery even faster? Pair your full-body session with Cupping Therapy to lift tight muscle bands along your upper back, shoulders, or legs.",
      path: "/services/cupping-therapy/"
    },
    {
      title: "Back, Neck & Shoulder Massage (30 Min)",
      desc: "Short on time between work calls? Book a targeted 30-minute Back Massage for fast upper-body relief on busy weekdays.",
      path: "/services/back-massage/"
    }
  ];

  const faqs = [
    {
      q: "How much does a Muscle Relaxing Massage cost at Tropical Spa Yelahanka?",
      a: "A 60-minute Muscle Relaxing Massage is ₹2,300, and a 90-minute session is ₹3,500. Both options include 100% hands-on massage time, private consultation, warm cold-pressed organic oils, attached hot shower access, and complimentary herbal tea."
    },
    {
      q: "How is a Muscle Relaxing Massage different from Deep Tissue or Swedish massage?",
      a: "Swedish uses light, soothing strokes mainly for mental relaxation, while Deep Tissue uses slow, intense pressure on stubborn knots that can leave you feeling tender the next day. Our Muscle Relaxing Massage sits right in the middle—offering rhythmic medium-to-firm kneading that relieves sore muscles and stiffness without uncomfortable pain."
    },
    {
      q: "When is the best time to book this massage for DOMS recovery after a workout or run?",
      a: "You can book a massage for sore muscles and gym recovery in Yelahanka right after a heavy training session or 24 to 48 hours later when post-workout stiffness peaks. Because we use medium-to-firm rhythmic strokes rather than aggressive digging, it stays comfortable on tired legs even when you are already sore—making it an ideal DOMS recovery massage near Hebbal and Yelahanka."
    },
    {
      q: "Can I choose a male or female therapist, and are the therapy rooms private?",
      a: "Yes. We have background-verified, certified male and female therapists on staff, and you can request your preferred therapist when booking. Every session is conducted inside a fully enclosed, acoustically isolated private suite with strict modesty draping throughout."
    },
    {
      q: "Should I choose 60 or 90 minutes, and is the full time spent massaging?",
      a: "Choose 60 minutes if you want a focused full-body reset for your back, shoulders, and legs, or choose 90 minutes if you have heavy soreness in multiple areas and want extra time on your lower body or upper back. Either way, your full 60 or 90 minutes is 100% hands-on massage time—check-in, showering, and herbal tea are completely separate."
    },
    {
      q: "Is there an attached hot shower, and do I need to book ahead or worry about parking?",
      a: "Yes, every private suite includes an attached hot shower stocked with fresh towels and luxury toiletries so you can head straight back to work or home feeling fresh. We offer ample highway parking right outside ACSS Complex on Doddaballapura Main Road, and while walk-ins are welcome daily from 10:00 AM to 9:00 PM, booking via WhatsApp guarantees your preferred slot and therapist."
    }
  ];

  const whatsappBookingMsg = "Hi Tropical Spa Yelahanka, I would like to book the Muscle Relaxing Massage.";

  return (
    <div>
      <SeoMeta
        title="Muscle Relaxing Massage in Yelahanka ₹2,300 | Tropical Spa"
        description="Medium-to-firm full-body recovery massage on Doddaballapura Rd, Yelahanka. Ease gym soreness & stiffness from ₹2,300. Book on WhatsApp now."
        canonical="https://tropicalspa.in/services/muscle-relaxing-massage/"
        schema={pageSchema}
      />

      <div className="page-container">

        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="muscle-relax-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Medium-to-Firm Full-Body Recovery | Yelahanka
            </div>

            <h1 id="muscle-relax-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Muscle Relaxing Massage in Yelahanka for Full-Body Recovery
            </h1>

            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Whether you are nursing heavy leg-day soreness, post-run tightness, or whole-body fatigue after a 50-hour work week, our <strong>muscle relaxing massage in Yelahanka</strong> gives your body real relief without the bruising pressure of an intense Deep Tissue session.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Positioned right in the sweet spot between light, sleepy Swedish strokes and deep knot-breaking bodywork, this medium-to-firm <strong>full body recovery massage in Bengaluru</strong> flushes out built-up tension so you walk out feeling lighter, looser, and ready to move.
            </p>

            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button
                href={links.whatsappUrl(whatsappBookingMsg)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(158, 184, 117, 0.25)' }}
              >
                Book Muscle Relaxing Massage on WhatsApp
              </Button>
            </div>
          </div>

          <div className="service-image-holder">
            <picture>
              <source type="image/jpeg" srcSet={muscleImg} />
              <img
                src={muscleImg}
                alt="Muscle Relaxing Massage treatment suite with warm herbal oils at Tropical Spa Yelahanka"
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

        {/* 2. What to Expect During Your Recovery Session */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>What to Expect During Your Recovery Session</h2>
            <p>Your booked 60 or 90 minutes is 100% hands-on table time—your consultation, hot shower, and tea time never eat into your massage.</p>
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
            <p>Upfront, neighbourhood-friendly rates for luxury private-suite recovery—with zero surprise deductions from your table time.</p>
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
                    <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--clr-white)' }}>{pkg.price}</span>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.72)' }}>Standard Rate</span>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.82)', lineHeight: '1.6', marginBottom: '2rem' }}>{pkg.desc}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <Button
                    href={links.whatsappUrl(`Hi Tropical Spa Yelahanka, I would like to book the ${pkg.duration} Muscle Relaxing Massage (${pkg.price}).`)}
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
            *Note: The ₹1,000 first-visit welcome voucher is not applicable to Muscle Relaxing Massage. All sessions include private consultation, warm organic oils, attached hot shower, and herbal tea.*
          </p>
        </section>

        {/* 4. Who Is This Best For? */}
        <section className="service-highlights-section" aria-labelledby="ideal-for-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="ideal-for-heading">Who Is This Best For?</h2>
            <p>If you are searching for a dependable body pain relief massage in Yelahanka, this therapy is built around real North Bengaluru routines:</p>
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

        {/* 5. Quick Decision Guide Comparison */}
        <section aria-labelledby="comparison-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="comparison-heading">Quick Decision Guide: Which Massage Should You Book?</h2>
            <p>Unsure which therapy fits your body today? Compare how our three most popular full-body sessions feel on the table:</p>
          </div>

          <div className="pricing-table-wrap" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Muscle Relaxing Massage</th>
                  <th>Deep Tissue Massage</th>
                  <th>Swedish Massage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: '600', color: 'var(--clr-white)' }}>{row.feature}</td>
                    <td style={{ color: 'var(--clr-btn-bg)', fontWeight: '500' }}>{row.muscle}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.deep}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.swedish}</td>
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
            <p>Located on the 1st Floor of ACSS Complex on Doddaballapura Main Road next to Nice Mart.</p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '18px', padding: '2rem', marginBottom: '2.5rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.88)' }}>
            <p style={{ marginBottom: '1rem' }}>
              Tropical Spa is an easy drive from Yelahanka New Town, Sahakaranagar, Jakkur, Hebbal, Vidyaranyapura, and Manyata Tech Park. You never have to circle residential lanes for a spot—we offer <strong>ample highway parking right outside</strong>.
            </p>
            <p style={{ margin: 0 }}>
              Every session takes place inside an <strong>acoustically isolated private suite with an attached hot shower, sterilized linens, and warm cold-pressed organic oils</strong>, delivered by <strong>background-verified, certified male and female therapists</strong>. Best of all, your visit is backed by our <strong>100% money-back satisfaction guarantee</strong>—if you are not happy with your session, you do not pay. Open daily from 10:00 AM to 9:00 PM.
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

export default MuscleRelaxingMassage;
