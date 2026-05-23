import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import SkillIcon from './SkillIcon'
import { resolveTechIconName } from './techIcons'

export default function ProjectDetailModal({ project, onClose }) {
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

  if (!project) return null

  const highlights = project.highlights ?? []

  return createPortal(
    <div className="skill-modal" role="presentation" onClick={onClose}>
      <div
        className="skill-modal__panel project-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        style={{ '--project-accent': project.accent }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-modal__accent-bar" aria-hidden="true" />

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

        <header className="project-modal__header">
          <div>
            <p className="project-modal__period">{project.period}</p>
            <h3 id="project-modal-title" className="skill-modal__title">
              {project.title}
            </h3>
            {project.featured && <span className="project-modal__badge">Featured</span>}
          </div>
        </header>

        <p className="skill-modal__summary">{project.description}</p>

        {highlights.length > 0 && (
          <div className="skill-modal__section">
            <h4>What I built</h4>
            <ul className="project-modal__highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="skill-modal__section project-modal__section">
          <h4>Tech stack</h4>
          <ul className="project-modal__stack">
            {project.tags.map((tag) => (
              <li key={tag}>
                <SkillIcon name={resolveTechIconName(tag)} label={tag} size="sm" />
              </li>
            ))}
          </ul>
        </div>

        {project.github && (
          <a
            href={project.github}
            className="btn btn--primary project-modal__github"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>,
    document.body,
  )
}
