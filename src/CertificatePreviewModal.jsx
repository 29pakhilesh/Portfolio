import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function CertificatePreviewModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!cert?.certificateUrl) return null

  return createPortal(
    <div className="skill-modal cert-preview-modal" role="presentation" onClick={onClose}>
      <div
        className="skill-modal__panel cert-preview-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-preview-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="skill-modal__close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <header className="cert-preview-modal__header">
          <h3 id="cert-preview-title" className="skill-modal__title">
            {cert.name}
          </h3>
          <p className="cert-preview-modal__meta">
            {cert.issuer} · {cert.period}
          </p>
        </header>

        <div className="cert-preview-modal__viewer">
          <iframe
            src={`${cert.certificateUrl}#view=FitH`}
            title={`${cert.name} certificate preview`}
            className="cert-preview-modal__iframe"
          />
        </div>

        <div className="cert-preview-modal__actions">
          <a
            href={cert.certificateUrl}
            className="btn btn--primary"
            download={cert.downloadName ?? true}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
          <button type="button" className="btn btn--ghost" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
