import React from 'react';
import { motion } from 'framer-motion';
import {
  UserPlus, CalendarPlus, HeartPulse, ClipboardList,
  Pill, Receipt, CheckCircle2, ArrowRight, ChevronRight
} from 'lucide-react';

const steps = [
  { icon: UserPlus, title: 'Register', desc: 'Add patient details. Auto-generate ID.', time: '9:00 AM', color: '#4F46E5' },
  { icon: CalendarPlus, title: 'Book Slot', desc: 'Schedule visit, assign doctor & time.', time: '9:01 AM', color: '#3B82F6' },
  { icon: HeartPulse, title: 'Vitals', desc: 'BP, temp, pulse, SpO2 — one screen.', time: '9:15 AM', color: '#06B6D4' },
  { icon: ClipboardList, title: 'Diagnose', desc: 'Findings, ICD-10 diagnosis, treatment.', time: '9:20 AM', color: '#7C3AED' },
  { icon: Pill, title: 'Prescribe', desc: 'Medicines with dosage & instructions.', time: '9:30 AM', color: '#EC4899' },
  { icon: Receipt, title: 'Bill & Dispense', desc: 'Invoice + POS sale. Stock auto-deducts.', time: '9:32 AM', color: '#F59E0B' },
  { icon: CheckCircle2, title: 'Complete', desc: 'PDF report generated. Patient leaves.', time: '9:35 AM', color: '#22C55E' },
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
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px' }}>
            A Typical Day
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            From walk-in to <span className="gradient-text">walk-out</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Follow a patient's journey through your clinic. Every step is connected,
            every piece of data flows seamlessly to the next.
          </p>
        </motion.div>

        {/* Horizontal journey - cards with connectors */}
        <div style={{ position: 'relative' }}>
          {/* Progress bar behind cards — centered on 52px icon = top 25px */}
          <div style={{
            position: 'absolute',
            top: 25,
            left: '5%',
            right: '5%',
            height: 3,
            background: 'var(--border)',
            borderRadius: 2,
            zIndex: 0,
          }} className="workflow-bar" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            style={{
              position: 'absolute',
              top: 25,
              left: '5%',
              right: '5%',
              height: 3,
              background: 'linear-gradient(to right, var(--primary), #7C3AED, #22C55E)',
              borderRadius: 2,
              zIndex: 0,
              transformOrigin: 'left',
            }}
            className="workflow-bar"
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(13, auto)',
            gap: 0,
            position: 'relative',
            zIndex: 1,
            justifyContent: 'center',
          }} className="workflow-grid">
            {steps.map(({ icon: Icon, title, desc, time, color }, i) => (
              <React.Fragment key={title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: 120,
                  }}
                >
                  {/* Circle node */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 16,
                    background: 'var(--surface)',
                    border: `2px solid ${color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                    boxShadow: `0 4px 16px ${color}15`,
                    transition: 'all 0.3s ease',
                  }}>
                    <Icon size={22} color={color} />
                  </div>

                  {/* Time badge */}
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700,
                    color: 'var(--primary)',
                    background: 'var(--primary-soft)',
                    padding: '2px 8px', borderRadius: 4,
                    marginBottom: 8,
                  }}>
                    {time}
                  </span>

                  {/* Title */}
                  <h4 style={{
                    fontSize: '0.88rem', fontWeight: 700,
                    color: 'var(--text)', marginBottom: 4,
                  }}>
                    {title}
                  </h4>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.75rem', color: 'var(--text-secondary)',
                    lineHeight: 1.4, margin: 0,
                  }}>
                    {desc}
                  </p>
                </motion.div>

                {/* Arrow between steps — centered on 52px icon */}
                {i < steps.length - 1 && (
                  <div className="workflow-arrow" style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    height: 52,
                  }}>
                    <ChevronRight size={18} color="var(--primary)" strokeWidth={2.5} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Time summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: 40,
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12,
          }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '14px 28px',
            background: 'var(--surface)',
            borderRadius: 14,
            border: '1px solid var(--border)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Walk in</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text)' }}>9:00 AM</div>
            </div>
            <ArrowRight size={18} color="var(--primary)" />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Walk out</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text)' }}>9:35 AM</div>
            </div>
            <div style={{ width: 1, height: 32, background: 'var(--border)', margin: '0 4px' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total time</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, background: 'linear-gradient(135deg, var(--primary), #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>35 min</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .workflow-grid {
            display: grid !important;
            grid-template-columns: repeat(4, auto) !important;
            gap: 20px !important;
            justify-content: center !important;
          }
          .workflow-bar { display: none; }
          .workflow-arrow { display: none !important; }
        }
        @media (max-width: 640px) {
          .workflow-grid {
            grid-template-columns: repeat(2, auto) !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
