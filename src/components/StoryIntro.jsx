import { motion } from 'framer-motion';
import { Clock, Frown, FileWarning } from 'lucide-react';

const pains = [
  {
    num: '01',
    icon: Clock,
    title: 'Hours lost to paperwork',
    desc: 'Patient files scattered across drawers. Appointment books overflowing. Bills handwritten and error-prone.',
  },
  {
    num: '02',
    icon: Frown,
    title: 'Patients wait. You apologize.',
    desc: 'No system to track who\'s next, what they owe, or when they last visited. Every day feels chaotic.',
  },
  {
    num: '03',
    icon: FileWarning,
    title: 'Data lives in 5 different places',
    desc: 'Excel for billing. WhatsApp for reminders. A diary for appointments. Nothing talks to anything.',
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
      {/* Subtle indigo radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        width: 800,
        height: 800,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,70,229,0.04) 0%, transparent 70%)',
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
          style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 64px)' }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px' }}>
            The Problem
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            Running a clinic shouldn't feel like{' '}
            <span className="gradient-text">fighting fires</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            You became a doctor to heal people, not to wrestle with spreadsheets.
            Yet here you are — drowning in admin work every single day.
          </p>
        </motion.div>

        {/* Pain strips */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {pains.map(({ num, icon: Icon, title, desc }, i) => (
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
                color: 'var(--primary)',
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
                background: 'var(--primary-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
              }}>
                <Icon size={20} color="var(--primary)" />
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
            background: 'linear-gradient(to bottom, var(--primary-light), var(--primary-dark))',
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
