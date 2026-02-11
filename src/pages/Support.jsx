import { HelpCircle, BookOpen, MessageCircle, Mail, Clock, Zap, ChevronRight } from 'lucide-react';

const faqs = [
  {
    q: 'How do I get started with Clinikr?',
    a: 'Download the app from Google Play or the App Store, create an account, set up your clinic details, and you\'re ready to go. The entire setup takes less than 2 minutes.',
  },
  {
    q: 'Is my patient data secure?',
    a: 'Yes. All data is encrypted in transit and at rest. We use PostgreSQL Row-Level Security to isolate each clinic\'s data, and our infrastructure runs on Supabase with SOC 2 compliance.',
  },
  {
    q: 'Can I use Clinikr offline?',
    a: 'Clinikr requires an internet connection for real-time sync. However, cached data is available for viewing. Full offline mode with sync-on-reconnect is on our roadmap.',
  },
  {
    q: 'How do I add staff members to my clinic?',
    a: 'Go to Settings > Team > Invite Member. Enter their email and assign a role (Doctor, Receptionist, etc.). They\'ll receive an invite to join your clinic.',
  },
  {
    q: 'Can I customize invoice templates?',
    a: 'Yes. Go to Settings > Invoice Settings to customize your invoice prefix, numbering, terms and conditions, and payment instructions. Your clinic logo and GSTIN appear automatically.',
  },
  {
    q: 'Is Clinikr free?',
    a: 'Yes, Clinikr is free to use with all core features included. There are no hidden charges for patient management, appointments, EMR, billing, or inventory.',
  },
];

const channels = [
  {
    icon: Mail,
    title: 'Email Support',
    desc: 'Get a response within 24 hours',
    action: 'support@clinikr.com',
    href: 'mailto:support@clinikr.com',
    color: '#4F46E5',
  },
  {
    icon: MessageCircle,
    title: 'In-App Help Center',
    desc: 'Browse guides and FAQs directly in the app',
    action: 'Open Clinikr > Settings > Help',
    href: null,
    color: '#22C55E',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    desc: 'Step-by-step guides for every feature',
    action: 'Coming soon',
    href: null,
    color: '#7C3AED',
  },
];

export default function Support() {
  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ margin: '0 auto 16px' }}>
              <HelpCircle size={14} /> Support
            </div>
            <h1 className="section-title" style={{ margin: '0 auto 16px' }}>
              How can we <span className="gradient-text">help?</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Find answers to common questions or reach out to our support team.
            </p>
          </div>

          {/* Support channels */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 56,
          }} className="grid-3">
            {channels.map(({ icon: Icon, title, desc, action, href, color }) => (
              <div key={title} style={{
                padding: 'clamp(20px, 3vw, 28px)',
                background: 'var(--surface)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `${color}12`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 14px',
                }}>
                  <Icon size={22} color={color} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 6, color: 'var(--text)' }}>{title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 12, lineHeight: 1.5 }}>{desc}</p>
                {href ? (
                  <a href={href} style={{
                    fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none',
                  }}>
                    {action}
                  </a>
                ) : (
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>{action}</span>
                )}
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)', marginBottom: 24, textAlign: 'center' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map(({ q, a }, i) => (
              <details key={i} style={{
                padding: 'clamp(16px, 3vw, 24px)',
                background: 'var(--surface)',
                borderRadius: 14,
                border: '1px solid var(--border)',
                cursor: 'pointer',
              }}>
                <summary style={{
                  fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)',
                  listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  {q}
                  <ChevronRight size={16} color="var(--text-muted)" style={{ flexShrink: 0, transition: 'transform 0.2s' }} />
                </summary>
                <p style={{
                  fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7,
                  marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border)',
                }}>
                  {a}
                </p>
              </details>
            ))}
          </div>

          <div style={{
            marginTop: 48, padding: 28, borderRadius: 16,
            background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
            textAlign: 'center',
          }}>
            <Zap size={24} color="#fff" style={{ marginBottom: 12 }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              Still need help?
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Our support team typically responds within 24 hours.
            </p>
            <a href="mailto:support@clinikr.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 24px', background: '#fff', color: '#4F46E5',
              borderRadius: 10, fontSize: '0.88rem', fontWeight: 700, textDecoration: 'none',
            }}>
              <Mail size={16} /> Email Support
            </a>
          </div>
        </div>
      </section>

      <style>{`
        details[open] summary svg:last-child {
          transform: rotate(90deg);
        }
        details summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </div>
  );
}
