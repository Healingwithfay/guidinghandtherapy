import { Link } from 'react-router'
import { PageHeader } from '../components/PageShell'
import { about } from '../content/site'

export default function About() {
  return (
    <>
      <PageHeader eyebrow={about.label} title={about.headline} intro={about.subtitle} />

      {/* Sub-header */}
      <section style={{ background: 'var(--cream)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-6xl text-center" style={{ paddingTop: '1.5rem', paddingBottom: '2rem' }}>
          <p className="font-display text-base" style={{ color: 'var(--ink)', marginBottom: '0.25rem' }}>
            {about.subhead_name}
          </p>
          <p
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted-foreground)',
            }}
          >
            {about.subhead_title}
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div
          className="container-6xl grid grid-2-mobile gap-16 items-start"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          <div>
            <div className="relative inline-block">
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
                alt={about.subhead_name}
                className="relative w-full max-w-sm rounded-2xl object-cover"
                style={{ aspectRatio: '3/4', zIndex: 1 }}
              />
            </div>
          </div>

          <div>
            <div className="eyebrow-left mb-4">
              <span className="accent-line" />
              {about.story_label}
            </div>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {about.story}
            </p>

            <div className="hairline mb-10" />

            <div className="eyebrow-left mb-4">
              <span className="accent-line" />
              {about.approach_label}
            </div>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {about.approach}
            </p>

            <Link to="/contact" className="btn-primary">
              {about.cta_button}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
