import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import cuppingImg from '../assets/cupping-therapy-spa.jpg';

export const CuppingTherapy = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Static & Dynamic Methods",
      title: "Stationary Placement & Dynamic Fascial Glides",
      desc: "At Tropical Spa Yelahanka, our Cupping Therapy is administered with expert precision, anatomical care, and gentle luxury. Your ritual unfolds in a private, climate-controlled therapy suite bathed in soft lighting and subtle botanical aromatics. Your therapist begins by applying a warm, lubricating carrier oil—such as cold-pressed sweet almond or pure coconut oil—to prepare the skin barrier. Using specialized silicone, glass, or medical-grade vacuum cups, your therapist creates controlled negative pressure over key paraspinal muscle beds, shoulders, or lower back regions. The therapy is performed using two distinct methods: Static Cupping, where cups remain stationary on hypertonic trigger points for 5 to 10 minutes to relieve localized tightness, and Gliding (Dynamic) Cupping, where lubricated cups are moved smoothly along fascial pathways in long, continuous strokes."
    },
    {
      badge: "Myofascial Decompression",
      title: "Outward Vacuum Lifting & Fascial Release",
      desc: "The scientific mechanism of cupping therapy relies on mechanical myofascial decompression and microvascular expansion. Unlike standard compression massages that press downward into muscle tissue, cupping creates a gentle vacuum that lifts skin and superficial fascial sheets away from the underlying muscle bellies. This negative pressure expands local capillary beds, increases localized tissue oxygenation, and accelerates microvascular blood perfusion."
    },
    {
      badge: "Microvascular Recovery",
      title: "Oxygen Surging & Adhesion Dissolution",
      desc: "As blood flow surges into previously restricted areas, it brings vital oxygen and nutrients while flushing away metabolic waste. The treatment produces a distinctive, soothing pulling sensation that releases stubborn fascial adhesions and restores natural movement."
    }
  ];

  const highlights = [
    {
      title: "1. Deep Myofascial Decompression & Knot Release",
      desc: "By creating outward negative pressure, cupping physically lifts restricted fascial layers away from underlying muscle bellies, unbinding stubborn connective tissue knots and restoring suppleness.",
      featured: true
    },
    {
      title: "2. Enhanced Local Microvascular Circulation",
      desc: "The vacuum effect expands local capillary beds, triggering a surge of fresh, oxygenated blood flow directly to ischemic, hypertonic tissue zones to accelerate natural recovery.",
    },
    {
      title: "3. Relief for Chronic Back, Shoulder & Neck Stiffness",
      desc: "Targeted suction along paraspinal and scapular muscle groups releases persistent tightness caused by long desk hours, poor posture, and commuting fatigue."
    },
    {
      title: "4. Natural Pain-Gate Modulation & Tissue Ease",
      desc: "Decompressing hyperirritable tissue beds alters peripheral nerve signaling and desensitizes nociceptors, providing effective non-pharmacological relief for chronic muscular aches."
    },
    {
      title: "5. Deep Somatic Relaxation & Nervous System Calm",
      desc: "The steady, warm suction and gentle decompression soothe low-threshold mechanoreceptors, shifting your central nervous system out of \"fight-or-flight\" stress and into parasympathetic rest."
    }
  ];

  const packages = [
    { 
      duration: "45-Minute Session", 
      title: "45-Minute Focused Cupping Therapy",
      label: "Regional Fascial Decompression",
      desc: "A targeted, high-intent session focusing on primary problem zones—such as the upper back, shoulders, or lower back. Includes oil warming, static and gliding cupping, and a light massage finish.",
      popular: false
    },
    { 
      duration: "75-Minute Ritual", 
      title: "75-Minute Cupping & Deep Tissue Fusion Ritual",
      label: "Ultimate Full-Body Structural Reset",
      desc: "Our recommended signature experience. This extended ritual combines a 45-minute Deep Tissue or Swedish Massage to warm and loosen muscle beds, followed by 30 minutes of targeted static and gliding cupping across the entire back and legs.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Pre-Therapy Screening & Intake",
      desc: "You are greeted in our peaceful reception lounge with a refreshing towel and beverage. Before your session, you will complete a brief consultation to discuss your target tension areas and health history. We carefully screen for contraindications—such as use of blood thinners (anticoagulants), bleeding disorders, active skin lesions, or severe fragile skin—to ensure absolute safety."
    },
    {
      step: "02",
      title: "Private Suite & Modesty Draping",
      desc: "You will be escorted to a private, ambient therapy suite equipped with soft lighting, warm linens, and soothing music. You disrobe to your comfort level in privacy and lie beneath fresh, soft sheets. Our therapists strictly observe international professional draping protocols throughout the service."
    },
    {
      step: "03",
      title: "The Cupping Session",
      desc: "Your therapist applies warm oil and places or glides the vacuum cups across target areas. You will feel a firm, tight pulling sensation as the tissues lift, which quickly settles into a warm, deeply relaxing ache. Suction intensity is continuously calibrated to match your exact comfort level."
    },
    {
      step: "04",
      title: "Post-Therapy Care & Relaxation Lounge",
      desc: "Following your session, the cups are removed, and the area is cleansed with warm towels before you enjoy a cup of organic herbal tea in our lounge. Your therapist will provide aftercare advice, reminding you to stay hydrated and keep the treated area covered and warm."
    }
  ];

  const faqs = [
    {
      q: "What are the circular marks left after Cupping Therapy, and how long do they take to fade?",
      a: "The circular pink, red, or dark purple marks left after a session are temporary petechiae or ecchymosis—a normal, harmless result of sub-dermal capillary expansion and pooled cellular fluid drawn to the surface during decompression. They are completely painless, are not bruises or \"extracted toxins,\" and typically fade naturally within 3 to 10 days."
    },
    {
      q: "Does Cupping Therapy hurt, and what does the suction feel like?",
      a: "Cupping therapy should never cause sharp pain. You will experience a firm, localized stretching or pulling sensation as the vacuum lifts the skin and fascia, which most guests find deeply therapeutic and relaxing. Our certified therapists continuously communicate with you to ensure suction pressure remains comfortable."
    },
    {
      q: "Who should avoid Cupping Therapy or exercise caution?",
      a: "Cupping Therapy is strictly contraindicated for individuals taking prescription blood thinners (anticoagulants), those with hemophilia, active deep vein thrombosis (DVT), severe fragile skin, open wounds, active skin infections, or during pregnancy over the abdomen and lower back. If you have health concerns, our Yelahanka team will help recommend safe alternative massage modalities."
    },
    {
      q: "Where is Tropical Spa located in Yelahanka, and is parking available?",
      a: "Tropical Spa is centrally located in Yelahanka, North Bengaluru, with quick access from Yelahanka New Town, Kogilu Cross, Judicial Layout, and Bellary Road. We provide dedicated, hassle-free parking facilities for all our guests, ensuring a seamless and stress-free visit."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Cupping Therapy in Yelahanka, Bengaluru | Tropical Spa"
        description="Release stubborn myofascial knots and back stiffness with negative pressure Cupping Therapy at Tropical Spa Yelahanka. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/cupping-therapy/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="cupping-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Negative Pressure Fascial Decompression &amp; Somatic Ease | Yelahanka
            </div>
            
            <h1 id="cupping-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Cupping Therapy in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Step into an ancient realm of deep fascial decompression, somatic renewal, and peaceful luxury at <strong>Tropical Spa</strong>, North Bengaluru’s premier destination for clinical bodywork, holistic wellness, and restorative care. If you are searching for an exceptional <strong>spa in Yelahanka</strong> to break free from stubborn muscle tightness and the relentless pace of urban living, our tranquil haven offers an ideal retreat for mind and body. Ideally positioned to welcome guests from across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by working professionals, athletes, and local residents seeking an exceptionally effective, therapeutic <strong>massage in Yelahanka</strong> and specialized bodywork.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Cupping Therapy is an ancient, vacuum-based negative pressure modality designed to lift, decompress, and release tight sub-dermal fascial layers. Rooted deeply in Traditional Chinese Medicine (TCM) and ancient Middle Eastern healing arts, this time-honored treatment reverses the inward pressure of traditional massage by gently drawing tissue outward into specialized suction cups. Whether you are dealing with chronic upper back stiffness from long hours working along the Bellary Road tech corridors, recovering from athletic training, or seeking deep physical release, Tropical Spa invites you to experience targeted, transformative care in ultimate comfort.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Cupping Therapy session.")}
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
              <source type="image/jpeg" srcSet={cuppingImg} />
              <img 
                src={cuppingImg} 
                alt="Cupping Therapy suite with medical grade glass and silicone vacuum cups, botanical oils, and ambient lighting at Tropical Spa Yelahanka" 
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
            <p>Controlled negative pressure, dynamic gliding cups, and microvascular tissue decompression.</p>
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
            <p>Myofascial decompression, microvascular surging, and pain-gate sensory relief.</p>
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
            <p>To help you customize your visit to Tropical Spa Yelahanka, we offer tailored session options designed around your physical recovery goals:</p>
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
                    ✦ Signature Experience
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Cupping Therapy.`)}
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
            *All session rates include a private pre-treatment consultation, specialized vacuum cups, warm carrier oils, and post-session organic herbal tea service.*
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
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Cupping Therapy appointment.")}
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
            <p>From the moment you step into Tropical Spa in Yelahanka, every phase of your treatment is managed with complete professionalism, safety, and care:</p>
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

export default CuppingTherapy;
