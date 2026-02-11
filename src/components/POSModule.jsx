import { motion } from 'framer-motion';
import {
  ShoppingCart, ScanBarcode, Wallet, CreditCard,
  QrCode, Banknote, Pause, LayoutGrid
} from 'lucide-react';

const paymentMethods = [
  { icon: Banknote, label: 'Cash', color: '#22C55E' },
  { icon: CreditCard, label: 'Card', color: '#3B82F6' },
  { icon: QrCode, label: 'UPI', color: '#7C3AED' },
  { icon: Wallet, label: 'Razorpay', color: '#4F46E5' },
];

const features = [
  { icon: ScanBarcode, title: 'Barcode Scanner', desc: 'Scan product barcodes with your phone camera. Instant cart addition.' },
  { icon: LayoutGrid, title: 'Product Grid', desc: 'Visual product browser with categories. Tap to add. Stock badges included.' },
  { icon: Pause, title: 'Hold & Resume', desc: 'Put a cart on hold. Serve the next customer. Come back anytime.' },
  { icon: Wallet, title: 'Session Management', desc: 'Open with a float. Close with reconciliation. Every rupee accounted for.' },
];

export default function POSModule() {
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
            <ShoppingCart size={14} /> Point of Sale
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            A retail counter <span className="gradient-text">in your clinic</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Sell medicines, products, and services right from your phone. Barcode scanning,
            multiple payment methods, session management — a full POS system.
          </p>
        </motion.div>

        {/* Payment methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 48,
            flexWrap: 'wrap',
          }}
        >
          {paymentMethods.map(({ icon: Icon, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 24px',
                background: 'var(--surface)',
                borderRadius: 12,
                border: '1px solid var(--border)',
              }}
            >
              <Icon size={18} color={color} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="feature-card"
            >
              <div className="icon-box" style={{ background: '#FEF2F2' }}>
                <Icon size={20} color="#EF4444" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Auto-deduction callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: 32,
            padding: '20px 28px',
            background: 'var(--surface)',
            border: '1px solid #DCFCE7',
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>⚡</span>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>
            Auto stock deduction on every sale — inventory updates in real time
          </span>
        </motion.div>
      </div>
    </section>
  );
}
