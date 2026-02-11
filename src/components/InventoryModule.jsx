import { motion } from 'framer-motion';
import {
  Package, AlertTriangle, TrendingDown, Truck,
  Tags, BarChart3, ArrowUpDown, ScanLine
} from 'lucide-react';

const features = [
  { icon: Package, title: 'Product Catalog', desc: 'SKU, cost price, selling price, GST, categories, units — complete product profiles.' },
  { icon: AlertTriangle, title: 'Low Stock Alerts', desc: 'Set reorder thresholds. Get warned before you run out. Never miss a sale.' },
  { icon: Truck, title: 'Supplier Management', desc: 'Track your suppliers, contact info, and purchase history all in one place.' },
  { icon: ArrowUpDown, title: 'Stock Adjustments', desc: 'Purchase, sale, return, expired, opening — every movement tracked with an audit trail.' },
  { icon: Tags, title: 'Categories', desc: 'Organize products into categories. Filter, browse, and find items instantly.' },
  { icon: BarChart3, title: 'Stock Reports', desc: 'Movement history, valuation, low stock reports — data-driven inventory management.' },
];

export default function InventoryModule() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div className="section-label" style={{ margin: '0 auto 16px' }}>
            <Package size={14} /> Inventory
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            Know what you have. <span className="gradient-text">Always.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Every medicine, every product — tracked from the moment it enters your clinic
            to the moment it reaches a patient's hands. Stock levels update automatically with every POS sale.
          </p>
        </motion.div>

        <div className="grid-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="feature-card"
            >
              <div className="icon-box" style={{ background: '#F5F3FF' }}>
                <Icon size={20} color="#7C3AED" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
