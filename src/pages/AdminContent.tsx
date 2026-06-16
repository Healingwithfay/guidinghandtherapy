import { useState, useCallback } from 'react'
import { setContent, resetContent, contentSections } from '../lib/admin'
import { Check, RotateCcw, AlertTriangle } from 'lucide-react'

export default function AdminContent() {
  const [saved, setSaved] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [values, setValues] = useState<Record<string, string>>({})

  // Get current value (from localStorage override or default)
  const getValue = useCallback((key: string, defaultValue: string): string => {
    if (values[key] !== undefined) return values[key]
    try {
      const stored = localStorage.getItem(`ght_content_${key}`)
      return stored !== null ? stored : defaultValue
    } catch {
      return defaultValue
    }
  }, [values])

  const handleChange = (key: string, value: string) => {
    setValues(prev => ({ ...prev, [key]: value }))
    setContent(key, value)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  const handleReset = (key: string) => {
    resetContent(key)
    setValues(prev => ({ ...prev, [key]: '' }))
  }

  const handleResetAll = () => {
    if (window.confirm('This will reset ALL content to defaults. Are you sure?')) {
      const keys = contentSections.flatMap(s => s.fields.map(f => f.key))
      keys.forEach(handleReset)
    }
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl" style={{ color: 'var(--ink)' }}>
            Edit Content
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
            Changes save automatically and update the live site instantly.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--teal)' }}>
              <Check size={14} /> Saved
            </span>
          )}
          <button
            onClick={handleResetAll}
            className="btn-outline flex items-center gap-1.5 text-xs"
            style={{ height: '32px', padding: '0 12px' }}
          >
            <AlertTriangle size={12} />
            Reset All
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Section nav */}
        <div className="w-56 flex-shrink-0">
          <div className="flex flex-col gap-0.5 sticky top-4">
            {contentSections.map((section, i) => (
              <button
                key={i}
                onClick={() => setActiveSection(i)}
                className="text-left px-3 py-2 rounded-lg text-sm transition-colors"
                style={{
                  background: activeSection === i ? 'var(--teal-soft)' : 'transparent',
                  color: activeSection === i ? 'var(--teal-deep)' : 'var(--muted-foreground)',
                  fontWeight: activeSection === i ? 500 : 400,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Fields */}
        <div className="flex-1 space-y-4">
          <h2 className="font-display text-lg mb-4" style={{ color: 'var(--ink)' }}>
            {contentSections[activeSection].title}
          </h2>

          {contentSections[activeSection].fields.map((field) => {
            const hasOverride = localStorage.getItem(`ght_content_${field.key}`) !== null
            return (
              <div key={field.key} className="card">
                <div className="flex items-center justify-between mb-2">
                  <label
                    className="block"
                    style={{
                      fontSize: '0.5625rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {field.label}
                    {hasOverride && (
                      <span
                        className="ml-2 px-1.5 py-0.5 rounded text-xs"
                        style={{ background: 'var(--teal-soft)', color: 'var(--teal-deep)' }}
                      >
                        edited
                      </span>
                    )}
                  </label>
                  {hasOverride && (
                    <button
                      onClick={() => handleReset(field.key)}
                      className="flex items-center gap-1 text-xs"
                      style={{ color: 'var(--muted-foreground)', background: 'none', border: 'none', cursor: 'pointer' }}
                      title="Reset to default"
                    >
                      <RotateCcw size={10} />
                      Reset
                    </button>
                  )}
                </div>

                {field.type === 'textarea' ? (
                  <textarea
                    value={getValue(field.key, '')}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    rows={4}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg outline-none focus:ring-2 resize-y"
                    style={{
                      background: 'var(--cream)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-sans)',
                      lineHeight: 1.6,
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    value={getValue(field.key, '')}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg outline-none focus:ring-2"
                    style={{
                      background: 'var(--cream)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
