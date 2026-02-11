import { motion } from 'framer-motion';
import {
  Smartphone, Cloud, Moon, Languages,
  Fingerprint, Shield, Palette, Zap,
  Globe, Lock, RefreshCw, HeadphonesIcon
} from 'lucide-react';

const reasons = [
  { icon: Smartphone, title: 'Mobile First', desc: 'Designed for phones and tablets. Your clinic fits in your pocket.', color: '#4F46E5' },
  { icon: Cloud, title: 'Cloud Powered', desc: 'Supabase backend. Data syncs instantly. No local servers needed.', color: '#3B82F6' },
  { icon: Moon, title: 'Dark Mode', desc: 'Beautiful light and dark themes. Easy on the eyes during late hours.', color: '#7C3AED' },
  { icon: Languages, title: 'Multi-Language', desc: 'English and Hindi. More languages coming. Serve every patient.', color: '#F59E0B' },
  { icon: Fingerprint, title: 'Biometric Auth', desc: 'Fingerprint and face recognition. Patient data stays safe.', color: '#EF4444' },
  { icon: Shield, title: 'Row-Level Security', desc: 'Each clinic\'s data is isolated. PostgreSQL RLS ensures privacy.', color: '#10B981' },
  { icon: Palette, title: 'Custom Theming', desc: 'Pick your brand color. The entire app adapts to your identity.', color: '#EC4899' },
  { icon: Zap, title: 'Blazing Fast', desc: 'Flutter-native performance. 60fps animations. Instant navigation.', color: '#F97316' },
  { icon: Globe, title: 'Works Everywhere', desc: 'iOS, Android, and beyond. One codebase, every platform.', color: '#06B6D4' },
  { icon: Lock, title: 'HIPAA-Mindful', desc: 'Encrypted at rest and in transit. Built with healthcare compliance in mind.', color: '#4F46E5' },
  { icon: RefreshCw, title: 'Real-Time Sync', desc: 'Changes reflect instantly. No manual refresh needed.', color: '#22C55E' },
  { icon: HeadphonesIcon, title: 'Built-in Support', desc: 'Help center, FAQs, support tickets, WhatsApp — help is always near.', color: '#7C3AED' },
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
            Not just another clinic app. Clinikr is crafted with attention to every detail —
            from security to aesthetics, from speed to scalability.
          </p>
        </motion.div>

        <div className="grid-4">
          {reasons.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="feature-card"
              style={{ padding: 24 }}
            >
              <div className="icon-box" style={{ background: `${color}12` }}>
                <Icon size={20} color={color} />
              </div>
              <h3 style={{ fontSize: '0.95rem' }}>{title}</h3>
              <p style={{ fontSize: '0.82rem' }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
