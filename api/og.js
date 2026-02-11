import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #0B0A1A 0%, #1E1B4B 100%)',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        },
        children: [
          // Grid pattern
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                opacity: 0.04,
                display: 'flex',
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              },
            },
          },
          // Glow
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                width: 500,
                height: 500,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)',
                top: -100,
                left: -50,
                display: 'flex',
              },
            },
          },
          // Content
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                padding: '60px 70px',
                position: 'relative',
                zIndex: 1,
              },
              children: [
                // Left side
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      paddingRight: 40,
                    },
                    children: [
                      // Logo + brand
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            marginBottom: 32,
                          },
                          children: [
                            {
                              type: 'div',
                              props: {
                                style: {
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
                                },
                                children: 'C',
                              },
                            },
                            {
                              type: 'span',
                              props: {
                                style: {
                                  fontSize: 30,
                                  fontWeight: 800,
                                  color: '#F8FAFC',
                                },
                                children: 'Clinikr',
                              },
                            },
                          ],
                        },
                      },
                      // Headline line 1
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: 52,
                            fontWeight: 900,
                            color: '#F8FAFC',
                            lineHeight: 1.1,
                            letterSpacing: '-1px',
                            display: 'flex',
                          },
                          children: 'Your entire clinic,',
                        },
                      },
                      // Headline line 2
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: 52,
                            fontWeight: 900,
                            lineHeight: 1.1,
                            letterSpacing: '-1px',
                            marginBottom: 24,
                            color: '#818CF8',
                            display: 'flex',
                          },
                          children: 'one app.',
                        },
                      },
                      // Subtitle
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: 20,
                            color: '#94A3B8',
                            lineHeight: 1.6,
                            display: 'flex',
                          },
                          children: 'Patients, Appointments, EMR, Billing, POS, Inventory & Analytics — all in your pocket.',
                        },
                      },
                      // Badges
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            gap: 12,
                            marginTop: 32,
                          },
                          children: ['Free Forever', 'Android & iOS', 'GST Compliant'].map(
                            (text) => ({
                              type: 'div',
                              props: {
                                style: {
                                  padding: '8px 18px',
                                  borderRadius: 10,
                                  background: 'rgba(79,70,229,0.15)',
                                  border: '1px solid rgba(129,140,248,0.2)',
                                  color: '#C7D2FE',
                                  fontSize: 14,
                                  fontWeight: 600,
                                  display: 'flex',
                                },
                                children: text,
                              },
                            })
                          ),
                        },
                      },
                    ],
                  },
                },
                // Right side — phone
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: [
                      // Phone frame
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: 220,
                            height: 440,
                            borderRadius: 32,
                            background: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            boxShadow: '0 30px 80px rgba(0,0,0,0.3), 0 0 0 2px rgba(129,140,248,0.15)',
                          },
                          children: [
                            // Notch
                            {
                              type: 'div',
                              props: {
                                style: {
                                  width: 65,
                                  height: 18,
                                  borderRadius: 10,
                                  background: '#1E293B',
                                  margin: '10px auto 6px',
                                  display: 'flex',
                                },
                              },
                            },
                            // Status bar
                            {
                              type: 'div',
                              props: {
                                style: {
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  padding: '0 16px 6px',
                                  fontSize: 10,
                                  fontWeight: 600,
                                  color: '#1E293B',
                                },
                                children: [
                                  { type: 'span', props: { children: '9:41' } },
                                ],
                              },
                            },
                            // Header
                            {
                              type: 'div',
                              props: {
                                style: {
                                  padding: '4px 14px 8px',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                },
                                children: [
                                  {
                                    type: 'div',
                                    props: {
                                      style: { display: 'flex', flexDirection: 'column' },
                                      children: [
                                        { type: 'span', props: { style: { fontSize: 9, color: '#94A3B8' }, children: 'Good morning,' } },
                                        { type: 'span', props: { style: { fontSize: 14, fontWeight: 800, color: '#1E293B' }, children: 'Dr. Sharma' } },
                                      ],
                                    },
                                  },
                                  {
                                    type: 'div',
                                    props: {
                                      style: {
                                        width: 28, height: 28, borderRadius: 8,
                                        background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', fontSize: 10, fontWeight: 700,
                                      },
                                      children: 'DS',
                                    },
                                  },
                                ],
                              },
                            },
                            // Stats
                            {
                              type: 'div',
                              props: {
                                style: { display: 'flex', gap: 4, padding: '0 10px 8px' },
                                children: [
                                  { n: '12', l: 'Today', c: '#4F46E5' },
                                  { n: '3', l: 'Waiting', c: '#F59E0B' },
                                  { n: '8', l: 'Done', c: '#22C55E' },
                                ].map((s) => ({
                                  type: 'div',
                                  props: {
                                    style: {
                                      flex: 1, padding: '7px 4px', borderRadius: 7,
                                      background: '#F8FAFC', textAlign: 'center',
                                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                                    },
                                    children: [
                                      { type: 'span', props: { style: { fontSize: 14, fontWeight: 800, color: s.c }, children: s.n } },
                                      { type: 'span', props: { style: { fontSize: 7, color: '#94A3B8' }, children: s.l } },
                                    ],
                                  },
                                })),
                              },
                            },
                            // Section label
                            {
                              type: 'div',
                              props: {
                                style: { padding: '2px 14px 5px', fontSize: 10, fontWeight: 700, color: '#1E293B', display: 'flex' },
                                children: 'Upcoming',
                              },
                            },
                            // Patient rows
                            ...([
                              { name: 'Rahul Sharma', time: '10:30 AM', tag: 'Checked In', color: '#22C55E', hi: true },
                              { name: 'Priya Singh', time: '11:00 AM', tag: 'Waiting', color: '#F59E0B', hi: false },
                              { name: 'Amit Patel', time: '11:30 AM', tag: 'Scheduled', color: '#6366F1', hi: false },
                            ].map((r) => ({
                              type: 'div',
                              props: {
                                style: {
                                  display: 'flex', alignItems: 'center', gap: 6,
                                  margin: '0 10px 3px', padding: '6px 8px', borderRadius: 8,
                                  background: r.hi ? '#EEF2FF' : '#F8FAFC',
                                },
                                children: [
                                  {
                                    type: 'div',
                                    props: {
                                      style: {
                                        width: 22, height: 22, borderRadius: 6,
                                        background: r.color + '18',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: 7, fontWeight: 700, color: r.color,
                                      },
                                      children: r.name.split(' ').map((w) => w[0]).join(''),
                                    },
                                  },
                                  {
                                    type: 'div',
                                    props: {
                                      style: { flex: 1, display: 'flex', flexDirection: 'column' },
                                      children: [
                                        { type: 'span', props: { style: { fontSize: 9, fontWeight: 600, color: '#1E293B' }, children: r.name } },
                                        { type: 'span', props: { style: { fontSize: 7, color: '#94A3B8' }, children: r.time } },
                                      ],
                                    },
                                  },
                                  {
                                    type: 'div',
                                    props: {
                                      style: {
                                        padding: '2px 5px', borderRadius: 4,
                                        background: r.color + '15',
                                        fontSize: 6, fontWeight: 600, color: r.color,
                                        display: 'flex',
                                      },
                                      children: r.tag,
                                    },
                                  },
                                ],
                              },
                            }))),
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          // Bottom line
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: 0, left: 0, right: 0, height: 5,
                background: 'linear-gradient(90deg, #818CF8, #C084FC, #818CF8)',
                display: 'flex',
              },
            },
          },
          // Domain
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: 20, left: 70,
                fontSize: 15, color: '#64748B', fontWeight: 600,
                display: 'flex',
              },
              children: 'clinikr.xyz',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    }
  );
}
