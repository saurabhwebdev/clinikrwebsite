import { Shield, Eye, Database, Lock, UserCheck, Trash2, Mail } from 'lucide-react';

const sections = [
  {
    icon: Eye,
    title: 'Information We Collect',
    content: [
      'Clinic details: name, address, logo, GSTIN, and registration information you provide during setup.',
      'Patient data: names, contact information, medical records, prescriptions, and billing data entered by your clinic staff.',
      'Usage data: app feature usage, device type, and crash reports to improve performance.',
      'We do NOT collect personal data from patients directly. All patient data is entered and controlled by your clinic.',
    ],
  },
  {
    icon: Database,
    title: 'How We Use Your Data',
    content: [
      'To provide and maintain the Clinikr service — syncing your clinic data across devices.',
      'To generate invoices, prescriptions, reports, and other documents you request.',
      'To send transactional emails (appointment reminders, invoice receipts) on your behalf.',
      'To improve the app through anonymized, aggregated analytics. We never sell your data.',
    ],
  },
  {
    icon: Lock,
    title: 'Data Security',
    content: [
      'All data is encrypted in transit (TLS 1.3) and at rest (AES-256).',
      'PostgreSQL Row-Level Security (RLS) ensures each clinic can only access its own data.',
      'Supabase cloud infrastructure hosted on AWS with SOC 2 Type II compliance.',
      'Biometric authentication (fingerprint/face) available for device-level security.',
    ],
  },
  {
    icon: UserCheck,
    title: 'Your Rights',
    content: [
      'You own your data. You can export all clinic and patient data at any time.',
      'You can request deletion of your account and all associated data.',
      'You can update or correct any information stored in the app directly.',
      'We will notify you of any material changes to this privacy policy via email or in-app notification.',
    ],
  },
  {
    icon: Trash2,
    title: 'Data Retention & Deletion',
    content: [
      'Your data is retained as long as your account is active.',
      'Upon account deletion request, all data is permanently removed within 30 days.',
      'Backups containing your data are purged within 90 days of deletion.',
      'We do not retain any data for marketing purposes after account deletion.',
    ],
  },
];

export default function Privacy() {
  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ margin: '0 auto 16px' }}>
              <Shield size={14} /> Privacy Policy
            </div>
            <h1 className="section-title" style={{ margin: '0 auto 16px' }}>
              Your data, <span className="gradient-text">your control</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto 8px' }}>
              We take privacy seriously. Here's exactly how we handle your clinic and patient data.
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Last updated: February 2026
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {sections.map(({ icon: Icon, title, content }) => (
              <div key={title} style={{
                padding: 'clamp(20px, 3vw, 32px)',
                background: 'var(--surface)',
                borderRadius: 16,
                border: '1px solid var(--border)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'var(--primary-soft)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="var(--primary)" />
                  </div>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>{title}</h2>
                </div>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {content.map((item, i) => (
                    <li key={i} style={{
                      fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7,
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 48, padding: 24, borderRadius: 14,
            background: 'var(--primary-soft)', textAlign: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
              <Mail size={16} color="var(--primary)" />
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>Questions about privacy?</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              Reach out to us at <a href="mailto:privacy@clinikr.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>privacy@clinikr.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
