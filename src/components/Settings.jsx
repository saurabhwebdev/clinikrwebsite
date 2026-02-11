import { motion } from 'framer-motion';
import {
  Settings as SettingsIcon, Building2, UserCircle, Users2,
  Receipt, CalendarCog, Package, CreditCard,
  Mail, Globe, Palette, HelpCircle
} from 'lucide-react';

const settingsGroups = [
  {
    title: 'Clinic',
    items: [
      { icon: Building2, label: 'Clinic Details', desc: 'Name, address, logo, registration' },
      { icon: Users2, label: 'Team', desc: 'Invite members, assign roles' },
      { icon: CalendarCog, label: 'Timings', desc: 'Working hours, holidays' },
    ],
  },
  {
    title: 'Billing',
    items: [
      { icon: Receipt, label: 'Invoice Settings', desc: 'Numbering, prefix, terms' },
      { icon: CreditCard, label: 'Payment Gateways', desc: 'Razorpay, UPI, bank' },
      { icon: Mail, label: 'Email', desc: 'SMTP, templates, automation' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { icon: Palette, label: 'Theme', desc: 'Light, dark, custom color' },
      { icon: Globe, label: 'Language', desc: 'English, Hindi' },
      { icon: HelpCircle, label: 'Help & Support', desc: 'Guides, FAQs, tickets' },
    ],
  },
];

export default function Settings() {
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
            <SettingsIcon size={14} /> Settings & Configuration
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            Make it <span className="gradient-text">yours</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Every clinic is different. Customize invoice formats, set up payment gateways,
            manage your team, configure working hours — tailor Clinikr to your practice.
          </p>
        </motion.div>

        <div className="grid-3" style={{ maxWidth: 960, margin: '0 auto' }}>
          {settingsGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.15 }}
              style={{
                background: 'var(--surface)',
                borderRadius: 20,
                border: '1px solid var(--border)',
                overflow: 'hidden',
              }}
            >
              <div style={{
                padding: '16px 24px',
                borderBottom: '1px solid var(--border)',
                background: 'var(--primary-soft)',
              }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {group.title}
                </span>
              </div>
              <div style={{ padding: 8 }}>
                {group.items.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '14px 16px',
                      borderRadius: 12,
                      transition: 'background 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: 'var(--primary-soft)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={16} color="var(--primary)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{label}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
