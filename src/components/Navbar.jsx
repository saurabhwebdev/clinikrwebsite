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
        top: scrolled ? 12 : 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: scrolled ? 'min(92%, 900px)' : 'min(94%, 1060px)',
        padding: '0 8px',
        height: scrolled ? 56 : 62,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: scrolled
          ? 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #7C3AED 100%)'
          : 'linear-gradient(135deg, rgba(79,70,229,0.92) 0%, rgba(99,102,241,0.92) 50%, rgba(124,58,237,0.92) 100%)',
        backdropFilter: 'blur(20px)',
        borderRadius: 100,
        boxShadow: scrolled
          ? '0 8px 32px rgba(79,70,229,0.3), 0 2px 8px rgba(0,0,0,0.1)'
          : '0 4px 24px rgba(79,70,229,0.2), 0 1px 4px rgba(0,0,0,0.06)',
        border: '1px solid rgba(255,255,255,0.15)',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}>
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 12px',
        }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
            <img src="/logo.png" alt="Clinikr" style={{
              height: 32,
              width: 32,
              borderRadius: 8,
              border: '2px solid rgba(255,255,255,0.25)',
            }} />
            <span style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
            }}>
              Clinikr
            </span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="nav-desktop">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-pill-link" style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                padding: '7px 16px',
                borderRadius: 100,
                transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => {
                  e.target.style.color = '#fff';
                  e.target.style.background = 'rgba(255,255,255,0.15)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'rgba(255,255,255,0.85)';
                  e.target.style.background = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="#cta" style={{
              padding: '8px 22px',
              background: '#fff',
              color: '#4F46E5',
              borderRadius: 100,
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              marginLeft: 6,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
              onMouseEnter={e => {
                e.target.style.background = '#EEF2FF';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.target.style.background = '#fff';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              Get Started
            </a>
          </div>

          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(!open)}
            style={{
              display: 'none',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
              color: '#fff',
              padding: 8,
              borderRadius: 12,
              lineHeight: 0,
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 82,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'min(92%, 400px)',
              zIndex: 999,
              background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #7C3AED 100%)',
              borderRadius: 24,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              boxShadow: '0 12px 40px rgba(79,70,229,0.35), 0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  padding: '12px 16px',
                  borderRadius: 14,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.target.style.background = 'rgba(255,255,255,0.12)';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'rgba(255,255,255,0.9)';
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} style={{
              padding: '12px 24px',
              background: '#fff',
              color: '#4F46E5',
              borderRadius: 14,
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
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
