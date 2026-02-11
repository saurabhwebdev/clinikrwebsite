import { motion } from 'framer-motion';
import {
  Users, UserPlus, Search, FileText,
  Phone, Mail, MapPin, Heart
} from 'lucide-react';

const features = [
  { icon: UserPlus, title: 'Smart Registration', desc: 'Auto-generated Patient IDs. Complete profiles with medical history, contact details, and demographics.' },
  { icon: Search, title: 'Instant Search', desc: 'Find any patient by name, phone, or ID in milliseconds. Filter by status, date, or condition.' },
  { icon: FileText, title: 'Complete History', desc: 'Every appointment, consultation, invoice, prescription, and lab order — linked to the patient.' },
  { icon: Heart, title: 'Patient Dashboard', desc: 'One-glance view of vitals, upcoming visits, outstanding balances, and medical timeline.' },
];

export default function PatientModule() {
  return (
    <section className="section section-alt" id="modules">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="grid-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              <Users size={14} /> Patient Management
            </div>
            <h2 className="section-title">
              Every patient. <span className="gradient-text">Every detail.</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              The journey starts with your patients. Clinikr gives each one a comprehensive
              digital profile — their entire medical life in one place.
            </p>

            {/* Mini feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: Phone, text: 'Phone, email, address — all stored securely' },
                { icon: MapPin, text: 'Gender, DOB, blood group, allergies' },
                { icon: Mail, text: 'Share reports via WhatsApp or email' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'var(--primary-soft)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={16} color="var(--primary)" />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid-2">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="feature-card"
                  style={{ padding: 24 }}
                >
                  <div className="icon-box" style={{ background: '#EEF2FF' }}>
                    <Icon size={20} color="var(--primary)" />
                  </div>
                  <h3 style={{ fontSize: '0.95rem' }}>{title}</h3>
                  <p style={{ fontSize: '0.82rem' }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
