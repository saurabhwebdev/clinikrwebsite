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
    <section id="story" style={{
      background: 'linear-gradient(160deg, #0A0F1E 0%, #0F172A 45%, #0D1425 100%)',
      padding: 'clamp(64px, 8vw, 100px) 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── Background layer ── */}

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* Top-left glow — blue brand */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%',
        width: '45%', height: '70%',
        background: 'radial-gradient(ellipse, rgba(26,86,219,0.18) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Centre glow — red/problem tone */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: '60%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(220,38,38,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom-right glow — teal accent */}
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%',
        width: '40%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(13,148,136,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Geometric ring — top right */}
      <svg style={{ position: 'absolute', top: '-60px', right: '-60px', opacity: 0.07, pointerEvents: 'none' }}
        width="320" height="320" viewBox="0 0 320 320" fill="none">
        <circle cx="160" cy="160" r="140" stroke="white" strokeWidth="1" />
        <circle cx="160" cy="160" r="100" stroke="white" strokeWidth="1" />
        <circle cx="160" cy="160" r="60" stroke="white" strokeWidth="1" />
        <line x1="20" y1="160" x2="300" y2="160" stroke="white" strokeWidth="0.8" />
        <line x1="160" y1="20" x2="160" y2="300" stroke="white" strokeWidth="0.8" />
        <line x1="60" y1="60" x2="260" y2="260" stroke="white" strokeWidth="0.5" />
        <line x1="260" y1="60" x2="60" y2="260" stroke="white" strokeWidth="0.5" />
      </svg>

      {/* Geometric ring — bottom left */}
      <svg style={{ position: 'absolute', bottom: '-80px', left: '-80px', opacity: 0.05, pointerEvents: 'none' }}
        width="280" height="280" viewBox="0 0 280 280" fill="none">
        <circle cx="140" cy="140" r="120" stroke="white" strokeWidth="1" />
        <circle cx="140" cy="140" r="80" stroke="white" strokeWidth="1" />
        <circle cx="140" cy="140" r="40" stroke="white" strokeWidth="1" />
        <line x1="20" y1="140" x2="260" y2="140" stroke="white" strokeWidth="0.7" />
        <line x1="140" y1="20" x2="140" y2="260" stroke="white" strokeWidth="0.7" />
      </svg>

      {/* Diagonal line accents */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }}
        preserveAspectRatio="none" viewBox="0 0 1200 600">
        <line x1="0" y1="600" x2="400" y2="0" stroke="white" strokeWidth="1" />
        <line x1="200" y1="600" x2="600" y2="0" stroke="white" strokeWidth="0.7" />
        <line x1="1200" y1="0" x2="800" y2="600" stroke="white" strokeWidth="1" />
        <line x1="1000" y1="0" x2="600" y2="600" stroke="white" strokeWidth="0.7" />
      </svg>

      {/* Floating particles */}
      {[
        { cx: '12%', cy: '25%', r: 2.5, color: '#1A56DB', op: 0.5 },
        { cx: '88%', cy: '15%', r: 2, color: '#DC2626', op: 0.4 },
        { cx: '75%', cy: '72%', r: 3, color: '#0D9488', op: 0.4 },
        { cx: '25%', cy: '80%', r: 2, color: '#1A56DB', op: 0.3 },
        { cx: '50%', cy: '10%', r: 2.5, color: '#F87171', op: 0.35 },
        { cx: '92%', cy: '55%', r: 2, color: '#60A5FA', op: 0.3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0], opacity: [p.op, p.op * 1.5, p.op] }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', left: p.cx, top: p.cy,
            width: p.r * 2, height: p.r * 2, borderRadius: '50%',
            background: p.color, boxShadow: `0 0 ${p.r * 4}px ${p.color}`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

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
            border: '1px solid rgba(220,38,38,0.22)',
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
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="pain-card"
            >
              {/* Card inner glow on hover */}
              <div className="pain-card-glow" />

              <div className="pain-num">{num}</div>

              <div style={{
                width: 50, height: 50, borderRadius: 14,
                background: 'rgba(220,38,38,0.1)',
                border: '1px solid rgba(220,38,38,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20, position: 'relative', zIndex: 1,
                boxShadow: '0 0 20px rgba(220,38,38,0.08)',
              }}>
                <Icon size={20} color="#F87171" />
              </div>

              <h3 style={{
                fontSize: '1rem', fontWeight: 700,
                color: '#F1F5F9', marginBottom: 10,
                position: 'relative', zIndex: 1, lineHeight: 1.4,
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
          <p style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)', fontWeight: 700, color: '#F1F5F9' }}>
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
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          backdrop-filter: blur(4px);
        }
        .pain-card:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(220,38,38,0.3);
          transform: translateY(-4px);
        }
        .pain-card-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 20% 20%, rgba(220,38,38,0.07) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .pain-card:hover .pain-card-glow { opacity: 1; }
        .pain-num {
          position: absolute;
          bottom: -8px; right: 16px;
          font-size: 5.5rem; font-weight: 900;
          color: rgba(255,255,255,0.03);
          line-height: 1; letter-spacing: -0.04em;
          pointer-events: none; user-select: none;
        }
        @media (max-width: 720px) {
          .pain-grid { grid-template-columns: 1fr; max-width: 480px; }
        }
      `}</style>
    </section>
  );
}
