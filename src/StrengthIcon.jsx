const icons = {
  teamwork: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
    </svg>
  ),
  adaptability: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
    </svg>
  ),
  problem: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M9.663 17h4.673M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M3 12h1m16 0h1M4.22 19.78l.707-.707M18.364 5.636l.707-.707" strokeLinecap="round" />
      <path d="M12 8a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  ),
  learner: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function StrengthIcon({ type }) {
  return <span className="strength-icon__svg">{icons[type]}</span>
}
