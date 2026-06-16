import { Link, useLocation, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { isLoggedIn, logout } from '../lib/admin'
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  ExternalLink,
} from 'lucide-react'

const navItems = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/content', label: 'Edit Content', icon: FileText },
  { to: '/admin/messages', label: 'Messages', icon: MessageSquare },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/admin')
    }
  }, [navigate])

  const handleLogout = () => {
    logout()
    navigate('/admin')
  }

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--cream)' }}>
      {/* Sidebar */}
      <aside
        className="w-64 flex-shrink-0 flex flex-col"
        style={{
          background: 'white',
          borderRight: '1px solid var(--border-light)',
        }}
      >
        {/* Logo */}
        <div className="p-6" style={{ borderBottom: '1px solid var(--border-light)' }}>
          <div className="font-display text-lg" style={{ color: 'var(--ink)' }}>
            Guiding Hand Therapy
          </div>
          <div className="eyebrow mt-1">Admin Panel</div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = location.pathname === item.to
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors"
                  style={{
                    background: active ? 'var(--teal-soft)' : 'transparent',
                    color: active ? 'var(--teal-deep)' : 'var(--muted-foreground)',
                    fontWeight: active ? 500 : 400,
                    textDecoration: 'none',
                  }}
                >
                  <item.icon size={16} />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Bottom actions */}
        <div className="p-4" style={{ borderTop: '1px solid var(--border-light)' }}>
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors mb-1"
            style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--cream)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <ExternalLink size={16} />
            View Website
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm w-full text-left transition-colors"
            style={{ color: 'var(--muted-foreground)', background: 'none', border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--cream)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
