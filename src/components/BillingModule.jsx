import { motion } from 'framer-motion';
import {
  Receipt, CreditCard, IndianRupee, Send, Percent, ArrowRight
} from 'lucide-react';

const invoiceStates = [
  { label: 'Draft',   color: '#94A3B8', bg: '#F1F5F9' },
  { label: 'Sent',    color: '#1A56DB', bg: '#EFF6FF' },
  { label: 'Partial', color: '#D97706', bg: '#FFFBEB' },
  { label: 'Paid',    color: '#059669', bg: '#ECFDF5' },
];

const features = [
  { icon: IndianRupee, title: 'GST Compliant',     desc: 'CGST/SGST for intra-state, IGST for inter-state. GSTIN, HSN codes, tax reports.' },
  { icon: CreditCard,  title: 'Flexible Payments',  desc: 'Cash, card, UPI, bank transfer. Split payments. Partial payments with balance tracking.' },
  { icon: Send,        title: 'Share Instantly',    desc: 'Generate PDF invoices. Send via WhatsApp, email, or print. One tap sharing.' },
  { icon: Percent,     title: 'Discounts & More',   desc: 'Percentage or fixed discounts. Custom services. Configurable invoice numbering.' },
];

export default function BillingModule() {
  return (
    <section style={{ background: '#F8FAFC', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
      <div className="container">
        <div className="mod-grid">
          {/* Copy — left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-label"><Receipt size={14} /> Invoicing & Billing</div>
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
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: '#FFFBEB',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={17} color="#D97706" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.93rem', fontWeight: 700, marginBottom: 3, color: '#0F172A' }}>{title}</h4>
                    <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mock invoice — right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="mod-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 500 }}>INVOICE</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>INV-000042</div>
                </div>
                <div style={{
                  padding: '5px 12px', borderRadius: 8, alignSelf: 'flex-start',
                  background: '#ECFDF5', color: '#059669', fontSize: '0.78rem', fontWeight: 600,
                }}>PAID</div>
              </div>

              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24,
                padding: '16px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0',
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginBottom: 2 }}>Patient</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0F172A' }}>Rahul Sharma</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginBottom: 2 }}>Date</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0F172A' }}>09 Feb 2026</div>
                </div>
              </div>

              {[
                { name: 'General Consultation', qty: 1, amt: '500.00' },
                { name: 'Follow-up Visit',      qty: 1, amt: '250.00' },
                { name: 'Paracetamol 500mg',    qty: 10, amt: '120.00' },
              ].map((item, i) => (
                <div key={item.name} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '9px 0', fontSize: '0.82rem',
                  borderBottom: i < 2 ? '1px solid #F1F5F9' : 'none',
                }}>
                  <div>
                    <span style={{ color: '#0F172A' }}>{item.name}</span>
                    <span style={{ color: '#94A3B8', marginLeft: 8 }}>×{item.qty}</span>
                  </div>
                  <span style={{ fontWeight: 600, color: '#0F172A' }}>₹{item.amt}</span>
                </div>
              ))}

              <div style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '14px 0 0', borderTop: '2px solid #0F172A', marginTop: 8,
              }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0F172A' }}>Total</span>
                <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#1A56DB' }}>₹870.00</span>
              </div>

              <div style={{ display: 'flex', gap: 8, marginTop: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                {invoiceStates.map(({ label, color, bg }, i) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{
                      padding: '4px 10px', borderRadius: 6,
                      background: bg, color, fontSize: '0.7rem', fontWeight: 600,
                    }}>{label}</span>
                    {i < invoiceStates.length - 1 && <ArrowRight size={12} color="#CBD5E1" />}
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
