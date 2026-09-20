import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import thaiImg from '../assets/thai-massage-spa.jpg';

export const ThaiMassage = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Meditative Foundation",
      title: "Buddhist Principles of Metta & Karuna",
      desc: "At Tropical Spa Yelahanka, your Traditional Thai Massage unfolds as a rhythmic, meditative sequence guided by the Buddhist principles of Metta (loving-kindness) and Karuna (compassion). You lie comfortably on a plush, supportive floor mat in a serene private suite, dressed in soft, breathable cotton pants and a top provided by our spa."
    },
    {
      badge: "Energy Pathways",
      title: "Sip Sen Compression from Feet Upward",
      desc: "Your therapist utilizes their thumbs, palms, forearms, elbows, knees, and feet to apply systematic, rhythmic compression along the ten primary energy lines (Sip Sen or Sen lines). The treatment progresses thoughtfully from the soles of your feet upward through the legs, hips, abdomen, shoulders, and head. Working from the feet upward prepares the body's fascial network before transitioning into assisted, yoga-like passive stretches."
    },
    {
      badge: "Assisted Yoga",
      title: "Passive Traction & Deep Joint Mobilization",
      desc: "During these gentle stretches, your therapist uses leverage and body weight to maneuver your limbs and torso into postures resembling classical yoga poses—without requiring any physical effort on your part. This combination of deep point pressure, joint mobilization, and passive traction opens restricted connective tissue planes, releases fascial tightness around major joint structures (hips, shoulders, and spine), and stimulates local blood and fluid circulation. The experience leaves you feeling remarkably light, flexible, and mentally refreshed."
    }
  ];

  const highlights = [
    {
      title: "1. Enhanced Flexibility & Deep Joint Mobility",
      desc: "Guided passive yoga stretches gently lengthen shortened muscle bellies, decompress spinal segments, and mobilize major joint structures, expanding your natural range of motion and overall suppleness.",
      featured: true
    },
    {
      title: "2. Relief for Chronic Low Back & Postural Strain",
      desc: "By releasing tight hamstrings, hip flexors, and lumbar fascia along key Sen lines, Thai massage effectively alleviates chronic non-specific low back pain and counteracts postural stiffness from prolonged desk work."
    },
    {
      title: "3. Physical Invigoration & Vital Energy Flow",
      desc: "Unlike sedating oil massages, the rhythmic compression and passive stretching of Nuad Boran clear energetic and fascial blockages, boosting vitality and leaving you feeling refreshed rather than sleepy."
    },
    {
      title: "4. Improved Microvascular & Lymphatic Circulation",
      desc: "Directional compression applied along the limbs toward the heart stimulates capillary blood flow and aids natural fluid movement, easing feeling of heaviness in tired legs."
    },
    {
      title: "5. Stress Reduction & Mindful Mental Calm",
      desc: "The steady, rhythmic cadence of pressure point work paired with conscious breathing helps quiet an overactive nervous system, shifting you into a balanced, peaceful mental state."
    }
  ];

  const packages = [
    { 
      duration: "60-Minute Session", 
      title: "60-Minute Traditional Thai Massage",
      label: "Full-Body Alignment & Flexibility Reset",
      desc: "A complete bottom-up session focusing on major Sen energy lines, leg compression, hip mobilization, and essential upper-body stretching. Perfect for mid-week energy resets or addressing post-travel stiffness.",
      popular: false
    },
    { 
      duration: "90-Minute Ritual", 
      title: "90-Minute Extended Thai Ritual",
      label: "Ultimate Passive Yoga & Deep Joint Release",
      desc: "Our recommended choice for maximum mobility and complete tension release. The 90-minute format allows your therapist to work unhurriedly through complex passive yoga postures, extended back traction, chest openers, and a dedicated neck, shoulder, and cranial release.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Welcome & Intake Consultation",
      desc: "You are welcomed into our tranquil reception lounge with a warm towel and beverage. Before your session, you will complete a brief intake consultation to highlight your target tension areas, joint history, and flexibility limits."
    },
    {
      step: "02",
      title: "Preparation & Comfortable Attire",
      desc: "You will be escorted to a private, ambient room where you will change into our clean, loose-fitting cotton clothing designed specifically to allow complete freedom of movement during stretching."
    },
    {
      step: "03",
      title: "The Floor Mat Session",
      desc: "Your therapist guides you through the session on a wide, comfortable floor mattress. Communication is maintained throughout to ensure all stretches and compression levels remain comfortably within your natural limits."
    },
    {
      step: "04",
      title: "Post-Therapy Tea & Re-Entry",
      desc: "After your treatment, you are given time to change at your own pace before enjoying a warm cup of herbal tea in our relaxation lounge, leaving you balanced and ready to resume your day."
    }
  ];

  const faqs = [
    {
      q: "Do I need to be flexible or know yoga to enjoy a Traditional Thai Massage at Tropical Spa Yelahanka?",
      a: "Not at all! Traditional Thai Massage is often called \"passive yoga\" because your therapist does all the work while your body remains completely relaxed. Stretches are tailored specifically to your existing flexibility level, ensuring a safe, comfortable, and therapeutic experience regardless of your age or physical condition."
    },
    {
      q: "Why is Traditional Thai Massage performed oil-free on a floor mat instead of a massage table?",
      a: "Performing the massage on a firm, supportive floor futon gives the therapist the mechanical leverage required to apply rhythmic compression and guide assisted stretches safely. Remaining fully clothed without oil allows for smooth, precise grip during passive limb rotations and spinal twists."
    },
    {
      q: "How does Traditional Thai Massage differ from a Deep Tissue or Swedish Massage?",
      a: "While Swedish and Deep Tissue massages use oils on bare skin with direct kneading or gliding strokes on a massage table, Traditional Thai Massage is oil-free, performed clothed on a floor mat, and focuses on rhythmic point pressure along Sen energy lines combined with dynamic, full-body passive stretching."
    },
    {
      q: "Who should avoid or modify Traditional Thai Massage?",
      a: "Because Thai massage involves assisted stretching and joint movement, it is contraindicated for individuals with severe osteoporosis, recent bone fractures, unhealed surgical incisions, artificial joint replacements, or acute herniated intervertebral discs. Please inform our Yelahanka team during your intake consultation so we can recommend appropriate modifications or alternative therapies."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Traditional Thai Massage in Yelahanka, Bengaluru | Tropical Spa"
        description="Experience authentic UNESCO-inscribed Traditional Thai Massage (Nuad Boran) at Tropical Spa Yelahanka. Assisted yoga stretches & acupressure. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/traditional-thai-massage/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="thai-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Sacred UNESCO Ancient Art &amp; Interactive Bodywork | Yelahanka
            </div>
            
            <h1 id="thai-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Traditional Thai Massage in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Step into an ancient realm of interactive energy alignment and somatic renewal at <strong>Tropical Spa</strong>, North Bengaluru’s premier sanctuary for holistic bodywork, traditional healing, and peaceful escape. If you are searching for an authentic <strong>spa in Yelahanka</strong> to break free from the demands of modern urban living, our tranquil haven offers a deeply restorative retreat for mind and body. Perfectly positioned to serve guests from across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by discerning individuals seeking a unique, highly energizing <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Traditional Thai Massage—known historically as <em>Nuad Boran</em> or <em>Nuad Thai</em>—is an ancient healing art inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity. Tracing its lineage back over 2,500 years to Dr. Jivaka Kumar Bhaccha (a contemporary physician to Gautama Buddha) and preserved through the stone inscriptions of Wat Pho in Bangkok, this modality fuses Buddhist monastic medicine, Ayurvedic principles, and rhythmic bodywork. Unlike traditional Western table massages, Thai massage is a 100% oil-free, interactive therapy performed on a padded floor futon while you remain fully clothed in loose cotton attire. Whether you are looking to relieve joint stiffness from long commutes along Bellary Road, recover from intensive athletic training, or restore your body's vital flow, Tropical Spa invites you to experience this sacred dance of healing.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book an authentic Traditional Thai Massage session.")}
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
              <source type="image/jpeg" srcSet={thaiImg} />
              <img 
                src={thaiImg} 
                alt="Traditional Thai Massage floor futon suite with traditional cotton attire and herbal compresses at Tropical Spa Yelahanka" 
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
            <p>A meditative sequence of rhythmic point pressure, joint mobilization, and assisted yoga stretching.</p>
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
            <p>Holistic Thai therapeutic principles for flexibility, postural ease, and energetic renewal.</p>
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
            <p>To help you customize your visit to Tropical Spa Yelahanka, we offer tailored session durations designed around your scheduling needs and flexibility goals:</p>
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Traditional Thai Massage.`)}
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
            *All pricing includes private suite setup, fresh traditional cotton attire, intake consultation, and post-session organic herbal tea.*
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
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Traditional Thai Massage appointment.")}
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
            <p>From the moment you arrive at Tropical Spa in Yelahanka, your comfort, modesty, and well-being are fully prioritized:</p>
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

export default ThaiMassage;
