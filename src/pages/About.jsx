import { motion } from 'framer-motion';
import { Heart, Zap, Shield, Users, Target, Linkedin, Mail, Quote } from 'lucide-react';
import SEO from '../components/SEO';

const values = [
  {
    icon: Heart,
    color: '#DC2626',
    title: 'Doctor-First',
    desc: 'Every feature is designed around how doctors actually work — not how engineers think they work.',
  },
  {
    icon: Zap,
    color: '#D97706',
    title: 'Radically Simple',
    desc: 'If it takes more than two taps, we rethink it. Speed and clarity are non-negotiable.',
  },
  {
    icon: Shield,
    color: '#1A56DB',
    title: 'Private by Default',
    desc: 'Patient data is encrypted, isolated per clinic, and never used for anything else.',
  },
  {
    icon: Users,
    color: '#0D9488',
    title: 'Built for India',
    desc: 'GST-compliant billing, Indian pharmacy standards — designed for the Indian healthcare ecosystem.',
  },
];

const milestones = [
  { year: '2023', label: 'The frustration', desc: 'A close friend running a small clinic in Pune spent 3 hours every evening doing paperwork. Billing in Excel, appointments in a diary, prescriptions on printed pads. We asked: why does this still exist in 2023?' },
  { year: '2024', label: 'First build, first clinic', desc: 'We built a rough version in 60 days and handed it to that friend. Within a week, their evening paperwork dropped from 3 hours to under 20 minutes. That reaction told us everything.' },
  { year: '2025', label: 'Real doctors. Real feedback.', desc: 'ClinIKR is now being used by clinics across India. Every update comes from conversations with actual doctors — not assumptions. We\'re just getting started.' },
];

export default function About() {
  return (
    <div style={{ paddingTop: 100 }}>
      <SEO
        title="About Us"
        description="ClinIKR is built by a team obsessed with making clinic management effortless for doctors across India. Learn our story, mission, and values."
        path="/about"
      />

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(160deg, #0A0F1E 0%, #0F172A 50%, #0D1425 100%)',
        padding: 'clamp(56px, 8vw, 96px) 24px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '45%', height: '70%', background: 'radial-gradient(ellipse, rgba(26,86,219,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '60%', background: 'radial-gradient(ellipse, rgba(13,148,136,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <svg style={{ position: 'absolute', top: '-60px', right: '-60px', opacity: 0.06, pointerEvents: 'none' }} width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="130" stroke="white" strokeWidth="1" />
          <circle cx="150" cy="150" r="90" stroke="white" strokeWidth="1" />
          <circle cx="150" cy="150" r="50" stroke="white" strokeWidth="1" />
          <line x1="20" y1="150" x2="280" y2="150" stroke="white" strokeWidth="0.8" />
          <line x1="150" y1="20" x2="150" y2="280" stroke="white" strokeWidth="0.8" />
        </svg>

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="section-label" style={{ margin: '0 auto 16px', background: 'rgba(26,86,219,0.15)', color: '#93C5FD', border: '1px solid rgba(26,86,219,0.3)' }}>
              Our Story
            </div>
            <h1 className="section-title" style={{ color: '#F8FAFC', margin: '0 auto 20px', maxWidth: 700 }}>
              Built by doctors' frustrations,{' '}
              <span style={{ background: 'linear-gradient(135deg, #60A5FA, #0D9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                for doctors' clinics
              </span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>
              We watched doctors spend more time on paperwork than on patients. We decided that was unacceptable — and built ClinIKR to fix it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── The Story ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ margin: '0 auto 14px' }}>The Real Story</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>
              It started with a <span className="gradient-text">3-hour problem</span>
            </h2>
          </motion.div>

          {/* Pull quote */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: 'linear-gradient(135deg, #EFF6FF, #F0FDFA)',
              border: '1px solid #BFDBFE',
              borderLeft: '4px solid #1A56DB',
              borderRadius: 16, padding: 'clamp(24px, 3vw, 36px)',
              marginBottom: 40, position: 'relative',
            }}>
            <Quote size={32} color="#BFDBFE" style={{ position: 'absolute', top: 20, right: 24, opacity: 0.6 }} />
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 600, color: '#1E40AF', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
              "I finish seeing patients at 7 PM. Then I sit down and do billing, update records, check inventory — it's 10 PM before I leave. I became a doctor, not an accountant."
            </p>
            <div style={{ marginTop: 16, fontSize: '0.82rem', fontWeight: 700, color: '#64748B' }}>
              — Dr. Priya, General Practitioner, Pune · The conversation that started ClinIKR
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20, color: '#475569', fontSize: '0.97rem', lineHeight: 1.9 }}>
            <p>
              That conversation happened in late 2023. Dr. Priya was a friend, and what she described wasn't unusual — it was the norm for thousands of independent clinics across India. Billing in Excel. Appointments in a paper diary. Prescriptions on printed pads. Patient records in physical files that took minutes to locate.
            </p>
            <p>
              The few software options that existed were either built for large hospitals — bloated, expensive, and impossible to learn — or abandoned projects that hadn't been updated in years. Nothing was designed for the solo practitioner or the small clinic.
            </p>
            <p>
              So we built ClinIKR. Not as a startup experiment — as a genuine attempt to give that time back to doctors. We spent the first months sitting in clinics, watching how doctors actually moved through their day, where they got stuck, what they wished they could do faster. The app was designed around those observations, not around a feature checklist.
            </p>
            <p>
              When Dr. Priya first used it, her evening paperwork dropped from three hours to under twenty minutes. That reaction — relief, not just satisfaction — became the standard we hold every feature to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section" style={{ background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="about-split">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="section-label" style={{ marginBottom: 16 }}>Mission</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0F172A', marginBottom: 16, lineHeight: 1.3 }}>
                Make running a clinic as simple as seeing a patient
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginBottom: 16 }}>
                India has over a million small and mid-size clinics. Most of them still run on paper and WhatsApp. ClinIKR exists to change that — with software that's fast, affordable, and genuinely easy to use.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8 }}>
                We're not building for hospital chains. We're building for the solo practitioner, the small clinic, the doctor who just wants to focus on their patients.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div style={{ background: 'linear-gradient(135deg, #1A56DB 0%, #0D9488 100%)', borderRadius: 24, padding: 'clamp(28px, 4vw, 40px)', color: '#fff' }}>
                <Target size={32} color="rgba(255,255,255,0.8)" style={{ marginBottom: 16 }} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: 12 }}>Our North Star</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  To be the clinic management app that every Indian doctor recommends to another. Not because of marketing — because it genuinely saves them time and makes their practice better, every single day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ margin: '0 auto 14px' }}>What We Stand For</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Our <span className="gradient-text">values</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="values-grid">
            {values.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ padding: '28px 24px', background: '#F8FAFC', borderRadius: 18, border: '1px solid #E9EEF6', display: 'flex', gap: 20, alignItems: 'flex-start', transition: 'box-shadow 0.25s, transform 0.25s' }}
                whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(26,86,219,0.08)' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 14, flexShrink: 0, background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={22} color={color} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section" style={{ background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ margin: '0 auto 14px' }}>The Journey</div>
            <h2 className="section-title" style={{ margin: '0 auto' }}>How we got <span className="gradient-text">here</span></h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {milestones.map(({ year, label, desc }, i) => (
              <motion.div key={year}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #1A56DB, #0D9488)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(26,86,219,0.3)', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#fff' }}>{year}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 32, background: 'linear-gradient(to bottom, #1A56DB50, transparent)', margin: '6px 0' }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < milestones.length - 1 ? 36 : 0, paddingTop: 10 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>{label}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Connect ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 640, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="section-label" style={{ margin: '0 auto 14px' }}>Get in Touch</div>
            <h2 className="section-title" style={{ margin: '0 auto 16px' }}>Let's <span className="gradient-text">connect</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Have feedback, a partnership idea, or just want to say hello? We'd love to hear from you.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:helloclinikr@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, background: 'linear-gradient(135deg, #1A56DB, #1E40AF)', color: '#fff', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(26,86,219,0.3)', transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,86,219,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,86,219,0.3)'; }}
              >
                <Mail size={16} /> Email Us
              </a>
              <a href="https://www.linkedin.com/company/clinikrindia/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, background: '#F8FAFC', color: '#0A66C2', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid #E2E8F0', transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(10,102,194,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <Linkedin size={16} /> Follow on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .about-split { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
