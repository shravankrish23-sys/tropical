import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import fourHandImg from '../assets/four-hand-massage-spa.jpg';

export const FourHandMassage = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Bilateral Precision",
      title: "Masterclass in Synchronized Touch",
      desc: "At Tropical Spa Yelahanka, our Four-Hand Massage is performed as a masterclass in synchronized touch. Your experience unfolds in a spacious, climate-controlled private suite bathed in soft ambient glow and delicate botanical aromas. Two senior therapists coordinate their every move in absolute rhythm, matching speed, direction, and pressure across bilateral sides of your body."
    },
    {
      badge: "Mirrored Choreography",
      title: "Warm Botanical Oils & Continuous Glides",
      desc: "Warmed, nutrient-rich carrier oils—such as cold-pressed sweet almond or pure coconut oil infused with subtle floral or sandalwood notes—are applied in fluid, continuous glides. One therapist focuses on the upper body and torso while the second works simultaneously on the lower limbs, or both execute perfectly mirrored effleurage glides down opposing arms, back pathways, and legs. They integrate rhythmic kneading (petrissage), gentle palmar compression, and long sweeping strokes that flow together without interruption."
    },
    {
      badge: "Sensory Phenomenon",
      title: "Overwhelming Spatial Tracking for Total Rest",
      desc: "The magic of Four-Hand Massage relies on a unique sensory phenomenon. Because your brain is accustomed to tracking the movements of a single therapist, receiving two simultaneous, perfectly mirrored massage sequences overwhelms your mind's spatial tracking capacity. Unable to focus on two distinct tactile inputs at once, your mind quickly surrenders its internal monologue, dropping the central nervous system into immediate parasympathetic rest. Physical muscle beds receive twice the therapeutic care in a single timeframe, leaving you feeling entirely weightless, deeply grounded, and mentally clear."
    }
  ];

  const highlights = [
    {
      title: "1. Rapid Mental Quiet & Sensory Decompression",
      desc: "By overwhelming the brain's spatial tracking with dual synchronized strokes, this treatment quickly silences racing thoughts, reducing anxiety and inducing deep meditative calm.",
      featured: true
    },
    {
      title: "2. Dual-Action Muscle Tension Relief",
      desc: "With two therapists working simultaneously across both sides of your torso, shoulders, and legs, hypertonic muscle beds receive double the care, releasing stubborn knots in half the time."
    },
    {
      title: "3. Accelerated Circulation & Lymphatic Drainage",
      desc: "Synchronized directional strokes flowing toward the heart efficiently support venous return and lymphatic fluid movement, reducing sluggishness and expanding localized microvascular perfusion."
    },
    {
      title: "4. Profound Parasympathetic Nervous System Shift",
      desc: "The continuous, seamless rhythm triggers a rapid shift into parasympathetic dominance, lowering circulating stress hormones like cortisol and promoting deep, holistic tranquility."
    },
    {
      title: "5. Enhanced Mind-Body Harmony & Mood Elevation",
      desc: "The luxurious, immersive nature of dual touch releases natural feel-good endorphins and oxytocin, leaving you feeling profoundly cherished, balanced, and rejuvenated."
    }
  ];

  const packages = [
    { 
      duration: "60-Minute Session", 
      title: "60-Minute Four-Hand Massage",
      label: "Synchronized Full-Body Immersion",
      desc: "A complete, highly choreographed full-body session where two therapists work in unison to cover your back, shoulders, arms, legs, and feet. Perfect for rapid mental reset and deep physical relaxation.",
      popular: false
    },
    { 
      duration: "90-Minute Ritual", 
      title: "90-Minute Extended Four-Hand Ritual",
      label: "Ultimate Luxury & Deep Somatic Escape",
      desc: "Our signature flagship experience. The extended 90-minute format allows both therapists to work at an unhurried, deeply indulgent pace, including extra dedicated time for synchronized back work, foot reflex points, and a calming dual-therapist head and suboccipital scalp release.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Dual-Therapist Consultation",
      desc: "You are welcomed into our tranquil lounge with a refreshing towel and beverage. You will meet your two dedicated therapists for a brief intake consultation to discuss focus areas, health history, and preferred pressure levels."
    },
    {
      step: "02",
      title: "Private Suite & Modesty Draping",
      desc: "You will be escorted to a spacious, private suite prepared with a heated table and plush linens. After disrobing to your comfort level in total privacy, you will rest comfortably beneath soft sheets. Both therapists strictly observe international professional draping standards, keeping all non-treated areas fully covered throughout the session."
    },
    {
      step: "03",
      title: "The Synchronized Session",
      desc: "Both therapists perform the treatment in complete harmony and silence, maintaining subtle cues between themselves to ensure flawless synchronization while occasionally checking in with you to confirm your comfort."
    },
    {
      step: "04",
      title: "Post-Therapy Care & Relaxation Lounge",
      desc: "Following your session, you are given ample time to dress at your own pace before enjoying a warm cup of organic herbal tea in our lounge, allowing your mind and body to integrate the deep benefits of dual touch."
    }
  ];

  const faqs = [
    {
      q: "How do two therapists ensure synchronized pressure during a Four-Hand Massage at Tropical Spa Yelahanka?",
      a: "Our senior therapists undergo extensive paired training to master rhythm, pace, and pressure calibration. Before your session, we discuss your pressure preferences so both therapists deliver a balanced, perfectly matched touch on both sides of your body."
    },
    {
      q: "Is Four-Hand Massage suitable for someone who has never had a dual-therapist treatment before?",
      a: "Yes, absolutely! It is widely considered the ultimate luxury massage experience. While the sensation of two therapists working simultaneously can feel uniquely immersive at first, your mind quickly lets go of trying to follow the movements, resulting in a state of relaxation deeper than traditional single-therapist treatments."
    },
    {
      q: "What should I wear during a Four-Hand Massage, and how is privacy maintained?",
      a: "You may disrobe to your comfort level or wear disposable spa undergarments provided in your suite. Both therapists strictly adhere to professional draping protocols at all times, ensuring that only the specific body segment actively being massaged is exposed."
    },
    {
      q: "Where is Tropical Spa located in Yelahanka, and is parking available?",
      a: "Tropical Spa is centrally located in Yelahanka, North Bengaluru, with convenient access from Yelahanka New Town, Kogilu Cross, Judicial Layout, and Bellary Road. We provide dedicated, hassle-free parking facilities for all our guests to ensure a smooth, relaxing visit."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Four-Hand Massage in Yelahanka, Bengaluru | Tropical Spa"
        description="Experience the pinnacle of luxury with synchronized Four-Hand Massage at Tropical Spa Yelahanka. Two therapists working in unison. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/four-hand-massage/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="fourhand-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Pinnacle Dual-Therapist Choreography &amp; Ultimate Indulgence | Yelahanka
            </div>
            
            <h1 id="fourhand-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Four-Hand Massage in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Welcome to <strong>Tropical Spa</strong>, North Bengaluru’s premier destination for luxury bodywork, bespoke wellness, and transcendent relaxation. If you are seeking an extraordinary <strong>spa in Yelahanka</strong> to completely detach from the continuous chatter and pressure of modern urban living, our tranquil haven offers an unparalleled somatic escape. Ideally located to serve guests across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by discerning individuals looking for the ultimate luxury <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Four-Hand Massage is the pinnacle of spa choreography—an exquisite dual-therapist ritual designed to produce profound mental quiet and deep physical release. Inspired by ancient Ayurvedic <em>Abhyanga</em> multi-practitioner traditions and modernized into a seamless choreography, this treatment features two expert therapists working in perfect, mirrored synchronicity across both sides of your body. Whether you are recovering from demanding corporate workweeks, seeking relief from long commutes along Bellary Road, or simply treating yourself to the ultimate indulgent retreat, Tropical Spa invites you to experience double the harmony and double the bliss.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Four-Hand Synchronized Massage session.")}
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
              <source type="image/jpeg" srcSet={fourHandImg} />
              <img 
                src={fourHandImg} 
                alt="VIP Four-Hand Massage therapy suite with twin brass oil warmers, rolled linens, and ambient lighting at Tropical Spa Yelahanka" 
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
            <p>A masterclass in synchronized touch, bilateral mirrored flow, and sensory relaxation.</p>
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
            <p>Double the physical tension release, rapid mental quiet, and deep somatic harmony.</p>
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
            <p>To help you select the ideal duration for your luxury escape at Tropical Spa Yelahanka, we offer tailored session options:</p>
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
                    ✦ Signature Flagship
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Four-Hand Massage.`)}
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
            *All pricing includes a private dual-therapist consultation, premium warm botanical oils, and post-treatment organic herbal tea service.*
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
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Four-Hand Massage appointment.")}
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
            <p>From the moment you step into Tropical Spa in Yelahanka, your journey is curated for maximum comfort, modesty, and luxury:</p>
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

export default FourHandMassage;
