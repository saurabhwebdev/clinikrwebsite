import { motion } from 'framer-motion';
import {
  Smartphone, Cloud, Moon, Languages,
  Fingerprint, Shield, Palette, Zap,
  Globe, Lock, RefreshCw, HeadphonesIcon
} from 'lucide-react';

const highlights = [
  { icon: Smartphone, title: 'Mobile First', desc: 'Designed for phones and tablets. Your clinic fits in your pocket.', color: '#4F46E5' },
  { icon: Cloud, title: 'Cloud Powered', desc: 'Supabase backend. Data syncs instantly across all devices.', color: '#3B82F6' },
  { icon: Zap, title: 'Blazing Fast', desc: 'Flutter-native 60fps performance. Instant navigation.', color: '#F97316' },
  { icon: Shield, title: 'Row-Level Security', desc: 'Each clinic\'s data is isolated with PostgreSQL RLS.', color: '#10B981' },
];

const extras = [
  { icon: Moon, text: 'Beautiful light & dark themes' },
  { icon: Languages, text: 'English and Hindi support' },
  { icon: Fingerprint, text: 'Biometric authentication' },
  { icon: Palette, text: 'Custom brand colors' },
  { icon: Globe, text: 'iOS, Android — one codebase' },
  { icon: Lock, text: 'Encrypted at rest and in transit' },
  { icon: RefreshCw, text: 'Real-time sync across devices' },
  { icon: HeadphonesIcon, text: 'Built-in help center and live support' },
];

export default function WhyCliniker() {
  return (
    <section className="section" id="why">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px' }}>
            Why Clinikr?
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            Built different. <span className="gradient-text">Built better.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Not just another clinic app. Crafted with attention to every detail —
            from security to aesthetics, from speed to scalability.
          </p>
        </motion.div>

        {/* 4 highlight cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32,
        }} className="grid-4">
          {highlights.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="why-card"
              style={{
                padding: 24,
                background: 'var(--surface)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'default',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: `${color}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 14,
              }}>
                <Icon size={20} color={color} />
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 6, color: 'var(--text)' }}>{title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Extras — compact 2-col list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px 20px',
            padding: '28px 32px',
            background: 'var(--surface)',
            borderRadius: 16,
            border: '1px solid var(--border)',
          }}
          className="grid-4"
        >
          {extras.map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Icon size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .why-card:hover {
          border-color: var(--primary-light) !important;
          box-shadow: 0 8px 32px rgba(79,70,229,0.06);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
