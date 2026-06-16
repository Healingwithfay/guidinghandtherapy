import { Link } from 'react-router'
import { Check } from 'lucide-react'
import { PageHeader } from '../components/PageShell'
import { insurance } from '../content/site'

export default function Insurance() {
  return (
    <>
      <PageHeader eyebrow={insurance.label} title={insurance.headline} intro={insurance.body} />

      {/* Providers Grid */}
      <section style={{ background: 'var(--cream)', padding: '3rem 0' }}>
        <div
          className="container-6xl grid gap-3"
          style={{ maxWidth: '48rem', gridTemplateColumns: '1fr 1fr' }}
        >
          {insurance.providers.map((provider) => (
            <div
              key={provider}
              className="card"
              style={{
                padding: '0.875rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                borderRadius: '0.75rem',
              }}
            >
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  borderRadius: '50%',
                  background: 'var(--teal-soft)',
                }}
              >
                <Check size={12} style={{ color: 'var(--teal)' }} strokeWidth={3} />
              </div>
              <span className="text-sm" style={{ color: 'var(--ink)' }}>{provider}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Out of Network */}
      <section style={{ background: 'var(--cream)', padding: '0 0 4rem' }}>
        <div className="max-w-xl mx-auto text-center">
          <div className="eyebrow mb-3">{insurance.out_of_network_label}</div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted-foreground)' }}>
            {insurance.out_of_network_body}
          </p>
          <Link to="/contact" className="btn-primary">
            {insurance.cta_button}
          </Link>
        </div>
      </section>
    </>
  )
}
