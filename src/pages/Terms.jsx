import { FileText, CheckCircle2, AlertTriangle, Scale, Ban, RefreshCw, Mail } from 'lucide-react';

const sections = [
  {
    icon: CheckCircle2,
    title: 'Acceptance of Terms',
    content: [
      'By downloading, installing, or using Clinikr, you agree to be bound by these Terms of Service.',
      'If you are using Clinikr on behalf of a clinic or organization, you represent that you have authority to bind that entity to these terms.',
      'We may update these terms from time to time. Continued use after changes constitutes acceptance.',
      'If you do not agree with any part of these terms, you must discontinue use of the app.',
    ],
  },
  {
    icon: FileText,
    title: 'Use of Service',
    content: [
      'Clinikr is a clinic management tool designed for licensed healthcare professionals and their authorized staff.',
      'You are responsible for all data entered into the app, including patient records, prescriptions, and billing information.',
      'You must comply with all applicable local, state, and national laws, including healthcare data regulations.',
      'You agree not to use the service for any unlawful purpose or in a way that could damage, disable, or impair our servers.',
    ],
  },
  {
    icon: Scale,
    title: 'Intellectual Property',
    content: [
      'Clinikr, its logo, design, and all associated content are the intellectual property of Clinikr and its creators.',
      'You are granted a limited, non-exclusive, non-transferable license to use the app for your clinic operations.',
      'You may not reverse-engineer, decompile, or attempt to extract the source code of the app.',
      'All patient data and clinic data you enter remains your property. We do not claim ownership of your data.',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Limitation of Liability',
    content: [
      'Clinikr is provided "as is" without warranties of any kind, express or implied.',
      'We are not liable for any medical decisions made based on data stored in the app.',
      'We do not guarantee uninterrupted or error-free operation, though we strive for maximum uptime.',
      'Our total liability shall not exceed the amount paid by you for the service in the 12 months preceding any claim.',
    ],
  },
  {
    icon: Ban,
    title: 'Prohibited Activities',
    content: [
      'Sharing your account credentials with unauthorized individuals.',
      'Attempting to access other clinics\' data or bypass Row-Level Security.',
      'Using automated scripts, bots, or scrapers to access the service.',
      'Uploading malicious content, viruses, or any harmful code through document uploads.',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Account Termination',
    content: [
      'You may delete your account at any time through the app settings.',
      'We reserve the right to suspend or terminate accounts that violate these terms.',
      'Upon termination, you may request an export of your data within 30 days.',
      'After 30 days post-termination, all data associated with your account will be permanently deleted.',
    ],
  },
];

export default function Terms() {
  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ margin: '0 auto 16px' }}>
              <FileText size={14} /> Terms of Service
            </div>
            <h1 className="section-title" style={{ margin: '0 auto 16px' }}>
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto 8px' }}>
              Please read these terms carefully before using Clinikr.
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
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>Questions about these terms?</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              Contact us at <a href="mailto:legal@clinikr.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>legal@clinikr.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
