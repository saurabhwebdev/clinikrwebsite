import { motion } from 'framer-motion';
import {
  Users, UserPlus, Search, FileText,
  Phone, Mail, MapPin, Heart, ChevronRight
} from 'lucide-react';

const features = [
  { icon: UserPlus, text: 'Smart registration with auto-generated Patient IDs' },
  { icon: Search, text: 'Instant search by name, phone, or ID' },
  { icon: FileText, text: 'Complete history — visits, prescriptions, invoices' },
  { icon: Heart, text: 'One-glance dashboard with vitals and timeline' },
  { icon: Mail, text: 'Share reports via WhatsApp or email' },
  { icon: MapPin, text: 'Demographics, allergies, blood group' },
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {features.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'var(--primary-soft)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={15} color="var(--primary)" />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mock patient card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mock-card" style={{
              background: 'var(--surface)',
              borderRadius: 20,
              border: '1px solid var(--border)',
              padding: 28,
              boxShadow: '0 4px 30px rgba(0,0,0,0.04)',
            }}>
              {/* Patient header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'linear-gradient(135deg, var(--primary), #7C3AED)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '0.9rem', fontWeight: 700, flexShrink: 0,
                }}>RS</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>Rahul Sharma</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>PID-000247 · Male, 34 yrs</div>
                </div>
                <span style={{
                  padding: '4px 10px', borderRadius: 6, fontSize: '0.7rem', fontWeight: 600,
                  background: '#F0FDF4', color: '#22C55E',
                }}>Active</span>
              </div>

              {/* Quick stats */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20,
              }}>
                {[
                  { label: 'Visits', value: '12' },
                  { label: 'Last Visit', value: '3 days ago' },
                  { label: 'Balance', value: '₹0' },
                ].map(s => (
                  <div key={s.label} style={{
                    padding: '12px 10px', borderRadius: 10, background: '#F8FAFC', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text)' }}>{s.value}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                {[
                  { icon: Phone, text: '+91 98765 43210' },
                  { icon: Mail, text: 'rahul.sharma@gmail.com' },
                  { icon: MapPin, text: 'Mumbai, Maharashtra' },
                ].map(({ icon: Ic, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <Ic size={14} color="var(--text-muted)" />
                    {text}
                  </div>
                ))}
              </div>

              {/* Recent visits */}
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 14 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>
                  Recent Visits
                </div>
                {[
                  { date: '06 Feb', type: 'Follow-up', doctor: 'Dr. Sharma' },
                  { date: '28 Jan', type: 'Consultation', doctor: 'Dr. Sharma' },
                ].map((v, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '8px 0', borderBottom: i === 0 ? '1px solid var(--border)' : 'none',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', width: 50 }}>{v.date}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text)' }}>{v.type}</span>
                    </div>
                    <ChevronRight size={14} color="var(--text-muted)" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
