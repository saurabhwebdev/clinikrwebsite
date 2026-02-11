import { motion } from 'framer-motion';
import {
  Package, AlertTriangle, TrendingDown, Truck,
  Tags, BarChart3, ArrowUpDown, ScanLine
} from 'lucide-react';

const features = [
  { icon: Package, text: 'Complete product catalog with SKU, pricing, and GST' },
  { icon: AlertTriangle, text: 'Low stock alerts with configurable reorder thresholds' },
  { icon: Truck, text: 'Supplier management with contact info and purchase history' },
  { icon: ArrowUpDown, text: 'Every stock movement tracked with a full audit trail' },
  { icon: Tags, text: 'Categories and units for easy organization' },
  { icon: BarChart3, text: 'Stock movement, valuation, and low stock reports' },
];

export default function InventoryModule() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="grid-2">
          {/* Left - copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              <Package size={14} /> Inventory
            </div>
            <h2 className="section-title">
              Know what you have. <span className="gradient-text">Always.</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              Every medicine, every product — tracked from the moment it enters your clinic
              to the moment it reaches a patient's hands.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {features.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: '#F5F3FF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={15} color="#7C3AED" />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - mock inventory */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{
              background: 'var(--surface)',
              borderRadius: 20,
              border: '1px solid var(--border)',
              padding: 28,
              boxShadow: '0 4px 30px rgba(0,0,0,0.04)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>Stock Overview</div>
                <span style={{
                  padding: '4px 10px', borderRadius: 6, fontSize: '0.7rem', fontWeight: 600,
                  background: 'var(--primary-soft)', color: 'var(--primary)',
                }}>142 Products</span>
              </div>

              {/* Stock summary */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20,
              }}>
                {[
                  { label: 'In Stock', value: '128', color: '#22C55E' },
                  { label: 'Low Stock', value: '11', color: '#F59E0B' },
                  { label: 'Out of Stock', value: '3', color: '#EF4444' },
                ].map(s => (
                  <div key={s.label} style={{
                    padding: '12px 10px', borderRadius: 10, background: `${s.color}08`,
                    border: `1px solid ${s.color}15`, textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Product list */}
              <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>
                Recent Products
              </div>
              {[
                { name: 'Paracetamol 500mg', sku: 'MED-001', stock: 245, status: 'In Stock', color: '#22C55E' },
                { name: 'Amoxicillin 250mg', sku: 'MED-008', stock: 12, status: 'Low Stock', color: '#F59E0B' },
                { name: 'Vitamin B Complex', sku: 'SUP-003', stock: 0, status: 'Out', color: '#EF4444' },
                { name: 'Cough Syrup 100ml', sku: 'MED-015', stock: 67, status: 'In Stock', color: '#22C55E' },
              ].map((p, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
                }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)' }}>{p.name}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{p.sku} · Qty: {p.stock}</div>
                  </div>
                  <span style={{
                    padding: '3px 8px', borderRadius: 6, fontSize: '0.65rem', fontWeight: 600,
                    background: `${p.color}10`, color: p.color,
                  }}>{p.status}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
