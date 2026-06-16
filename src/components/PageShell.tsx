export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string
  title: string
  intro?: string
}) {
  return (
    <section
      className="paper"
      style={{ borderBottom: '1px solid var(--border-light)' }}
    >
      <div className="container-6xl text-center" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        {eyebrow && (
          <div className="eyebrow-centered mb-6">
            <span className="accent-line" />
            {eyebrow}
          </div>
        )}
        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            lineHeight: 1.05,
            color: 'var(--ink)',
          }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="mt-6 mx-auto leading-relaxed"
            style={{
              fontSize: '1.125rem',
              color: 'var(--muted-foreground)',
              maxWidth: '42rem',
            }}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}
