import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import muscleImg from '../assets/muscle-relaxing-spa.jpg';

export const MuscleRelaxingMassage = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Step 1: Settling & Compression",
      title: "Gentle Palmar Compressions Over Soft Linens",
      desc: "At Tropical Spa Yelahanka, every Muscle Relaxing Massage is performed with smooth, deliberate, and deeply comforting artistry. Your treatment begins in a serene, ambient suite infused with subtle botanical aromas. Your therapist starts with broad, gentle palmar compressions over soft linens to settle your nervous system and prepare your muscle beds for deeper work."
    },
    {
      badge: "Step 2: Flowing Strokes",
      title: "Effleurage & Rhythmic Petrissage Kneading",
      desc: "Next, warm, nutrient-rich carrier oils—such as cold-pressed sweet almond, jojoba, or hydrating botanical massage creams—are applied smoothly across your skin. Your therapist uses long, continuous effleurage glides flowing toward the heart to warm the tissue layers, promote venous return, and enhance microvascular circulation. The experience seamlessly transitions into rhythmic petrissage, where gentle kneading, lifting, and rolling movements isolate major skeletal muscle groups—including the upper trapezius, shoulders, lower back, gluteals, hamstrings, and calves."
    },
    {
      badge: "Step 3: Tension Release",
      title: "Comfortable Palmar Pressure & Cross-Fiber Glides",
      desc: "To resolve localized tightness and stubborn muscle knots without sharp discomfort, your therapist applies sustained, comfortable palmar pressure paired with gentle cross-fiber glides. Rather than using aggressive force, the movements remain fluid, harmonious, and deeply reassuring. This expert touch coaxes taut muscle fibers to soften, releases trapped physical stress, and encourages natural fluid movement throughout your body. Enveloped in warmth and calming care, you will feel physical tightness melt away as your entire body sinks into profound tranquility."
    }
  ];

  const highlights = [
    {
      title: "1. Deep Relief from Muscle Tightness & Physical Fatigue",
      desc: "Systematic kneading and fluid gliding strokes loosen hypertonic muscle fibers, relieving chronic tightness in the neck, shoulders, back, and legs caused by long desk hours or physical exertion.",
      featured: true
    },
    {
      title: "2. Accelerated Recovery & Reduced Post-Exertional Soreness",
      desc: "By stimulating local microcirculation and aiding fluid movement, this therapy helps reduce post-exercise stiffness and Delayed Onset Muscle Soreness (DOMS), leaving your limbs feeling light and restored."
    },
    {
      title: "3. Enhanced Circulation & Tissue Nourishment",
      desc: "Smooth, directional glides applied toward the heart support vascular flow and expand tiny capillary beds, delivering fresh oxygen and vital nutrients directly to tired muscle tissues."
    },
    {
      title: "4. Systemic Stress Reduction & Mental Calm",
      desc: "The steady, rhythmic tactile stimulation calms your central nervous system, helping lower stress hormones like cortisol while elevating feelings of peace, emotional balance, and mental clarity."
    },
    {
      title: "5. Improved Sleep Quality & Somnolence",
      desc: "By easing physical discomfort and calming nervous energy, a Muscle Relaxing Massage prepares your body for deep, uninterrupted sleep, helping you wake up feeling completely renewed."
    }
  ];

  const packages = [
    { 
      duration: "60-Minute Session", 
      title: "60-Minute Muscle Relaxing Massage",
      label: "Focused Full-Body Tension Relief",
      desc: "A comprehensive full-body session targeting major muscle groups—back, neck, shoulders, legs, and arms. Ideal for periodic maintenance, post-workout recovery, or a quick, effective escape from daily city stress.",
      popular: false
    },
    { 
      duration: "90-Minute Ritual", 
      title: "90-Minute Extended Ritual",
      label: "Ultimate Deep Somatic Reset",
      desc: "Our recommended choice for thorough physical and mental recovery. The extended 90-minute format allows your therapist to work at an unhurried, deeply soothing pace, providing extra attention to hypertonic back muscles, hip flexors, feet, and a calming head and suboccipital scalp release.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Warm Welcome & Personal Consultation",
      desc: "You are greeted in our peaceful reception lounge with a refreshing drink and a warm towel. Before your session, you will complete a brief consultation with your therapist to highlight focus areas, choose your preferred oil, and discuss your desired pressure level."
    },
    {
      step: "02",
      title: "Private Suite & Modesty Draping",
      desc: "You will be escorted to a private, climate-controlled therapy suite featuring soft ambient lighting, warm linens, and soothing background music. After disrobing to your comfort level in total privacy, you will rest beneath fresh, plush sheets. Our therapists strictly adhere to international professional draping standards, keeping all non-treated areas fully covered throughout the session."
    },
    {
      step: "03",
      title: "The Muscle Relaxing Experience",
      desc: "Your therapist applies warm botanical oil with smooth, rhythmic strokes, checking in periodically to ensure the room temperature, sound level, and pressure remain completely comfortable for you."
    },
    {
      step: "04",
      title: "Post-Therapy Care & Relaxation Lounge",
      desc: "Following your session, you are given ample time to dress at your own pace before enjoying a warm cup of organic chamomile or ginger herbal tea in our relaxation lounge, letting the restorative benefits settle into your body."
    }
  ];

  const faqs = [
    {
      q: "How does a Muscle Relaxing Massage help with posture strain from long desk hours or commutes in Yelahanka?",
      a: "Long hours spent working at computers or commuting along Bellary Road and the Manyata tech corridor cause chronic static contraction in the upper trapezius, neck muscles, and lumbar spine. Our Muscle Relaxing Massage specifically targets these hypertonic muscle beds using systematic kneading (petrissage), palmar compression, and broad glides to release muscle tightness, restore natural muscle length, and alleviate postural strain."
    },
    {
      q: "What is the main difference between a Muscle Relaxing Massage and a Deep Tissue Massage?",
      a: "The key difference lies in the technique, pressure delivery, and overall sensation. Deep Tissue Massage uses slow, intense, vertical pressure and cross-fiber friction to target sub-dermal fascial adhesions and trigger points. In contrast, a Muscle Relaxing Massage utilizes firm yet fluid, rhythmic kneading and gliding strokes that melt away muscle stiffness deeply, providing profound relief without sharp trigger-point discomfort."
    },
    {
      q: "Is it normal to feel slightly sore after a Muscle Relaxing Massage, and how should I recover?",
      a: "Yes, experiencing mild, transient tenderness in heavily worked muscle groups for 24 to 48 hours is a completely normal biological response. As tight muscle fibers are manipulated and blood flow increases, your tissues undergo a natural remodeling process. We recommend drinking plenty of water after your session at our Yelahanka center and taking a warm bath or shower to support tissue hydration and recovery."
    },
    {
      q: "How frequently should I book a Muscle Relaxing Massage at Tropical Spa Yelahanka?",
      a: "For clients managing chronic neck and back stiffness from sedentary work or active sports training, we recommend an initial frequency of once every 1 to 2 weeks for a month to reset hypertonic muscle patterns. For ongoing wellness, stress management, and preventing muscle tightness, a monthly 60-minute or 90-minute session is ideal for long-term maintenance."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Muscle Relaxing Massage in Yelahanka, Bengaluru | Tropical Spa"
        description="Release muscular stiffness, desk strain, and fatigue with Muscle Relaxing Massage at Tropical Spa Yelahanka. Certified therapists. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/muscle-relaxing-massage/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="muscle-relax-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Somatic Restoration &amp; Muscular Recovery | Yelahanka
            </div>
            
            <h1 id="muscle-relax-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Muscle Relaxing Massage in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Step into an oasis of serene luxury and somatic rejuvenation at <strong>Tropical Spa</strong>, North Bengaluru’s premier sanctuary for holistic wellness and peaceful escape. If you are seeking a world-class <strong>spa in Yelahanka</strong> to break away from the relentless pace of urban living, our tranquil haven offers the ultimate retreat for mind and body. Ideally positioned to welcome guests from across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by discerning individuals looking for an exceptionally soothing, restorative <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Our Muscle Relaxing Massage is an exquisite manual treatment designed to dissolve physical tension, quiet a busy mind, and ease tired, overworked muscles. Combining time-honored European bodywork traditions with rich, skin-nourishing botanical oils, this full-body ritual gently coaxes hypertonic muscles into complete relaxation. Whether you are seeking relief from daily desk fatigue, recovering from long commutes along Bellary Road, or simply treating yourself to an afternoon of unhurried self-care, Tropical Spa invites you to surrender your worries and emerge deeply refreshed.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Muscle Relaxing Massage session.")}
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
              <source type="image/jpeg" srcSet={muscleImg} />
              <img 
                src={muscleImg} 
                alt="Muscle Relaxing Massage treatment suite with warm herbal oils and plush emerald bed at Tropical Spa Yelahanka" 
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
            <p>Smooth, deliberate, and deeply comforting somatic artistry to melt away tightness.</p>
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

        {/* 3. Key Restorative Benefits (Balanced Visual Layout) */}
        <section className="service-highlights-section" aria-labelledby="benefits-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="benefits-heading">Key Restorative Benefits</h2>
            <p>Restore muscular length, boost tissue nourishment, and release daily tension.</p>
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
            <p>To help you customize your visit to Tropical Spa Yelahanka, we offer tailored session options designed around your schedule and wellness needs:</p>
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Muscle Relaxing Massage.`)}
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
            *All session rates include a private pre-treatment consultation, premium warm botanical oils, and post-session organic herbal tea service.*
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
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Muscle Relaxing Massage appointment.")}
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
            <p>From the moment you walk into Tropical Spa in Yelahanka, your comfort, privacy, and satisfaction are our top priorities:</p>
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

export default MuscleRelaxingMassage;
