'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconSend, IconCheck } from '@tabler/icons-react';
import toast, { Toaster } from 'react-hot-toast';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      // Using Formspree — replace YOUR_FORM_ID with your actual Formspree endpoint
      const res = await fetch('https://formspree.io/f/xjkvenqr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        toast.success('Message sent! I\'ll get back to you soon 🚀');
      } else {
        toast.error('Something went wrong. Try emailing me directly!');
      }
    } catch {
      toast.error('Network error. Try emailing me directly!');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section">
      <Toaster position="bottom-right" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: 'var(--accent-2)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Get In Touch
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', fontFamily: 'var(--font-display)' }}>
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: 500, margin: '0.75rem auto 0', lineHeight: 1.7 }}>
            Have a project in mind or just want to chat? Feel free to reach out — I&apos;m always open to discussing new opportunities.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                Let&apos;s build something great together
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                I&apos;m currently open to internship and freelance opportunities. Whether you have a project that needs bringing to life or just want to connect, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact methods */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { Icon: IconMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { Icon: IconBrandGithub, label: 'GitHub', value: '@Eshan1402', href: personalInfo.github },
                { Icon: IconBrandLinkedin, label: 'LinkedIn', value: 'Eshan Saxena', href: personalInfo.linkedin },
              ].map(({ Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="glass"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    borderRadius: 14, padding: '1rem 1.25rem',
                    textDecoration: 'none', color: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(124,58,237,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} style={{ color: 'var(--accent-2)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</div>
                    <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass"
              style={{ borderRadius: 24, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text)' }}>
                Send me a message ✉️
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>Name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    id="contact-name"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>Email</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    id="contact-email"
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>Message</label>
                <textarea
                  className="form-input"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  id="contact-message"
                  style={{ resize: 'vertical', minHeight: 120 }}
                />
              </div>
              <motion.button
                type="submit"
                disabled={sending || sent}
                className="btn-primary"
                whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                style={{ justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
                id="contact-submit"
              >
                {sent ? (
                  <><IconCheck size={18} /> Message Sent!</>
                ) : sending ? (
                  'Sending...'
                ) : (
                  <><IconSend size={18} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
