import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import deepTissueImg from '../assets/deep-tissue-spa.jpg';

export const DeepTissue = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Traction & Grip",
      title: "Minimal Lubrication for Fascial Penetration",
      desc: "At Tropical Spa Yelahanka, our Deep Tissue Massage is administered through a slow, deliberate, and anatomically precise sequence. Your treatment begins in a private, climate-controlled therapy suite infused with subtle calming aromas. To maintain essential mechanical traction on your skin, your therapist uses minimal lubrication or specialized friction cream—preventing slipping and allowing controlled, deep force to penetrate into the underlying fascial planes."
    },
    {
      badge: "Targeted Mechanics",
      title: "Cross-Fiber Friction & Trigger Point Release",
      desc: "The session opens with broad preparatory palmar compression to warm the superficial muscle bellies and settle your central nervous system. Once the superficial tissue yields, your therapist utilizes their thumbs, knuckles, forearms, and elbows to deliver slow, vertical compression and cross-fiber friction directly across taut muscle fibers, tendon insertions, and fascial adhesions. Cross-fiber friction works mechanically to unbind stubborn collagenous micro-adhesions caused by repetitive postural strain, athletic exertion, or prior physical micro-trauma."
    },
    {
      badge: "Neuromuscular Science",
      title: "Autogenic Inhibition & Hyperemic Vasodilation",
      desc: "The scientific foundation of deep tissue therapy relies on advanced neuromuscular mechanisms. When sustained pressure is applied to a hypertonic muscle knot (myofascial trigger point), it stimulates Golgi tendon organs within the tendon units, triggering autogenic inhibition that causes hyperactive muscle spindles to relax and release involuntary guarding. Concurrently, localized compressive pressure creates brief ischemia, followed immediately by hyperemic vasodilation upon release. This rush of microvascular blood flow accelerates cellular waste clearance, oxygenates ischemic tissues, and promotes lasting relief from deep-seated muscular tightness."
    }
  ];

  const highlights = [
    {
      title: "1. Targeted Relief for Chronic Back, Neck & Shoulder Strain",
      desc: "Deep tissue therapy offers evidence-backed relief for non-specific chronic low back pain, upper back tightness, and postural neck strain caused by sedentary office work and long commutes. Sustained point pressure alters localized pain thresholds via pain-gate neural mechanisms.",
      featured: true
    },
    {
      title: "2. Breakdown of Deep Fascial Adhesions & Knots",
      desc: "Through slow longitudinal glides and cross-fiber friction, this therapy physically disrupts stubborn fascial restrictions and micro-adhesions, restoring smooth slide and glide between connective tissue layers."
    },
    {
      title: "3. Restored Flexibility & Enhanced Joint Mobility",
      desc: "By resetting resting muscle length and decompressing hypertonic tissue beds surrounding major joint structures, deep tissue work restores natural joint range of motion and overall structural coordination."
    },
    {
      title: "4. Autonomic Stress Reduction & Mental Calm",
      desc: "Although deep tissue therapy involves firm mechanical pressure, the rhythmic, controlled application stimulates low-threshold skin mechanoreceptors. This tactile input shifts your central nervous system out of \"fight-or-flight\" arousal into parasympathetic vagal dominance, lowering circulating cortisol levels."
    },
    {
      title: "5. Accelerated Post-Exercise & Athletic Recovery",
      desc: "For active individuals in Yelahanka, targeted deep compression aids in reducing Delayed Onset Muscle Soreness (DOMS) and lowering serum markers of muscle damage like creatine kinase, helping you recover faster between training sessions."
    }
  ];

  const packages = [
    { 
      duration: "60-Minute Session", 
      title: "60-Minute Deep Tissue Massage",
      label: "Focused Regional Myofascial Relief",
      desc: "A targeted, high-intensity session focusing primarily on major problem areas—such as the upper back, shoulders, neck, lower back, or gluteal complex. Ideal for focused pain management and periodic muscle maintenance.",
      popular: false
    },
    { 
      duration: "90-Minute Ritual", 
      title: "90-Minute Extended Deep Tissue Ritual",
      label: "Ultimate Full-Body Structural Reset",
      desc: "Our recommended choice for comprehensive physical restoration. The extended 90-minute format allows your therapist to work unhurriedly through the entire body, providing thorough prep work, dedicated trigger-point therapy across the back and legs, and a soothing suboccipital neck release.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Pre-Therapy Clinical Screening",
      desc: "You will start with a private intake consultation to discuss your posture habits, pain history, and target tension areas. Our team carefully screens for contraindications—such as active deep vein thrombosis (DVT), blood clotting disorders, or use of anticoagulant medications—to ensure absolute safety."
    },
    {
      step: "02",
      title: "Private Suite & Modesty Draping",
      desc: "You will be escorted to a private, ambient therapy room featuring a heated, ergonomic table. After disrobing to your comfort level in privacy, you lie beneath soft, fresh linens. Our certified therapists strictly enforce international draping standards, keeping all non-treated areas completely covered throughout the session."
    },
    {
      step: "03",
      title: "The Deep Tissue Session",
      desc: "Your therapist maintains open communication regarding pressure calibration. Deep tissue work involves a therapeutic sensation often described as \"good pain\" as tight knots release. Pressure is always adjusted to stay within your comfortable threshold so your body relaxes without defensive tensing."
    },
    {
      step: "04",
      title: "Post-Therapy Care & Relaxation Lounge",
      desc: "Following your treatment, you are given time to dress at your own pace before enjoying a warm cup of organic herbal tea in our lounge. Your therapist will provide aftercare guidance, emphasizing proper hydration and noting that mild, transient tenderness over the next 24 to 48 hours is a normal sign of tissue remodeling."
    }
  ];

  const faqs = [
    {
      q: "How does Deep Tissue Massage differ from Swedish or Muscle Relaxing Massage at Tropical Spa Yelahanka?",
      a: "While Swedish and Muscle Relaxing massages rely on light-to-medium fluid strokes and kneading for systemic relaxation and surface circulation, Deep Tissue Massage uses slow, intense vertical pressure, minimal oil for traction, and cross-fiber friction to target sub-dermal fascial adhesions and chronic structural knots."
    },
    {
      q: "Is Deep Tissue Massage painful, and can the pressure be adjusted?",
      a: "Deep Tissue Massage involves firm pressure on hypertonic knots that can create an intense \"therapeutic ache,\" but it should never cause sharp or intolerable pain. Our expert therapists continuously communicate with you to calibrate pressure within your personal comfort zone so your muscles yield naturally."
    },
    {
      q: "Is it normal to feel sore after a Deep Tissue Massage, and how should I care for my body post-session?",
      a: "Yes, mild, transient muscle soreness for 24 to 48 hours following a deep tissue treatment is a normal biological response to mechanical tissue manipulation and microvascular flushing. We recommend drinking plenty of water after your session at our Yelahanka center, avoiding strenuous workouts for 24 hours, and taking a warm bath to support recovery."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Deep Tissue Massage in Yelahanka, Bengaluru | Tropical Spa"
        description="Target chronic back stiffness, muscle adhesions & trigger points with clinical Deep Tissue Massage at Tropical Spa Yelahanka. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/deep-tissue-massage/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="deep-tissue-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Advanced Orthopedic Bodywork &amp; Myofascial Recovery | Yelahanka
            </div>
            
            <h1 id="deep-tissue-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Deep Tissue Massage in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Step into a sanctuary of clinical excellence, restorative luxury, and deep physical relief at <strong>Tropical Spa</strong>, North Bengaluru’s premier destination for advanced bodywork, somatic recovery, and peaceful renewal. If you are searching for an exceptional <strong>spa in Yelahanka</strong> to break free from chronic physical discomfort and the relentless rush of daily life, our sanctuary offers an ideal haven for complete rejuvenation. Ideally situated to serve guests across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by working professionals, fitness enthusiasts, and local residents seeking a highly effective, therapeutic <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Deep Tissue Massage is an intensive manual therapy designed to realign the deeper layers of skeletal muscle bellies and surrounding myofascial connective tissue. Rooted in mid-20th-century Western orthopedic bodywork and clinical neuromuscular therapy, this modality was specifically developed to resolve persistent structural tightness, postural imbalances, and hyperirritable trigger points rather than providing surface-level relaxation alone. Whether you are dealing with chronic upper back stiffness from long hours at a desk, recovering from intensive workouts, or managing physical strain from daily commutes along Bellary Road, Tropical Spa invites you to experience targeted, expert care that restores your body's natural ease and mobility.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Deep Tissue Massage session.")}
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
              <source type="image/jpeg" srcSet={deepTissueImg} />
              <img 
                src={deepTissueImg} 
                alt="Deep Tissue Massage therapy suite with heated ergonomic table, stone accents, and ambient lighting at Tropical Spa Yelahanka" 
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
            <p>Anatomically precise slow compression, cross-fiber friction, and autogenic trigger point release.</p>
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
            <p>Clinical myofascial relief for posture strain, stubborn adhesions, and athletic recovery.</p>
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
            <p>To help you choose the ideal session for your physical recovery goals, Tropical Spa Yelahanka offers tailored duration options:</p>
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Deep Tissue Massage.`)}
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
            *All session rates include a private pre-treatment consultation, specialized friction cream or warm oil, and post-session organic herbal tea service.*
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
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Deep Tissue Massage appointment.")}
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
            <p>From the moment you arrive at Tropical Spa in Yelahanka, your comfort, safety, and privacy are managed with complete professionalism:</p>
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

export default DeepTissue;
