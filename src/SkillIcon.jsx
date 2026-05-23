import { useEffect, useState } from 'react'
import { getTechIconSources, getTechLabel, techIconMap } from './techIcons'

export default function SkillIcon({
  name,
  size = 'md',
  showLabel = true,
  eager = false,
  label: labelOverride,
}) {
  const sources = getTechIconSources(name)
  const label = labelOverride ?? getTechLabel(name)
  const config = techIconMap[name]
  const isAws = name === 'AWS'
  const isDark = config?.dark
  const isMono = config?.monochrome
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

  const fallbackLetter = (labelOverride ?? name).charAt(0)

  if (!src || failed) {
    return (
      <div className={`skill-icon skill-icon--${size}`}>
        <span className="skill-icon__mark">
          <span className="skill-icon__fallback">{fallbackLetter}</span>
        </span>
        {showLabel && <span className="skill-icon__label">{label}</span>}
      </div>
    )
  }

  return (
    <div
      className={`skill-icon skill-icon--${size}${isAws ? ' skill-icon--aws' : ''}${isDark ? ' skill-icon--dark-logo' : ''}${isMono ? ' skill-icon--mono' : ''}`}
      title={label}
    >
      <span className="skill-icon__mark">
        <img
          key={src}
          src={src}
          alt=""
          className="skill-icon__img"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={handleError}
        />
      </span>
      {showLabel && <span className="skill-icon__label">{label}</span>}
    </div>
  )
}
