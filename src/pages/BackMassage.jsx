import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import backImg from '../assets/back-massage-spa.jpg';

export const BackMassage = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Posterior Chain Prep",
      title: "Broad Effleurage & Neutral Alignment",
      desc: "At Tropical Spa Yelahanka, our Back Massage is administered with anatomical precision, fluid artistry, and gentle care. Your session begins in a private, climate-controlled therapy suite infused with calming botanical aromatics. You rest comfortably in a prone position on a cushioned, heated massage table with your spine in neutral alignment."
    },
    {
      badge: "Deep Tissue Kneading",
      title: "Targeted Petrissage of Postural Muscle Beds",
      desc: "Your therapist applies warmed, nutrient-rich carrier oils—such as cold-pressed sweet almond, jojoba, or pure coconut oil—using broad, sweeping effleurage glides across the entire posterior chain. This warms the superficial tissue layers and increases local cutaneous circulation. The treatment then transitions into deep, rhythmic petrissage (kneading and lifting) targeting major postural muscle beds, including the erector spinae, latissimus dorsi, rhomboids, and upper trapezius."
    },
    {
      badge: "Safety & Scapular Release",
      title: "Trigger Point Focus & Endangerment Zone Safety",
      desc: "To resolve localized tightness and stubborn muscle knots between the scapulae, your therapist applies sustained palmar compression and focused thumb pressure points. Care is always taken to work safely along the soft tissue bellies, strictly avoiding heavy, direct pressure over vulnerable endangerment zones such as the floating ribs, kidneys, or the bony spinous processes of the spine. This expert approach releases deep-seated physical tension, improves local blood flow, and restores natural muscle suppleness, leaving your back feeling remarkably light and free of strain."
    }
  ];

  const highlights = [
    {
      title: "1. Targeted Relief for Upper & Lower Back Tightness",
      desc: "By focusing exclusively on the posterior torso, this treatment delivers concentrated relief to hypertonic muscle beds, easing chronic tightness in the lower back, mid-back, and shoulder girdle.",
      featured: true
    },
    {
      title: "2. Counteracts Postural Strain & Desk Fatigue",
      desc: "Systematic kneading and compression loosen muscle fibers shortened by prolonged sitting, computer work, or driving, helping reset healthy posture and reducing neck strain."
    },
    {
      title: "3. Enhanced Local Microcirculation & Tissue Flushing",
      desc: "Directional gliding strokes support vascular flow, expanding local capillary beds to deliver fresh oxygenated blood directly to fatigued muscle tissues while assisting natural metabolic waste removal."
    },
    {
      title: "4. Autonomic Stress Reduction & Nervous System Calm",
      desc: "Rhythmic, continuous tactile stimulation along the paraspinal nerve pathways calms your central nervous system, helping lower circulating stress hormones like cortisol and promoting deep mental quiet."
    },
    {
      title: "5. Improved Sleep & Somatic Comfort",
      desc: "By dissolving stubborn physical discomfort in the back and shoulders, a targeted Back Massage relieves bedtime restlessness, helping you fall asleep easily and wake up feeling refreshed."
    }
  ];

  const packages = [
    { 
      duration: "30-Minute Session", 
      title: "30-Minute Focused Back Express",
      label: "Express Regional Tension Relief",
      desc: "A highly concentrated, express session focusing strictly on the primary complaint zone—ideal for a quick mid-week reset to loosen hypertonic shoulder knots, neck stiffness, or acute lower back fatigue.",
      popular: false
    },
    { 
      duration: "60-Minute Ritual", 
      title: "60-Minute Comprehensive Back & Shoulder Ritual",
      label: "Ultimate Posterior Chain Reset",
      desc: "Our recommended choice for thorough relief. The 60-minute format allows your therapist to work unhurriedly through the entire posterior chain, providing extensive warming glides, deep scapular trigger point release, lumbar care, and a calming suboccipital neck and scalp finish.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Personal Consultation & Intake",
      desc: "You are greeted in our peaceful reception lounge with a warm towel and beverage. Before your session, you will complete a brief consultation with your therapist to highlight specific areas of back tightness, pain history, and your preferred pressure level."
    },
    {
      step: "02",
      title: "Private Suite & Modesty Draping",
      desc: "You will be escorted to a private, ambient therapy suite featuring soft lighting, warm linens, and soothing music. You disrobe to your comfort level in privacy and lie prone beneath soft, fresh sheets. Our therapists strictly adhere to international draping standards, keeping your lower body fully covered while uncovering only the back area being massaged."
    },
    {
      step: "03",
      title: "The Focused Back Session",
      desc: "Your therapist applies warm botanical oil with smooth, deliberate strokes, checking in periodically to ensure the room temperature, music, and pressure remain completely comfortable for you."
    },
    {
      step: "04",
      title: "Post-Therapy Care & Relaxation Lounge",
      desc: "Following your session, you are given ample time to dress at your own pace before enjoying a warm cup of organic chamomile or ginger herbal tea in our relaxation lounge, letting the restorative benefits settle into your body."
    }
  ];

  const faqs = [
    {
      q: "How does a targeted Back Massage help with desk fatigue and commute strain in Yelahanka?",
      a: "Long hours spent sitting at workstations or commuting along the heavy traffic corridors of Bellary Road and Manyata Tech Park cause continuous static contraction in the erector spinae, rhomboids, and upper trapezius. Our Back Massage specifically targets these hypertonic postural muscle beds using systematic kneading (petrissage), palmar compression, and broad glides to release tightness, restore muscle suppleness, and alleviate spinal fatigue."
    },
    {
      q: "Is a Back Massage safe if I have mild lower back stiffness or a history of back issues?",
      a: "Yes, our certified therapists are trained in safe, soft-tissue manipulation that works strictly on muscle bellies while protecting the spine and lower back. However, if you have acute spinal inflammation, recent herniated discs, or unhealed injuries, please inform us during your pre-treatment consultation so we can adapt our techniques or request medical clearance."
    },
    {
      q: "What is the main difference between a 30-minute and a 60-minute Back Massage at Tropical Spa?",
      a: "A 30-minute session provides an express, high-intent treatment focusing directly on one target area (such as the upper shoulders or lower back). A 60-minute session offers a comprehensive, unhurried treatment across the entire posterior chain—including the sacrum, lumbar spine, thoracic region, shoulders, neck, and suboccipital ridge—allowing deeper tissue warming and more thorough knot release."
    },
    {
      q: "How frequently should I book a Back Massage for ongoing relief at Tropical Spa Yelahanka?",
      a: "For clients managing persistent workplace postural strain or chronic shoulder tightness, we recommend an initial routine of once every 1 to 2 weeks for the first month to reset hypertonic muscle memory. For long-term maintenance, stress relief, and posture care, a monthly 60-minute session is ideal for keeping your back healthy and pain-free."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Back Massage in Yelahanka, Bengaluru | Tropical Spa"
        description="Target chronic upper & lower back stiffness, desk fatigue, and scapular knots with focused Back Massage at Tropical Spa Yelahanka. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/back-massage/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="back-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Targeted Posterior Chain &amp; Spinal Decompression | Yelahanka
            </div>
            
            <h1 id="back-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Back Massage in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Step into a sanctuary of targeted physical relief and tranquil luxury at <strong>Tropical Spa</strong>, North Bengaluru’s premier destination for clinical bodywork, somatic recovery, and peaceful renewal. If you are searching for an exceptional <strong>spa in Yelahanka</strong> to melt away the physical strain of modern urban living, our peaceful haven offers a deeply restorative retreat. Ideally positioned to welcome guests from across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by working professionals, desk workers, and local residents seeking an exceptionally effective, focused <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Our Back Massage is a specialized, regional therapeutic treatment focusing strictly on the posterior torso—from the sacral base up to the suboccipital ridge of the neck. Designed to address the high prevalence of postural fatigue and sedentary muscle stiffness caused by long work hours and daily commutes along Bellary Road, this treatment delivers concentrated care where your body holds stress most. Whether you are dealing with persistent lower back tightness, knotting between the shoulder blades, or neck tension, Tropical Spa invites you to unwind and experience immediate, lasting comfort.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a focused Back Massage session.")}
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
              <source type="image/jpeg" srcSet={backImg} />
              <img 
                src={backImg} 
                alt="Targeted Back Massage therapy suite with warm oils, heated plush bed, and ambient lighting at Tropical Spa Yelahanka" 
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
            <p>Anatomically precise posterior chain work, targeted postural muscle kneading, and endangerment zone safety.</p>
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
            <p>Concentrated posterior relief for desk strain, spinal fatigue, and paraspinal relaxation.</p>
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
            <p>To help you choose the ideal session length for your scheduling and physical recovery needs at Tropical Spa Yelahanka, we offer tailored duration options:</p>
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Back Massage.`)}
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
            *All pricing includes a private intake consultation, premium warm botanical oils, professional draping, and post-session organic herbal tea service.*
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
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Back Massage appointment.")}
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
            <p>From the moment you step into Tropical Spa in Yelahanka, your comfort, privacy, and well-being are managed with complete professionalism:</p>
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

export default BackMassage;
