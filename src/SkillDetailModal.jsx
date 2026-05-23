import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import SkillIcon from './SkillIcon'
import { getTechDetail } from './data'

export default function SkillDetailModal({ techName, onClose }) {
  const detail = getTechDetail(techName)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // Avoid default blue focus ring on open; Escape still works via document listener

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!detail) return null

  return createPortal(
    <div className="skill-modal" role="presentation" onClick={onClose}>
      <div
        className="skill-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="skill-modal-title"
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

        <header className="skill-modal__header">
          <SkillIcon name={techName} showLabel={false} />
          <div>
            <h3 id="skill-modal-title" className="skill-modal__title">
              {techName}
            </h3>
            <p className="skill-modal__category">{detail.category}</p>
          </div>
        </header>

        <p className="skill-modal__summary">{detail.summary}</p>

        <div className="skill-modal__section">
          <h4>Where I&apos;ve used it</h4>
          {detail.usages.length > 0 ? (
            <ul className="skill-modal__list">
              {detail.usages.map((usage) => (
                <li key={usage.project}>
                  <p className="skill-modal__project">{usage.project}</p>
                  <p className="skill-modal__context">{usage.context}</p>
                  {usage.github && (
                    <a
                      href={usage.github}
                      className="skill-modal__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View repository →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="skill-modal__empty">Used in coursework and ongoing learning.</p>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
