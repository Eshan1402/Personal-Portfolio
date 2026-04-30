'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconArrowRight } from '@tabler/icons-react';
import { personalInfo } from '@/lib/data';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = words[index];
    if (!deleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      const speed = deleting ? 40 : 80;
      timeoutRef.current = setTimeout(() => {
        setDisplayed((d) => deleting ? d.slice(0, -1) : current.slice(0, d.length + 1));
      }, speed);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, index, words]);

  return (
    <span>
      <span style={{ color: 'var(--accent-2)' }}>{displayed}</span>
      <span className="typewriter-cursor" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="mesh-bg"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '5rem' }}
    >
      {/* Decorative orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '-10%', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%', width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1.5rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Left: Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '1.5rem' }}>
              <span style={{
                display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
                background: '#22c55e', boxShadow: '0 0 8px #22c55e', animation: 'pulse-glow 2s infinite'
              }} />
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>
                Open to opportunities
              </span>
            </motion.div>

            <motion.p variants={item} style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 500 }}>
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-display)',
              }}
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              variants={item}
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.4 }}
            >
              <Typewriter words={personalInfo.taglines} />
            </motion.h2>

            <motion.p
              variants={item}
              style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 480, marginBottom: '2rem' }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* Social icons */}
            <motion.div variants={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
              {[
                { href: personalInfo.github, Icon: IconBrandGithub, label: 'GitHub' },
                { href: personalInfo.linkedin, Icon: IconBrandLinkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text)', textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.a
                href={personalInfo.cvPath}
                download
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <IconDownload size={18} />
                Download CV
              </motion.a>
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let&apos;s Talk
                <IconArrowRight size={18} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            {/* Spin ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', inset: -12, borderRadius: '50%',
                background: 'conic-gradient(from 0deg, var(--accent), var(--accent-2), transparent, var(--accent))',
                filter: 'blur(2px)',
              }}
            />
            <div style={{ position: 'relative', width: 320, height: 320, borderRadius: '50%', background: 'var(--bg)', zIndex: 1, padding: 6 }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
                <Image
                  src="/images/main.png"
                  alt="Eshan Saxena"
                  fill
                  sizes="320px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                style={{
                  position: 'absolute', bottom: 20, right: -16,
                  background: 'var(--gradient)', color: 'white',
                  borderRadius: 16, padding: '0.5rem 1rem',
                  fontWeight: 700, fontSize: '0.875rem',
                  boxShadow: '0 8px 30px var(--accent-glow)',
                  whiteSpace: 'nowrap',
                }}
              >
                9+ Projects ✦
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: 2, textTransform: 'uppercase' }}>scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 2, height: 32, background: 'var(--gradient)', borderRadius: 1 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
