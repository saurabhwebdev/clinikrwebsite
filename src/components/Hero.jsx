import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Stethoscope, Calendar, FileText, BarChart3,
  Check, Clock, TrendingUp, ArrowRight,
  ClipboardList, Pill, IndianRupee,
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
  0: { /* Dashboard */
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
  1: { /* Appointments */
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
  2: { /* EMR */
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
  3: { /* Analytics */
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  /* auto-cycle tabs */
  useEffect(() => {
    const id = setInterval(() => setActiveTab(t => (t + 1) % 4), CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const screen = screens[activeTab];

  return (
    <section ref={sectionRef} className="hero-section">
      {/* ── background ───────────────────────────────── */}
      <div className="hero-dot-grid" />
      <div className="hero-ring hero-ring-1" />
      <div className="hero-ring hero-ring-2" />
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
      <div className="hero-fade-bottom" />

      <div className="hero-inner">
        {/* LEFT — copy ─────────────────────────────── */}
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <Stethoscope size={13} />
              Built for modern clinics
            </div>
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Your entire clinic,{' '}
            <br />
            <span className="hero-gradient-text">one app.</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Patients, appointments, medical records, billing, POS,
            inventory, and lab orders — all beautifully connected,
            all in your pocket.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#cta" className="hero-cta-primary">
              <span className="hero-cta-shimmer" />
              Start Free
              <ArrowRight size={16} style={{ marginLeft: 8 }} />
            </a>
            <a href="#features" className="hero-cta-secondary">
              Explore Features
            </a>
          </motion.div>

          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {[
              { icon: Check,       text: 'Free Forever' },
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

        {/* RIGHT — phone ───────────────────────────── */}
        <motion.div
          className="hero-phone-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: phoneY }}
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

              {/* screen content — crossfade on tab change */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="hero-phone-screen"
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

              {/* bottom nav — always visible */}
              <div className="hero-phone-nav">
                {tabs.map(({ Ic, label }, i) => (
                  <div key={label} className="hero-phone-nav-item">
                    <Ic size={16} color={activeTab === i ? '#4F46E5' : '#CBD5E1'} />
                    {activeTab === i && <div className="hero-phone-nav-dot" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── styles ───────────────────────────────────── */}
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 130px 24px 100px;
        }

        .hero-dot-grid {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(79,70,229,0.05) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 65% 55% at 50% 42%, black 15%, transparent 68%);
          -webkit-mask-image: radial-gradient(ellipse 65% 55% at 50% 42%, black 15%, transparent 68%);
        }
        .hero-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(79,70,229,0.06);
          pointer-events: none;
        }
        .hero-ring-1 { width: 600px; height: 600px; top: 50%; right: -100px; transform: translateY(-50%); }
        .hero-ring-2 { width: 900px; height: 900px; top: 50%; right: -250px; transform: translateY(-50%); }

        .hero-blob { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
        .hero-blob-1 {
          width: 450px; height: 450px; top: -5%; right: 10%;
          background: radial-gradient(circle, rgba(79,70,229,0.10) 0%, transparent 70%);
          animation: blobFloat 14s ease-in-out infinite alternate;
        }
        .hero-blob-2 {
          width: 350px; height: 350px; bottom: 5%; left: 8%;
          background: radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%);
          animation: blobFloat 11s ease-in-out infinite alternate-reverse;
        }
        .hero-blob-3 {
          width: 250px; height: 250px; top: 60%; right: 30%;
          background: radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%);
          animation: blobFloat 16s ease-in-out infinite alternate;
        }
        @keyframes blobFloat {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(-20px,12px) scale(1.05); }
        }
        .hero-fade-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 120px;
          background: linear-gradient(to bottom, transparent, var(--bg));
          pointer-events: none;
        }

        .hero-inner {
          position: relative; z-index: 1;
          max-width: 1160px; width: 100%;
          display: flex; align-items: center;
          justify-content: space-between; gap: 48px;
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--primary-soft); color: var(--primary);
          font-size: 0.78rem; font-weight: 600;
          padding: 7px 16px 7px 12px; border-radius: 100px;
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

        .hero-copy { flex: 1; max-width: 540px; }
        .hero-headline {
          font-size: clamp(2.4rem,5.5vw,3.75rem);
          font-weight: 900; line-height: 1.06;
          letter-spacing: -0.035em;
          margin: 24px 0 22px; color: var(--text);
        }
        .hero-subtitle {
          font-size: clamp(1rem,1.7vw,1.12rem);
          color: var(--text-secondary); line-height: 1.75;
          margin-bottom: 36px; max-width: 440px;
        }
        .hero-gradient-text {
          background: linear-gradient(135deg,#4F46E5 0%,#7C3AED 40%,#4F46E5 80%,#7C3AED 100%);
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

        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 32px; }
        .hero-cta-primary {
          display: inline-flex; align-items: center;
          padding: 14px 32px;
          background: linear-gradient(135deg,#4F46E5,#6366F1);
          color: #fff; border-radius: 13px;
          font-size: 0.93rem; font-weight: 700;
          text-decoration: none; transition: all 0.25s ease;
          box-shadow: 0 4px 18px rgba(79,70,229,0.25);
          position: relative; overflow: hidden;
        }
        .hero-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(79,70,229,0.35);
        }
        .hero-cta-shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(110deg,transparent 20%,rgba(255,255,255,0.15) 45%,rgba(255,255,255,0.25) 50%,rgba(255,255,255,0.15) 55%,transparent 80%);
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
          padding: 14px 32px;
          background: var(--surface); color: var(--text);
          border-radius: 13px; font-size: 0.93rem; font-weight: 600;
          text-decoration: none; border: 1px solid var(--border);
          transition: all 0.25s ease;
        }
        .hero-cta-secondary:hover {
          border-color: var(--primary-light);
          box-shadow: 0 4px 14px rgba(79,70,229,0.08);
          transform: translateY(-2px);
        }

        .hero-trust { display: flex; gap: 20px; flex-wrap: wrap; }
        .hero-trust-item {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.8rem; font-weight: 500; color: var(--text-muted);
        }
        .hero-trust-item svg { color: var(--primary); }

        /* phone */
        .hero-phone-col { position: relative; flex-shrink: 0; }
        .hero-phone-glow {
          position: absolute; width: 340px; height: 400px;
          top: 50%; left: 50%; transform: translate(-50%,-50%);
          background: radial-gradient(ellipse,rgba(79,70,229,0.12) 0%,rgba(124,58,237,0.04) 50%,transparent 70%);
          filter: blur(50px); pointer-events: none;
        }
        .hero-phone-frame {
          position: relative; padding: 3px; border-radius: 40px;
          background: linear-gradient(160deg,rgba(79,70,229,0.15),rgba(124,58,237,0.08),rgba(226,232,240,0.5));
        }
        .hero-phone {
          position: relative; width: 270px; height: 540px;
          background: #fff; border-radius: 38px; overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.06), 0 4px 16px rgba(79,70,229,0.04);
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

        .hero-phone-screen { padding-bottom: 50px; }
        .hero-phone-header {
          padding: 8px 16px 12px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .hero-phone-avatar {
          width: 32px; height: 32px; border-radius: 9px;
          background: linear-gradient(135deg,#4F46E5,#7C3AED);
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
        }
        .hero-phone-nav-dot {
          width: 4px; height: 4px; border-radius: 2px; background: #4F46E5;
        }

        @media (max-width: 960px) {
          .hero-section { padding: 110px 20px 80px; }
          .hero-inner { flex-direction: column; text-align: center; gap: 56px; }
          .hero-copy {
            max-width: 520px;
            display: flex; flex-direction: column; align-items: center;
          }
          .hero-subtitle { max-width: 420px; }
          .hero-ctas { justify-content: center; }
          .hero-trust { justify-content: center; }
          .hero-headline br { display: none; }
          .hero-ring { display: none; }
        }
        @media (max-width: 480px) {
          .hero-phone { width: 240px; height: 480px; }
          .hero-phone-frame { border-radius: 36px; }
        }
      `}</style>
    </section>
  );
}
