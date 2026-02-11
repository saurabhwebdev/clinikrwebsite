import { motion } from 'framer-motion';
import { ArrowRight, Download, Shield, Zap, Clock } from 'lucide-react';

const trustItems = [
  { icon: Shield, text: 'HIPAA-ready security' },
  { icon: Zap, text: 'Setup in 2 minutes' },
  { icon: Clock, text: '24/7 cloud sync' },
];

export default function CTA() {
  return (
    <section id="cta" style={{
      padding: 'clamp(48px, 8vw, 100px) clamp(16px, 3vw, 24px)',
      paddingBottom: 'clamp(32px, 6vw, 64px)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: '#0B0A1A',
            borderRadius: 'clamp(20px, 3vw, 32px)',
            padding: 'clamp(40px, 6vw, 72px) clamp(28px, 5vw, 72px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background elements */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.5,
            background: 'radial-gradient(ellipse 60% 50% at 10% 50%, rgba(79,70,229,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 90% 30%, rgba(124,58,237,0.1) 0%, transparent 70%)',
          }} />
          {/* Subtle grid pattern */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.03,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />

          {/* Content grid: text left, illustration right */}
          <div className="cta-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            {/* Left: text + CTA */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '6px 16px', borderRadius: 100,
                  background: 'rgba(79,70,229,0.2)',
                  border: '1px solid rgba(79,70,229,0.3)',
                  marginBottom: 24,
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#22C55E',
                    boxShadow: '0 0 8px rgba(34,197,94,0.6)',
                  }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#C7D2FE', letterSpacing: '0.03em' }}>
                    Free forever — No credit card needed
                  </span>
                </div>

                <h2 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  fontWeight: 800,
                  color: '#F8FAFC',
                  lineHeight: 1.15,
                  marginBottom: 16,
                  letterSpacing: '-0.02em',
                }}>
                  Your clinic deserves<br />
                  <span style={{
                    background: 'linear-gradient(135deg, #818CF8, #C084FC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    better software.
                  </span>
                </h2>

                <p style={{
                  fontSize: 'clamp(0.92rem, 1.5vw, 1.05rem)',
                  color: '#94A3B8',
                  lineHeight: 1.7,
                  maxWidth: 440,
                  marginBottom: 32,
                }}>
                  Stop juggling spreadsheets, paper files, and disconnected tools.
                  Clinikr brings everything together in one beautiful app.
                </p>

                {/* CTA buttons */}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
                  <a href="#" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 32px',
                    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                    color: '#fff',
                    borderRadius: 12,
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 20px rgba(79,70,229,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(79,70,229,0.5), 0 0 0 1px rgba(255,255,255,0.15) inset';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(79,70,229,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset';
                    }}
                  >
                    <Download size={17} /> Download Now
                  </a>
                  <a href="mailto:support@clinikr.com" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 28px',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#CBD5E1',
                    borderRadius: 12,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.color = '#CBD5E1';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Talk to Us <ArrowRight size={16} />
                  </a>
                </div>

                {/* Trust signals */}
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                  {trustItems.map(({ icon: Icon, text }) => (
                    <div key={text} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                    }}>
                      <Icon size={14} color="#64748B" />
                      <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 500 }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Doctor illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="/images/doctors.svg"
                alt="Doctors using Clinikr"
                style={{ width: '100%', maxWidth: 400, height: 'auto', filter: 'drop-shadow(0 8px 30px rgba(99,102,241,0.15))' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .cta-grid > div:first-child {
            order: 1;
          }
          .cta-grid > div:last-child {
            order: 0;
            max-width: 280px;
            margin: 0 auto;
          }
          .cta-grid > div:first-child > div > div:last-child {
            justify-content: center;
          }
          .cta-grid > div:first-child > div > div:nth-last-child(2) {
            justify-content: center;
          }
          .cta-grid > div:first-child > div > div:first-child {
            margin-left: auto;
            margin-right: auto;
          }
          .cta-grid > div:first-child > div > p {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}
