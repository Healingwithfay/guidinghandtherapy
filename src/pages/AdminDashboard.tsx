import { Link } from 'react-router'
import { getSubmissions } from '../lib/admin'
import { FileText, MessageSquare, Settings, ArrowRight } from 'lucide-react'

export default function AdminDashboard() {
  const submissions = getSubmissions()
  const unreadCount = submissions.filter(s => !s.read).length

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl" style={{ color: 'var(--ink)' }}>
          Dashboard
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
          Manage your website content and view submissions.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* Stats cards */}
        <div className="card">
          <div className="eyebrow mb-2">Total Messages</div>
          <div className="font-display text-3xl" style={{ color: 'var(--ink)' }}>
            {submissions.length}
          </div>
        </div>
        <div className="card">
          <div className="eyebrow mb-2">Unread</div>
          <div className="font-display text-3xl" style={{ color: unreadCount > 0 ? 'var(--teal)' : 'var(--ink)' }}>
            {unreadCount}
          </div>
        </div>
        <div className="card">
          <div className="eyebrow mb-2">Content Sections</div>
          <div className="font-display text-3xl" style={{ color: 'var(--ink)' }}>
            10
          </div>
        </div>
      </div>

      {/* Quick links */}
      <h2 className="font-display text-lg mb-4" style={{ color: 'var(--ink)' }}>
        Quick Actions
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <Link
          to="/admin/content"
          className="card flex items-center justify-between group"
          style={{ textDecoration: 'none', transition: 'box-shadow 200ms' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center"
              style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'var(--teal-soft)' }}
            >
              <FileText size={16} style={{ color: 'var(--teal)' }} />
            </div>
            <div>
              <div className="font-medium text-sm" style={{ color: 'var(--ink)' }}>Edit Content</div>
              <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Update text sitewide</div>
            </div>
          </div>
          <ArrowRight size={16} style={{ color: 'var(--muted-foreground)' }} />
        </Link>

        <Link
          to="/admin/messages"
          className="card flex items-center justify-between group"
          style={{ textDecoration: 'none', transition: 'box-shadow 200ms' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center"
              style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: unreadCount > 0 ? 'var(--teal-soft)' : 'var(--cream)' }}
            >
              <MessageSquare size={16} style={{ color: unreadCount > 0 ? 'var(--teal)' : 'var(--muted-foreground)' }} />
            </div>
            <div>
              <div className="font-medium text-sm" style={{ color: 'var(--ink)' }}>
                Messages {unreadCount > 0 && <span className="ml-1 px-1.5 py-0.5 rounded-full text-xs text-white" style={{ background: 'var(--teal)' }}>{unreadCount}</span>}
              </div>
              <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>View contact form</div>
            </div>
          </div>
          <ArrowRight size={16} style={{ color: 'var(--muted-foreground)' }} />
        </Link>

        <Link
          to="/admin/settings"
          className="card flex items-center justify-between group"
          style={{ textDecoration: 'none', transition: 'box-shadow 200ms' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center"
              style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'var(--cream)' }}
            >
              <Settings size={16} style={{ color: 'var(--muted-foreground)' }} />
            </div>
            <div>
              <div className="font-medium text-sm" style={{ color: 'var(--ink)' }}>Settings</div>
              <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Password & reset</div>
            </div>
          </div>
          <ArrowRight size={16} style={{ color: 'var(--muted-foreground)' }} />
        </Link>
      </div>

      {/* Recent submissions preview */}
      {submissions.length > 0 && (
        <div className="mt-8">
          <h2 className="font-display text-lg mb-4" style={{ color: 'var(--ink)' }}>
            Recent Messages
          </h2>
          <div className="space-y-2">
            {submissions.slice(0, 5).map((sub) => (
              <div
                key={sub.id}
                className="card"
                style={{
                  padding: '0.875rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  opacity: sub.read ? 0.7 : 1,
                }}
              >
                <div className="flex items-center gap-3">
                  {!sub.read && (
                    <div
                      className="flex-shrink-0 rounded-full"
                      style={{ width: '0.5rem', height: '0.5rem', background: 'var(--teal)' }}
                    />
                  )}
                  <div>
                    <div className="text-sm font-medium" style={{ color: 'var(--ink)' }}>{sub.name || 'Anonymous'}</div>
                    <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{sub.email}</div>
                  </div>
                </div>
                <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  {new Date(sub.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>
            ))}
          </div>
          {submissions.length > 5 && (
            <Link
              to="/admin/messages"
              className="inline-flex items-center gap-1.5 text-sm mt-3"
              style={{ color: 'var(--teal)', textDecoration: 'none' }}
            >
              View all {submissions.length} messages
              <ArrowRight size={13} />
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
