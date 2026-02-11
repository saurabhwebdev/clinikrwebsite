import { motion } from 'framer-motion';
import {
  LayoutDashboard, Users, CalendarCheck, IndianRupee,
  TrendingUp, Package, Clock, AlertTriangle,
  Activity, ArrowUpRight
} from 'lucide-react';

const kpis = [
  { icon: Users, label: 'Total Patients', value: '1,247', trend: '+12%', up: true, color: '#4F46E5' },
  { icon: CalendarCheck, label: "Today's Appts", value: '18', trend: '3 upcoming', up: true, color: '#22C55E' },
  { icon: IndianRupee, label: 'Monthly Revenue', value: '₹2,84,500', trend: '+8.3%', up: true, color: '#F59E0B' },
  { icon: Package, label: 'Low Stock', value: '3', trend: 'Action needed', up: false, color: '#EF4444' },
];

const weekData = [35, 28, 42, 38, 45, 32, 41];
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const maxVal = Math.max(...weekData);

export default function Dashboard() {
  return (
    <section className="section section-alt">
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
              <LayoutDashboard size={14} /> Dashboard
            </div>
            <h2 className="section-title">
              Your clinic's pulse, <span className="gradient-text">at a glance</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              Open the app and immediately know: how many patients today, how much revenue
              this month, what's running low, and who's coming in next.
            </p>

            {/* Quick stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {kpis.map(({ icon: Icon, label, value, trend, up, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  style={{
                    padding: 16,
                    borderRadius: 14,
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 7,
                      background: `${color}12`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={14} color={color} />
                    </div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>{label}</span>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)', marginBottom: 2 }}>{value}</div>
                  <div style={{
                    fontSize: '0.68rem', fontWeight: 600,
                    color: up ? '#22C55E' : '#EF4444',
                    display: 'flex', alignItems: 'center', gap: 3,
                  }}>
                    {up ? <TrendingUp size={10} /> : <AlertTriangle size={10} />}
                    {trend}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - mock dashboard UI */}
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
              padding: 0,
              boxShadow: '0 8px 40px rgba(0,0,0,0.04)',
              overflow: 'hidden',
            }}>
              {/* App window frame */}
              <div style={{
                padding: '12px 20px',
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E' }} />
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '4px 14px', borderRadius: 8,
                  background: 'var(--primary-soft)',
                }}>
                  <Clock size={12} color="var(--primary)" />
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--primary)' }}>Mon, 09 Feb 2026</span>
                </div>
              </div>

              <div style={{ padding: 24 }}>
                {/* Greeting */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Good morning</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>Dr. Saurabh</div>
                </div>

                {/* Mini chart - weekly patients */}
                <div style={{
                  padding: 18,
                  borderRadius: 14,
                  border: '1px solid var(--border)',
                  marginBottom: 18,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Activity size={14} color="var(--primary)" />
                      <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text)' }}>Patients this week</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <ArrowUpRight size={12} color="#22C55E" />
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#22C55E' }}>+14%</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 60 }}>
                    {weekData.map((val, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.06, duration: 0.5 }}
                        style={{
                          flex: 1,
                          height: `${(val / maxVal) * 100}%`,
                          borderRadius: 4,
                          background: i === 4 ? 'var(--primary)' : 'var(--primary-soft)',
                          transformOrigin: 'bottom',
                          position: 'relative',
                        }}
                      />
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                    {weekDays.map((d, i) => (
                      <div key={d} style={{
                        flex: 1, textAlign: 'center',
                        fontSize: '0.6rem', color: i === 4 ? 'var(--primary)' : 'var(--text-muted)',
                        fontWeight: i === 4 ? 700 : 500,
                      }}>{d}</div>
                    ))}
                  </div>
                </div>

                {/* Upcoming appointments */}
                <div style={{
                  fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)',
                  textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10,
                }}>
                  Upcoming Today
                </div>
                {[
                  { time: '10:00 AM', name: 'Priya Patel', type: 'Follow-up', status: 'Confirmed', color: '#22C55E' },
                  { time: '10:30 AM', name: 'Amit Kumar', type: 'Consultation', status: 'Scheduled', color: '#3B82F6' },
                  { time: '11:15 AM', name: 'Neha Singh', type: 'Check-up', status: 'Confirmed', color: '#22C55E' },
                ].map((apt, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{
                        fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)',
                        width: 68,
                      }}>
                        {apt.time}
                      </span>
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)' }}>{apt.name}</div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{apt.type}</div>
                      </div>
                    </div>
                    <span style={{
                      padding: '3px 8px', borderRadius: 6, fontSize: '0.65rem', fontWeight: 600,
                      background: `${apt.color}10`, color: apt.color,
                    }}>
                      {apt.status}
                    </span>
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
