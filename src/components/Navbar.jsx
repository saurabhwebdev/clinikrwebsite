import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Features', href: '#features' },
  {
    label: 'Modules',
    href: '#modules',
    children: [
      { label: 'Patients', href: '#modules' },
      { label: 'Appointments', href: '#modules' },
      { label: 'EMR & Records', href: '#modules' },
      { label: 'Billing', href: '#modules' },
      { label: 'Point of Sale', href: '#modules' },
      { label: 'Inventory', href: '#modules' },
    ],
  },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Why Clinikr', href: '#why' },
];

const topLinks = [
  { label: 'Support', to: '/support' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (dropdown === null) return;
    const close = () => setDropdown(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [dropdown]);

  const handleNavClick = (href) => {
    setOpen(false);
    setDropdown(null);
    if (!isHome && href.startsWith('#')) {
      window.location.href = '/' + href;
    }
  };

  return (
    <>
      {/* ── Top Bar ─────────────────────────────────── */}
      <div className="nav-topbar" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001,
        background: '#0F172A',
        borderBottom: '1px solid #1E293B',
        transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '6px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }} className="topbar-left">
            <a href="mailto:support@clinikr.com" style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontSize: '0.75rem', color: '#94A3B8', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#C7D2FE'}
              onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}
            >
              <Mail size={12} /> support@clinikr.com
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="topbar-right">
            {topLinks.map(({ label, to }) => (
              <Link key={label} to={to} style={{
                fontSize: '0.75rem', color: '#94A3B8', textDecoration: 'none',
                padding: '4px 10px', borderRadius: 6, transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#C7D2FE';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#94A3B8';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Nav Pill ───────────────────────────── */}
      <nav className="nav-pill" style={{
        position: 'fixed',
        top: scrolled ? 12 : 46,
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
        overflow: 'visible',
      }}>
        {/* Animated shimmer overlay */}
        <div className="nav-shimmer" />

        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 12px',
          position: 'relative',
          zIndex: 1,
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
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
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="nav-desktop">
            {navLinks.map((link, idx) => (
              <div key={link.label} style={{ position: 'relative' }}>
                {link.children ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdown(dropdown === idx ? null : idx);
                      }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                        fontFamily: 'inherit',
                        fontSize: '0.85rem', fontWeight: 500,
                        lineHeight: 1.4,
                        color: dropdown === idx ? '#fff' : 'rgba(255,255,255,0.85)',
                        background: dropdown === idx ? 'rgba(255,255,255,0.15)' : 'transparent',
                        border: 'none', cursor: 'pointer',
                        padding: '7px 16px', borderRadius: 100,
                        transition: 'all 0.2s ease',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                      }}
                      onMouseLeave={e => {
                        if (dropdown !== idx) {
                          e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      {link.label}
                      <ChevronDown size={13} style={{
                        transition: 'transform 0.2s',
                        transform: dropdown === idx ? 'rotate(180deg)' : 'rotate(0)',
                        flexShrink: 0,
                      }} />
                    </button>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {dropdown === idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          onClick={e => e.stopPropagation()}
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 14px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            minWidth: 200,
                            background: '#fff',
                            borderRadius: 14,
                            padding: 6,
                            boxShadow: '0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(79,70,229,0.08)',
                            border: '1px solid var(--border)',
                            zIndex: 100,
                          }}
                        >
                          {/* Arrow */}
                          <div style={{
                            position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%) rotate(45deg)',
                            width: 12, height: 12, background: '#fff', border: '1px solid var(--border)',
                            borderBottom: 'none', borderRight: 'none', borderRadius: '2px 0 0 0',
                          }} />
                          {link.children.map(child => (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={() => { setDropdown(null); handleNavClick(child.href); }}
                              style={{
                                display: 'block',
                                padding: '9px 14px',
                                fontSize: '0.84rem',
                                fontWeight: 500,
                                color: 'var(--text)',
                                textDecoration: 'none',
                                borderRadius: 8,
                                transition: 'all 0.15s',
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.background = 'var(--primary-soft)';
                                e.currentTarget.style.color = 'var(--primary)';
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'var(--text)';
                              }}
                            >
                              {child.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      lineHeight: 1.4,
                      color: 'rgba(255,255,255,0.85)',
                      textDecoration: 'none',
                      padding: '7px 16px',
                      borderRadius: 100,
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <a href={isHome ? '#cta' : '/#cta'} style={{
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
                e.currentTarget.style.background = '#EEF2FF';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
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

      {/* ── Mobile Menu ─────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 80,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'min(92%, 400px)',
              maxHeight: 'calc(100dvh - 92px)',
              overflowY: 'auto',
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
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    padding: '12px 16px',
                    borderRadius: 14,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                  }}
                >
                  {link.label}
                </a>
                {/* Mobile sub-items */}
                {link.children && (
                  <div style={{ paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {link.children.map(child => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => handleNavClick(child.href)}
                        style={{
                          fontSize: '0.85rem',
                          color: 'rgba(255,255,255,0.6)',
                          textDecoration: 'none',
                          padding: '8px 16px',
                          borderRadius: 10,
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile top links */}
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.12)',
              marginTop: 8, paddingTop: 8,
              display: 'flex', gap: 0, flexDirection: 'column',
            }}>
              {topLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none', padding: '10px 16px', borderRadius: 14,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>

            <a href={isHome ? '#cta' : '/#cta'} onClick={() => setOpen(false)} style={{
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
        @keyframes navShimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        .nav-shimmer {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.06) 40%,
            rgba(255,255,255,0.12) 50%,
            rgba(255,255,255,0.06) 60%,
            transparent 100%
          );
          animation: navShimmer 6s ease-in-out infinite;
          pointer-events: none;
          border-radius: inherit;
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          .nav-topbar { display: none !important; }
          .nav-pill { top: 12px !important; }
        }
      `}</style>
    </>
  );
}
