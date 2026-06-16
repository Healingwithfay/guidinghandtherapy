import { useState } from 'react'
import { setAdminPassword, getAdminPassword, resetAllContent } from '../lib/admin'
import { Key, AlertTriangle, RotateCcw } from 'lucide-react'

export default function AdminSettings() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    setError('')

    if (currentPassword !== getAdminPassword()) {
      setError('Current password is incorrect.')
      return
    }
    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters.')
      return
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setAdminPassword(newPassword)
    setMessage('Password updated successfully.')
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  const handleResetContent = () => {
    if (window.confirm('WARNING: This will reset ALL website content to the original defaults. This cannot be undone. Are you sure?')) {
      resetAllContent()
      setMessage('All content has been reset to defaults.')
    }
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="font-display text-2xl" style={{ color: 'var(--ink)' }}>
          Settings
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
          Manage your admin password and site data.
        </p>
      </div>

      {/* Change password */}
      <div className="card mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="flex items-center justify-center"
            style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', background: 'var(--teal-soft)' }}
          >
            <Key size={14} style={{ color: 'var(--teal)' }} />
          </div>
          <h2 className="font-display text-lg" style={{ color: 'var(--ink)' }}>
            Change Password
          </h2>
        </div>

        {message && (
          <div
            className="mb-4 p-3 rounded-lg text-sm"
            style={{ background: 'var(--teal-soft)', color: 'var(--teal-deep)' }}
          >
            {message}
          </div>
        )}
        {error && (
          <div
            className="mb-4 p-3 rounded-lg text-sm"
            style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--destructive)' }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleChangePassword} className="space-y-3">
          <div>
            <label
              className="block mb-1"
              style={{ fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}
            >
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg outline-none focus:ring-2"
              style={{ background: 'var(--cream)', border: '1px solid var(--border-light)', color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}
              required
            />
          </div>
          <div>
            <label
              className="block mb-1"
              style={{ fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}
            >
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg outline-none focus:ring-2"
              style={{ background: 'var(--cream)', border: '1px solid var(--border-light)', color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}
              required
              minLength={6}
            />
          </div>
          <div>
            <label
              className="block mb-1"
              style={{ fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}
            >
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg outline-none focus:ring-2"
              style={{ background: 'var(--cream)', border: '1px solid var(--border-light)', color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Update Password
          </button>
        </form>
      </div>

      {/* Danger zone */}
      <div className="card" style={{ border: '1px solid rgba(239, 68, 68, 0.2)' }}>
        <div className="flex items-center gap-3 mb-4">
          <div
            className="flex items-center justify-center"
            style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)' }}
          >
            <AlertTriangle size={14} style={{ color: 'var(--destructive)' }} />
          </div>
          <h2 className="font-display text-lg" style={{ color: 'var(--destructive)' }}>
            Danger Zone
          </h2>
        </div>
        <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
          Reset all website content to the original defaults. This will erase any customizations you've made through the content editor. Contact form messages will NOT be deleted.
        </p>
        <button
          onClick={handleResetContent}
          className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg transition-colors"
          style={{
            color: 'var(--destructive)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          <RotateCcw size={14} />
          Reset All Content to Defaults
        </button>
      </div>
    </div>
  )
}
