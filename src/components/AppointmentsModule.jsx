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
  { icon: CalendarDays, text: 'Day, week, and month calendar views' },
  { icon: Clock, text: 'Configurable time slots, buffer time, and working hours' },
  { icon: Repeat, text: 'Recurring visits — daily, weekly, monthly' },
  { icon: UserCheck, text: 'Multi-doctor scheduling with individual availability' },
];

export default function AppointmentsModule() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="grid-2">
          {/* Right side - visual (on left for alternating layout) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Appointment lifecycle */}
            <div style={{
              padding: 28,
              background: 'var(--surface)',
              borderRadius: 20,
              border: '1px solid var(--border)',
              boxShadow: '0 4px 30px rgba(0,0,0,0.04)',
            }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 20 }}>
                Appointment Lifecycle
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {timeline.map(({ status, color, icon: Icon }, i) => (
                  <motion.div
                    key={status}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative' }}
                  >
                    {/* Connector line */}
                    {i < timeline.length - 1 && (
                      <div style={{
                        position: 'absolute', left: 19, top: 40, width: 2, height: 20,
                        background: `linear-gradient(to bottom, ${color}40, ${timeline[i+1].color}40)`,
                      }} />
                    )}
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: `${color}12`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, zIndex: 1,
                    }}>
                      <Icon size={18} color={color} />
                    </div>
                    <div style={{
                      flex: 1, padding: '12px 0',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      borderBottom: i < timeline.length - 1 ? '1px solid var(--border)' : 'none',
                    }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)' }}>{status}</span>
                      <span style={{
                        padding: '3px 8px', borderRadius: 6, fontSize: '0.65rem', fontWeight: 600,
                        background: `${color}12`, color,
                      }}>Step {i + 1}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Left side - copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="section-label">
              <CalendarCheck size={14} /> Appointments
            </div>
            <h2 className="section-title">
              Scheduling that <span className="gradient-text">just works</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              A patient calls. You book in seconds. They arrive, check in, consult, and leave —
              the entire lifecycle, tracked beautifully.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {features.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: '#ECFDF5',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={15} color="#22C55E" />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
