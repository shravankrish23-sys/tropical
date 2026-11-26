import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import aromaImg from '../assets/aromatherapy-spa.jpg';

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DaySpa",
      "@id": "https://tropicalspa.in/#organization",
      "name": "Tropical Spa",
      "url": "https://tropicalspa.in/",
      "telephone": "+91-95503-66963",
      "email": "tropicalventures23@gmail.com",
      "priceRange": "₹1,800 - ₹4,100",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart, Yelahanka",
        "addressLocality": "Bengaluru",
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
      ],
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Acoustically Isolated Private Therapy Suites", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Attached Private Hot Showers", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Ample Highway Parking", "value": true }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://tropicalspa.in/services/aromatherapy-massage/#service",
      "name": "Aromatherapy Massage in Yelahanka",
      "alternateName": [
        "Aroma Oil Massage Yelahanka",
        "Essential Oil Massage Bangalore"
      ],
      "serviceType": "Aromatherapy Massage",
      "description": "Calming full-body aromatherapy massage in Yelahanka using 100% pure essential oils (French Lavender, Crisp Eucalyptus, Sweet Orange, Chamomile & Frangipani) diluted into warm cold-pressed sweet almond or jojoba carrier oils inside acoustically isolated private suites with attached hot showers.",
      "url": "https://tropicalspa.in/services/aromatherapy-massage/",
      "provider": { "@id": "https://tropicalspa.in/#organization" },
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
          "name": "60-Minute Aromatherapy Massage — First-Visit Rate (After ₹1,000 Welcome Voucher)",
          "price": "1800",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/aromatherapy-massage/",
          "description": "First-time guest offer: full 60 minutes of hands-on aromatherapy oil massage in a private attached-shower suite after applying the ₹1,000 welcome voucher."
        },
        {
          "@type": "Offer",
          "name": "60-Minute Aromatherapy Massage — Standard Rate",
          "price": "2800",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/aromatherapy-massage/",
          "description": "Full 60 minutes of hands-on aromatherapy oil massage with pure essential oils, private attached hot shower, and complimentary herbal tea."
        },
        {
          "@type": "Offer",
          "name": "90-Minute Aromatherapy Massage — First-Visit Rate (After ₹1,000 Welcome Voucher)",
          "price": "3100",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/aromatherapy-massage/",
          "description": "First-time guest offer: full 90 minutes of hands-on aromatherapy oil massage with extended scalp, neck, and foot attention after applying the ₹1,000 welcome voucher."
        },
        {
          "@type": "Offer",
          "name": "90-Minute Aromatherapy Massage — Standard Rate",
          "price": "4100",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://tropicalspa.in/services/aromatherapy-massage/",
          "description": "Full 90 minutes of hands-on aromatherapy oil massage with pure essential oils, private attached hot shower, and complimentary herbal tea."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://tropicalspa.in/services/aromatherapy-massage/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does an Aromatherapy Massage cost at Tropical Spa Yelahanka, and how does the ₹1,000 voucher work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our standard Aromatherapy Massage rates are ₹2,800 for 60 minutes and ₹4,100 for 90 minutes. First-time guests receive a flat ₹1,000 Welcome Voucher when booking via WhatsApp or phone, bringing your first-visit rate down to ₹1,800 for 60 minutes or ₹3,100 for 90 minutes, with our 100% money-back satisfaction guarantee included."
          }
        },
        {
          "@type": "Question",
          "name": "What carrier oils do you use, and is Aromatherapy Massage safe for sensitive skin or nut allergies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We dilute our 100% pure essential oils—French Lavender, Crisp Eucalyptus, Sweet Orange, and Chamomile & Frangipani—into warm, cold-pressed sweet almond or jojoba carrier oil, with no harsh mineral oils or artificial perfumes. If you have sensitive skin or a nut allergy, let your therapist know during your welcome consultation so we can use gentle jojoba oil, soften the scent strength, or perform a quick skin-comfort check first."
          }
        },
        {
          "@type": "Question",
          "name": "How firm is the massage pressure, what should I wear, and is there a private shower in the room?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aromatherapy Massage uses smooth, light-to-medium flowing strokes designed for deep calm without soreness, and your therapist checks in so you can ask for gentler or slightly firmer pressure anytime. Arrive in comfortable everyday clothes; we provide disposable spa undergarments, follow strict full-body draping for modesty, and every private suite includes an attached hot shower with fresh towels and luxury toiletries."
          }
        },
        {
          "@type": "Question",
          "name": "Can I choose a male or female therapist, and how private are the therapy suites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Tropical Spa has background-verified, certified male and female therapists, and you can request your preferred therapist when booking your slot. Every session takes place inside an acoustically isolated private suite with its own attached hot shower so you enjoy complete quiet and privacy."
          }
        },
        {
          "@type": "Question",
          "name": "Should I choose a 60-minute or 90-minute session, and does shower time cut into my massage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose 60 minutes for a thorough full-body reset, or 90 minutes if you want a slower pace with extra time on your scalp, neck, shoulders, and feet—especially helpful for restless sleep and heavy work burnout. Your scent consultation, changing time, private hot shower, and complimentary herbal tea are completely separate, so you always receive the full 60 or 90 minutes of hands-on massage."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an advance appointment, and is parking available on Doddaballapura Main Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are open daily from 10:00 AM to 9:00 PM, and while walk-ins are welcome when suites are open, booking ahead via WhatsApp or call at +91 95503 66963 is recommended for evenings and weekends. We are located on the 1st Floor of Building No. 1, ACSS Complex, Doddaballapura Main Rd (next to Nice Mart) in Yelahanka, with ample highway parking directly outside."
          }
        }
      ]
    }
  ]
};

export const AromaTherapy = () => {
  const { links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const quickDecision = [
    { label: "Duration", value: "60 Min or 90 Min (Full Hands-On Therapy Time)" },
    { label: "Starting Price (INR)", value: "₹1,800 First Visit* (Standard ₹2,800 | After ₹1,000 Welcome Voucher)" },
    { label: "Pressure & Oil Style", value: "Light-to-Medium Flowing Strokes (Pure Essential Oils in Warm Cold-Pressed Sweet Almond or Jojoba Oil)" },
    { label: "Suite Facility", value: "Sound-Isolated Private Suite (Attached Hot Shower, Fresh Linens & Herbal Tea)" }
  ];

  const essentialOils = [
    {
      blend: "French Lavender",
      character: "Soft, floral, deeply soothing",
      benefits: "Quiets racing thoughts, softens evening stress, and makes an ideal lavender oil massage for better sleep in Bangalore."
    },
    {
      blend: "Crisp Eucalyptus",
      character: "Cool, clean, herbaceous",
      benefits: "Clears stuffy airways for sinus relief, lifts mental fatigue, and refreshes tired daily commuters."
    },
    {
      blend: "Sweet Orange",
      character: "Bright, sunny, lightly citrus",
      benefits: "Lifts low moods, clears midday sluggishness, and restores natural energy without feeling wired."
    },
    {
      blend: "Chamomile & Frangipani",
      character: "Delicate, warm, tropical floral",
      benefits: "Brings gentle anxiety relief while soothing dry, sensitive, or weather-stressed skin."
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Aromatic Welcome & Scent Discovery",
      desc: "Relax in our lounge with a welcome drink and warm towel while your therapist asks about your stress level, sleep, and skin sensitivities before guiding your essential oil choice."
    },
    {
      step: "02",
      title: "Private Sound-Isolated Suite",
      desc: "Enter your climate-controlled suite with soft lighting and quiet music. You change in full privacy, and your therapist uses respectful full-body draping so only the area being massaged is uncovered."
    },
    {
      step: "03",
      title: "Full 60 or 90 Minutes of Flowing Oil Therapy",
      desc: "Warm, scented botanical oil is worked across your back, shoulders, neck, arms, and legs with smooth, rhythmic strokes. Consultation, changing, and shower time happen outside your therapy clock—so you always get the full 60 or 90 minutes of hands-on massage."
    },
    {
      step: "04",
      title: "Attached Hot Shower & Herbal Tea",
      desc: "Refresh at your own pace in your suite's attached hot shower with fresh towels and luxury toiletries, then finish with complimentary herbal tea."
    }
  ];

  const packages = [
    {
      duration: "60 Minutes",
      title: "60-Minute Aromatherapy Massage",
      label: "Full-Body Stress Reset",
      basePrice: "₹2,800",
      firstVisitPrice: "₹1,800*",
      desc: "Full-body stress reset, calm mind, shoulder and neck ease.",
      popular: false
    },
    {
      duration: "90 Minutes",
      title: "90-Minute Extended Aromatherapy Ritual",
      label: "Deep Sleep Prep & Slower Pace",
      basePrice: "₹4,100",
      firstVisitPrice: "₹3,100*",
      desc: "Deep sleep prep, slower full-body pace + extra scalp, neck, and foot attention.",
      popular: true
    }
  ];

  const idealFor = [
    {
      title: "Stressed IT & Corporate Professionals",
      desc: "Unwinding from Manyata Tech Park or Hebbal workdays filled with screen fatigue, headaches, and tight shoulders."
    },
    {
      title: "Light or Restless Sleepers",
      desc: "Anyone who lies awake replaying the day and wants a soothing evening ritual for deeper sleep."
    },
    {
      title: "First-Time Spa Guests",
      desc: "Looking for a gentle aroma oil massage in Yelahanka with light-to-medium pressure and zero next-day soreness."
    },
    {
      title: "Sinus-Tired Commuters & Travelers",
      desc: "Seeking crisp eucalyptus clarity after dusty commutes, weather shifts, or long flights."
    },
    {
      title: "Guests Wanting Soft, Hydrated Skin",
      desc: "Warm cold-pressed sweet almond and jojoba oils leave dry skin noticeably smooth and glowing."
    }
  ];

  const comparisonRows = [
    { feature: "Pressure Level", aroma: "Light to medium (gentle, flowing)", swedish: "Light to medium (long strokes + light kneading)", balinese: "Medium to firm (deeper kneading + gentle stretches)" },
    { feature: "Oil & Scent", aroma: "Custom pure essential oil blend in warm almond or jojoba oil", swedish: "Warm nourishing oil with mild or neutral scent", balinese: "Warm aromatic botanical oil blend" },
    { feature: "Primary Goal", aroma: "Mental calm, anxiety relief, better sleep, hydrated skin", swedish: "Everyday tiredness and gentle muscle ease", balinese: "Deeper back and shoulder release with full-body calm" },
    { feature: "Best Choice If…", aroma: "Scent, peace of mind, and restful sleep matter most", swedish: "You want classic physical relaxation without strong scents", balinese: "You prefer firmer work than Aromatherapy without intense deep-tissue pressure" }
  ];

  const addOns = [
    {
      title: "Swedish Massage",
      desc: "Prefer classic full-body relaxation with long gliding strokes and a mild or unscented warm oil? Our Swedish Massage focuses purely on soothing tired muscles.",
      path: "/services/swedish-massage/"
    },
    {
      title: "Body Polish (30 Min)",
      desc: "Pair your visit into our signature \"Body Polish + Aromatherapy\" glow bundle—a 30-minute botanical buffing treatment that lifts dry skin before your warm oil massage.",
      path: "/services/body-polish/"
    },
    {
      title: "Couples & Jacuzzi Retreat",
      desc: "Unwind side by side in our sound-isolated double suite with synchronized aromatherapy massages, warm herbal steam, and a private Jacuzzi soak.",
      path: "/services/couples-massage/"
    }
  ];

  const faqs = [
    {
      q: "How much does an Aromatherapy Massage cost at Tropical Spa Yelahanka, and how does the ₹1,000 voucher work?",
      a: "Our standard Aromatherapy Massage rates are ₹2,800 for 60 minutes and ₹4,100 for 90 minutes. First-time guests receive a flat ₹1,000 Welcome Voucher when booking via WhatsApp or phone, bringing your first-visit rate down to ₹1,800 for 60 minutes or ₹3,100 for 90 minutes, with our 100% money-back satisfaction guarantee included."
    },
    {
      q: "What carrier oils do you use, and is Aromatherapy Massage safe for sensitive skin or nut allergies?",
      a: "We dilute our 100% pure essential oils—French Lavender, Crisp Eucalyptus, Sweet Orange, and Chamomile & Frangipani—into warm, cold-pressed sweet almond or jojoba carrier oil, with no harsh mineral oils or artificial perfumes. If you have sensitive skin or a nut allergy, let your therapist know during your welcome consultation so we can use gentle jojoba oil, soften the scent strength, or perform a quick skin-comfort check first."
    },
    {
      q: "How firm is the massage pressure, what should I wear, and is there a private shower in the room?",
      a: "Aromatherapy Massage uses smooth, light-to-medium flowing strokes designed for deep calm without soreness, and your therapist checks in so you can ask for gentler or slightly firmer pressure anytime. Arrive in comfortable everyday clothes; we provide disposable spa undergarments, follow strict full-body draping for modesty, and every private suite includes an attached hot shower with fresh towels and luxury toiletries."
    },
    {
      q: "Can I choose a male or female therapist, and how private are the therapy suites?",
      a: "Yes, Tropical Spa has background-verified, certified male and female therapists, and you can request your preferred therapist when booking your slot. Every session takes place inside an acoustically isolated private suite with its own attached hot shower so you enjoy complete quiet and privacy."
    },
    {
      q: "Should I choose a 60-minute or 90-minute session, and does shower time cut into my massage?",
      a: "Choose 60 minutes for a thorough full-body reset, or 90 minutes if you want a slower pace with extra time on your scalp, neck, shoulders, and feet—especially helpful for restless sleep and heavy work burnout. Your scent consultation, changing time, private hot shower, and complimentary herbal tea are completely separate, so you always receive the full 60 or 90 minutes of hands-on massage."
    },
    {
      q: "Do I need an advance appointment, and is parking available on Doddaballapura Main Road?",
      a: "We are open daily from 10:00 AM to 9:00 PM, and while walk-ins are welcome when suites are open, booking ahead via WhatsApp or call at +91 95503 66963 is recommended for evenings and weekends. We are located on the 1st Floor of Building No. 1, ACSS Complex, Doddaballapura Main Rd (next to Nice Mart) in Yelahanka, with ample highway parking directly outside."
    }
  ];

  const whatsappBookingMsg = "Hi Tropical Spa Yelahanka! I'd like to book an Aromatherapy Massage and claim the ₹1,000 welcome voucher (first-visit rate starting at ₹1,800). Please share available slots today.";

  return (
    <div>
      <SeoMeta
        title="Aromatherapy Massage in Yelahanka ₹1,800* | Tropical Spa"
        description="Ease stress & sleep deeper with pure essential oils on Doddaballapura Rd, Yelahanka. Claim your ₹1,000 welcome voucher (₹1,800*)—book on WhatsApp now!"
        canonical="https://tropicalspa.in/services/aromatherapy-massage/"
        schema={pageSchema}
      />

      <div className="page-container">

        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="aroma-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Pure Essential Oil Therapy | Yelahanka
            </div>

            <h1 id="aroma-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Aromatherapy Massage in Yelahanka — Pure Essential Oil Therapy for Deep Calm &amp; Better Sleep
            </h1>

            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Long hours in front of screens, North Bengaluru traffic, and late-night work pings leave more than tired shoulders—they leave your mind buzzing long after your head hits the pillow. Our <strong>aromatherapy massage in Yelahanka</strong> pairs unhurried, flowing full-body strokes with 100% pure essential oils to melt away mental burnout, ease everyday anxiety, and help you drift into deep, restful sleep.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Whether you need a trusted <strong>stress relief spa in North Bengaluru</strong> after a demanding week or a gentle <strong>essential oil massage in Bangalore</strong> that leaves your skin soft and glowing, Tropical Spa welcomes you into a quiet sanctuary on Doddaballapura Main Road.
            </p>

            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button
                href={links.whatsappUrl(whatsappBookingMsg)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(158, 184, 117, 0.25)' }}
              >
                Claim ₹1,000 Voucher &amp; Book Aromatherapy on WhatsApp &rarr;
              </Button>
            </div>
          </div>

          <div className="service-image-holder">
            <picture>
              <source type="image/jpeg" srcSet={aromaImg} />
              <img
                src={aromaImg}
                alt="Aromatherapy massage pure essential oils and warm towels at Tropical Spa Yelahanka"
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

        {/* Choose Your Essential Oil Blend */}
        <section aria-labelledby="oils-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="oils-heading">Choose Your Essential Oil Blend</h2>
            <p>Every session begins with a personal scent discovery, never a generic bottle. You sample our pure, therapeutic-grade plant oils, and your therapist blends your choice fresh into warm, cold-pressed sweet almond or jojoba carrier oil.</p>
          </div>

          <div className="pricing-table-wrap" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Essential Oil Blend</th>
                  <th>Scent Character</th>
                  <th>Plain-Language Benefits</th>
                </tr>
              </thead>
              <tbody>
                {essentialOils.map((oil, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: '700', color: 'var(--clr-btn-bg)' }}>{oil.blend}</td>
                    <td style={{ color: 'var(--clr-white)' }}>{oil.character}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6' }}>{oil.benefits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. What to Expect: Step-by-Step Aromatherapy Ritual */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>What to Expect: Your Step-by-Step Aromatherapy Ritual</h2>
            <p>From the moment you step inside, everything moves at a calm, unhurried pace so you can switch off completely:</p>
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

        {/* 3. Aromatherapy Massage Price in Yelahanka & Session Durations */}
        <section aria-labelledby="pricing-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="pricing-heading">Aromatherapy Massage Price in Yelahanka &amp; Session Durations</h2>
            <p>Our aromatherapy massage price in Yelahanka is transparent and upfront, with no surprise add-ons for essential oils or private suite amenities. First-time guests receive a flat ₹1,000 Welcome Voucher, bringing a 60-minute luxury suite session down to ₹1,800.</p>
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
                    href={links.whatsappUrl(`Hi Tropical Spa Yelahanka! I'd like to book a ${pkg.duration} Aromatherapy Massage and claim the ₹1,000 welcome voucher.`)}
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
            *The ₹1,000 welcome voucher applies to your first 60-minute or 90-minute Aromatherapy session. Every visit includes our 100% money-back satisfaction guarantee.
          </p>
        </section>

        {/* 4. Who Is This Aromatherapy Massage Best For? */}
        <section className="service-highlights-section" aria-labelledby="ideal-for-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="ideal-for-heading">Who Is This Aromatherapy Massage Best For?</h2>
            <p>Tailored for calm minds, restful sleep, and soft, nourished skin:</p>
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

        {/* 5. Aromatherapy vs. Swedish vs. Balinese Massage — Quick Comparison */}
        <section aria-labelledby="comparison-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="comparison-heading">Aromatherapy vs. Swedish vs. Balinese Massage — Quick Comparison</h2>
            <p>Undecided between our relaxing full-body oil therapies? Compare them at a glance:</p>
          </div>

          <div className="pricing-table-wrap" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Aromatherapy Massage</th>
                  <th>Swedish Massage</th>
                  <th>Balinese Massage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: '600', color: 'var(--clr-white)' }}>{row.feature}</td>
                    <td style={{ color: 'var(--clr-btn-bg)', fontWeight: '500' }}>{row.aroma}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.swedish}</td>
                    <td style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{row.balinese}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Why Choose Tropical Spa Yelahanka? & Complementary Therapies */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>Why Choose Tropical Spa Yelahanka?</h2>
            <p>Skip noisy salon cubicles and rushed timers.</p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '18px', padding: '2rem', marginBottom: '2.5rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.88)' }}>
            <p style={{ marginBottom: '1rem' }}>
              Every room at Tropical Spa is an <strong>acoustically isolated private suite with an attached hot shower, sanitized fresh linens, and warm hospitality</strong>. Our <strong>background-verified, certified male and female therapists</strong> tailor every stroke to your comfort, backed by a <strong>100% money-back satisfaction guarantee</strong>.
            </p>
            <p style={{ margin: 0 }}>
              Booking a calming full body oil massage near Yelahanka New Town is effortless. Visit us at 1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd (next to Nice Mart), Yelahanka, with <strong>ample highway parking right outside</strong>. We are under 5 minutes from Yelahanka New Town, roughly 7–12 minutes in light traffic from Sahakaranagar and Vidyaranyapura, and a straightforward drive from Jakkur, Hebbal, and Manyata Tech Park. Open daily 10:00 AM – 9:00 PM.
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
            Claim Your ₹1,000 Welcome Voucher
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '650px', margin: '0 auto 1.5rem', lineHeight: '1.6', fontSize: '1rem' }}>
            Book a 60-minute Aromatherapy Massage for ₹1,800 (standard ₹2,800) or 90 minutes for ₹3,100 (standard ₹4,100) with our 100% money-back satisfaction guarantee.
          </p>
          <a
            href={links.whatsappUrl(whatsappBookingMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
          >
            Claim ₹1,000 Voucher &amp; Book Aromatherapy on WhatsApp &rarr;
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

export default AromaTherapy;
