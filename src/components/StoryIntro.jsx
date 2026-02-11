import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Frown, FileWarning } from 'lucide-react';
import { useRef } from 'react';

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
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section
      ref={sectionRef}
      id="story"
      style={{
        position: 'relative',
        background: '#0B0B10',
        overflow: 'hidden',
        padding: '120px 24px 0',
      }}
    >
      {/* Subtle red radial glow */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)',
          transform: 'translateX(-50%)',
          y: glowY,
          pointerEvents: 'none',
        }}
      />

      {/* Noise texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(239,68,68,0.1)',
            color: '#EF4444',
            fontSize: '0.8rem',
            fontWeight: 600,
            padding: '6px 16px',
            borderRadius: 100,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: 20,
            border: '1px solid rgba(239,68,68,0.15)',
          }}>
            The Problem
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            color: '#F8FAFC',
            marginBottom: 16,
            letterSpacing: '-0.02em',
          }}>
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
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(248,250,252,0.5)',
            lineHeight: 1.7,
            maxWidth: 580,
            margin: '0 auto',
          }}>
            You became a doctor to heal people, not to wrestle with spreadsheets.
            Yet here you are — drowning in admin work every single day.
          </p>
        </motion.div>

        {/* Pain strips */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {pains.map(({ num, icon: Icon, title, desc, accent }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 24,
                padding: '28px 32px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 16,
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              whileHover={{
                background: 'rgba(255,255,255,0.05)',
                borderColor: `${accent}30`,
              }}
            >
              {/* Number */}
              <span style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: accent,
                opacity: 0.2,
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
                  color: '#F1F5F9',
                  marginBottom: 6,
                }}>
                  {title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'rgba(248,250,252,0.45)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient bridge transition */}
      <div style={{
        position: 'relative',
        marginTop: 80,
        paddingBottom: 100,
        textAlign: 'center',
      }}>
        {/* Gradient line */}
        <div style={{
          width: 2,
          height: 60,
          margin: '0 auto 32px',
          background: 'linear-gradient(to bottom, rgba(239,68,68,0.4), rgba(79,70,229,0.6))',
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
            color: '#F8FAFC',
            marginBottom: 8,
          }}
        >
          What if{' '}
          <span style={{
            background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            one app
          </span>
          {' '}replaced all of that?
        </motion.p>

        {/* Bottom gradient fade into next section */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: 'linear-gradient(to bottom, transparent, var(--bg))',
          pointerEvents: 'none',
        }} />
      </div>

      <style>{`
        @media (max-width: 640px) {
          #story { padding: 80px 16px 0 !important; }
          #story [style*="gap: 24px"] {
            gap: 16px !important;
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
