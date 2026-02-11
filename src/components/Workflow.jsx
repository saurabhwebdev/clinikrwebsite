import { motion } from 'framer-motion';
import {
  UserPlus, CalendarPlus, HeartPulse, ClipboardList,
  Pill, Receipt, ShoppingBag, CheckCircle2
} from 'lucide-react';

const steps = [
  { icon: UserPlus, title: 'Register Patient', desc: 'Add patient with all details. Auto-generate ID.', color: '#4F46E5' },
  { icon: CalendarPlus, title: 'Book Appointment', desc: 'Schedule a visit. Assign doctor and time.', color: '#3B82F6' },
  { icon: HeartPulse, title: 'Record Vitals', desc: 'BP, temperature, pulse, SpO2, weight, height.', color: '#EF4444' },
  { icon: ClipboardList, title: 'Consult & Diagnose', desc: 'Document findings, add ICD-10 diagnosis.', color: '#06B6D4' },
  { icon: Pill, title: 'Write Prescription', desc: 'Add medicines with dosage & instructions.', color: '#7C3AED' },
  { icon: Receipt, title: 'Generate Invoice', desc: 'Auto-calculate with tax. Send to patient.', color: '#F59E0B' },
  { icon: ShoppingBag, title: 'Dispense from POS', desc: 'Sell medicines. Stock auto-deducts.', color: '#EF4444' },
  { icon: CheckCircle2, title: 'Visit Complete', desc: 'Generate PDF report. Patient leaves happy.', color: '#22C55E' },
];

export default function Workflow() {
  return (
    <section className="section section-alt" id="workflow">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px' }}>
            A Typical Day
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            From walk-in to <span className="gradient-text">walk-out</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Follow a patient's journey through your clinic. Every step is connected.
            Every piece of data flows seamlessly to the next.
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            left: 23,
            top: 24,
            bottom: 24,
            width: 2,
            background: 'linear-gradient(to bottom, var(--primary), #7C3AED, #22C55E)',
            borderRadius: 1,
          }} />

          {steps.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'start',
                marginBottom: i < steps.length - 1 ? 8 : 0,
                padding: '16px 0',
                position: 'relative',
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: `${color}12`,
                border: `2px solid ${color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                zIndex: 1,
              }}>
                <Icon size={20} color={color} />
              </div>
              <div style={{ paddingTop: 4 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  marginBottom: 4,
                }}>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)',
                    background: 'var(--primary-soft)',
                    padding: '2px 8px', borderRadius: 4,
                  }}>
                    STEP {i + 1}
                  </span>
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 2 }}>{title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
