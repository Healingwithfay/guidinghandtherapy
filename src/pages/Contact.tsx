import { useState } from 'react'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { PageHeader } from '../components/PageShell'
import { contact } from '../content/site'
import { saveSubmission } from '../lib/admin'

const contactIcons = [Phone, Mail, Clock, MapPin]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    saveSubmission({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      consent: formData.consent,
    })
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader eyebrow={contact.label} title={contact.headline} intro={contact.body} />

      {/* Contact Section */}
      <section style={{ background: 'var(--cream)', padding: '0 0 5rem' }}>
        <div
          className="container-6xl grid grid-2-mobile gap-14 items-start"
          style={{ gridTemplateColumns: '1fr 1.2fr' }}
        >
          {/* Left - Info */}
          <div>
            <div className="flex flex-col gap-6">
              {contact.info.map((item, i) => {
                const Icon = contactIcons[i]
                return (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: '2.25rem',
                        height: '2.25rem',
                        borderRadius: '50%',
                        background: 'var(--teal-soft)',
                      }}
                    >
                      <Icon size={14} style={{ color: 'var(--teal)' }} />
                    </div>
                    <div>
                      <div
                        className="mb-1"
                        style={{
                          fontSize: '0.5625rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--muted-foreground)',
                        }}
                      >
                        {item.label}
                      </div>
                      {'href' in item && item.href ? (
                        <a
                          href={item.href}
                          className="text-sm hover:text-[var(--teal)] transition-colors"
                          style={{ color: 'var(--ink)', textDecoration: 'none' }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm" style={{ color: 'var(--ink)' }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div
              className="mt-6 p-4 rounded-xl"
              style={{ background: 'white', border: '1px solid var(--border-light)' }}
            >
              <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                {contact.sms_notice}
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className="rounded-2xl p-7"
            style={{ background: 'white', border: '1px solid var(--border-light)' }}
          >
            {submitted ? (
              <div className="text-center" style={{ padding: '2.5rem 1rem' }}>
                <div
                  className="flex items-center justify-center mx-auto mb-4"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'var(--teal-soft)',
                  }}
                >
                  <Mail size={18} style={{ color: 'var(--teal)' }} />
                </div>
                <h3 className="font-display text-xl mb-2" style={{ color: 'var(--ink)' }}>
                  {contact.form.success_title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  {contact.form.success_body}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      className="block mb-1.5"
                      style={{
                        fontSize: '0.5625rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      {contact.form.name_label} <span style={{ color: 'var(--teal)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg outline-none focus:ring-2"
                      style={{
                        background: 'var(--cream)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--ink)',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-1.5"
                      style={{
                        fontSize: '0.5625rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      {contact.form.phone_label}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg outline-none focus:ring-2"
                      style={{
                        background: 'var(--cream)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--ink)',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-1.5"
                    style={{
                      fontSize: '0.5625rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {contact.form.email_label} <span style={{ color: 'var(--teal)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg outline-none focus:ring-2"
                    style={{
                      background: 'var(--cream)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block mb-1.5"
                    style={{
                      fontSize: '0.5625rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {contact.form.message_label}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={contact.form.message_placeholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg outline-none focus:ring-2 resize-y"
                    style={{
                      background: 'var(--cream)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  />
                </div>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5"
                  />
                  <span className="text-xs leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                    {contact.form.consent_text}
                  </span>
                </label>

                <button type="submit" className="btn-primary w-full mt-1">
                  {contact.form.submit_button}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
