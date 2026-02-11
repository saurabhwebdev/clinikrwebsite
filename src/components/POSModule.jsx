import { motion } from 'framer-motion';
import {
  ShoppingCart, ScanBarcode, Wallet, CreditCard,
  QrCode, Banknote, Pause, LayoutGrid, Zap
} from 'lucide-react';

const features = [
  { icon: ScanBarcode, text: 'Barcode scanner — scan with your phone camera' },
  { icon: LayoutGrid, text: 'Visual product grid with categories and stock badges' },
  { icon: Pause, text: 'Hold carts and resume anytime' },
  { icon: Wallet, text: 'Session management with float and reconciliation' },
];

const payments = [
  { icon: Banknote, label: 'Cash', color: '#22C55E' },
  { icon: CreditCard, label: 'Card', color: '#3B82F6' },
  { icon: QrCode, label: 'UPI', color: '#7C3AED' },
  { icon: Wallet, label: 'Razorpay', color: '#4F46E5' },
];

export default function POSModule() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="grid-2">
          {/* Left - mock POS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              background: 'var(--surface)',
              borderRadius: 20,
              border: '1px solid var(--border)',
              padding: 28,
              boxShadow: '0 4px 30px rgba(0,0,0,0.04)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Current Sale</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>Cart #12</div>
                </div>
                <span style={{
                  padding: '4px 10px', borderRadius: 6, fontSize: '0.7rem', fontWeight: 600,
                  background: '#ECFDF5', color: '#22C55E',
                }}>Active</span>
              </div>

              {/* Cart items */}
              {[
                { name: 'Paracetamol 500mg', qty: 10, price: '₹120' },
                { name: 'Cough Syrup 100ml', qty: 1, price: '₹85' },
                { name: 'Vitamin D3 Caps', qty: 30, price: '₹340' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '10px 0', fontSize: '0.82rem',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                }}>
                  <div>
                    <span style={{ color: 'var(--text)', fontWeight: 500 }}>{item.name}</span>
                    <span style={{ color: 'var(--text-muted)', marginLeft: 8 }}>x{item.qty}</span>
                  </div>
                  <span style={{ fontWeight: 600 }}>{item.price}</span>
                </div>
              ))}

              <div style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '14px 0 0', borderTop: '2px solid var(--text)', marginTop: 10,
              }}>
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>Total</span>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary)' }}>₹545.00</span>
              </div>

              {/* Payment methods */}
              <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                {payments.map(({ icon: Icon, label, color }) => (
                  <div key={label} style={{
                    flex: 1, padding: '10px 6px', borderRadius: 10,
                    background: `${color}08`, border: `1px solid ${color}15`,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  }}>
                    <Icon size={16} color={color} />
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, color }}>{label}</span>
                  </div>
                ))}
              </div>

              {/* Auto-deduction note */}
              <div style={{
                marginTop: 14, padding: '10px 14px', borderRadius: 10,
                background: '#ECFDF5', border: '1px solid #DCFCE7',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <Zap size={14} color="#22C55E" />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#16A34A' }}>
                  Stock auto-deducts on every sale
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="section-label">
              <ShoppingCart size={14} /> Point of Sale
            </div>
            <h2 className="section-title">
              A retail counter <span className="gradient-text">in your clinic</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              Sell medicines, products, and services right from your phone. Barcode scanning,
              multiple payment methods, session management — a full POS system.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {features.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: '#FEF2F2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={15} color="#EF4444" />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
