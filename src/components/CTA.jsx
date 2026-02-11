import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section" id="cta" style={{ paddingBottom: 64 }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #4F46E5 100%)',
            borderRadius: 28,
            padding: 'clamp(48px, 6vw, 80px) clamp(24px, 4vw, 64px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.04) 0%, transparent 50%)',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              style={{
                width: 64, height: 64, borderRadius: 20,
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px',
              }}
            >
              <Sparkles size={28} color="#fff" />
            </motion.div>

            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}>
              Ready to transform your clinic?
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.6,
              maxWidth: 550,
              margin: '0 auto 36px',
            }}>
              Join the new era of clinic management. One app for everything.
              Built with love for healthcare professionals.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '16px 36px',
                background: '#fff',
                color: 'var(--primary)',
                borderRadius: 14,
                fontSize: '1rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}>
                Get Started <ArrowRight size={18} />
              </a>
            </div>

            {/* Trust signals */}
            <div style={{
              display: 'flex', gap: 32, justifyContent: 'center', marginTop: 40,
              flexWrap: 'wrap',
            }}>
              {[
                'Free to start',
                'No credit card',
                'Cloud hosted',
              ].map(text => (
                <span key={text} style={{
                  fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill="rgba(255,255,255,0.2)" />
                    <path d="M4.5 7L6.5 9L9.5 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
