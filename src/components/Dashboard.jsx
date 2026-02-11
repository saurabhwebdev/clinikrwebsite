import { motion } from 'framer-motion';
import {
  LayoutDashboard, Users, CalendarCheck, IndianRupee,
  TrendingUp, Package, Clock, AlertTriangle
} from 'lucide-react';

const kpis = [
  { icon: Users, label: 'Total Patients', value: '1,247', trend: '+12%', color: '#4F46E5' },
  { icon: CalendarCheck, label: 'Today\'s Appointments', value: '18', trend: '3 upcoming', color: '#22C55E' },
  { icon: IndianRupee, label: 'Monthly Revenue', value: '₹2,84,500', trend: '+8.3%', color: '#F59E0B' },
  { icon: Package, label: 'Low Stock Items', value: '3', trend: 'Action needed', color: '#EF4444' },
];

export default function Dashboard() {
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
            <LayoutDashboard size={14} /> Dashboard
          </div>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            Your clinic's pulse, <span className="gradient-text">at a glance</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Open the app and immediately know: how many patients today, how much revenue this month,
            what's running low, and who's coming in next.
          </p>
        </motion.div>

        {/* Mock dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            background: 'var(--surface)',
            borderRadius: 24,
            border: '1px solid var(--border)',
            padding: 32,
            maxWidth: 900,
            margin: '0 auto',
            boxShadow: '0 8px 40px rgba(0,0,0,0.04)',
          }}
        >
          {/* Header */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 28, flexWrap: 'wrap', gap: 12,
          }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Good morning</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Dr. Saurabh</div>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 10,
              background: 'var(--primary-soft)',
            }}>
              <Clock size={14} color="var(--primary)" />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                Mon, 09 Feb 2026
              </span>
            </div>
          </div>

          {/* KPI cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }} className="grid-4">
            {kpis.map(({ icon: Icon, label, value, trend, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{
                  padding: 20,
                  borderRadius: 14,
                  border: '1px solid var(--border)',
                  background: `${color}05`,
                }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12,
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: `${color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={16} color={color} />
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {label}
                  </span>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>
                  {value}
                </div>
                <div style={{
                  fontSize: '0.7rem', fontWeight: 600,
                  color: color === '#EF4444' ? '#EF4444' : '#22C55E',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  {color === '#EF4444' ? <AlertTriangle size={10} /> : <TrendingUp size={10} />}
                  {trend}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upcoming appointments preview */}
          <div style={{ marginTop: 24 }}>
            <div style={{
              fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)',
              marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              Upcoming Today
            </div>
            {[
              { time: '10:00 AM', name: 'Priya Patel', type: 'Follow-up', status: 'Confirmed' },
              { time: '10:30 AM', name: 'Amit Kumar', type: 'Consultation', status: 'Scheduled' },
              { time: '11:15 AM', name: 'Neha Singh', type: 'Check-up', status: 'Confirmed' },
            ].map((apt, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 0',
                borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{
                    fontSize: '0.78rem', fontWeight: 600, color: 'var(--primary)',
                    width: 70,
                  }}>
                    {apt.time}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{apt.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{apt.type}</div>
                  </div>
                </div>
                <span style={{
                  padding: '3px 10px', borderRadius: 6,
                  background: apt.status === 'Confirmed' ? '#F0FDF4' : '#EFF6FF',
                  color: apt.status === 'Confirmed' ? '#22C55E' : '#3B82F6',
                  fontSize: '0.7rem', fontWeight: 600,
                }}>
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
