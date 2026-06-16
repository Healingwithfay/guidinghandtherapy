import { Link } from 'react-router'
import { PageHeader } from '../components/PageShell'
import { services } from '../content/site'

export default function Services() {
  return (
    <>
      <PageHeader eyebrow={services.label} title={services.headline} intro={services.body} />

      {/* Services Grid */}
      <section style={{ background: 'var(--cream)', padding: '4rem 0' }}>
        <div
          className="container-6xl grid grid-3-mobile gap-4"
          style={{ maxWidth: '48rem', gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {services.items.map((s) => (
            <div key={s.num} className="card">
              <div
                className="mb-3"
                style={{ fontSize: '0.75rem', color: 'var(--teal)', fontFamily: 'var(--font-sans)' }}
              >
                {s.num}
              </div>
              <div className="font-display text-lg" style={{ color: 'var(--ink)' }}>
                {s.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Band */}
      <section style={{ background: '#0f1d1a', padding: '4rem 1.5rem' }}>
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="font-display mb-3"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', color: 'white' }}
          >
            {services.info_headline}
          </h2>
          <p className="mb-6" style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>
            {services.info_body}
          </p>
          <Link to="/contact" className="btn-teal">
            {services.info_cta}
          </Link>
        </div>
      </section>
    </>
  )
}
