import { motion } from 'framer-motion';
import {
  ClipboardList, HeartPulse, Pill,
  FileImage, Thermometer, Activity, Wind, FileText, LayoutTemplate
} from 'lucide-react';

const vitals = [
  { icon: HeartPulse,   label: 'BP',   value: '120/80', unit: 'mmHg', color: '#DC2626' },
  { icon: Thermometer,  label: 'Temp', value: '98.6',   unit: '°F',   color: '#D97706' },
  { icon: Activity,     label: 'Pulse', value: '72',    unit: 'bpm',  color: '#1A56DB' },
  { icon: Wind,         label: 'SpO2', value: '98',     unit: '%',    color: '#059669' },
];

const emrFeatures = [
  { icon: ClipboardList,   title: 'Consultations',   desc: 'Chief complaint, history, diagnosis with ICD-10, treatment plan, and follow-up.', color: '#0D9488' },
  { icon: Pill,            title: 'Prescriptions',   desc: 'Medicine search, dosage, frequency, timing, duration — all structured.',           color: '#7C3AED' },
  { icon: LayoutTemplate,  title: 'Visit Templates', desc: 'Save common diagnosis and prescription templates. One tap to populate the form.',   color: '#1A56DB' },
  { icon: FileImage,       title: 'Documents',       desc: 'Upload X-rays, reports, images and attach them to consultations securely.',         color: '#D97706' },
];

export default function EMRModule() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
      <div className="container">
        <div className="mod-grid">
          {/* Copy + feature grid — left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-label"><ClipboardList size={14} /> Electronic Medical Records</div>
            <h2 className="section-title">
              Clinical docs that are <span className="gradient-text">actually pleasant</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 28 }}>
              Capture every vital, every diagnosis, every prescription — from the moment a patient walks in to the moment they leave.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="emr-features">
              {emrFeatures.map(({ icon: Icon, title, desc, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  style={{
                    padding: 18, borderRadius: 14,
                    border: '1px solid #E2E8F0', background: '#F8FAFC',
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
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: 4, color: '#0F172A' }}>{title}</h4>
                  <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mock EMR card — right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="mod-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Consultation</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A' }}>Priya Singh</div>
                </div>
                <span style={{
                  padding: '4px 10px', borderRadius: 6, fontSize: '0.7rem', fontWeight: 600,
                  background: '#EFF6FF', color: '#1A56DB',
                }}>In Progress</span>
              </div>

              <div className="emr-vitals" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 20 }}>
                {vitals.map(({ icon: Icon, label, value, unit, color }) => (
                  <div key={label} style={{
                    padding: '10px 8px', borderRadius: 10,
                    background: `${color}08`, border: `1px solid ${color}18`, textAlign: 'center',
                  }}>
                    <Icon size={14} color={color} style={{ marginBottom: 4 }} />
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>{value}</div>
                    <div style={{ fontSize: '0.58rem', color: '#94A3B8' }}>{unit}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>
                  Diagnosis
                </div>
                <div style={{ padding: '10px 14px', borderRadius: 10, background: '#F8FAFC', fontSize: '0.85rem', color: '#0F172A' }}>
                  <span style={{ fontWeight: 600 }}>J06.9</span>
                  <span style={{ color: '#475569', marginLeft: 8 }}>Acute upper respiratory infection</span>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>
                  Prescription
                </div>
                {[
                  { med: 'Amoxicillin 500mg',  dose: '1 tab × 3 times/day', dur: '5 days' },
                  { med: 'Paracetamol 650mg',  dose: '1 tab as needed',      dur: '3 days' },
                ].map((rx, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '8px 0', borderBottom: i === 0 ? '1px solid #E2E8F0' : 'none',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0F172A' }}>{rx.med}</div>
                      <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>{rx.dose}</div>
                    </div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#1A56DB' }}>{rx.dur}</span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 16, padding: '12px 16px',
                background: 'linear-gradient(135deg, #1A56DB, #0D9488)',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <FileText size={15} color="#fff" />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>
                  Auto-generate PDF visit report with one tap
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .emr-features { grid-template-columns: 1fr 1fr !important; }
        .emr-vitals { grid-template-columns: repeat(4, 1fr) !important; }
        @media (max-width: 640px) {
          .emr-features { grid-template-columns: 1fr !important; }
          .emr-vitals { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
