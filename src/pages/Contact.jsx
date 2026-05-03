import { useState, useEffect } from 'react';
import { Mail, MapPin, Send, Clock, CheckCircle2, Loader2, AlertCircle, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';

const contactInfo = [
  { icon: Mail,     label: 'Email',         value: 'helloclinikr@gmail.com',    href: 'mailto:helloclinikr@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn',       value: 'ClinIKR India',             href: 'https://www.linkedin.com/company/clinikrindia/' },
  { icon: Clock,    label: 'Response Time',  value: 'Within 24 hours',           href: null },
  { icon: MapPin,   label: 'Based in',       value: 'India',                     href: null },
];

const inputStyle = {
  width: '100%', padding: '11px 14px',
  borderRadius: 10, border: '1px solid #E2E8F0',
  fontSize: '0.9rem', color: '#0F172A',
  background: '#F8FAFC', outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box', fontFamily: 'inherit',
};

const labelStyle = {
  fontSize: '0.8rem', fontWeight: 600,
  color: '#0F172A', display: 'block', marginBottom: 6,
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', plan: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get('plan');
    if (plan) {
      setForm(f => ({ ...f, plan, subject: `Enquiry about ${plan} plan` }));
    }
  }, []);

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const focus = (e) => {
    e.target.style.borderColor = '#1A56DB';
    e.target.style.boxShadow = '0 0 0 3px rgba(26,86,219,0.08)';
  };
  const blur = (e) => {
    e.target.style.borderColor = '#E2E8F0';
    e.target.style.boxShadow = 'none';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{ paddingTop: 100 }}>
      <SEO
        title="Contact Us"
        description="Get in touch with the ClinIKR team. Reach out for support, pricing enquiries, or partnership opportunities."
        path="/contact"
      />
      <section style={{ background: '#F8FAFC', padding: 'clamp(48px, 7vw, 80px) 24px' }}>
        <div className="container" style={{ maxWidth: 760 }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ margin: '0 auto 14px' }}>
              <Mail size={13} /> Contact Us
            </div>
            <h1 className="section-title" style={{ margin: '0 auto 14px' }}>
              Get in <span className="gradient-text">touch</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: 400 }}>
              Have a question or want to get started? We'd love to hear from you.
            </p>
          </div>

          {/* Info cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 40 }} className="grid-3">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{
                padding: '20px 16px', background: '#fff',
                borderRadius: 14, border: '1px solid #E2E8F0', textAlign: 'center',
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 11,
                  background: '#EFF6FF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 10px',
                }}>
                  <Icon size={18} color="#1A56DB" />
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                  {label}
                </div>
                {href
                  ? <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1A56DB', textDecoration: 'none' }}>{value}</a>
                  : <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0F172A' }}>{value}</div>
                }
              </div>
            ))}
          </div>

          {/* Form card */}
          <div style={{ background: '#fff', borderRadius: 20, border: '1px solid #E2E8F0', padding: 'clamp(24px, 4vw, 40px)' }}>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: '#ECFDF5',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 18px',
                }}>
                  <CheckCircle2 size={30} color="#059669" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 24 }}>
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '', plan: '' }); }}
                  style={{
                    padding: '10px 24px', borderRadius: 10, border: '1px solid #E2E8F0',
                    background: '#fff', color: '#1A56DB', fontWeight: 600,
                    fontSize: '0.88rem', cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: 24 }}>
                  Send us a message
                  {form.plan && (
                    <span style={{
                      marginLeft: 10, fontSize: '0.78rem', fontWeight: 600,
                      background: '#EFF6FF', color: '#1A56DB',
                      padding: '3px 10px', borderRadius: 100, verticalAlign: 'middle',
                    }}>
                      {form.plan} plan
                    </span>
                  )}
                </h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="grid-2">
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input
                        type="text" required placeholder="Dr. Sharma"
                        value={form.name} onChange={set('name')}
                        style={inputStyle} onFocus={focus} onBlur={blur}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        type="email" required placeholder="doctor@clinic.com"
                        value={form.email} onChange={set('email')}
                        style={inputStyle} onFocus={focus} onBlur={blur}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Subject</label>
                    <input
                      type="text" placeholder="How can we help?"
                      value={form.subject} onChange={set('subject')}
                      style={inputStyle} onFocus={focus} onBlur={blur}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      required rows={5} placeholder="Tell us more..."
                      value={form.message} onChange={set('message')}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={focus} onBlur={blur}
                    />
                  </div>

                  {status === 'error' && (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '12px 16px', borderRadius: 10,
                      background: '#FEF2F2', border: '1px solid #FECACA',
                      fontSize: '0.85rem', color: '#DC2626',
                    }}>
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      padding: '13px 28px', background: status === 'loading' ? '#93C5FD' : '#1A56DB',
                      color: '#fff', borderRadius: 12, border: 'none',
                      fontSize: '0.92rem', fontWeight: 700, cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      transition: 'all 0.22s', alignSelf: 'flex-start',
                      boxShadow: '0 4px 14px rgba(26,86,219,0.22)',
                      fontFamily: 'inherit',
                    }}
                    onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = '#1E40AF'; }}
                    onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.background = '#1A56DB'; }}
                  >
                    {status === 'loading'
                      ? <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
                      : <><Send size={15} /> Send Message</>
                    }
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
