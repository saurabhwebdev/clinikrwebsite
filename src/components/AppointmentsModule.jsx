import { motion } from 'framer-motion';
import {
  CalendarCheck, Clock, Repeat, UserCheck,
  CalendarDays, Bell, Stethoscope
} from 'lucide-react';

const timeline = [
  { status: 'Scheduled', color: '#6366F1', icon: CalendarDays },
  { status: 'Confirmed', color: '#3B82F6', icon: Bell },
  { status: 'Checked In', color: '#F59E0B', icon: UserCheck },
  { status: 'In Progress', color: '#22C55E', icon: Stethoscope },
  { status: 'Completed', color: '#10B981', icon: CalendarCheck },
];

const features = [
  { icon: CalendarDays, title: 'Day / Week / Month', desc: 'Switch between views to see your schedule the way you prefer.' },
  { icon: Clock, title: 'Smart Time Slots', desc: 'Configure duration, buffer time, and working hours per doctor.' },
  { icon: Repeat, title: 'Recurring Visits', desc: 'Daily, weekly, bi-weekly, monthly — set it once and forget.' },
  { icon: UserCheck, title: 'Doctor Assignment', desc: 'Multi-doctor scheduling with individual availability management.' },
];

export default function AppointmentsModule() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px' }}>
            <CalendarCheck size={14} /> Appointments
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            Scheduling that <span className="gradient-text">just works</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A patient calls. You book in seconds. They arrive, check in, consult, and leave —
            the entire lifecycle, tracked beautifully.
          </p>
        </motion.div>

        {/* Appointment lifecycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0,
            marginBottom: 48,
            flexWrap: 'wrap',
            padding: '32px 24px',
            background: 'var(--surface)',
            borderRadius: 20,
            border: '1px solid var(--border)',
          }}
        >
          {timeline.map(({ status, color, icon: Icon }, i) => (
            <div key={status} style={{ display: 'flex', alignItems: 'center' }}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, type: 'spring' }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                  padding: '0 16px',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color={color} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color }}>{status}</span>
              </motion.div>
              {i < timeline.length - 1 && (
                <div style={{
                  width: 40, height: 2,
                  background: `linear-gradient(to right, ${color}, ${timeline[i + 1].color})`,
                  borderRadius: 1,
                }} />
              )}
            </div>
          ))}
        </motion.div>

        <div className="grid-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="feature-card"
            >
              <div className="icon-box" style={{ background: '#ECFDF5' }}>
                <Icon size={20} color="#22C55E" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
