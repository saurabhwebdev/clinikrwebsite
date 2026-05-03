import { motion } from 'framer-motion';
import {
  Users, CalendarCheck, ClipboardList,
  Receipt, Package, BarChart3, ArrowRight,
} from 'lucide-react';

const modules = [
  {
    icon: Users,
    label: 'Patient Management',
    desc: 'Complete profiles, full visit history, demographics and smart search — every patient, always at hand.',
    color: '#1A56DB',
    tags: ['Visit History', 'Smart Search'],
  },
  {
    icon: CalendarCheck,
    label: 'Appointments',
    desc: 'Smart scheduling with conflict detection, status tracking and instant rescheduling.',
    color: '#0D9488',
    tags: ['Conflict Detection', 'Quick Book'],
  },
  {
    icon: ClipboardList,
    label: 'EMR & Prescriptions',
    desc: 'Digital prescriptions, vitals logging and clinical templates — all paperless.',
    color: '#7C3AED',
    tags: ['Vitals Logging', 'Templates'],
  },
  {
    icon: Receipt,
    label: 'Billing & Invoicing',
    desc: 'GST-compliant bills generated automatically with one tap. No errors, no delays.',
    color: '#D97706',
    tags: ['GST Compliant', 'Auto Calculate'],
  },
  {
    icon: Package,
    label: 'Inventory',
    desc: 'Track stock, expiry dates and reorder levels so you never run out.',
    color: '#059669',
    tags: ['Expiry Alerts', 'Reorder Levels'],
  },
  {
    icon: BarChart3,
    label: 'Reports & Analytics',
    desc: 'Revenue, visit trends and growth insights presented clearly at a glance.',
    color: '#3B82F6',
    tags: ['Revenue Trends', 'Growth Insights'],
  },
];

const stats = [
  { num: '1',   suffix: '',    label: 'App for everything' },
  { num: '2',   suffix: 'hrs', label: 'Saved every day' },
  { num: '0',   suffix: '',    label: 'Missed appointments' },
  { num: '100', suffix: '%',   label: 'Cloud backed up' },
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
          {modules.map(({ icon: Icon, label, desc, color, tags }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="sol-card"
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: `${color}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 18, flexShrink: 0,
              }}>
                <Icon size={22} color={color} />
              </div>
              <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>
                {label}
              </h3>
              <p style={{ fontSize: '0.855rem', color: '#64748B', lineHeight: 1.65, margin: '0 0 16px', flex: 1 }}>
                {desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                {tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 10px', borderRadius: 100,
                    fontSize: '0.72rem', fontWeight: 600,
                    background: `${color}0e`, color,
                    border: `1px solid ${color}1a`,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
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
          {stats.map(({ num, suffix, label }, i) => (
            <div key={label} style={{ textAlign: 'center', position: 'relative' }}>
              {i > 0 && (
                <div style={{
                  position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                  width: 1, height: 40, background: '#E2E8F0',
                }} />
              )}
              <div style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                fontWeight: 800, lineHeight: 1, marginBottom: 6,
                background: 'linear-gradient(135deg, #1A56DB, #0D9488)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {num}{suffix}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 500 }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .sol-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: clamp(24px, 4vw, 40px);
        }
        .sol-card {
          padding: 28px 24px;
          background: #fff;
          border-radius: 18px;
          border: 1px solid #E9EEF6;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
        }
        .sol-card:hover {
          box-shadow: 0 8px 28px rgba(26,86,219,0.08);
          transform: translateY(-3px);
          border-color: #BFDBFE;
        }
        .sol-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          padding: clamp(24px, 3.5vw, 36px) clamp(20px, 4vw, 48px);
          background: #fff;
          border-radius: 18px;
          border: 1px solid #E9EEF6;
        }
        @media (max-width: 900px) {
          .sol-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .sol-grid { grid-template-columns: 1fr; }
          .sol-stats { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
      `}</style>
    </section>
  );
}
