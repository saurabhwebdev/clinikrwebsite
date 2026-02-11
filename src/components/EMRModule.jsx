import { motion } from 'framer-motion';
import {
  ClipboardList, HeartPulse, Pill, FlaskConical,
  FileImage, Thermometer, Activity, Wind
} from 'lucide-react';

const vitals = [
  { icon: HeartPulse, label: 'Blood Pressure', unit: 'mmHg', color: '#EF4444' },
  { icon: Thermometer, label: 'Temperature', unit: '°C / °F', color: '#F59E0B' },
  { icon: Activity, label: 'Pulse / SpO2', unit: 'bpm / %', color: '#3B82F6' },
  { icon: Wind, label: 'Resp. Rate', unit: 'br/min', color: '#22C55E' },
];

const emrModules = [
  {
    icon: ClipboardList,
    title: 'Consultations',
    color: '#06B6D4',
    desc: 'Chief complaint, history, examination, diagnosis (with ICD-10), treatment plan, follow-up — full clinical documentation.',
  },
  {
    icon: Pill,
    title: 'Prescriptions',
    color: '#7C3AED',
    desc: 'Medicine search, dosage, frequency, timing (before/after meals), duration, special instructions — all structured.',
  },
  {
    icon: FlaskConical,
    title: 'Lab Orders',
    color: '#EC4899',
    desc: 'Order tests with priority levels (Routine, Urgent, STAT). Track status from ordered through completed.',
  },
  {
    icon: FileImage,
    title: 'Documents',
    color: '#F97316',
    desc: 'Upload X-rays, reports, images. Attach to consultations. Securely stored in the cloud.',
  },
];

export default function EMRModule() {
  return (
    <section className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px' }}>
            <ClipboardList size={14} /> Electronic Medical Records
          </div>
          <h2 className="section-title" style={{ maxWidth: 750, margin: '0 auto 16px' }}>
            Clinical documentation that's <span className="gradient-text">actually pleasant</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From the moment a patient walks in to the moment they leave — capture every vital,
            every diagnosis, every prescription. Structured, searchable, and shareable.
          </p>
        </motion.div>

        {/* Vitals bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 48,
            flexWrap: 'wrap',
          }}
        >
          {vitals.map(({ icon: Icon, label, unit, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 20px',
                background: 'var(--surface)',
                borderRadius: 14,
                border: '1px solid var(--border)',
                minWidth: 180,
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: `${color}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={18} color={color} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)' }}>{label}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{unit}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* EMR modules */}
        <div className="grid-2" style={{ maxWidth: 900, margin: '0 auto' }}>
          {emrModules.map(({ icon: Icon, title, color, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.12 }}
              className="feature-card"
            >
              <div className="icon-box" style={{ background: `${color}12` }}>
                <Icon size={22} color={color} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Visit report callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: 40,
            padding: '28px 32px',
            background: 'linear-gradient(135deg, var(--primary), #7C3AED)',
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: 4 }}>
              Auto-Generated Visit Reports
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
              One tap to generate a professional PDF with clinic branding, vitals, diagnosis, prescriptions, and lab orders.
            </p>
          </div>
          <span style={{
            padding: '10px 20px', background: 'rgba(255,255,255,0.2)', color: '#fff',
            borderRadius: 10, fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap',
          }}>
            Share via WhatsApp, Email & Print
          </span>
        </motion.div>
      </div>
    </section>
  );
}
