import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function PdfPreviewModal({ pdfUrl, title, meta, downloadName, onClose }) {
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

  if (!pdfUrl) return null

  return createPortal(
    <div className="skill-modal cert-preview-modal" role="presentation" onClick={onClose}>
      <div
        className="skill-modal__panel cert-preview-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-preview-title"
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
          <h3 id="pdf-preview-title" className="skill-modal__title">
            {title}
          </h3>
          {meta ? <p className="cert-preview-modal__meta">{meta}</p> : null}
        </header>

        <div className="cert-preview-modal__viewer">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            title={`${title} preview`}
            className="cert-preview-modal__iframe"
          />
        </div>

        <div className="cert-preview-modal__actions">
          <a
            href={pdfUrl}
            className="btn btn--primary"
            download={downloadName ?? true}
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
