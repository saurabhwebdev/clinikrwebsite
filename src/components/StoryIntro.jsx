import { motion } from 'framer-motion';
import { Clock, Frown, FileWarning, ArrowDown } from 'lucide-react';

const pains = [
  { icon: Clock, title: 'Hours wasted on paperwork', desc: 'Patient files scattered. Appointment books overflowing. Bills handwritten.' },
  { icon: Frown, title: 'Patients wait. You apologize.', desc: 'No system to track who\'s next, what they owe, or when they last visited.' },
  { icon: FileWarning, title: 'Data lives in 5 different places', desc: 'Excel for billing. WhatsApp for reminders. Diary for appointments. Chaos.' },
];

export default function StoryIntro() {
  return (
    <section className="section section-alt" id="story">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px' }}>The Problem</div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            Running a clinic shouldn't feel like <span className="gradient-text">running a marathon</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            You became a doctor to heal people, not to wrestle with spreadsheets.
            Yet here you are — drowning in admin work every single day.
          </p>
        </motion.div>

        <div className="grid-3" style={{ maxWidth: 960, margin: '0 auto' }}>
          {pains.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="feature-card"
              style={{ textAlign: 'center', border: '1px solid #FEE2E2' }}
            >
              <div className="icon-box" style={{
                background: '#FEF2F2',
                margin: '0 auto 20px',
              }}>
                <Icon size={22} color="#EF4444" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: 48 }}
        >
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>
            What if there was a better way?
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={24} color="var(--primary)" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
