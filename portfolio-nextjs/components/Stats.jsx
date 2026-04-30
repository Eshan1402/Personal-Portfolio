'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { stats } from '@/lib/data';

const icons = ['🏆', '🚀', '✦'];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="section-sm"
      style={{
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass card-hover"
              style={{
                borderRadius: 20,
                padding: '2rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icons[i]}</div>
              <div className="stat-number">
                {inView && (
                  <CountUp
                    start={0}
                    end={s.number}
                    duration={2}
                    delay={0.3 + i * 0.12}
                  />
                )}
                <span>{s.suffix}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500, margin: 0, fontSize: '0.95rem', marginTop: '0.5rem' }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
