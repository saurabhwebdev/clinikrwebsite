import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #0B0A1A 0%, #1E1B4B 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            display: 'flex',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Glow blobs */}
        <div
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)',
            top: -100,
            left: -50,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
            bottom: -100,
            right: 200,
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            padding: '60px 70px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Left side — text */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              paddingRight: 40,
            }}
          >
            {/* Logo + brand */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 24,
                  fontWeight: 800,
                }}
              >
                C
              </div>
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: '#F8FAFC',
                  letterSpacing: '-0.02em',
                }}
              >
                Clinikr
              </span>
            </div>

            {/* Headline */}
            <div
              style={{
                fontSize: 52,
                fontWeight: 900,
                color: '#F8FAFC',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: 8,
                display: 'flex',
              }}
            >
              Your entire clinic,
            </div>
            <div
              style={{
                fontSize: 52,
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: 24,
                background: 'linear-gradient(135deg, #818CF8, #C084FC)',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'flex',
              }}
            >
              one app.
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: 20,
                color: '#94A3B8',
                lineHeight: 1.6,
                maxWidth: 460,
                display: 'flex',
              }}
            >
              Patients, Appointments, EMR, Billing, POS, Inventory & Analytics — all in your pocket.
            </div>

            {/* Badges */}
            <div
              style={{
                display: 'flex',
                gap: 12,
                marginTop: 32,
              }}
            >
              {['Free Forever', 'Android & iOS', 'GST Compliant'].map(
                (text) => (
                  <div
                    key={text}
                    style={{
                      padding: '8px 18px',
                      borderRadius: 10,
                      background: 'rgba(79,70,229,0.15)',
                      border: '1px solid rgba(129,140,248,0.2)',
                      color: '#C7D2FE',
                      fontSize: 14,
                      fontWeight: 600,
                      display: 'flex',
                    }}
                  >
                    {text}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right side — phone mockup */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Phone glow */}
            <div
              style={{
                position: 'absolute',
                width: 300,
                height: 400,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 70%)',
                display: 'flex',
              }}
            />

            {/* Phone frame */}
            <div
              style={{
                width: 230,
                height: 460,
                borderRadius: 36,
                background: '#fff',
                padding: '12px 0 0',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,0.3), 0 0 0 2px rgba(129,140,248,0.15)',
                position: 'relative',
              }}
            >
              {/* Notch */}
              <div
                style={{
                  width: 70,
                  height: 20,
                  borderRadius: 10,
                  background: '#1E293B',
                  margin: '0 auto 8px',
                  display: 'flex',
                }}
              />

              {/* Status bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 18px 8px',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#1E293B',
                }}
              >
                <span>9:41</span>
                <span style={{ color: '#94A3B8' }}>●●●</span>
              </div>

              {/* Header */}
              <div
                style={{
                  padding: '4px 16px 10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 10, color: '#94A3B8' }}>Good morning,</span>
                  <span style={{ fontSize: 16, fontWeight: 800, color: '#1E293B' }}>
                    Dr. Sharma
                  </span>
                </div>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 9,
                    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  DS
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: 5, padding: '0 12px 10px' }}>
                {[
                  { n: '12', l: 'Today', c: '#4F46E5' },
                  { n: '3', l: 'Waiting', c: '#F59E0B' },
                  { n: '8', l: 'Done', c: '#22C55E' },
                ].map((s) => (
                  <div
                    key={s.l}
                    style={{
                      flex: 1,
                      padding: '8px 4px',
                      borderRadius: 8,
                      background: '#F8FAFC',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: 16, fontWeight: 800, color: s.c }}>{s.n}</span>
                    <span style={{ fontSize: 8, color: '#94A3B8', fontWeight: 500 }}>{s.l}</span>
                  </div>
                ))}
              </div>

              {/* Section label */}
              <div style={{ padding: '2px 16px 6px', fontSize: 11, fontWeight: 700, color: '#1E293B', display: 'flex' }}>
                Upcoming
              </div>

              {/* Patient rows */}
              {[
                { name: 'Rahul Sharma', time: '10:30 AM', tag: 'Checked In', color: '#22C55E' },
                { name: 'Priya Singh', time: '11:00 AM', tag: 'Waiting', color: '#F59E0B' },
                { name: 'Amit Patel', time: '11:30 AM', tag: 'Scheduled', color: '#6366F1' },
              ].map((r, i) => (
                <div
                  key={r.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    margin: '0 12px 4px',
                    padding: '7px 10px',
                    borderRadius: 9,
                    background: i === 0 ? '#EEF2FF' : '#F8FAFC',
                    border: i === 0 ? '1px solid rgba(99,102,241,0.12)' : '1px solid transparent',
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      background: `${r.color}18`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 8,
                      fontWeight: 700,
                      color: r.color,
                    }}
                  >
                    {r.name.split(' ').map((w) => w[0]).join('')}
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: '#1E293B' }}>{r.name}</span>
                    <span style={{ fontSize: 8, color: '#94A3B8' }}>{r.time}</span>
                  </div>
                  <div
                    style={{
                      padding: '2px 6px',
                      borderRadius: 4,
                      background: `${r.color}15`,
                      fontSize: 7,
                      fontWeight: 600,
                      color: r.color,
                      display: 'flex',
                    }}
                  >
                    {r.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
            background: 'linear-gradient(90deg, #818CF8, #C084FC, #818CF8)',
            display: 'flex',
          }}
        />

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: 70,
            fontSize: 15,
            color: '#64748B',
            fontWeight: 600,
            display: 'flex',
          }}
        >
          clinikr.xyz
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
