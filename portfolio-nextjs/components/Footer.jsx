'use client';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconArrowUp } from '@tabler/icons-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      {/* Big CTA */}
      <div
        style={{
          padding: '5rem 1.5rem',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: 'var(--accent-2)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '1rem' }}
        >
          Have a project?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.03em', fontFamily: 'var(--font-display)', marginBottom: '1.5rem', lineHeight: 1.1 }}
        >
          Let&apos;s <span className="gradient-text">Build Together</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href={`mailto:${personalInfo.email}`} className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            <IconMail size={20} /> Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1.5rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            background: 'var(--gradient)', borderRadius: 10, width: 32, height: 32,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: '0.8rem', color: 'white',
          }}>ES</div>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            © {year} Eshan Saxena. All rights reserved.
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {[
            { href: personalInfo.github, Icon: IconBrandGithub, label: 'GitHub' },
            { href: personalInfo.linkedin, Icon: IconBrandLinkedin, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, Icon: IconMail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', textDecoration: 'none',
              }}
              aria-label={label}
            >
              <Icon size={16} />
            </motion.a>
          ))}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'var(--gradient)', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
            }}
            aria-label="Back to top"
          >
            <IconArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
