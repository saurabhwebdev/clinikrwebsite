export default function WaveDivider({ from = 'var(--bg)', to = 'var(--surface)' }) {
  return (
    <div style={{
      height: 48,
      background: `linear-gradient(to bottom, ${from}, ${to})`,
    }} />
  );
}
