import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    dot: '#059669',
    price: '₹999',
    period: '/month',
    desc: 'Perfect for solo practitioners just getting started.',
    features: [
      'Appointments',
      'Patient records',
      'Basic billing',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    tag: 'Most Popular',
    dot: '#D97706',
    price: '₹1,999',
    period: '/month',
    desc: 'The complete toolkit for a growing clinic.',
    features: [
      'Everything in Starter',
      'Prescriptions & EMR',
      'Reports & Analytics',
      'Inventory management',
      'Automatic backups',
    ],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Premium',
    dot: '#DC2626',
    price: '₹4,999',
    period: '/month',
    desc: 'For multi-doctor clinics that need the best.',
    features: [
      'Everything in Growth',
      'Dedicated database',
      'Priority support',
      'Multi-device access',
      'Advanced features',
    ],
    cta: 'Contact Us',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: '#F8FAFC', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <div className="section-label" style={{ margin: '0 auto 14px' }}>
            Pricing
          </div>
          <h2 className="section-title" style={{ maxWidth: 560, margin: '0 auto 14px' }}>
            Simple, <span className="gradient-text">fair pricing</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: 420 }}>
            No hidden charges. No per-patient fees. Pick a plan and run your clinic.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="pricing-grid">
          {plans.map(({ name, dot, tag, price, period, desc, features, cta, featured }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`pricing-card${featured ? ' pricing-featured' : ''}`}
            >
              {/* Popular tag */}
              {tag && (
                <div className="pricing-tag">
                  <Zap size={11} /> {tag}
                </div>
              )}

              {/* Plan name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <span style={{
                  width: 12, height: 12, borderRadius: '50%',
                  background: dot,
                  boxShadow: `0 0 0 3px ${dot}28`,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '1.05rem', fontWeight: 700,
                  color: featured ? '#fff' : '#0F172A',
                }}>{name}</span>
              </div>

              <p style={{
                fontSize: '0.82rem',
                color: featured ? 'rgba(255,255,255,0.65)' : '#475569',
                lineHeight: 1.55, marginBottom: 20,
              }}>{desc}</p>

              {/* Price */}
              <div style={{ marginBottom: 24 }}>
                <span style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800,
                  color: featured ? '#fff' : '#0F172A',
                  letterSpacing: '-0.03em',
                }}>{price}</span>
                <span style={{
                  fontSize: '0.88rem', fontWeight: 500,
                  color: featured ? 'rgba(255,255,255,0.55)' : '#94A3B8',
                  marginLeft: 4,
                }}>{period}</span>
              </div>

              {/* Divider */}
              <div style={{
                height: 1,
                background: featured ? 'rgba(255,255,255,0.12)' : '#F1F5F9',
                marginBottom: 20,
              }} />

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                      background: featured ? 'rgba(255,255,255,0.15)' : '#EFF6FF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Check size={10} color={featured ? '#fff' : '#1A56DB'} strokeWidth={3} />
                    </span>
                    <span style={{
                      fontSize: '0.875rem',
                      color: featured ? 'rgba(255,255,255,0.88)' : '#475569',
                    }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#cta"
                className={featured ? 'pricing-cta-primary' : 'pricing-cta-secondary'}
              >
                {cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            textAlign: 'center', marginTop: 32,
            fontSize: '0.82rem', color: '#94A3B8',
          }}
        >
          All plans include 14-day free trial · No credit card required · Cancel anytime
        </motion.p>
      </div>

      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 960px;
          margin: 0 auto;
          align-items: start;
        }
        .pricing-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px 28px;
          position: relative;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .pricing-card:hover {
          box-shadow: 0 8px 28px rgba(26,86,219,0.07);
          transform: translateY(-2px);
        }
        .pricing-featured {
          background: linear-gradient(160deg, #1A56DB 0%, #1E40AF 100%);
          border-color: transparent;
          box-shadow: 0 16px 48px rgba(26,86,219,0.28);
          transform: translateY(-8px);
        }
        .pricing-featured:hover {
          box-shadow: 0 20px 56px rgba(26,86,219,0.36);
          transform: translateY(-12px);
        }
        .pricing-tag {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 100px;
          background: rgba(255,255,255,0.18);
          color: #fff; font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.03em;
          margin-bottom: 16px;
        }
        .pricing-cta-primary {
          display: block; text-align: center;
          padding: 13px 24px; border-radius: 12px;
          background: #fff; color: #1A56DB;
          font-size: 0.9rem; font-weight: 700;
          text-decoration: none;
          transition: all 0.22s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .pricing-cta-primary:hover {
          background: #EFF6FF;
          box-shadow: 0 4px 14px rgba(26,86,219,0.18);
        }
        .pricing-cta-secondary {
          display: block; text-align: center;
          padding: 13px 24px; border-radius: 12px;
          background: #EFF6FF; color: #1A56DB;
          font-size: 0.9rem; font-weight: 700;
          text-decoration: none; border: 1px solid #BFDBFE;
          transition: all 0.22s;
        }
        .pricing-cta-secondary:hover {
          background: #DBEAFE;
          box-shadow: 0 4px 14px rgba(26,86,219,0.1);
        }
        @media (max-width: 860px) {
          .pricing-grid { grid-template-columns: 1fr; max-width: 420px; }
          .pricing-featured { transform: translateY(0); }
          .pricing-featured:hover { transform: translateY(-4px); }
        }
      `}</style>
    </section>
  );
}
