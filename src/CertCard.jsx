import { useState } from 'react'
import CertificatePreviewModal from './CertificatePreviewModal'
import { getCertLogoUrl } from './certIcons'

export default function CertCard({ cert }) {
  const [previewOpen, setPreviewOpen] = useState(false)
  const logoUrl = cert.logo ?? getCertLogoUrl(cert.name, cert.issuer)
  const tags = Array.isArray(cert.skills) ? cert.skills : cert.skills.split(', ')

  return (
    <>
      <article className="cert-card">
        <div className="cert-card__shine" aria-hidden="true" />
        <div className="cert-card__top">
          <div
            className={`cert-card__logo-wrap${
              cert.name.includes('AWS') ? ' cert-card__logo-wrap--aws' : ''
            }`}
          >
            {logoUrl ? (
              <img src={logoUrl} alt="" className="cert-card__logo" width={44} height={44} loading="lazy" />
            ) : (
              <span className="cert-card__logo-fallback">{cert.issuer.charAt(0)}</span>
            )}
          </div>
          <span className="cert-card__badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Certified
          </span>
        </div>
        <h4 className="cert-card__title">{cert.name}</h4>
        <p className="cert-card__issuer">{cert.issuer}</p>
        <p className="cert-card__period">
          <span className="cert-card__period-dot" aria-hidden="true" />
          {cert.period}
        </p>
        <div className="cert-card__footer">
          <ul className="cert-card__tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {cert.certificateUrl && (
            <button
              type="button"
              className="cert-card__download"
              onClick={() => setPreviewOpen(true)}
              aria-label={`Preview ${cert.name} certificate`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" />
              </svg>
              View certificate
            </button>
          )}
        </div>
      </article>

      {previewOpen && (
        <CertificatePreviewModal cert={cert} onClose={() => setPreviewOpen(false)} />
      )}
    </>
  )
}
