'use client';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { IconBrandGithub, IconExternalLink, IconX, IconEye } from '@tabler/icons-react';
import { projects, categories } from '@/lib/data';

function ProjectCard({ project, onClick, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="glass card-hover"
      style={{ borderRadius: 20, overflow: 'hidden', cursor: 'pointer' }}
      onClick={() => onClick(project)}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
        />
        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(13,13,26,0.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
          }}
        >
          <span style={{ color: 'white', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
            <IconEye size={18} /> View Details
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '0.75rem' }}>
          {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text)' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none' }}
            >
              <IconBrandGithub size={15} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--accent-2)', fontSize: '0.8rem', textDecoration: 'none' }}
            >
              <IconExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass"
            style={{ maxWidth: 640, width: '100%', borderRadius: 24, overflow: 'hidden' }}
          >
            <div style={{ position: 'relative', aspectRatio: '16/9' }}>
              <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} sizes="640px" />
              <button
                onClick={onClose}
                style={{
                  position: 'absolute', top: 12, right: 12,
                  background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%',
                  width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'white',
                }}
              >
                <IconX size={18} />
              </button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '0.75rem' }}>
                {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text)' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                    <IconBrandGithub size={16} /> GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                    <IconExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p style={{ color: 'var(--accent-2)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            My Work
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', fontFamily: 'var(--font-display)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: 500, margin: '0.75rem auto 0' }}>
            A showcase of projects spanning full-stack development, computer vision, and data science.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 99,
                border: active === c.id ? 'none' : '1px solid var(--border)',
                background: active === c.id ? 'var(--gradient)' : 'var(--bg-card)',
                color: active === c.id ? 'white' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
              }}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} onClick={setSelected} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
