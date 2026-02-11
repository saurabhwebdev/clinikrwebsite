import { motion } from 'framer-motion';
import {
  Sparkles, Users, CalendarCheck, ClipboardList,
  Receipt, ShoppingBag, Package, FlaskConical, BarChart3
} from 'lucide-react';

const modules = [
  { icon: Users, label: 'Patients', color: '#4F46E5' },
  { icon: CalendarCheck, label: 'Appointments', color: '#22C55E' },
  { icon: ClipboardList, label: 'EMR', color: '#06B6D4' },
  { icon: Receipt, label: 'Invoicing', color: '#F59E0B' },
  { icon: ShoppingBag, label: 'POS', color: '#EF4444' },
  { icon: Package, label: 'Inventory', color: '#7C3AED' },
  { icon: FlaskConical, label: 'Lab Orders', color: '#EC4899' },
  { icon: BarChart3, label: 'Reports', color: '#10B981' },
];

export default function Solution() {
  return (
    <section className="section" id="features">
      <div className="container">
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

        {/* Module icons ring */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'center',
          marginBottom: 64,
        }}>
          {modules.map(({ icon: Icon, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: 'backOut' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                padding: '20px 24px',
                background: 'var(--surface)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                minWidth: 110,
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(79,70,229,0.08)' }}
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
                <Icon size={22} color={color} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)' }}>
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            padding: '40px',
            background: 'var(--surface)',
            borderRadius: 20,
            border: '1px solid var(--border)',
          }}
          className="grid-4"
        >
          {[
            { num: '8+', label: 'Core Modules' },
            { num: '60+', label: 'Feature Screens' },
            { num: '37', label: 'Data Models' },
            { num: '2', label: 'Languages' },
          ].map(({ num, label }) => (
            <div key={label} className="stat-item">
              <div className="stat-number">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
