import { motion } from 'framer-motion';
import {
  Package, AlertTriangle, Truck,
  Tags, BarChart3, ArrowUpDown
} from 'lucide-react';

const features = [
  { icon: Package,       text: 'Complete product catalog with SKU, pricing, and GST' },
  { icon: AlertTriangle, text: 'Low stock alerts with configurable reorder thresholds' },
  { icon: Truck,         text: 'Supplier management with contact info and purchase history' },
  { icon: ArrowUpDown,   text: 'Every stock movement tracked with a full audit trail' },
  { icon: Tags,          text: 'Categories and units for easy organisation' },
  { icon: BarChart3,     text: 'Stock movement, valuation, and low stock reports' },
];

export default function InventoryModule() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
      <div className="container">
        <div className="mod-grid">
          {/* Copy — left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-label"><Package size={14} /> Inventory</div>
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
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06 }}
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
                  <span style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.4 }}>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mock inventory card — right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="mod-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A' }}>Stock Overview</div>
                <span style={{
                  padding: '4px 10px', borderRadius: 6, fontSize: '0.7rem', fontWeight: 600,
                  background: '#EFF6FF', color: '#1A56DB',
                }}>142 Products</span>
              </div>

              <div className="inv-summary" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
                {[
                  { label: 'In Stock',     value: '128', color: '#059669' },
                  { label: 'Low Stock',    value: '11',  color: '#D97706' },
                  { label: 'Out of Stock', value: '3',   color: '#DC2626' },
                ].map(s => (
                  <div key={s.label} style={{
                    padding: '12px 10px', borderRadius: 10,
                    background: `${s.color}08`, border: `1px solid ${s.color}18`, textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: '0.62rem', color: '#94A3B8', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>
                Recent Products
              </div>
              {[
                { name: 'Paracetamol 500mg',  sku: 'MED-001', stock: 245, status: 'In Stock',  color: '#059669' },
                { name: 'Amoxicillin 250mg',  sku: 'MED-008', stock: 12,  status: 'Low Stock', color: '#D97706' },
                { name: 'Vitamin B Complex',  sku: 'SUP-003', stock: 0,   status: 'Out',        color: '#DC2626' },
                { name: 'Cough Syrup 100ml',  sku: 'MED-015', stock: 67,  status: 'In Stock',  color: '#059669' },
              ].map((p, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '9px 0', borderBottom: i < 3 ? '1px solid #F1F5F9' : 'none',
                }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0F172A' }}>{p.name}</div>
                    <div style={{ fontSize: '0.68rem', color: '#94A3B8' }}>{p.sku} · Qty: {p.stock}</div>
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
      <style>{`
        @media (max-width: 640px) {
          .inv-summary { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
