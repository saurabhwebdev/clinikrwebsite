import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'support@clinikr.com', href: 'mailto:support@clinikr.com' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
  { icon: MapPin, label: 'Based in', value: 'India', href: null },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 100 }}>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ margin: '0 auto 16px' }}>
              <Mail size={14} /> Contact Us
            </div>
            <h1 className="section-title" style={{ margin: '0 auto 16px' }}>
              Get in <span className="gradient-text">touch</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Have a question, suggestion, or need help? We'd love to hear from you.
            </p>
          </div>

          {/* Contact info cards */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48,
          }} className="grid-3">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{
                padding: 'clamp(16px, 3vw, 24px)',
                background: 'var(--surface)',
                borderRadius: 14,
                border: '1px solid var(--border)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'var(--primary-soft)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px',
                }}>
                  <Icon size={20} color="var(--primary)" />
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                  {label}
                </div>
                {href ? (
                  <a href={href} style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>
                    {value}
                  </a>
                ) : (
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>{value}</div>
                )}
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div style={{
            padding: 'clamp(24px, 4vw, 40px)',
            background: 'var(--surface)',
            borderRadius: 20,
            border: '1px solid var(--border)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: '#F0FDF4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <CheckCircle2 size={28} color="#22C55E" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: 24 }}>
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="grid-2">
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: 6 }}>
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Sharma"
                        style={{
                          width: '100%', padding: '10px 14px',
                          borderRadius: 10, border: '1px solid var(--border)',
                          fontSize: '0.9rem', color: 'var(--text)',
                          background: 'var(--bg)',
                          outline: 'none', transition: 'border-color 0.2s',
                          boxSizing: 'border-box',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: 6 }}>
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="doctor@clinic.com"
                        style={{
                          width: '100%', padding: '10px 14px',
                          borderRadius: 10, border: '1px solid var(--border)',
                          fontSize: '0.9rem', color: 'var(--text)',
                          background: 'var(--bg)',
                          outline: 'none', transition: 'border-color 0.2s',
                          boxSizing: 'border-box',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: 6 }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="How can we help?"
                      style={{
                        width: '100%', padding: '10px 14px',
                        borderRadius: 10, border: '1px solid var(--border)',
                        fontSize: '0.9rem', color: 'var(--text)',
                        background: 'var(--bg)',
                        outline: 'none', transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: 6 }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us more..."
                      style={{
                        width: '100%', padding: '10px 14px',
                        borderRadius: 10, border: '1px solid var(--border)',
                        fontSize: '0.9rem', color: 'var(--text)',
                        background: 'var(--bg)',
                        outline: 'none', transition: 'border-color 0.2s',
                        resize: 'vertical', fontFamily: 'inherit',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <button type="submit" style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '12px 28px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                    color: '#fff', borderRadius: 12, border: 'none',
                    fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
                    transition: 'all 0.2s', alignSelf: 'flex-start',
                    boxShadow: '0 4px 14px rgba(79,70,229,0.25)',
                  }}
                    onMouseEnter={e => e.target.style.transform = 'translateY(-1px)'}
                    onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
                  >
                    <Send size={16} /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
