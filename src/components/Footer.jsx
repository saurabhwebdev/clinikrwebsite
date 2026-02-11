import { Link } from 'react-router-dom';
import {
  Heart, Mail, Phone, MapPin,
  Stethoscope, CalendarCheck, Package, ShoppingCart,
  Receipt, ClipboardList, BarChart3, Settings
} from 'lucide-react';

const modules = [
  { icon: Stethoscope, label: 'Patient Management' },
  { icon: CalendarCheck, label: 'Appointments' },
  { icon: ClipboardList, label: 'EMR & Prescriptions' },
  { icon: Receipt, label: 'Billing & Invoicing' },
  { icon: ShoppingCart, label: 'Point of Sale' },
  { icon: Package, label: 'Inventory' },
  { icon: BarChart3, label: 'Dashboard & Reports' },
  { icon: Settings, label: 'Clinic Settings' },
];

const links = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Support', href: '/support' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{
      background: '#0F172A',
      padding: 'clamp(36px, 6vw, 64px) clamp(16px, 3vw, 24px) 0',
      color: '#CBD5E1',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative illustration */}
      <img
        src="/images/medical-care.svg"
        alt=""
        style={{
          position: 'absolute',
          right: '-30px',
          bottom: '-50px',
          width: 'clamp(200px, 22vw, 320px)',
          height: 'auto',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        position: 'relative', zIndex: 1,
      }}>
        {/* Main footer grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: 48,
          paddingBottom: 48,
          borderBottom: '1px solid #1E293B',
        }} className="footer-grid">
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="/logo.png" alt="Clinikr" style={{ height: 36, width: 36, borderRadius: 10 }} />
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F8FAFC' }}>Clinikr</span>
            </div>
            <p style={{
              fontSize: '0.88rem', lineHeight: 1.7, color: '#94A3B8',
              maxWidth: 320, marginBottom: 20,
            }}>
              The all-in-one clinic management app. Patients, appointments, EMR,
              billing, POS, inventory — everything in your pocket.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="mailto:support@clinikr.com" style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: '0.82rem', color: '#94A3B8', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#818CF8'}
                onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}
              >
                <Mail size={14} /> support@clinikr.com
              </a>
            </div>
          </div>

          {/* Modules column */}
          <div>
            <h4 style={{
              fontSize: '0.78rem', fontWeight: 700, color: '#64748B',
              textTransform: 'uppercase', letterSpacing: '0.08em',
              marginBottom: 20,
            }}>
              Modules
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {modules.map(({ icon: Icon, label }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontSize: '0.82rem', color: '#94A3B8',
                }}>
                  <Icon size={13} color="#64748B" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4 style={{
              fontSize: '0.78rem', fontWeight: 700, color: '#64748B',
              textTransform: 'uppercase', letterSpacing: '0.08em',
              marginBottom: 20,
            }}>
              Legal & Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.map(({ label, href }) => (
                <Link key={label} to={href} style={{
                  fontSize: '0.82rem', color: '#94A3B8',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#818CF8'}
                  onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Platform badges */}
            <div style={{ marginTop: 28 }}>
              <h4 style={{
                fontSize: '0.78rem', fontWeight: 700, color: '#64748B',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                marginBottom: 12,
              }}>
                Available On
              </h4>
              <div style={{ display: 'flex', gap: 8 }}>
                {['Android', 'iOS'].map(platform => (
                  <span key={platform} style={{
                    padding: '5px 14px', borderRadius: 8,
                    background: '#1E293B', border: '1px solid #334155',
                    fontSize: '0.75rem', fontWeight: 600, color: '#CBD5E1',
                  }}>
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '20px 0',
          flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
            © {new Date().getFullYear()} Clinikr. All rights reserved.
          </span>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: '0.78rem', color: '#64748B',
          }}>
            Made with <Heart size={12} color="#EF4444" fill="#EF4444" /> for healthcare professionals
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
