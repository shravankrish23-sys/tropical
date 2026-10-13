import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { spaConfig } from '../config/spaConfig';

export const PrivacyPolicy = () => {
  const { business } = spaConfig;

  return (
    <div>
      <SeoMeta 
        title="Privacy Policy | Tropical Spa Yelahanka Bengaluru"
        description="Official Privacy Policy for Tropical Spa in Yelahanka, Bengaluru. Learn how we handle guest information, appointment inquiries, and website privacy."
        canonical="https://tropicalspa.in/privacy-policy/"
      />

      <div className="page-container" style={{ maxWidth: '860px', padding: '3.5rem 1.5rem' }}>
        
        <header className="page-header" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            ✦ Legal &amp; Transparency
          </div>
          <h1 className="page-h1" style={{ textAlign: 'left', fontSize: '2.4rem' }}>Privacy Policy</h1>
          <p className="page-subtitle" style={{ textAlign: 'left', margin: 0 }}>
            Last updated: October 2026 • Tropical Spa, Yelahanka Bengaluru
          </p>
        </header>

        <article className="legal-content-body" style={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.75', fontSize: '1rem' }}>
          
          <section style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>1. Introduction</h2>
            <p>
              At <strong>{business.name}</strong>, your privacy is of the utmost importance to us. This Privacy Policy describes how we collect, use, and safeguard personal information when you visit our website (<code>tropicalspa.in</code>), book a wellness session, or communicate with our front desk via phone or WhatsApp.
            </p>
          </section>

          <section style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>2. Information We Collect</h2>
            <p>We may collect limited personal information directly provided by you, including:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '0.8rem' }}>
              <li><strong>Contact Information:</strong> Your name, phone number, and email address when you schedule an appointment or claim promotional gift vouchers.</li>
              <li><strong>Communication Records:</strong> Prefilled inquiry messages sent to our desk via WhatsApp or email.</li>
              <li><strong>Session Preferences:</strong> Health considerations, physical focus areas, or preferred pressure levels communicated during pre-session consultations.</li>
              <li><strong>Automated Browsing Data:</strong> Non-personally identifiable technical analytics (browser type, device viewport, referring URL) collected for performance optimization.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>3. How We Use Your Information</h2>
            <p>We utilize the collected information strictly for legitimate operational purposes:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '0.8rem' }}>
              <li>To confirm and manage your appointment bookings and therapy suite reservations.</li>
              <li>To validate and honor promotional benefits, including the ₹1,000 gift voucher.</li>
              <li>To respond promptly to inquiries and provide customer service support.</li>
              <li>To maintain safety, hygiene protocols, and verify health contraindications before therapy sessions.</li>
            </ul>
            <p style={{ marginTop: '0.8rem' }}>
              We <strong>never</strong> sell, rent, or trade your personal data to third-party brokers or advertisers.
            </p>
          </section>

          <section style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>4. Data Protection &amp; Security</h2>
            <p>
              We implement industry-standard administrative and technical security measures to protect your personal details against unauthorized access, alteration, or disclosure. All digital communications are encrypted via SSL/TLS.
            </p>
          </section>

          <section style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>5. Third-Party Integrations</h2>
            <p>
              Our website links directly to third-party services such as WhatsApp (Meta) for messaging and Google Maps for directions. Interacting with these platforms is governed by their respective independent privacy terms.
            </p>
          </section>

          <section style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>6. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request the deletion of your contact records, please reach out directly:
            </p>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.2rem', marginTop: '1rem' }}>
              <p><strong>{business.name}</strong></p>
              <p>{business.addressSingleLine}</p>
              <p>Phone: <a href={`tel:+919550366963`} style={{ color: 'var(--clr-btn-bg)' }}>{business.phone}</a></p>
              <p>Email: <a href={`mailto:${business.email}`} style={{ color: 'var(--clr-btn-bg)' }}>{business.email}</a></p>
            </div>
          </section>

        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
