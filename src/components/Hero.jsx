import { motion } from 'framer-motion';
import {
  Stethoscope, Calendar, FileText, ShoppingCart,
  Package, FlaskConical, Shield, Smartphone
} from 'lucide-react';

const floatingIcons = [
  { Icon: Stethoscope, x: '8%', y: '25%', delay: 0, color: '#4F46E5' },
  { Icon: Calendar, x: '85%', y: '20%', delay: 0.3, color: '#22C55E' },
  { Icon: FileText, x: '12%', y: '70%', delay: 0.6, color: '#F59E0B' },
  { Icon: ShoppingCart, x: '88%', y: '65%', delay: 0.9, color: '#EF4444' },
  { Icon: Package, x: '5%', y: '48%', delay: 1.2, color: '#7C3AED' },
  { Icon: FlaskConical, x: '92%', y: '42%', delay: 0.4, color: '#06B6D4' },
  { Icon: Shield, x: '18%', y: '88%', delay: 0.8, color: '#10B981' },
  { Icon: Smartphone, x: '80%', y: '85%', delay: 1.0, color: '#F97316' },
];

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 24px 80px',
    }}>
      {/* Background gradient orbs */}
      <div style={{
        position: 'absolute', top: -200, right: -200,
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', bottom: -100, left: -100,
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay, color }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: 0.5 + delay, duration: 0.6, ease: 'backOut' }}
          style={{
            position: 'absolute', left: x, top: y,
            display: 'flex',
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon size={28} color={color} />
          </motion.div>
        </motion.div>
      ))}

      <div style={{ maxWidth: 800, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ margin: '0 auto 24px' }}>
            Built for modern clinics
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: 24,
          }}
        >
          Your entire clinic,{' '}
          <span className="gradient-text">one app.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: 600,
            margin: '0 auto 40px',
          }}
        >
          Patients. Appointments. Medical records. Billing. Point of sale.
          Inventory. Lab orders. — All beautifully connected. All in your pocket.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#features" style={{
            padding: '14px 32px',
            background: 'var(--primary)',
            color: '#fff',
            borderRadius: 14,
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s',
            boxShadow: '0 4px 20px rgba(79,70,229,0.3)',
          }}>
            Explore Features
          </a>
          <a href="#modules" style={{
            padding: '14px 32px',
            background: 'var(--surface)',
            color: 'var(--text)',
            borderRadius: 14,
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
            border: '1px solid var(--border)',
            transition: 'all 0.2s',
          }}>
            See All Modules
          </a>
        </motion.div>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: 48,
          }}
        >
          {['Cloud-Powered', 'GST Compliant', 'Multi-Language', 'Dark Mode'].map(tag => (
            <span key={tag} className="pill">{tag}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
