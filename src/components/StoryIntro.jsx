import { motion } from 'framer-motion';
import { Clock, Frown, FileWarning } from 'lucide-react';

const pains = [
  {
    icon: Clock,
    num: '01',
    title: 'Hours lost to paperwork',
    desc: 'Patient files scattered across drawers. Appointment books overflowing. Bills handwritten and error-prone.',
  },
  {
    icon: Frown,
    num: '02',
    title: 'Patients wait. You apologize.',
    desc: 'No system to track who\'s next, what they owe, or when they last visited. Every day feels chaotic.',
  },
  {
    icon: FileWarning,
    num: '03',
    title: 'Data lives in 5 different places',
    desc: 'Excel for billing. WhatsApp for reminders. A diary for appointments. Nothing talks to anything.',
  },
];

export default function StoryIntro() {
  return (
    <section id="story" style={{ background: '#0F172A', padding: 'clamp(64px, 8vw, 100px) 24px', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(220,38,38,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <div className="section-label" style={{
            margin: '0 auto 14px',
            background: 'rgba(220,38,38,0.12)',
            color: '#FCA5A5',
            border: '1px solid rgba(220,38,38,0.25)',
          }}>
            The Problem
          </div>
          <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto 16px', color: '#F8FAFC' }}>
            Running a clinic shouldn't feel like{' '}
            <span style={{
              background: 'linear-gradient(135deg, #F87171, #DC2626)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>fighting fires</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', margin: '0 auto', maxWidth: 480, lineHeight: 1.7 }}>
            You became a doctor to heal people — not wrestle with spreadsheets every single day.
          </p>
        </motion.div>

        {/* Pain cards */}
        <div className="pain-grid">
          {pains.map(({ icon: Icon, num, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="pain-card"
            >
              <div className="pain-num">{num}</div>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: 'rgba(220,38,38,0.12)',
                border: '1px solid rgba(220,38,38,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20, position: 'relative', zIndex: 1,
              }}>
                <Icon size={20} color="#F87171" />
              </div>
              <h3 style={{
                fontSize: '1rem', fontWeight: 700,
                color: '#F1F5F9', marginBottom: 10, position: 'relative', zIndex: 1,
              }}>{title}</h3>
              <p style={{
                fontSize: '0.875rem', color: '#64748B',
                lineHeight: 1.7, margin: 0, position: 'relative', zIndex: 1,
              }}>{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ textAlign: 'center', marginTop: 'clamp(40px, 6vw, 64px)' }}
        >
          <div style={{
            width: 1, height: 44, margin: '0 auto 24px',
            background: 'linear-gradient(to bottom, transparent, #1A56DB)',
          }} />
          <p style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)',
            fontWeight: 700, color: '#F1F5F9',
          }}>
            What if{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60A5FA, #0D9488)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>one app</span>
            {' '}replaced all of that?
          </p>
        </motion.div>
      </div>

      <style>{`
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 960px;
          margin: 0 auto;
        }
        .pain-card {
          padding: 32px 28px;
          background: rgba(255,255,255,0.03);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s, background 0.25s;
        }
        .pain-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(220,38,38,0.25);
        }
        .pain-num {
          position: absolute;
          top: 16px; right: 20px;
          font-size: 4rem; font-weight: 900;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          letter-spacing: -0.04em;
          pointer-events: none;
          user-select: none;
        }
        @media (max-width: 720px) {
          .pain-grid { grid-template-columns: 1fr; max-width: 480px; }
        }
      `}</style>
    </section>
  );
}
