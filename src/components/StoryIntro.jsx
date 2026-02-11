import { motion } from 'framer-motion';
import { Clock, Frown, FileWarning } from 'lucide-react';

const pains = [
  {
    num: '01',
    icon: Clock,
    title: 'Hours lost to paperwork',
    desc: 'Patient files scattered across drawers. Appointment books overflowing. Bills handwritten and error-prone.',
    accent: '#EF4444',
  },
  {
    num: '02',
    icon: Frown,
    title: 'Patients wait. You apologize.',
    desc: 'No system to track who\'s next, what they owe, or when they last visited. Every day feels chaotic.',
    accent: '#F97316',
  },
  {
    num: '03',
    icon: FileWarning,
    title: 'Data lives in 5 different places',
    desc: 'Excel for billing. WhatsApp for reminders. A diary for appointments. Nothing talks to anything.',
    accent: '#EAB308',
  },
];

export default function StoryIntro() {
  return (
    <section
      id="story"
      className="section section-alt"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle warm radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        width: 800,
        height: 800,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(239,68,68,0.04) 0%, transparent 70%)',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#FEF2F2',
            color: '#EF4444',
            fontSize: '0.8rem',
            fontWeight: 600,
            padding: '6px 16px',
            borderRadius: 100,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: 20,
            border: '1px solid #FEE2E2',
          }}>
            The Problem
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            Running a clinic shouldn't feel like{' '}
            <span style={{
              background: 'linear-gradient(135deg, #EF4444, #F97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              fighting fires
            </span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            You became a doctor to heal people, not to wrestle with spreadsheets.
            Yet here you are — drowning in admin work every single day.
          </p>
        </motion.div>

        {/* Pain strips */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {pains.map(({ num, icon: Icon, title, desc, accent }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="pain-strip"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 24,
                padding: '28px 32px',
                background: 'var(--surface)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'default',
              }}
            >
              {/* Number */}
              <span style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: accent,
                opacity: 0.15,
                lineHeight: 1,
                fontFamily: 'monospace',
                minWidth: 56,
                flexShrink: 0,
              }}>
                {num}
              </span>

              {/* Icon */}
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: `${accent}12`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
              }}>
                <Icon size={20} color={accent} />
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 6,
                }}>
                  {title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge transition */}
        <div style={{
          textAlign: 'center',
          marginTop: 64,
        }}>
          {/* Gradient line */}
          <div style={{
            width: 2,
            height: 48,
            margin: '0 auto 24px',
            background: 'linear-gradient(to bottom, rgba(239,68,68,0.3), var(--primary))',
            borderRadius: 2,
          }} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
              fontWeight: 700,
              color: 'var(--text)',
            }}
          >
            What if{' '}
            <span className="gradient-text">one app</span>
            {' '}replaced all of that?
          </motion.p>
        </div>
      </div>

      <style>{`
        .pain-strip:hover {
          border-color: var(--primary-light) !important;
          box-shadow: 0 8px 32px rgba(79,70,229,0.06);
          transform: translateY(-2px);
        }
        @media (max-width: 640px) {
          .pain-strip {
            flex-direction: column !important;
            gap: 12px !important;
            padding: 20px !important;
          }
          .pain-strip span[style*="minWidth"] {
            min-width: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
