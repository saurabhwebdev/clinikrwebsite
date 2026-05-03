import { motion } from 'framer-motion';
import { Clock, Frown, FileWarning } from 'lucide-react';

const pains = [
  {
    icon: Clock,
    title: 'Hours lost to paperwork',
    desc: 'Patient files scattered across drawers. Appointment books overflowing. Bills handwritten and error-prone.',
  },
  {
    icon: Frown,
    title: 'Patients wait. You apologize.',
    desc: 'No system to track who\'s next, what they owe, or when they last visited. Every day feels chaotic.',
  },
  {
    icon: FileWarning,
    title: 'Data lives in 5 different places',
    desc: 'Excel for billing. WhatsApp for reminders. A diary for appointments. Nothing talks to anything.',
  },
];

export default function StoryIntro() {
  return (
    <section id="story" style={{ background: 'var(--surface)', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <div className="section-label" style={{ margin: '0 auto 14px' }}>
            The Problem
          </div>
          <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto 16px' }}>
            Running a clinic shouldn't feel like{' '}
            <span className="gradient-text">fighting fires</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: 480 }}>
            You became a doctor to heal people — not wrestle with spreadsheets every single day.
          </p>
        </motion.div>

        {/* Pain cards */}
        <div className="pain-grid">
          {pains.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="pain-card"
            >
              <div className="pain-icon">
                <Icon size={20} color="#DC2626" />
              </div>
              <h3 className="pain-title">{title}</h3>
              <p className="pain-desc">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 'clamp(40px, 6vw, 64px)' }}
        >
          <div style={{
            width: 1, height: 40, margin: '0 auto 20px',
            background: 'linear-gradient(to bottom, #BFDBFE, #1A56DB)',
          }} />
          <p style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
            fontWeight: 700, color: 'var(--text)',
          }}>
            What if <span className="gradient-text">one app</span> replaced all of that?
          </p>
        </motion.div>
      </div>

      <style>{`
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }
        .pain-card {
          padding: 28px 24px;
          background: #F8FAFC;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          border-top: 3px solid #FECACA;
        }
        .pain-icon {
          width: 42px; height: 42px; border-radius: 11px;
          background: #FEF2F2;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .pain-title {
          font-size: 0.97rem; font-weight: 700;
          color: #0F172A; margin-bottom: 8px;
        }
        .pain-desc {
          font-size: 0.875rem; color: #475569;
          line-height: 1.65; margin: 0;
        }
        @media (max-width: 720px) {
          .pain-grid { grid-template-columns: 1fr; max-width: 480px; }
        }
      `}</style>
    </section>
  );
}
