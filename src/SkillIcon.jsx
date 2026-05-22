import { useEffect, useState } from 'react'
import { getTechIconSources, getTechLabel, techIconMap } from './techIcons'

export default function SkillIcon({ name, size = 'md', showLabel = true, eager = false }) {
  const sources = getTechIconSources(name)
  const label = getTechLabel(name)
  const config = techIconMap[name]
  const isAws = name === 'AWS'
  const isDark = config?.dark
  const [sourceIndex, setSourceIndex] = useState(0)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setSourceIndex(0)
    setFailed(false)
  }, [name])

  const src = sources[sourceIndex]

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((i) => i + 1)
    } else {
      setFailed(true)
    }
  }

  if (!src || failed) {
    return (
      <div className={`skill-icon skill-icon--${size}`}>
        <span className="skill-icon__fallback">{name.charAt(0)}</span>
        {showLabel && <span className="skill-icon__label">{label}</span>}
      </div>
    )
  }

  return (
    <div
      className={`skill-icon skill-icon--${size}${isAws ? ' skill-icon--aws' : ''}${isDark ? ' skill-icon--dark-logo' : ''}`}
      title={label}
    >
      <img
        key={src}
        src={src}
        alt=""
        className="skill-icon__img"
        width={40}
        height={40}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={handleError}
      />
      {showLabel && <span className="skill-icon__label">{label}</span>}
    </div>
  )
}
