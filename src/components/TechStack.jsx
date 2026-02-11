import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Layers } from 'lucide-react';

const stack = [
  {
    category: 'Frontend',
    icon: Layers,
    color: '#3B82F6',
    items: ['Flutter', 'Material Design 3', 'Provider', 'GoRouter'],
  },
  {
    category: 'Backend',
    icon: Database,
    color: '#22C55E',
    items: ['Supabase', 'PostgreSQL', 'Edge Functions', 'Row-Level Security'],
  },
  {
    category: 'Integrations',
    icon: Cpu,
    color: '#7C3AED',
    items: ['Razorpay', 'Biometric Auth', 'PDF Generation', 'SMTP Email'],
  },
  {
    category: 'Design',
    icon: Code2,
    color: '#F59E0B',
    items: ['Inter Font', 'Iconsax Icons', 'Lottie Animations', 'Custom Theming'],
  },
];

export default function TechStack() {
  return (
    <section className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px' }}>
            <Code2 size={14} /> Under the Hood
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            Built on a <span className="gradient-text">modern stack</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Production-grade technology. Cross-platform Flutter frontend. Supabase cloud backend.
            Secure, scalable, and performant.
          </p>
        </motion.div>

        <div className="grid-4" style={{ maxWidth: 1000, margin: '0 auto' }}>
          {stack.map(({ category, icon: Icon, color, items }, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'var(--surface)',
                borderRadius: 16,
                border: '1px solid var(--border)',
                overflow: 'hidden',
              }}
            >
              <div style={{
                padding: '20px 24px 16px',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: `${color}12`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={16} color={color} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{category}</span>
              </div>
              <div style={{ padding: '0 24px 20px' }}>
                {items.map(item => (
                  <div key={item} style={{
                    padding: '8px 0',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: 3,
                      background: color,
                    }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
