import { useState } from 'react'
import { getSubmissions, markRead, deleteSubmission } from '../lib/admin'
import { Trash2, MailOpen, Mail } from 'lucide-react'

export default function AdminMessages() {
  const [submissions, setSubmissions] = useState(getSubmissions())
  const [selected, setSelected] = useState<string | null>(null)

  const selectedSub = submissions.find(s => s.id === selected)

  const handleMarkRead = (id: string) => {
    markRead(id)
    setSubmissions(getSubmissions())
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this message?')) {
      deleteSubmission(id)
      setSubmissions(getSubmissions())
      if (selected === id) setSelected(null)
    }
  }

  return (
    <div className="p-8 h-full">
      <div className="mb-6">
        <h1 className="font-display text-2xl" style={{ color: 'var(--ink)' }}>
          Messages
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
          {submissions.length} total · {submissions.filter(s => !s.read).length} unread
        </p>
      </div>

      {submissions.length === 0 ? (
        <div className="card text-center py-16">
          <MailOpen size={32} style={{ color: 'var(--border-light)', margin: '0 auto 1rem' }} />
          <p className="font-display text-lg" style={{ color: 'var(--muted-foreground)' }}>
            No messages yet
          </p>
          <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
            Contact form submissions will appear here.
          </p>
        </div>
      ) : (
        <div className="flex gap-4 h-[calc(100vh-12rem)]">
          {/* List */}
          <div className="w-80 flex-shrink-0 overflow-auto">
            <div className="space-y-1">
              {submissions.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => {
                    setSelected(sub.id)
                    if (!sub.read) handleMarkRead(sub.id)
                  }}
                  className="w-full text-left card transition-colors"
                  style={{
                    padding: '0.75rem 1rem',
                    background: selected === sub.id ? 'var(--teal-soft)' : 'white',
                    border: `1px solid ${selected === sub.id ? 'var(--teal)' : 'var(--border-light)'}`,
                    cursor: 'pointer',
                  }}
                >
                  <div className="flex items-center gap-2">
                    {!sub.read && (
                      <div
                        className="flex-shrink-0 rounded-full"
                        style={{ width: '0.5rem', height: '0.5rem', background: 'var(--teal)' }}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-sm truncate"
                        style={{
                          color: 'var(--ink)',
                          fontWeight: sub.read ? 400 : 600,
                        }}
                      >
                        {sub.name || 'Anonymous'}
                      </div>
                      <div className="text-xs truncate" style={{ color: 'var(--muted-foreground)' }}>
                        {sub.email}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>
                    {new Date(sub.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detail */}
          <div className="flex-1 overflow-auto">
            {selectedSub ? (
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        background: selectedSub.read ? 'var(--cream)' : 'var(--teal-soft)',
                      }}
                    >
                      {selectedSub.read ? (
                        <MailOpen size={16} style={{ color: 'var(--muted-foreground)' }} />
                      ) : (
                        <Mail size={16} style={{ color: 'var(--teal)' }} />
                      )}
                    </div>
                    <div>
                      <div className="font-medium" style={{ color: 'var(--ink)' }}>
                        {selectedSub.name || 'Anonymous'}
                      </div>
                      <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                        {new Date(selectedSub.date).toLocaleString('en-US')}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(selectedSub.id)}
                    className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md transition-colors"
                    style={{
                      color: 'var(--destructive)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <Trash2 size={12} />
                    Delete
                  </button>
                </div>

                <div className="hairline mb-4" />

                <div className="space-y-4">
                  {selectedSub.email && (
                    <div>
                      <div className="eyebrow mb-1">Email</div>
                      <a
                        href={`mailto:${selectedSub.email}`}
                        className="text-sm"
                        style={{ color: 'var(--teal)', textDecoration: 'none' }}
                      >
                        {selectedSub.email}
                      </a>
                    </div>
                  )}
                  {selectedSub.phone && (
                    <div>
                      <div className="eyebrow mb-1">Phone</div>
                      <a
                        href={`tel:${selectedSub.phone}`}
                        className="text-sm"
                        style={{ color: 'var(--teal)', textDecoration: 'none' }}
                      >
                        {selectedSub.phone}
                      </a>
                    </div>
                  )}
                  <div>
                    <div className="eyebrow mb-1">Message</div>
                    <p
                      className="text-sm leading-relaxed whitespace-pre-wrap"
                      style={{ color: 'var(--ink)' }}
                    >
                      {selectedSub.message || '(No message)'}
                    </p>
                  </div>
                  <div>
                    <div className="eyebrow mb-1">Consent</div>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                      {selectedSub.consent ? 'Yes — consented to email/phone/SMS contact' : 'No consent given'}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card text-center py-16">
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  Select a message to view details
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
