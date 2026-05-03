import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message, plan } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const planRow = plan
    ? `<tr>
        <td style="padding:10px 0;color:#94A3B8;font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;width:110px;">Plan</td>
        <td style="padding:10px 0;">
          <span style="background:#EFF6FF;color:#1A56DB;padding:3px 10px;border-radius:6px;font-size:0.82rem;font-weight:700;">${plan}</span>
        </td>
       </tr>`
    : '';

  await transporter.sendMail({
    from: `"ClinIKR Website" <${process.env.GMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `[ClinIKR] ${subject || 'New enquiry from website'}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#F8FAFC;padding:32px;">
        <div style="background:linear-gradient(135deg,#1A56DB,#1E40AF);border-radius:14px 14px 0 0;padding:28px;text-align:center;">
          <h1 style="color:#fff;margin:0;font-size:1.3rem;font-weight:800;">New Message — ClinIKR Website</h1>
        </div>
        <div style="background:#fff;border-radius:0 0 14px 14px;padding:32px;border:1px solid #E2E8F0;border-top:none;">
          <table style="width:100%;border-collapse:collapse;border-bottom:1px solid #F1F5F9;margin-bottom:24px;">
            <tr>
              <td style="padding:10px 0;color:#94A3B8;font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;width:110px;">Name</td>
              <td style="padding:10px 0;color:#0F172A;font-weight:700;font-size:0.95rem;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#94A3B8;font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#1A56DB;font-weight:600;">${email}</a></td>
            </tr>
            ${planRow}
            <tr>
              <td style="padding:10px 0;color:#94A3B8;font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Subject</td>
              <td style="padding:10px 0;color:#0F172A;">${subject || '—'}</td>
            </tr>
          </table>
          <div style="color:#94A3B8;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px;">Message</div>
          <p style="color:#0F172A;line-height:1.75;margin:0;white-space:pre-wrap;font-size:0.95rem;">${message}</p>
        </div>
        <p style="text-align:center;margin-top:20px;color:#94A3B8;font-size:0.75rem;">
          Sent via ClinIKR website contact form
        </p>
      </div>
    `,
  });

  return res.status(200).json({ success: true });
}
