import { useState } from 'react'
import { profile } from './data'
import { SectionReveal } from './useScrollReveal'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return

    if (!ACCESS_KEY) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim() || 'no-reply@portfolio.local',
          message: form.message.trim(),
          subject: `Portfolio message from ${form.name.trim()}`,
          from_name: 'Portfolio — Akhilesh Panigrahi',
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="message-section">
      <div className="message-section__bg" aria-hidden="true" />
      <div className="container">
        <SectionReveal>
        <div className="message-section__grid">
          <div className="message-section__intro">
            <p className="section__number">04 — Contact</p>
            <h2 className="message-section__title">
              Let&apos;s get in <em>touch</em>
            </h2>
            <p className="message-section__desc">
              Send a message with the form — it goes straight to{' '}
              <strong>{profile.email}</strong>. Prefer email or socials? Use the links below.
            </p>
            <div className="message-section__hints">
              <span>✦ Usually reply within 24h</span>
              <span>✦ Open to internships & collabs</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__glow" aria-hidden="true" />

            <label className="contact-form__field">
              <span className="contact-form__label">Your name *</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                required
                autoComplete="name"
              />
            </label>

            <label className="contact-form__field">
              <span className="contact-form__label">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="so I can reply to you"
                autoComplete="email"
              />
            </label>

            <label className="contact-form__field">
              <span className="contact-form__label">Message *</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, internship, or just say hi..."
                rows={5}
                required
              />
            </label>

            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <span className="btn__spinner" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <span aria-hidden="true">→</span>
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="contact-form__feedback contact-form__feedback--success" role="status">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form__feedback contact-form__feedback--error" role="alert">
                {!ACCESS_KEY
                  ? 'Email not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to .env (see README).'
                  : 'Something went wrong. Please try again or email me directly.'}
              </p>
            )}
          </form>
        </div>

        <div className="contact-reach">
          <h3 className="contact-reach__title">
            Or reach me <em>directly</em> on:
          </h3>
          <a href={`mailto:${profile.email}`} className="contact-reach__email">
            {profile.email}
          </a>
          <div className="contact-reach__links">
            <a
              href={profile.social.github}
              className="contact-reach__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={profile.social.linkedin}
              className="contact-reach__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={profile.social.leetcode}
              className="contact-reach__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-reach__link">
              {profile.phone}
            </a>
          </div>
        </div>
        </SectionReveal>
      </div>
    </section>
  )
}
