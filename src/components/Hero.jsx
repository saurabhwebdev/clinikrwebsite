import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Stethoscope, Calendar, FileText, BarChart3,
  ArrowRight, Check, Clock, TrendingUp,
  ClipboardList, Pill, IndianRupee,
  Users, Activity,
} from 'lucide-react';

/* ── tab definitions ─────────────────────────────────── */
const tabs = [
  { Ic: Stethoscope, label: 'Home' },
  { Ic: Calendar,    label: 'Appointments' },
  { Ic: FileText,    label: 'Records' },
  { Ic: BarChart3,   label: 'Analytics' },
];

/* ── screen content for each tab ─────────────────────── */
const screens = {
  0: {
    header: { greeting: 'Good morning,', name: 'Dr. Sharma' },
    stats: [
      { n: '12', l: 'Today',   c: '#4F46E5' },
      { n: '3',  l: 'Waiting', c: '#F59E0B' },
      { n: '8',  l: 'Done',    c: '#22C55E' },
    ],
    sectionLabel: 'Upcoming',
    rows: [
      { name: 'Rahul Sharma',  sub: '10:30 AM', tag: 'Checked In', color: '#22C55E' },
      { name: 'Priya Singh',   sub: '11:00 AM', tag: 'Waiting',    color: '#F59E0B' },
      { name: 'Amit Patel',    sub: '11:30 AM', tag: 'Scheduled',  color: '#6366F1' },
      { name: 'Neha Gupta',    sub: '12:00 PM', tag: 'Scheduled',  color: '#6366F1' },
    ],
  },
  1: {
    header: { greeting: 'Schedule', name: 'Appointments' },
    stats: [
      { n: '5',  l: 'Morning', c: '#F59E0B' },
      { n: '4',  l: 'Afternoon', c: '#4F46E5' },
      { n: '3',  l: 'Evening', c: '#7C3AED' },
    ],
    sectionLabel: 'Today',
    rows: [
      { name: 'Kavita Reddy',   sub: '09:00 AM — Consultation', tag: 'Confirmed', color: '#22C55E' },
      { name: 'Rahul Sharma',   sub: '10:30 AM — Follow-up',    tag: 'Checked In', color: '#4F46E5' },
      { name: 'Priya Singh',    sub: '11:00 AM — New Visit',     tag: 'Waiting',   color: '#F59E0B' },
      { name: 'Suresh Kumar',   sub: '02:00 PM — Lab Review',    tag: 'Pending',   color: '#94A3B8' },
    ],
  },
  2: {
    header: { greeting: 'Medical', name: 'Records' },
    stats: [
      { n: '248', l: 'Patients', c: '#4F46E5' },
      { n: '56',  l: 'This Month', c: '#22C55E' },
      { n: '12',  l: 'Today',   c: '#F59E0B' },
    ],
    sectionLabel: 'Recent Records',
    rows: [
      { name: 'Rahul Sharma',  sub: 'Hypertension — BP Meds',    tag: 'Active',    color: '#22C55E', Ic: ClipboardList },
      { name: 'Priya Singh',   sub: 'Diabetes — Insulin',         tag: 'Follow-up', color: '#F59E0B', Ic: Pill },
      { name: 'Amit Patel',    sub: 'Dermatitis — Topical',       tag: 'Resolved',  color: '#94A3B8', Ic: FileText },
      { name: 'Neha Gupta',    sub: 'Thyroid — Levothyroxine',    tag: 'Active',    color: '#22C55E', Ic: ClipboardList },
    ],
  },
  3: {
    header: { greeting: 'Revenue', name: 'Analytics' },
    stats: [
      { n: '₹1.2L', l: 'This Month', c: '#22C55E' },
      { n: '₹42K',  l: 'This Week',  c: '#4F46E5' },
      { n: '89%',   l: 'Collection',  c: '#7C3AED' },
    ],
    sectionLabel: 'Breakdown',
    rows: [
      { name: 'Consultations',  sub: '₹68,400 — 142 visits',    tag: '57%', color: '#4F46E5', Ic: Stethoscope },
      { name: 'Lab Orders',     sub: '₹28,200 — 38 tests',      tag: '24%', color: '#22C55E', Ic: BarChart3 },
      { name: 'Pharmacy Sales', sub: '₹15,800 — 86 orders',     tag: '13%', color: '#F59E0B', Ic: IndianRupee },
      { name: 'Other Income',   sub: '₹7,600 — Misc',           tag: '6%',  color: '#7C3AED', Ic: TrendingUp },
    ],
  },
};

const CYCLE_MS = 3000;

export default function Hero() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const phoneY   = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const floatY1  = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const floatY2  = useTransform(scrollYProgress, [0, 1], [0, -20]);

  /* auto-cycle tabs — pause on hover */
  useEffect(() => {
    if (hovered) return;
    const id = setInterval(() => setActiveTab(t => (t + 1) % 4), CYCLE_MS);
    return () => clearInterval(id);
  }, [hovered]);

  const screen = screens[activeTab];

  return (
    <section ref={sectionRef} className="hero-section">
      {/* ── background layers ────────────────────────── */}
      <div className="hero-dot-grid" />
      <div className="hero-accent-line hero-accent-line-1" />
      <div className="hero-accent-line hero-accent-line-2" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-fade-bottom" />

      <div className="hero-inner">
        {/* LEFT — copy ─────────────────────────────── */}
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <Stethoscope size={13} />
              Built for modern clinics
            </div>
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Your entire clinic,
            <br />
            <span className="hero-gradient-text">one app.</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            Patients, appointments, medical records, billing, POS,
            inventory, and lab orders — all beautifully connected,
            all in your pocket.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <a href="#cta" className="hero-cta-primary">
              <span className="hero-cta-shimmer" />
              Get Started
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a href="#features" className="hero-cta-secondary">
              Explore Features
            </a>
          </motion.div>

          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            {[
              { icon: Check,       text: 'Fair Pricing' },
              { icon: Clock,       text: 'Setup in 2 min' },
              { icon: TrendingUp,  text: 'GST Compliant' },
            ].map(({ icon: Ic, text }) => (
              <span key={text} className="hero-trust-item">
                <Ic size={13} />
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — phone + floating cards ─────────── */}
        <div className="hero-phone-area">
          <motion.div
            className={`hero-phone-col${hovered ? ' hero-phone-hovered' : ''}`}
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: phoneY }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="hero-phone-glow" />

            <div className="hero-phone-frame">
              <div className="hero-phone">
                <div className="hero-phone-island" />

                {/* status bar */}
                <div className="hero-phone-statusbar">
                  <span>9:41</span>
                  <div className="hero-phone-battery">
                    <div className="hero-phone-battery-fill" />
                  </div>
                </div>

                {/* screen content — slide on tab change */}
                <div style={{ position: 'relative', overflow: 'hidden', flex: 1 }}>
                <AnimatePresence initial={false}>
                  <motion.div
                    key={activeTab}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="hero-phone-screen"
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    {/* header */}
                    <div className="hero-phone-header">
                      <div>
                        <div style={{ fontSize: '0.56rem', color: '#94A3B8', fontWeight: 500 }}>
                          {screen.header.greeting}
                        </div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B', letterSpacing: '-0.02em' }}>
                          {screen.header.name}
                        </div>
                      </div>
                      <div className="hero-phone-avatar">DS</div>
                    </div>

                    {/* stats */}
                    <div className="hero-phone-stats">
                      {screen.stats.map(s => (
                        <div key={s.l} className="hero-phone-stat">
                          <div style={{ fontSize: '1rem', fontWeight: 800, color: s.c }}>{s.n}</div>
                          <div style={{ fontSize: '0.5rem', color: '#94A3B8', fontWeight: 500, marginTop: 1 }}>{s.l}</div>
                        </div>
                      ))}
                    </div>

                    {/* section label */}
                    <div style={{ padding: '2px 16px 8px', fontSize: '0.64rem', fontWeight: 700, color: '#1E293B' }}>
                      {screen.sectionLabel}
                    </div>

                    {/* rows */}
                    <div className="hero-phone-list">
                      {screen.rows.map((r, i) => (
                        <div
                          key={r.name}
                          className="hero-phone-row"
                          style={{
                            background: i === 0 ? '#EEF2FF' : '#F8FAFC',
                            border: i === 0 ? '1px solid rgba(99,102,241,0.12)' : '1px solid transparent',
                          }}
                        >
                          <div className="hero-phone-row-avatar" style={{ background: `${r.color}12`, color: r.color }}>
                            {r.name.split(' ').map(w => w[0]).join('')}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: '0.64rem', fontWeight: 600, color: '#1E293B' }}>{r.name}</div>
                            <div style={{ fontSize: '0.5rem', color: '#94A3B8' }}>{r.sub}</div>
                          </div>
                          <span className="hero-phone-badge" style={{ background: `${r.color}10`, color: r.color }}>
                            {r.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
                </div>

                {/* bottom nav — always visible, clickable */}
                <div className="hero-phone-nav">
                  {tabs.map(({ Ic, label }, i) => (
                    <div
                      key={label}
                      className={`hero-phone-nav-item${activeTab === i ? ' active' : ''}`}
                      onClick={() => setActiveTab(i)}
                    >
                      <Ic size={16} color={activeTab === i ? '#4F46E5' : '#CBD5E1'} />
                      {activeTab === i && <div className="hero-phone-nav-dot" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Floating stat cards ── */}
          <motion.div
            className="hero-float-card hero-float-card-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{ y: floatY1 }}
          >
            <div className="hero-float-icon" style={{ background: 'rgba(79,70,229,0.1)', color: '#4F46E5' }}>
              <Users size={14} />
            </div>
            <div>
              <div className="hero-float-value">2,480+</div>
              <div className="hero-float-label">Patients managed</div>
            </div>
          </motion.div>

          <motion.div
            className="hero-float-card hero-float-card-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{ y: floatY2 }}
          >
            <div className="hero-float-icon" style={{ background: 'rgba(34,197,94,0.1)', color: '#22C55E' }}>
              <Activity size={14} />
            </div>
            <div>
              <div className="hero-float-value">99.9%</div>
              <div className="hero-float-label">Uptime</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── styles ───────────────────────────────────── */}
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 130px 24px 100px;
          background: var(--bg);
        }

        /* ── Background: dot grid ── */
        .hero-dot-grid {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(79,70,229,0.045) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 65% 55% at 50% 42%, black 15%, transparent 68%);
          -webkit-mask-image: radial-gradient(ellipse 65% 55% at 50% 42%, black 15%, transparent 68%);
        }

        /* ── Background: accent lines ── */
        .hero-accent-line {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(79,70,229,0.06);
          pointer-events: none;
        }
        .hero-accent-line-1 {
          width: 650px; height: 650px;
          top: 50%; right: -120px; transform: translateY(-50%);
        }
        .hero-accent-line-2 {
          width: 950px; height: 950px;
          top: 50%; right: -270px; transform: translateY(-50%);
        }

        /* ── Background: soft orbs ── */
        .hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(90px); pointer-events: none;
        }
        .hero-orb-1 {
          width: 420px; height: 420px; top: -8%; right: 12%;
          background: radial-gradient(circle, rgba(79,70,229,0.09) 0%, transparent 70%);
          animation: orbFloat 16s ease-in-out infinite alternate;
        }
        .hero-orb-2 {
          width: 320px; height: 320px; bottom: 5%; left: 6%;
          background: radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%);
          animation: orbFloat 12s ease-in-out infinite alternate-reverse;
        }
        .hero-orb-3 {
          width: 220px; height: 220px; top: 55%; right: 28%;
          background: radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%);
          animation: orbFloat 18s ease-in-out infinite alternate;
        }
        @keyframes orbFloat {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-18px, 12px) scale(1.04); }
        }

        .hero-fade-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 120px;
          background: linear-gradient(to bottom, transparent, var(--bg));
          pointer-events: none;
        }

        /* ── Layout ── */
        .hero-inner {
          position: relative; z-index: 1;
          max-width: 1180px; width: 100%;
          display: flex; align-items: center;
          justify-content: space-between; gap: 48px;
        }

        /* ── Badge ── */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--primary-soft); color: var(--primary);
          font-size: 0.78rem; font-weight: 600;
          padding: 7px 16px 7px 12px; border-radius: 100px;
          border: 1px solid rgba(79,70,229,0.08);
        }
        .hero-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22C55E;
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50%     { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }

        /* ── Copy ── */
        .hero-copy { flex: 1; max-width: 540px; }

        .hero-headline {
          font-size: clamp(2.5rem, 5.5vw, 3.85rem);
          font-weight: 900; line-height: 1.05;
          letter-spacing: -0.035em;
          margin: 26px 0 22px; color: var(--text);
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
          0%,100% { background-position: 0% 50%; }
          50%     { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: clamp(1rem, 1.7vw, 1.12rem);
          color: var(--text-secondary); line-height: 1.75;
          margin-bottom: 36px; max-width: 440px;
        }

        /* ── CTAs ── */
        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 34px; }

        .hero-cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 30px;
          background: linear-gradient(135deg, #4F46E5, #6366F1);
          color: #fff; border-radius: 14px;
          font-size: 0.93rem; font-weight: 700;
          text-decoration: none; transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(79,70,229,0.28);
          position: relative; overflow: hidden;
        }
        .hero-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(79,70,229,0.38);
        }
        .hero-cta-shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.12) 55%, transparent 80%);
          transform: translateX(-100%);
          animation: ctaShimmer 3s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes ctaShimmer {
          0%   { transform: translateX(-100%); }
          60%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

        .hero-cta-secondary {
          display: inline-flex; align-items: center;
          padding: 14px 30px;
          background: var(--surface); color: var(--text);
          border-radius: 14px; font-size: 0.93rem; font-weight: 600;
          text-decoration: none; border: 1px solid var(--border);
          transition: all 0.25s ease;
        }
        .hero-cta-secondary:hover {
          border-color: var(--primary-light);
          box-shadow: 0 4px 14px rgba(79,70,229,0.08);
          transform: translateY(-2px);
        }

        /* ── Trust row ── */
        .hero-trust { display: flex; gap: 20px; flex-wrap: wrap; }
        .hero-trust-item {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.8rem; font-weight: 500; color: var(--text-muted);
        }
        .hero-trust-item svg { color: var(--primary); }

        /* ── Phone area (phone + floaters) ── */
        .hero-phone-area {
          position: relative; flex-shrink: 0;
        }

        /* ── Floating stat cards ── */
        .hero-float-card {
          position: absolute; z-index: 10;
          display: flex; align-items: center; gap: 10px;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 10px 16px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.06), 0 1px 4px rgba(79,70,229,0.04);
          white-space: nowrap;
        }
        .hero-float-card-1 {
          top: 60px; right: -48px;
        }
        .hero-float-card-2 {
          bottom: 100px; left: -54px;
        }
        .hero-float-icon {
          width: 32px; height: 32px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hero-float-value {
          font-size: 0.92rem; font-weight: 800;
          color: var(--text); letter-spacing: -0.02em;
        }
        .hero-float-label {
          font-size: 0.68rem; font-weight: 500;
          color: var(--text-muted); margin-top: -1px;
        }

        /* ── Phone ── */
        .hero-phone-col {
          position: relative;
          cursor: pointer;
        }
        .hero-phone-glow {
          position: absolute; width: 340px; height: 400px;
          top: 50%; left: 50%; transform: translate(-50%,-50%);
          background: radial-gradient(ellipse, rgba(79,70,229,0.10) 0%, rgba(124,58,237,0.03) 50%, transparent 70%);
          filter: blur(50px); pointer-events: none;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .hero-phone-hovered .hero-phone-glow {
          width: 380px; height: 440px;
          background: radial-gradient(ellipse, rgba(79,70,229,0.16) 0%, rgba(124,58,237,0.05) 50%, transparent 70%);
        }
        .hero-phone-frame {
          position: relative; padding: 3px; border-radius: 40px;
          background: linear-gradient(160deg, rgba(79,70,229,0.18), rgba(124,58,237,0.08), rgba(226,232,240,0.5));
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .hero-phone-hovered .hero-phone-frame {
          background: linear-gradient(160deg, rgba(79,70,229,0.30), rgba(124,58,237,0.16), rgba(99,102,241,0.1));
        }
        .hero-phone {
          position: relative; width: 270px; height: 545px;
          background: #fff; border-radius: 38px; overflow: hidden;
          box-shadow:
            0 30px 80px rgba(0,0,0,0.07),
            0 4px 16px rgba(79,70,229,0.05),
            0 0 0 0.5px rgba(0,0,0,0.03);
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s cubic-bezier(0.22,1,0.36,1);
          display: flex; flex-direction: column;
        }
        .hero-phone-hovered .hero-phone {
          transform: translateY(-5px);
          box-shadow:
            0 40px 100px rgba(0,0,0,0.10),
            0 8px 24px rgba(79,70,229,0.08),
            0 0 0 0.5px rgba(0,0,0,0.04);
        }

        .hero-phone-island {
          position: absolute; top: 8px; left: 50%;
          transform: translateX(-50%);
          width: 76px; height: 22px;
          background: #1E293B; border-radius: 20px; z-index: 10;
        }
        .hero-phone-statusbar {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 20px 6px;
          font-size: 0.63rem; font-weight: 600; color: #1E293B;
        }
        .hero-phone-battery {
          width: 18px; height: 9px; border-radius: 2px;
          border: 1.5px solid #1E293B; position: relative;
        }
        .hero-phone-battery::after {
          content: ''; position: absolute; right: -4px; top: 2px;
          width: 2px; height: 4px; background: #1E293B;
          border-radius: 0 1px 1px 0;
        }
        .hero-phone-battery-fill {
          position: absolute; inset: 1.5px;
          background: #22C55E; border-radius: 1px;
        }

        .hero-phone-screen { width: 100%; height: 100%; }
        .hero-phone-header {
          padding: 8px 16px 12px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .hero-phone-avatar {
          width: 32px; height: 32px; border-radius: 9px;
          background: linear-gradient(135deg, #4F46E5, #7C3AED);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 0.7rem; font-weight: 700;
        }
        .hero-phone-stats { display: flex; gap: 5px; padding: 0 12px 12px; }
        .hero-phone-stat {
          flex: 1; padding: 9px 6px;
          border-radius: 10px; background: #F8FAFC; text-align: center;
        }
        .hero-phone-list {
          padding: 0 12px;
          display: flex; flex-direction: column; gap: 4px;
        }
        .hero-phone-row {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 10px; border-radius: 10px;
        }
        .hero-phone-row-avatar {
          width: 26px; height: 26px; border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.56rem; font-weight: 700; flex-shrink: 0;
        }
        .hero-phone-badge {
          font-size: 0.48rem; font-weight: 600;
          padding: 2px 6px; border-radius: 5px; flex-shrink: 0;
        }
        .hero-phone-nav {
          position: absolute; bottom: 0; left: 0; right: 0;
          display: flex; justify-content: space-around; align-items: center;
          padding: 8px 8px 16px;
          border-top: 1px solid #F1F5F9; background: #fff;
        }
        .hero-phone-nav-item {
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          cursor: pointer; padding: 4px 8px; border-radius: 8px;
          transition: background 0.2s ease;
        }
        .hero-phone-nav-item:hover { background: rgba(79,70,229,0.05); }
        .hero-phone-nav-dot {
          width: 4px; height: 4px; border-radius: 2px; background: #4F46E5;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .hero-section { padding: 110px 20px 80px; }
          .hero-inner { flex-direction: column; text-align: center; gap: 48px; }
          .hero-copy {
            max-width: 520px;
            display: flex; flex-direction: column; align-items: center;
          }
          .hero-subtitle { max-width: 420px; }
          .hero-ctas { justify-content: center; }
          .hero-trust { justify-content: center; }
          .hero-headline br { display: none; }
          .hero-accent-line { display: none; }
          .hero-orb { display: none; }
          .hero-float-card { display: none; }
        }
        @media (max-width: 640px) {
          .hero-section { padding: 100px 16px 60px; min-height: auto; }
          .hero-inner { gap: 36px; }
          .hero-phone { width: 250px; height: 500px; }
          .hero-phone-frame { border-radius: 36px; }
          .hero-cta-primary, .hero-cta-secondary { padding: 12px 24px; font-size: 0.88rem; }
          .hero-trust { gap: 12px; }
        }
        @media (max-width: 480px) {
          .hero-phone { width: 230px; height: 460px; }
          .hero-phone-frame { border-radius: 34px; }
        }
      `}</style>
    </section>
  );
}
