import { motion } from 'framer-motion';
import { ArrowRight, Download, Shield, Zap, Clock } from 'lucide-react';

/* Inline doctor illustration – clean flat vector style */
function DoctorIllustration() {
  return (
    <svg viewBox="0 0 400 440" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: 380 }}>
      {/* Background circle glow */}
      <circle cx="200" cy="220" r="170" fill="url(#ctaGlow)" opacity="0.15" />

      {/* Floating medical icons */}
      <g className="cta-float-1">
        <rect x="48" y="80" width="52" height="52" rx="14" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <path d="M74 96v20M64 106h20" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <g className="cta-float-2">
        <rect x="300" y="60" width="52" height="52" rx="14" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <path d="M326 76l-8 16h16l-8 16" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="cta-float-3">
        <rect x="310" y="280" width="48" height="48" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <circle cx="334" cy="298" r="6" stroke="#6EE7B7" strokeWidth="2" fill="none" />
        <path d="M334 308v4M330 310h8" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Phone / app mockup in doctor's hand area */}
      <g>
        <rect x="158" y="180" width="84" height="150" rx="12" fill="#1E1B4B" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <rect x="165" y="192" width="70" height="126" rx="6" fill="#0F0A2E" />
        {/* App screen content */}
        <rect x="172" y="200" width="56" height="8" rx="4" fill="#4F46E5" opacity="0.8" />
        <rect x="172" y="216" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
        <rect x="172" y="228" width="56" height="32" rx="6" fill="rgba(79,70,229,0.2)" stroke="rgba(79,70,229,0.3)" strokeWidth="0.75" />
        {/* Mini chart bars */}
        <rect x="180" y="248" width="6" height="8" rx="1" fill="#818CF8" opacity="0.6" />
        <rect x="190" y="244" width="6" height="12" rx="1" fill="#818CF8" opacity="0.8" />
        <rect x="200" y="240" width="6" height="16" rx="1" fill="#818CF8" />
        <rect x="210" y="242" width="6" height="14" rx="1" fill="#818CF8" opacity="0.7" />
        {/* List items */}
        <rect x="172" y="268" width="56" height="12" rx="4" fill="rgba(255,255,255,0.06)" />
        <circle cx="178" cy="274" r="2.5" fill="#22C55E" />
        <rect x="184" y="272" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
        <rect x="172" y="286" width="56" height="12" rx="4" fill="rgba(255,255,255,0.06)" />
        <circle cx="178" cy="292" r="2.5" fill="#6366F1" />
        <rect x="184" y="290" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
        <rect x="172" y="304" width="56" height="12" rx="4" fill="rgba(255,255,255,0.06)" />
        <circle cx="178" cy="310" r="2.5" fill="#F59E0B" />
        <rect x="184" y="308" width="34" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
        {/* Phone notch */}
        <rect x="186" y="184" width="28" height="5" rx="2.5" fill="#0F0A2E" />
      </g>

      {/* Doctor figure – left side */}
      {/* Head */}
      <circle cx="130" cy="130" r="32" fill="#F8D4B0" />
      {/* Hair */}
      <path d="M98 125c0-20 14-36 32-36s32 16 32 36" fill="#1E293B" />
      <ellipse cx="130" cy="118" rx="28" ry="8" fill="#1E293B" />
      {/* Face details */}
      <circle cx="120" cy="132" r="2.5" fill="#1E293B" />
      <circle cx="140" cy="132" r="2.5" fill="#1E293B" />
      <path d="M124 143c3 3 9 3 12 0" stroke="#C4956A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Glasses */}
      <rect x="112" y="127" width="16" height="12" rx="6" stroke="#64748B" strokeWidth="1.5" fill="none" />
      <rect x="132" y="127" width="16" height="12" rx="6" stroke="#64748B" strokeWidth="1.5" fill="none" />
      <path d="M128 133h4" stroke="#64748B" strokeWidth="1.5" />

      {/* Body – white coat */}
      <path d="M90 170c0-8 8-16 20-20h40c12 4 20 12 20 20v100c0 6-4 10-10 10H100c-6 0-10-4-10-10V170z" fill="#F8FAFC" />
      {/* Coat lapels */}
      <path d="M130 150l-14 30v40" stroke="#E2E8F0" strokeWidth="1.5" fill="none" />
      <path d="M130 150l14 30v40" stroke="#E2E8F0" strokeWidth="1.5" fill="none" />
      {/* Coat buttons */}
      <circle cx="130" cy="200" r="3" fill="#E2E8F0" />
      <circle cx="130" cy="220" r="3" fill="#E2E8F0" />
      {/* Collar */}
      <path d="M112 155l18 10 18-10" stroke="#E2E8F0" strokeWidth="1.5" fill="none" />
      {/* Inner shirt / tie */}
      <path d="M126 165h8v30l-4 6-4-6v-30z" fill="#4F46E5" opacity="0.8" />
      {/* Stethoscope */}
      <path d="M108 170c-8 10-10 30-6 50" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="100" cy="224" r="6" stroke="#94A3B8" strokeWidth="2" fill="#64748B" />
      <circle cx="100" cy="224" r="2.5" fill="#94A3B8" />
      {/* Name badge */}
      <rect x="138" y="185" width="24" height="14" rx="3" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="0.75" />
      <rect x="142" y="189" width="16" height="2" rx="1" fill="#4F46E5" opacity="0.4" />
      <rect x="142" y="193" width="10" height="2" rx="1" fill="#4F46E5" opacity="0.25" />

      {/* Right arm holding phone */}
      <path d="M170 175c10 4 14 12 14 22v30" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      {/* Hand */}
      <ellipse cx="176" cy="178" rx="10" ry="8" fill="#F8D4B0" />

      {/* Left arm */}
      <path d="M90 175c-8 6-12 16-10 28" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />

      {/* Legs */}
      <rect x="105" y="278" width="22" height="70" rx="6" fill="#334155" />
      <rect x="133" y="278" width="22" height="70" rx="6" fill="#334155" />
      {/* Shoes */}
      <path d="M103 342c0 6 4 10 10 10h18c4 0 6-3 6-6v-4H103z" fill="#1E293B" />
      <path d="M131 342c0 6 4 10 10 10h18c4 0 6-3 6-6v-4H131z" fill="#1E293B" />

      {/* Heartbeat line across */}
      <path d="M30 390h80l8-14 8 28 8-28 8 14h228" stroke="url(#heartLine)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      <defs>
        <radialGradient id="ctaGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="heartLine" x1="0" y1="0" x2="400" y2="0">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0" />
          <stop offset="30%" stopColor="#818CF8" />
          <stop offset="70%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const trustItems = [
  { icon: Shield, text: 'HIPAA-ready security' },
  { icon: Zap, text: 'Setup in 2 minutes' },
  { icon: Clock, text: '24/7 cloud sync' },
];

export default function CTA() {
  return (
    <section id="cta" style={{
      padding: 'clamp(48px, 8vw, 100px) clamp(16px, 3vw, 24px)',
      paddingBottom: 'clamp(32px, 6vw, 64px)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: '#0B0A1A',
            borderRadius: 'clamp(20px, 3vw, 32px)',
            padding: 'clamp(40px, 6vw, 72px) clamp(28px, 5vw, 72px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background elements */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.5,
            background: 'radial-gradient(ellipse 60% 50% at 10% 50%, rgba(79,70,229,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 90% 30%, rgba(124,58,237,0.1) 0%, transparent 70%)',
          }} />
          {/* Subtle grid pattern */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.03,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />

          {/* Content grid: text left, illustration right */}
          <div className="cta-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            {/* Left: text + CTA */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '6px 16px', borderRadius: 100,
                  background: 'rgba(79,70,229,0.2)',
                  border: '1px solid rgba(79,70,229,0.3)',
                  marginBottom: 24,
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#22C55E',
                    boxShadow: '0 0 8px rgba(34,197,94,0.6)',
                  }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#C7D2FE', letterSpacing: '0.03em' }}>
                    Free forever — No credit card needed
                  </span>
                </div>

                <h2 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  fontWeight: 800,
                  color: '#F8FAFC',
                  lineHeight: 1.15,
                  marginBottom: 16,
                  letterSpacing: '-0.02em',
                }}>
                  Your clinic deserves<br />
                  <span style={{
                    background: 'linear-gradient(135deg, #818CF8, #C084FC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    better software.
                  </span>
                </h2>

                <p style={{
                  fontSize: 'clamp(0.92rem, 1.5vw, 1.05rem)',
                  color: '#94A3B8',
                  lineHeight: 1.7,
                  maxWidth: 440,
                  marginBottom: 32,
                }}>
                  Stop juggling spreadsheets, paper files, and disconnected tools.
                  Clinikr brings everything together in one beautiful app.
                </p>

                {/* CTA buttons */}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
                  <a href="#" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 32px',
                    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                    color: '#fff',
                    borderRadius: 12,
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 20px rgba(79,70,229,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(79,70,229,0.5), 0 0 0 1px rgba(255,255,255,0.15) inset';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(79,70,229,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset';
                    }}
                  >
                    <Download size={17} /> Download Now
                  </a>
                  <a href="mailto:support@clinikr.com" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 28px',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#CBD5E1',
                    borderRadius: 12,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.color = '#CBD5E1';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Talk to Us <ArrowRight size={16} />
                  </a>
                </div>

                {/* Trust signals */}
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                  {trustItems.map(({ icon: Icon, text }) => (
                    <div key={text} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                    }}>
                      <Icon size={14} color="#64748B" />
                      <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 500 }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Doctor illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <DoctorIllustration />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .cta-grid > div:first-child {
            order: 1;
          }
          .cta-grid > div:last-child {
            order: 0;
            max-width: 280px;
            margin: 0 auto;
          }
          .cta-grid > div:first-child > div > div:last-child {
            justify-content: center;
          }
          .cta-grid > div:first-child > div > div:nth-last-child(2) {
            justify-content: center;
          }
          .cta-grid > div:first-child > div > div:first-child {
            margin-left: auto;
            margin-right: auto;
          }
          .cta-grid > div:first-child > div > p {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @keyframes ctaFloat1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes ctaFloat2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes ctaFloat3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .cta-float-1 { animation: ctaFloat1 4s ease-in-out infinite; }
        .cta-float-2 { animation: ctaFloat2 5s ease-in-out infinite 0.5s; }
        .cta-float-3 { animation: ctaFloat3 4.5s ease-in-out infinite 1s; }
      `}</style>
    </section>
  );
}
