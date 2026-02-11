import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      padding: '32px 24px',
      borderTop: '1px solid var(--border)',
      background: 'var(--surface)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.png" alt="Clinikr" style={{ height: 28, width: 28, borderRadius: 8 }} />
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>Clinikr</span>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          fontSize: '0.82rem', color: 'var(--text-muted)',
        }}>
          Made with <Heart size={14} color="#EF4444" fill="#EF4444" /> for healthcare professionals
        </div>

        <div style={{
          display: 'flex', gap: 24,
        }}>
          {['Privacy', 'Terms', 'Support'].map(link => (
            <a key={link} href="#" style={{
              fontSize: '0.82rem', color: 'var(--text-muted)',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
