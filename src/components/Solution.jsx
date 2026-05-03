import { motion } from 'framer-motion';
import {
  Users, CalendarCheck, ClipboardList,
  Receipt, Package, BarChart3, CheckCircle2
} from 'lucide-react';

const featured = [
  {
    icon: Users,
    label: 'Patient Management',
    desc: 'Complete profiles, full visit history, demographics and smart search — every patient, always at hand.',
    color: '#1A56DB',
    tags: ['Visit History', 'Demographics', 'Search & Filter'],
  },
  {
    icon: CalendarCheck,
    label: 'Appointments',
    desc: 'Smart scheduling with conflict detection, status tracking and instant rescheduling.',
    color: '#0D9488',
    tags: ['Status Tracking', 'Conflict Detection', 'Quick Book'],
  },
];

const modules = [
  {
    icon: ClipboardList,
    label: 'EMR & Prescriptions',
    desc: 'Digital prescriptions, vitals logging and clinical templates.',
    color: '#7C3AED',
  },
  {
    icon: Receipt,
    label: 'Billing & Invoicing',
    desc: 'Auto-calculated GST-compliant bills with one tap.',
    color: '#D97706',
  },
  {
    icon: Package,
    label: 'Inventory',
    desc: 'Track stock, expiry dates and reorder levels effortlessly.',
    color: '#059669',
  },
  {
    icon: BarChart3,
    label: 'Reports & Analytics',
    desc: 'Revenue, visit trends and growth insights at a glance.',
    color: '#1A56DB',
  },
];

const stats = [
  { num: '1',    suffix: '',   label: 'App replaces them all' },
  { num: '2',    suffix: 'hrs', label: 'Saved every day' },
  { num: '0',    suffix: '',   label: 'Missed appointments' },
  { num: '100',  suffix: '%',  label: 'Offline-capable' },
];

export default function Solution() {
  return (
    <section id="features" style={{ background: '#F8FAFC', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <div className="section-label" style={{ margin: '0 auto 14px' }}>
            The Solution
          </div>
          <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto 16px' }}>
            Meet <span className="gradient-text">ClinIKR</span> — everything your clinic needs
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: 460 }}>
            One app that replaces your appointment diary, billing software, inventory tracker and patient files.
          </p>
        </motion.div>

        {/* Module grid */}
        <div className="sol-grid">
          {/* Featured — 2 cols each */}
          {featured.map(({ icon: Icon, label, desc, color, tags }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="sol-featured"
              style={{ borderTop: `3px solid ${color}` }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 13,
                background: `${color}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}>
                <Icon size={22} color={color} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>
                {label}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65, margin: '0 0 16px' }}>
                {desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {tags.map(tag => (
                  <span key={tag} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    padding: '4px 10px', borderRadius: 100,
                    fontSize: '0.73rem', fontWeight: 500,
                    background: `${color}0d`, color,
                    border: `1px solid ${color}20`,
                  }}>
                    <CheckCircle2 size={11} />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Regular modules */}
          {modules.map(({ icon: Icon, label, desc, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 + i * 0.06 }}
              className="sol-card"
              style={{ borderTop: `3px solid ${color}` }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 11,
                background: `${color}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 14,
              }}>
                <Icon size={19} color={color} />
              </div>
              <h3 style={{ fontSize: '0.93rem', fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>
                {label}
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="sol-stats"
        >
          {stats.map(({ num, suffix, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                fontWeight: 800, lineHeight: 1, marginBottom: 6,
                background: 'linear-gradient(135deg, #1A56DB, #0D9488)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {num}{suffix}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .sol-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: clamp(32px, 5vw, 56px);
        }
        .sol-featured {
          grid-column: span 2;
          padding: 28px;
          background: #fff;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .sol-featured:hover {
          box-shadow: 0 8px 28px rgba(26,86,219,0.07);
          transform: translateY(-2px);
        }
        .sol-card {
          padding: 24px;
          background: #fff;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .sol-card:hover {
          box-shadow: 0 6px 20px rgba(26,86,219,0.06);
          transform: translateY(-2px);
        }
        .sol-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: clamp(24px, 4vw, 40px) clamp(20px, 4vw, 40px);
          background: #fff;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
        }
        @media (max-width: 1024px) {
          .sol-grid { grid-template-columns: repeat(2, 1fr); }
          .sol-featured { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .sol-grid { grid-template-columns: 1fr; }
          .sol-featured { grid-column: span 1; }
          .sol-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
