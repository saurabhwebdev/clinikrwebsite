import { motion } from 'framer-motion';
import {
  Receipt, CreditCard, IndianRupee, FileCheck,
  Send, Percent, Building2, ArrowRight
} from 'lucide-react';

const invoiceStates = [
  { label: 'Draft', color: '#94A3B8', bg: '#F1F5F9' },
  { label: 'Sent', color: '#3B82F6', bg: '#EFF6FF' },
  { label: 'Partial', color: '#F59E0B', bg: '#FFFBEB' },
  { label: 'Paid', color: '#22C55E', bg: '#F0FDF4' },
];

const features = [
  { icon: IndianRupee, title: 'GST Compliant', desc: 'CGST/SGST for intra-state, IGST for inter-state. GSTIN, HSN codes, tax reports.' },
  { icon: CreditCard, title: 'Flexible Payments', desc: 'Cash, card, UPI, bank transfer. Split payments. Partial payments with balance tracking.' },
  { icon: Send, title: 'Share Instantly', desc: 'Generate PDF invoices. Send via WhatsApp, email, or print. One tap sharing.' },
  { icon: Percent, title: 'Discounts & More', desc: 'Percentage or fixed discounts. Custom services. Configurable invoice numbering.' },
];

export default function BillingModule() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="grid-2">
          {/* Left - features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              <Receipt size={14} /> Invoicing & Billing
            </div>
            <h2 className="section-title">
              Get paid. <span className="gradient-text">On time.</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              Create professional invoices in seconds. Track payments, manage outstanding dues,
              and stay GST compliant — all without the headache.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  style={{ display: 'flex', gap: 16, alignItems: 'start' }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: '#FFF7ED',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="#F59E0B" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 2 }}>{title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - invoice lifecycle visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mock invoice card */}
            <div style={{
              background: 'var(--surface)',
              borderRadius: 20,
              border: '1px solid var(--border)',
              padding: 32,
              boxShadow: '0 4px 30px rgba(0,0,0,0.04)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>INVOICE</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)' }}>INV-000042</div>
                </div>
                <div style={{
                  padding: '6px 14px', borderRadius: 8,
                  background: '#F0FDF4', color: '#22C55E',
                  fontSize: '0.8rem', fontWeight: 600, alignSelf: 'start',
                }}>
                  PAID
                </div>
              </div>

              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: 16, marginBottom: 24,
                padding: '16px 0',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
              }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 2 }}>Patient</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Rahul Sharma</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 2 }}>Date</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>09 Feb 2026</div>
                </div>
              </div>

              {/* Line items */}
              {[
                { name: 'General Consultation', qty: 1, amt: '500.00' },
                { name: 'Blood Test (CBC)', qty: 1, amt: '350.00' },
                { name: 'Paracetamol 500mg', qty: 10, amt: '120.00' },
              ].map(item => (
                <div key={item.name} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '10px 0', fontSize: '0.82rem',
                }}>
                  <div>
                    <span style={{ color: 'var(--text)' }}>{item.name}</span>
                    <span style={{ color: 'var(--text-muted)', marginLeft: 8 }}>x{item.qty}</span>
                  </div>
                  <span style={{ fontWeight: 600 }}>₹{item.amt}</span>
                </div>
              ))}

              <div style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '16px 0 0',
                borderTop: '2px solid var(--text)',
                marginTop: 8,
              }}>
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>Total</span>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary)' }}>₹970.00</span>
              </div>

              {/* Status flow */}
              <div style={{
                display: 'flex', gap: 8, marginTop: 20, justifyContent: 'center', flexWrap: 'wrap',
              }}>
                {invoiceStates.map(({ label, color, bg }, i) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{
                      padding: '4px 10px', borderRadius: 6,
                      background: bg, color, fontSize: '0.7rem', fontWeight: 600,
                    }}>
                      {label}
                    </span>
                    {i < invoiceStates.length - 1 && (
                      <ArrowRight size={12} color="var(--text-muted)" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
