'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { IconMapPin, IconSchool, IconHeart, IconMail } from '@tabler/icons-react';
import { personalInfo, skills, techStack, education } from '@/lib/data';

function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div ref={ref} style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>{name}</span>
        <span style={{ fontSize: '0.85rem', color: 'var(--accent-2)', fontWeight: 600 }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.1 + index * 0.08, ease: [0.4, 0, 0.2, 1] }}
          style={{ width: `${level}%`, transformOrigin: 'left' }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const summaryItems = [
    { Icon: IconMapPin, label: 'Location', value: personalInfo.location },
    { Icon: IconSchool, label: 'Education', value: personalInfo.education },
    { Icon: IconHeart, label: 'Interests', value: personalInfo.interests },
    { Icon: IconMail, label: 'Email', value: personalInfo.email },
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
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
            Who I Am
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', fontFamily: 'var(--font-display)' }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Left: Photo + summary */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              <div style={{ borderRadius: 24, overflow: 'hidden', position: 'relative', aspectRatio: '4/5' }} className="glow">
                <Image src="/images/about.jpeg" alt="About Eshan" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', bottom: -16, right: -16,
                  background: 'var(--gradient)', color: 'white',
                  borderRadius: 16, padding: '1rem 1.25rem',
                  boxShadow: '0 12px 40px rgba(124,58,237,0.4)',
                  fontWeight: 700, fontSize: '0.875rem', textAlign: 'center',
                  minWidth: 110,
                }}
              >
                <div style={{ fontSize: '2rem', lineHeight: 1 }}>40+</div>
                <div style={{ opacity: 0.9, fontWeight: 500, fontSize: '0.8rem' }}>Projects Done</div>
              </motion.div>
            </div>

            {/* Summary items */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {summaryItems.map(({ Icon, label, value }) => (
                <div key={label} className="glass" style={{ borderRadius: 12, padding: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <Icon size={14} style={{ color: 'var(--accent-2)' }} />
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>{label}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', margin: 0, lineHeight: 1.3 }}>{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + Skills + Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
              I <span className="gradient-text">build software</span> that solves user problems
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
              {personalInfo.aboutBio}
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
              {personalInfo.whyHireMe}
            </p>

            {/* Tech stack pills */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text)' }}>Tech Stack</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {techStack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>Skills</h4>
              {skills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
              ))}
            </div>

            {/* Education */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text)' }}>Education</h4>
              {education.map((e) => (
                <div key={e.id} className="glass" style={{ borderRadius: 12, padding: '0.875rem 1rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>{e.degree}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{e.institution}</div>
                  </div>
                  <span className="tag" style={{ whiteSpace: 'nowrap' }}>{e.period}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
