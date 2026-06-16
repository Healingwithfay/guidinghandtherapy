import { Link } from 'react-router'
import { ArrowRight, Heart, Shield, Sparkles } from 'lucide-react'
import { hero, philosophy, specialties, cta } from '../content/site'

const valueIcons = [Heart, Shield, Sparkles]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="paper">
        <div
          className="container-6xl grid items-center gap-16"
          style={{ paddingTop: '5rem', paddingBottom: '4rem', gridTemplateColumns: '1fr 1fr' }}
        >
          {/* Left - Text */}
          <div>
            <div className="eyebrow-left mb-6">
              <span className="accent-line" />
              {hero.label}
            </div>
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                lineHeight: 1.1,
                color: 'var(--ink)',
                marginBottom: '1.25rem',
              }}
            >
              {hero.headline}
            </h1>
            <p
              className="max-w-md"
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--muted-foreground)',
                marginBottom: '1.75rem',
              }}
            >
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                {hero.cta_primary}
                <ArrowRight size={14} />
              </Link>
              <Link to="/about" className="btn-outline">
                {hero.cta_secondary}
              </Link>
            </div>
          </div>

          {/* Right - Portrait with offset border */}
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Offset border behind */}
              <div
                className="absolute rounded-2xl"
                style={{
                  top: '-12px',
                  right: '-12px',
                  bottom: '12px',
                  left: '12px',
                  border: '1px solid var(--border-light)',
                  zIndex: 0,
                }}
              />
              <img
                src="/images/fay-portrait.jpg"
                alt={hero.image_caption_name}
                className="relative w-full max-w-[320px] rounded-2xl object-cover"
                style={{ aspectRatio: '3/4', zIndex: 1 }}
              />
            </div>
            <p className="font-display mt-4 text-base" style={{ color: 'var(--ink)' }}>
              {hero.image_caption_name}
            </p>
            <p
              className="mt-1"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted-foreground)',
              }}
            >
              {hero.image_caption_title}
            </p>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section style={{ background: 'white', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-6xl" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="eyebrow-centered mb-6">
              <span className="accent-line" />
              {philosophy.label}
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                lineHeight: 1.25,
                color: 'var(--ink)',
                marginBottom: '1rem',
              }}
            >
              {philosophy.headline}
            </h2>
            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--muted-foreground)',
              }}
            >
              {philosophy.body}
            </p>
          </div>
        </div>
      </section>

      {/* ===== VALUE CARDS ===== */}
      <section style={{ background: 'var(--cream)', paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div
          className="container-6xl grid gap-4"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {philosophy.values.map((val, i) => {
            const Icon = valueIcons[i]
            return (
              <div key={val.title} className="card">
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '50%',
                    background: 'var(--teal-soft)',
                  }}
                >
                  <Icon size={16} style={{ color: 'var(--teal)' }} />
                </div>
                <h3 className="font-display text-lg mb-2" style={{ color: 'var(--ink)' }}>
                  {val.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  {val.body}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== SPECIALTIES ===== */}
      <section style={{ background: 'var(--cream)', paddingBottom: '5rem' }}>
        <div
          className="container-6xl grid gap-16 items-start"
          style={{ gridTemplateColumns: '1fr 1.5fr' }}
        >
          {/* Left */}
          <div>
            <div className="eyebrow-left mb-4">
              <span className="accent-line" />
              {specialties.label}
            </div>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.25, color: 'var(--ink)', marginBottom: '0.75rem' }}
            >
              {specialties.headline}
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted-foreground)' }}>
              {specialties.body}
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-[var(--teal-deep)]"
              style={{ color: 'var(--teal)', textDecoration: 'none' }}
            >
              {specialties.cta_link}
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Right - Grid */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              background: 'white',
              border: '1px solid var(--border-light)',
            }}
          >
            {specialties.items.map((item, i) => (
              <div
                key={item}
                className="font-display"
                style={{
                  padding: '1.25rem 1.5rem',
                  fontSize: '0.9375rem',
                  color: 'var(--ink)',
                  borderBottom: i < 5 ? '1px solid var(--border-light)' : 'none',
                  borderRight: i % 2 === 0 ? '1px solid var(--border-light)' : 'none',
                }}
              >
                {item}
              </div>
            ))}
            <div style={{ background: '#e8e4dc' }} />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ background: '#0f1d1a', padding: '5rem 1.5rem' }}>
        <div className="max-w-lg mx-auto text-center">
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}
          >
            {cta.headline}
          </h2>
          <p
            className="mb-8"
            style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}
          >
            {cta.body}
          </p>
          <Link to="/contact" className="btn-teal">
            {cta.button}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
