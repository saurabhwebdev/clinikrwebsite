import { motion } from 'framer-motion';
import {
  ClipboardList, HeartPulse, Pill, FlaskConical,
  FileImage, Thermometer, Activity, Wind, FileText
} from 'lucide-react';

const vitals = [
  { icon: HeartPulse, label: 'BP', value: '120/80', unit: 'mmHg', color: '#EF4444' },
  { icon: Thermometer, label: 'Temp', value: '98.6', unit: '°F', color: '#F59E0B' },
  { icon: Activity, label: 'Pulse', value: '72', unit: 'bpm', color: '#3B82F6' },
  { icon: Wind, label: 'SpO2', value: '98', unit: '%', color: '#22C55E' },
];

const emrFeatures = [
  { icon: ClipboardList, title: 'Consultations', desc: 'Chief complaint, history, diagnosis with ICD-10, treatment plan, and follow-up.', color: '#06B6D4' },
  { icon: Pill, title: 'Prescriptions', desc: 'Medicine search, dosage, frequency, timing, duration — all structured.', color: '#7C3AED' },
  { icon: FlaskConical, title: 'Lab Orders', desc: 'Order tests with priority levels. Track from ordered to completed.', color: '#EC4899' },
  { icon: FileImage, title: 'Documents', desc: 'Upload X-rays, reports, images. Attach to consultations securely.', color: '#F97316' },
];

export default function EMRModule() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="grid-2">
          {/* Left - copy + features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              <ClipboardList size={14} /> Electronic Medical Records
            </div>
            <h2 className="section-title">
              Clinical docs that are <span className="gradient-text">actually pleasant</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 28 }}>
              From the moment a patient walks in to the moment they leave — capture every vital,
              every diagnosis, every prescription.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="grid-2">
              {emrFeatures.map(({ icon: Icon, title, desc, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  style={{
                    padding: 18,
                    borderRadius: 14,
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                  }}
                >
                  <div style={{
                    width: 34, height: 34, borderRadius: 9,
                    background: `${color}12`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 10,
                  }}>
                    <Icon size={16} color={color} />
                  </div>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: 4, color: 'var(--text)' }}>{title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - mock EMR screen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{
              background: 'var(--surface)',
              borderRadius: 20,
              border: '1px solid var(--border)',
              padding: 28,
              boxShadow: '0 4px 30px rgba(0,0,0,0.04)',
            }}>
              {/* Patient header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Consultation</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>Priya Singh</div>
                </div>
                <span style={{
                  padding: '4px 10px', borderRadius: 6, fontSize: '0.7rem', fontWeight: 600,
                  background: '#EFF6FF', color: '#3B82F6',
                }}>In Progress</span>
              </div>

              {/* Vitals bar */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 20,
              }}>
                {vitals.map(({ icon: Icon, label, value, unit, color }) => (
                  <div key={label} style={{
                    padding: '10px 8px', borderRadius: 10, background: `${color}08`,
                    border: `1px solid ${color}15`, textAlign: 'center',
                  }}>
                    <Icon size={14} color={color} style={{ marginBottom: 4 }} />
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>{value}</div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>{unit}</div>
                  </div>
                ))}
              </div>

              {/* Diagnosis */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
                  Diagnosis
                </div>
                <div style={{
                  padding: '10px 14px', borderRadius: 10, background: '#F8FAFC',
                  fontSize: '0.85rem', color: 'var(--text)',
                }}>
                  <span style={{ fontWeight: 600 }}>J06.9</span>
                  <span style={{ color: 'var(--text-secondary)', marginLeft: 8 }}>Acute upper respiratory infection</span>
                </div>
              </div>

              {/* Prescription preview */}
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
                  Prescription
                </div>
                {[
                  { med: 'Amoxicillin 500mg', dose: '1 tab × 3 times/day', dur: '5 days' },
                  { med: 'Paracetamol 650mg', dose: '1 tab as needed', dur: '3 days' },
                ].map((rx, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '8px 0', borderBottom: i === 0 ? '1px solid var(--border)' : 'none',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)' }}>{rx.med}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{rx.dose}</div>
                    </div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--primary)' }}>{rx.dur}</span>
                  </div>
                ))}
              </div>

              {/* Visit report callout */}
              <div style={{
                marginTop: 16, padding: '14px 18px',
                background: 'linear-gradient(135deg, var(--primary), #7C3AED)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <FileText size={16} color="#fff" />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>
                  Auto-generate PDF visit report with one tap
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
