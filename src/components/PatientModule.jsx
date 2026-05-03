import { motion } from 'framer-motion';
import {
  Users, UserPlus, Search, FileText,
  Phone, Mail, MapPin, Heart, ChevronRight
} from 'lucide-react';

const features = [
  { icon: UserPlus,  text: 'Smart registration with auto-generated Patient IDs' },
  { icon: Search,    text: 'Instant search by name, phone, or ID' },
  { icon: FileText,  text: 'Complete history — visits, prescriptions, invoices' },
  { icon: Heart,     text: 'One-glance dashboard with vitals and timeline' },
  { icon: Mail,      text: 'Share reports via WhatsApp or email' },
  { icon: MapPin,    text: 'Demographics, allergies, blood group' },
];

export default function PatientModule() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(64px, 8vw, 100px) 24px' }} id="modules">
      <div className="container">
        <div className="mod-grid">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-label"><Users size={14} /> Patient Management</div>
            <h2 className="section-title">
              Every patient. <span className="gradient-text">Every detail.</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              ClinIKR gives each patient a comprehensive digital profile — their entire medical life in one place.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {features.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: '#EFF6FF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={15} color="#1A56DB" />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.4 }}>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mock patient card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="mod-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 13,
                  background: 'linear-gradient(135deg, #1A56DB, #0D9488)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '0.88rem', fontWeight: 700, flexShrink: 0,
                }}>RS</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A' }}>Rahul Sharma</div>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>PID-000247 · Male, 34 yrs</div>
                </div>
                <span style={{
                  padding: '4px 10px', borderRadius: 6, fontSize: '0.7rem', fontWeight: 600,
                  background: '#ECFDF5', color: '#059669',
                }}>Active</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
                {[
                  { label: 'Visits', value: '12' },
                  { label: 'Last Visit', value: '3 days ago' },
                  { label: 'Balance', value: '₹0' },
                ].map(s => (
                  <div key={s.label} style={{
                    padding: '12px 10px', borderRadius: 10, background: '#F8FAFC', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>{s.value}</div>
                    <div style={{ fontSize: '0.65rem', color: '#94A3B8', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                {[
                  { icon: Phone, text: '+91 98765 43210' },
                  { icon: Mail,  text: 'rahul.sharma@gmail.com' },
                  { icon: MapPin, text: 'Mumbai, Maharashtra' },
                ].map(({ icon: Ic, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.8rem', color: '#475569' }}>
                    <Ic size={14} color="#94A3B8" /> {text}
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: 14 }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>
                  Recent Visits
                </div>
                {[
                  { date: '06 Feb', type: 'Follow-up' },
                  { date: '28 Jan', type: 'Consultation' },
                ].map((v, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '8px 0', borderBottom: i === 0 ? '1px solid #E2E8F0' : 'none',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1A56DB', width: 50 }}>{v.date}</span>
                      <span style={{ fontSize: '0.82rem', color: '#0F172A' }}>{v.type}</span>
                    </div>
                    <ChevronRight size={14} color="#94A3B8" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .mod-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .mod-card {
          background: #fff;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          padding: 28px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.04);
        }
        @media (max-width: 768px) {
          .mod-grid { grid-template-columns: 1fr; gap: 36px; }
        }
      `}</style>
    </section>
  );
}
