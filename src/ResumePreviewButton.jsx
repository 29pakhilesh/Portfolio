import { useState } from 'react'
import PdfPreviewModal from './PdfPreviewModal'
import { profile } from './data'

export default function ResumePreviewButton({ className, children, ariaLabel = 'View resume' }) {
  const [previewOpen, setPreviewOpen] = useState(false)

  if (!profile.resumeUrl) return null

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setPreviewOpen(true)}
        aria-label={ariaLabel}
      >
        {children}
      </button>

      {previewOpen && (
        <PdfPreviewModal
          pdfUrl={profile.resumeUrl}
          title="Resume"
          meta={profile.name}
          downloadName={profile.resumeDownloadName}
          onClose={() => setPreviewOpen(false)}
        />
      )}
    </>
  )
}
