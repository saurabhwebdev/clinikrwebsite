/**
 * Subtle layered-wave SVG section divider.
 *
 * Props:
 *  - from: background color of the section ABOVE  (default: 'var(--bg)')
 *  - to:   background color of the section BELOW  (default: 'var(--surface)')
 *  - flip: mirror vertically                       (default: false)
 *  - accent: tint color for the layered waves       (default: 'var(--primary)')
 */
export default function WaveDivider({
  from = 'var(--bg)',
  to = 'var(--surface)',
  flip = false,
  accent,
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(60px, 10vw, 140px)',
        overflow: 'hidden',
        lineHeight: 0,
        background: from,
        transform: flip ? 'rotate(180deg)' : 'none',
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      >
        {/* Back layer — lightest */}
        <path
          d="M0,64 C150,120 350,20 600,72 C850,124 1000,28 1200,64 L1200,120 L0,120 Z"
          fill={accent || 'var(--primary)'}
          opacity="0.06"
        />
        {/* Mid layer */}
        <path
          d="M0,72 C200,118 400,10 700,56 C900,100 1050,18 1200,72 L1200,120 L0,120 Z"
          fill={accent || 'var(--primary)'}
          opacity="0.12"
        />
        {/* Front layer — destination color */}
        <path
          d="M0,80 C250,110 350,30 600,84 C850,138 1000,40 1200,84 L1200,120 L0,120 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
