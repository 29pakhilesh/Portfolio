import PdfPreviewModal from './PdfPreviewModal'

export default function CertificatePreviewModal({ cert, onClose }) {
  return (
    <PdfPreviewModal
      pdfUrl={cert.certificateUrl}
      title={cert.name}
      meta={`${cert.issuer} · ${cert.period}`}
      downloadName={cert.downloadName}
      onClose={onClose}
    />
  )
}
