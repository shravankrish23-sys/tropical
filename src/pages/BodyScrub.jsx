import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import scrubImg from '../assets/body-scrub-spa.jpg';

export const BodyScrub = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Steam Preparation",
      title: "Warm Steam-Infused Towels & Pore Softening",
      desc: "At Tropical Spa Yelahanka, our Body Scrub protocol is performed with expert precision and meticulous care. Your ritual unfolds in a warm, private therapy suite prepared with soft lighting and soothing background melodies. Your therapist begins by cleansing your skin with warm, steam-infused towels to relax the pores and soften hyper-keratinized tissue layers."
    },
    {
      badge: "Granular Buffing & Boreh Spices",
      title: "Circular Friction Glides & Balinese Warming Paste",
      desc: "Next, a generous application of your chosen natural abrasive medium—blended into a light botanical oil or gel base—is smoothed over your body. Your therapist executes firm, rhythmic circular friction glides, systematically working across your back, shoulders, arms, legs, and feet. Special attention is directed toward thicker skin areas prone to roughness, such as the elbows, knees, and heels, while strictly avoiding delicate endangerment sites, active skin breakouts, or facial areas. For guests selecting our signature Balinese Boreh scrub, a traditional warming paste made from ground rice powder, ginger, cloves, cinnamon, and nutmeg is applied to stimulate deep tissue heat and soothe muscle chills."
    },
    {
      badge: "Dermal Physiology",
      title: "Stratum Corneum Desquamation & Capillary Hyperemia",
      desc: "The scientific mechanism of a body scrub relies on mechanical desquamation and microvascular stimulation. By physically lifting the dense outer stratum corneum layer and clearing follicular pores, the scrub removes trapped sebum, sweat residues, and environmental micro-pollutants. The circular friction induces cutaneous capillary hyperemia—a healthy, localized surge of oxygenated blood flow to the skin's surface. Following a warm hydrotherapy shower or steam rinse to thoroughly wash away scrub granules, a light, hydrating botanical lotion or nourishing oil is massaged into your fresh skin, locking in lasting hydration."
    }
  ];

  const highlights = [
    {
      title: "1. Deep Follicular Cleansing & Pore Unclogging",
      desc: "Coarse natural abrasives mechanically lift surface impurities, excess sebum, and environmental pollutants, clearing congested pores and preventing acne and ingrown hairs.",
      featured: true
    },
    {
      title: "2. Intense Mechanical Exfoliation for Rough Skin",
      desc: "Sloughs away thick, hardened layers of dead corneocytes, instantly smoothing rough texture on elbows, knees, and heels to leave your skin soft and unblemished."
    },
    {
      title: "3. Stimulated Microvascular Blood Flow & Radiant Glow",
      desc: "Rhythmic circular friction triggers cutaneous capillary vasodilation, flooding surface skin tissues with fresh oxygen and vital nutrients for an unmistakable, healthy glow."
    },
    {
      title: "4. Traditional Deep Heat Relief (Balinese Boreh)",
      desc: "Our traditional spice scrub infusion delivers natural thermogenic warmth from ginger, cloves, and cinnamon, helping ease deep muscle stiffness, joint chills, and physical fatigue."
    },
    {
      title: "5. Enhanced Absorption of Hydrating Topicals",
      desc: "Removing the barrier of dead surface skin cells maximizes the transdermal absorption rate of post-scrub lotions and botanical oils, keeping your skin deeply conditioned."
    }
  ];

  const packages = [
    { 
      duration: "45-Minute Session", 
      title: "45-Minute Express Invigorating Body Scrub",
      label: "Deep Pore Cleansing & Exfoliation",
      desc: "A focused full-body exfoliation treatment followed by a warm hydrotherapy shower rinse and a light, hydrating moisturizer lock. Ideal for a quick skin refresh or pre-event glow.",
      popular: false
    },
    { 
      duration: "75-Minute Ritual", 
      title: "75-Minute Deluxe Scrub & Relaxation Massage Fusion",
      label: "Ultimate Exfoliation & Somatic Escape",
      desc: "Our recommended signature package. This extended ritual combines a thorough full-body exfoliating scrub, warm hydrotherapy rinse, and a soothing 45-minute Swedish or Aromatherapy relaxation massage with warm botanical oils.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Welcoming Intake & Scrub Selection",
      desc: "You are greeted in our tranquil lounge with a refreshing towel and beverage. You will complete a brief consultation with your therapist to evaluate your skin type, discuss sensitivity levels, and select your preferred scrub medium."
    },
    {
      step: "02",
      title: "Private Suite Setup & Modesty Draping",
      desc: "You will be escorted to a private therapy suite equipped with soft lighting, warm linens, and a private shower facility. You disrobe in total privacy; disposable spa undergarments are provided for your comfort. Our therapists strictly observe international draping protocols throughout the service."
    },
    {
      step: "03",
      title: "The Exfoliation & Hydrotherapy Journey",
      desc: "Your therapist applies the scrub using rhythmic circular movements, followed by a relaxing, warm hydrotherapy shower to rinse away all exfoliant particles. The session concludes with a soothing application of hydrating lotion massaged into your freshly revealed skin."
    },
    {
      step: "04",
      title: "Post-Therapy Tea & Relaxation Lounge",
      desc: "Following your session, you are given time to dress comfortably before enjoying a warm cup of organic chamomile or ginger herbal tea in our relaxation lounge, leaving you feeling revitalized, silky-smooth, and deeply relaxed."
    }
  ];

  const faqs = [
    {
      q: "What is the main difference between a Body Scrub and a Body Polish at Tropical Spa Yelahanka?",
      a: "A Body Scrub uses coarse, granular abrasives (such as sea salt, raw sugar, ground coffee, or spiced Boreh paste) for deep, invigorating exfoliation and pore unclogging—ideal for normal, rough, or oily skin. A Body Polish uses ultra-fine micro-particulates suspended in a rich cream or oil base for a gentler, highly moisturizing treatment tailored for dry or sensitive skin."
    },
    {
      q: "How frequently should I get a Body Scrub at Tropical Spa?",
      a: "Because a Body Scrub provides deep physical exfoliation, we recommend scheduling a session once every 1 to 2 weeks for normal or oily skin, or once a month for maintaining smooth skin texture without over-scrubbing or irritating your natural dermal barrier."
    },
    {
      q: "What is the Balinese Boreh Body Scrub, and who is it best for?",
      a: "Boreh is a traditional Indonesian herbal paste crafted from ground rice, ginger, cloves, nutmeg, and cinnamon. When applied to the body, it produces a deeply warming, tingling sensation that stimulates circulation, relieves muscle chills, and soothes tiredness—making it perfect for rainy days, post-commute fatigue, or sore muscles."
    },
    {
      q: "Where is Tropical Spa located in Yelahanka, and is parking available?",
      a: "Tropical Spa is conveniently located in central Yelahanka, North Bengaluru, with quick access from Yelahanka New Town, Kogilu Cross, Judicial Layout, and Bellary Road. We provide dedicated, hassle-free parking facilities for all our guests, ensuring a seamless and stress-free visit."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Body Scrub in Yelahanka, Bengaluru | Tropical Spa"
        description="Deeply cleanse pores, slough away dead skin cells, and experience traditional Balinese Boreh warming scrub at Tropical Spa Yelahanka. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/body-scrub/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="scrub-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Invigorating Dermal Exfoliation &amp; Deep Pore Renewal | Yelahanka
            </div>
            
            <h1 id="scrub-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Body Scrub in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Step into an invigorating sanctuary of deep dermal renewal, radiant skin health, and luxurious escape at <strong>Tropical Spa</strong>, North Bengaluru’s premier destination for advanced body care, holistic wellness, and peaceful rejuvenation. If you are searching for an exceptional <strong>spa in Yelahanka</strong> to shed dull, tired skin and escape the environmental pollutants of city life, our tranquil haven offers an idyllic retreat. Conveniently situated to serve guests across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by discerning individuals seeking the finest body exfoliations and restorative <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Our Body Scrub treatment is an energizing, full-body exfoliation ritual designed to deeply cleanse pores, slough away dense dead skin cells, and stimulate vibrant cutaneous blood flow. Utilizing coarse, natural exfoliants—such as Dead Sea salts, raw cane sugar, organic ground coffee, or our traditional Balinese <em>Boreh</em> warming herbal paste—this treatment transforms rough, uneven skin into a silky-smooth canvas. Whether you are seeking relief from daily urban fatigue, counteracting pollution from commutes along Bellary Road, or preparing your skin for deep moisture absorption, Tropical Spa invites you to experience a deeply refreshing, head-to-toe skin transformation.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Body Scrub treatment.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.9rem 2.5rem', fontSize: '1.1rem', boxShadow: '0 8px 24px rgba(158, 184, 117, 0.25)' }}
              >
                Book Now
              </Button>
            </div>
          </div>
          
          <div className="service-image-holder">
            <picture>
              <source type="image/jpeg" srcSet={scrubImg} />
              <img 
                src={scrubImg} 
                alt="Invigorating Body Scrub setup with pink Himalayan salt, organic coffee grounds, and traditional Boreh spices at Tropical Spa Yelahanka" 
                loading="lazy"
                decoding="async"
                width="480"
                height="400"
              />
            </picture>
          </div>
        </section>

        {/* 2. Detailed Technique & The Experience (3 Visual Pillars) */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>Detailed Technique &amp; The Experience</h2>
            <p>Steam preparation, coarse natural abrasives, Balinese Boreh spices, and cutaneous hyperemia.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.8rem' }}>
            {pillars.map((p, i) => (
              <div 
                key={i} 
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(20, 28, 21, 0.6) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '18px',
                  padding: '2.2rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--clr-btn-bg)', fontWeight: '700', marginBottom: '0.6rem' }}>
                  {p.badge}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--clr-white)', marginBottom: '1rem', lineHeight: '1.3' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.85)', margin: 0, flex: 1 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Key Restorative Benefits */}
        <section className="service-highlights-section" aria-labelledby="benefits-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="benefits-heading">Key Restorative Benefits</h2>
            <p>Deep pore unclogging, dense dead skin removal, and natural thermogenic relief.</p>
          </div>

          <div className="highlights-grid">
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className="highlight-card"
                style={item.featured ? { gridColumn: 'span 1' } : {}}
              >
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

        {/* 4. Therapy Durations & Pricing Structure */}
        <section aria-labelledby="pricing-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="pricing-heading">Therapy Durations &amp; Pricing Structure</h2>
            <p>To help you customize your visit to Tropical Spa Yelahanka, we offer tailored session durations designed around your schedule and skin renewal goals:</p>
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
                    ✦ Signature Package
                  </div>
                )}
                
                <div>
                  <div className="price-duration">{pkg.duration}</div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--clr-white)', marginBottom: '0.4rem' }}>{pkg.title}</h3>
                  <div style={{ color: 'var(--clr-btn-bg)', fontSize: '0.92rem', fontWeight: '600', marginBottom: '1.2rem' }}>{pkg.label}</div>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.82)', lineHeight: '1.6', marginBottom: '2rem' }}>{pkg.desc}</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <Link 
                    to="/pricing/" 
                    className="btn"
                    style={{ width: '100%', minHeight: '46px', fontSize: '0.95rem' }}
                  >
                    Click to See Price &amp; Tariffs &rarr;
                  </Link>
                  <Button 
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Body Scrub.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-outline"
                    style={{ width: '100%', minHeight: '40px', fontSize: '0.9rem' }}
                  >
                    Book on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1.8rem' }}>
            *All pricing includes a private intake consultation, choice of natural scrub medium (Boreh, sea salt, coffee, or raw sugar), hydrotherapy rinse, and post-session organic herbal tea service.*
          </p>
        </section>

        {/* 5. Luxury Gift Voucher Incentive */}
        <section style={{ marginBottom: '4.5rem', background: 'linear-gradient(135deg, rgba(20, 28, 21, 0.95) 0%, rgba(30, 40, 31, 0.9) 100%)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '2.5rem 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'var(--clr-btn-bg)', color: 'var(--clr-btn-text)', padding: '0.35rem 1rem', borderRadius: '16px', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.06em' }}>
            🎁 Special Welcome Voucher
          </div>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--clr-white)', marginBottom: '0.8rem' }}>
            Claim Your ₹1,000 Special Gift Voucher
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '650px', margin: '0 auto 1.5rem', lineHeight: '1.6', fontSize: '1rem' }}>
            Experience our certified therapists, premium private suites, and complimentary beverages with our 100% money-back satisfaction guarantee.
          </p>
          <a
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Body Scrub appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
          >
            Claim ₹1,000 Voucher on WhatsApp
          </a>
        </section>

        {/* 6. What to Expect & Session Journey */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>What to Expect &amp; Session Journey</h2>
            <p>From the moment you arrive at Tropical Spa in Yelahanka, every phase of your visit is managed with ultimate professionalism, hygiene, and comfort:</p>
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

        {/* 7. Local FAQ Section */}
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

export default BodyScrub;
