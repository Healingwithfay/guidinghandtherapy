import { Link, useLocation } from 'react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../content/site'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/insurance', label: 'Insurance' },
  { to: '/contact', label: 'Contact' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header
      className="sticky top-0 z-40"
      style={{
        borderBottom: '1px solid var(--border-light)',
        background: 'rgba(250, 246, 239, 0.8)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="container-6xl flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/fay-logo.png"
            alt={site.practice_name}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-[var(--border-light)]"
          />
          <div className="leading-tight">
            <div className="font-display" style={{ color: 'var(--ink)', fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}>
              {site.practice_name}
            </div>
            <div className="hide-mobile" style={{ fontSize: '0.5625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>
              {site.tagline}
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hide-mobile items-center" style={{ display: 'flex', gap: 'clamp(0.5rem, 1.5vw, 1.75rem)' }}>
          {NAV.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors relative py-1 whitespace-nowrap"
                style={{ color: isActive ? 'var(--ink)' : 'var(--muted-foreground)', fontSize: '0.8125rem', letterSpacing: '0.01em' }}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            to="/contact"
            className="btn-primary whitespace-nowrap"
            style={{ padding: '0.45rem 1rem', fontSize: '0.75rem', marginLeft: '0.5rem' }}
          >
            Book a Consult
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="show-mobile"
          style={{ display: 'none', padding: '0.5rem', marginRight: '-0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)' }}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav
          className="show-mobile"
          style={{
            display: 'none',
            borderTop: '1px solid var(--border-light)',
            background: 'var(--cream)',
            padding: '1rem 1.5rem',
          }}
        >
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm"
                style={{ color: 'var(--ink)', opacity: 0.8, textDecoration: 'none' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
