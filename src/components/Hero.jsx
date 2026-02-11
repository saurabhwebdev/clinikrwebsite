import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Stethoscope, Calendar, FileText, BarChart3,
  Check, Clock, TrendingUp, ArrowRight,
} from 'lucide-react';

/* ── Phone mockup data ───────────────────────────────── */
const mockPatients = [
  { name: 'Rahul Sharma',  time: '10:30 AM', status: 'Checked In', color: '#22C55E' },
  { name: 'Priya Singh',   time: '11:00 AM', status: 'Waiting',    color: '#F59E0B' },
  { name: 'Amit Patel',    time: '11:30 AM', status: 'Scheduled',  color: '#6366F1' },
  { name: 'Neha Gupta',    time: '12:00 PM', status: 'Scheduled',  color: '#6366F1' },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      className="hero-section"
    >
      {/* ── background layers ────────────────────────── */}
      <div className="hero-dot-grid" />
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      {/* ── two-column layout ────────────────────────── */}
      <div className="hero-inner">

        {/* LEFT — copy ──────────────────────────────── */}
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              <Stethoscope size={14} />
              Built for modern clinics
            </div>
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your entire clinic,{' '}
            <span className="hero-gradient-text">one app.</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Patients. Appointments. Records. Billing. POS.
            Inventory. Lab orders — all beautifully connected,
            all in your pocket.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#cta" className="hero-cta-primary">
              Start Free
              <ArrowRight size={16} style={{ marginLeft: 6 }} />
            </a>
            <a href="#features" className="hero-cta-secondary">
              Explore Features
            </a>
          </motion.div>

          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {[
              { icon: Check,       text: 'Free Forever' },
              { icon: Clock,       text: 'Setup in 2 min' },
              { icon: TrendingUp,  text: 'GST Compliant' },
            ].map(({ icon: Ic, text }) => (
              <span key={text} className="hero-trust-item">
                <Ic size={13} color="var(--primary)" />
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — phone mockup ─────────────────────── */}
        <motion.div
          className="hero-phone-col"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: phoneY }}
        >
          <div className="hero-phone-glow" />

          <div className="hero-phone">
            {/* dynamic island */}
            <div className="hero-phone-island" />

            {/* status bar */}
            <div className="hero-phone-statusbar">
              <span>9:41</span>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <div className="hero-phone-battery">
                  <div className="hero-phone-battery-fill" />
                </div>
              </div>
            </div>

            {/* app header */}
            <div className="hero-phone-header">
              <div>
                <div style={{ fontSize: '0.6rem', color: '#94A3B8', fontWeight: 500 }}>
                  Good morning,
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1E293B', letterSpacing: '-0.02em' }}>
                  Dr. Sharma
                </div>
              </div>
              <div className="hero-phone-avatar">DS</div>
            </div>

            {/* stat cards */}
            <div className="hero-phone-stats">
              {[
                { n: '12', l: 'Today',   c: '#4F46E5' },
                { n: '3',  l: 'Waiting', c: '#F59E0B' },
                { n: '8',  l: 'Done',    c: '#22C55E' },
              ].map(s => (
                <div key={s.l} className="hero-phone-stat">
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: s.c }}>{s.n}</div>
                  <div style={{ fontSize: '0.55rem', color: '#94A3B8', fontWeight: 500, marginTop: 1 }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* section label */}
            <div style={{ padding: '4px 18px 8px', fontSize: '0.68rem', fontWeight: 700, color: '#1E293B' }}>
              Upcoming
            </div>

            {/* patient rows */}
            <div className="hero-phone-list">
              {mockPatients.map((p, i) => (
                <motion.div
                  key={p.name}
                  className="hero-phone-row"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.35 }}
                  style={{
                    background: i === 0 ? '#EEF2FF' : '#F8FAFC',
                    border: i === 0 ? '1px solid rgba(99,102,241,0.15)' : '1px solid transparent',
                  }}
                >
                  <div className="hero-phone-row-avatar" style={{ background: `${p.color}15`, color: p.color }}>
                    {p.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#1E293B' }}>{p.name}</div>
                    <div style={{ fontSize: '0.55rem', color: '#94A3B8' }}>{p.time}</div>
                  </div>
                  <span className="hero-phone-badge" style={{ background: `${p.color}10`, color: p.color }}>
                    {p.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* bottom nav */}
            <div className="hero-phone-nav">
              {[
                { Ic: Stethoscope, active: true },
                { Ic: Calendar, active: false },
                { Ic: FileText, active: false },
                { Ic: BarChart3, active: false },
              ].map(({ Ic, active }, i) => (
                <div key={i} className="hero-phone-nav-item">
                  <Ic size={17} color={active ? '#4F46E5' : '#CBD5E1'} />
                  {active && <div className="hero-phone-nav-dot" />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── styles ───────────────────────────────────── */}
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 120px 24px 80px;
        }

        /* ── background ─────────────────────── */
        .hero-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(79,70,229,0.06) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 60% 50% at 50% 45%, black 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 45%, black 20%, transparent 70%);
        }
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }
        .hero-blob-1 {
          width: 480px; height: 480px;
          top: -8%; right: 5%;
          background: radial-gradient(circle, rgba(79,70,229,0.10) 0%, transparent 70%);
          animation: blobFloat 14s ease-in-out infinite alternate;
        }
        .hero-blob-2 {
          width: 380px; height: 380px;
          bottom: 0; left: 5%;
          background: radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%);
          animation: blobFloat 11s ease-in-out infinite alternate-reverse;
        }
        @keyframes blobFloat {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-20px, 15px) scale(1.06); }
        }

        /* ── layout ─────────────────────────── */
        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1140px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        /* ── left column — copy ─────────────── */
        .hero-copy {
          flex: 1;
          max-width: 540px;
        }
        .hero-headline {
          font-size: clamp(2.4rem, 5.5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.035em;
          margin-top: 20px;
          margin-bottom: 20px;
          color: var(--text);
        }
        .hero-subtitle {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 460px;
        }
        .hero-gradient-text {
          background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 40%, #4F46E5 80%, #7C3AED 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 4s ease-in-out infinite;
        }
        @keyframes gradShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        /* ── CTAs ───────────────────────────── */
        .hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .hero-cta-primary {
          display: inline-flex;
          align-items: center;
          padding: 13px 30px;
          background: linear-gradient(135deg, #4F46E5, #6366F1);
          color: #fff;
          border-radius: 12px;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 18px rgba(79,70,229,0.25);
        }
        .hero-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(79,70,229,0.35);
        }
        .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          padding: 13px 30px;
          background: var(--surface);
          color: var(--text);
          border-radius: 12px;
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid var(--border);
          transition: all 0.25s ease;
        }
        .hero-cta-secondary:hover {
          border-color: var(--primary-light);
          box-shadow: 0 4px 14px rgba(79,70,229,0.08);
          transform: translateY(-2px);
        }

        /* ── trust ──────────────────────────── */
        .hero-trust {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }
        .hero-trust-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        /* ── right column — phone ───────────── */
        .hero-phone-col {
          position: relative;
          flex-shrink: 0;
        }
        .hero-phone-glow {
          position: absolute;
          width: 300px; height: 300px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(79,70,229,0.14) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
        }
        .hero-phone {
          position: relative;
          width: 270px;
          height: 540px;
          background: #fff;
          border-radius: 36px;
          border: 3px solid #E2E8F0;
          box-shadow:
            0 30px 80px rgba(0,0,0,0.07),
            0 8px 20px rgba(79,70,229,0.05);
          overflow: hidden;
        }
        .hero-phone-island {
          position: absolute;
          top: 8px; left: 50%;
          transform: translateX(-50%);
          width: 80px; height: 22px;
          background: #1E293B;
          border-radius: 20px;
          z-index: 10;
        }
        .hero-phone-statusbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px 6px;
          font-size: 0.65rem;
          font-weight: 600;
          color: #1E293B;
        }
        .hero-phone-battery {
          width: 18px; height: 9px;
          border-radius: 2px;
          border: 1.5px solid #1E293B;
          position: relative;
        }
        .hero-phone-battery::after {
          content: '';
          position: absolute;
          right: -4px; top: 2px;
          width: 2px; height: 4px;
          background: #1E293B;
          border-radius: 0 1px 1px 0;
        }
        .hero-phone-battery-fill {
          position: absolute;
          inset: 1.5px;
          background: #22C55E;
          border-radius: 1px;
        }
        .hero-phone-header {
          padding: 10px 18px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .hero-phone-avatar {
          width: 34px; height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #4F46E5, #7C3AED);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 0.75rem; font-weight: 700;
        }
        .hero-phone-stats {
          display: flex; gap: 6px;
          padding: 0 14px 14px;
        }
        .hero-phone-stat {
          flex: 1;
          padding: 10px 8px;
          border-radius: 10px;
          background: #F8FAFC;
          text-align: center;
        }
        .hero-phone-list {
          padding: 0 14px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .hero-phone-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 10px;
          border-radius: 10px;
        }
        .hero-phone-row-avatar {
          width: 28px; height: 28px;
          border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.6rem; font-weight: 700;
          flex-shrink: 0;
        }
        .hero-phone-badge {
          font-size: 0.5rem;
          font-weight: 600;
          padding: 2px 7px;
          border-radius: 5px;
          flex-shrink: 0;
        }
        .hero-phone-nav {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 8px 8px 16px;
          border-top: 1px solid #F1F5F9;
          background: #fff;
        }
        .hero-phone-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .hero-phone-nav-dot {
          width: 4px; height: 4px;
          border-radius: 2px;
          background: #4F46E5;
        }

        /* ── responsive ─────────────────────── */
        @media (max-width: 900px) {
          .hero-section {
            padding: 110px 20px 60px;
          }
          .hero-inner {
            flex-direction: column;
            text-align: center;
            gap: 48px;
          }
          .hero-copy {
            max-width: 520px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-subtitle {
            max-width: 420px;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-trust {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .hero-phone {
            width: 240px;
            height: 480px;
          }
        }
      `}</style>
    </section>
  );
}
