import { motion } from 'framer-motion';
import {
  Sparkles, Users, CalendarCheck, ClipboardList,
  Receipt, ShoppingBag, Package, FlaskConical, BarChart3,
  CheckCircle2
} from 'lucide-react';

const modules = [
  {
    icon: Users,
    label: 'Patient Management',
    desc: 'Complete profiles, visit history, and demographics in one place.',
    color: '#4F46E5',
    featured: true,
  },
  {
    icon: CalendarCheck,
    label: 'Appointments',
    desc: 'Smart scheduling with conflict detection and status tracking.',
    color: '#22C55E',
    featured: true,
  },
  {
    icon: ClipboardList,
    label: 'EMR',
    desc: 'Digital prescriptions, vitals, templates.',
    color: '#06B6D4',
  },
  {
    icon: Receipt,
    label: 'Invoicing',
    desc: 'Auto-calculated bills with tax support.',
    color: '#F59E0B',
  },
  {
    icon: ShoppingBag,
    label: 'POS',
    desc: 'Sell products right from your clinic.',
    color: '#EF4444',
  },
  {
    icon: Package,
    label: 'Inventory',
    desc: 'Track stock, expiry, and reorder levels.',
    color: '#7C3AED',
  },
  {
    icon: FlaskConical,
    label: 'Lab Orders',
    desc: 'Order and track lab tests seamlessly.',
    color: '#EC4899',
  },
  {
    icon: BarChart3,
    label: 'Reports',
    desc: 'Revenue, visits, and growth analytics.',
    color: '#10B981',
  },
];

const stats = [
  { num: '1', label: 'App replaces them all', suffix: '' },
  { num: '2', label: 'Hours saved daily', suffix: 'hrs' },
  { num: '0', label: 'Missed appointments', suffix: '' },
  { num: '100', label: 'Offline-capable', suffix: '%' },
];

export default function Solution() {
  const featured = modules.filter(m => m.featured);
  const rest = modules.filter(m => !m.featured);

  return (
    <section className="section" id="features" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated purple glow background */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        width: 700,
        height: 700,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px' }}>
            <Sparkles size={14} /> The Solution
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            Meet <span className="gradient-text">Clinikr</span> — everything your clinic needs
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            One app that replaces your appointment diary, billing software, inventory tracker,
            patient files, and lab order book. Beautifully designed. Dead simple to use.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
          marginBottom: 64,
        }} className="bento-grid">
          {/* Featured modules — span 2 cols each */}
          {featured.map(({ icon: Icon, label, desc, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bento-featured"
              style={{
                gridColumn: 'span 2',
                padding: '32px',
                background: 'var(--surface)',
                borderRadius: 20,
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle color accent in corner */}
              <div style={{
                position: 'absolute',
                top: -40,
                right: -40,
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${color}10 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: `${color}12`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon size={24} color={color} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 6,
                }}>
                  {label}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {desc}
                </p>
              </div>

              {/* Feature bullets */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginTop: 4,
              }}>
                {(i === 0
                  ? ['Visit History', 'Demographics', 'Search & Filter']
                  : ['Status Tracking', 'Conflict Detection', 'Quick Book']
                ).map(tag => (
                  <span key={tag} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 10px',
                    borderRadius: 100,
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    background: `${color}08`,
                    color: color,
                    border: `1px solid ${color}15`,
                  }}>
                    <CheckCircle2 size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Regular modules — 1 col each */}
          {rest.map(({ icon: Icon, label, desc, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="bento-item"
              style={{
                padding: '24px',
                background: 'var(--surface)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'default',
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: `${color}12`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon size={20} color={color} />
              </div>
              <h3 style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--text)',
                margin: 0,
              }}>
                {label}
              </h3>
              <p style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                margin: 0,
              }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Outcome stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            padding: '40px 32px',
            background: 'linear-gradient(135deg, rgba(79,70,229,0.04) 0%, rgba(124,58,237,0.04) 100%)',
            borderRadius: 20,
            border: '1px solid var(--border)',
          }}
          className="grid-4"
        >
          {stats.map(({ num, label, suffix }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                lineHeight: 1,
                marginBottom: 6,
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {num}{suffix}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                fontWeight: 500,
              }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .bento-featured:hover {
          border-color: var(--primary-light) !important;
          box-shadow: 0 8px 32px rgba(79,70,229,0.08);
          transform: translateY(-2px);
        }
        .bento-item:hover {
          border-color: var(--primary-light) !important;
          box-shadow: 0 6px 24px rgba(79,70,229,0.06);
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .bento-featured {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-featured {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
