import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import polishImg from '../assets/body-polish-spa.jpg';

export const BodyPolish = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Steam Prep & Cleansing",
      title: "Warm Steam-Infused Towel Cleansing",
      desc: "At Tropical Spa Yelahanka, our Body Polish protocol is administered with meticulous care, gentle artistry, and supreme comfort. Your session unfolds in a warm, private therapy suite equipped with soft ambient lighting and calming background melodies. Your therapist begins by cleansing your skin with warm, steam-infused towels to open pores and soften the superficial skin layers."
    },
    {
      badge: "Micro-Particulate Buffing",
      title: "Shea Butter, Jojoba Beads & Circular Effleurage",
      desc: "Next, a plush, luxurious polishing formula—blended with ultra-fine micro-particulates like raw cane sugar, bamboo powder, or rounded jojoba beads suspended in rich shea butter, cold-pressed sweet almond, or jojoba oil—is applied across your body. Your therapist performs rhythmic, circular effleurage glides, gently buffing your back, shoulders, arms, legs, and feet. Special attention is given to drier areas like elbows, knees, and heels, while strictly avoiding sensitive endangerment zones, active skin lesions, or face and neck areas."
    },
    {
      badge: "Dermal Desquamation Science",
      title: "Corneocyte Sloughing & 50% Higher Absorption",
      desc: "The scientific and aesthetic foundation of skin polishing relies on gentle mechanical desquamation. By removing the outer layer of desiccated corneocytes (dead skin cells) without disrupting your delicate skin barrier, the treatment accelerates natural cellular turnover to unleash fresh, youthful skin beneath. Concurrently, the gentle circular friction stimulates superficial microvascular blood flow, bringing oxygen and essential nutrients to the skin surface. Following a warm hydrotherapy shower or towel rinse to wash away polishing grains, a rich, hydrating body butter is massaged into your freshly polished skin, locking in moisture and increasing active topical absorption by up to 50%."
    }
  ];

  const highlights = [
    {
      title: "1. Gentle Corneocyte Sloughing & Radiant Texture",
      desc: "Gently removes accumulated dead skin cells and surface dullness without abrasive scratching, instantly revealing a smoother, brighter, and touchably soft skin texture.",
      featured: true
    },
    {
      title: "2. Deep Dermal Hydration & Barrier Conditioning",
      desc: "Rich botanical lipids, shea butter, and vitamin E deeply nourish dry, dehydrated skin, reinforcing your natural moisture barrier and leaving your skin hydrated for days."
    },
    {
      title: "3. Enhanced Absorption of Active Topicals",
      desc: "By removing the dry barrier of dead surface cells, skin polishing dramatically improves transdermal absorption, allowing post-treatment body lotions and oils to penetrate up to 50% more effectively."
    },
    {
      title: "4. Superficial Microvascular Flush & Healthy Glow",
      desc: "Rhythmic circular friction encourages localized cutaneous capillary circulation, flushing out dullness and leaving your skin with a vibrant, healthy flush."
    },
    {
      title: "5. Soothing Mental Calm & Sensory Indulgence",
      desc: "The combination of warm steam, delicate botanical aromas, and rhythmic full-body polishing calms your central nervous system, relieving stress and leaving you deeply relaxed."
    }
  ];

  const packages = [
    { 
      duration: "45-Minute Session", 
      title: "45-Minute Express Radiance Body Polish",
      label: "Quick Dermal Exfoliation & Hydration",
      desc: "A focused full-body micro-polishing session followed by a warm hydrotherapy rinse and hydrating cream lock. Perfect for a quick glow boost before events or as a periodic skin refresh.",
      popular: false
    },
    { 
      duration: "75-Minute Ritual", 
      title: "75-Minute Deluxe Body Polish & Massage Fusion",
      label: "Ultimate Glowing Escape & Full Relaxation",
      desc: "Our signature recommendation for complete somatic renewal. This extended session combines a full-body micro-polishing exfoliation, warm hydrotherapy rinse, and a soothing 45-minute Swedish or Aromatherapy relaxation massage with warm botanical oils.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Welcoming Consultation",
      desc: "You are greeted in our peaceful reception lounge with a refreshing drink and a warm towel. You will complete a brief consultation with your therapist to review your skin type, highlight any sensitivities, and select your preferred botanical fragrance."
    },
    {
      step: "02",
      title: "Private Suite & Modesty Draping",
      desc: "You will be escorted to a private, climate-controlled therapy suite equipped with soft lighting and warm linens. You disrobe to your comfort level in complete privacy; disposable spa undergarments are provided for your convenience. Our therapists strictly adhere to international draping standards throughout the service."
    },
    {
      step: "03",
      title: "The Polishing & Hydration Journey",
      desc: "Your therapist applies the creamy polishing formula with gentle circular glides, followed by a warm steam rinse or hydrotherapy towel cleansing. The ritual concludes with a lavish application of rich body butter massaged into your skin."
    },
    {
      step: "04",
      title: "Post-Therapy Tea & Relaxation Lounge",
      desc: "Following your session, you are given time to dress at your own pace before enjoying a warm cup of organic chamomile or ginger herbal tea in our relaxation lounge, leaving you glowing, deeply hydrated, and completely at ease."
    }
  ];

  const faqs = [
    {
      q: "What is the main difference between a Body Polish and a Body Scrub at Tropical Spa Yelahanka?",
      a: "While a Body Scrub uses coarse, abrasive granules like dead sea salt or ground coffee for deep exfoliation on rough or oily skin, a Body Polish uses gentle, rounded micro-particulates (like raw sugar or jojoba beads) suspended in rich cream or butter. It gently buffs sensitive, dry, or mature skin while focusing heavily on deep hydration, skin softness, and silky texture."
    },
    {
      q: "How frequently should I book a Body Polish at Tropical Spa?",
      a: "Because a Body Polish is gentle and hydrating, we recommend scheduling a session 1 to 2 times per month. This maintains optimal skin cellular turnover, prevents surface dullness, and keeps your skin deeply moisturized without over-exfoliating or compromising your natural dermal barrier."
    },
    {
      q: "Can I combine a Body Polish with a full-body massage during my visit?",
      a: "Absolutely! Combining a Body Polish with a relaxation massage—such as our Swedish, Aromatherapy, or Balinese massage—is one of our most popular guest experiences. Polishing your skin first opens the pores and removes dead cells, allowing warm massage oils to absorb deeply into the skin for maximum hydration and muscular relief."
    },
    {
      q: "Where is Tropical Spa located in Yelahanka, and is parking available?",
      a: "Tropical Spa is conveniently situated in central Yelahanka, North Bengaluru, with quick access from Yelahanka New Town, Kogilu Cross, Judicial Layout, and Bellary Road. We offer dedicated, hassle-free parking facilities for all our guests, ensuring a seamless and stress-free visit from start to finish."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Body Polish in Yelahanka, Bengaluru | Tropical Spa"
        description="Revive dull skin, slough away dead cells, and lock in deep moisture with luxury Body Polish at Tropical Spa Yelahanka. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/body-polish/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="polish-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Luxurious Dermal Exfoliation &amp; Silky Hydration | Yelahanka
            </div>
            
            <h1 id="polish-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Body Polish in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Step into an oasis of luminous beauty, silky softness, and serene luxury at <strong>Tropical Spa</strong>, North Bengaluru’s premier sanctuary for advanced body care, holistic wellness, and peaceful renewal. If you are seeking an extraordinary <strong>spa in Yelahanka</strong> to revive dull, tired skin and escape the environmental stress of city life, our tranquil haven offers an idyllic escape. Ideally located to serve guests from across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by discerning individuals looking for a deeply hydrating, radiant <strong>massage in Yelahanka</strong> and specialized dermal treatment.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Our Body Polish is an exquisite full-body exfoliation and conditioning ritual designed to gently slough away dead surface skin cells, reveal your natural inner glow, and envelop your body in rich, lasting moisture. Unlike harsh physical scrubs, this indulgent treatment utilizes fine, micro-particulate exfoliants blended into nutrient-rich botanical creams and warm oils. Whether you are preparing for a special occasion, restoring dry skin after travel, or treating yourself to an afternoon of unhurried self-care, Tropical Spa invites you to unveil silky, touchably soft skin in ultimate comfort.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Body Polish treatment.")}
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
              <source type="image/jpeg" srcSet={polishImg} />
              <img 
                src={polishImg} 
                alt="Luxury Body Polish therapy room with organic sugar scrub, shea butter cream, and plush spa table at Tropical Spa Yelahanka" 
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
            <p>Steam preparation, ultra-fine botanical buffing, and mechanical desquamation for 50% higher hydration lock.</p>
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
            <p>Silky dermal renewal, barrier hydration, and luminous microvascular glow.</p>
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
            <p>To help you customize your visit to Tropical Spa Yelahanka, we offer tailored session options designed around your schedule and skin goals:</p>
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
                    ✦ Signature Recommendation
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Body Polish.`)}
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
            *All pricing includes a private intake consultation, premium micro-particulate polish, hydrating body butter lock, and post-session organic herbal tea service.*
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
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Body Polish appointment.")}
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
            <p>From the moment you step into Tropical Spa in Yelahanka, every phase of your visit is crafted for maximum luxury, cleanliness, and comfort:</p>
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

export default BodyPolish;
