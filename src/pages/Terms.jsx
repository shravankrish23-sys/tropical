import React from 'react';
import { SeoMeta } from '../components/SeoMeta';
import { spaConfig } from '../config/spaConfig';

export const Terms = () => {
  const { business } = spaConfig;

  return (
    <div>
      <SeoMeta 
        title="Terms of Service | Tropical Spa Yelahanka Bengaluru"
        description="Official Terms of Service for Tropical Spa in Yelahanka, Bengaluru. Review our appointment policies, gift voucher conditions, and spa etiquette guidelines."
        canonical="https://tropicalspa.in/terms/"
      />

      <div className="page-container" style={{ maxWidth: '860px', padding: '3.5rem 1.5rem' }}>
        
        <header className="page-header" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            ✦ Spa Policy &amp; Terms
          </div>
          <h1 className="page-h1" style={{ textAlign: 'left', fontSize: '2.4rem' }}>Terms of Service</h1>
          <p className="page-subtitle" style={{ textAlign: 'left', margin: 0 }}>
            Last updated: October 2026 • Tropical Spa, Yelahanka Bengaluru
          </p>
        </header>

        <article className="legal-content-body" style={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.75', fontSize: '1rem' }}>
          
          <section style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>1. Scope &amp; Agreement</h2>
            <p>
              By accessing our website (<code>tropicalspa.in</code>) or scheduling therapies at <strong>{business.name}</strong>, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not utilize our booking services.
            </p>
          </section>

          <section style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>2. Professional Code of Conduct &amp; Spa Etiquette</h2>
            <p>
              Tropical Spa is a strictly legitimate, professional wellness and orthopedic bodywork center. All treatments are performed by certified, background-verified professionals in compliance with strict professional ethics:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '0.8rem' }}>
              <li><strong>Zero Tolerance Policy:</strong> Any form of inappropriate language, sexual solicitation, harassment, or disrespectful behavior toward our staff or therapists will result in immediate termination of the session without refund and potential reporting to law enforcement authorities.</li>
              <li><strong>Appropriate Draping:</strong> Professional modesty draping is required and strictly maintained throughout all bodywork therapies.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>3. Appointments, Rescheduling &amp; Cancellations</h2>
            <p>
              To ensure every guest receives our full attention, please arrive at least 10 minutes prior to your scheduled therapy time.
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '0.8rem' }}>
              <li>Late arrivals may result in a shortened therapy duration to respect following appointments.</li>
              <li>We appreciate advance notice of at least 2 hours if you need to reschedule or cancel your session.</li>
            </ul>
          </section>

          <section id="voucher-terms" style={{ marginBottom: '2.5rem', background: 'rgba(158, 184, 117, 0.08)', border: '1px solid rgba(158, 184, 117, 0.3)', borderRadius: '16px', padding: '1.8rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--clr-btn-bg)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              ✦ Special Promotion
            </div>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.4rem', marginBottom: '0.9rem' }}>4. Promotional Gift Voucher Terms &amp; Conditions (₹1,000 Voucher)</h2>
            <p style={{ marginBottom: '1rem' }}>
              Our promotional <strong>₹1,000 Special Gift Voucher</strong> is designed to welcome guests to experience premium wellness therapies at Tropical Spa. Redemption of this voucher is subject to the following official conditions:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Minimum Service Value:</strong> The ₹1,000 voucher can be availed strictly on services and therapies priced <strong>above ₹2,500</strong>.</li>
              <li><strong>Applicable Days:</strong> The voucher is valid for sessions booked <strong>from Monday to Thursday only</strong> (not valid on Fridays, Saturdays, Sundays, or statutory public holidays).</li>
              <li><strong>Single Use per Visit:</strong> Strictly one voucher per guest per visit. Cannot be stacked or split across multiple guests.</li>
              <li><strong>Advance Claim Required:</strong> The voucher must be mentioned and confirmed at the time of WhatsApp or phone reservation prior to the session start and billing.</li>
              <li><strong>Non-Transferable &amp; Cash Value:</strong> The voucher has no cash exchange value and cannot be transferred, exchanged, or refunded.</li>
              <li><strong>Offer Exclusions:</strong> Cannot be combined with other promotional discounts, special festive offers, or multi-session membership packages.</li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>
              * Tropical Spa management reserves the right to verify voucher eligibility upon check-in at the front desk.
            </p>
          </section>

          <section style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>5. Health Disclosures &amp; Contraindications</h2>
            <p>
              It is the guest's responsibility to disclose any pre-existing medical conditions, severe musculoskeletal injuries, skin allergies, hypertension, cardiac issues, or pregnancy prior to receiving treatments. Please consult your physician before booking deep tissue work if you have acute health concerns.
            </p>
          </section>

          <section style={{ marginBottom: '2.2rem' }}>
            <h2 style={{ color: 'var(--clr-white)', fontSize: '1.35rem', marginBottom: '0.8rem' }}>6. Contact Information</h2>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.2rem', marginTop: '1rem' }}>
              <p><strong>{business.name}</strong></p>
              <p>{business.addressSingleLine}</p>
              <p>Phone: <a href={`tel:+919550366963`} style={{ color: 'var(--clr-btn-bg)' }}>{business.phone}</a></p>
              <p>Hours: {business.hours}</p>
            </div>
          </section>

        </article>
      </div>
    </div>
  );
};

export default Terms;
