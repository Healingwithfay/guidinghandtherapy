import { useState } from 'react'
import { useNavigate } from 'react-router'
import { checkLogin, login } from '../lib/admin'
import { Lock } from 'lucide-react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (checkLogin(password)) {
      login()
      navigate('/admin/dashboard')
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--cream)' }}>
      <div className="w-full max-w-sm mx-4">
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center mb-4"
            style={{
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '50%',
              background: 'var(--teal-soft)',
            }}
          >
            <Lock size={20} style={{ color: 'var(--teal)' }} />
          </div>
          <h1 className="font-display text-2xl" style={{ color: 'var(--ink)' }}>
            Admin Panel
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
            Guiding Hand Therapy
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card">
          <label
            className="block mb-1.5"
            style={{
              fontSize: '0.5625rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted-foreground)',
            }}
          >
            PASSWORD
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false) }}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg outline-none focus:ring-2 mb-4"
            style={{
              background: 'var(--cream)',
              border: `1px solid ${error ? 'var(--destructive)' : 'var(--border-light)'}`,
              color: 'var(--ink)',
              fontFamily: 'var(--font-sans)',
            }}
            placeholder="Enter admin password"
            autoFocus
          />
          {error && (
            <p className="text-xs mb-3" style={{ color: 'var(--destructive)' }}>
              Incorrect password. Please try again.
            </p>
          )}
          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
        </form>

        <p className="text-center text-xs mt-6" style={{ color: 'var(--muted-foreground)' }}>
          Default: <code className="px-1.5 py-0.5 rounded" style={{ background: 'var(--cream-deep)' }}>GuidingHand2026!</code>
        </p>
      </div>
    </div>
  )
}
