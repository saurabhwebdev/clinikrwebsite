import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Why Clinikr', href: '#why' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: scrolled ? 'rgba(250,251,255,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1200,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/logo.png" alt="Clinikr" style={{ height: 36, width: 36, borderRadius: 10 }} />
            <span style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
            }}>
              Clinikr
            </span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-desktop">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.label}
              </a>
            ))}
            <a href="#cta" style={{
              padding: '10px 24px',
              background: 'var(--primary)',
              color: '#fff',
              borderRadius: 12,
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => e.target.style.background = 'var(--primary-dark)'}
              onMouseLeave={e => e.target.style.background = 'var(--primary)'}
            >
              Get Started
            </a>
          </div>

          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(!open)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text)',
              padding: 8,
            }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed',
              top: 72,
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'rgba(250,251,255,0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '16px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  padding: '8px 0',
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} style={{
              padding: '12px 24px',
              background: 'var(--primary)',
              color: '#fff',
              borderRadius: 12,
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: 8,
            }}>
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
