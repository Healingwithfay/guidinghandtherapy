import { Link } from 'react-router'
import { site } from '../content/site'

export function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-light)', background: 'var(--cream-deep)' }}>
      <div className="container-6xl py-16 grid gap-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {/* Brand */}
        <div>
          <div className="font-display text-2xl" style={{ color: 'var(--ink)' }}>{site.practice_name}</div>
          <p className="mt-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>{site.therapist_name}</p>
          <p className="mt-4 text-sm max-w-xs" style={{ color: 'var(--muted-foreground)' }}>
            A safe, nonjudgmental space to be heard and supported as you heal and grow.
          </p>
        </div>

        {/* Explore */}
        <div>
          <div className="eyebrow mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-[var(--teal)] transition-colors" style={{ color: 'var(--ink)', opacity: 0.8, textDecoration: 'none' }}>About</Link></li>
            <li><Link to="/services" className="hover:text-[var(--teal)] transition-colors" style={{ color: 'var(--ink)', opacity: 0.8, textDecoration: 'none' }}>Services</Link></li>
            <li><Link to="/insurance" className="hover:text-[var(--teal)] transition-colors" style={{ color: 'var(--ink)', opacity: 0.8, textDecoration: 'none' }}>Insurance</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--teal)] transition-colors" style={{ color: 'var(--ink)', opacity: 0.8, textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="eyebrow mb-4">Contact</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phone.replace(/[^0-9]/g, '')}`} className="hover:text-[var(--teal)] transition-colors" style={{ color: 'var(--ink)', opacity: 0.8, textDecoration: 'none' }}>
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-[var(--teal)] transition-colors" style={{ color: 'var(--ink)', opacity: 0.8, textDecoration: 'none' }}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container-6xl py-6 flex flex-col md:flex-row justify-between gap-2 text-xs" style={{ color: 'var(--muted-foreground)' }}>
          <div>&copy; {site.year} {site.practice_name}. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/admin" className="hover:text-[var(--teal)] transition-colors" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>Admin</Link>
            <span>Telehealth &amp; In-Person &middot; {site.location}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
