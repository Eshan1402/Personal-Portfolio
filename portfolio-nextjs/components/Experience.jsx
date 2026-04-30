'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  IconBriefcase, IconTrophy, IconUsers, IconStar,
} from '@tabler/icons-react';
import { experience } from '@/lib/data';

const typeIcon = {
  work: IconBriefcase,
  leadership: IconUsers,
  achievement: IconTrophy,
};
const typeColor = {
  work: '#7c3aed',
  leadership: '#0ea5e9',
  achievement: '#f59e0b',
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section">
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
            My Journey
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', fontFamily: 'var(--font-display)' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          {/* Vertical line (desktop) */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: 2, background: 'linear-gradient(to bottom, transparent, var(--accent) 20%, var(--accent-2) 80%, transparent)',
            transform: 'translateX(-50%)',
          }} className="timeline-center-line" />

          {experience.map((item, i) => {
            const Icon = typeIcon[item.type] || IconStar;
            const color = typeColor[item.type] || 'var(--accent)';
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 40px 1fr',
                  gap: 0,
                  alignItems: 'center',
                  marginBottom: '2.5rem',
                  position: 'relative',
                }}
              >
                {/* Left content or spacer */}
                <div style={{ paddingRight: '2rem', textAlign: 'right' }}>
                  {isLeft ? <TimelineCard item={item} Icon={Icon} color={color} /> : null}
                </div>

                {/* Center dot */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: `0 0 20px ${color}80`,
                      border: '3px solid var(--bg)',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color="white" />
                  </motion.div>
                </div>

                {/* Right content or spacer */}
                <div style={{ paddingLeft: '2rem' }}>
                  {!isLeft ? <TimelineCard item={item} Icon={Icon} color={color} /> : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-center-line { left: 20px !important; }
        }
      `}</style>
    </section>
  );
}

function TimelineCard({ item, color }) {
  return (
    <div
      className="glass card-hover"
      style={{ borderRadius: 16, padding: '1.25rem', borderLeft: `3px solid ${color}` }}
    >
      <div style={{ marginBottom: '0.375rem' }}>
        <span className="tag" style={{ fontSize: '0.7rem' }}>{item.period}</span>
      </div>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>
        {item.role}
      </h3>
      <p style={{ fontSize: '0.825rem', fontWeight: 600, color, marginBottom: '0.5rem' }}>
        {item.org}
      </p>
      <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
        {item.description}
      </p>
    </div>
  );
}
