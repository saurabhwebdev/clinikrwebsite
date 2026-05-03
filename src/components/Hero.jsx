import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Stethoscope, Calendar, FileText, BarChart3,
  ArrowRight, Check, Clock, TrendingUp,
  ClipboardList, Pill, IndianRupee,
} from 'lucide-react';

const tabs = [
  { Ic: Stethoscope, label: 'Home' },
  { Ic: Calendar,    label: 'Appts' },
  { Ic: FileText,    label: 'Records' },
  { Ic: BarChart3,   label: 'Analytics' },
];

const screens = {
  0: {
    header: { greeting: 'Good morning,', name: 'Dr. Sharma' },
    stats: [
      { n: '12', l: 'Today',   c: '#1A56DB' },
      { n: '3',  l: 'Waiting', c: '#D97706' },
      { n: '8',  l: 'Done',    c: '#059669' },
    ],
    sectionLabel: 'Upcoming',
    rows: [
      { name: 'Rahul Sharma', sub: '10:30 AM', tag: 'Checked In', color: '#059669' },
      { name: 'Priya Singh',  sub: '11:00 AM', tag: 'Waiting',    color: '#D97706' },
      { name: 'Amit Patel',   sub: '11:30 AM', tag: 'Scheduled',  color: '#1A56DB' },
      { name: 'Neha Gupta',   sub: '12:00 PM', tag: 'Scheduled',  color: '#1A56DB' },
    ],
  },
  1: {
    header: { greeting: 'Schedule', name: 'Appointments' },
    stats: [
      { n: '5', l: 'Morning',   c: '#D97706' },
      { n: '4', l: 'Afternoon', c: '#1A56DB' },
      { n: '3', l: 'Evening',   c: '#0D9488' },
    ],
    sectionLabel: 'Today',
    rows: [
      { name: 'Kavita Reddy', sub: '09:00 AM — Consultation', tag: 'Confirmed',  color: '#059669' },
      { name: 'Rahul Sharma', sub: '10:30 AM — Follow-up',    tag: 'Checked In', color: '#1A56DB' },
      { name: 'Priya Singh',  sub: '11:00 AM — New Visit',    tag: 'Waiting',    color: '#D97706' },
      { name: 'Suresh Kumar', sub: '02:00 PM — Lab Review',   tag: 'Pending',    color: '#94A3B8' },
    ],
  },
  2: {
    header: { greeting: 'Medical', name: 'Records' },
    stats: [
      { n: '248', l: 'Patients',   c: '#1A56DB' },
      { n: '56',  l: 'This Month', c: '#059669' },
      { n: '12',  l: 'Today',      c: '#D97706' },
    ],
    sectionLabel: 'Recent Records',
    rows: [
      { name: 'Rahul Sharma', sub: 'Hypertension — BP Meds',  tag: 'Active',    color: '#059669', Ic: ClipboardList },
      { name: 'Priya Singh',  sub: 'Diabetes — Insulin',      tag: 'Follow-up', color: '#D97706', Ic: Pill },
      { name: 'Amit Patel',   sub: 'Dermatitis — Topical',    tag: 'Resolved',  color: '#94A3B8', Ic: FileText },
      { name: 'Neha Gupta',   sub: 'Thyroid — Levothyroxine', tag: 'Active',    color: '#059669', Ic: ClipboardList },
    ],
  },
  3: {
    header: { greeting: 'Revenue', name: 'Analytics' },
    stats: [
      { n: '₹1.2L', l: 'This Month', c: '#059669' },
      { n: '₹42K',  l: 'This Week',  c: '#1A56DB' },
      { n: '89%',   l: 'Collection', c: '#0D9488' },
    ],
    sectionLabel: 'Breakdown',
    rows: [
      { name: 'Consultations',  sub: '₹68,400 — 142 visits', tag: '57%', color: '#1A56DB', Ic: Stethoscope },
      { name: 'Prescriptions',  sub: '₹28,200 — 38 Rx',      tag: '24%', color: '#059669', Ic: Pill },
      { name: 'Billing',        sub: '₹15,800 — 86 invoices', tag: '13%', color: '#D97706', Ic: IndianRupee },
      { name: 'Other Income',   sub: '₹7,600 — Misc',        tag: '6%',  color: '#0D9488', Ic: TrendingUp },
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
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    if (hovered) return;
    const id = setInterval(() => setActiveTab(t => (t + 1) % 4), CYCLE_MS);
    return () => clearInterval(id);
  }, [hovered]);

  const screen = screens[activeTab];

  return (
    <section ref={sectionRef} className="hero-section">
      {/* single subtle background glow */}
      <div className="hero-glow" />

      <div className="hero-inner">
        {/* LEFT — copy */}
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <Stethoscope size={13} />
              Built for modern clinics
            </div>
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Your entire clinic,
            <br />
            <span className="hero-gradient-text">one app.</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            Patients, appointments, medical records, billing and
            inventory — beautifully connected, all in your pocket.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
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
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            {[
              { icon: Check,      text: 'Fair Pricing' },
              { icon: Clock,      text: 'Setup in 2 min' },
              { icon: TrendingUp, text: 'GST Compliant' },
            ].map(({ icon: Ic, text }) => (
              <span key={text} className="hero-trust-item">
                <Ic size={13} />
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — phone mockup */}
        <div className="hero-phone-area">
          <motion.div
            className={`hero-phone-col${hovered ? ' hero-phone-hovered' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: phoneY }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="hero-phone-frame">
              <div className="hero-phone">
                <div className="hero-phone-island" />

                <div className="hero-phone-statusbar">
                  <span>9:41</span>
                  <div className="hero-phone-battery">
                    <div className="hero-phone-battery-fill" />
                  </div>
                </div>

                <div style={{ position: 'relative', overflow: 'hidden', flex: 1 }}>
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={activeTab}
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '-100%' }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="hero-phone-screen"
                      style={{ position: 'absolute', inset: 0 }}
                    >
                      <div className="hero-phone-header">
                        <div>
                          <div style={{ fontSize: '0.56rem', color: '#94A3B8', fontWeight: 500 }}>
                            {screen.header.greeting}
                          </div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
                            {screen.header.name}
                          </div>
                        </div>
                        <div className="hero-phone-avatar">DS</div>
                      </div>

                      <div className="hero-phone-stats">
                        {screen.stats.map(s => (
                          <div key={s.l} className="hero-phone-stat">
                            <div style={{ fontSize: '1rem', fontWeight: 800, color: s.c }}>{s.n}</div>
                            <div style={{ fontSize: '0.5rem', color: '#94A3B8', fontWeight: 500, marginTop: 1 }}>{s.l}</div>
                          </div>
                        ))}
                      </div>

                      <div style={{ padding: '2px 16px 8px', fontSize: '0.64rem', fontWeight: 700, color: '#0F172A' }}>
                        {screen.sectionLabel}
                      </div>

                      <div className="hero-phone-list">
                        {screen.rows.map((r, i) => (
                          <div
                            key={r.name}
                            className="hero-phone-row"
                            style={{
                              background: i === 0 ? '#EFF6FF' : '#F8FAFC',
                              border: i === 0 ? '1px solid #BFDBFE' : '1px solid transparent',
                            }}
                          >
                            <div className="hero-phone-row-avatar" style={{ background: `${r.color}15`, color: r.color }}>
                              {r.name.split(' ').map(w => w[0]).join('')}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontSize: '0.64rem', fontWeight: 600, color: '#0F172A' }}>{r.name}</div>
                              <div style={{ fontSize: '0.5rem', color: '#94A3B8' }}>{r.sub}</div>
                            </div>
                            <span className="hero-phone-badge" style={{ background: `${r.color}12`, color: r.color }}>
                              {r.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="hero-phone-nav">
                  {tabs.map(({ Ic, label }, i) => (
                    <div
                      key={label}
                      className={`hero-phone-nav-item${activeTab === i ? ' active' : ''}`}
                      onClick={() => setActiveTab(i)}
                    >
                      <Ic size={16} color={activeTab === i ? '#1A56DB' : '#CBD5E1'} />
                      {activeTab === i && <div className="hero-phone-nav-dot" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 130px 24px 100px;
          background: #F8FAFC;
        }

        .hero-glow {
          position: absolute;
          width: 600px; height: 600px;
          top: 50%; right: 5%;
          transform: translateY(-50%);
          background: radial-gradient(ellipse, rgba(26,86,219,0.07) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        .hero-inner {
          position: relative; z-index: 1;
          max-width: 1140px; width: 100%;
          display: flex; align-items: center;
          justify-content: space-between; gap: 48px;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: #EFF6FF; color: #1A56DB;
          font-size: 0.78rem; font-weight: 600;
          padding: 7px 16px 7px 10px; border-radius: 100px;
          border: 1px solid #BFDBFE;
        }
        .hero-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #059669;
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(5,150,105,0.4); }
          50%     { box-shadow: 0 0 0 6px rgba(5,150,105,0); }
        }

        /* Copy */
        .hero-copy { flex: 1; max-width: 520px; }

        .hero-headline {
          font-size: clamp(2.6rem, 5.2vw, 3.8rem);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 24px 0 20px; color: #0F172A;
        }

        .hero-gradient-text {
          background: linear-gradient(135deg, #1A56DB 0%, #0D9488 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(0.97rem, 1.6vw, 1.08rem);
          color: #475569; line-height: 1.75;
          margin-bottom: 36px; max-width: 420px;
        }

        /* CTAs */
        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 32px; }

        .hero-cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px;
          background: #1A56DB;
          color: #fff; border-radius: 12px;
          font-size: 0.93rem; font-weight: 700;
          text-decoration: none; transition: all 0.22s ease;
          box-shadow: 0 4px 16px rgba(26,86,219,0.28);
          position: relative; overflow: hidden;
        }
        .hero-cta-primary:hover {
          background: #1E40AF;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(26,86,219,0.36);
        }
        .hero-cta-shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.1) 55%, transparent 80%);
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
          padding: 14px 28px;
          background: #fff; color: #0F172A;
          border-radius: 12px; font-size: 0.93rem; font-weight: 600;
          text-decoration: none; border: 1px solid #E2E8F0;
          transition: all 0.22s ease;
        }
        .hero-cta-secondary:hover {
          border-color: #BFDBFE;
          color: #1A56DB;
          box-shadow: 0 4px 12px rgba(26,86,219,0.07);
          transform: translateY(-2px);
        }

        /* Trust row */
        .hero-trust { display: flex; gap: 20px; flex-wrap: wrap; }
        .hero-trust-item {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.8rem; font-weight: 500; color: #94A3B8;
        }
        .hero-trust-item svg { color: #1A56DB; }

        /* Phone area */
        .hero-phone-area { position: relative; flex-shrink: 0; }

        .hero-phone-col { position: relative; cursor: pointer; }

        .hero-phone-frame {
          position: relative; padding: 3px; border-radius: 40px;
          background: linear-gradient(160deg, rgba(26,86,219,0.16), rgba(26,86,219,0.04), rgba(226,232,240,0.5));
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hero-phone-hovered .hero-phone-frame {
          background: linear-gradient(160deg, rgba(26,86,219,0.28), rgba(13,148,136,0.1), rgba(26,86,219,0.06));
        }

        .hero-phone {
          position: relative; width: 268px; height: 542px;
          background: #fff; border-radius: 38px; overflow: hidden;
          box-shadow:
            0 30px 70px rgba(0,0,0,0.07),
            0 4px 14px rgba(26,86,219,0.05);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          display: flex; flex-direction: column;
        }
        .hero-phone-hovered .hero-phone {
          transform: translateY(-6px);
          box-shadow:
            0 40px 90px rgba(0,0,0,0.10),
            0 8px 22px rgba(26,86,219,0.09);
        }

        .hero-phone-island {
          position: absolute; top: 8px; left: 50%;
          transform: translateX(-50%);
          width: 76px; height: 22px;
          background: #0F172A; border-radius: 20px; z-index: 10;
        }
        .hero-phone-statusbar {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 20px 6px;
          font-size: 0.63rem; font-weight: 600; color: #0F172A;
        }
        .hero-phone-battery {
          width: 18px; height: 9px; border-radius: 2px;
          border: 1.5px solid #0F172A; position: relative;
        }
        .hero-phone-battery::after {
          content: ''; position: absolute; right: -4px; top: 2px;
          width: 2px; height: 4px; background: #0F172A;
          border-radius: 0 1px 1px 0;
        }
        .hero-phone-battery-fill {
          position: absolute; inset: 1.5px;
          background: #059669; border-radius: 1px;
        }

        .hero-phone-screen { width: 100%; height: 100%; }
        .hero-phone-header {
          padding: 8px 16px 12px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .hero-phone-avatar {
          width: 32px; height: 32px; border-radius: 9px;
          background: linear-gradient(135deg, #1A56DB, #0D9488);
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
        .hero-phone-nav-item:hover { background: #EFF6FF; }
        .hero-phone-nav-dot {
          width: 4px; height: 4px; border-radius: 2px; background: #1A56DB;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .hero-section { padding: 110px 20px 80px; }
          .hero-inner { flex-direction: column; text-align: center; gap: 40px; }
          .hero-copy { max-width: 520px; display: flex; flex-direction: column; align-items: center; }
          .hero-subtitle { max-width: 400px; }
          .hero-ctas { justify-content: center; }
          .hero-trust { justify-content: center; }
          .hero-headline br { display: none; }
          .hero-glow { display: none; }
        }
        @media (max-width: 640px) {
          .hero-section { padding: 100px 16px 60px; min-height: auto; }
          .hero-inner { gap: 32px; }
          .hero-phone { width: 248px; height: 500px; }
          .hero-phone-frame { border-radius: 36px; }
          .hero-cta-primary, .hero-cta-secondary { padding: 12px 22px; font-size: 0.88rem; }
          .hero-trust { gap: 14px; }
        }
        @media (max-width: 480px) {
          .hero-phone { width: 228px; height: 460px; }
        }
      `}</style>
    </section>
  );
}
