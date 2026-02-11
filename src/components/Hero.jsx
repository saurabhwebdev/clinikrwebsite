import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Stethoscope, Calendar, FileText, ShoppingCart,
  Package, FlaskConical, Users, BarChart3,
  Check, Clock, TrendingUp,
} from 'lucide-react';

/* ── floating glass cards ─────────────────────────────── */
const glassCards = [
  { Icon: Calendar,     label: 'Appointments', x: '5%',  y: '22%', delay: 0,    rotate: -6 },
  { Icon: Users,        label: 'Patients',     x: '87%', y: '18%', delay: 0.2,  rotate: 5 },
  { Icon: FileText,     label: 'EMR',          x: '2%',  y: '62%', delay: 0.4,  rotate: 4 },
  { Icon: ShoppingCart, label: 'POS & Billing', x: '85%', y: '58%', delay: 0.6,  rotate: -5 },
  { Icon: Package,      label: 'Inventory',    x: '10%', y: '82%', delay: 0.8,  rotate: 3 },
  { Icon: FlaskConical, label: 'Lab Orders',   x: '82%', y: '82%', delay: 1.0,  rotate: -4 },
];

/* ── Phone mockup UI rows ─────────────────────────────── */
const mockPatients = [
  { name: 'Rahul Sharma',  time: '10:30 AM', status: 'Checked In',  color: '#22C55E' },
  { name: 'Priya Singh',   time: '11:00 AM', status: 'Waiting',     color: '#F59E0B' },
  { name: 'Amit Patel',    time: '11:30 AM', status: 'Scheduled',   color: '#6366F1' },
  { name: 'Neha Gupta',    time: '12:00 PM', status: 'Scheduled',   color: '#6366F1' },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const mockupY     = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const mockupScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const bgBlobX1    = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const bgBlobX2    = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '130px 24px 60px',
      }}
    >
      {/* ── dot grid pattern ──────────────────────────── */}
      <div className="hero-dot-grid" />

      {/* ── animated mesh gradient blobs ──────────────── */}
      <motion.div className="hero-blob hero-blob-1" style={{ x: bgBlobX1 }} />
      <motion.div className="hero-blob hero-blob-2" style={{ x: bgBlobX2 }} />
      <motion.div className="hero-blob hero-blob-3" />

      {/* ── floating glass cards ──────────────────────── */}
      {glassCards.map(({ Icon, label, x, y, delay, rotate }, i) => (
        <motion.div
          key={label}
          className="hero-glass-card"
          initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate }}
          transition={{ delay: 0.8 + delay, duration: 0.7, ease: 'backOut' }}
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(124,58,237,0.1))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={16} color="#6366F1" />
            </div>
            <span style={{
              fontSize: '0.75rem', fontWeight: 600,
              color: 'var(--text)', letterSpacing: '-0.01em',
            }}>
              {label}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* ── main content ─────────────────────────────── */}
      <div style={{
        maxWidth: 800, textAlign: 'center',
        position: 'relative', zIndex: 2,
      }}>
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label" style={{ margin: '0 auto 28px' }}>
            <Stethoscope size={14} />
            Trusted by doctors
          </div>
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.12 }}
          style={{
            fontSize: 'clamp(2.6rem, 6.5vw, 4.25rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            marginBottom: 24,
          }}
        >
          Your entire clinic,{' '}
          <span className="hero-gradient-text">one app.</span>
        </motion.h1>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.24 }}
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto 36px',
          }}
        >
          Patients. Appointments. Records. Billing. POS. Inventory. Lab orders.
          — All beautifully connected. All in your pocket.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.36 }}
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#cta" className="hero-cta-primary">
            Start Free
          </a>
          <a href="#features" className="hero-cta-secondary">
            Explore Features
          </a>
        </motion.div>

        {/* trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            display: 'flex', gap: 20, justifyContent: 'center',
            flexWrap: 'wrap', marginTop: 40,
          }}
        >
          {[
            { icon: Check,       text: 'Free Forever' },
            { icon: Clock,       text: 'Setup in 2 min' },
            { icon: TrendingUp,  text: 'GST Compliant' },
            { icon: BarChart3,   text: 'Cloud-Powered' },
          ].map(({ icon: Ic, text }) => (
            <span key={text} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-secondary)',
            }}>
              <Ic size={14} color="var(--primary)" />
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── phone mockup ─────────────────────────────── */}
      <motion.div
        className="hero-mockup-wrapper"
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: mockupY, scale: mockupScale }}
      >
        {/* glow behind phone */}
        <div className="hero-mockup-glow" />

        <div className="hero-phone">
          {/* phone notch */}
          <div className="hero-phone-notch" />

          {/* status bar */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '12px 20px 8px', fontSize: '0.7rem', fontWeight: 600, color: '#1E293B',
          }}>
            <span>9:41</span>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <div style={{ width: 16, height: 10, borderRadius: 2, border: '1.5px solid #1E293B', position: 'relative' }}>
                <div style={{ position: 'absolute', right: 1.5, top: 1.5, bottom: 1.5, left: 1.5, background: '#22C55E', borderRadius: 1 }} />
              </div>
            </div>
          </div>

          {/* app header */}
          <div style={{
            padding: '8px 20px 16px', display: 'flex',
            alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 500, marginBottom: 2 }}>
                Good morning,
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#1E293B', letterSpacing: '-0.02em' }}>
                Dr. Sharma
              </div>
            </div>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: '0.8rem', fontWeight: 700,
            }}>
              DS
            </div>
          </div>

          {/* stats row */}
          <div style={{
            display: 'flex', gap: 8, padding: '0 16px 16px',
          }}>
            {[
              { n: '12', l: 'Today', c: '#4F46E5' },
              { n: '3',  l: 'Waiting', c: '#F59E0B' },
              { n: '8',  l: 'Done', c: '#22C55E' },
            ].map(s => (
              <div key={s.l} style={{
                flex: 1, padding: '12px 10px', borderRadius: 12,
                background: '#F8FAFC', textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: s.c }}>{s.n}</div>
                <div style={{ fontSize: '0.6rem', color: '#94A3B8', fontWeight: 500, marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* upcoming label */}
          <div style={{
            padding: '0 20px 10px', fontSize: '0.72rem',
            fontWeight: 700, color: '#1E293B', letterSpacing: '-0.01em',
          }}>
            Upcoming
          </div>

          {/* patient list */}
          <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {mockPatients.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.12, duration: 0.4 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 12px', borderRadius: 10,
                  background: i === 0 ? '#EEF2FF' : '#F8FAFC',
                  border: i === 0 ? '1px solid rgba(99,102,241,0.2)' : '1px solid transparent',
                }}
              >
                <div style={{
                  width: 30, height: 30, borderRadius: 8,
                  background: `${p.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.65rem', fontWeight: 700, color: p.color,
                }}>
                  {p.name.split(' ').map(w => w[0]).join('')}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#1E293B' }}>{p.name}</div>
                  <div style={{ fontSize: '0.58rem', color: '#94A3B8' }}>{p.time}</div>
                </div>
                <span style={{
                  fontSize: '0.55rem', fontWeight: 600, color: p.color,
                  padding: '3px 8px', borderRadius: 6,
                  background: `${p.color}12`,
                }}>
                  {p.status}
                </span>
              </motion.div>
            ))}
          </div>

          {/* bottom nav */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            display: 'flex', justifyContent: 'space-around', alignItems: 'center',
            padding: '10px 8px 18px', borderTop: '1px solid #F1F5F9',
            background: '#fff',
          }}>
            {[
              { Ic: Stethoscope, active: true },
              { Ic: Calendar, active: false },
              { Ic: FileText, active: false },
              { Ic: BarChart3, active: false },
            ].map(({ Ic, active }, i) => (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
              }}>
                <Ic size={18} color={active ? '#4F46E5' : '#CBD5E1'} />
                {active && <div style={{ width: 4, height: 4, borderRadius: 2, background: '#4F46E5' }} />}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── CSS ───────────────────────────────────────── */}
      <style>{`
        /* dot grid */
        .hero-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(79,70,229,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%);
        }

        /* gradient blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          will-change: transform;
        }
        .hero-blob-1 {
          width: 500px; height: 500px;
          top: -10%; right: -5%;
          background: radial-gradient(circle, rgba(79,70,229,0.12) 0%, rgba(99,102,241,0.06) 50%, transparent 70%);
          animation: blobDrift1 12s ease-in-out infinite alternate;
        }
        .hero-blob-2 {
          width: 400px; height: 400px;
          bottom: 5%; left: -5%;
          background: radial-gradient(circle, rgba(124,58,237,0.10) 0%, rgba(139,92,246,0.04) 50%, transparent 70%);
          animation: blobDrift2 10s ease-in-out infinite alternate;
        }
        .hero-blob-3 {
          width: 300px; height: 300px;
          top: 40%; left: 35%;
          background: radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%);
          animation: blobDrift3 14s ease-in-out infinite alternate;
        }
        @keyframes blobDrift1 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-30px, 20px) scale(1.08); }
        }
        @keyframes blobDrift2 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(20px, -15px) scale(1.05); }
        }
        @keyframes blobDrift3 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-15px, 10px) scale(1.1); }
        }

        /* glass cards */
        .hero-glass-card {
          position: absolute;
          z-index: 1;
          padding: 10px 14px;
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 4px 24px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03);
          pointer-events: none;
        }

        /* animated gradient text */
        .hero-gradient-text {
          background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 30%, #4F46E5 60%, #7C3AED 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite;
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        /* CTA buttons */
        .hero-cta-primary {
          padding: 14px 34px;
          background: linear-gradient(135deg, #4F46E5, #6366F1);
          color: #fff;
          border-radius: 14px;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(79,70,229,0.3), 0 0 0 0 rgba(79,70,229,0);
          position: relative;
          overflow: hidden;
        }
        .hero-cta-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .hero-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(79,70,229,0.4), 0 0 0 3px rgba(79,70,229,0.1);
        }
        .hero-cta-primary:hover::before { opacity: 1; }

        .hero-cta-secondary {
          padding: 14px 34px;
          background: var(--surface);
          color: var(--text);
          border-radius: 14px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid var(--border);
          transition: all 0.25s ease;
        }
        .hero-cta-secondary:hover {
          border-color: var(--primary-light);
          box-shadow: 0 4px 16px rgba(79,70,229,0.08);
          transform: translateY(-2px);
        }

        /* phone mockup */
        .hero-mockup-wrapper {
          position: relative;
          z-index: 2;
          margin-top: 56px;
          perspective: 1000px;
        }
        .hero-mockup-glow {
          position: absolute;
          width: 280px; height: 280px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }
        .hero-phone {
          position: relative;
          width: 260px;
          height: 520px;
          background: #fff;
          border-radius: 32px;
          border: 3px solid #E2E8F0;
          box-shadow:
            0 25px 60px rgba(0,0,0,0.08),
            0 8px 24px rgba(79,70,229,0.06),
            inset 0 0 0 1px rgba(255,255,255,0.8);
          overflow: hidden;
          transform: rotateY(-3deg) rotateX(2deg);
          transition: transform 0.5s ease;
        }
        .hero-phone:hover {
          transform: rotateY(0deg) rotateX(0deg);
        }
        .hero-phone-notch {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 100px; height: 24px;
          background: #fff;
          border-radius: 0 0 16px 16px;
          z-index: 10;
          border-bottom: 1px solid #F1F5F9;
        }
        .hero-phone-notch::after {
          content: '';
          position: absolute;
          top: 8px; left: 50%;
          transform: translateX(-50%);
          width: 40px; height: 4px;
          background: #E2E8F0;
          border-radius: 4px;
        }

        /* hide glass cards on small screens */
        @media (max-width: 900px) {
          .hero-glass-card { display: none; }
        }
        @media (max-width: 480px) {
          .hero-phone {
            width: 230px;
            height: 470px;
            transform: rotateY(0deg) rotateX(0deg);
          }
          .hero-mockup-wrapper { margin-top: 40px; }
        }
      `}</style>
    </section>
  );
}
